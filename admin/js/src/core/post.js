/**
 * Class to control the post being edited
 */
class BBPost {
  constructor() {
    this.load();
  }

  load() {
    if (!postObject) {
      console.log("No post object");
      return false;
    }

    for (let i in postObject) {
      this[i] = postObject[i];
    }
  }
}

export default BBPost;
