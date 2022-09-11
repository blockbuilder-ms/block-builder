class Style {
  constructor() {
    this.stackLoaded = {};
  }

  async loaded(key) {
    return this.stackLoaded[key] !== undefined;
  }

  async load(key, path, where) {
    if (!document.getElementById(key + "-css")) {
      var head = document.getElementsByTagName("head")[0];
      var link = document.createElement("link");

      let base;

      switch (where) {
        case "plugin-admin":
          base =
            window.location.origin + "/wp-content/plugins/bb-block-builder/";
          break;

        default:
          base =
            window.location.origin + "/wp-content/plugins/bb-block-builder/";
      }

      link.id = key;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = base + path + ".css";
      head.appendChild(link);

      this.stackLoaded[key] = true;
    }
  }
}

export default Style;
