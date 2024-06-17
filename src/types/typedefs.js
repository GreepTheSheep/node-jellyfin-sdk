/**
 * All available repeat mode.
 * @typedef {"RepeatNone" | "RepeatAll" | "RepeatOne"} RepeatMode
 */

/**
 * All available Series Status.
 * @typedef {"Continuing" | "Ended" | "Unreleased"} SeriesStatus
 */

/**
 * All available item location types.
 * @typedef {"FileSystem" | "Remote" | "Virtual" | "Offline"} ItemLocationType
 */

/**
 * All available item fields.
 * @typedef {"AirTime" | "CanDelete" | "CanDownload" | "ChannelInfo" | "Chapters" | "Trickplay" | "ChildCount" | "CumulativeRunTimeTicks" | "CustomRating" | "DateCreated" | "DateLastMediaAdded" | "DisplayPreferencesId" | "Etag" | "ExternalUrls" | "Genres" | "HomePageUrl" | "ItemCounts" | "MediaSourceCount" | "MediaSources" | "OriginalTitle" | "Overview" | "ParentId" | "Path" | "People" | "PlayAccess" | "ProductionLocations" | "ProviderIds" | "PrimaryImageAspectRatio" | "RecursiveItemCount" | "Settings" | "ScreenshotImageTags" | "SeriesPrimaryImage" | "SeriesStudio" | "SortName" | "SpecialEpisodeNumbers" | "Studios" | "Taglines" | "Tags" | "RemoteTrailers" | "MediaStreams" | "SeasonUserData" | "ServiceName" | "ThemeSongIds" | "ThemeVideoIds" | "ExternalEtag" | "PresentationUniqueKey" | "InheritedParentalRatingValue" | "ExternalSeriesId" | "SeriesPresentationUniqueKey" | "DateLastRefreshed" | "DateLastSaved" | "RefreshState" | "ChannelImage" | "EnableMediaSourceDisplay" | "Width" | "Height" | "ExtraIds" | "LocalTrailerCount" | "IsHD" | "SpecialFeatureCount"} ItemField
 */

/**
 * All available item filters.
 * @typedef {"IsFolder" | "IsNotFolder" | "IsUnplayed" | "IsPlayed" | "IsFavorite" | "IsResumable" | "Likes" | "Dislikes" | "IsFavoriteOrLikes"} ItemFilter
 */

/**
 * All available sort types of items.
 * @typedef {"Default" | "AiredEpisodeOrder" | "Album" | "AlbumArtist" | "Artist" | "DateCreated" | "OfficialRating" | "DatePlayed" | "PremiereDate" | "StartDate" | "SortName" | "Name" | "Random" | "Runtime" | "CommunityRating" | "ProductionYear" | "PlayCount" | "CriticRating" | "IsFolder" | "IsUnplayed" | "IsPlayed" | "SeriesSortName" | "VideoBitRate" | "AirTime" | "Studio" | "IsFavoriteOrLiked" | "DateLastContentAdded" | "SeriesDatePlayed" | "ParentIndexNumber" | "IndexNumber" | "SimilarityScore" | "SearchScore"} ItemSortBy
 */

/**
 * All available preset views.
 * @typedef {"unknown" | "movies" | "tvshows" | "music" | "musicvideos" | "trailers" | "homevideos" | "boxsets" | "books" | "photos" | "livetv" | "playlists" | "folders"} PresetView
 */

/**
 * All available extra types.
 * @typedef {"Unknown" | "Clip" | "Trailer" | "BehindTheScenes" | "DeletedScene" | "Interview" | "Scene" | "Sample" | "ThemeSong" | "ThemeVideo" | "Featurette" | "Short"} ExtraType
 */

/**
 * All available Video 3D Formats.
 * @typedef {"HalfSideBySide" | "FullSideBySide" | "FullTopAndBottom" | "HalfTopAndBottom" | "MVC"} Video3DFormat
 */

/**
 * All available play methods
 * @typedef {"Transcode" | "DirectStream" | "DirectPlay"} PlayMethod
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
 * All available image types of an item.
 * @typedef {"Primary" | "Art" | "Backdrop" | "Banner" | "Logo" | "Thumb" | "Disc" | "Box" | "Screenshot" | "Menu" | "Chapter" | "BoxRear" | "Profile"} ImageType
 */

/**
 * All available media types of an item.
 * @typedef {"Cast" | "Genres" | "ProductionLocations" | "Studios" | "Tags" | "Name" | "Overview" | "Runtime" | "OfficialRating"} LockedField
 */

/**
 * All available image orientations of an item.
 * @typedef {"TopLeft" | "TopRight" | "BottomRight" | "BottomLeft" | "LeftTop" | "RightTop" | "RightBottom" | "LeftBottom"} ItemImageOrientation
 */

/**
 * All available channel types of an item.
 * @typedef {"TV" | "Radio"} ChannelType
 */

/**
 * All available audio types of an item.
 * @typedef {"Mono" | "Stereo" | "Dolby" | "DolbyDigital" | "Thx" | "Atmos"} AudioType
 */

/**
 * All available media source protocols.
 * @typedef {"File" | "Http" | "Rtmp" | "Rtsp" | "Udp" | "Rtp" | "Ftp"} MediaSourceInfoProtocol
 */

/**
 * All available media source types.
 * @typedef {"Default" | "Grouping" | "Placeholder"} MediaSourceInfoType
 */

/**
 * All available timestamp validation formats.
 * @typedef {"None" | "Zero" | "Valid"} MediaTimestampFormat
 */

/**
 * All available media streaming protocols. Lowercase for backwards compatibility.
 * @typedef {"http" | "hls"} TranscodingSubProtocol
 */

/**
 * All available subtitle playback modes.
 * @typedef {"Default" | "Always" | "OnlyForced" | "None" | "Smart"} SubtitleModes
 */

/**
 * @typedef {Object} AccessSchedules
 * @property {number} Id The id of this instance.
 * @property {string} UserId The id of the associated user.
 * @property {"Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Everyday" | "Weekday" | "Weekend"} DayOfWeek The day of week.
 * @property {number} StartHour The start hour.
 * @property {number} EndHour The end hour.
 */

/**
 * All available unrated items to block.
 * @typedef {"Movie" | "Trailer" | "Series" | "Music" | "Book" | "LiveTvChannel" | "LiveTvProgram" | "ChannelContent" | "Other"} BlockUnratedItems
 */

/**
 * All available SyncPlay access levels.
 * @typedef {"CreateAndJoinGroups" | "JoinGroups" | "None"} SyncPlayAccess
 */

/**
 * All available video ranges.
 * @typedef {"Unknown" | "SDR" | "HDR"} VideoRange
 */

/**
 * All available video ranges types.
 * @typedef {"Unknown" | "SDR" | "HDR10" | "HLG" | "DOVI" | "DOVIWithHDR10" | "DOVIWithHLG" | "DOVIWithSDR" | "HDR10Plus"} VideoRangeType
 */

/**
 * All available audio spatial formats.
 * @typedef {"None" | "DolbyAtmos" | "DTSX"} AudioSpatialFormat
 */

/**
 * All available media stream types.
 * @typedef {"Audio" | "Video" | "Subtitle" | "EmbeddedImage" | "Data" | "Lyric"} MediaStreamType
 */

/**
 * All available media stream delivery methods.
 * @typedef {"Encode" | "Embed" | "External" | "Hls" | "Drop"} MediaStreamDeliveryMethod
 */