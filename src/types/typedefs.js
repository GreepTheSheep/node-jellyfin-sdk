/**
 * @typedef {Object} GetItemsParams
 * @property {string} maxOfficialRating Filter by maximum official rating (PG, PG-13, TV-MA, etc).
 * @property {boolean} hasThemeSong Filter by items with theme songs.
 * @property {boolean} hasThemeVideo Filter by items with theme videos.
 * @property {boolean} hasSubtitles Filter by items with subtitles.
 * @property {boolean} hasSpecialFeature Filter by items with special features.
 * @property {boolean} hasTrailer Filter by items with trailers.
 * @property {string} adjacentTo Return items that are siblings of a supplied item.
 * @property {number} parentIndexNumber Filter by parent index number.
 * @property {boolean} hasParentalRating Filter by items that have or do not have a parental rating.
 * @property {boolean} isHd Filter by items that are HD or not.
 * @property {boolean} is4K Filter by items that are 4K or not.
 * @property {Array<ItemLocationType>} locationTypes If specified, results will be filtered based on LocationType. This allows multiple.
 * @property {Array<ItemLocationType>} excludeLocationTypes If specified, results will be filtered based on LocationType. This allows multiple.
 * @property {boolean} isMissing Filter by items that are missing episodes or not.
 * @property {boolean} isUnaired Filter by items that are unaired episodes or not.
 * @property {number} minCommunityRating Filter by minimum community rating.
 * @property {number} minCriticRating Filter by minimum critic rating.
 * @property {string} minPremiereDate The minimum premiere date. Format = ISO.
 * @property {string} minDateLastSaved The minimum last saved date. Format = ISO.
 * @property {string} minDateLastSavedForUser The minimum last saved date for the current user. Format = ISO.
 * @property {string} maxPremiereDate The maximum premiere date. Format = ISO.
 * @property {boolean} hasOverview Filter by items that have an overview or not.
 * @property {boolean} hasImdbId Filter by items that have an IMDb id or not.
 * @property {boolean} hasTmdbId Filter by items that have an TMDb id or not.
 * @property {boolean} hasTvdbId Filter by items that have an TVDb id or not.
 * @property {boolean} isMovie Filter for live tv movies.
 * @property {boolean} isSeries Filter for live tv series.
 * @property {boolean} isNews Filter for live tv news.
 * @property {boolean} isKids Filter for live tv kids.
 * @property {boolean} isSports Filter for live tv sports.
 * @property {Array<string>} excludeItemIds If specified, results will be filtered by excluding item ids. This allows multiple.
 * @property {number} startIndex The record index to start at. All items with a lower index will be dropped from the results.
 * @property {number} limit The maximum number of records to return.
 * @property {boolean} recursive When searching within folders, this determines whether or not the search will be recursive.
 * @property {string} searchTerm Filter based on a search term.
 * @property {"Ascending" | "Descending"} sortOrder Sort Order - Ascending, Descending.
 * @property {string} parentId The parent item Id (if none, returns the collections)
 * @property {Array<ItemField>} fields Specify additional fields of information to return in the output. This allows multiple.
 * @property {Array<ItemType>} excludeItemTypes If specified, results will be filtered based on item type. This allows multiple.
 * @property {Array<ItemType>} includeItemTypes If specified, results will be filtered based on item type. This allows multiple.
 * @property {boolean} isFavorite Filter by items that are marked as favorite, or not.
 * @property {Array<MediaType>} mediaTypes Filter by MediaType. Allows multiple.
 * @property {Array<ImageType>} imageTypes If specified, results will be filtered based on those containing image types. This allows multiple.
 * @property {Array<ItemSortBy>} sortBy Specify one or more sort orders.
 * @property {boolean} isPlayed Filter by items that are played, or not.
 * @property {Array<string>} genres If specified, results will be filtered based on genre. This allows multiple.
 * @property {Array<string>} officialRatings If specified, results will be filtered based on OfficialRating. This allows multiple.
 * @property {Array<string>} tags If specified, results will be filtered based on tag. This allows multiple.
 * @property {Array<number>} years If specified, results will be filtered based on production year. This allows multiple.
 * @property {boolean} enableUserData Include user data.
 * @property {number} imageTypeLimit The max number of images to return, per image type.
 * @property {Array<ImageType>} enableImageTypes The image types to include in the output.
 * @property {string} person If specified, results will be filtered to include only those containing the specified person.
 * @property {Array<string>} personIds If specified, results will be filtered to include only those containing the specified person id.
 * @property {Array<string>} personTypes If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple.
 * @property {Array<string>} studios If specified, results will be filtered based on studio. This allows multiple.
 * @property {Array<string>} artists If specified, results will be filtered based on artists. This allows multiple.
 * @property {Array<string>} excludeArtistIds If specified, results will be filtered based on artist id. This allows multiple.
 * @property {Array<string>} artistIds If specified, results will be filtered based on artist id. This allows multiple.
 * @property {Array<string>} albumArtistIds If specified, results will be filtered to include only those containing the specified album artist id.
 * @property {Array<string>} contributingArtistIds If specified, results will be filtered to include only those containing the specified contributing artist id.
 * @property {Array<string>} albums If specified, results will be filtered based on album. This allows multiple.
 * @property {Array<string>} albumIds If specified, results will be filtered based on album id. This allows multiple.
 * @property {Array<string>} ids If specific items are needed, specify a list of item id's to retrieve. This allows multiple.
 * @property {Array<VideoType>} videoTypes Filter by VideoType Allows multiple.
 * @property {string} minOfficialRating Filter by minimum official rating (PG, PG-13, TV-MA, etc).
 * @property {boolean} isLocked Filter by items that are locked.
 * @property {boolean} isPlaceHolder Filter by items that are placeholders.
 * @property {boolean} hasOfficialRating Filter by items that have official ratings.
 * @property {boolean} collapseBoxSetItems Whether or not to hide items behind their boxsets.
 * @property {number} minWidth Filter by the minimum width of the item.
 * @property {number} minHeight Filter by the minimum height of the item.
 * @property {number} maxWidth Filter by the maximum width of the item.
 * @property {number} maxHeight Filter by the maximum height of the item.
 * @property {boolean} is3D Filter by items that are 3D, or not.
 * @property {Array<SeriesStatus>} seriesStatus Filter by Series Status. Allows multiple.
 * @property {string} nameStartsWithOrGreater Filter by items whose name is sorted equally or greater than a given input string.
 * @property {string} nameStartsWith Filter by items whose name is sorted equally than a given input string.
 * @property {string} nameLessThan Filter by items whose name is equally or lesser than a given input string.
 * @property {Array<string>} studioIds If specified, results will be filtered based on studio id. This allows multiple.
 * @property {Array<string>} genreIds If specified, results will be filtered based on genre id. This allows multiple.
 * @property {boolean} [enableTotalRecordCount=true] Enable the total record count.
 * @property {boolean} [enableImages=true] Include image information in output.
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