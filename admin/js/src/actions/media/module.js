class Media {
  constructor(link) {
    const self = this;
    self.link = link;
    self.container = link.parentNode.parentNode.parentNode;
    let action = link.getAttribute("x-subaction");

    if (self.link && self.link.hasAttribute("x-options")) {
      self.options = link.getAttribute("x-options");

      if (self.options) {
        self.options = JSON.parse(self.options);
      }
    }

    switch (action) {
      case "toggle":
        link.addEventListener("click", function (e) {
          self._toggle(e);
        });
        break;

      case "clear":
        link.addEventListener("click", function (e) {
          self._clear(e);
        });
        break;

      default:
        console.log("Media action was not found");
    }
  }

  async _toggle(e) {
    const self = this;
    e.preventDefault();
    console.log(self.options);
    self.controller = await window.getAppLoader().blockControl.get({
      "data-id": self.options.id,
    });

    if (!self.controller) {
      console.error("No controller found");
      return;
    }

    if (self.frame) {
      self.frame.open();
      return;
    }

    // Sets the media manager's title and button text
    self.frame = wp.media.frames.bb_image_frame = wp.media({
      title: self.options.title ? self.options.title : "Media",
      button: {
        text: self.options.buttonText ? self.options.buttonText : "Choose.",
      },
    });

    self.frame.on("select", function () {
      // Grabs the attachment selection and creates a JSON representation of the model.
      var media_attachment = self.frame
        .state()
        .get("selection")
        .first()
        .toJSON();

      var media_id = media_attachment.id;
      var media_thumbnail = media_attachment.sizes.thumbnail.url;

      if (self.options.name) {
        let element = document.querySelector(
          '[name="' + self.options.name + '"]'
        );

        if (element) {
          element.value = media_thumbnail;

          document.querySelector(
            '[name="' + self.options.name + '-id"]'
          ).value = media_id;

          window.getAppLoader().event.emit("bb-control-hidden_change-before", {
            node: element,
            changeEvent: false,
            controller: self.controller,
          });
        }
      }

      self.container
        .querySelector('[x-if="src"] img')
        .setAttribute("src", media_thumbnail);
      self.container
        .querySelector('[x-if="src"] img')
        .classList.remove("hidden");
      self.container.querySelector('[x-if="src"]').classList.remove("hidden");
      self.container.querySelector('[x-if="!src"]').classList.add("hidden");
    });

    self.frame.open();
  }

  _clear(e) {
    e.preventDefault();
    self.container.querySelector('[x-if="src"] img').setAttribute("src", "");
    self.container.querySelector('[x-if="src"] img').classList.add("hidden");
    self.container.querySelector('[x-if="src"]').classList.add("hidden");
    self.container.querySelector('[x-if="!src"]').classList.remove("hidden");
  }
}

export default Media;
