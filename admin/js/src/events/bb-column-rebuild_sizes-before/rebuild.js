const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-column-rebuild_sizes-before",
  async function (event) {
    console.log("rebuilding columns");
    let requestObject = await appLoader.request.make();

    requestObject.setUrl("/wp-json/block-builder/v1/columns/rebuild");
    requestObject.setBody({
      body: {},
    });

    let response = await appLoader.request.post(requestObject);

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
