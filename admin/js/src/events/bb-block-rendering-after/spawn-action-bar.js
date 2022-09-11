const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-rendering-after",
  async function (event) {
    // let current = event.blockObject.querySelector(".action-bar");

    // if (
    //   !current &&
    //   event.block &&
    //   "undefined" !== typeof event.block.showActionBar
    // ) {
    //   let template = await appLoader.template.get("action-bar");

    //   template.innerHTML = template.innerHTML.replaceAll(
    //     "{id}",
    //     event.block["data-id"]
    //   );

    //   event.blockObject.appendChild(template);

    //   appLoader.loadActions();
    //   appLoader.loadIframeActions();
    // }

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
