/**
 * Registers extensions with the core application
 */
document.addEventListener("bb-before-load", function () {
  const appLoader = window.getAppLoader();
});

document.addEventListener("bb-builder-load-before", function () {
  // Block editor have now done initial load.
});
