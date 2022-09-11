class Settings {
  constructor() {
    this.loaded = false;
  }
  async reload() {
    this.settings = null;
    this.loaded = false;
    this.load();
  }
  async load() {
    const self = this;
    // 1. Load settings
    if (!this.settings && bbSettings) {
      this.settings = bbSettings;
    }

    await self._loadData();

    self.loaded = true;

    return true;
  }

  async _loadData() {
    // 2. Iterate settings in K/V
    for (let i in this.settings) {
      let key = i;
      let value = this.settings[key];

      // 3. Find dom object by name equal to K
      let owner = document.querySelector('[name="' + key + '"]');

      if (!owner) {
        continue;
      }

      if (owner.tagName === "INPUT") {
        switch (owner.type) {
          case "checkbox":
          case "radio":
            if (value) {
              owner.checked = true;
            }
            break;

          default:
            owner.value = value;
        }
      } else {
        owner.value = value;
      }
    }

    return true;
  }
}

export default Settings;
