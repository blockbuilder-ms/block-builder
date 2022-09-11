/**
 * Class to control and debug / monitor events
 * ran and used by the editor and its assets.
 */
class BBFilters {
  /**
   * Will hold the events registered with the application through
   * the asssets and extensions
   *
   * @var {object}
   */
  filters = {};
  hits = {};

  /**
   * Registers a new event
   */
  add(name, closure, priority) {
    if (!this.filters[name]) {
      this.filters[name] = {};
    }

    if (!this.filters[priority]) {
      this.filters[name][priority] = [];
    }

    this.filters[name][priority].push(closure);
  }

  /**
   * Emits an event
   */
  apply(name, data) {
    for (let i in this.filters[name]) {
      let filter = this.filters[name][i];

      for (let j in filter) {
        data = filter[j](data);
      }
    }

    return data;
  }
}

export default BBFilters;
