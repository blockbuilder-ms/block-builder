const uuidv4 = require("uuid").v4;

/**
 * DOM Class
 *
 * Will handle dom activity on the iframe, using native javascript
 * for best performance.
 */
class Dom {
  constructor() {
    /**
     * Holds our doms data in a structureable and workable format
     *
     * @var {array}
     */
    this.structuredData = {
      header: [],
      content: [],
      footer: [],
    };

    this._registerDocumentReference();
  }

  load() {
    const self = this;

    if (
      !structuredData.header &&
      !structuredData.content &&
      !structuredData.footer
    ) {
      console.log("No structured data");
      return;
    }

    let structuredLocalData = structuredData;

    if (
      postObject.post_content !== "" &&
      structuredLocalData.content.length === 0
    ) {
      window.getAppLoader().state.error = true;
      window.getAppLoader().state.error_message =
        "Post has data, but no structured content.</br>Either the page is malformed or the page has been build using another builder.</br><strong class='text-xs'>Note: Applying the fix will overwrite the current content of the page</strong>";

      return;
    }

    if (structuredLocalData.content.length > 0) {
      window.getAppLoader().event.on("bb-builder-loaded-before", function () {
        self.structuredData = structuredLocalData;
        self.sync();
      });
    }
  }

  /**
   * Registers a reference to the iframe element
   * Saving it locally to be used later on.
   *
   * @return {void}
   */
  async _registerDocumentReference() {
    const self = this;
    const frame = document.querySelector("#builder-frame");

    if (frame.contentWindow.document.body) {
      self.head = frame.contentWindow.document.head;
      self.document = frame.contentWindow.document.body;
      self.root = frame.contentWindow.document;
      return;
    }

    frame.addEventListener("load", async function () {
      self.head = frame.contentWindow.document.head;
      self.document = frame.contentWindow.document.body;
      self.root = frame.contentWindow.document;
    });
  }

  /**
   * Fetches an element on the dom based on a universal
   * css selector using js native functionalities.
   *
   * @param {*} selector
   * @return {DomObject}
   */
  async get(selector, builderDom) {
    const self = this;
    let node;
    let scope;

    if (builderDom) {
      scope = self.root;
    } else {
      scope = document;
    }

    if (selector.indexOf("#") !== -1 && selector.indexOf(" ") === -1) {
      // This is an ID
      node = scope.getElementById(selector.replace("#", ""));
    } else if (selector.indexOf("#") !== -1 && selector.indexOf(" ") !== -1) {
      node = scope.querySelector(selector);
    } else {
      node = scope.querySelectorAll(selector);
    }

    return node;
  }

  async insertBefore(block, id) {
    const self = this;
    let result;
    let collectionsHeader = self.structuredData.header;
    let collectionsContent = self.structuredData.content;
    let collectionsFooter = self.structuredData.footer;

    result = await self._insertBefore(block, id, collectionsHeader);
    if (result) {
      return result;
    }

    result = await self._insertBefore(block, id, collectionsContent);
    if (result) {
      return result;
    }

    result = await self._insertBefore(block, id, collectionsFooter);
    if (result) {
      return result;
    }

    return false;
  }

  async find(id) {
    const self = this;

    if (id === "*") {
      return {
        header: self.structuredData.header,
        content: self.structuredData.content,
        footer: self.structuredData.footer,
      };
    }

    let result = await self._find(id, "header");
    if (result) {
      return result;
    }

    result = await self._find(id, "content");
    if (result) {
      return result;
    }

    result = await self._find(id, "footer");
    if (result) {
      return result;
    }

    return false;
  }

  async _find(id, entry) {
    const self = this;
    let collections = self.structuredData[entry];

    return await self._walkAndLook(collections, id);
  }

  async delete(id, softDelete) {
    const self = this;
    console.log(softDelete);
    let result = await self._delete(
      self.structuredData["header"],
      id,
      softDelete
    );
    if (result) {
      self.structuredData["header"] = self.structuredData["header"].filter(
        function (entry) {
          console.log(entry);
          return "object" === typeof entry;
        }
      );

      if (!softDelete) {
        self.sync("header");
      }
      return result;
    }

    result = await self._delete(self.structuredData["content"], id, softDelete);
    if (result) {
      self.structuredData["content"] = self.structuredData["content"].filter(
        function (entry) {
          return "object" === typeof entry;
        }
      );

      if (!softDelete) {
        self.sync("content");
      }
      return result;
    }

    result = await self._delete(self.structuredData["footer"], id, softDelete);
    if (result) {
      self.structuredData["footer"] = self.structuredData["footer"].filter(
        function (entry) {
          return "object" === typeof entry;
        }
      );
      if (!softDelete) {
        self.sync("footer");
      }
      return result;
    }

    return false;
  }

  async _delete(collections, id, softDelete) {
    const self = this;
    let success = false;

    for (let i in collections) {
      let collection = collections[i];

      if (!collection) {
        continue;
      }

      if (collection["data-id"] && collection["data-id"] === id) {
        delete collections[i];

        if (!softDelete) {
          let obj = self.document.querySelector("[data-id='" + id + "']");
          obj.parentNode.removeChild(obj);
        }

        return true;
      }

      if (collection.content && collection.content.length !== 0) {
        success = await self._delete(collection.content, id, softDelete);
      }
    }

    return success;
  }

  async duplicate(id) {
    const self = this;

    let result = await self._duplicate(self.structuredData["header"], id);
    if (result) {
      self.sync();
      return result;
    }

    result = await self._duplicate(self.structuredData["content"], id);

    if (result) {
      self.sync();
      return result;
    }

    result = await self._duplicate(self.structuredData["footer"], id);
    if (result) {
      self.sync();
      return result;
    }

    return false;
  }

  async _duplicate(collections, id) {
    const self = this;
    let success = false;

    for (let i in collections) {
      let collection = collections[i];

      if (!collection) {
        continue;
      }

      if (collection["data-id"] && collection["data-id"] === id) {
        let clone = structuredClone(collections[i]);
        clone = await self.regenerateIds([clone]);
        collections.push(clone[0]);

        return true;
      }

      if (collection.content && collection.content.length !== 0) {
        success = await self._duplicate(collection.content, id);
      }
    }

    return success;
  }

  async walkerFor(item) {
    let $template = await window.getAppLoader().template.get("walker-step");

    if (!$template || !item["data-id"]) {
      return false;
    }

    let options = $template.getAttribute("x-options");

    if (options) {
      options = JSON.parse(options);
      options.attributes.id = item["data-id"];
    }

    $template.setAttribute("x-options", JSON.stringify(options));

    $template.innerHTML = $template.innerHTML.replaceAll(
      "{id}",
      item["data-id"].substring(0, 12) + "..."
    );

    $template.innerHTML = $template.innerHTML.replaceAll(
      "{id-full}",
      item["data-id"] ? item["data-id"] : "N/A"
    );

    let json = JSON.stringify(item);

    $template.innerHTML = $template.innerHTML.replaceAll(
      "{block}",
      json.replaceAll('"', '\\"')
    );

    $template.innerHTML = $template.innerHTML.replaceAll(
      "{item}",
      item["data-id"]
    );

    $template.innerHTML = $template.innerHTML.replaceAll("{tag}", item.tag);

    let conditionals = $template.querySelectorAll("[x-if]");

    for (let i in conditionals) {
      let conditional = conditionals[i];

      if ("object" !== typeof conditional) {
        continue;
      }

      let conditionalEntry = conditional.getAttribute("x-if");
      if (!item[conditionalEntry]) {
        conditional.parentNode.removeChild(conditional);
      }
    }

    if (item.content && item.content.length !== 0) {
      let content = $template.querySelector("[x-content]");
      let items = structuredClone(item.content);
      items.reverse();

      for (let i in items) {
        if (!items[i] || "string" === typeof items[i]) continue;
        let s = structuredClone(items[i]);
        s.child = true;

        let node = await this.walkerFor(s);

        if (node === false) {
          continue;
        }

        content.appendChild(node);
      }
    }

    return $template;
  }

  async _walkAndLook(collections, id) {
    const self = this;
    let res = false;

    for (let i in collections) {
      let collection = collections[i];

      if (!collection) {
        continue;
      }

      if (collection["data-id"] && collection["data-id"] === id) {
        return collection;
      }

      if (collection.content) {
        let LR = await self._walkAndLook(collection.content, id);
        if (LR) {
          res = LR;
        }
      }
    }

    return res;
  }

  async _insertBefore(block, targetId, collections) {
    const self = this;
    let res = false;

    for (let i in collections) {
      let collection = collections[i];

      if (!collection) {
        continue;
      }

      if (collection["data-id"] && collection["data-id"] === block["data-id"]) {
        delete collections[i];
        let obj = self.document.querySelector(
          "[data-id='" + block["data-id"] + "']"
        );
        obj.parentNode.removeChild(obj);
      }

      if (collection.content && collection.content.filter) {
        collection.content = collection.content.filter((n) => n);
        let LR = await self._insertBefore(block, targetId, collection.content);
        if (LR) {
          res = LR;
        }
      }

      if (collection["data-id"] && collection["data-id"] === targetId) {
        if (collection.tag === block.dependencies[0]) {
          if (!collection.content || 0 === collection.content.length) {
            collection.content = [block];
          } else {
            collection.content.push(block);
          }
        } else {
          collections.splice(i, 0, block);
        }
        res = true;
      }
    }

    return res;
  }

  /**
   * Appends a block node to the builder editor
   *
   * @param {object} node
   * @param {object} nodeContainer
   * @param {object} nodeOptions
   * @param {bool} parent
   * @return {void}
   */
  async append(node, nodeContainer, nodeOptions, root, parent = false) {
    const document = this.document;
    let data;
    nodeOptions = structuredClone(nodeOptions);

    let options = nodeContainer.hasAttribute("x-options")
      ? JSON.parse(nodeContainer.getAttribute("x-options"))
      : {};

    let container;
    let rootLoc;

    if (options.location) {
      this.location = options.location;
      let idSelector = options.location.indexOf("#") !== -1;
      let selector = idSelector
        ? options.location
        : "[data-id='" + options.location + "']";

      container = document.querySelector(selector);

      if (!container) {
        console.log(options.location + " was not found");
        return;
      }

      nodeOptions["data-id"] = window.getAppLoader().block.generateId();
      if (nodeOptions && nodeOptions.dependencies) {
        data = await this._resolveDependencies(node, nodeOptions);
      }

      if (idSelector) {
        rootLoc = this.location.replace("#", "").replace("-wrap", "");
      } else {
        rootLoc = options.root;
      }

      await this.structuredData[rootLoc].push(data);

      await this.sync();

      return document.querySelector(
        '[data-id="' + nodeOptions["data-id"] + '"]'
      );
    }

    // We need to know where to append.
    if (!parent) {
      return this.append(
        node,
        nodeContainer.parentNode,
        nodeOptions,
        root,
        true
      );
    }

    return false;
  }

  /**
   * Appends a block node to the builder editor
   *
   * @param {object} node
   * @param {object} nodeContainer
   * @param {object} nodeOptions
   * @param {bool} parent
   * @return {void}
   */
  async appendTo(node, container, nodeOptions) {
    const document = this.document;

    try {
      nodeOptions = structuredClone(nodeOptions);
      nodeOptions["data-id"] = window.getAppLoader().block.generateId();
      let object = await this.find(container.getAttribute("data-id"));
      if (object.length === 0) {
        console.error("Did not find the container");
        return false;
      }

      if (!object.content) {
        object.content = [];
      }

      if (
        nodeOptions &&
        nodeOptions.dependencies &&
        nodeOptions.dependencies.indexOf(object.tag) === -1
      ) {
        console.log("dep not right");
        return false;
      }

      object.content.push(nodeOptions);
      await this.sync();

      let obj = document.querySelector(
        '[data-id="' + nodeOptions["data-id"] + '"]'
      );

      obj.setAttribute("x-action", "drag");

      obj.setAttribute(
        "x-option",
        JSON.stringify({
          emit: "bb-block-move-before",
          attributes: { id: nodeOptions["data-id"] },
        })
      );

      obj.setAttribute("draggable", true);

      return obj;
    } catch (e) {
      console.log(node);
      console.log(container);
      console.log(e);

      return false;
    }
  }

  async regenerateIds(collections) {
    const self = this;

    for (let i in collections) {
      let collection = collections[i];

      if (!collection) {
        continue;
      }

      collection["data-id"] = self.generateId();

      if (collection.content) {
        collection.content = await self.regenerateIds(collection.content);
      }
    }

    return collections;
  }

  performUpdate(block, name, value, extra) {
    const self = this;
    // At this point we must handle various types
    if (name.indexOf("@") !== -1) {
      _handleSubTarget(block);

      return;
    }

    if (name.indexOf(".") !== -1) {
      _handleTargetWithSteps(block);

      return;
    }

    _handleTarget();

    function _handleTarget() {
      block[name] = value;

      if (extra) {
        block[name] = [value, extra.value];
      } else {
        block[name] = value;
      }

      self.sync();
    }

    function _handleTargetWithSteps(block) {
      let steps = name.split(".");
      let target = block[steps[0]];
      if (steps.length === 2) {
        if (extra) {
          target[steps[1]] = [value, extra.value];
        } else {
          target[steps[1]] = value;
        }
      } else {
        let total = steps.length;
        let size = steps.length;

        while (size--) {
          let step = total - size;
          target = target[step];
        }

        if (extra) {
          target = [value, extra.value];
        } else {
          target = value;
        }
      }

      self.sync();
    }

    function _handleSubTarget(block) {
      // block[name] = value;
      // self.sync();

      let steps = name.split("|");
      let entry = steps[0].replace("@", "");
      let attributes = [steps[1]];
      if (steps[1].indexOf(".") !== -1) {
        attributes = steps[1].split(".");
      }

      if (!attributes) {
        return false;
      }

      let target = block[entry];

      if (attributes.length === 1) {
        if (extra) {
          target[attributes[0]] = [value, extra.value];
        } else {
          target[attributes[0]] = value;
        }
      } else {
        let total = attributes.length;
        let size = attributes.length;

        while (size--) {
          let step = total - size;
          target = attributes[step];
        }

        if (extra) {
          target = [value, extra.value];
        } else {
          target = value;
        }
      }

      self.sync();
    }
  }
  /**
   * Syncs the dom with the structured data
   *
   * @return {bool}
   */
  async sync(section) {
    // 1. prepare data
    const self = this;
    let data = self.structuredData;
    console.log("syncing");
    if (!section) {
      // 2. loop through structured data header
      // 2a. update header per data in the structured data header key "header"
      await self._sync(data.header, "header-wrap");

      // 3. loop through structured data content
      // 3a. update content per data in the structured data content key "content"
      await self._sync(data.content, "content-wrap");

      // 4. loop through structured data footer
      // 4a. update footer per data in the structured data footer key "footer"
      await self._sync(data.footer, "footer-wrap");
    }

    if (section) {
      await self._sync(data[section], section + "-wrap");
    }

    window.getAppLoader().event.emit("bb-builder-synced-before");
  }

  /**
   * Synchronizes a section of dom.
   *
   * @param {object} data
   * @param {string} where
   */
  async _sync(data, where) {
    const self = this;
    const document = self.document;
    let initial = false;
    const container = document.querySelector("#" + where.replace("#", ""));
    if (0 !== data.length && container.classList.contains("empty-view")) {
      container.innerHTML = "";
      container.classList.remove("empty-view");
      initial = true;
    }

    if (0 === data.length && container.innerHTML === "") {
      let template = await window.getAppLoader().template.get("no-content");
      if (template) {
        template.innerHTML = template.innerHTML.replace(
          "{name}",
          where.replace("#", "")
        );
        template.innerHTML = template.innerHTML.replace(
          "{type}",
          where.replace("#", "").replace("-wrap", "")
        );

        if (where.indexOf("content") !== -1) {
          template.innerHTML = template.innerHTML.replace(
            "{description}",
            "add blocks or a template to the page to remove this section of text."
          );
        } else {
          template.innerHTML = template.innerHTML.replace(
            "{description}",
            "If left empty it will not be shown on frontend."
          );
        }

        container.appendChild(template);
      }
    }

    await this._syncWalker(data, container, initial);
  }

  async _syncWalker(entries, container, initial) {
    const self = this;
    for (let i in entries) {
      let entry = entries[i];

      if (!entry) {
        continue;
      }

      let data;
      let layout;
      let defaultData;

      if (entry.multiStyle) {
        if (entry["x-layout"] && entry.default[entry["x-layout"]]) {
          layout = entry["x-layout"];
          data = entry;
          entry.layout = layout;
          defaultData = data.default[layout];
        } else {
          console.error("Layout was not found. Using default");
          data = entry;
          layout = "default";
          entry.layout = layout;
          defaultData = data.default.default;
        }
      } else {
        data = entry;
        defaultData = data.default;
      }

      let hasContent =
        "object" === typeof data.content && data.content.length !== undefined;

      /**
       * Emits event before rendering block
       */
      window.getAppLoader().event.emit("bb-before-rendering-block", {
        block: data,
      });

      let dObject = self.document.querySelector(
        "[data-id='" + data["data-id"] + "']"
      );

      // Valid id and already existing dom component
      if (data["data-id"] && dObject) {
        // Update
        for (let i in data.attributes) {
          let key = data.attributes[i];
          let value = data[key];

          if (key === "x-layout") {
            let template = await window
              .getAppLoader()
              .template.get(data.tag + "-" + value);

            if (!template || template.length === 0) {
              console.error("Layout was not found");
              continue;
            }

            dObject = self.document.querySelector(
              "[data-id='" + data["data-id"] + "']"
            );

            let parent = dObject.parentNode;

            if (!parent) {
              console.log("Parent not found", parent);
            }

            template.setAttribute("data-id", data["data-id"]);
            dObject.parentNode.replaceChild(template, dObject);

            dObject = self.document.querySelector(
              "[data-id='" + data["data-id"] + "']"
            );

            continue;
          }

          if (key === "x-hydrate") {
            if (!value) {
              continue;
            }
            console.log("hydrating", data);
            let hydrated = false;

            const appLoader = window.getAppLoader();
            appLoader.event.on("bb-builder-synced-before", async function () {
              if (hydrated) {
                return;
              }

              hydrated = true;
              let requestObject = await appLoader.request.make();
              requestObject.setUrl("/wp-json/" + value);

              let response = await appLoader.request.get(requestObject);

              // Request was not 200 succes
              if (response.status !== 200) {
                appLoader.notification.error(response.response, 2500);
                return;
              }

              if (response.body_response) {
                // Find x-keys of the current block
                let keyObjs = dObject.querySelectorAll("[x-key]");
                let slotObjs = dObject.querySelectorAll("[x-slot]");
                let keyCount = keyObjs.length - 1;
                let keyStack = keyObjs.length;
                let slotCount = slotObjs.length - 1;
                let slotStack = slotObjs.length;

                while (keyStack--) {
                  let obj = keyObjs[keyCount - keyStack];

                  if (!obj || "object" !== typeof obj) {
                    continue;
                  }

                  let key = obj.getAttribute("x-key");

                  if (key.indexOf(".") !== -1) {
                    // With steps
                    let steps = key.split(".");

                    if (steps.length === 0) {
                      continue;
                    }

                    let stepsCount = steps.length - 1;
                    let stepsStack = steps.length;
                    let reference = response.body_response;

                    while (stepsStack--) {
                      let step = steps[stepsCount - stepsStack];

                      if (!step) {
                        break;
                      }

                      if (!reference[step]) {
                        break;
                      }

                      reference = reference[step];
                    }

                    if (
                      "string" === typeof reference ||
                      "number" === typeof reference
                    ) {
                      if (
                        ["INPUT", "SELECT", "TEXTAREA"].indexOf(obj.tagName) !==
                        -1
                      ) {
                        obj.value = reference;
                      } else {
                        obj.innerHTML = reference;
                      }
                    } else {
                      console.log(reference);
                      console.log(typeof reference);
                    }
                  } else {
                    if (
                      ["INPUT", "SELECT", "TEXTAREA"].indexOf(obj.tagName) !==
                      -1
                    ) {
                      if (response.body_response[key]) {
                        obj.value = response.body_response[key];
                      }
                    } else {
                      console.log(key);
                      console.log(response.body_response[key]);

                      if (response.body_response[key]) {
                        obj.innerHTML = response.body_response[key];
                      }
                    }
                  }
                }

                while (slotStack--) {
                  let obj = slotObjs[slotCount - slotStack];

                  if (!obj || "object" !== typeof obj) {
                    continue;
                  }

                  let slot = obj.getAttribute("x-slot");

                  // A slot should be a key, value setup.
                  // i.e ["src", "attachments.post_thumbnail"]
                  try {
                    let slotData = JSON.parse(slot);

                    if (!slotData || slotData.length === 0) {
                      continue;
                    }

                    let prop = slotData[0];
                    let key = slotData[1];
                    let localTarget;

                    if (prop.indexOf("@") !== -1 && prop.indexOf("|") !== -1) {
                      let split = prop.replace("@", "").split("|");
                      prop = split[1];

                      if (split[0].indexOf(".") === -1) {
                        localTarget = obj.querySelector(split[0]);
                      }
                    } else {
                      localTarget = obj;
                    }

                    if (key.indexOf(".") !== -1) {
                      // With steps
                      let steps = key.split(".");

                      if (steps.length === 0) {
                        continue;
                      }

                      let stepsCount = steps.length - 1;
                      let stepsStack = steps.length;
                      let reference = response.body_response;

                      while (stepsStack--) {
                        let step = steps[stepsCount - stepsStack];

                        if (!step) {
                          break;
                        }

                        if (!reference[step]) {
                          break;
                        }

                        reference = reference[step];
                      }

                      if (
                        "string" === typeof reference ||
                        "number" === typeof reference
                      ) {
                        localTarget.setAttribute(prop, reference);
                      } else {
                        console.log(reference);
                        console.log(typeof reference);
                      }
                    } else {
                      // Without steps
                      if (response.body_response[key]) {
                        localTarget.setAttribute(
                          prop,
                          response.body_response[key]
                        );
                      }
                    }
                    console.log(slotData);
                  } catch (e) {
                    // Parsing error
                    console.error("Slot parsing error with object", obj);
                  }
                }
              }
            });

            await self._applyData(data.default[data.layout], dObject, data);

            continue;
          }

          if (key === "label") {
            if (dObject.hasAttribute("x-content")) {
              dObject.innerHTML = value;
            } else {
              let localObject = dObject.querySelector("[x-content]");
              if (!localObject) {
                console.log("Did not find content for: " + data.tag);
                continue;
              }
              localObject.innerHTML = value;
            }

            continue;
          }

          if (key && value) {
            if ("object" === typeof value) {
              let string = "";
              for (let j in value) {
                let name = j;
                let s = value[j];
                string +=
                  name + ":" + ("string" === typeof s ? s : s.join("")) + ";";
              }
              dObject.setAttribute(key, string);
            } else {
              dObject.setAttribute(key, value);
            }
          }
        }

        for (let i in data.structure) {
          let s = data.structure[i];
          let values = data[s];
          let childObject = dObject.querySelector(s);

          for (let j in data[s]) {
            let key = j;
            let value = data[s][j];
            if (key === "label") {
              if (childObject.hasAttribute("x-content")) {
                childObject.innerHTML = value;
              } else {
                childObject = childObject.querySelector("[x-content]");
                if (!childObject) {
                  console.log("Did not find content for: " + data.tag);
                  continue;
                }
                childObject.innerHTML = value;
              }

              continue;
            }

            if (key && value) {
              if ("object" === typeof value) {
                let string = "";
                for (let j in value) {
                  let name = j;
                  let s = value[j];
                  string +=
                    name + ":" + ("string" === typeof s ? s : s.join("")) + ";";
                }
                childObject.setAttribute(key, string);
              } else {
                childObject.setAttribute(key, value);
              }
            }
          }
        }

        if (
          "object" === typeof data.content &&
          data.content.length !== undefined
        ) {
          console.log("walks", data.content);
          await self._syncWalker(
            data.content,
            dObject,
            data.content,
            !hasContent
          );
        }
      } else if (data["data-id"]) {
        // Create
        let template;
        if (data.multiStyle) {
          template = await window
            .getAppLoader()
            .template.get(data.tag + "-" + layout);
        } else {
          template = await window.getAppLoader().template.get(data.tag);
        }

        template.setAttribute("data-id", data["data-id"]);

        if (!data.constructed) {
          self._applyData(defaultData, template, data);
        }

        template.classList.add(
          "scale-90",
          "opacity-0",
          "duration-200",
          "ease-in-out",
          "transition-all"
        );

        template.addEventListener("mousedown", async function (e) {
          if (e.target !== template) {
            return;
          }

          if (
            e.target.hasAttribute("x-action") &&
            e.target.getAttribute("x-action") === "drop"
          ) {
            return;
          }

          e.preventDefault();
          let root = await _lookForBlockRoot(e.target);

          if (root === false) {
            return;
          }

          let clickTI = setTimeout(() => {
            if (!window.getAppLoader().state.dragItem) {
              if (root.getAttribute("data-id") === data["data-id"]) {
                window.getAppLoader().event.emit("bb-block-edit-before", {
                  item: e.target,
                  block: data,
                });
              }
            }
            clearTimeout(clickTI);
          }, 50);
        });
        /**
         * Fetches and ensures the data is root block data.
         *
         * @param {object} entry
         * @returns {object}
         */
        async function _lookForBlockRoot(entry) {
          if (
            entry.hasAttribute("x-action") &&
            entry.getAttribute("x-action") === "drop"
          ) {
            return false;
          }

          if (entry.hasAttribute("data-id")) {
            return entry;
          }

          return await _lookForBlockRoot(entry.parentNode);
        }

        if (
          container.hasAttribute("x-inner-content") ||
          container.hasAttribute("x-wrap")
        ) {
          await container.prepend(template);
        } else {
          container.querySelector("[x-inner-content]").prepend(template);
        }

        data.constructed = true;

        dObject = container.querySelector(
          "[data-id='" + data["data-id"] + "']"
        );

        // Update
        for (let i in data.attributes) {
          let key = data.attributes[i];
          let value = data[key];
          let lObject;

          if (key === "label") {
            if (dObject.hasAttribute("x-content")) {
              dObject.innerHTML = value;
            } else {
              lObject = dObject.querySelector("[x-content]");
              if (!lObject) {
                console.log("Did not find content for: " + data.tag);
                continue;
              }
              lObject.innerHTML = value;
            }

            continue;
          }

          if (key && value) {
            if ("object" === typeof value) {
              let string = "";
              for (let j in value) {
                let name = j;
                let s = value[j];
                string +=
                  name + ":" + ("string" === typeof s ? s : s.join("")) + ";";
              }
              dObject.setAttribute(key, string);
            } else {
              dObject.setAttribute(key, value);
            }
          }
        }

        for (let i in data.structure) {
          let s = data.structure[i];
          let values = data[s];
          let childObject = dObject.querySelector(s);

          for (let j in data[s]) {
            let key = j;
            let value = data[s][j];

            if (key === "label") {
              if (childObject.hasAttribute("x-content")) {
                childObject.innerHTML = value;
              } else {
                childObject = childObject.querySelector("[x-content]");
                if (!childObject) {
                  console.log("Did not find content for: " + data.tag);
                  continue;
                }
                childObject.innerHTML = value;
              }

              continue;
            }

            if (key && value) {
              if ("object" === typeof value) {
                let string = "";
                for (let j in value) {
                  let name = j;
                  let s = value[j];
                  string +=
                    name + ":" + ("string" === typeof s ? s : s.join("")) + ";";
                }
                childObject.setAttribute(key, string);
              } else {
                childObject.setAttribute(key, value);
              }
            }
          }
        }

        setTimeout(() => {
          dObject.classList.remove("scale-90", "opacity-0");

          setTimeout(() => {
            dObject.classList.remove(
              "duration-200",
              "ease-in-out",
              "transition-all"
            );
          }, 200);
        });
      }

      /**
       * Emits event before rendering block
       */
      window.getAppLoader().event.emit("bb-block-rendering-after", {
        block: data,
        blockObject: dObject,
      });

      // if have children
      if (
        data.content &&
        "string" !== typeof data.content &&
        data.content.length !== 0
      ) {
        await self._syncWalker(data.content, dObject, data, initial);
      } else if (data.content && "string" === typeof data.content) {
        dObject.innerHTML = data.content;
      }
    }

    return true;
  }

  async _applyData(entries, template, data) {
    const self = this;

    if (entries.content) {
      console.log(data.tag);
      let value = entries.content;
      if ("string" === typeof value) {
        data.content = value;
      }

      if ("object" === typeof value) {
        value = Object.values(value).reverse();
        data.content = [];
        for (let l in value) {
          let s = value[l];

          let block = structuredClone(
            await window.getAppLoader().block.structure(s.tag)
          );

          if (!block) {
            console.log("Default content is corrupted for " + data.tag);
          }

          for (let i in s) {
            if (i !== "tag" && i !== "content") {
              block.default[i] = s[i];
            }
          }

          if (s.content) {
            s.content = Object.values(s.content).reverse();
            block.content = await self._buildContentRecursively(s.content);
          }

          block["data-id"] = self.generateId();
          data.content.push(block);
        }
      }
    }

    for (let i in entries) {
      let type;
      let attribute;
      let target;
      let targetSelector;
      let value = entries[i];

      if (i === "content") {
        continue;
      }

      if (i.indexOf("@") !== -1 && i.indexOf("|") !== -1) {
        let targetSplit = i.split("|");
        targetSelector = targetSplit[0].replace("@", "");
        attribute = targetSplit[1];

        if (targetSelector.indexOf(".") !== -1) {
          // Steps found
          targetSelector = targetSelector.split(".").join(" ");
        }
        type = "@at";
        target = template.querySelector(targetSelector);
      } else {
        type = i;
        target = template;
      }

      switch (type) {
        case "label":
          if (target.hasAttribute("x-content")) {
            target.innerHTML = value;
          } else {
            target = target.querySelector("[x-content]");
            if (!target) {
              console.log("Did not find content for: " + data.tag);
              continue;
            }
            target.innerHTML = value;
          }

          data.label = value;
          break;
        case "x-key":
          target.setAttribute("x-key", value);
          break;

        case "x-slot":
          console.log(target);
          target.setAttribute("x-slot", JSON.stringify(value));
          break;

        case "@at":
          if (data) {
            if (target) {
              if ("object" === typeof value) {
                let string = "";
                for (let i in value) {
                  string +=
                    i +
                    ":" +
                    ("string" === typeof value[i]
                      ? value[i]
                      : value[i].join("")) +
                    ";";
                }
                target.setAttribute(attribute, string);
              } else {
                target.setAttribute(attribute, value);
              }
            }

            data[targetSelector.split(" ").join(".")] = {};
            data[targetSelector.split(" ").join(".")][attribute] = value;
          }
          break;
        default:
          if (target) {
            if ("object" === typeof value) {
              let string = "";
              for (let i in value) {
                let finalValue;
                if ("string" === typeof value[i]) {
                  finalValue = value[i];
                } else if (
                  "object" === typeof value[i] &&
                  "function" === typeof value[i].join
                ) {
                  finalValue = value[i].join("");
                } else {
                  finalValue = value[i];
                }

                string += i + ":" + finalValue + ";";
              }
              target.setAttribute(type, string);
            } else {
              target.setAttribute(type, value);
            }
          }

          data[type] = value;
      }
    }

    return data;
  }

  async _buildContentRecursively(tree) {
    let content = [];

    for (let i in tree) {
      let s = tree[i];

      let block = structuredClone(
        await window.getAppLoader().block.structure(s.tag)
      );

      if (!block) {
        console.log("Default content is corrupted for " + data.tag);
      }

      for (let i in s) {
        if (i !== "tag" && i !== "content") {
          block.default[i] = s[i];
        }
      }

      if (s.content) {
        s.content = Object.values(s.content).reverse();
        block.content = await this._buildContentRecursively(s.content);
      }

      block["data-id"] = this.generateId();

      content.push(block);
    }

    content = content.reverse();

    return content;
  }

  async applyContentControls(template, entry) {
    const self = this;

    let appendBlock = await window
      .getAppLoader()
      .template.get("builder-block-append");

    let prependBlock = await window
      .getAppLoader()
      .template.get("builder-block-prepend");

    if (!appendBlock || !prependBlock) {
      console.log("Content controls are not there or corrupt.");
      return;
    }

    let tag = entry.tag.split(":")[1];

    prependBlock.setAttribute(
      "x-options",
      JSON.stringify({
        location: "#" + entry["data-id"],
        type: tag,
      })
    );

    prependBlock.innerHTML = prependBlock.innerHTML.replaceAll("{name}", tag);

    appendBlock.setAttribute(
      "x-options",
      JSON.stringify({
        location: "#" + entry["data-id"],
        type: tag,
      })
    );

    appendBlock.innerHTML = appendBlock.innerHTML.replaceAll("{name}", tag);

    template.prepend(prependBlock);
    template.append(appendBlock);

    return template;
  }

  /**
   * Resolves dependencies of a to be appended/prepended node
   * object, ensuring that it's container is suitable for it's
   * needs
   *
   * @param {object} nodeContainer
   * @param {object} nodeOptions
   *
   * @returns {object}
   */
  async _resolveDependencies(node, nodeOptions) {
    const self = this;
    let dependencies = nodeOptions.dependencies;

    if (dependencies.length === 0) {
      return nodeOptions;
    }

    /**
     * Emits event before resolving dependency
     */
    await window.getAppLoader().event.emit("bb-before-resolve-dependency", {
      dependencies: dependencies,
    });

    // Grab first dependency
    let dependency = dependencies[0];

    // Get Template
    const template = await window.getAppLoader().template.get(dependency);

    // Make block
    let block = await window.getAppLoader().block.make(dependency, template);

    let blockOptions = structuredClone(
      bbBlocks.filter(function (item) {
        return item.tag === dependency;
      })
    );

    if (blockOptions[0]) {
      blockOptions = blockOptions[0];
    }

    blockOptions.content = [nodeOptions];
    blockOptions["data-id"] = window.getAppLoader().block.generateId();

    if (!dependency || dependency !== "@root") {
      if (blockOptions.dependencies) {
        nodeOptions = await this._resolveDependencies(block, blockOptions);
      }
    }

    /**
     * Emits event after resolving dependency
     */
    await window.getAppLoader().event.emit("bb-after-resolve-dependency", {
      dependencies: nodeOptions.dependencies,
      block: block,
      options: blockOptions,
    });

    return nodeOptions;
  }

  async loadGoogleFont(fontName) {
    const self = this;

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=" + fontName + "&display=swap";

    console.log(self.document);
    self.head.appendChild(link);
    return true;
  }

  save() {
    if (!this.structuredData) {
      // Nothing to save
      return false;
    }

    // Found data in header, save it
    window.getAppLoader().event.emit("bb-header-save-before", {
      data: this.structuredData.header,
    });

    // Found data in content, save it
    window.getAppLoader().event.emit("bb-content-save-before", {
      data: this.structuredData.content,
    });

    // Found data in footer, save it
    window.getAppLoader().event.emit("bb-footer-save-before", {
      data: this.structuredData.footer,
    });

    setTimeout(() => {
      // Finnish off by saving our style object as well.
      window.getAppLoader().event.emit("bb-style-save-before", {
        data: this.style,
      });
    }, 500);
  }

  async build(data) {
    let html = await this._build(data);

    return html;
  }

  async _build(data) {
    const self = this;
    let html = "";
    if (!self.style) {
      self.style = {};
    }

    for (let i in data) {
      let entry = data[i];

      if (!entry) {
        continue;
      }

      /**
       * Emits event before building block
       */
      window.getAppLoader().event.emit("bb-before-building-block", {
        block: entry,
      });

      let template = await window.getAppLoader().template.get(entry.tag);

      if (!template) {
        console.log(entry);
        return false;
      }
      /**
       * Clean out builder used stuff
       */
      template.removeAttribute("x-inner-content");
      template.removeAttribute("x-content");

      /**
       * Bind data from its block store to its component
       */
      if (entry["data-id"]) {
        template.setAttribute("data-id", entry["data-id"]);
      }

      /**
       * If entry has no content, but a label - this label will be used as
       * its inner content.
       */
      if (entry.label && !entry.content) {
        template.innerHTML = entry.label;
      }

      for (let j in entry.attributes) {
        let attribute = entry.attributes[j];

        if (!entry[attribute] || attribute === "style") {
          continue;
        }

        template.setAttribute(attribute, entry[attribute]);
      }

      /**
       * Build dynamic generated class list of component
       */
      if (entry.style) {
        self.style = await self._buildStyle(entry.style, self.style, template);
      }

      /**
       * Emits event before rendering block
       */
      window.getAppLoader().event.emit("bb-after-building-block", {
        block: entry,
      });

      // if have children
      if (
        entry.content &&
        entry.content.length !== 0 &&
        "string" !== typeof entry.content
      ) {
        template.innerHTML = await self._build(entry.content, entry);
      } else if (entry.content && "string" === typeof entry.content) {
        template.innerHTML = entry.content;
      }

      let container = document.createElement("div");
      container.prepend(template);

      html += container.innerHTML;
    }

    return html;
  }

  async _buildStyle(local, stylesheet, obj) {
    //
    for (let i in local) {
      if ("string" === typeof local[i]) {
        let selector = i + "-" + local[i].replace("#", "");

        /**
         * Cleanup of ilegal and unwanted string literals
         */
        selector = selector.replaceAll(" ", "-");
        selector = selector.replaceAll(".", "-");
        selector = selector.replaceAll("'", "");
        selector = selector.replaceAll(",", "");
        selector = selector.replaceAll(";", "");

        /**
         * Only lowercase
         */
        selector = selector.toLowerCase();

        obj.classList.add(selector);

        if (stylesheet[selector] !== undefined) {
          // Style already exists
          continue;
        }

        let lStyle = "." + selector + "{" + i + ":" + local[i] + "}";
        stylesheet[selector] = lStyle;
      }

      if ("object" === typeof local[i]) {
        let selector = i + "-" + local[i].join("").replace("#", "");

        /**
         * Cleanup of ilegal and unwanted string literals
         */
        selector = selector.replaceAll(" ", "-");
        selector = selector.replaceAll(".", "-");
        selector = selector.replaceAll("'", "");
        selector = selector.replaceAll(",", "");
        selector = selector.replaceAll(";", "");

        /**
         * Only lowercase
         */
        selector = selector.toLowerCase();

        obj.classList.add(selector);

        if (stylesheet[selector] !== undefined) {
          // Style already exists
          continue;
        }

        let lStyle = "." + selector + "{" + i + ":" + local[i].join("") + "}";
        stylesheet[selector] = lStyle;
      }
    }

    return stylesheet;
  }

  savePageStyles() {}

  _getStyle() {
    return this.style;
  }

  generateId() {
    return uuidv4();
  }

  reload() {
    console.log("reloads");
    document.getElementById("builder-frame").contentWindow.location.reload();
  }
}

export default Dom;
