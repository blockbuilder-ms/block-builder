const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-loaded-before",
  async function (event) {
    let ui = document.getElementById("load-ui");
    ui.classList.add("opacity-0");
    setTimeout(() => {
      ui.classList.add("hidden");
    }, 100);
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
