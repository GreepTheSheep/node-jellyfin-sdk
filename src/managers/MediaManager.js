// https://jellyfin.greep.fr/UserViews?userId=402ed089f32743e1a04017cd64fe85c4
const Client = require("../client/Client"); // eslint-disable-line no-unused-vars
const MediaCollection = require('../structures/MediaCollection');

class MediaManager {
    constructor(client){
        /**
         * The client instance.
         * @type {Client}
         * @readonly
         */
        this.client = client;
    }

    /**
     * Get the collections list
     * @returns {Promise<Array<MediaCollection>>}
     */
    async listCollections(){
        const searchParams = new URLSearchParams();
        searchParams.set("userId", this.client.user.id);
        const res = await this.client.apiReq("UserViews?" + searchParams.toString());
        const array = [];
        if (res.Items.length > 0) { // check all news from the page 0
            for (let i = 0; i < res.Items.length; i++) {
                let library = new MediaCollection(this.client, res.Items[i]);
                array.push(library);
            }
        }
        return array;
    }
}

module.exports = MediaManager;