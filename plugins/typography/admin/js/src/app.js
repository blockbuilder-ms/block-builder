/**
 * Registers extensions with the core application
 */
document.addEventListener("bb-before-load", function () {
  const appLoader = window.getAppLoader();
  appLoader.filter.add(
    "bb-actions-load",
    function (entries) {
      entries["font-picker"] = () => import("./actions/font-picker/module");

      return entries;
    },
    10
  );
});

document.addEventListener("bb-builder-load-before", function () {
  // Block editor have now done initial load.
});
