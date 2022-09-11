class Drag {
  constructor(link) {
    const self = this;

    // Place local reference in object
    self.link = link;
    let options = {};

    if (self.link.hasAttribute("x-options")) {
      options = JSON.parse(self.link.getAttribute("x-options"));
    }

    self.options = options;

    self.link.addEventListener("dragstart", function (event) {
      self.onDrag(event, self);
    });

    self.link.addEventListener("dragend", function (event) {
      self.onDragEnd(event, self);
    });
  }

  onDrag(e, self) {
    const appLoader = window.getAppLoader();

    let opts = {
      eventType: "drag",
      item: self.link,
      dragEvent: e,
    };

    if (self.options.attributes) {
      opts.attributes = self.options.attributes;
    }

    if (self.options.emit) {
      appLoader.event.emit(self.options.emit, opts);
    } else {
      appLoader.event.emit("bb-block-drag-before", opts);
    }
  }

  onDragEnd(e, self) {
    const appLoader = window.getAppLoader();

    let opts = {
      item: self.link,
      itemTarget: e.target,
      dragEvent: e,
    };

    if (self.options.attributes) {
      opts.attributes = self.options.attributes;
    }

    if (self.options.emit) {
      appLoader.event.emit(self.options.emit + "-end", opts);
    } else {
      appLoader.event.emit("bb-block-drag_end-before", opts);
    }
  }
}

export default Drag;
