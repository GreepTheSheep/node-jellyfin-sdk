const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

/**
 * The optional parameters to pass in {@link UniversalAudio#universalAudio} method
 */
class UniversalAudioParams {
    #client;
    constructor(client) {
        /**
         * The client instance
         * @type {Client}
         * @private
         */
        this.#client = client;

        /**
         * The audio containers.
         * @type {Array<string>}
         */
        this.container = [];

        /**
         * The media version id, if playing an alternate version.
         * @type {?string}
         */
        this.mediaSourceId = undefined;

        /**
         * The audio codec to transcode to.
         * @type {?string}
         */
        this.audioCodec = undefined;

        /**
         * The maximum number of audio channels.
         * @type {?number}
         */
        this.maxAudioChannels = undefined;

        /**
         * The number of how many audio channels to transcode to.
         * @type {?number}
         */
        this.transcodingAudioChannels = undefined;

        /**
         * The maximum streaming bitrate.
         * @type {?number}
         */
        this.maxStreamingBitrate = undefined;

        /**
         * Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
         * @type {?number}
         */
        this.audioBitRate = undefined;

        /**
         * Specify a starting offset, in ticks. 1 tick = 10000 ms.
         * @type {?number}
         */
        this.startTimeTicks = undefined;

        /**
         * The container to transcode to.
         * @type {?string}
         */
        this.transcodingContainer = undefined;

        /**
         * The transcoding protocol.
         * @type {"http" | "hls"}
         * @default "http"
         */
        this.transcodingProtocol = "http";

        /**
         * The maximum audio sample rate.
         * @type {?number}
         */
        this.maxAudioSampleRate = undefined;

        /**
         * The maximum audio bit depth.
         * @type {?number}
         */
        this.maxAudioBitDepth = undefined;

        /**
         * Whether to enable remote media.
         * @type {?boolean}
         */
        this.enableRemoteMedia = undefined;

        /**
         * Whether to break on non key frames.
         * @type {boolean}
         * @default false
         */
        this.breakOnNonKeyFrames = false;

        /**
         * Whether to enable redirection.
         * @type {boolean}
         * @default true
         */
        this.enableRedirection = true;
    }
}

module.exports = UniversalAudioParams;