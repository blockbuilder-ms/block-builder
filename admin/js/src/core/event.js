/**
 * Class to control and debug / monitor events
 * ran and used by the editor and its assets.
 */
class BBEvent {
  constructor() {
    this.emit("bb-before-load");
  }

  /**
   * Will hold the events registered with the application through
   * the asssets and extensions
   *
   * @var {object}
   */
  events = {};
  hits = {};

  /**
   * Registers a new event
   */
  register(name, receiver) {
    const event = new Event(name);

    this.events[name] = {
      receiver: receiver ? receiver : document,
      name: name,
      dispatchable: event,
    };

    return this.events[name];
  }

  /**
   * Listenes to an event
   */
  on(name, callback, errorCallback, receiver) {
    const self = this;
    let obj = typeof receiver === "object" ? receiver : document;

    obj.addEventListener(name, function (e) {
      self.hits[name] = self.hits[name] ? self.hits[name] + 1 : 1;
      callback(e, self);
    });
  }

  /**
   * Emits an event
   */
  async emit(name, args) {
    const self = this;
    let event = this.events[name];

    if (!event) {
      event = this.register(name);
    }

    let receiver = event.receiver;
    if (args && typeof args === "object") {
      for (let i in args) {
        event.dispatchable[i] = args[i];
      }
    }

    await receiver.dispatchEvent(event.dispatchable);

    if (!self.hits[name] && window.getAppLoader().notification) {
      // window
      //   .getAppLoader()
      //   .notification.warning("No events bound for " + name, 2500);
    }
  }
}

export default BBEvent;
