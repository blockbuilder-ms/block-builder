const uuidv4 = require("uuid").v4;

class Notification {
  notifications = {};

  succes(message, delay) {
    this.add("succes", message, delay);
  }

  error(message, delay) {
    this.add("error", message, delay);
  }

  warning(message, delay) {
    this.add("warning", message, delay);
  }

  information(message, delay) {
    this.add("information", message, delay);
  }

  async add(type, message, delay) {
    let icon;
    let bg;
    switch (type) {
      case "succes":
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
        bg = "#2b7f3a";

        break;

      case "error":
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
        bg = "#f35252";

        break;

      case "warning":
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>';
        bg = "#e9bc3d";

        break;

      case "information":
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
        bg = "#f5f5f5";

        break;

      default:
        return false;
    }

    let container = document.getElementById("notifications");
    let template = await window.getAppLoader().template.get("notification");

    if (!template) {
      return false;
    }

    let indicator = template.querySelector("[x-indicator]");
    let content = template.querySelector("[x-content]");
    let close = template.querySelector("[x-close]");
    let iconTarget = template.querySelector("[x-icon]");

    /**
     * Update indicator
     */
    let indicatorBar = indicator.querySelector(".indicator-bar");
    indicatorBar.style.background = bg;
    iconTarget.innerHTML = icon;
    content.innerHTML = message;

    template.id = this.generateId();
    template.classList.add(
      "opacity-0",
      "scale-90",
      "duration-200",
      "ease-in-out",
      "transition-all"
    );

    container.querySelector("[x-notifications]").appendChild(template);

    setTimeout(() => {
      template.classList.remove("opacity-0", "scale-90");

      setTimeout(() => {
        template.classList.add("opacity-0", "scale-90");
        setTimeout(() => {
          template.parentNode.removeChild(template);
        }, 200);
      }, delay);
    });
  }

  generateId() {
    return uuidv4();
  }
}

export default Notification;
