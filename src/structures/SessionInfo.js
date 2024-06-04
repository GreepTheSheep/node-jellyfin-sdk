const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

/**
 * Represents a Session Info on Jellyfin
 */
class SessionInfo {
    #data;
    /**
     * @param {Client} client
     * @param {object} data
     */
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

    /**
     * The ID of the session
     * @type {string}
     */
    get id() {
        return this.#data.id;
    }

    /**
     * The User ID of the Session
     * @type {string}
     */
    get userId() {
        return this.#data.UserId;
    }

    /**
     * The Remote Endpoint IP Address
     * @type {string}
     */
    get remoteEndpoint() {
        return this.#data.RemoteEndPoint;
    }

    /**
     * The User Name of the Session
     * @type {string}
     */
    get userName() {
        return this.#data.UserName;
    }

    /**
     * The Client Name of the Session
     * @type {string}
     */
    get clientName() {
        return this.#data.Client;
    }

    /**
     * The Device Name of the Session
     * @type {string}
     */
    get deviceName() {
        return this.#data.DeviceName;
    }

    /**
     * Whether this has custom device name
     * @type {boolean}
     */
    get hasCustomDeviceName() {
        return this.#data.HasCustomDeviceName;
    }

    /**
     * The Device Id of the Session
     * @type {string}
     */
    get deviceId() {
        return this.#data.DeviceId;
    }

    /**
     * The Device Version of the Session
     * @type {string}
     */
    get deviceVersion() {
        return this.#data.ApplicationVersion;
    }

    /**
     * Whether the session is active
     * @type {boolean}
     */
    get isActive() {
        return this.#data.IsActive;
    }

    /**
     * The Server Id of the Session
     * @type {string}
     */
    get serverId() {
        return this.#data.ServerId;
    }
}

module.exports = SessionInfo;