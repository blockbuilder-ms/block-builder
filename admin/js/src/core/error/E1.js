class E1 {
  async apply() {
    const postContent = postObject.post_content;

    let button = document.getElementById("error-fix-button");
    let viewPageButton = document.getElementById("error-view-page");
    let reloadButton = document.getElementById("reload-button");

    document.getElementById("loading-message").innerHTML =
      "Applying solution now.. Please wait..";

    setTimeout(() => {
      button.classList.add("opacity-0");
      viewPageButton.classList.add("opacity-0");
      reloadButton.classList.add("opacity-0");
      setTimeout(() => {
        reloadButton.classList.add("hidden");
        button.classList.add("hidden");
        viewPageButton.classList.add("hidden");
      }, 200);
    });

    // Make template
    let template = await window.getAppLoader().template.get("core:html");

    if (!template) {
      console.error(
        "We did not find the template needed to apply the solution.. Aborting.."
      );

      return;
    }

    // Make Block
    const block = await window.getAppLoader().block.make("core:html", template);
    let structure = await window.getAppLoader().block.structure("core:html");

    structure.content = postContent;

    // Append to the structured data.
    let result = await window
      .getAppLoader()
      .dom.append(
        block,
        await window
          .getAppLoader()
          .dom.get("#content-wrap [x-action='drop']", true),
        structure,
        true
      );

    // Do a save
    if (result) {
      window.getAppLoader().event.emit("bb-builder-save", {
        attributes: {
          srcEventElement: document.getElementById("bb-builder-save"),
        },
      });

      document.getElementById("loading-message").innerHTML =
        "Solution applied, Reloading..";

      setTimeout(function () {
        window.getAppLoader().event.emit("bb-builder-reload-before");
      }, 1500);

      return true;
    } else {
      document.getElementById("loading-message").innerHTML =
        "Solution could not be applied..";

      window
        .getAppLoader()
        .notification.error("Could not apply fix to the post.");

      return false;
    }
  }
}

export default E1;
