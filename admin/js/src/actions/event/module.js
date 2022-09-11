class Event {
  constructor(link) {
    const self = this;

    // Set class reference to object
    self.link = link;
    let options = self.link.getAttribute("x-options");
    try {
      options = JSON.parse(options);
    } catch (e) {
      console.log(e);
      options = {};
    }
    self.options = options;

    if (!self.options.when || self.options.when === "click") {
      link.addEventListener("click", function (event) {
        let options = self.link.getAttribute("x-options");
        try {
          options = JSON.parse(options);
        } catch (e) {
          options = {};
        }

        self.options = options;

        self.onPress(event, self);
      });
    }

    if (self.options.when === "hover") {
      link.addEventListener("mouseenter", function (event) {
        let options = self.link.getAttribute("x-options");
        try {
          options = JSON.parse(options);
        } catch (e) {
          options = {};
        }

        self.options = options;

        self.onMouseEnter(event, self);
      });

      link.addEventListener("mouseleave", function (event) {
        let options = self.link.getAttribute("x-options");
        try {
          options = JSON.parse(options);
        } catch (e) {
          options = {};
        }

        self.options = options;

        self.onMouseLeave(event, self);
      });
    }

    if (self.options.when === "change") {
      link.addEventListener("change", function (event) {
        let options = self.link.getAttribute("x-options");
        try {
          options = JSON.parse(options);
        } catch (e) {
          options = {};
        }

        self.options = options;

        self.onChange(event, self);
      });
    }
  }

  onPress(e, self) {
    e.preventDefault();
    self.resolveEvent(function (eventName) {
      try {
        window.getAppLoader().event.emit(eventName + "-before", {
          attributes: {
            ...self.options.attributes,
            ...{
              type: "click",
              srcEventElement: self.link,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }

      try {
        window.getAppLoader().event.emit(eventName, {
          attributes: {
            ...self.options.attributes,
            ...{
              type: "click",
              srcEventElement: self.link,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
  }

  onMouseEnter(e, self) {
    e.preventDefault();
    self.resolveEvent(function (eventName) {
      try {
        window.getAppLoader().event.emit(eventName + "-before", {
          attributes: {
            ...self.options.attributes,
            ...{
              type: "hover",
              srcEventElement: self.link,
              state: "enter",
            },
          },
        });
      } catch (e) {
        console.log(e);
      }

      try {
        window.getAppLoader().event.emit(eventName, {
          attributes: {
            ...self.options.attributes,
            ...{
              type: "hover",
              srcEventElement: self.link,
              state: "enter",
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
  }

  onMouseLeave(e, self) {
    e.preventDefault();
    self.resolveEvent(function (eventName) {
      try {
        window.getAppLoader().event.emit(eventName + "-before", {
          attributes: {
            ...self.options.attributes,
            ...{
              type: "hover",
              srcEventElement: self.link,
              state: "leave",
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
      try {
        window.getAppLoader().event.emit(eventName, {
          attributes: {
            ...self.options.attributes,
            ...{
              type: "hover",
              srcEventElement: self.link,
              state: "leave",
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
  }

  onChange(e, self) {
    e.preventDefault();
    self.resolveEvent(function (eventName) {
      try {
        window.getAppLoader().event.emit(eventName + "-before", {
          attributes: {
            ...self.options.attributes,
            ...{
              type: "change",
              srcEventElement: self.link,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
      try {
        window.getAppLoader().event.emit(eventName, {
          attributes: {
            ...self.options.attributes,
            ...{
              type: "change",
              srcEventElement: self.link,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
  }

  resolveEvent(closure) {
    const self = this;
    let eventName = self.options.name;
    closure(eventName);
  }
}

export default Event;
