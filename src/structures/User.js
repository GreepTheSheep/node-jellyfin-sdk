const Client = require("../client/Client"); // eslint-disable-line no-unused-vars

/** Represents a user on Jellyfin. */
class User {
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
     * The name of the user
     * @type {?string}
     */
    get name() {
        return this.#data.Name;
    }

    /**
     * The server identifier
     * @type {?string}
     */
    get serverId() {
        return this.#data.ServerId;
    }

    /**
     * The server name
     * @type {?string}
     */
    get serverName() {
        return this.#data.ServerName;
    }

    /**
     * The identifier
     * @type {string}
     */
    get id() {
        return this.#data.Id;
    }

    /**
     * The primary Image Tag
     * @type {?string}
     */
    get primaryImageTag() {
        return this.#data.PrimaryImageTag;
    }

    /**
     * Whether this instance has password.
     * @type {boolean}
     */
    get hasPassword() {
        return this.#data.HasPassowrd;
    }

    /**
     * Whether this instance has configured password.
     * @type {boolean}
     */
    get hasConfiguredPassword() {
        return this.#data.HasConfiguredPassowrd;
    }

    /**
     * Whether this instance has configured easy password.
     * @type {boolean}
     */
    get hasConfiguredEasyPassword() {
        return this.#data.HasConfiguredEasyPassowrd;
    }

    /**
     * Whether async login is enabled or not.
     * @type {boolean}
     */
    get enableAutoLogin() {
        return this.#data.EnableAutoLogin;
    }

    /**
     * The last login date.
     * @type {?Date}
     */
    get lastLoginDate() {
        return this.#data.LastLoginDate ? new Date(this.#data.LastLoginDate) : null;
    }

    /**
     * The last activity date.
     * @type {?Date}
     */
    get lastActivityDate() {
        return this.#data.LastActivityDate ? new Date(this.#data.LastActivityDate) : null;
    }

    /**
     * The User Configuration
     * @type {UserConfiguration}
     */
    get configuration() {
        return new UserConfiguration(this, this.#data.Configuration);
    }

    /**
     * The User Policy
     * @type {UserPolicy}
     */
    get policy() {
        return new UserPolicy(this, this.#data.Policy);
    }

    /**
     * The aspect ratio of the primary image.
     * @type {?number}
     */
    get primaryImageAspectRatio() {
        return this.#data.PrimaryImageAspectRatio;
    }
}

/**
 * Represents the configuration of the user
 */
class UserConfiguration {
    #data;
    constructor(user, data) {
        /**
         * The User class that instantiated this
         * @type {User}
         */
        this.user = user;

        /**
         * The raw data
         * @type {object}
         * @private
         */
        this.#data = data;
    }

    /**
     * The audio language preference.
     * @type {?string}
     */
    get audioLanguagePreference() {
        return this.#data.AudioLanguagePreference;
    }

    /**
     * Whether play default audio track.
     * @type {boolean}
     */
    get playDefaultAudioTrack() {
        return this.#data.PlayDefaultAudioTrack;
    }

    /**
     * The subtitle language preference.
     * @type {?string}
     */
    get subtitleLanguagePreference() {
        return this.#data.SubtitleLanguagePreference;
    }

    /**
     * Whether to display missing episodes.
     * @type {boolean}
     */
    get displayMissingEpisodes() {
        return this.#data.DisplayMissingEpisodes;
    }

    /**
     * A array of grouped folders.
     * @type {Array<string>}
     */
    get groupedFolders() {
        return this.#data.GroupedFolders;
    }

    /**
     * The subtitle playback mode.
     * @type {SubtitleModes}
     */
    get subtitleMode() {
        return this.#data.SubtitleMode;
    }

    /**
     * Whether to display collections.
     * @type {boolean}
     */
    get displayCollectionsView() {
        return this.#data.DisplayCollectionsView;
    }

    /**
     * Whether to enable local password
     * @type {boolean}
     */
    get enableLocalPassword() {
        return this.#data.EnableLocalPassword;
    }

    /**
     * A array of ordered views.
     * @type {Array<string>}
     */
    get orderedViews() {
        return this.#data.OrderedViews;
    }

    /**
     * A array of latest items excludes.
     * @type {Array<string>}
     */
    get LatestItemsExcludes() {
        return this.#data.LatestItemsExcludes;
    }

    /**
     * A array of my media excludes.
     * @type {Array<string>}
     */
    get myMediaExcludes() {
        return this.#data.MyMediaExcludes;
    }

    /**
     * Whether to hide played items in latest items.
     * @type {boolean}
     */
    get hidePlayedInLatest() {
        return this.#data.HidePlayedInLatest;
    }

    /**
     * Whether to remember audio selections.
     * @type {boolean}
     */
    get rememberAudioSelections() {
        return this.#data.RememberAudioSelections;
    }

    /**
     * Whether to remember subtitle selections.
     * @type {boolean}
     */
    get rememberSubtitleSelections() {
        return this.#data.RememberSubtitleSelections;
    }

    /**
     * Whether to enable next episode after.
     * @type {boolean}
     */
    get enableNextEpisodeAutoPlay() {
        return this.#data.EnableNextEpisodeAutoPlay;
    }
}

/**
 * Represents the policy of the user
 */
class UserPolicy {
    #data;
    constructor(user, data) {
        /**
         * The User class that instantiated this
         * @type {User}
         */
        this.user = user;

        /**
         * The raw data
         * @type {object}
         * @private
         */
        this.#data = data;
    }

    /**
     * Whether the user is an administrator of the server.
     * @type {boolean}
     */
    get isAdministrator() {
        return this.#data.IsAdministrator;
    }

    /**
     * Whether the user is hidden on the server.
     * @type {boolean}
     */
    get isHidden() {
        return this.#data.IsHidden;
    }

    /**
     * Whether the user is disabled on the server.
     * @type {boolean}
     */
    get isDisabled() {
        return this.#data.IsDisabled;
    }

    /**
     * The max parental rating.
     * @type {?number}
     */
    get maxParentalRating() {
        return this.#data.MaxParentalRating;
    }

    /**
     * An array of blocked tags.
     * @type {Array<string>}
     */
    get blockedTags() {
        return this.#data.BlockedTags;
    }

    /**
     * Whether the user has access to user preferences.
     * @type {boolean}
     */
    get enableUserPreferenceAccess() {
        return this.#data.EnableUserPreferenceAccess;
    }

    /**
     * Whether the user has access to user preferences.
     * @type {?Array<AccessSchedules>}
     */
    get accessSchedules() {
        return this.#data.AccessSchedules;
    }

    /**
     * An array of items to block to the user.
     * @type {?Array<BlockUnratedItems>}
     */
    get blockUnratedItems() {
        return this.#data.BlockUnratedItems;
    }

    /**
     * Whether the user has access to remote control of other users.
     * @type {boolean}
     */
    get enableRemoteControlOfOtherUsers() {
        return this.#data.EnableRemoteControlOfOtherUsers;
    }

    /**
     * Whether the user has access to control of shared devices.
     * @type {boolean}
     */
    get enableSharedDeviceControl() {
        return this.#data.EnableSharedDeviceControl;
    }

    /**
     * Whether the user has remote access.
     * @type {boolean}
     */
    get enableRemoteAccess() {
        return this.#data.EnableRemoteAccess;
    }

    /**
     * Whether the user has access to manage Live TV.
     * @type {boolean}
     */
    get enableLiveTvManagement() {
        return this.#data.EnableLiveTvManagement;
    }

    /**
     * Whether the user has access to Live TV.
     * @type {boolean}
     */
    get enableLiveTvAccess() {
        return this.#data.EnableLiveTvAccess;
    }

    /**
     * Whether the user has access to media playback.
     * @type {boolean}
     */
    get enableMediaPlayback() {
        return this.#data.EnableMediaPlayback;
    }

    /**
     * Whether the user has access to audio playback transcoding.
     * @type {boolean}
     */
    get enableAudioPlaybackTranscoding() {
        return this.#data.EnableAudioPlaybackTranscoding;
    }

    /**
     * Whether the user has access to video playback transcoding.
     * @type {boolean}
     */
    get enableVideoPlaybackTranscoding() {
        return this.#data.EnableVideoPlaybackTranscoding;
    }

    /**
     * Whether the user has access to playback remuxing.
     * @type {boolean}
     */
    get enablePlaybackRemuxing() {
        return this.#data.EnablePlaybackRemuxing;
    }

    /**
     * Whether the user has access to force remote source transcoding.
     * @type {boolean}
     */
    get forceRemoteSourceTranscoding() {
        return this.#data.ForceRemoteSourceTranscoding;
    }

    /**
     * Whether the user has access to delete content.
     * @type {boolean}
     */
    get enableContentDeletion() {
        return this.#data.EnableContentDeletion;
    }

    /**
     * An array of folders where the user has access to delete content.
     * @type {?Array<string>}
     */
    get enableContentDeletionFromFolders() {
        return this.#data.EnableContentDeletionFromFolders;
    }

    /**
     * Whether the user has access to download content.
     * @type {boolean}
     */
    get enableContentDownloading() {
        return this.#data.EnableContentDownloading;
    }

    /**
     * Whether the user has access to sync transcoding.
     * @type {boolean}
     */
    get enableSyncTranscoding() {
        return this.#data.EnableSyncTranscoding;
    }

    /**
     * Whether the user has access to media conversion.
     * @type {boolean}
     */
    get enableMediaConversion() {
        return this.#data.EnableMediaConversion;
    }

    /**
     * An array of devices where the user has access to.
     * @type {?Array<string>}
     */
    get enabledDevices() {
        return this.#data.EnabledDevices;
    }

    /**
     * Whether the user has access to all devices.
     * @type {boolean}
     */
    get enableAllDevices() {
        return this.#data.EnableAllDevices;
    }

    /**
     * An array of channels where the user has access to.
     * @type {?Array<string>}
     */
    get enabledChannels() {
        return this.#data.EnabledChannels;
    }

    /**
     * Whether the user has access to all channels.
     * @type {boolean}
     */
    get enableAllChannels() {
        return this.#data.EnableAllChannels;
    }

    /**
     * An array of folders where the user has access to.
     * @type {?Array<string>}
     */
    get enabledFolders() {
        return this.#data.EnabledFolders;
    }

    /**
     * Whether the user has access to all folders.
     * @type {boolean}
     */
    get enableAllFolders() {
        return this.#data.EnableAllFolders;
    }

    /**
     * The number of times the user has invalid login attempts.
     * @type {number}
     */
    get invalidLoginAttemptCount() {
        return this.#data.InvalidLoginAttemptCount;
    }

    /**
     * The maximum number of the user has invalid login attempts before lockout.
     * @type {number}
     */
    get loginAttemptsBeforeLockout() {
        return this.#data.LoginAttemptsBeforeLockout;
    }

    /**
     * The maximum number of active sessions of the user.
     * @type {number}
     */
    get maxActiveSessions() {
        return this.#data.MaxActiveSessions;
    }

    /**
     * Whether the user has access to public sharing.
     * @type {boolean}
     */
    get enablePublicSharing() {
        return this.#data.EnablePublicSharing;
    }

    /**
     * An array of blocked media folders of the user.
     * @type {?Array<string>}
     */
    get blockedMediaFolders() {
        return this.#data.BlockedMediaFolders;
    }

    /**
     * An array of blocked channels of the user.
     * @type {?Array<string>}
     */
    get blockedChannels() {
        return this.#data.BlockedChannels;
    }

    /**
     * The limit number of the bitrate of the user.
     * @type {number}
     */
    get remoteClientBitrateLimit() {
        return this.#data.RemoteClientBitrateLimit;
    }

    /**
     * The Id of the authentication provider of the user.
     * @type {?string}
     */
    get authenticationProviderId() {
        return this.#data.AuthenticationProviderId;
    }

    /**
     * The Id of the password reset provider of the user.
     * @type {?string}
     */
    get passwordResetProviderId() {
        return this.#data.PasswordResetProviderId;
    }

    /**
     * The access level of SyncPlay of the user.
     * @type {SyncPlayAccess}
     */
    get syncPlayAccess() {
        return this.#data.SyncPlayAccess;
    }
}

module.exports = User;

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