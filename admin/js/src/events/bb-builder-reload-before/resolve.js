const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-reload-before",
  async function (event) {
    location.reload();
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
