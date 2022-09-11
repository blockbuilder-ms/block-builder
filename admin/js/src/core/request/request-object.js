class RequestObject {
  url = "";
  headers = {
    "Content-Type": "application/json",
  };
  redirect = "follow";
  body = {};
  method = "GET";
  mode = "cors";
  cache = "no-cache";
  referererPolicy = "";
  credentials = "same-origin";

  setUrl(url) {
    if (url === "") {
      return false;
    }

    this.url = url;
  }

  getUrl() {
    return this.url;
  }

  setHeaders(headers) {
    this.headers = headers;
  }

  setHeader(name, value) {
    this.headers[name] = value;
  }

  getHeaders() {
    return this.headers;
  }

  getHeader(key) {
    return this.headers[key];
  }

  setRedirect(policy) {
    this.redirect = policy;
  }

  getRedirect() {
    return this.redirect;
  }

  setBody(body) {
    this.body = JSON.stringify(body);
  }

  getBody() {
    return this.body;
  }

  setMethod(method) {
    this.method = method;
  }

  getMethod() {
    return this.method;
  }

  setMode(mode) {
    this.mode = mode;
  }

  getMode() {
    return this.mode;
  }

  setCacheMode(cacheMode) {
    this.cache = cacheMode;
  }

  getCacheMode() {
    return this.cache;
  }

  setReferererPolicy(policy) {
    this.referererPolicy = policy;
  }

  getReferrerPolicy() {
    return this.referererPolicy;
  }

  setCredentials(credentials) {
    this.credentials = credentials;
  }

  getCredentials() {
    return this.credentials;
  }
}

export default RequestObject;
