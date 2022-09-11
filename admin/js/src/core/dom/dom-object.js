class DomObject {
  attributes = {
    id: "",
    class: "",
    "x-options": "",
  };

  options(key) {
    if (!key) {
      return this.attributes["x-options"];
    }

    return this.attributes["x-options"][key]
      ? this.attributes["x-options"][key]
      : false;
  }

  _prepareAttributes() {
    for (let i in this.attributes) {
      this.attributes[i] = this.node.hasAttribute(i)
        ? this.node.getAttribute(i)
        : false;
    }
  }

  constructor(node) {
    if (node === 0) {
      // Failed to find the node, make that clear to the user.
      console.log("Did not find the queried selector");
      return;
    }

    this.node = node;
    this._prepareAttributes();
  }
}
