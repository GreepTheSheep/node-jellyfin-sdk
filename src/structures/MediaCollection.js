const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

/** Represents a media collection. */
class MediaCollection {
    #data;
    constructor(client, data) {
        /**
         * The client that instantiated this
         * @type {Client}
         */
        this.client = client;

        /**
         * The raw data
         * @type {object}
         * @private
         */
        this.#data = data;
    }
}

module.exports = MediaCollection;