class Toggle {
  constructor(container) {
    const self = this;

    self.open = false;

    self.container = container;
    self.toggle = container.querySelector("[x-toggle]");
    self.innerContainer = container.querySelector("[x-container]");

    if (self.container.hasAttribute("x-options")) {
      try {
        self.options = JSON.parse(self.container.getAttribute("x-options"));
      } catch (e) {
        console.log(e);
      }
    }

    self.toggle.addEventListener("click", function (e) {
      self.onPress(e, self);
    });

    window.getAppLoader().event.on("bb-builder-clear-toggles", function () {
      self.open = true;
      self._onPress(self);
    });
  }

  onPress(e, self) {
    e.preventDefault();

    self._onPress(self);
  }

  _onPress(self) {
    if (self.active) {
      return;
    }

    self.active = true;
    if (!self.open) {
      // Spawn
      self.innerContainer.classList.remove("hidden");
      setTimeout(() => {
        if (self.options && self.options.toggle) {
          for (let i in self.options.toggle) {
            self.innerContainer.classList.remove(self.options.toggle[i]);
          }
        } else {
          self.innerContainer.classList.remove("scale-95", "opacity-0");
        }
        console.log(self.options);
        if (self.options && self.options.HideToggleWhenActive) {
          self.toggle.classList.add("hidden");
        }

        self.open = true;
        self.active = false;
      }, 5);
    } else {
      // Hide
      if (self.options && self.options.toggle) {
        for (let i in self.options.toggle) {
          self.innerContainer.classList.add(self.options.toggle[i]);
        }
      } else {
        self.innerContainer.classList.add("scale-95", "opacity-0");
      }

      if (self.options && self.options.HideToggleWhenActive) {
        self.toggle.classList.remove("hidden");
      }

      setTimeout(() => {
        self.innerContainer.classList.add("hidden");
        self.open = false;
        self.active = false;
      }, 205);
    }
  }
}

export default Toggle;
