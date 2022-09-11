const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-walker-hover_step-before",
  async function (event) {
    let id = event.attributes.id;
    let obj = await appLoader.dom.get("[data-id='" + id + "']", true);

    if (obj[0]) {
      obj = obj[0];
    }

    if (!obj || event.attributes.type !== "hover") {
      return false;
    }

    if (event.attributes.state === "enter") {
      if (document.body.style.overflow === "auto") {
        document.body.style.overflow = "hidden";
        obj.classList.add("duration-100", "transition-all");

        setTimeout(() => {
          obj.classList.add("highlight");
        });
      } else {
        let current = await appLoader.dom.get(".highlight", true);
        let currentStack = current.length;

        while (currentStack--) {
          let item = current[currentStack];

          if (item === obj) {
            continue;
          }

          item.classList.remove("highlight");
          setTimeout(() => {
            item.classList.remove("duration-100", "transition-all");
            document.body.style.overflow = "auto";
          });
        }

        document.body.style.overflow = "hidden";
        obj.classList.add("duration-100", "transition-all");

        setTimeout(() => {
          obj.classList.add("highlight");
        });
      }
    }

    if (event.attributes.state === "leave") {
      obj.classList.remove("highlight");
      setTimeout(() => {
        obj.classList.remove("duration-100", "transition-all");
        document.body.style.overflow = "auto";
      });
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
