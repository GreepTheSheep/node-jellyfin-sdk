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
     * Gets an universal audio stream.
     * <info>This is an old method by Jellyfin that works only if you're connected with a token,
     * It's recommended to use {@link UniversalAudio#stream} instead.</info>
     * @param {string} itemId The Item id.
     * @param {universalAudioParams} params Optional parameters.
     * @returns {Promise<ArrayBuffer>}
     */
    async universalAudio(itemId, params = {}) {
        const searchParams = new URLSearchParams();
        searchParams.set("userId", this.client.user.id);
        searchParams.set("deviceId", this.client.options.deviceInfo.id);
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
     * @param {string} [container=null] The container (mp3, flac etc.). If passed, the file will be live converted by the server. Defaults to its original container.
     * @param {audioStreamParams} [params={}] Optional parameters.
     * @returns {Promise<ArrayBuffer>}
     */
    async stream(itemId, container = null, params = {}) {
        const searchParams = new URLSearchParams();
        params = Util.mergeDefault(new universalAudioParams(this), params);
        Object.keys(params).forEach(k=>{
            if (Array.isArray(params[k]) && params[k].length > 0) searchParams.set(k, params[k].join(','));
            else if (!Array.isArray(params[k]))
                if (params[k] != undefined || params[k] != null) {
                    searchParams.set(k, params[k]);
                }
        });
        return await this.client.apiReqArrayBuffer("Audio/"+itemId+`/stream${container != null && container.length>0 ? ("."+container) : ""}?` + searchParams.toString());
    }
}

module.exports = UniversalAudio;