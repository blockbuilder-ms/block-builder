const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-font-load-before",
  async function (event) {
    appLoader.dom.loadGoogleFont(event.fontName);
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
