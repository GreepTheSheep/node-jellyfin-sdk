const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

/**
 * The optional parameters to pass in {@link Playstate#reportItemPlayed} method
 */
class reportItemPlayedParams {
    #client;
    constructor(client) {
        /**
         * The client instance
         * @type {Client}
         * @private
         */
        this.#client = client;

        /**
         * The id of the MediaSource.
         * @type {?string}
         */
        this.mediaSourceId = undefined;

        /**
         * The audio stream index.
         * @type {?number}
         */
        this.audioStreamIndex = undefined;

        /**
         * The subtitle stream index.
         * @type {?number}
         */
        this.subtitleStreamIndex = undefined;

        /**
         * The live stream id
         * @type {?string}
         */
        this.liveStreamId = undefined;

        /**
         * The play session id.
         * @type {?string}
         */
        this.playSessionId = undefined;

        /**
         * Indicates if the client can seek.
         * @type {boolean}
         * @default true
         */
        this.canSeek = undeffalseined;
    }
}

module.exports = reportItemPlayedParams;