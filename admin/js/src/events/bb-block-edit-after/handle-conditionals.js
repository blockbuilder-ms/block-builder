const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-edit-after",
  async function (event) {
    event.controller.applyConditions(event.block);
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
