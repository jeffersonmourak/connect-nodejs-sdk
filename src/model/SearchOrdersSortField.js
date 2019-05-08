/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');


/**
 * Enum class SearchOrdersSortField.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "CREATED_AT"
   * @const
   */
  "CREATED_AT": "CREATED_AT",
  /**
   * value: "UPDATED_AT"
   * @const
   */
  "UPDATED_AT": "UPDATED_AT",
  /**
   * value: "CLOSED_AT"
   * @const
   */
  "CLOSED_AT": "CLOSED_AT"};

/**
 * Returns a <code>SearchOrdersSortField</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/SearchOrdersSortField} The enum <code>SearchOrdersSortField</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;

