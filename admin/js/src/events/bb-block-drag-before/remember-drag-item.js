const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-drag-before",
  function (e) {
    // Succes
    appLoader.state.dragItem = e.item;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
