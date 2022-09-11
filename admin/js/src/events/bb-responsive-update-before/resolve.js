const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-responsive-update-before",
  async function (event) {
    let frame = document.getElementById("iframe-inner-wrap");
    let viewport = document.getElementById("viewport");

    let dimension = viewport.value;
    frame.style.maxWidth = dimension + "px";
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
