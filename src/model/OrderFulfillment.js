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
var OrderFulfillmentPickupDetails = require('./OrderFulfillmentPickupDetails');
var OrderFulfillmentShipmentDetails = require('./OrderFulfillmentShipmentDetails');




/**
 * The OrderFulfillment model module.
 * @module model/OrderFulfillment
 */

/**
 * Constructs a new <code>OrderFulfillment</code>.
 * Contains details on how to fulfill this order.
 * @alias module:model/OrderFulfillment
 * @class
 */
var exports = function() {
  var _this = this;






};

/**
 * Constructs a <code>OrderFulfillment</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderFulfillment} obj Optional instance to populate.
 * @return {module:model/OrderFulfillment} The populated <code>OrderFulfillment</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('state')) {
      obj['state'] = ApiClient.convertToType(data['state'], 'String');
    }
      if (data.hasOwnProperty('pickup_details')) {
      obj['pickup_details'] = OrderFulfillmentPickupDetails.constructFromObject(data['pickup_details']);
    }
      if (data.hasOwnProperty('shipment_details')) {
      obj['shipment_details'] = OrderFulfillmentShipmentDetails.constructFromObject(data['shipment_details']);
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the fulfillment only within this order.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * The type of the fulfillment. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values
 * @member {String} type
 */
exports.prototype['type'] = undefined;
/**
 * The state of the fulfillment. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values
 * @member {String} state
 */
exports.prototype['state'] = undefined;
/**
 * Contains details for a pickup fulfillment. Required when fulfillment type is `PICKUP`.
 * @member {module:model/OrderFulfillmentPickupDetails} pickup_details
 */
exports.prototype['pickup_details'] = undefined;
/**
 * Contains details for a shipment fulfillment. Required when fulfillment type is `SHIPMENT`.  A shipment fulfillment's relationship to fulfillment `state`: `PROPOSED`: A shipment is requested. `RESERVED`: Fulfillment accepted. Shipment processing. `PREPARED`: Shipment packaged. Shipping label created. `COMPLETED`: Package has been shipped. `CANCELED`: Shipment has been canceled. `FAILED`: Shipment has failed.
 * @member {module:model/OrderFulfillmentShipmentDetails} shipment_details
 */
exports.prototype['shipment_details'] = undefined;



module.exports = exports;



