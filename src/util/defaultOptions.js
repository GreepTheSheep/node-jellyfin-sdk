const path = require('path'),
    fs = require('fs'),
    crypto = require('crypto');
const pkg = require('../../package.json');

/**
 * The default options.
 */
class defaultOptions {
    #baseClient;
    constructor(baseClient) {
        /**
         * The base client instance.
         * @type {BaseClient}
         * @private
         */
        this.#baseClient = baseClient;

        /**
         * Whether is in dev mode (Uses more logging traces in the core).
         * @type {boolean}
         */
        this.dev = false;

        /**
         * Client Info Options.
         * @type {defaultOptionsClientInfo}
         */
        this.clientInfo = new defaultOptionsClientInfo();

        /**
         * Device Info Options.
         * @type {defaultOptionsDeviceInfo}
         */
        this.deviceInfo = new defaultOptionsDeviceInfo();
    }
}

class defaultOptionsClientInfo {
    #defaultOptions;
    constructor(defaultOptions) {
        /**
         * Default options.
         * @type {defaultOptions}
         * @private
         */
        this.#defaultOptions = defaultOptions;

        if (!this.name && 'JELLYFIN_CLIENT_NAME' in process.env) {
            /**
             * The default Client Name to use.
             * If present, this defaults to `process.env.JELLYFIN_CLIENT_NAME` when instantiating the client
             * @type {?string}
             */
            this.name = process.env.JELLYFIN_CLIENT_NAME;
        } else {
            if (require.main) {
                try {
                    let parentPackage = require(path.join(process.cwd(), 'package.json'));
                    this.name = parentPackage.name;
                } catch (err) {
                    this.name = null;
                }
            } else this.name = null;
        }

        if (!this.version && 'JELLYFIN_CLIENT_VERSION' in process.env) {
            /**
             * The default Client Version to use.
             * If present, this defaults to `process.env.JELLYFIN_CLIENT_VERSION` when instantiating the client
             * @type {?string}
             */
            this.version = process.env.JELLYFIN_CLIENT_VERSION;
        } else {
            if (require.main) {
                try {
                    let parentPackage = require(path.join(process.cwd(), 'package.json'));
                    this.version = parentPackage.version;
                } catch (err) {
                    this.version = null;
                }
            } else this.version = null;
        }
    }
}

class defaultOptionsDeviceInfo {
    #defaultOptions;
    constructor(defaultOptions) {
        /**
         * Default options.
         * @type {defaultOptions}
         * @private
         */
        this.#defaultOptions = defaultOptions;

        if (!this.name && 'JELLYFIN_DEVICE_NAME' in process.env) {
            /**
             * The default Client Name to use.
             * If present, this defaults to `process.env.JELLYFIN_CLIENT_NAME` when instantiating the client
             * @type {string}
             */
            this.name = process.env.JELLYFIN_DEVICE_NAME;
        } else {
            this.name = "node-"+pkg.name;
        }

        if (!this.id && 'JELLYFIN_DEVICE_ID' in process.env) {
            /**
             * The default Device ID to use.
             * If present, this defaults to `process.env.JELLYFIN_DEVICE_ID` when instantiating the client.
             * If not, uses the generated UUID used in the postinstall script. If the UUID is not present, it generates a random one.
             * @type {string}
             */
            this.id = process.env.JELLYFIN_DEVICE_ID;
        } else {
            let uuid = "";
            try {
                uuid = fs.readFileSync(path.join(__dirname, "..", "..", "uuid"), "utf-8");
            } catch (err) {
                uuid = this.#generateUUID();
            }
            if (uuid.length > 0) this.id = uuid;
            else this.id = this.#generateUUID();
        }
    }

    /**
     * Generates a random UUID for the Device ID
     * @private
     * @returns {string}
     */
    #generateUUID() {
        // Generate 16 random bytes
        const bytes = crypto.randomBytes(16);
        // Adjust certain bits according to RFC 4122 section 4.4 as follows:
        // Set the version to 4 (random) by adjusting the 13th byte
        bytes[6] = (bytes[6] & 0x0f) | 0x40; // Version 4 UUIDs have the form 4xxx (where x is any hexadecimal digit)
        // Set the variant to 10xx (DCE 1.1) by adjusting the 17th byte
        bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variant specified in 10xx for DCE 1.1

        // Convert the adjusted bytes to a hexadecimal string and insert dashes
        const uuid = `${bytes.toString('hex').slice(0, 8)}-${bytes.toString('hex').slice(8, 12)}-${bytes.toString('hex').slice(12, 16)}-${bytes.toString('hex').slice(16, 20)}-${bytes.toString('hex').slice(20)}`;
        return uuid;
    }
}

module.exports = defaultOptions;