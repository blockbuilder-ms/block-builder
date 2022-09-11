class Select {
  constructor(container) {
    const self = this;
    self.container = container;

    self._load();
  }

  async _load() {
    const self = this;
    let options = self.container.hasAttribute("x-options")
      ? self.container.getAttribute("x-options")
      : {};

    try {
      options = JSON.parse(options);
    } catch (e) {
      options = {};
    }

    // Load in script if it has not already
    if (
      false === (await window.getAppLoader().script.loaded("virtual-select"))
    ) {
      console.log("loading script");
      await window
        .getAppLoader()
        .script.load(
          "virtual-select",
          "admin/js/lib/virtual-select/virtual-select.min"
        );
    }

    // Load in script styles if it has not already
    if (
      false === (await window.getAppLoader().style.loaded("virtual-select"))
    ) {
      console.log("loading style");
      await window
        .getAppLoader()
        .style.load(
          "virtual-select",
          "admin/js/lib/virtual-select/virtual-select.min"
        );
    }

    setTimeout(() => {
      let instance = new VirtualSelect({
        ele: self.container,
        options: options ? options.items : {},
      });
    }, 100);
  }

  onPress(e, self) {
    e.preventDefault();
  }
}

export default Select;
