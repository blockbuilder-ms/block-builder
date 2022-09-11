const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-media-open-before",
  async function (event) {
    // Create
    console.log(event);
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
