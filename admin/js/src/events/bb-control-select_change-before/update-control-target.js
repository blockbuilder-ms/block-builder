/**
 * Fetches an instance of the application loader
 *
 * @var {object}
 */
const appLoader = window.getAppLoader();

/**
 * Event performed each time a succesfull change event is being
 * emitted from select fields.
 *
 * @param {object} event Modified event for the specific scenario
 * @return {void}
 */
appLoader.event.on(
  "bb-control-select_change-before",
  async function (event) {
    let target = event.node;
    let value = target.value;
    let name = target.name;
    let extra = document.querySelector("[name='" + name + "-type']");

    let block = event.controller.block;
    console.log(block);

    if (
      target.hasAttribute("x-standalone") &&
      target.getAttribute("x-standalone") === "true"
    ) {
      console.log(
        "Standalone event: bb-builder-control-select-" + name + "-change"
      );
      appLoader.event.emit("bb-builder-control-select-" + name + "-change", {
        block: block,
        node: target,
        controller: event.controller,
      });
      return;
    }

    appLoader.dom.performUpdate(block, name, value, extra);
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
