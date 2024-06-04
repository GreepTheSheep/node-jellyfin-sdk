const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

/** Represents a media item (could be a collection). */
class Item {
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

    /**
     * The name of the Collection
     * @type {string}
     */
    get name() {
        return this.#data.Name;
    }

    /**
     * The server ID of the collection
     * @type {string}
     */
    get serverId() {
        return this.#data.ServerId;
    }

    /**
     * The ID of the Collection
     * @type {string}
     */
    get id() {
        return this.#data.Id;
    }

    /**
     * The Date of creation of the Collection
     * @type {Date}
     */
    get dateCreated() {
        return new Date(this.#data.DateCreated);
    }

    /**
     * Whether this collection can be deleted
     * @type {boolean}
     */
    get canDelete() {
        return this.#data.CanDelete;
    }

    /**
     * Whether this collection can be downloaded
     * @type {boolean}
     */
    get canDownload() {
        return this.#data.CanDownload;
    }

    /**
     * The path of the collection
     * @type {boolean}
     */
    get path() {
        return this.#data.Path;
    }

    /**
     * The access to this collection
     * @type {string}
     */
    get playAccess() {
        return this.#data.PlayAccess;
    }

    /**
     * The parent ID of this collection
     * @type {string}
     */
    get parentId() {
        return this.#data.ParentId;
    }

    /**
     * The type of the Item
     * @type {ItemType}
     */
    get type() {
        return this.#data.Type;
    }

    /**
     * The type of the collection (if the item is a CollectionFolder)
     * @type {?CollectionType}
     */
    get collectionType() {
        return this.#data.CollectionType;
    }
}

module.exports = Item;

/**
 * All available item types.
 * @typedef {"AggregateFolder" | "Audio" | "AudioBook" | "BasePluginFolder" | "Book" | "BoxSet" | "Channel" | "ChannelFolderItem" | "CollectionFolder" | "Episode" | "Folder" | "Genre" | "ManualPlaylistsFolder" | "Movie" | "LiveTvChannel" | "LiveTvProgram" | "MusicAlbum" | "MusicArtist" | "MusicGenre" | "MusicVideo" | "Person" | "Photo" | "PhotoAlbum" | "Playlist" | "PlaylistsFolder" | "Program" | "Recording" | "Season" | "Series" | "Studio" | "Trailer" | "TvChannel" | "TvProgram" | "UserRootFolder" | "UserView" | "Video" | "Year"} ItemType
 */

/**
 * All available collection types.
 * @typedef {"unknown" | "movies" | "tvshows" | "music" | "musicvideos" | "trailers" | "homevideos" | "boxsets" | "books" | "photos" | "livetv" | "playlists" | "folders"} CollectionType
 */