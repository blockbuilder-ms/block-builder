const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-synced-before",
  async function () {
    setTimeout(async () => {
      let rows = await appLoader.dom.get(".row", true);
      let size = rows.length;
      while (size--) {
        let row = rows[size];

        if (!row || "object" !== typeof row) {
          continue;
        }

        if (row.innerHTML === "") {
          // If empty add the column chooser template.
          let template = await appLoader.template.get("column-chooser-inner");
          template.innerHTML = template.innerHTML.replaceAll(
            "{name}",
            row.getAttribute("data-id")
          );

          row.innerHTML = template.innerHTML;
        } else {
          // Check if column chooser is there, and delete it.
          let chooser = row.querySelector(".column-chooser-inner");
          if (chooser) {
            chooser.parentNode.removeChild(chooser);
          }

          chooser = row.querySelector(".fixed-column-chooser");
          if (chooser && false === chooser.classList.contains("hidden")) {
            chooser.classList.add("opacity-0");
            setTimeout(() => {
              chooser.parentNode.removeChild(chooser);
            }, 200);
          }
        }
      }

      appLoader.loadIframeActions();
    });
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
