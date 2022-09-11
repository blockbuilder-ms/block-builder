class Request {
  /**
   * Returns a requests object that can be passed to a get/post/delete/patch request
   *
   * @return {RequestObject}
   */
  async make() {
    let Object = await import("./request/request-object");

    return new Object.default();
  }

  async loadData(key, target, space, supress) {
    let requestObject = await this.make();
    let append = "";

    if (!window.getAppLoader().state.request_cache) {
      window.getAppLoader().state.request_cache = {};
    }

    if (space) {
      append = "?space=" + space;
    }

    if (window.getAppLoader().state.request_cache[key + append]) {
      return this.cache[key + append];
    }

    requestObject.setHeader("X-WP-Nonce", BBNonce);
    requestObject.setHeader("X-WP-PostId", postObject.ID);
    requestObject.setUrl("/wp-json/block-builder/v1/lazyload/" + key + append);

    let response = await this.get(requestObject);

    // Request was not 200 succes
    if (response.status !== 200) {
      if (!supress) {
        window.getAppLoader().notification.error(response.response, 2500);
      }
      return;
    }

    window.getAppLoader().state.request_cache[key + append] = response;

    // request was an succes
    if (!supress) {
      window.getAppLoader().notification.succes(response.response, 2500);
    }

    let spinner = target.querySelector("[x-spinner]");

    if (spinner) {
      spinner.classList.add("opacity-0");

      setTimeout(() => {
        target.innerHTML = response.body_response;
      }, 200);
    } else {
      target.innerHTML = response.body_response;
    }

    target.setAttribute("x-loaded", true);
    setTimeout(async () => {
      await window.getAppLoader().settings.load();
      await window.getAppLoader().loadActions();
    }, 200);

    return true;
  }

  /**
   * Will change and update the request object to be ready
   * for a get call
   *
   * @var {RequestObject} requestObject
   *
   * @return {ResponseObject}
   */
  async get(requestObject) {
    requestObject.setMethod("GET");

    if (window.getAppLoader().state.request_cache[requestObject.getUrl()]) {
      return window.getAppLoader().state.request_cache[requestObject.getUrl()];
    }

    return await this.run(requestObject);
  }

  /**
   * Will change and update the request object to be ready
   * for a post call
   *
   * @var {RequestObject} requestObject
   *
   * @return {ResponseObject}
   */
  async post(requestObject) {
    requestObject.setMethod("POST");

    return await this.run(requestObject);
  }

  /**
   * Will change and update the request object to be ready
   * for a delete call
   *
   * @var {RequestObject} requestObject
   *
   * @return {ResponseObject}
   */
  async delete(requestObject) {
    requestObject.setMethod("DELETE");

    return await this.run(requestObject);
  }

  /**
   * Will change and update the request object to be ready
   * for a put call
   *
   * @var {RequestObject} requestObject
   *
   * @return {ResponseObject}
   */
  async put(requestObject) {
    requestObject.setMethod("PUT");

    return await this.run(requestObject);
  }

  /**
   * Main firing sequence executed by the sub branches (GET|POST|DELETE|PUT)
   *
   * @var {RequestObject} requestObject
   *
   * @return {ResponseObject}
   */
  async run(requestObject) {
    let args = {
      method: requestObject.getMethod(),
      mode: requestObject.getMode(),
      cache: requestObject.getCacheMode(),
      credentials: requestObject.getCredentials(),
      headers: requestObject.getHeaders(),
      redirect: requestObject.getRedirect(),
      referrerPolicy: requestObject.getReferrerPolicy(),
    };

    if (args.method !== "GET") {
      args.body = requestObject.getBody();
    }

    if (!args.cache || !args.method) {
      console.log("Arguments were not valid");
      return false;
    }

    let result = await fetch(requestObject.getUrl(), args);

    if (result.status !== 200) {
      console.error("Request failed", result);
      return false;
    }

    let response = await result.json();

    return response;
  }
}

export default Request;
