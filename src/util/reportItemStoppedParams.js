const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

/**
 * The optional parameters to pass in {@link Playstate#reportItemStopped} method
 */
class reportItemStoppedParams {
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
         * The next media type that will play.
         * @type {?string}
         */
        this.nextMediaType = undefined;

        /**
         * The position, in ticks, where playback stopped. 1 tick = 10000 ms.
         * @type {?number}
         */
        this.positionTicks = undefined;

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
    }
}

module.exports = reportItemStoppedParams;