const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

/**
 * The optional parameters to pass in {@link Playstate#reportItemProgress} method
 */
class reportItemProgressParams {
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
         * The current position, in ticks. 1 tick = 10000 ms.
         * @type {?number}
         */
        this.positionTicks = undefined;

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
         * The client volume level. Scale of 0-100.
         * @type {?number}
         */
        this.volumeLevel = undefined;

        /**
         * The play method.
         * @type {PlayMethod}
         * @default "DirectPlay"
         */
        this.playMethod = "DirectPlay";

        /**
         * The live stream id.
         * @type {?string}
         */
        this.liveStreamId = undefined;

        /**
         * The play session id.
         * @type {?string}
         */
        this.playSessionId = undefined;

        /**
         * The repeat mode.
         * @type {RepeatMode}
         * @default "RepeatNone"
         */
        this.repeatMode = "RepeatNone";

        /**
         * Indicates if the player is paused.
         * @type {boolean}
         * @default false
         */
        this.isPaused = false;

        /**
         * Indicates if the player is muted.
         * @type {boolean}
         * @default false
         */
        this.isMuted = false;
    }
}

module.exports = reportItemProgressParams;