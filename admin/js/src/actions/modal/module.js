class Modal {
  constructor(link, core, isDirect) {
    const self = this;
    self.timeout = false;
    self.link = link;
    self.open = false;

    if (self.link && self.link.hasAttribute("x-options")) {
      self.options = link.getAttribute("x-options");

      if (self.options) {
        self.options = JSON.parse(self.options);
      }
    }

    window.getAppLoader().event.on("bb-builder-modal-close", function () {
      if (self.open) {
        self._onPress(self);
      }
    });

    if (self.options && self.options["data-id"]) {
      self.content = document.getElementById(self.options["data-id"]);
      if (!isDirect) {
        self.link.addEventListener("click", function (e) {
          self.onPress(e, self);
        });
      }

      let closeBtns = self.content.querySelectorAll("[x-close]");

      if (!closeBtns) {
        return;
      }

      let btnSize = closeBtns.length;

      while (btnSize--) {
        let btn = closeBtns[btnSize];

        if (!btn) {
          continue;
        }

        btn.addEventListener("click", function () {
          self.open = true;
          self._onPress(self);
        });
      }
    } else {
      console.log("Modal need to know the ID of the target container");
    }
  }

  onPress(e, self) {
    e.preventDefault();

    this._onPress(self);
  }

  async _onPress(self) {
    window.getAppLoader().event.emit("bb-modal-spawn-before", {
      options: self.options,
      link: self.link,
      container: self.content,
      state: !self.open,
    });

    if (self.options && self.options.emit) {
      window.getAppLoader().event.emit(self.options.emit[0] + "-before", {
        options: self.options,
        link: self.link,
        container: self.content,
        state: !self.open,
        data: self.options.emit[1],
      });
    }

    if (!self.open) {
      // Spawn modal
      if (!self.options || !self.options.standalone) {
        window.getAppLoader().event.emit("bb-builder-modal-close");
      }

      if (self.options && self.options.attributes) {
        await self._updateAttributes();
      }

      await self._spawn();

      if (!self.options || !self.options.standalone) {
        // Shorten page content
        document.getElementById("builder-frame").style.marginLeft =
          self.content.offsetWidth + "px";

        document.getElementById("builder-frame").style.width =
          "calc(100% - 50px - " + self.content.offsetWidth + "px)";
      }

      if (self.link && self.link.querySelector(".closed")) {
        self.link.querySelector(".closed").classList.add("hidden");
        self.link.querySelector(".open").classList.remove("hidden");
      }

      self.open = true;

      if (self.options.emit) {
        window.getAppLoader().event.emit(self.options.emit[0], {
          options: self.options,
          link: self.link,
          container: self.content,
          state: self.open,
          data: self.options.emit[1],
        });
      }
    } else {
      // Shorten page content
      if (!self.options || !self.options.standalone) {
        document.getElementById("builder-frame").style.marginLeft = "0px";
        document.getElementById("builder-frame").style.width = "100%";
      }

      if (self.link && self.link.querySelector(".closed")) {
        self.link.querySelector(".closed").classList.remove("hidden");
        self.link.querySelector(".open").classList.add("hidden");
      }

      self._despawn();

      self.open = false;

      if (self.options.emit) {
        window.getAppLoader().event.emit(self.options.emit[0], {
          options: self.options,
          link: self.link,
          container: self.content,
          state: self.open,
          data: self.options.emit[1],
        });
      }
    }

    window.getAppLoader().event.emit("bb-modal-spawn-after", {
      options: self.options,
      link: self.link,
      container: self.content,
      state: !self.open,
    });
  }

  async _updateAttributes() {
    const self = this;
    let attributes = self.options.attributes;

    if (!attributes) {
      return false;
    }

    for (let i in attributes) {
      let option = attributes[i];
      let attributeObjs = self.content.querySelectorAll("[x-attr-" + i + "]");
      let events = self.content.querySelectorAll("[x-action='event']");

      for (let j in attributeObjs) {
        let obj = attributeObjs[j];

        if ("object" !== typeof obj) {
          continue;
        }

        obj.innerHTML = option;
      }

      for (let j in events) {
        let event = events[j];

        if ("object" !== typeof event) {
          continue;
        }

        let options = event.hasAttribute("x-options")
          ? JSON.parse(event.getAttribute("x-options"))
          : false;

        if (!options) {
          continue;
        }

        if (!options.attributes) {
          options.attributes = {};
        }

        options.attributes[i] = option;

        event.setAttribute("x-options", JSON.stringify(options));
      }
    }

    return true;
  }

  _despawn() {
    const self = this;
    self.content.classList.add("opacity-0");

    setTimeout(function () {
      self.content.classList.add("hidden");
    }, 215);
  }
  _spawn() {
    const self = this;
    self.content.classList.remove("hidden");
    setTimeout(function () {
      self.content.classList.remove("opacity-0");
    }, 15);
  }

  /**
   * Will force run a toggle event for a certain modal.
   * @param {*} id
   */
  forceRun(options) {
    this.options = options;
    this._onPress(this);
  }
}

export default Modal;
