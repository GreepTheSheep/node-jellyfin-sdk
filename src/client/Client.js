const BaseClient = require('./BaseClient');
const defaultOptions = require('../util/defaultOptions'); // eslint-disable-line no-unused-vars

/**
 * Instantiates a new client. This is the entry point.
 * @extends {BaseClient}
 */
class Client extends BaseClient {
    /**
     * @param {defaultOptions} [options={}] The options to use
     */
    constructor(options){
        super(options);

        if (options.clientInfo.name == null) throw "Client Name can't be null";
        if (typeof options.clientInfo.name != "string") throw "Client Name must be in a string format";
        if (options.clientInfo.name.length == 0) throw "Client Name must be filled";
        if (options.clientInfo.version == null) throw "Client Version can't be null";
        if (typeof options.clientInfo.version != "string") throw "Client Version must be in a string format";
        if (options.clientInfo.version.split(".").length < 1) throw "Client Version must contain at least a . (dot)";
        if (!options.clientInfo.version.split(".").every(v=>!isNaN(Number(v)))) throw "Client Version must contain numbers between dots";

        console.log(options);
    }
}

module.exports = Client;