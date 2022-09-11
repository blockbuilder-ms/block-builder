const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-post-save_settings-before",
  async function (event) {
    let requestObject = await appLoader.request.make();
    let button = event.attributes.srcEventElement;
    let settings = {};
    let settingsObjs = document.querySelectorAll("[x-page-setting]");
    let size = settingsObjs.length;

    while (size--) {
      let setting = settingsObjs[size];

      if (
        !setting.hasAttribute("name") ||
        setting.getAttribute("name") === null
      ) {
        continue;
      }

      if (
        setting.tagName === "INPUT" &&
        (setting.type === "checkbox" || setting.type === "radio")
      ) {
        settings[setting.getAttribute("name")] = setting.checked;
      } else {
        settings[setting.getAttribute("name")] = setting.value;
      }
    }

    requestObject.setUrl(
      "/wp-json/block-builder/v1/post/" + postObject.ID + "/settings"
    );

    requestObject.setBody({
      body: settings,
    });

    let response = await appLoader.request.put(requestObject);

    // Request was not 200 succes
    if (response.status !== 200) {
      appLoader.notification.error(response.response, 2500);
      return;
    }

    appLoader.notification.succes(response.response, 2500);

    // Update button
    button.classList.add("saved");
    setTimeout(() => {
      // Revert to normal button again.
      button.classList.remove("saved");
    }, 2500);

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
