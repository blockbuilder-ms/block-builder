class Template {
  /**
   * Will fetch the template from dom
   *
   * @var {}
   *
   * @return {}
   */
  async get(tag, type) {
    if (!tag) {
      return false;
    }

    if (!type) {
      type = "block";
    }

    const $template = document.getElementById("bb-" + type + "-" + tag);

    if (!$template) {
      return false;
    }

    return $template.content.firstElementChild.cloneNode(true);
  }
}

export default Template;
