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
 * The ListPaymentsRequest model module.
 * @module model/ListPaymentsRequest
 */

/**
 * Constructs a new <code>ListPaymentsRequest</code>.
 * Retrieves a list of refunds taken by the account making the request.  Max results per page: 100
 * @alias module:model/ListPaymentsRequest
 * @class
 */
var exports = function() {
  var _this = this;









};

/**
 * Constructs a <code>ListPaymentsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListPaymentsRequest} obj Optional instance to populate.
 * @return {module:model/ListPaymentsRequest} The populated <code>ListPaymentsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('begin_time')) {
      obj['begin_time'] = ApiClient.convertToType(data['begin_time'], 'String');
    }
      if (data.hasOwnProperty('end_time')) {
      obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
    }
      if (data.hasOwnProperty('sort_order')) {
      obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'String');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('total')) {
      obj['total'] = ApiClient.convertToType(data['total'], 'Number');
    }
      if (data.hasOwnProperty('last_4')) {
      obj['last_4'] = ApiClient.convertToType(data['last_4'], 'String');
    }
      if (data.hasOwnProperty('card_brand')) {
      obj['card_brand'] = ApiClient.convertToType(data['card_brand'], 'String');
    }
    }
  return obj;
}

/**
 * Timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year.
 * @member {String} begin_time
 */
exports.prototype['begin_time'] = undefined;
/**
 * Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
 * @member {String} end_time
 */
exports.prototype['end_time'] = undefined;
/**
 * The order in which results are listed. - `ASC` - oldest to newest - `DESC` - newest to oldest (default).
 * @member {String} sort_order
 */
exports.prototype['sort_order'] = undefined;
/**
 * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](/basics/api101/pagination) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * ID of location associated with payment
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The exact amount in the total_money for a `Payment`.
 * @member {Number} total
 */
exports.prototype['total'] = undefined;
/**
 * The last 4 digits of `Payment` card.
 * @member {String} last_4
 */
exports.prototype['last_4'] = undefined;
/**
 * The brand of `Payment` card. For example, `VISA`
 * @member {String} card_brand
 */
exports.prototype['card_brand'] = undefined;



module.exports = exports;



