class Action {
  constructor() {
    this.options = {};
  }

  /**
   * Adds options to the action to be ran
   *
   * @param {object} options
   */
  withOptions(options) {
    this.options = options;

    return this;
  }

  /**
   * Force runs a specific action
   *
   * @param {string} name
   */
  async run(name, id) {
    const appLoader = window.getAppLoader();
    let obj = document.getElementById(id);

    if (!obj)
      obj = document.querySelector('[x-options=\'{"data-id":"' + id + "\"}']");

    let refKeys = Object.keys(appLoader.references);
    if (refKeys.indexOf(id) !== -1) {
      const instance = appLoader.references[id];

      if (!instance) {
        console.error("Action not found for: " + id);
        return;
      }

      if (typeof instance.forceRun === "function") {
        instance.forceRun(this.options);
      }
    } else {
      const instance = await appLoader._load(name, obj, true);

      if (!instance) {
        console.error("Action not found for: " + id);
        return;
      }

      if (typeof instance.forceRun === "function") {
        instance.forceRun(this.options);
      }
    }
  }
}

export default Action;
