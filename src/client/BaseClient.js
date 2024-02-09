const EventEmitter = require('events');
const APIRequest = require('../rest/APIRequest');
const Util = require('../util/Util');
const defaultOptions = require('../util/defaultOptions');

/**
 * The Base Client
 * @extends {EventEmitter}
 */
class BaseClient extends EventEmitter {
    /**
     * @param {defaultOptions} [options={}] The options to use
     */
    constructor(options = {}) {
        super();

        /**
         * The options of the client.
         * @type {defaultOptions}
         * @readonly
         */
        this.options = Util.mergeDefault(new defaultOptions(this), options);

        /**
         * The access token which will be used to make requests to the Jellyfin API
         * @type {?string}
         */
        this.accessToken = null;
    }

    /**
     * Authenticate to the Jellyfin server
     *
     * <warn>The parameters should be kept private at all times.</warn>
     * <info>You should use environment variables to keep it private.</info>
     *
     * <info>When authenticated, a {@link Client#ready} event is fired, you can also use promises like `then()` or `await` if you don't want to use events.</info>
     * @param {?string} username The username of the user to authenticate
     * @param {?string} password The password of the user to authenticate
     * @param {?string} baseUrl The base URL of the Jellyfin server
     * @returns {Promise<void>}
     */
    async login(username = null, password = null, baseUrl = null) {
        if (username != null) this.options.username = username;
        if (password != null) this.options.password = password;
        if (baseUrl != null) this.options.baseUrl = baseUrl;

        if (this.options.username == null) throw "The Jellyfin username is not filled in, please fill in one in the client options";
        if (this.options.password == null) throw "The Jellyfin password is not filled in, please fill in one in the client options";
        if (this.options.baseUrl == null) throw "The Jellyfin Base URL is not filled in, please fill in one in the client options";

        try {
            let res = await this.#apiReq("Users/AuthenticateByName", "POST", JSON.stringify({
                "Username": this.options.username,
                "Pw": this.options.password
            }));

            this.accessToken = res.AccessToken;

            /**
             * Emitted when the client was authenticated successfully to the Jellyfin server.
             * @event Client#ready
             */
            this.emit('ready');
        } catch (err) {
            throw "Authentication failed: " + err;
        }
    }

    /**
     * Disconnects from the Jellyfin server
     *
     * <info>When disconnected, a {@link Client#disconnected} event is fired, you can also use promises like `then()` or `await` if you don't want to use events.</info>
     * @returns {Promise<void>}
     */
    async logout() {
        if (this.accessToken == null) throw "Not connected";

        try {
            await this.#apiReq("Sessions/Logout", "POST");

            this.accessToken = null;

            /**
             * Emitted when the client was disconnected successfully to the Jellyfin server.
             * @event Client#disconnected
             */
            this.emit('disconnected');
        } catch (err) {
            throw "Logout failed: " + err;
        }
    }

    /**
     * Do an API request
     * @param {string} url The URL to request
     * @param {string} [method="GET"] The HTTP method to use
     * @param {?Object} [body=null] The data to send
     * @returns {Promise<Object>} A promise that resolves to the API response
     * @private
     */
    async #apiReq(url, method = 'GET', body = null){
        const request = new APIRequest(this);

        return await request.do(url, method, body);
    }

}

module.exports = BaseClient;