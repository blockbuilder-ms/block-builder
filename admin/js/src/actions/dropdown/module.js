class Dropdown {
  constructor(container) {
    const self = this;
    self.container = container;
    self.button = container.querySelector("[x-button]");
    self.target = container.querySelector("[x-target]");
    self.height = self.target.clientHeight;

    self.target.style.height = "0px";
    self.target.classList.add("hidden");
    self.open = false;

    setTimeout(() => {
      self.target.classList.add(
        "duration-200",
        "ease-in-out",
        "transition-all",
        "opacity-0"
      );
    });

    self.button.addEventListener("click", function (e) {
      e.preventDefault();

      self._onPress(e, self);
    });
  }

  _onPress(e, self) {
    // Only allow one instance at a time.
    if (self.running) {
      return;
    }

    self.running = true;
    console.log(self.open);
    if (self.open) {
      self._despawn();
    } else {
      self._spawn();
    }
  }
  _despawn() {
    const self = this;

    self.target.style.height = "0px";
    self.target.classList.add("opacity-0");
    let ti = setTimeout(() => {
      self.target.classList.add("hidden");
      self.open = false;
      self.running = false;
      clearTimeout(ti);
    }, 210);
  }

  _spawn() {
    const self = this;
    self.target.classList.remove("hidden");
    let ti = setTimeout(() => {
      self.target.classList.remove("opacity-0");
      self.target.style.height = self.height;
      self.open = true;
      self.running = false;
      clearTimeout(ti);
    }, 5);
  }
}

export default Dropdown;
