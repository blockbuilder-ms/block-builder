const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-move_end-before",
  async function (event) {
    appLoader.state.dragItem.classList.remove(
      "scale-105",
      "border-2",
      "py-1",
      "px-2",
      "border-dark"
    );

    appLoader.state.dragItem = false;
    appLoader.state.currentTarget = false;

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
