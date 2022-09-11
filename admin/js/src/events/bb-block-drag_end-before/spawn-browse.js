const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-drag_end-before",
  function () {
    // Succes
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
