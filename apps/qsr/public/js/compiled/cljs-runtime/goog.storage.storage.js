goog.provide("goog.storage.Storage");
goog.require("goog.json");
goog.require("goog.storage.ErrorCode");
goog.forwardDeclare("goog.storage.mechanism.Mechanism");
/**
 * @struct
 * @constructor
 * @param {!goog.storage.mechanism.Mechanism} mechanism
 */
goog.storage.Storage = function(mechanism) {
  /** @protected @type {goog.storage.mechanism.Mechanism} */ this.mechanism = mechanism;
};
/**
 * @param {string} key
 * @param {*} value
 */
goog.storage.Storage.prototype.set = function(key, value) {
  if (!goog.isDef(value)) {
    this.mechanism.remove(key);
    return;
  }
  this.mechanism.set(key, goog.json.serialize(value));
};
/**
 * @param {string} key
 * @return {*}
 */
goog.storage.Storage.prototype.get = function(key) {
  var json;
  try {
    json = this.mechanism.get(key);
  } catch (e) {
    return undefined;
  }
  if (goog.isNull(json)) {
    return undefined;
  }
  try {
    return JSON.parse(json);
  } catch (e$4) {
    throw goog.storage.ErrorCode.INVALID_VALUE;
  }
};
/**
 * @param {string} key
 */
goog.storage.Storage.prototype.remove = function(key) {
  this.mechanism.remove(key);
};

//# sourceMappingURL=goog.storage.storage.js.map
