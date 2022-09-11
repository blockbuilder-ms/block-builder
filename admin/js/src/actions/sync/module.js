class Sync {
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

    if (self.options && self.options.when && self.options.what) {
      switch (self.options.when) {
        case "click":
          self.link.addEventListener("click", function (e) {
            self.what = document.querySelector(
              '[name="' + self.options.what + '"]'
            );
            self.onPress(e, self);
          });
          break;

        case "change":
          self.link.addEventListener("change", function (e) {
            if (
              self.link.tagName === "INPUT" &&
              self.link.getAttribute("type") === "checkbox"
            ) {
              self.what = document.querySelector(
                '[name="' + self.options.what + '"]'
              ).checked;
              console.log(
                document.querySelector('[name="' + self.options.what + '"]')
              );
            } else {
              self.what = document.querySelector(
                '[name="' + self.options.what + '"]'
              );
            }
            self.onChange(e, self);
          });
          break;

        default:
          console.log("Not a valid sync type chosen");
      }
    }
  }

  /**
   * initial handle for click events
   *
   * @param {*} e
   * @param {*} self
   */
  onPress(e, self) {
    e.preventDefault();

    this._onPress(self);
  }

  async _onPress(self) {
    await this.sync(self);
  }

  /**
   * initial handle for click events
   *
   * @param {*} e
   * @param {*} self
   */
  onChange(e, self) {
    e.preventDefault();

    this._onChange(self);
  }

  async _onChange(self) {
    await this.sync(self);
  }

  /**
   * Synchronizes a data key with the database
   *
   * @returns {bool}
   */
  async sync() {
    const self = this;
    const appLoader = window.getAppLoader();

    let requestObject = await appLoader.request.make();

    requestObject.setUrl("/wp-json/block-builder/v1/sync/" + self.options.what);
    requestObject.setBody({
      body: {
        key: self.options.what,
        data: "object" === typeof self.what ? self.what.value : self.what,
      },
    });

    let response = await appLoader.request.put(requestObject);

    // Request was not 200 succes
    if (response.status !== 200) {
      appLoader.notification.error(response.response, 2500);
      return;
    }

    // request was an succes
    appLoader.notification.succes(response.response, 2500);

    if (self.options.reload) {
      appLoader.dom.reload();
    }

    if (self.options.ui_reload) {
      appLoader.settings.reload();
      setTimeout(() => {
        appLoader.request.loadData(
          self.options.ui_reload,
          document.querySelector(
            '[x-lazyload="' + self.options.ui_reload + '"]'
          ),
          "admin",
          true
        );
      }, 500);
    }

    return true;
  }

  /**
   * Will force run a toggle event for a certain modal.
   * @param {*} id
   */
  forceRun(options) {
    //
  }
}

export default Sync;
