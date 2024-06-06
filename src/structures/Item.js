const Client = require("../client/Client"); // eslint-disable-line no-unused-vars
const MediaSourceInfo = require("./MediaSourceInfo");

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
     * The name of the item
     * @type {?string}
     */
    get name() {
        return this.#data.Name;
    }

    /**
     * The original title of the item
     * @type {?string}
     */
    get originalTitle() {
        return this.#data.OriginalTitle;
    }

    /**
     * The server ID of the item
     * @type {?string}
     */
    get serverId() {
        return this.#data.ServerId;
    }

    /**
     * The ID of the item
     * @type {string}
     */
    get id() {
        return this.#data.Id;
    }

    /**
     * The etag of the item
     * @type {?string}
     */
    get etag() {
        return this.#data.Etag;
    }

    /**
     * The type of the source of the item
     * @type {?string}
     */
    get sourceType() {
        return this.#data.SourceType;
    }

    /**
     * The playlist item identifier of the item
     * @type {?string}
     */
    get playlistItemId() {
        return this.#data.PlaylistItemId;
    }

    /**
     * The Date of creation of the item
     * @type {?Date}
     */
    get dateCreated() {
        if (this.#data.DateCreated == null) return null;
        return new Date(this.#data.DateCreated);
    }

    /**
     * The Date of the last media added of the item
     * @type {?Date}
     */
    get dateLastMediaAdded() {
        if (this.#data.DateLastMediaAdded == null) return null;
        return new Date(this.#data.DateLastMediaAdded);
    }

    /**
     * The type of the extra of the item
     * @type {?ExtraType}
     */
    get extraType() {
        return this.#data.ExtraType;
    }

    /**
     * @type {?number}
     */
    get airsBeforeSeasonNumber() {
        return this.#data.AirsBeforeSeasonNumber;
    }

    /**
     * @type {?number}
     */
    get airsAfterSeasonNumber() {
        return this.#data.AirsAfterSeasonNumber;
    }

    /**
     * @type {?number}
     */
    get airsBeforeEpisodeNumber() {
        return this.#data.AirsBeforeEpisodeNumber;
    }

    /**
     * Whether this item can be deleted
     * @type {?boolean}
     */
    get canDelete() {
        return this.#data.CanDelete;
    }

    /**
     * Whether this item can be downloaded
     * @type {?boolean}
     */
    get canDownload() {
        return this.#data.CanDownload;
    }

    /**
     * Whether this item has lyrics
     * @type {?boolean}
     */
    get hasLyrics() {
        return this.#data.HasLyrics;
    }

    /**
     * Whether this item has subtitles
     * @type {?boolean}
     */
    get hasSubtitles() {
        return this.#data.HasSubtitles;
    }

    /**
     * The preferred metadata language of the item
     * @type {?string}
     */
    get preferredMetadataLanguage() {
        return this.#data.PreferredMetadataLanguage;
    }

    /**
     * The preferred metadata country code of the item
     * @type {?string}
     */
    get preferredMetadataCountryCode() {
        return this.#data.PreferredMetadataCountryCode;
    }

    /**
     * The container of the item
     * @type {?string}
     */
    get container() {
        return this.#data.Container;
    }

    /**
     * The sort name of the item
     * @type {?string}
     */
    get sortName() {
        return this.#data.SortName;
    }

    /**
     * The forced sort name of the item
     * @type {?string}
     */
    get forcedSortName() {
        return this.#data.ForcedSortName;
    }

    /**
     * The 3D format video of the item
     * @type {?Video3DFormat}
     */
    get video3DFormat() {
        return this.#data.Video3DFormat;
    }

    /**
     * The Date of premiere of the item
     * @type {?Date}
     */
    get premiereDate() {
        if (this.#data.PremiereDate == null) return null;
        return new Date(this.#data.PremiereDate);
    }

    /**
     * An array of external urls of the item
     * @type {?Array<ItemExternalUrl>}
     */
    get externalUrls() {
        return this.#data.ExternalUrls;
    }

    /**
     * An array of media sources of the item
     * @type {?Array<MediaSourceInfo>}
     */
    get mediaSources() {
        return new MediaSourceInfo(this, this.#data.MediaSources);
    }

    /**
     * The critic rating of the item
     * @type {?number}
     */
    get criticRating() {
        return this.#data.CriticRating;
    }

    /**
     * @type {?Array<string>}
     */
    get productionLocations() {
        return this.#data.ProductionLocations;
    }

    /**
     * The path of the item
     * @type {?string}
     */
    get path() {
        return this.#data.Path;
    }

    /**
     * @type {?boolean}
     */
    get enableMediaSourceDisplay() {
        return this.#data.EnableMediaSourceDisplay;
    }

    /**
     * The official rating of the item
     * @type {?number}
     */
    get officialRating() {
        return this.#data.OfficialRating;
    }

    /**
     * The custom rating of the item
     * @type {?number}
     */
    get customRating() {
        return this.#data.CustomRating;
    }

    /**
     * The channel identifier of the item
     * @type {?string}
     */
    get channelId() {
        return this.#data.ChannelId;
    }

    /**
     * The channel name of the item
     * @type {?string}
     */
    get channelName() {
        return this.#data.ChannelName;
    }

    /**
     * The overview of the item
     * @type {?string}
     */
    get overview() {
        return this.#data.Overview;
    }

    /**
     * The taglines of the item
     * @type {?Array<string>}
     */
    get taglines() {
        return this.#data.Taglines;
    }

    /**
     * The genres of the item
     * @type {?Array<string>}
     */
    get genres() {
        return this.#data.Genres;
    }

    /**
     * The community rating of the item
     * @type {?number}
     */
    get communityRating() {
        return this.#data.CommunityRating;
    }

    /**
     * The cumulative run time ticks of the item
     * @type {?number}
     */
    get cumulativeRunTimeTicks() {
        return this.#data.CumulativeRunTimeTicks;
    }

    /**
     * The run time ticks of the item
     * @type {?number}
     */
    get runTimeTicks() {
        return this.#data.RunTimeTicks;
    }

    /**
     * The play access of the item
     * @type {?PlayAccess}
     */
    get playAccess() {
        return this.#data.PlayAccess;
    }

    /**
     * The aspect ratio of the item
     * @type {?string}
     */
    get aspectRatio() {
        return this.#data.AspectRatio;
    }

    /**
     * The production year of the item
     * @type {?number}
     */
    get productionYear() {
        return this.#data.ProductionYear;
    }

    /**
     * A value indicating whether this instance is place holder.
     * @type {?boolean}
     */
    get isPlaceHolder() {
        return this.#data.IsPlaceHolder;
    }

    /**
     * @type {?string}
     */
    get number() {
        return this.#data.Number;
    }

    /**
     * @type {?string}
     */
    get channelNumber() {
        return this.#data.ChannelNumber;
    }

    /**
     * @type {?number}
     */
    get indexNumber() {
        return this.#data.IndexNumber;
    }

    /**
     * @type {?number}
     */
    get indexNumberEnd() {
        return this.#data.IndexNumberEnd;
    }

    /**
     * @type {?number}
     */
    get parentIndexNumber() {
        return this.#data.ParentIndexNumber;
    }

    /**
     * @type {?Array<RemoteTrailer>}
     */
    get remoteTrailers() {
        return this.#data.RemoteTrailers;
    }

    /**
     * @type {?object}
     */
    get providerIds() {
        return this.#data.ProviderIds;
    }

    /**
     * A value indicating whether this instance is HD.
     * @type {?boolean}
     */
    get isHD() {
        return this.#data.IsHD;
    }

    /**
     * A value indicating whether this instance is a folder.
     * @type {?boolean}
     */
    get isFolder() {
        return this.#data.IsFolder;
    }

    /**
     * The parent ID of this item
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
     * The people included in the Item
     * @type {?Array<ItemPerson>}
     */
    get people() {
        return this.#data.People;
    }

    /**
     * The studios included in the Item
     * @type {?Array<NameGuidPair>}
     */
    get studios() {
        return this.#data.Studios;
    }

    /**
     * The genres of the Item
     * @type {?Array<NameGuidPair>}
     */
    get genreItems() {
        return this.#data.GenreItems;
    }

    /**
     * Whether the item has a logo, this will hold the Id of the Parent that has one.
     * @type {?string}
     */
    get parentLogoItemId() {
        return this.#data.ParentLogoItemId;
    }

    /**
     * The parent backdrop image tags.
     * @type {?Array<string>}
     */
    get parentBackdropImageTags() {
        return this.#data.ParentBackdropImageTags;
    }

    /**
     * The parent backdrop image tags.
     * @type {?number}
     */
    get localTrailerCount() {
        return this.#data.localTrailerCount;
    }

    /**
     * The user data for this item based on the user it's being requested for.
     * @type {?ItemUserData}
     */
    get userData() {
        return this.#data.UserData;
    }

    /**
     * @type {?number}
     */
    get recursiveItemCount() {
        return this.#data.RecursiveItemCount;
    }

    /**
     * @type {?number}
     */
    get childCount() {
        return this.#data.ChildCount;
    }

    /**
     * @type {?string}
     */
    get seriesName() {
        return this.#data.SeriesName;
    }

    /**
     * @type {?string}
     */
    get seriesId() {
        return this.#data.SeriesId;
    }

    /**
     * @type {?string}
     */
    get seasonId() {
        return this.#data.SeasonId;
    }

    /**
     * @type {?number}
     */
    get specialFeatureCount() {
        return this.#data.SpecialFeatureCount;
    }

    /**
     * @type {?string}
     */
    get displayPreferencesId() {
        return this.#data.DisplayPreferencesId;
    }

    /**
     * @type {?string}
     */
    get status() {
        return this.#data.Status;
    }

    /**
     * @type {?string}
     */
    get airTime() {
        return this.#data.AirTime;
    }

    /**
     * @type {?Array<DayOfWeek>}
     */
    get airDays() {
        return this.#data.AirDays;
    }

    /**
     * @type {?Array<string>}
     */
    get tags() {
        return this.#data.Tags;
    }

    /**
     * @type {?number}
     */
    get primaryImageAspectRatio() {
        return this.#data.PrimaryImageAspectRatio;
    }

    /**
     * @type {?Array<string>}
     */
    get artists() {
        return this.#data.Artists;
    }

    /**
     * @type {?Array<NameGuidPair>}
     */
    get artistItems() {
        return this.#data.ArtistItems;
    }

    /**
     * @type {?string}
     */
    get album() {
        return this.#data.Album;
    }

    /**
     * The type of the collection (if the item is a CollectionFolder)
     * @type {?CollectionType}
     */
    get collectionType() {
        return this.#data.CollectionType;
    }

    /**
     * @type {?string}
     */
    get displayOrder() {
        return this.#data.DisplayOrder;
    }

    /**
     * @type {?string}
     */
    get albumId() {
        return this.#data.AlbumId;
    }

    /**
     * @type {?string}
     */
    get albumPrimaryImageTag() {
        return this.#data.AlbumPrimaryImageTag;
    }

    /**
     * @type {?string}
     */
    get seriesPrimaryImageTag() {
        return this.#data.SeriesPrimaryImageTag;
    }

    /**
     * @type {?string}
     */
    get albumArtist() {
        return this.#data.AlbumArtist;
    }

    /**
     * @type {?Array<NameGuidPair>}
     */
    get albumArtists() {
        return this.#data.AlbumArtists;
    }

    /**
     * @type {?string}
     */
    get seasonName() {
        return this.#data.SeasonName;
    }

    /**
     * @type {?Array<object>} TODO: MediaStream
     */
    get mediaStreams() {
        return this.#data.MediaStreams;
    }

    /**
     * @type {?VideoType}
     */
    get videoType() {
        return this.#data.VideoType;
    }

    /**
     * @type {?number}
     */
    get partCount() {
        return this.#data.PartCount;
    }

    /**
     * @type {?number}
     */
    get mediaSourceCount() {
        return this.#data.MediaSourceCount;
    }

    /**
     * @type {?object}
     */
    get imageTags() {
        return this.#data.ImageTags;
    }

    /**
     * @type {?Array<string>}
     */
    get backdropImageTags() {
        return this.#data.BackdropImageTags;
    }

    /**
     * @type {?Array<string>}
     */
    get screenshotImageTags() {
        return this.#data.ScreenshotImageTags;
    }

    /**
     * @type {?string}
     */
    get parentLogoImageTag() {
        return this.#data.ParentLogoImageTag;
    }

    /**
     * @type {?string}
     */
    get parentArtItemId() {
        return this.#data.ParentArtItemId;
    }

    /**
     * @type {?string}
     */
    get parentArtImageTag() {
        return this.#data.ParentArtImageTag;
    }

    /**
     * @type {?string}
     */
    get seriesThumbImageTag() {
        return this.#data.SeriesThumbImageTag;
    }

    /**
     * @type {?string}
     */
    get seriesStudio() {
        return this.#data.SeriesStudio;
    }

    /**
     * @type {?string}
     */
    get parentThumbItemId() {
        return this.#data.ParentThumbItemId;
    }

    /**
     * @type {?string}
     */
    get parentThumbImageTag() {
        return this.#data.ParentThumbImageTag;
    }

    /**
     * @type {?string}
     */
    get parentPrimaryImageItemId() {
        return this.#data.ParentPrimaryImageItemId;
    }

    /**
     * @type {?string}
     */
    get parentPrimaryImageTag() {
        return this.#data.ParentPrimaryImageTag;
    }

    /**
     * @type {?Array<ItemChapterInfo>}
     */
    get chapters() {
        return this.#data.Chapters;
    }

    /**
     * @type {?object}
     */
    get trickplay() {
        return this.#data.Trickplay;
    }

    /**
     * @type {?LocationType}
     */
    get locationType() {
        return this.#data.LocationType;
    }

    /**
     * @type {?IsoType}
     */
    get isoType() {
        return this.#data.IsoType;
    }

    /**
     * @type {?MediaType}
     */
    get mediaType() {
        return this.#data.MediaType;
    }

    /**
     * @type {?Date}
     */
    get endDate() {
        if (this.#data.EndDate == null) return null;
        return new Date(this.#data.EndDate);
    }

    /**
     * @type {?Array<LockedField>}
     */
    get lockedFields() {
        return this.#data.LockedFields;
    }

    /**
     * @type {?number}
     */
    get trailerCount() {
        return this.#data.TrailerCount;
    }

    /**
     * @type {?number}
     */
    get movieCount() {
        return this.#data.MovieCount;
    }

    /**
     * @type {?number}
     */
    get seriesCount() {
        return this.#data.SeriesCount;
    }

    /**
     * @type {?number}
     */
    get programCount() {
        return this.#data.ProgramCount;
    }

    /**
     * @type {?number}
     */
    get episodeCount() {
        return this.#data.EpisodeCount;
    }

    /**
     * @type {?number}
     */
    get songCount() {
        return this.#data.SongCount;
    }

    /**
     * @type {?number}
     */
    get albumCount() {
        return this.#data.AlbumCount;
    }

    /**
     * @type {?number}
     */
    get artistCount() {
        return this.#data.ArtistCount;
    }

    /**
     * @type {?number}
     */
    get musicVideoCount() {
        return this.#data.MusicVideoCount;
    }

    /**
     * @type {?boolean}
     */
    get lockData() {
        return this.#data.LockData;
    }

    /**
     * @type {?number}
     */
    get width() {
        return this.#data.Width;
    }

    /**
     * @type {?number}
     */
    get height() {
        return this.#data.Height;
    }

    /**
     * @type {?string}
     */
    get cameraMake() {
        return this.#data.CameraMake;
    }

    /**
     * @type {?string}
     */
    get cameraModel() {
        return this.#data.CameraModel;
    }

    /**
     * @type {?string}
     */
    get software() {
        return this.#data.Software;
    }

    /**
     * @type {?number}
     */
    get exposureTime() {
        return this.#data.ExposureTime;
    }

    /**
     * @type {?number}
     */
    get focalLength() {
        return this.#data.FocalLength;
    }

    /**
     * @type {?ImageOrientation}
     */
    get imageOrientation() {
        return this.#data.ImageOrientation;
    }

    /**
     * @type {?number}
     */
    get aperture() {
        return this.#data.Aperture;
    }

    /**
     * @type {?number}
     */
    get shutterSpeed() {
        return this.#data.ShutterSpeed;
    }

    /**
     * @type {?number}
     */
    get latitude() {
        return this.#data.Latitude;
    }

    /**
     * @type {?number}
     */
    get longitude() {
        return this.#data.Longitude;
    }

    /**
     * @type {?number}
     */
    get altitude() {
        return this.#data.Altitude;
    }

    /**
     * @type {?number}
     */
    get isoSpeedRating() {
        return this.#data.IsoSpeedRating;
    }

    /**
     * @type {?string}
     */
    get seriesTimerId() {
        return this.#data.SeriesTimerId;
    }

    /**
     * @type {?string}
     */
    get programId() {
        return this.#data.ProgramId;
    }

    /**
     * @type {?string}
     */
    get channelPrimaryImageTag() {
        return this.#data.ChannelPrimaryImageTag;
    }

    /**
     * @type {?Date}
     */
    get startDate() {
        if (this.#data.StartDate == null) return null;
        return new Date(this.#data.StartDate);
    }

    /**
     * @type {?number}
     */
    get completionPercentage() {
        return this.#data.CompletionPercentage;
    }

    /**
     * @type {?boolean}
     */
    get isRepeat() {
        return this.#data.IsRepeat;
    }

    /**
     * @type {?string}
     */
    get episodeTitle() {
        return this.#data.EpisodeTitle;
    }

    /**
     * @type {?ChannelType}
     */
    get channelType() {
        return this.#data.ChannelType;
    }

    /**
     * @type {?AudioType}
     */
    get audio() {
        return this.#data.Audio;
    }

    /**
     * @type {?boolean}
     */
    get isMovie() {
        return this.#data.IsMovie;
    }

    /**
     * @type {?boolean}
     */
    get isSports() {
        return this.#data.IsSports;
    }

    /**
     * @type {?boolean}
     */
    get isSeries() {
        return this.#data.IsSeries;
    }

    /**
     * @type {?boolean}
     */
    get isLive() {
        return this.#data.IsLive;
    }

    /**
     * @type {?boolean}
     */
    get isNews() {
        return this.#data.IsNews;
    }

    /**
     * @type {?boolean}
     */
    get isKids() {
        return this.#data.IsKids;
    }

    /**
     * @type {?boolean}
     */
    get isPremiere() {
        return this.#data.IsPremiere;
    }

    /**
     * @type {?string}
     */
    get timerId() {
        return this.#data.TimerId;
    }

    /**
     * @type {?number}
     */
    get normalizationGain() {
        return this.#data.NormalizationGain;
    }

    /**
     * @type {?object} Recursive
     */
    get currentProgram() {
        return this.#data.CurrentProgram;
    }
}

module.exports = Item;

/**
 * All available extra types.
 * @typedef {"Unknown" | "Clip" | "Trailer" | "BehindTheScenes" | "DeletedScene" | "Interview" | "Scene" | "Sample" | "ThemeSong" | "ThemeVideo" | "Featurette" | "Short"} ExtraType
 */

/**
 * All available Video 3D Formats.
 * @typedef {"HalfSideBySide" | "FullSideBySide" | "FullTopAndBottom" | "HalfTopAndBottom" | "MVC"} Video3DFormat
 */

/**
 * @typedef {Object} ItemExternalUrl
 * @property {?string} Name The name of this external URL.
 * @property {?string} Url The URL of this external URL.
 */

/**
 * All available play access.
 * @typedef {"Full" | "None"} PlayAccess
 */

/**
 * @typedef {Object} RemoteTrailer
 * @property {?string} Name
 * @property {?string} Url
 */

/**
 * All available item types.
 * @typedef {"AggregateFolder" | "Audio" | "AudioBook" | "BasePluginFolder" | "Book" | "BoxSet" | "Channel" | "ChannelFolderItem" | "CollectionFolder" | "Episode" | "Folder" | "Genre" | "ManualPlaylistsFolder" | "Movie" | "LiveTvChannel" | "LiveTvProgram" | "MusicAlbum" | "MusicArtist" | "MusicGenre" | "MusicVideo" | "Person" | "Photo" | "PhotoAlbum" | "Playlist" | "PlaylistsFolder" | "Program" | "Recording" | "Season" | "Series" | "Studio" | "Trailer" | "TvChannel" | "TvProgram" | "UserRootFolder" | "UserView" | "Video" | "Year"} ItemType
 */

/**
 * @typedef {Object} ItemPerson
 * @property {?string} Name The name of the person
 * @property {string} Id The identifier of the person
 * @property {?string} Role The role of the person
 * @property {"Unknown" | "Actor" | "Director" | "Composer" | "Writer" | "GuestStar" | "Producer" | "Conductor" | "Lyricist" | "Arranger" | "Engineer" | "Mixer" | "Remixer" | "Creator" | "Artist" | "AlbumArtist" | "Author" | "Illustrator" | "Penciller" | "Inker" | "Colorist" | "Letterer" | "CoverArtist" | "Editor" | "Translator"} Type The kind of the person.
 * @property {?string} PrimaryImageTag The primary image tag
 */

/**
 * @typedef {Object} NameGuidPair
 * @property {?string} Name
 * @property {string} Id
 */

/**
 * @typedef {Object} ItemUserData
 * @property {?number} Rating
 * @property {?number} PlayedPercentage
 * @property {?number} UnplayedItemCount
 * @property {number} PlaybackPositionTicks
 * @property {number} PlayCount
 * @property {boolean} IsFavorite
 * @property {?boolean} Likes
 * @property {?string} LastPlayedDate
 * @property {boolean} Played
 * @property {?string} Key
 * @property {?string} ItemId
 */

/**
 * All available days of week.
 * @typedef {"Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"} DayOfWeek
 */

/**
 * All available collection types.
 * @typedef {"unknown" | "movies" | "tvshows" | "music" | "musicvideos" | "trailers" | "homevideos" | "boxsets" | "books" | "photos" | "livetv" | "playlists" | "folders"} CollectionType
 */

/**
 * All available types of video.
 * @typedef {"VideoFile" | "Iso" | "Dvd" | "BluRay"} VideoType
 */

/**
 * @typedef {Object} ItemChapterInfo
 * @property {number} StartPositionTicks
 * @property {?string} Name
 * @property {?string} ImagePath
 * @property {string} ImageDateModified
 * @property {?string} ImageTag
 */

/**
 * All available types of location of an item.
 * @typedef {"FileSystem" | "Remote" | "Virtual" | "Offline"} LocationType
 */

/**
 * All available ISO types of an item.
 * @typedef {"Dvd" | "BluRay"} IsoType
 */

/**
 * All available media types of an item.
 * @typedef {"Unknown" | "Video" | "Audio" | "Photo" | "Book"} MediaType
 */

/**
 * All available media types of an item.
 * @typedef {"Cast" | "Genres" | "ProductionLocations" | "Studios" | "Tags" | "Name" | "Overview" | "Runtime" | "OfficialRating"} LockedField
 */

/**
 * All available image orientations of an item.
 * @typedef {"TopLeft" | "TopRight" | "BottomRight" | "BottomLeft" | "LeftTop" | "RightTop" | "RightBottom" | "LeftBottom"} ImageOrientation
 */

/**
 * All available channel types of an item.
 * @typedef {"TV" | "Radio"} ChannelType
 */

/**
 * All available audio types of an item.
 * @typedef {"Mono" | "Stereo" | "Dolby" | "DolbyDigital" | "Thx" | "Atmos"} AudioType
 */