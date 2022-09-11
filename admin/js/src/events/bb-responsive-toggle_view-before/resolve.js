const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-responsive-toggle_view-before",
  async function (event) {
    let view = document.getElementById("responsive-view-bar");
    let frame = document.getElementById("builder-frame");
    let innerFrame = document.getElementById("iframe-inner-wrap");

    if (view.classList.contains("hidden")) {
      frame.style.height = "calc(100vh - 40px - 50px)";
      innerFrame.style.maxWidth = "1920px";
    } else {
      frame.style.height = "calc(100vh - 50px)";
      innerFrame.style.maxWidth = null;
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
