const appLoader = window.getAppLoader();
const uuidv4 = require("uuid").v4;

class Controller {
  constructor() {
    const self = this;

    self.mainContainer = document.getElementById("builder-block-edit-modal");
  }

  /**
   * Builds an controller environment instance
   * and prepares it to be used.
   *
   * @param {object} block
   * @param {object} item
   *
   * @return {object}
   */
  async build(block, item) {
    const self = this;

    self.block = block;
    self.item = item;
    self.template = document.getElementById("block-edit-instance");

    let segmentTotal = block.controls.length - 1;
    let segmentSize = block.controls.length;
    let currentInstances = self.mainContainer.querySelectorAll(
      ".instance:not(.hidden)"
    );

    for (let j in currentInstances) {
      let instance = currentInstances[j];

      if ("object" !== typeof instance) {
        continue;
      }

      instance.classList.add("hidden");
    }

    let instance = self.template.content.firstElementChild.cloneNode(true);
    instance.id = self.generateId();

    self.mainContainer.appendChild(instance);

    while (segmentSize--) {
      let segment = block.controls[segmentTotal - segmentSize];
      let first = false;
      if (!segment) {
        continue;
      }

      let segmentTemplate = document.getElementById(
        "block-edit-navigation-item"
      );

      let segmentInstance =
        segmentTemplate.content.firstElementChild.cloneNode(true);

      if (segmentTotal - segmentSize === 0) {
        first = true;
        segmentInstance.querySelector("a").classList.add("active");
      }

      segmentInstance.innerHTML = segmentInstance.innerHTML.replaceAll(
        "{target}",
        segment.name
      );

      segmentInstance.innerHTML = segmentInstance.innerHTML.replaceAll(
        "{label}",
        segment.label
      );

      self.mainContainer
        .querySelector("[x-navigation]")
        .appendChild(segmentInstance);

      if (segment.content) {
        await self._buildContent(segment, segment.content, first);
      }
    }

    self.instance = instance;
    return this;
  }

  /**
   * Builds the content of the controller environment - by building the controller
   * elements to be used to configure the varios areas of the block.
   *
   * @param {*} segment
   * @param {*} segmentContent
   * @param {*} first
   * @param {*} mainContainer
   */
  async _buildContent(segment, segmentContent, first, mainContainer) {
    const self = this;

    let templateId = "";
    let template = false;
    let classes = "";
    let segmentContentTotal = segmentContent.length - 1;
    let segmentContentSize = segmentContent.length;
    let segmentContainer = await self._buildContainer(segment, mainContainer);

    if (!mainContainer) {
      if (first) {
        segmentContainer.classList.add("active");
      } else {
        segmentContainer.classList.add("hidden", "opacity-0");
      }
    }

    while (segmentContentSize--) {
      let s = segmentContent[segmentContentTotal - segmentContentSize];
      let uniqueId = self.generateId();
      if (!s) {
        continue;
      }

      switch (s.type) {
        case "control":
          templateId = s._id;

          template = await appLoader.template.get(templateId, "control");
          if (!template) {
            continue;
          }

          template.innerHTML = template.innerHTML.replaceAll("{id}", uniqueId);

          template.innerHTML = template.innerHTML.replaceAll(
            "{data-id}",
            self.block["data-id"]
          );

          if (s.standalone) {
            template.innerHTML = template.innerHTML.replaceAll(
              "{standalone}",
              s.standalone
            );
          } else {
            template.innerHTML = template.innerHTML.replaceAll(
              "{standalone}",
              "false"
            );
          }

          classes = s.class ? s.class.split(" ") : "";
          for (let i in s) {
            if (i === "options") {
              continue;
            }

            if ("string" === typeof s[i]) {
              template.innerHTML = template.innerHTML.replaceAll(
                "{" + i + "}",
                s[i]
              );
            }

            if ("object" === typeof s[i]) {
              template.innerHTML = template.innerHTML.replaceAll(
                "{" + i + "}",
                JSON.stringify(s[i])
              );
            }
          }

          if (s.options) {
            let optionsHtml = "";
            for (let i in s.options) {
              let option = s.options[i];

              if (!option) {
                continue;
              }

              optionsHtml +=
                "<option value='" + i + "'>" + option + "</option>";
            }

            template.innerHTML = template.innerHTML.replaceAll(
              "{options}",
              optionsHtml
            );
          }

          if (s.conditional) {
            for (let i in s.conditional) {
              let obj = template.querySelector('[x-if="' + i + '"]');

              if (!obj) {
                continue;
              }

              if (s.conditional[i] === false) {
                let parent = obj.parentNode;
                parent.removeChild(obj);

                continue;
              }

              obj.innerHTML = s.conditional[i];
            }
          }

          template.id = s.id ? s.id : "";

          if (classes.length !== 0) {
            template.classList.add(...classes);
          } else if (s.class !== "") {
            template.classList.add(s.class);
          }

          if (s.lazyload) {
            let field = template.querySelector("[name='" + s.target + "']");

            if (field) {
              field.setAttribute("disabled", true);
              field.classList.add(
                "opacity-25",
                "select-none",
                "duration-200",
                "transition-all"
              );
            }
          }

          if (s["x-if"]) {
            let condition = s["x-if"];
            let hasCondition = self.isCondition(condition);

            if (hasCondition) {
              condition = self.splitCondition(condition);

              let key = condition[0];
              let where = condition[1];
              let value = condition[2];

              let field = segmentContainer.querySelector(
                "[name='" + key + "']"
              );

              if (field) {
                let result = self.solveCondition(where, value, field);

                if (!result) {
                  // Disable field
                  template.setAttribute("x-disabled", true);
                  template.setAttribute("disabled", true);
                  template.classList.add(
                    "opacity-25",
                    "select-none",
                    "duration-200",
                    "transition-all"
                  );
                }

                window
                  .getAppLoader()
                  .event.on("bb-builder-synced-before", function () {
                    console.log("Synced");
                    let field = segmentContainer.querySelector(
                      "[name='" + key + "']"
                    );

                    if (field) {
                      let result = self.solveCondition(where, value, field);

                      if (!result) {
                        // Disable field
                        template.setAttribute("x-disabled", true);
                        template.setAttribute("disabled", true);
                        template.classList.add(
                          "opacity-25",
                          "select-none",
                          "duration-200",
                          "transition-all"
                        );
                      } else {
                        template.removeAttribute("x-disabled");
                        template.removeAttribute("disabled");
                        template.classList.remove(
                          "opacity-25",
                          "select-none",
                          "duration-200",
                          "transition-all"
                        );
                      }
                    }
                  });
              }
            }
          }

          segmentContainer.querySelector("[x-content]").appendChild(template);

          let ti = setTimeout(async () => {
            if (templateId === "wp-editor") {
              wp.editor.initialize(uniqueId + "-editor");
            }

            if (s.lazyload) {
              let requestObject = await appLoader.request.make();
              requestObject.setUrl("/wp-json/" + s.lazyload_using);

              let response = await appLoader.request.get(requestObject);

              // Request was not 200 succes
              if (response.status !== 200) {
                appLoader.notification.error(response.response, 2500);
                return;
              }
              let field = segmentContainer.querySelector(
                "[name='" + s.target + "']"
              );

              if (field) {
                field.innerHTML = "";
                for (let i in response.body_response) {
                  let option = document.createElement("option");
                  option.value = i;
                  option.innerHTML = response.body_response[i];

                  field.appendChild(option);
                }

                if (!template.hasAttribute("x-disabled")) {
                  field.removeAttribute("disabled");
                  field.classList.remove(
                    "opacity-25",
                    "select-none",
                    "duration-200",
                    "transition-all"
                  );
                }

                window
                  .getAppLoader()
                  .event.on("bb-builder-synced-before", function () {
                    if (!template.hasAttribute("x-disabled")) {
                      field.removeAttribute("disabled");
                      field.classList.remove(
                        "opacity-25",
                        "select-none",
                        "duration-200",
                        "transition-all"
                      );
                    }
                  });
              }
            }

            clearTimeout(ti);
          });

          break;

        case "section":
          templateId = s.id;
          template = await appLoader.template.get(templateId, "control");
          classes = s.class ? s.class.split(" ") : "";
          template.innerHTML = template.innerHTML.replace("{name}", s.target);
          template.innerHTML = template.innerHTML.replace("{label}", s.label);

          if (s.options) {
            let optionsHtml = "";
            for (let i in s.options) {
              let option = s.options[i];

              if (!option) {
                continue;
              }

              optionsHtml +=
                "<option value='" + i + "'>" + option + "</option>";
            }

            template.innerHTML = template.innerHTML.replace(
              "{options}",
              optionsHtml
            );
          }

          if (s.conditional) {
            for (let i in s.conditional) {
              let obj = template.querySelector('[x-if="' + i + '"]');

              if (!obj) {
                continue;
              }

              if (s.conditional[i] === false) {
                let parent = obj.parentNode;
                parent.removeChild(obj);

                continue;
              }

              obj.innerHTML = s.conditional[i];
            }
          }

          template.id = s.id ? s.id : "";

          if (classes.length !== 0) {
            template.classList.add(...classes);
          } else if (s.class !== "") {
            template.classList.add(s.class);
          }

          segmentContainer.querySelector("[x-content]").appendChild(template);
          break;

        case "group":
          if (s.content) {
            await self._buildContent(s, s.content, false, segmentContainer);
          }

          break;
      }
    }

    if (!mainContainer) {
      self.mainContainer
        .querySelector(".instance:not(.hidden) [x-content]")
        .appendChild(segmentContainer);
    } else {
      mainContainer.appendChild(segmentContainer);
    }
  }

  async _buildContainer(segment, mainContainer) {
    let container = await appLoader.template.get(
      mainContainer ? "group" : "section",
      "control"
    );

    container.id = segment.name;
    container.classList.add("segment-container", "w-full", "flex", "flex-wrap");

    for (let i in segment) {
      if ("string" === typeof segment[i]) {
        container.innerHTML = container.innerHTML.replaceAll(
          "{" + i + "}",
          segment[i]
        );
      }

      if ("object" === typeof segment[i]) {
        container.innerHTML = container.innerHTML.replaceAll(
          "{" + i + "}",
          JSON.stringify(segment[i])
        );
      }
    }

    return container;
  }

  isCondition(condition) {
    return condition.indexOf("=") !== -1;
  }

  splitCondition(condition) {
    if (condition.indexOf("!=") !== -1) {
      let split = condition.split("!=");
      return [split[0], "!=", split[1]];
    }

    if (condition.indexOf("=") !== -1) {
      let split = condition.split("=");
      return [split[0], "=", split[1]];
    }
  }

  solveCondition(where, value, field) {
    if (where.indexOf("!=") !== -1) {
      return field.value !== value;
    }

    if (where.indexOf("=") !== -1) {
      return field.value === value;
    }
  }

  /**
   * Hydrates the controller environment with data from live dom.
   * Plus enabling us to bind events if none is existing, this is great
   * for dynamic if/else statements based on x/y options.
   *
   * @return {void}
   */
  async hydrate() {
    const self = this;
    let ran = false;
    setTimeout(() => {
      let values = self.mainContainer.querySelectorAll("[x-control-value]");
      for (let i in values) {
        let v = values[i];
        let failed = false;

        if ("object" !== typeof v) {
          continue;
        }

        if (!v.hasAttribute("name")) {
          console.error("Name attribute was missing from block");
          continue;
        }

        let name = v.getAttribute("name");
        if (name.indexOf("@") !== -1) {
          // Refers to data entry on sub element of block
          let steps = name.replace("@", "").split(".");
          let entry = structuredClone(steps[0]);

          let value = self.block[entry];
          if (!value) {
            // console.log("Failed to handle: " + name);
            continue;
          }

          for (let i in steps) {
            if (i === 0) {
              continue;
            }

            if (!steps[i] || !value[steps[i]]) {
              failed = true;
              continue;
            }

            value = value[steps[i]];
          }

          if (failed) {
            // console.log("Failed to handle: " + name);
            continue;
          }

          v.value = value;
          ran = true;
        }

        if (name.indexOf(".") !== -1 && !ran) {
          // Refers to an object of data on the block
          // Refers to data entry on sub element of block
          let steps = name.split(".");

          let value = self.block;
          if (!value) {
            // console.log("Failed to handle: " + name);
            continue;
          }

          for (let i in steps) {
            if (!steps[i] || !value[steps[i]]) {
              failed = true;
              continue;
            }

            value = value[steps[i]];
          }

          if (failed) {
            console.log("Failed to handle: " + name);
            continue;
          }

          if ("object" === typeof value) {
            // expect extra field
            v.value = value[0];
            document.querySelector('[name="' + name + '-type"]').value =
              value[1];
          } else {
            v.value = value;
          }

          ran = true;
        }

        // Expect it to be an standard data entry if none of the above triggered
        if (self.block[name] && !ran) {
          v.value = self.block[name];
        }

        if (!v.classList.contains("hydrated")) {
          v.classList.add("hydrated");
          self._registerControlEvents(v);
        }
      }
    });
  }

  applyConditions(block) {
    const self = this;
    let conditions = self.mainContainer.querySelectorAll("[x-if]");

    for (let i in conditions) {
      let condition = conditions[i];

      if ("object" !== typeof condition) {
        continue;
      }

      let conditionKey = condition.getAttribute("x-if");
      let isOposite = conditionKey.charAt(0) === "!";

      if (isOposite) {
        // Reverse
        if (block[conditionKey] && !condition.classList.contains("hidden")) {
          condition.classList.add("hidden");
        } else if (
          !block[conditionKey] &&
          !condition.classList.contains("hidden")
        ) {
          condition.classList.remove("hidden");
        }
      } else {
        if (!block[conditionKey] && !condition.classList.contains("hidden")) {
          condition.classList.add("hidden");
        } else if (
          block[conditionKey] &&
          condition.classList.contains("hidden")
        ) {
          condition.classList.remove("hidden");
        }
      }
    }
  }

  /**
   * Registers the events for the control
   * Note: This is merely for finding type of control
   * after which it will resolve that method instead
   *
   * @param {object} node
   * @return {mixed}
   */
  _registerControlEvents(node) {
    const self = this;
    switch (node.tagName) {
      case "INPUT":
        // Get type to ensure what kind of input we are dealing with.
        let type = node.getAttribute("type");
        let method =
          "_register" +
          type.charAt(0).toUpperCase() +
          type.substring(1) +
          "InputEvents";

        return self[method](node);

        break;
      case "SELECT":
        return self._registerSelectEvents(node);
        break;

      default:
        return false;
    }
  }

  /**
   * Registers the events for the control
   * Note: This is only for select based controls
   *
   * @param {object} node
   */
  _registerSelectEvents(node) {
    const self = this;
    let name = node.getAttribute("name");
    let extra = document.querySelector('[name="' + name + '-type"]');
    if (extra) {
      extra.addEventListener("change", function (e) {
        window.getAppLoader().event.emit("bb-control-select_change-before", {
          node: node,
          changeEvent: e,
          controller: self,
        });
      });
    }

    node.addEventListener("change", function (e) {
      window.getAppLoader().event.emit("bb-control-select_change-before", {
        node: node,
        changeEvent: e,
        controller: self,
      });
    });
  }

  /**
   * Registers the events for the control
   * Note: This is only for number input based controls
   *
   * @param {object} node
   */
  _registerNumberInputEvents(node) {
    const self = this;

    let name = node.getAttribute("name");
    let extra = document.querySelector('[name="' + name + '-type"]');

    if (extra) {
      extra.addEventListener("change", function (e) {
        window.getAppLoader().event.emit("bb-control-number_keyup-before", {
          node: node,
          keyUpEvent: e,
          controller: self,
        });
      });
    }

    node.addEventListener("keyup", function (e) {
      let value = e.target.value;

      let nbTimeout = setTimeout(() => {
        if (value === e.target.value) {
          window.getAppLoader().event.emit("bb-control-number_keyup-before", {
            node: node,
            keyUpEvent: e,
            controller: self,
          });
        }
        clearTimeout(nbTimeout);
      }, 250);
    });
  }

  /**
   * Registers the events for the control
   * Note: This is only for text input based controls
   *
   * @param {object} node
   */
  _registerTextInputEvents(node) {
    const self = this;

    let name = node.getAttribute("name");
    let extra = document.querySelector('[name="' + name + '-type"]');

    if (extra) {
      extra.addEventListener("change", function (e) {
        window.getAppLoader().event.emit("bb-control-text_keyup-before", {
          node: node,
          keyUpEvent: e,
          controller: self,
        });
      });
    }

    node.addEventListener("keyup", function (e) {
      let value = e.target.value;
      let nbTimeout = setTimeout(() => {
        if (value === e.target.value) {
          window.getAppLoader().event.emit("bb-control-text_keyup-before", {
            node: node,
            keyUpEvent: e,
            controller: self,
          });
        }
        clearTimeout(nbTimeout);
      }, 250);
    });
  }

  /**
   * Registers the events for the control
   * Note: This is only for radio input based controls
   *
   * @param {object} node
   */
  _registerRadioInputEvents(node) {
    const self = this;
    let name = node.getAttribute("name");
    let extra = document.querySelector('[name="' + name + '-type"]');

    if (extra) {
      extra.addEventListener("change", function (e) {
        window.getAppLoader().event.emit("bb-control-radio_change-before", {
          node: node,
          changeEvent: e,
          controller: self,
        });
      });
    }

    node.addEventListener("change", function (e) {
      window.getAppLoader().event.emit("bb-control-radio_change-before", {
        node: node,
        changeEvent: e,
        controller: self,
      });
    });
  }

  /**
   * Registers the events for the control
   * Note: This is only for checkbox input based controls
   *
   * @param {object} node
   */
  _registerCheckboxInputEvents(node) {
    const self = this;
    let name = node.getAttribute("name");
    let extra = document.querySelector('[name="' + name + '-type"]');

    if (extra) {
      extra.addEventListener("change", function (e) {
        window.getAppLoader().event.emit("bb-control-checkbox_change-before", {
          node: node,
          changeEvent: e,
          controller: self,
        });
      });
    }

    node.addEventListener("change", function (e) {
      window.getAppLoader().event.emit("bb-control-checkbox_change-before", {
        node: node,
        changeEvent: e,
        controller: self,
      });
    });
  }

  /**
   * Registers the events for the control
   * Note: This is only for range input based controls
   *
   * @param {object} node
   */
  _registerRangeInputEvents(node) {
    const self = this;
    let name = node.getAttribute("name");
    let extra = document.querySelector('[name="' + name + '-type"]');

    if (extra) {
      extra.addEventListener("change", function (e) {
        window.getAppLoader().event.emit("bb-control-range_change-before", {
          node: node,
          changeEvent: e,
          controller: self,
        });
      });
    }

    node.addEventListener("change", function (e) {
      window.getAppLoader().event.emit("bb-control-range_change-before", {
        node: node,
        changeEvent: e,
        controller: self,
      });
    });
  }

  /**
   * Registers the events for the control
   * Note: This is only for hidden input based controls
   *
   * @param {object} node
   */
  _registerHiddenInputEvents(node) {
    const self = this;
    let name = node.getAttribute("name");
    let extra = document.querySelector('[name="' + name + '-type"]');

    if (extra) {
      extra.addEventListener("change", function (e) {
        window.getAppLoader().event.emit("bb-control-hidden_change-before", {
          node: node,
          changeEvent: e,
          controller: self,
        });
      });
    }

    node.addEventListener("change", function (e) {
      window.getAppLoader().event.emit("bb-control-hidden_change-before", {
        node: node,
        changeEvent: e,
        controller: self,
      });
    });
  }

  /**
   * Spawns the controller modal for the block
   * So the user can configure the block to fulfill the needs.
   *
   * @return {void}
   */
  async spawn() {
    const self = this;

    await appLoader.action
      .withOptions({
        id: "builder-block-edit-modal",
      })
      .run("modal", "builder-block-edit-modal");

    setTimeout(function () {
      appLoader.event.emit("bb-block-edit-after", {
        controller: self,
        block: self.block,
        item: self.item,
      });
    }, 100);
  }

  generateId() {
    return uuidv4();
  }
}

export default Controller;
