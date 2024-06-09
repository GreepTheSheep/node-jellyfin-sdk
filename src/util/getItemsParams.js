const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

class GetItemsParams {
    #client;
    constructor(client) {
        /**
         * The client instance
         * @type {Client}
         * @private
         */
        this.#client = client;

        /**
         * Filter by maximum official rating (PG, PG-13, TV-MA, etc).
         * @type {?string}
         */
        this.maxOfficialRating = undefined;

        /**
         * Filter by items with theme songs.
         * @type {?boolean}
         */
        this.hasThemeSong = undefined;

        /**
         * Filter by items with theme videos.
         * @type {?boolean}
         */
        this.hasThemeVideo = undefined;

        /**
         * Filter by items with subtitles.
         * @type {?boolean}
         */
        this.hasSubtitles = undefined;

        /**
         * Filter by items with special features.
         * @type {?boolean}
         */
        this.hasSpecialFeature = undefined;

        /**
         * Filter by items with trailers.
         * @type {?boolean}
         */
        this.hasTrailer = undefined;

        /**
         * Return items that are siblings of a supplied item.
         * @type {?string}
         */
        this.adjacentTo = null;

        /**
         * Filter by parent index number.
         * @type {?number}
         */
        this.parentIndexNumber = undefined;

        /**
         * Filter by items that have or do not have a parental rating.
         * @type {?boolean}
         */
        this.hasParentalRating = undefined;

        /**
         * Filter by items that are HD or not.
         * @type {?boolean}
         */
        this.isHd = undefined;

        /**
         * Filter by items that are 4K or not.
         * @type {?boolean}
         */
        this.is4K = undefined;

        /**
         * If specified, results will be filtered based on LocationType. This allows multiple.
         * @type {Array<ItemLocationType>}
         */
        this.locationTypes = [];

        /**
         * If specified, results will be filtered based on LocationType. This allows multiple.
         * @type {Array<ItemLocationType>}
         */
        this.excludeLocationTypes = [];

        /**
         * Filter by items that are missing episodes or not.
         * @type {?boolean}
         */
        this.isMissing = undefined;

        /**
         * Filter by items that are unaired episodes or not.
         * @type {?boolean}
         */
        this.isUnaired = undefined;

        /**
         * Filter by minimum community rating.
         * @type {?number}
         */
        this.minCommunityRating = undefined;

        /**
         * Filter by minimum critic rating.
         * @type {?number}
         */
        this.minCriticRating = undefined;

        /**
         * The minimum premiere date. Format must be in ISO.
         * @type {?string}
         */
        this.minPremiereDate = undefined;

        /**
         * The minimum last saved date. Format must be in ISO.
         * @type {?string}
         */
        this.minDateLastSaved = undefined;

        /**
         * The minimum last saved date for the current user. Format must be in ISO.
         * @type {?string}
         */
        this.minDateLastSavedForUser = undefined;

        /**
         * The maximum premiere date. Format must be in ISO.
         * @type {?string}
         */
        this.maxPremiereDate = undefined;

        /**
         * Filter by items that have an overview or not.
         * @type {?boolean}
         */
        this.hasOverview = undefined;

        /**
         * Filter by items that have an IMDb id or not.
         * @type {?boolean}
         */
        this.hasImdbId = undefined;

        /**
         * Filter by items that have an TMDb id or not.
         * @type {?boolean}
         */
        this.hasTmdbId = undefined;

        /**
         * Filter by items that have an TVDb id or not.
         * @type {?boolean}
         */
        this.hasTvdbId = undefined;

        /**
         * Filter for live tv movies.
         * @type {?boolean}
         */
        this.isMovie = undefined;

        /**
         * Filter for live tv series.
         * @type {?boolean}
         */
        this.isSeries = undefined;

        /**
         * Filter for live tv news.
         * @type {?boolean}
         */
        this.isNews = undefined;

        /**
         * Filter for live tv kids.
         * @type {?boolean}
         */
        this.isKids = undefined;

        /**
         * Filter for live tv sports.
         * @type {?boolean}
         */
        this.isSports = undefined;

        /**
         * If specified, results will be filtered by excluding item ids. This allows multiple.
         * @type {Array<string>}
         */
        this.excludeItemIds = [];

        /**
         * The record index to start at. All items with a lower index will be dropped from the results.
         * @type {?number}
         */
        this.startIndex = undefined;

        /**
         * The maximum number of records to return.
         * @type {?number}
         */
        this.limit = undefined;

        /**
         * When searching within folders, this determines whether or not the search will be recursive.
         * @type {?boolean}
         */
        this.recursive = undefined;

        /**
         * Filter based on a search term.
         * @type {?string}
         */
        this.searchTerm = undefined;

        /**
         * Sort Order - Ascending, Descending.
         * @type {"Ascending" | "Descending"}
         * @default "Ascending"
         */
        this.sortOrder = "Ascending";

        /**
         * The parent item Id (if none, returns the collections)
         * @type {?string}
         */
        this.parentId = undefined;

        /**
         * Specify additional fields of information to return in the output. This allows multiple.
         * @type {Array<ItemField>}
         */
        this.fields = [];

        /**
         * If specified, results will be filtered based on item type. This allows multiple.
         * @type {Array<ItemType>}
         */
        this.excludeItemTypes = [];

        /**
         * If specified, results will be filtered based on item type. This allows multiple.
         * @type {Array<ItemType>}
         */
        this.includeItemTypes = [];

        /**
         * Filter by items that are marked as favorite, or not.
         * @type {?boolean}
         */
        this.isFavorite = undefined;

        /**
         * Filter by MediaType. Allows multiple.
         * @type {Array<ItemType>}
         */
        this.mediaTypes = [];

        /**
         * If specified, results will be filtered based on those containing image types. This allows multiple.
         * @type {Array<ImageType>}
         */
        this.imageTypes = [];

        /**
         * Specify one or more sort orders.
         * @type {Array<ItemSortBy>}
         */
        this.sortBy = [];

        /**
         * Filter by items that are played, or not.
         * @type {?boolean}
         */
        this.isPlayed = undefined;

        /**
         * If specified, results will be filtered based on genre. This allows multiple.
         * @type {Array<string>}
         */
        this.sortBy = [];

        /**
         * If specified, results will be filtered based on OfficialRating. This allows multiple.
         * @type {Array<string>}
         */
        this.officialRatings = [];

        /**
         * If specified, results will be filtered based on tag. This allows multiple.
         * @type {Array<string>}
         */
        this.tags = [];

        /**
         * If specified, results will be filtered based on production year. This allows multiple.
         * @type {Array<number>}
         */
        this.tags = [];

        /**
         * Include user data.
         * @type {?boolean}
         */
        this.enableUserData = undefined;

        /**
         * The max number of images to return, per image type.
         * @type {?number}
         */
        this.imageTypeLimit = undefined;

        /**
         * The image types to include in the output.
         * @type {Array<ImageType>}
         */
        this.enableImageTypes = [];

        /**
         * If specified, results will be filtered to include only those containing the specified person.
         * @type {?string}
         */
        this.person = undefined;

        /**
         * If specified, results will be filtered to include only those containing the specified person id.
         * @type {Array<string>}
         */
        this.personIds = [];

        /**
         * If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple.
         * @type {Array<string>}
         */
        this.personTypes = [];

        /**
         * If specified, results will be filtered based on studio. This allows multiple.
         * @type {Array<string>}
         */
        this.studios = [];

        /**
         * If specified, results will be filtered based on artists. This allows multiple.
         * @type {Array<string>}
         */
        this.artists = [];

        /**
         * If specified, results will be filtered based on artist id. This allows multiple.
         * @type {Array<string>}
         */
        this.excludeArtistIds = [];

        /**
         * If specified, results will be filtered based on artist id. This allows multiple.
         * @type {Array<string>}
         */
        this.artistIds = [];

        /**
         * If specified, results will be filtered to include only those containing the specified album artist id.
         * @type {Array<string>}
         */
        this.albumArtistIds = [];

        /**
         * If specified, results will be filtered to include only those containing the specified contributing artist id.
         * @type {Array<string>}
         */
        this.contributingArtistIds = [];

        /**
         * If specified, results will be filtered based on album. This allows multiple.
         * @type {Array<string>}
         */
        this.albums = [];

        /**
         * If specified, results will be filtered based on album id. This allows multiple.
         * @type {Array<string>}
         */
        this.albumIds = [];

        /**
         * If specific items are needed, specify a list of item id's to retrieve. This allows multiple.
         * @type {Array<string>}
         */
        this.ids = [];

        /**
         * Filter by VideoType Allows multiple.
         * @type {Array<VideoType>}
         */
        this.videoTypes = [];

        /**
         * Filter by minimum official rating (PG, PG-13, TV-MA, etc).
         * @type {?string}
         */
        this.minOfficialRating = undefined;

        /**
         * Filter by items that are locked.
         * @type {?boolean}
         */
        this.isLocked = undefined;

        /**
         * Filter by items that are placeholders.
         * @type {?boolean}
         */
        this.isPlaceHolder = undefined;

        /**
         * Filter by items that have official ratings.
         * @type {?boolean}
         */
        this.hasOfficialRating = undefined;

        /**
         * Whether or not to hide items behind their boxsets.
         * @type {?boolean}
         */
        this.collapseBoxSetItems = undefined;

        /**
         * Filter by the minimum width of the item.
         * @type {?number}
         */
        this.minWidth = undefined;

        /**
         * Filter by the minimum height of the item.
         * @type {?number}
         */
        this.minHeight = undefined;

        /**
         * Filter by the maximum width of the item.
         * @type {?number}
         */
        this.maxWidth = undefined;

        /**
         * Filter by the maximum height of the item.
         * @type {?number}
         */
        this.maxHeight = undefined;

        /**
         * Filter by items that are 3D, or not.
         * @type {?boolean}
         */
        this.is3D = undefined;

        /**
         * Filter by Series Status. Allows multiple.
         * @type {Array<SeriesStatus>}
         */
        this.seriesStatus = [];

        /**
         * Filter by items whose name is sorted equally or greater than a given input string.
         * @type {?string}
         */
        this.nameStartsWithOrGreater = undefined;

        /**
         * Filter by items whose name is sorted equally than a given input string.
         * @type {?string}
         */
        this.nameStartsWith = undefined;

        /**
         * Filter by items whose name is equally or lesser than a given input string.
         * @type {?string}
         */
        this.nameLessThan = undefined;

        /**
         * If specified, results will be filtered based on studio id. This allows multiple.
         * @type {Array<string>}
         */
        this.studioIds = [];

        /**
         * If specified, results will be filtered based on genre id. This allows multiple.
         * @type {Array<string>}
         */
        this.genreIds = [];

        /**
         * Enable the total record count.
         * @type {boolean}
         * @default true
         */
        this.enableTotalRecordCount = true;

        /**
         * Include image information in output.
         * @type {boolean}
         * @default true
         */
        this.enableImages = true;
    }

}

module.exports = GetItemsParams;