const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-builder-synced-before",
  async function () {
    let columns = await appLoader.dom.get(".col[x-inner-content]", true);
    let stackSize = columns.length;

    while (stackSize--) {
      let column = columns[stackSize];

      if (!column || "object" !== typeof column) {
        continue;
      }

      let id = column.getAttribute("data-id");
      let block = await appLoader.dom.find(id);

      // 1. Check if it has add element.
      let addBlock = Object.values(column.children).filter(function (node) {
        return (
          node.hasAttribute("x-action") &&
          node.getAttribute("x-action") === "drop"
        );
      });

      let hasAddBlock = addBlock.length > 0;
      if (!hasAddBlock) {
        // Append add block element
      }

      // Check if it has content
      let hasContent = block && block.content && block.content.length > 0;

      if (!hasContent) {
        // if not make sure its shown without drag
        let entry = addBlock[0];

        if (entry.classList.contains("hidden")) {
          entry.classList.remove("hidden");
        }

        if (entry.classList.contains("opacity-0")) {
          entry.classList.remove("opacity-0");
        }
      } else {
        // if it does have content it should only display on drag.
        let entry = addBlock[0];

        if (!entry.classList.contains("hidden")) {
          entry.classList.add("hidden");
        }

        if (!entry.classList.contains("opacity-0")) {
          entry.classList.add("opacity-0");
        }
      }
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
