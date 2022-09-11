const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-add-before",
  async function (event) {
    let rootId = event.attributes.location;

    if (!rootId) {
      // No root id

      return;
    }

    let node = await appLoader.dom.get("#" + rootId, true);
    if (!node) {
      node = await appLoader.dom.get("[data-id='" + rootId + "']", true);

      if (node[0]) {
        node = node[0];
      }
    }

    if (!node) {
      console.error("Cannot spawn column chooser - no container");
      return false;
    }

    let children = node.childNodes;

    for (let i in children) {
      let child = children[i];
      if ("object" !== typeof child) {
        continue;
      }

      if (child.classList && child.classList.contains("standard-view")) {
        child.classList.add("hidden");
      }

      if (child.classList && child.classList.contains("column-view")) {
        child.classList.remove("hidden");
        setTimeout(function () {
          child.classList.remove("opacity-0");
        }, 5);
      }
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
