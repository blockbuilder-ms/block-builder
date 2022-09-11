/**
 * Class to control and debug / monitor events
 * ran and used by the editor and its assets.
 */
class BBError {
  byCode(code) {
    return () => import("./error/" + code);
  }
}

export default BBError;
