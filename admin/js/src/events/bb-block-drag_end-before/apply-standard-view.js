const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-drag_end-before",
  function () {
    // Succes
    let iframe = document.querySelector("#builder-frame");

    let standard =
      iframe.contentWindow.document.body.querySelectorAll(".standard-view");
    let dragView =
      iframe.contentWindow.document.body.querySelectorAll(".drag-view");

    let stdSize = standard.length;
    let dragSize = dragView.length;

    while (dragSize--) {
      hide(dragView[dragSize]);
    }

    setTimeout(function () {
      while (stdSize--) {
        show(standard[stdSize]);
      }
    }, 150);
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);

function hide(element) {
  element.classList.add("opacity-0");

  setTimeout(function () {
    element.classList.add("hidden");
  }, 200);
}

function show(element) {
  element.classList.remove("hidden");

  setTimeout(function () {
    element.classList.remove("opacity-0");
  }, 50);
}
