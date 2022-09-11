class Script {
  constructor() {
    this.stackLoaded = {};
  }

  async loaded(key) {
    console.log(this.stackLoaded[key] !== undefined);
    return this.stackLoaded[key] !== undefined;
  }

  async load(key, path, where) {
    if (!document.getElementById(key + "-css")) {
      var body = document.body;
      var script = document.createElement("script");

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

      script.id = key;
      script.type = "text/javascript";
      script.src = base + path + ".js";
      body.appendChild(script);

      this.stackLoaded[key] = true;
    }
  }
}

export default Script;
