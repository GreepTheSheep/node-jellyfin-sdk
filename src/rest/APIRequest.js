const fetch = require('node-fetch');
const BaseClient = require('../client/BaseClient'); // eslint-disable-line no-unused-vars

/**
 * APIRequest class
 * @private
 */
class APIRequest {
    /**
     * @param {BaseClient} client The client object
     */
    constructor(client) {
        /**
         * The client that created this request
         * @type {BaseClient}
         * @readonly
         */
        this.client = client;
    }

    /**
     * Makes a request to the API
     * @param {string} url The URL
     * @param {string} [method="GET"] The method
     * @param {Object} [body=null] The body
     * @returns {Promise<Object>} The response
     */
    do(url, method = 'GET', body = null) {
        this.url = new URL(url, this.client.options.baseUrl).toString();
        // Creating options
        const headers = new fetch.Headers({
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
            "Authorization": this.#MediaBrowserString()
        });
        this.options = {
            headers,
            method,
            body
        };
        /**
         * Emitted before every API request.
         * This event can emit several times for the same request, e.g. when hitting a rate limit.
         * <info>This is an informational event that is emitted quite frequently,
         * it is highly recommended to check `request.url` to filter the data.</info>
         * @event Client#apiRequest
         * @param {APIRequest} request The request that is about to be sent
        */
        this.client.emit('apiRequest', this);
        return fetch(this.url, this.options)
            .then(async response => {
                /**
                 * Emitted after every API request has received a response.
                 * This event does not necessarily correlate to completion of the request, e.g. when hitting a rate limit.
                 * <info>This is an informational event that is emitted quite frequently,
                 * it is highly recommended to check `request.url` to filter the data.</info>
                 * @event Client#apiResponse
                 * @param {APIRequest} request The request that triggered this response
                 * @param {Response} response The response received from the API
                 */
                this.client.emit('apiResponse', this, response);

                if (response.ok) {
                    return await response.json();
                } else {
                    const json = await response.json();
                    if (json) {
                        if (json.error) throw json.error;
                        else throw json;
                    } else throw response.statusText;
                }
            })
            .catch(error => {
                if (this.client.options.dev) error = error + " ("+this.url+")";
                throw error;
            });
    }

    /**
     * @private
     * @returns {string}
     */
    #MediaBrowserString() {
        let MediaBrowserObj = {
            "Client": this.client.options.clientInfo.name,
            "Device": this.client.options.deviceInfo.name,
            "DeviceId": this.client.options.deviceInfo.id,
            "Version": this.client.options.clientInfo.version
        };
        if (this.client.accessToken != null) MediaBrowserObj["Token"] = this.client.accessToken;

        let res = "MediaBrowser";
        for (let i = 0; i < Object.entries(MediaBrowserObj).length; i++) {
            let [key,value] = Object.entries(MediaBrowserObj)[i];
            res += ` ${key}=${value}`;
            if (i < Object.entries(MediaBrowserObj).length-1) res += ",";
        }
        return res;
    }
}

module.exports = APIRequest;