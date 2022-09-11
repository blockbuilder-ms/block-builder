const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-load-before",
  async function (event) {},
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
