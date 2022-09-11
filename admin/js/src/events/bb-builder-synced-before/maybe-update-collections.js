const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-synced-before",
  function (event) {
    let sel = document.querySelector('[name="block-tag-entry"]');

    appLoader.event.emit("bb-walker-build-before", {
      data: sel.value ? sel.value : "content",
      changeEvent: true,
    });

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
