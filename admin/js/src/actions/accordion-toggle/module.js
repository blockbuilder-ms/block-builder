class AccordionToggle {
  constructor(link) {
    const self = this;
    self.timeout = false;
    self.link = link;
    self.content = link.parentNode.querySelector(".accordion-content");

    if (self.link.hasAttribute("x-options")) {
      self.options = link.getAttribute("x-options");

      if (self.options) {
        self.options = JSON.parse(self.options);
      }
    }

    self.link.addEventListener("click", function (e) {
      self.onPress(e, self);
    });
  }

  onPress(e, self) {
    e.preventDefault();

    self._despawnToggles();
    self._spawn();

    let backs = self.content.querySelectorAll("[x-back]");
    let bSize = backs.length;

    while (bSize--) {
      backs[bSize].addEventListener("click", function () {
        self._despawn();
        setTimeout(function () {
          self._spawnToggles();
        }, 215);
      });
    }
  }

  _spawnToggles() {
    let toggles = document.querySelectorAll(".accordion-toggle");
    let size = toggles.length;

    while (size--) {
      toggles[size].classList.remove("hidden");
      toggles[size]
        .querySelector("a.accordion-header")
        .classList.remove("hidden");
    }
  }

  _despawnToggles() {
    let toggles = document.querySelectorAll(".accordion-toggle:not(.hidden)");
    let size = toggles.length;

    while (size--) {
      toggles[size].classList.add("hidden");
      toggles[size].querySelector("a.accordion-header").classList.add("hidden");
    }
  }

  _spawn() {
    const self = this;
    self.content.parentNode.classList.remove("hidden");
    self.content.classList.remove("hidden");

    setTimeout(function () {
      self.content.classList.remove("opacity-0");
    }, 15);
  }

  _despawn() {
    const self = this;
    self.content.classList.add("opacity-0");

    setTimeout(function () {
      self.content.classList.add("hidden");
    }, 215);
  }
}

export default AccordionToggle;
