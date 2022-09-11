const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-event-action-before",
  async function (event) {
    appLoader.context._despawn();

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
