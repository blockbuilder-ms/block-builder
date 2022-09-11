const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-control-hidden_change-before",
  async function (event) {
    //
    let target = event.node;
    let value = target.value;
    let name = target.name;
    let extra = document.querySelector("[name='" + name + "-type']");
    let block = event.controller.block;

    appLoader.dom.performUpdate(block, name, value, extra);
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
