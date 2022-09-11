const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-edit-after",
  async function (event) {
    appLoader.loadActions();
    event.controller.hydrate();
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
