const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-walker-build-before",
  async function (event) {
    let id = event.data;
    let options = {};

    let walker = document.getElementById("builder-walker");
    if (["*", "content", "header", "footer"].indexOf(id) === -1) {
      walker.innerHTML = walker.innerHTML.replaceAll("{id}", id);
      options = await window.getAppLoader().dom.find(id);
      walker.innerHTML = walker.innerHTML.replaceAll(
        "{tag}",
        options.tag.split(":")[1]
      );
      options.root = true;
      document.querySelector('[x-if="all"]').classList.add("hidden");
    } else {
      walker.innerHTML = walker.innerHTML.replaceAll("{id}", "content");
      walker.innerHTML = walker.innerHTML.replaceAll("{tag}", id);
      if (id === "*") {
        options = await window.getAppLoader().dom.find(id);
      } else {
        options = await window.getAppLoader().dom.structuredData[id];

        if (options[0]) {
          options = options[0];
        }
      }

      document.querySelector('[x-if="all"]').classList.remove("hidden");
    }
    walker.querySelector("[x-content]").innerHTML = "";

    if (id === "*") {
      if (options.header.length > 0) {
        appendWalkerTitle(walker, "Header");
        for (let i in options.header) {
          let walkerObject = await buildWalkerObject(options.header[i]);
          appendWalkerObject(walker, walkerObject);
        }
      }

      if (options.content.length > 0) {
        appendWalkerTitle(walker, "Content");
        for (let i in options.content) {
          walkerObject = await buildWalkerObject(options.content[i]);
          appendWalkerObject(walker, walkerObject);
        }
      }

      if (options.footer.length > 0) {
        appendWalkerTitle(walker, "Footer");
        for (let i in options.footer) {
          walkerObject = await buildWalkerObject(options.footer[i]);
          appendWalkerObject(walker, walkerObject);
        }
      }
    } else {
      walkerObject = await buildWalkerObject(options);
      appendWalkerObject(walker, walkerObject);
    }

    appLoader.event.emit("bb-walker-build-after");

    return true;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);

async function buildWalkerObject(options) {
  return await window.getAppLoader().dom.walkerFor(options);
}

function appendWalkerObject(walker, walkerObject) {
  if (!walkerObject || walkerObject.innerHTML === "") {
    let text = document.createElement("p");
    text.classList.add("text-sm", "w-full", "text-center");
    text.innerHTML =
      "Warning: We could not build a walker for the asked content";
    walker.querySelector("[x-content]").appendChild(text);

    return;
  }

  walker.querySelector("[x-content]").appendChild(walkerObject);
}

function appendWalkerTitle(walker, title) {
  let text = document.createElement("h3");
  text.classList.add("text-sm", "w-full", "text-center");
  text.innerHTML = title;
  walker.querySelector("[x-content]").appendChild(text);

  return;
}
