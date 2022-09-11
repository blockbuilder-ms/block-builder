const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-loaded-before",
  async function (event) {
    if (appLoader.settings.settings.auto_save) {
      console.log(
        "Autosave is turned on and set to auto save each " +
          appLoader.settings.settings.auto_save_interval +
          " seconds"
      );

      setInterval(function () {
        appLoader.event.emit("bb-builder-save-before", {
          attributes: {
            srcEventElement: document.getElementById("bb-builder-save"),
          },
        });
        appLoader.notification.information("Autosaving.", 2500);
      }, appLoader.settings.settings.auto_save_interval * 1000);
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
