const appLoader = window.getAppLoader();
const uuidv4 = require("uuid").v4;

class Block {
  /**
   * Will build the block
   *
   * @var {}
   *
   * @return {}
   */
  async make(tag, template) {
    const self = this;
    let block = bbBlocks.filter(function (item) {
      return item.tag === tag;
    });

    if (block[0]) {
      block = block[0];
    }

    appLoader.event.emit("bb-block-created", {
      tag: tag,
      options: block,
      template: template,
    });

    return template;
  }

  async structure(tag) {
    const self = this;
    let block = bbBlocks.filter(function (item) {
      return item.tag === tag;
    });

    if (block[0]) {
      block = block[0];
    }

    return block;
  }

  async injectContent(block, node) {
    block.innerHTML = "";
    block.appendChild(node);

    return block;
  }

  generateId() {
    return uuidv4();
  }
}

export default Block;
