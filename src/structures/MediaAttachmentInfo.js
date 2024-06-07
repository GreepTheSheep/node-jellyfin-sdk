const Item = require("./Item"); // eslint-disable-line no-unused-vars


/** Represents informations from a media attachment. */
class MediaAttachmentInfo {
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
    get comment() {
        return this.#data.Comment;
    }

    /**
     * @type {number}
     */
    get index() {
        return this.#data.Index;
    }

    /**
     * @type {?string}
     */
    get fileName() {
        return this.#data.FileName;
    }

    /**
     * @type {?string}
     */
    get mimeType() {
        return this.#data.MimeType;
    }

    /**
     * @type {?string}
     */
    get deliveryUrl() {
        return this.#data.DeliveryUrl;
    }
}

module.exports = MediaAttachmentInfo;