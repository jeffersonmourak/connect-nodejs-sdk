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
var Error = require('./Error');
var Transaction = require('./Transaction');




/**
 * The ListTransactionsResponse model module.
 * @module model/ListTransactionsResponse
 * @version 2.5.2
 */

/**
 * Constructs a new <code>ListTransactionsResponse</code>.
 * Defines the fields that are included in the response body of a request to the [ListTransactions](#endpoint-listtransactions) endpoint.  One of &#x60;errors&#x60; or &#x60;transactions&#x60; is present in a given response (never both).
 * @alias module:model/ListTransactionsResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ListTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListTransactionsResponse} obj Optional instance to populate.
 * @return {module:model/ListTransactionsResponse} The populated <code>ListTransactionsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('transactions')) {
      obj['transactions'] = ApiClient.convertToType(data['transactions'], [Transaction]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * An array of transactions that match your query.
 * @member {Array.<module:model/Transaction>} transactions
 */
exports.prototype['transactions'] = undefined;
/**
 * A pagination cursor for retrieving the next set of results, if any remain. Provide this value as the `cursor` parameter in a subsequent request to this endpoint.  See [Paginating results](#paginatingresults) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



