const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-plugin-deactivate-before",
  async function (event) {
    console.log("Deactivating plugin");
    let attrs = event.attributes;
    let plugin = attrs.plugin;

    let requestObject = await appLoader.request.make();

    requestObject.setUrl("/wp-json/block-builder/v1/plugin/" + plugin);

    requestObject.setBody({
      body: {},
    });

    let result = await appLoader.request.delete(requestObject);

    let response = await result.json();

    // Request was not 200 succes
    if (response.status !== 200) {
      appLoader.notification.error(response.response, 2500);
      return;
    }

    // request was an succes
    appLoader.notification.succes(response.response, 2500);

    let container = document.querySelector("#plugins");

    setTimeout(async () => {
      let loadedItems = document.querySelectorAll(".modal [x-loaded]");
      let size = loadedItems.length;

      while (size--) {
        let lItem = loadedItems[size];

        if (!lItem || "object" !== typeof lItem || container === lItem) {
          continue;
        }

        let template = await window.getAppLoader().template.get("spinner");

        lItem.removeAttribute("x-loaded");
        lItem.innerHTML = "";
        lItem.appendChild(template);
      }

      let shouldLoadData = container.hasAttribute("x-lazyload") ? true : false;
      let key = shouldLoadData ? container.getAttribute("x-lazyload") : false;
      let space = container.hasAttribute("x-space")
        ? container.getAttribute("x-space")
        : false;

      if (shouldLoadData) {
        await appLoader.request.loadData(key, container, space, true);
      }

      appLoader.loadActions();

      appLoader.request.loadData(
        "lazyload--plugin--modals",
        document.querySelector('[x-lazyload="lazyload--plugin--modals"]'),
        "admin",
        true
      );

      appLoader.request.loadData(
        "lazyload--block--templates",
        document.querySelector('[x-lazyload="lazyload--block--templates"]'),
        "admin",
        true
      );
      appLoader.request.loadData(
        "lazyload--control--templates",
        document.querySelector('[x-lazyload="lazyload--control--templates"]'),
        "admin",
        true
      );
    });

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
