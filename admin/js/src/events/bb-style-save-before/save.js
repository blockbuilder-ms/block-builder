const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-style-save-before",
  async function (event) {
    console.log("Saving style");
    let requestObject = await appLoader.request.make();
    requestObject.setUrl(
      "/wp-json/block-builder/v1/post/style/" + appLoader.post.ID
    );
    requestObject.setBody({
      body: {
        style: event.data,
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
