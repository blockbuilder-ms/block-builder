const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-header-save-before",
  async function (event) {
    console.log("Saving header");
    let html = await appLoader.dom.build(event.data);

    let requestObject = await appLoader.request.make();

    requestObject.setUrl(
      "/wp-json/block-builder/v1/post/header/" + appLoader.post.ID
    );

    event.data = event.data.filter(function (entry) {
      return entry !== null;
    });

    requestObject.setBody({
      body: {
        html: html,
        structure: event.data,
      },
    });

    let response = await appLoader.request.put(requestObject);

    // Request was not 200 succes
    if (response.status !== 200) {
      appLoader.notification.error(response.response, 2500);
      return;
    }

    // request was an succes
    appLoader.notification.succes(response.response, 2500);

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
