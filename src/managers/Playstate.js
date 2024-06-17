const Client = require("../client/Client"); // eslint-disable-line no-unused-vars
const reportItemPlayedParams = require('../util/reportItemPlayedParams');
const reportItemStoppedParams = require('../util/reportItemStoppedParams');
const reportItemProgressParams = require('../util/reportItemProgressParams');
const Util = require("../util/Util"); // eslint-disable-line no-unused-vars

/**
 * Playstate manager
 */
class Playstate {
    constructor(client) {
        /**
         * The client that instantiated this
         * @type {Client}
         */
        this.client = client;
    }

    /**
     * Reports that a session has begun playing an item.
     * @param {string} itemId The Item id.
     * @param {PlayMethod} [playMethod = "DirectPlay"] The play method.
     * @param {reportItemPlayedParams} [params={}] Optional parameters.
     * @returns {Promise<void>}
     */
    async reportItemPlayed(itemId, playMethod = "DirectPlay", params = {}) {
        const searchParams = new URLSearchParams();
        searchParams.set("playMethod", playMethod);
        params = Util.mergeDefault(new reportItemPlayedParams(this.client), params);
        Object.keys(params).forEach(k=>{
            if (Array.isArray(params[k]) && params[k].length > 0) searchParams.set(k, params[k].join(','));
            else if (!Array.isArray(params[k]))
                if (params[k] != undefined || params[k] != null) {
                    searchParams.set(k, params[k]);
                }
        });
        return await this.client.apiReq("PlayingItems/"+itemId+"?" + searchParams.toString(), "POST");
    }

    /**
     * Reports that a session has stopped playing an item.
     * @param {string} itemId The Item id.
     * @param {reportItemStoppedParams} [params={}] Optional parameters.
     * @returns {Promise<void>}
     */
    async reportItemStopped(itemId, params = {}) {
        const searchParams = new URLSearchParams();
        params = Util.mergeDefault(new reportItemStoppedParams(this.client), params);
        Object.keys(params).forEach(k=>{
            if (Array.isArray(params[k]) && params[k].length > 0) searchParams.set(k, params[k].join(','));
            else if (!Array.isArray(params[k]))
                if (params[k] != undefined || params[k] != null) {
                    searchParams.set(k, params[k]);
                }
        });
        return await this.client.apiReq("PlayingItems/"+itemId+"?" + searchParams.toString(), "DELETE");
    }

    /**
     * Reports a session's playback progress.
     * @param {string} itemId The Item id.
     * @param {reportItemProgressParams} [params={}] Optional parameters.
     * @returns {Promise<void>}
     */
    async reportItemProgress(itemId, params = {}) {
        const searchParams = new URLSearchParams();
        params = Util.mergeDefault(new reportItemProgressParams(this.client), params);
        Object.keys(params).forEach(k=>{
            if (Array.isArray(params[k]) && params[k].length > 0) searchParams.set(k, params[k].join(','));
            else if (!Array.isArray(params[k]))
                if (params[k] != undefined || params[k] != null) {
                    searchParams.set(k, params[k]);
                }
        });
        return await this.client.apiReq("PlayingItems/"+itemId+"/Progress?" + searchParams.toString(), "POST");
    }
}

module.exports = Playstate;