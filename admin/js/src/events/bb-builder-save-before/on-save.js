const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-save-before",
  async function (event) {
    let button = event.attributes.srcEventElement;

    appLoader.dom.save();

    // Update button
    button.classList.add("saved");
    setTimeout(() => {
      // Revert to normal button again.
      button.classList.remove("saved");
    }, 2500);
    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
