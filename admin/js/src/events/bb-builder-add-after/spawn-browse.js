const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-add-after",
  async function (e) {
    // Succes
    appLoader.state.addContainer = await appLoader.dom.get(
      '[data-id="' + e.attributes.location + '"]',
      true
    );

    if (appLoader.state.addContainer.length === 0) {
      appLoader.state.addContainerRoot = true;
      appLoader.state.addContainer = await appLoader.dom.get(
        "#" + e.attributes.location,
        true
      );
    }

    if (!appLoader.state.addContainer) {
      console.error("We did not find the container you are asking for.");
      appLoader.notification.error("We ran into an issue..");
      return false;
    }

    appLoader.action
      .withOptions({
        id: "builder-browse-modal",
      })
      .run("modal", "builder-browse-modal");
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
