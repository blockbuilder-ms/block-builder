const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-tab-spawn-before",
  async function (event) {
    let target = event.tabTarget || false;

    if (!target) {
      return false;
    }

    let shouldLazyload = target.hasAttribute("x-lazyload") ? true : false;
    let isLoaded = target.hasAttribute("x-loaded") ? true : false;
    let key = shouldLazyload ? target.getAttribute("x-lazyload") : false;
    let supressNotify = target.hasAttribute("x-notify")
      ? target.getAttribute("x-notify")
      : false;

    if (isLoaded) {
      return true;
    }

    if (!key) {
      return false;
    }

    setTimeout(async () => {
      let space = target.hasAttribute("x-space")
        ? target.getAttribute("x-space")
        : false;

      await appLoader.request.loadData(
        key,
        target,
        space,
        supressNotify === "true" ? true : false
      );
    }, 200);

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
