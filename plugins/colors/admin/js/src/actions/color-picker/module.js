/**
 * Color picker using
 * https://github.com/bebraw/colorjoe
 */

// Importing Color Joe
import colorjoe from "colorjoe";

class ColorPicker {
  constructor(container) {
    const self = this;

    self.container = container;
    self.button = self.container.querySelector("[x-button]");
    self.innerContainer = self.container.querySelector("[x-container]");
    self.currentColor = self.container.querySelector(".current-color");

    self.extas = {};
    self.initialColor = self.currentColor.hasAttribute("x-color")
      ? self.currentColor.getAttribute("x-color")
      : "#000000";

    if (!colorjoe.rgb) {
      // Joe failed to start.
      console.error("ColorJoe was not able to load.");
      return;
    }

    const joe = colorjoe.rgb(
      self.innerContainer.id,
      self.initialColor,
      self.extras
    );

    if (!joe) {
      // Joe failed to start.
      console.error("ColorJoe was not able to load.");
      return;
    }

    self.instance = joe;
    self.instance.hide();
    self.open = false;

    self.innerContainer.parentNode.classList.add("hidden");

    self.button.addEventListener("click", (e) => {
      self.onPress(e, self);
    });

    self.instance.on("change", async function (e) {
      let controller = await window
        .getAppLoader()
        .blockControl.get(
          window.getAppLoader().editing,
          window.getAppLoader().editingObject
        );

      let value = e.css();
      let input = self.currentColor.querySelector("input");

      self.currentColor.setAttribute("style", "background:" + value);
      self.currentColor.setAttribute("x-color", value);

      input.value = value;

      window.getAppLoader().event.emit("bb-control-hidden_change-before", {
        node: input,
        changeEvent: e,
        controller: controller,
      });
    });
  }

  onPress(e, self) {
    e.preventDefault();

    if (self.open) {
      self.button.innerHTML = "Update";
      self.instance.hide();
      self.innerContainer.parentNode.classList.add("hidden");

      self.open = false;
    } else {
      self.button.innerHTML = "Close";
      self.instance.show();
      self.innerContainer.parentNode.classList.remove("hidden");
      self.open = true;
    }
  }
}

export default ColorPicker;
