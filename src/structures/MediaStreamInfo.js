const Item = require("./Item"); // eslint-disable-line no-unused-vars

/** Represents informations from a media stream. */
class MediaStreamInfo {
    #data;
    constructor(item, data) {
        /**
         * The item that instantiated this
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
     * @type {?string}
     */
    get codec() {
        return this.#data.Codec;
    }

    /**
     * @type {?string}
     */
    get codecTag() {
        return this.#data.CodecTag;
    }

    /**
     * @type {?string}
     */
    get language() {
        return this.#data.Language;
    }

    /**
     * @type {?string}
     */
    get colorRange() {
        return this.#data.ColorRange;
    }

    /**
     * @type {?string}
     */
    get colorSpace() {
        return this.#data.ColorSpace;
    }

    /**
     * @type {?string}
     */
    get colorTransfer() {
        return this.#data.ColorTransfer;
    }

    /**
     * @type {?string}
     */
    get colorPrimaries() {
        return this.#data.ColorPrimaries;
    }

    /**
     * Dolby Vision version major.
     * @type {?number}
     */
    get dvVersionMajor() {
        return this.#data.DvVersionMajor;
    }

    /**
     * Dolby Vision version minor.
     * @type {?number}
     */
    get dvVersionMinor() {
        return this.#data.DvVersionMinor;
    }

    /**
     * Dolby Vision profile.
     * @type {?number}
     */
    get dvProfile() {
        return this.#data.DvProfile;
    }

    /**
     * Dolby Vision level.
     * @type {?number}
     */
    get dvLevel() {
        return this.#data.DvLevel;
    }

    /**
     * Dolby Vision rpu present flag.
     * @type {?number}
     */
    get rpuPresentFlag() {
        return this.#data.RpuPresentFlag;
    }

    /**
     * Dolby Vision el present flag.
     * @type {?number}
     */
    get elPresentFlag() {
        return this.#data.ElPresentFlag;
    }

    /**
     * Dolby Vision bl present flag.
     * @type {?number}
     */
    get blPresentFlag() {
        return this.#data.BlPresentFlag;
    }

    /**
     * Dolby Vision bl signal compatibility id.
     * @type {?number}
     */
    get dvBlSignalCompatibilityId() {
        return this.#data.DvBlSignalCompatibilityId;
    }

    /**
     * @type {?string}
     */
    get comment() {
        return this.#data.Comment;
    }

    /**
     * @type {?string}
     */
    get timeBase() {
        return this.#data.TimeBase;
    }

    /**
     * @type {?string}
     */
    get codecTimeBase() {
        return this.#data.CodecTimeBase;
    }

    /**
     * @type {?string}
     */
    get title() {
        return this.#data.Title;
    }

    /**
     * @type {?VideoRange}
     */
    get videoRange() {
        return this.#data.VideoRange;
    }

    /**
     * @type {?VideoRangeType}
     */
    get videoRangeType() {
        return this.#data.VideoRangeType;
    }

    /**
     * @type {?string}
     */
    get videoDoViTitle() {
        return this.#data.VideoDoViTitle;
    }

    /**
     * @type {?AudioSpatialFormat}
     */
    get audioSpatialFormat() {
        return this.#data.AudioSpatialFormat;
    }

    /**
     * @type {?string}
     */
    get localizedUndefined() {
        return this.#data.LocalizedUndefined;
    }

    /**
     * @type {?string}
     */
    get localizedDefault() {
        return this.#data.LocalizedDefault;
    }

    /**
     * @type {?string}
     */
    get localizedForced() {
        return this.#data.LocalizedForced;
    }

    /**
     * @type {?string}
     */
    get localizedExternal() {
        return this.#data.LocalizedExternal;
    }

    /**
     * @type {?string}
     */
    get localizedHearingImpaired() {
        return this.#data.LocalizedHearingImpaired;
    }

    /**
     * @type {?string}
     */
    get displayTitle() {
        return this.#data.DisplayTitle;
    }

    /**
     * @type {?string}
     */
    get nalLengthSize() {
        return this.#data.NalLengthSize;
    }

    /**
     * @type {boolean}
     */
    get isInterlaced() {
        return this.#data.IsInterlaced;
    }

    /**
     * @type {?boolean}
     */
    get isAVC() {
        return this.#data.IsAVC;
    }

    /**
     * @type {?string}
     */
    get channelLayout() {
        return this.#data.ChannelLayout;
    }

    /**
     * @type {?number}
     */
    get bitRate() {
        return this.#data.BitRate;
    }

    /**
     * @type {?number}
     */
    get bitDepth() {
        return this.#data.BitDepth;
    }

    /**
     * @type {?number}
     */
    get refFrames() {
        return this.#data.RefFrames;
    }

    /**
     * @type {?number}
     */
    get packetLength() {
        return this.#data.PacketLength;
    }

    /**
     * @type {?number}
     */
    get channels() {
        return this.#data.Channels;
    }

    /**
     * @type {?number}
     */
    get sampleRate() {
        return this.#data.SampleRate;
    }

    /**
     * @type {boolean}
     */
    get isDefault() {
        return this.#data.IsDefault;
    }

    /**
     * @type {boolean}
     */
    get isForced() {
        return this.#data.IsForced;
    }

    /**
     * @type {boolean}
     */
    get isHearingImpaired() {
        return this.#data.IsHearingImpaired;
    }

    /**
     * @type {?number}
     */
    get height() {
        return this.#data.Height;
    }

    /**
     * @type {?number}
     */
    get width() {
        return this.#data.Width;
    }

    /**
     * @type {?number}
     */
    get averageFrameRate() {
        return this.#data.AverageFrameRate;
    }

    /**
     * @type {?number}
     */
    get realFrameRate() {
        return this.#data.RealFrameRate;
    }

    /**
     * @type {?number}
     */
    get profile() {
        return this.#data.Profile;
    }

    /**
     * @type {MediaStreamType}
     */
    get type() {
        return this.#data.Type;
    }

    /**
     * @type {?string}
     */
    get aspectRatio() {
        return this.#data.AspectRatio;
    }

    /**
     * @type {number}
     */
    get index() {
        return this.#data.Index;
    }

    /**
     * @type {?number}
     */
    get score() {
        return this.#data.Score;
    }

    /**
     * @type {boolean}
     */
    get isExternal() {
        return this.#data.IsExternal;
    }

    /**
     * @type {?MediaStreamDeliveryMethod}
     */
    get deliveryMethod() {
        return this.#data.DeliveryMethod;
    }

    /**
     * @type {?string}
     */
    get deliveryUrl() {
        return this.#data.DeliveryUrl;
    }

    /**
     * @type {?boolean}
     */
    get isExternalUrl() {
        return this.#data.IsExternalUrl;
    }

    /**
     * @type {boolean}
     */
    get isTextSubtitleStream() {
        return this.#data.IsTextSubtitleStream;
    }

    /**
     * @type {boolean}
     */
    get supportsExternalStream() {
        return this.#data.SupportsExternalStream;
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
    get pixelFormat() {
        return this.#data.PixelFormat;
    }

    /**
     * @type {?number}
     */
    get level() {
        return this.#data.Level;
    }

    /**
     * @type {?boolean}
     */
    get isAnamorphic() {
        return this.#data.IsAnamorphic;
    }
}

module.exports = MediaStreamInfo;