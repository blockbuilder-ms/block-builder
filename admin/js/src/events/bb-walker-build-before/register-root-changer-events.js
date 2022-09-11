const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-walker-build-before",
  function (event) {
    let sel = document.querySelector('[name="block-tag-entry"]');

    sel.classList.add("hydrated");
    if (!sel.onchange) {
      sel.onchange = onChange;
    }

    function onChange() {
      appLoader.event.emit("bb-walker-build-before", {
        data: sel.value,
        changeEvent: true,
      });
    }

    if (!event.changeEvent) {
      sel.value = "content";
    } else {
      sel.value = event.data;
    }

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
