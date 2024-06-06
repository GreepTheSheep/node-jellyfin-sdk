const Item = require("./Item"); // eslint-disable-line no-unused-vars

/** Represents informations from a media source. */
class MediaSourceInfo {
    #data;
    constructor(item, data) {
        /**
         * The client that instantiated this
         * @type {Item}
         */
        this.item = item;

        /**
         * The raw data
         * @type {object}
         * @private
         */
        this.#data = data;
    }

    /**
     * @type {MediaSourceInfoProtocol}
     */
    get protocol() {
        return this.#data.Protocol;
    }

    /**
     * @type {?string}
     */
    get id() {
        return this.#data.Id;
    }

    /**
     * @type {?string}
     */
    get path() {
        return this.#data.Path;
    }

    /**
     * @type {?string}
     */
    get encoderPath() {
        return this.#data.EncoderPath;
    }

    /**
     * @type {?MediaSourceInfoProtocol}
     */
    get encoderProtocol() {
        return this.#data.EncoderProtocol;
    }

    /**
     * @type {MediaSourceInfoType}
     */
    get type() {
        return this.#data.Type;
    }

    /**
     * @type {?string}
     */
    get container() {
        return this.#data.Container;
    }

    /**
     * @type {?number}
     */
    get size() {
        return this.#data.Size;
    }

    /**
     * @type {?string}
     */
    get name() {
        return this.#data.Name;
    }

    /**
     * Whether the media is remote. Differentiate internet url vs local network.
     * @type {boolean}
     */
    get isRemote() {
        return this.#data.IsRemote;
    }

    /**
     * @type {?string}
     */
    get eTag() {
        return this.#data.ETag;
    }

    /**
     * @type {?number}
     */
    get runTimeTicks() {
        return this.#data.RunTimeTicks;
    }

    /**
     * @type {boolean}
     */
    get readAtNativeFramerate() {
        return this.#data.ReadAtNativeFramerate;
    }

    /**
     * @type {boolean}
     */
    get ignoreDts() {
        return this.#data.IgnoreDts;
    }

    /**
     * @type {boolean}
     */
    get ignoreIndex() {
        return this.#data.IgnoreIndex;
    }

    /**
     * @type {boolean}
     */
    get genPtsInput() {
        return this.#data.GenPtsInput;
    }

    /**
     * @type {boolean}
     */
    get supportsTranscoding() {
        return this.#data.SupportsTranscoding;
    }

    /**
     * @type {boolean}
     */
    get supportsDirectStream() {
        return this.#data.SupportsDirectStream;
    }

    /**
     * @type {boolean}
     */
    get supportsDirectPlay() {
        return this.#data.SupportsDirectPlay;
    }

    /**
     * @type {boolean}
     */
    get isInfiniteStream() {
        return this.#data.IsInfiniteStream;
    }

    /**
     * @type {boolean}
     */
    get requiresOpening() {
        return this.#data.RequiresOpening;
    }

    /**
     * @type {?string}
     */
    get openToken() {
        return this.#data.OpenToken;
    }

    /**
     * @type {boolean}
     */
    get requiresClosing() {
        return this.#data.RequiresClosing;
    }

    /**
     * @type {?string}
     */
    get liveStreamId() {
        return this.#data.LiveStreamId;
    }

    /**
     * @type {?number}
     */
    get bufferMs() {
        return this.#data.BufferMs;
    }

    /**
     * @type {boolean}
     */
    get requiresLooping() {
        return this.#data.RequiresLooping;
    }

    /**
     * @type {boolean}
     */
    get supportsProbing() {
        return this.#data.SupportsProbing;
    }

    /**
     * @type {?VideoType}
     */
    get videoType() {
        return this.#data.VideoType;
    }

    /**
     * @type {?IsoType}
     */
    get isoType() {
        return this.#data.IsoType;
    }

    /**
     * @type {?Video3DFormat}
     */
    get video3DFormat() {
        return this.#data.Video3DFormat;
    }

    /**
     * @type {?Array<object>} TODO: MeiaStream
     */
    get mediaStreams() {
        return this.#data.MediaStreams;
    }

    /**
     * @type {?Array<object>} TODO: MediaAttachment
     */
    get mediaAttachments() {
        return this.#data.MediaAttachments;
    }

    /**
     * @type {?Array<string>}
     */
    get formats() {
        return this.#data.Formats;
    }

    /**
     * @type {?number}
     */
    get bitrate() {
        return this.#data.Bitrate;
    }

    /**
     * @type {?MediaTimestampFormat}
     */
    get timestamp() {
        return this.#data.Timestamp;
    }

    /**
     * @type {?object}
     */
    get requiredHttpHeaders() {
        return this.#data.RequiredHttpHeaders;
    }

    /**
     * @type {?string}
     */
    get transcodingUrl() {
        return this.#data.TranscodingUrl;
    }

    /**
     * Media streaming protocol. Lowercase for backwards compatibility.
     * @type {?TranscodingSubProtocol}
     */
    get transcodingSubProtocol() {
        return this.#data.TranscodingSubProtocol;
    }

    /**
     * @type {?string}
     */
    get transcodingContainer() {
        return this.#data.TranscodingContainer;
    }

    /**
     * @type {?number}
     */
    get analyzeDurationMs() {
        return this.#data.AnalyzeDurationMs;
    }

    /**
     * @type {?number}
     */
    get defaultAudioStreamIndex() {
        return this.#data.DefaultAudioStreamIndex;
    }

    /**
     * @type {?number}
     */
    get defaultSubtitleStreamIndex() {
        return this.#data.DefaultSubtitleStreamIndex;
    }
}

module.exports = MediaSourceInfo;