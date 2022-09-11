class Click {
  constructor(link) {
    const self = this;

    // Place local reference in object
    self.link = link;
    let options = {};

    if (self.link.hasAttribute("x-options")) {
      options = JSON.parse(self.link.getAttribute("x-options"));
    }

    self.options = options;

    self.link.addEventListener("mousedown", function (event) {
      self.onClick(event, self);
    });
  }

  onClick(e, self) {
    e.preventDefault();
    const appLoader = window.getAppLoader();
    let ti = setTimeout(function () {
      if (!window.getAppLoader().state.dragItem) {
        clearTimeout(ti);
        return;
      }

      let opts = {
        eventType: "click",
        item: self.link,
        dragEvent: e,
      };

      if (self.options.attributes) {
        opts.attributes = self.options.attributes;
      }

      if (self.options.emit) {
        appLoader.event.emit(self.options.emit, opts);
      } else {
        appLoader.event.emit("bb-block-click-before", opts);
      }
      clearTimeout(ti);
    }, 5);
  }
}

export default Click;
