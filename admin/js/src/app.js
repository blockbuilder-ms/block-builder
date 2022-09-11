/**
 * Admin facing javascript code execution.
 */
let core = import("./core/");

class AppLoader {
  constructor(core) {
    this.state = {};
    this.references = {};
    this.selector = "x-action";

    this.actions = [
      "tab",
      "accordion-toggle",
      "modal",
      "event",
      "drop",
      "drag",
    ];

    this.core = core;
  }

  async applyActionUpdates() {
    this.library = (await import("./actions/")).default;
  }

  async loadCore() {
    // Loading it asynchronously.
    let extension = this.core["filter"];

    extension = (await extension).default;
    let ext = new extension();
    this.filter = ext;

    extension = this.core["event"];

    extension = (await extension).default;
    ext = new extension();

    this.event = ext;

    this.core = await this.filter.apply("bb-core-load", this.core);

    for (let i in this.core) {
      let extension = this.core[i];

      if (!extension || i === "filter" || i === "event") {
        continue;
      }

      if (this[i]) {
        continue;
      }

      extension = (await extension).default;
      const ext = new extension();
      this[i] = ext;
    }
  }

  async loadActions() {
    let actions = document.querySelectorAll(
      "[" + this.selector + "]:not(.hydrated)"
    );
    let total = actions.length - 1;
    let size = actions.length;
    while (size--) {
      let action = actions[total - size];

      if ("object" !== typeof action) {
        continue;
      }

      let isMulti = action.hasAttribute("x-multi");
      let actionRef = action.getAttribute("x-action");
      if (isMulti) {
        try {
          actionRef = JSON.parse(actionRef);
          let actionSize = actionRef.length;

          while (actionSize--) {
            await this._load(actionRef[actionSize], action);
          }
          action.classList.add("hydrated");
        } catch (e) {
          console.log(e);
          continue;
        }
      } else {
        if (await this._load(actionRef, action)) {
          action.classList.add("hydrated");
        }
      }
    }

    return true;
  }

  async _load(actionRef, action, isDirect) {
    let options;

    if ("undefined" === typeof this.library[actionRef]) {
      console.log("Failed to find the action " + actionRef);
      return false;
    }

    if (action.hasAttribute("x-options")) {
      options = action.getAttribute("x-options");

      try {
        options = JSON.parse(options);
      } catch (e) {
        options = {};
      }
    }

    let className = (await this.library[actionRef]()).default;
    const instance = new className(action, this.core, isDirect);

    if (options && options["data-id"]) {
      this.references[options["data-id"]] = instance;
    }

    return instance;
  }

  async loadIframeActions() {
    const self = this;
    let iframe = document.querySelector("#builder-frame");
    if (iframe.contentWindow.document.body) {
      await self._loadIframeActions(iframe.contentWindow.document.body);
      return;
    }

    iframe.addEventListener("load", async function () {
      await self._loadIframeActions(iframe.contentWindow.document.body);
    });
  }

  async _loadIframeActions(body) {
    const self = this;
    let actions = body.querySelectorAll(
      "[" + self.selector + "]:not(.hydrated)"
    );

    let total = actions.length;
    let size = total + 1;
    while (size--) {
      let action = actions[total - size];

      if ("object" !== typeof action) {
        continue;
      }

      action.classList.add("hydrated");
      let actionRef = action.getAttribute("x-action");

      if ("undefined" === typeof self.library[actionRef]) {
        console.log("Failed to find the action " + actionRef);
        continue;
      }

      // console.log("Loaded action: " + actionRef);
      let className = (await self.library[actionRef]()).default;
      new className(action, self.core);
    }
  }
}

let BBappLoader;

function getAppLoader() {
  return BBappLoader;
}

window.getAppLoader = getAppLoader;

document.addEventListener("DOMContentLoaded", async function () {
  /**
   * Initialize app loader
   */
  BBappLoader = new AppLoader((await core).default);

  /**
   * Load core if needed
   */
  await BBappLoader.loadCore();
  await BBappLoader.applyActionUpdates();
  import("./events");

  /**
   * Load actions now that we have let others manipulate.
   */
  BBappLoader.event.emit("bb-builder-load-before");

  let coreLazyloads = document.querySelectorAll("body > [x-lazyload]");
  let lazyloadStack = coreLazyloads.length;

  while (lazyloadStack--) {
    let item = coreLazyloads[lazyloadStack];

    if (!item || "object" !== typeof item) {
      continue;
    }

    BBappLoader.request.loadData(
      item.getAttribute("x-lazyload"),
      item,
      "admin",
      true
    );
  }

  let allLazyloads = document.querySelectorAll("[x-lazyload]:not([x-loaded])");
  lazyloadStack = allLazyloads.length;

  while (lazyloadStack--) {
    let item = allLazyloads[lazyloadStack];

    if (!item || "object" !== typeof item) {
      continue;
    }

    if (item.hasAttribute("x-on")) {
      let xOn = item.getAttribute("x-on");

      try {
        let res = JSON.parse(xOn);

        if (res) {
          xOn = res;
        }
      } catch (e) {
        return false;
      }

      let name = xOn.name;
      let onSplit = xOn.on.split("|");
      let equal = xOn.equal;

      let entry = onSplit[0].replace("@", "");
      let attribute = onSplit[1];
      let attributeEntry = onSplit[2];

      if (name) {
        BBappLoader.event.on(
          name,
          function (event) {
            let obj = event[entry];
            if (!obj) {
              return false;
            }

            let objAttribute = obj.hasAttribute(attribute)
              ? obj.getAttribute(attribute)
              : false;
            let options;
            try {
              options = JSON.parse(objAttribute);
            } catch (e) {
              return false;
            }

            if (options[attributeEntry] && options[attributeEntry] === equal) {
              BBappLoader.request.loadData(
                item.getAttribute("x-lazyload"),
                item,
                "admin",
                true
              );
            }
          },
          function () {
            //
          },
          document
        );
      }
    }
  }

  await BBappLoader.dom.load();
  if (!BBappLoader.state.error) {
    await BBappLoader.loadIframeActions();
    await BBappLoader.loadActions();
    await BBappLoader.settings.load();

    let interval = setInterval(function () {
      if (BBappLoader.settings.loaded === true) {
        BBappLoader.event.emit("bb-builder-loaded-before");
        clearInterval(interval);
      }
    }, 300);
  }

  if (BBappLoader.state.error) {
    document.getElementById("loading-message").innerHTML =
      BBappLoader.state.error_message;

    let button = document.getElementById("error-fix-button");
    let viewPageButton = document.getElementById("error-view-page");
    let reloadButton = document.getElementById("reload-button");

    button.classList.remove("hidden");
    viewPageButton.classList.remove("hidden");
    reloadButton.classList.remove("hidden");
    setTimeout(() => {
      button.classList.remove("opacity-0");
      viewPageButton.classList.remove("opacity-0");
      reloadButton.classList.remove("opacity-0");
    });
  }
});
