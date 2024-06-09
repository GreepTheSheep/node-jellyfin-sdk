const Client = require("../client/Client"); // eslint-disable-line no-unused-vars
const universalAudioParams = require("../util/universalAudioParams"); // eslint-disable-line no-unused-vars
const Util = require("../util/Util"); // eslint-disable-line no-unused-vars

/**
 * UniversalAudio stream
 */
class UniversalAudio {
    constructor(client) {
        /**
         * The client that instantiated this
         * @type {Client}
         */
        this.client = client;
    }

    /**
     * Gets an audio stream, this require device ID.
     * @param {string} itemId The Item id.
     * @param {universalAudioParams} params Optional parameters.
     * @returns {Promise<ArrayBuffer>}
     */
    async universalAudio(itemId, params = {}) {
        const searchParams = new URLSearchParams();
        params = Util.mergeDefault(new universalAudioParams(this), params);
        Object.keys(params).forEach(k=>{
            if (Array.isArray(params[k]) && params[k].length > 0) searchParams.set(k, params[k].join(','));
            else if (!Array.isArray(params[k]))
                if (params[k] != undefined || params[k] != null) {
                    searchParams.set(k, params[k]);
                }
        });
        return await this.client.apiReqArrayBuffer("Audio/"+itemId+"/universal?" + searchParams.toString());
    }

    /**
     * Gets an audio stream.
     * @param {string} itemId The Item id.
     * @param {string} [container=""] The container (mp3, flac etc.). If passed, the file will be live converted by the server. Defaults to its original container.
     * @param {audioStreamParams} [params={}] Optional parameters.
     * @returns {Promise<ArrayBuffer>}
     */
    async stream(itemId, container = "", params = {}) {
        const searchParams = new URLSearchParams();
        params = Util.mergeDefault(new universalAudioParams(this), params);
        Object.keys(params).forEach(k=>{
            if (Array.isArray(params[k]) && params[k].length > 0) searchParams.set(k, params[k].join(','));
            else if (!Array.isArray(params[k]))
                if (params[k] != undefined || params[k] != null) {
                    searchParams.set(k, params[k]);
                }
        });
        return await this.client.apiReqArrayBuffer("Audio/"+itemId+`/stream${container.length>0 ? ("."+container) : ""}?` + searchParams.toString());
    }
}

module.exports = UniversalAudio;