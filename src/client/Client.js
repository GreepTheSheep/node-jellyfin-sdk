const BaseClient = require('./BaseClient');
const defaultOptions = require('../util/defaultOptions'); // eslint-disable-line no-unused-vars

const Item = require('../structures/Item');

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
    }

    /**
     * Get the collections list (User View)
     * @param {Array<PresetView>} [presetViews=[]] Preset views.
     * @param {boolean} [includeHidden=false] Whether or not to include hidden content.
     * @param {boolean} [includeExternalContent=false] Whether or not to include external views such as channels or live tv.
     * @returns {Promise<Item[]>}
     */
    async listCollections(presetViews = [], includeHidden = false, includeExternalContent = false){
        const searchParams = new URLSearchParams();
        searchParams.set("userId", this.user.id);
        searchParams.set("includeExternalContent", includeExternalContent);
        searchParams.set("presetViews", presetViews.join(","));
        searchParams.set("includeHidden", includeHidden);
        const res = await this.apiReq("UserViews?" + searchParams.toString());
        const array = [];
        if (res.Items.length > 0) {
            for (let i = 0; i < res.Items.length; i++) {
                let library = new Item(this.client, res.Items[i]);
                array.push(library);
            }
        }
        return array;
    }
}

module.exports = Client;