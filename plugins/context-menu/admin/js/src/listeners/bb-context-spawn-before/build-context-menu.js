const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-context-spawn-before",
  async function (event) {
    // Succes
    // TODO: Change original event name of event in here so its not event.event
    let container = event.container.querySelector("[x-context]");
    let blockObj = event.event.target;
    container.innerHTML = "";
    await contextWalker(blockObj, event);
    await appLoader.loadActions();

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);

async function contextWalker(blockObj, event) {
  if (!blockObj || !blockObj.classList || blockObj.tagName === "BODY") {
    return false;
  }
  let container = event.container.querySelector("[x-context]");

  if (blockObj.classList.contains("standard-view")) {
    console.log("Root exploring");
    let elem = await contextBuild(
      "item",
      "Settings",
      {},
      blockObj.getAttribute("data-id")
    );
    container.appendChild(elem);

    return true;
  }

  if (!blockObj.hasAttribute("data-id")) {
    await contextWalker(blockObj.parentNode, event);
    return true;
  }

  let id = blockObj.getAttribute("data-id");
  let blockData = await appLoader.dom.find(id);

  if (blockData.context) {
    let title = blockData.tag.split(":")[1];
    let elem = await contextBuild(
      "dropdown",
      title.charAt(0).toUpperCase() + title.substring(1),
      blockData.context,
      blockObj.getAttribute("data-id")
    );

    container.appendChild(elem);
  }

  await contextWalker(blockObj.parentNode, event);

  return true;
}

async function contextBuild(type, label, attrs, id) {
  //
  let template;
  switch (type) {
    case "item":
      //
      template = await appLoader.template.get("context-menu-item");

      template.innerHTML = template.innerHTML.replace("{label}", label);

      for (let i in attrs) {
        let attr = attrs[i];
        template.setAttribute(i, attr);
      }

      return template;
      break;

    case "dropdown":
      //
      template = await appLoader.template.get("context-dropdown-menu-item");
      template.innerHTML = template.innerHTML.replace("{label}", label);

      for (let i in attrs) {
        if (i === "items") {
          continue;
        }

        let attr = attrs[i];
        template.setAttribute(i, attr);
      }

      if (attrs.items) {
        for (let j in attrs.items) {
          let item = attrs.items[j];
          let obj = await appLoader.template.get("context-menu-item");
          obj.innerHTML = obj.innerHTML.replace("{label}", item.label);

          if (item.attrs) {
            item.attrs["x-options"] = JSON.stringify({
              ...JSON.parse(item.attrs["x-options"]),
              ...{
                attributes: { item: id },
              },
            });

            for (let i in item.attrs) {
              let attr = item.attrs[i];
              obj.setAttribute(i, attr);
            }
          }

          template.querySelector("[x-target]").appendChild(obj);
        }

        return template;
      }

      break;

    default:
      appLoader.event.emit(`bb-context-build-${label}`);
  }
}
