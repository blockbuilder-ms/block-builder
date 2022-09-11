class FontPicker {
  constructor(link) {
    const self = this;

    self.query = "";
    self.container = link.parentNode.parentNode;
    self.link = link;

    self.link.addEventListener("click", function (e) {
      self.onPress(e, self);
    });

    let entries = self.container.querySelectorAll("[x-preview]");
    let size = entries.length;

    while (size--) {
      const entry = entries[size];

      if (!entry) continue;

      entry.addEventListener("click", function (e) {
        if (
          !entry.hasAttribute("x-shown") ||
          entry.getAttribute("x-shown") === "false"
        ) {
          self._removeExample();
          self._spawnExample(entry.getAttribute("x-font"), entry);
        } else {
          self._removeExample();
        }
      });
    }
  }

  onPress(e, self) {
    e.preventDefault();

    let modalContainer = self.container.querySelector(".font-picker-modal");
    let search = self.container.querySelector("[x-search]");
    let close = self.container.querySelector("[x-close]");
    let fonts = modalContainer.querySelectorAll("[x-add]");

    if (!modalContainer) {
      return false;
    }

    if (modalContainer.classList.contains("hidden")) {
      // spawn
      self._show(modalContainer);

      if (close) {
        close.addEventListener("click", function (e) {
          self._hide(modalContainer);
        });
      }

      if (search) {
        search.addEventListener("keyup", function (e) {
          e.preventDefault();
          self.onSearchKeyUp(e, self);
        });
      }

      if (0 !== fonts.length) {
        for (let i in fonts) {
          let font = fonts[i];

          if ("object" !== typeof font) {
            continue;
          }

          font.addEventListener("click", function (e) {
            e.preventDefault();

            self.pickFont(font, modalContainer, self, e);
          });
        }
      }
    } else {
      // hide
      self._hide(modalContainer);
    }
  }

  _show(modalContainer) {
    modalContainer.classList.remove("hidden");
    setTimeout(() => {
      modalContainer.classList.remove("opacity-0");
    }, 50);
  }

  _hide(modalContainer) {
    modalContainer.classList.add("opacity-0");
    setTimeout(() => {
      modalContainer.classList.add("hidden");
    }, 200);
  }

  _spawnExample(name, target) {
    let container = document.createElement("div");
    container.id = "font-preview";
    container.setAttribute("x-font", target.getAttribute("x-font"));
    container.innerHTML =
      '<iframe src="/wp-admin/post.php?post=2&action=font_example&font-family=' +
      name +
      '"></iframe>';

    let posY = this.getExamplePosY(target);
    let posX = this.getExamplePosX(target);

    container.style.top = posY + "px";
    container.style.left = posX + "px";

    target.parentNode.parentNode.appendChild(container);
    target.setAttribute("x-shown", "true");
  }

  getExamplePosY(target) {
    let offsetHeight = target.offsetHeight;

    return offsetHeight;
  }

  getExamplePosX(target) {
    let offsetWidth = target.offsetWidth;
    return offsetWidth;
  }

  _removeExample() {
    let preview = document.getElementById("font-preview");

    if (preview) {
      let previewButton = document.querySelector(
        "button[x-preview][x-font='" + preview.getAttribute("x-font") + "']"
      );

      preview.parentNode.removeChild(preview);
      previewButton.setAttribute("x-shown", "false");
    }
  }

  async pickFont(font, modalContainer, self, e) {
    let fontName = font.getAttribute("x-font");
    let type = font.getAttribute("x-type");
    let input = self.container.querySelector("[x-value-hidden]");
    let controller = await window
      .getAppLoader()
      .blockControl.get(
        window.getAppLoader().editing,
        window.getAppLoader().editingObject
      );

    if (type) {
      input.value = "'" + fontName + "', " + type;
    } else {
      input.value = "'" + fontName + "'";
    }

    self.container.querySelector("[x-value]").innerHTML = fontName;

    self._hide(modalContainer);

    window.getAppLoader().event.emit("bb-control-select_change-before", {
      node: input,
      changeEvent: e,
      controller: controller,
    });

    window.getAppLoader().event.emit("bb-font-load-before", {
      fontName: fontName,
    });
  }

  onSearchKeyUp(e, self) {
    const val = e.target.value;
    let ti = setTimeout(() => {
      if (val === e.target.value) {
        self.search(val);
      }

      clearTimeout(ti);
    }, 1000);
  }

  search(query) {
    const self = this;
    self.query = query.toLowerCase();

    let items = self.container.querySelectorAll("[x-key]");
    let stackSize = items.length;

    while (stackSize--) {
      let item = items[stackSize];

      if (!item) {
        continue;
      }

      let key = item.getAttribute("x-key");

      if (key.indexOf(self.query) === -1) {
        item.classList.add("hidden");
      } else {
        if (item.classList.contains("hidden")) {
          item.classList.remove("hidden");
        }
      }
    }
  }
}

export default FontPicker;
