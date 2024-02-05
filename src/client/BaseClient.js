const EventEmitter = require('events');
const APIRequest = require('../rest/APIRequest');
const Util = require('../util/Util');
const defaultOptions = require('../util/defaultOptions');

/**
 * The Base Client
 * @extends {EventEmitter}
 */
class BaseClient extends EventEmitter {
    /**
     * @param {defaultOptions} [options={}] The options to use
     */
    constructor(options = {}) {
        super();

        /**
         * The options of the client.
         * @type {defaultOptions}
         * @readonly
         */
        this.options = Util.mergeDefault(new defaultOptions(this), options);
    }

    /**
     * Do an API request
     * @param {string} url The URL to request
     * @param {string} [method="GET"] The HTTP method to use
     * @param {?Object} [body=null] The data to send
     * @returns {Promise<Object>} A promise that resolves to the API response
     * @private
     */
    async #apiReq(url, method = 'GET', body = null){
        const request = new APIRequest(this);

        return await request.do(url, method, body);
    }

}

module.exports = BaseClient;