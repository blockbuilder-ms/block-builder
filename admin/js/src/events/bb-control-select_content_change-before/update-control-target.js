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
  "bb-builder-control-select_content_change-before",
  async function (event) {
    if (event.block.tag === "core:navigation") {
      // Advanced spawn mode for navigation menu.
      // 1. Make request to get items of the navigation
      // 2. Make blocks with navigation items to put into it.
      // 3. Update the structured data with the new blocks.
      // 4. Sync dom
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
