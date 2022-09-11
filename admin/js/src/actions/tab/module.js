class Tab {
  constructor(link) {
    const self = this;
    self.delay = 215;
    self.timeout = false;
    self.link = link;

    if (!link.classList.contains("hydrated")) {
      self.link.addEventListener("click", function (e) {
        e.preventDefault();
        self.onPress(self);
      });
    }

    window.getAppLoader().event.on(
      "bb-modal-spawn-before",
      function () {
        let target = document.querySelector(self._getTarget(self.link));
        if (
          self.link.hasAttribute("x-initial") &&
          !target.hasAttribute("x-loaded")
        ) {
          self.onPress(self);
        }
      },
      function () {},
      document
    );
  }

  async onPress(self) {
    const link = self.link;

    if (self.isSpawned()) {
      return;
    }

    window.getAppLoader().event.emit("bb-builder-clear-toggles");

    let current = self.getCurrent();

    if (current) {
      window.getAppLoader().event.emit("bb-builder-tab-despawn-before");
      await self._despawn(current);
      window.getAppLoader().event.emit("bb-builder-tab-despawn-after");
    }

    self.timeout = setTimeout(async function () {
      let target = document.querySelector(self._getTarget(link));

      window.getAppLoader().event.emit("bb-tab-spawn-before", {
        tabLink: link,
        tabTarget: target,
      });
      await self._spawn(link);
      window.getAppLoader().event.emit("bb-builder-tab-spawn-after", {
        tabLink: link,
        tabTarget: target,
      });
      clearTimeout(self.timeout);
    }, self.delay);
  }

  getCurrent() {
    const self = this;

    return self.link.parentNode.parentNode.querySelector(".tab.active");
  }

  isSpawned() {
    return this.link.classList.contains("active");
  }

  _getTarget(item) {
    return item.getAttribute("href");
  }

  async _spawn(item) {
    const self = this;
    let target = self._getTarget(item);
    let targetObj = document.querySelector(target);

    if (!targetObj) {
      console.log("Did not find target @ Tab Module");
      return false;
    }

    targetObj.classList.remove("hidden");
    let ti = setTimeout(function () {
      targetObj.classList.remove("opacity-0");
      item.classList.add("active");
      clearTimeout(ti);
      return true;
    }, 5);
  }

  async _despawn(item) {
    const self = this;
    let target = self._getTarget(item);
    let targetObj = document.querySelector(target);

    if (!target || !item) {
      console.log("Did not find link @ Tab Module");
      return false;
    }

    if (!targetObj) {
      console.log("Did not find target @ Tab Module");
      return false;
    }

    targetObj.classList.add("opacity-0");
    let ti = setTimeout(function () {
      targetObj.classList.add("hidden");
      item.classList.remove("active");

      clearTimeout(ti);
      return true;
    }, 205);
  }
}

export default Tab;
