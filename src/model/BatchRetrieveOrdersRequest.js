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
 * The BatchRetrieveOrdersRequest model module.
 * @module model/BatchRetrieveOrdersRequest
 * @version 2.5.2
 */

/**
 * Constructs a new <code>BatchRetrieveOrdersRequest</code>.
 * 
 * @alias module:model/BatchRetrieveOrdersRequest
 * @class
 * @param orderIds {Array.<String>} The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request.
 */
var exports = function(orderIds) {
  var _this = this;

  _this['order_ids'] = orderIds;
};

/**
 * Constructs a <code>BatchRetrieveOrdersRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchRetrieveOrdersRequest} obj Optional instance to populate.
 * @return {module:model/BatchRetrieveOrdersRequest} The populated <code>BatchRetrieveOrdersRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('order_ids')) {
      obj['order_ids'] = ApiClient.convertToType(data['order_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request.
 * @member {Array.<String>} order_ids
 */
exports.prototype['order_ids'] = undefined;



module.exports = exports;



