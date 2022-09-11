/**
 * Customizeable and dynamic context menu.
 */
class BBContext {
  constructor() {
    this.scope = document;
    this._load();
  }

  /**
   * Loads in the context feature
   */
  _load() {
    const self = this;
    const frame = self.scope.querySelector("#builder-frame");
    self.container = self.scope.getElementById("context-menu");

    if (frame.contentWindow.document.body) {
      self.contentScope = frame.contentWindow.document;

      self.contentScope.addEventListener("contextmenu", (event) => {
        if (event.ctrlKey) {
          return;
        }

        self.contentScope.addEventListener("click", function () {
          self.container.classList.add("opacity-0");
          setTimeout(() => {
            self.container.classList.add("hidden");
          }, 200);
        });

        return self._processContextRequest(event);
      });
      return;
    }

    frame.addEventListener("load", async function () {
      self.contentScope = frame.contentWindow.document;

      self.contentScope.addEventListener("contextmenu", (event) => {
        if (event.ctrlKey) {
          return;
        }

        self.contentScope.addEventListener("click", function () {
          self.container.classList.add("opacity-0");
          setTimeout(() => {
            self.container.classList.add("hidden");
          }, 200);
        });

        return self._processContextRequest(event);
      });
    });

    document.addEventListener("contextmenu", (event) => {
      if (event.ctrlKey) {
        return;
      }

      document.addEventListener("click", function () {
        self.container.classList.add("opacity-0");

        setTimeout(() => {
          self.container.classList.add("hidden");
        }, 200);
      });

      return self._processContextRequest(event);
    });
  }

  /**
   * Processes the context request, builds up the list dynamicly all depending on the items
   * currently found on the path of the click.
   *
   * @param {object} event
   */
  async _processContextRequest(event) {
    const self = this;
    const { clientX: mouseX, clientY: mouseY } = event;

    if (!self.container) {
      console.log("No container was found for context menu");
      return false;
    }
    /**
     * Use event to dynamicly fill up the context all depending on dynamic
     * scenarios, which can be altered.
     */
    await window.getAppLoader().event.emit("bb-context-display-before", {
      event: event,
      container: self.container,
    });

    /**
     * Use event to dynamicly fill up the context all depending on dynamic
     * scenarios, which can be altered.
     */
    await window.getAppLoader().event.emit("bb-context-spawn-before", {
      event: event,
      container: self.container,
    });

    if (self.container.querySelector("[x-context]").innerHTML === "") {
      if (!self.container.classList.contains("hidden")) {
        self.container.classList.add("opacity-0");
        self.container.classList.add("hidden");
      }
      return;
    }

    event.preventDefault();

    self.container.style.top = `${mouseY}px`;
    self.container.style.left = `${mouseX}px`;
    self.container.classList.remove("hidden");

    setTimeout(() => {
      self.container.classList.remove("opacity-0");
    }, 50);

    /**
     * Allow for further actions after spawn, whether it be notifications
     * or other informational actions.
     */
    window.getAppLoader().event.emit("bb-context-spawn-after", {
      event: event,
      container: self.container,
    });
  }

  async _despawn() {
    const self = this;
    const { clientX: mouseX, clientY: mouseY } = event;

    if (!self.container) {
      console.log("No container was found for context menu");
      return false;
    }
    /**
     * Use event to dynamicly fill up the context all depending on dynamic
     * scenarios, which can be altered.
     */
    await window.getAppLoader().event.emit("bb-context-fade-before", {
      container: self.container,
    });

    self.container.classList.add("opacity-0");

    /**
     * Use event to dynamicly fill up the context all depending on dynamic
     * scenarios, which can be altered.
     */
    await window.getAppLoader().event.emit("bb-context-hide-before", {
      container: self.container,
    });

    setTimeout(() => {
      self.container.classList.add("hidden");
    }, 250);

    /**
     * Allow for further actions after spawn, whether it be notifications
     * or other informational actions.
     */
    window.getAppLoader().event.emit("bb-context-hide-after", {
      container: self.container,
    });
  }
}

export default BBContext;
