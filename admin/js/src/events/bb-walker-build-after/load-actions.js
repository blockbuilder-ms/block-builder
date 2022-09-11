const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-walker-build-after",
  async function (event) {
    appLoader.loadActions();
    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
