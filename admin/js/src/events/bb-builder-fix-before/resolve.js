const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-fix-before",
  async function (event) {
    let Context = await (
      await appLoader.error.byCode(event.attributes.ecode)
    )();

    if (Context.default) {
      let className = Context.default;
      Context = new className();
    }

    if (!(await Context.apply())) {
      appLoader.notification.error("Solution could not be applied.", 2500);
    }

    appLoader.notification.succes(
      "Solution was applied, Trying to load..",
      2500
    );
    // Reload the builder.
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
