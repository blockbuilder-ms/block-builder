class Drop {
  constructor(container) {
    const self = this;

    // Place local reference in object
    self.container = container;

    let options = {};

    if (self.container.hasAttribute("x-options")) {
      options = JSON.parse(self.container.getAttribute("x-options"));
    }

    self.options = options;

    self.container.addEventListener("drop", function (event) {
      self.onDrop(event, self);
    });

    self.container.addEventListener("dragover", function (event) {
      self.onDragOver(event, self);
    });
  }

  onDrop(e, self) {
    e.preventDefault();
    const appLoader = window.getAppLoader();

    let opts = {
      item: self.container,
      itemTarget: self.getDropArea(e.target),
      dragEvent: e,
    };

    if (self.options.attributes) {
      opts.attributes = self.options.attributes;
    }

    if (self.options.emit) {
      appLoader.event.emit(self.options.emit + "-drop", opts);
    } else {
      appLoader.event.emit("bb-block-drop-before", opts);
    }
  }

  getDropArea(link) {
    if (!link || !link.hasAttribute) {
      return false;
    }

    if (
      link.hasAttribute("x-action") &&
      link.getAttribute("x-action") === "drop"
    ) {
      return link;
    }

    return this.getDropArea(link.parentNode);
  }

  onDragOver(e, self) {
    e.preventDefault();
    const appLoader = window.getAppLoader();

    let opts = {
      item: appLoader.state.dragItem,
      itemTarget: self.getDropArea(e.target),
      dragEvent: e,
    };

    if (self.options.attributes) {
      opts.attributes = self.options.attributes;
    }

    if (self.options.emit) {
      appLoader.event.emit(self.options.emit + "-drag-over", opts);
    } else {
      appLoader.event.emit("bb-block-drag_over-before", opts);
    }
  }
}

export default Drop;
