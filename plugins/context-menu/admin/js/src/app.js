/**
 * Registers extensions with the core application
 */
document.addEventListener("bb-before-load", function () {
  const appLoader = window.getAppLoader();
  // Block editor have now done initial load.
  appLoader.filter.add("bb-core-load", function (entries) {
    entries.context = import("./core/context");
    return entries;
  });
});

document.addEventListener("bb-builder-load-before", async function () {
  // Block editor have now done initial load.
  let listeners = import("./listeners/");
  (await listeners).default;
});
