const appLoader = window.getAppLoader();
let controllerObj = import("./block-control/controller");

class BlockControl {
  /**
   * Holds the current build build controllers.
   *
   * @var {object}
   */
  instances = {};

  /**
   * Will build the block controller
   *
   * @var {}
   *
   * @return {}
   */
  async make(block, item) {
    const self = this;
    const controller = (await controllerObj).default;
    const instance = new controller();

    instance.build(block, item);

    self.instances[block["data-id"]] = instance;

    return instance;
  }

  async has(block) {
    const self = this;

    return self.instances[block["data-id"]];
  }

  async get(block) {
    const self = this;

    if (!self.instances[block["data-id"]]) {
      console.log(self.instances);
      return false;
    }

    const object = self.instances[block["data-id"]];
    const instance = object.instance;

    let currentInstances = object.mainContainer.querySelectorAll(
      ".instance:not(.hidden)"
    );

    for (let j in currentInstances) {
      let ci = currentInstances[j];

      if ("object" !== typeof ci) {
        continue;
      }

      ci.classList.add("hidden");
    }

    instance.classList.remove("hidden");

    return self.instances[block["data-id"]];
  }
}

export default BlockControl;
