const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-column-append-before",
  async function (event) {
    let attrs = event.attributes;
    let location = attrs.location;
    let columns = attrs.columns;

    if (!columns || !location) {
      return false;
    }

    let split = columns.split("-");
    let count = parseInt(split[0]);
    let max = parseInt(split[0]);
    let layout = split[1];
    let columnsArr = [];
    let inner = false;
    let root = await appLoader.dom.get("#" + location, true);

    if (!root || root.length === 0) {
      inner = true;
      root = await appLoader.dom.get("[data-id='" + location + "']", true);
    }

    if (!root || root.length === 0) {
      console.log("root was not found");
      return false;
    }

    if (root[0]) {
      root = root[0];
    }

    let target = root.querySelector("[x-action='drop']");

    if (!target) {
      console.log("Target not found");
      return false;
    }

    if (layout.indexOf("(") !== -1) {
      // advanced
      layout = layout.replace("(", "");
      layout = layout.replace(")", "");
      columnsArr = layout.split("/");
    } else {
      // simple
      for (let i = 0; i < max; i++) {
        columnsArr.push(layout);
      }
    }

    const template = await appLoader.template.get("core:row");
    let row;
    if (!inner) {
      const block = await appLoader.block.make("core:row", template);
      row = await appLoader.dom.append(
        block,
        target,
        await appLoader.block.structure("core:row")
      );
    } else {
      row = root;
    }

    while (max--) {
      let col = columnsArr[max];
      const template = await appLoader.template.get("core:column");
      const block = await appLoader.block.make("core:column", template);
      let structure = await appLoader.block.structure("core:column");
      structure.default.style.flex = "0 0 calc( " + col + "% - 30px);";
      structure.default.style["flex-wrap"] = "wrap";
      const result = await appLoader.dom.appendTo(block, row, structure);

      if (!result) {
        continue;
      }

      result.querySelector('[x-action="drop"]').setAttribute(
        "x-options",
        JSON.stringify({
          location: result.getAttribute("data-id"),
          root: location.replace("-wrap", ""),
        })
      );

      appLoader.loadIframeActions();
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
