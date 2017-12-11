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
 * The CreateOrderRequestModifier model module.
 * @module model/CreateOrderRequestModifier
 * @version 2.5.2
 */

/**
 * Constructs a new <code>CreateOrderRequestModifier</code>.
 * Represents a modifier applied to a single line item.
 * @alias module:model/CreateOrderRequestModifier
 * @class
 * @param catalogObjectId {String} The catalog object ID of a [CatalogModifier](#type-catalogmodifier).
 */
var exports = function(catalogObjectId) {
  var _this = this;

  _this['catalog_object_id'] = catalogObjectId;
};

/**
 * Constructs a <code>CreateOrderRequestModifier</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateOrderRequestModifier} obj Optional instance to populate.
 * @return {module:model/CreateOrderRequestModifier} The populated <code>CreateOrderRequestModifier</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
    }
  return obj;
}

/**
 * The catalog object ID of a [CatalogModifier](#type-catalogmodifier).
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;



module.exports = exports;



