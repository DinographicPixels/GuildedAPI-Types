export interface paths {
    "/channels/{channelId}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get channel messages
         * @description Results returned will be ordered ascending by the message's `createdAt`. `before` and `after` will filter based on the message's `createdAt`
         */
        get: operations["ChannelMessageReadMany"];
        put?: never;
        /** Create a channel message */
        post: operations["ChannelMessageCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/messages/{messageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a channel message
         * @description Get details for a specific chat message from a chat channel.
         */
        get: operations["ChannelMessageRead"];
        /** Update a channel message */
        put: operations["ChannelMessageUpdate"];
        post?: never;
        /** Delete a channel message */
        delete: operations["ChannelMessageDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}/members/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Add member to group */
        put: operations["GroupMembershipCreate"];
        post?: never;
        /** Remove member from group */
        delete: operations["GroupMembershipDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/members/{userId}/xp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set a member's XP */
        put: operations["ServerXpForUserUpdate"];
        /** Award XP to a member */
        post: operations["ServerXpForUserCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/xp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Bulk set members' XP
         * @description Take note of the max number of `userIds` that can be submitted on each request. If you require more, please batch your requests
         */
        put: operations["ServerXpForUserUpdateMany"];
        /**
         * Bulk award XP to members
         * @description Take note of the max number of `userIds` that can be submitted on each request. If you require more, please batch your requests
         */
        post: operations["ServerXpForUserCreateMany"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/roles/{roleId}/xp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Award XP to role
         * @description Award XP to all members with a particular role.
         */
        post: operations["ServerXpForRoleCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/members/{userId}/roles/{roleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Assign role to member */
        put: operations["RoleMembershipCreate"];
        post?: never;
        /** Remove role from member */
        delete: operations["RoleMembershipDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/members/{userId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get member roles
         * @description Get a list of the roles assigned to a member
         */
        get: operations["RoleMembershipReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/topics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get forum topics */
        get: operations["ForumTopicReadMany"];
        put?: never;
        /** Create a topic in a forum */
        post: operations["ForumTopicCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/topics/{forumTopicId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a forum topic */
        get: operations["ForumTopicRead"];
        put?: never;
        post?: never;
        /** Delete a forum topic */
        delete: operations["ForumTopicDelete"];
        options?: never;
        head?: never;
        /** Update a forum topic */
        patch: operations["ForumTopicUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/topics/{forumTopicId}/pin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Pin a forum topic */
        put: operations["ForumTopicPin"];
        post?: never;
        /** Unpin a forum topic */
        delete: operations["ForumTopicUnpin"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/topics/{forumTopicId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create forum topic reaction */
        put: operations["ForumTopicReactionCreate"];
        post?: never;
        /** Delete forum topic reaction */
        delete: operations["ForumTopicReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/topics/{forumTopicId}/lock": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Lock a forum topic */
        put: operations["ForumTopicLock"];
        post?: never;
        /** Unlock a forum topic */
        delete: operations["ForumTopicUnlock"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/topics/{forumTopicId}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a forum topic's comments */
        get: operations["ForumTopicCommentReadMany"];
        put?: never;
        /** Create a forum topic comment */
        post: operations["ForumTopicCommentCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/topics/{forumTopicId}/comments/{forumTopicCommentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a comment on a forum topic */
        get: operations["ForumTopicCommentRead"];
        put?: never;
        post?: never;
        /** Delete a forum topic comment */
        delete: operations["ForumTopicCommentDelete"];
        options?: never;
        head?: never;
        /** Update a forum topic comment */
        patch: operations["ForumTopicCommentUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get list items within a channel */
        get: operations["ListItemReadMany"];
        put?: never;
        /** Create a list item */
        post: operations["ListItemCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/items/{listItemId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list item */
        get: operations["ListItemRead"];
        put?: never;
        post?: never;
        /** Delete a list item */
        delete: operations["ListItemDelete"];
        options?: never;
        head?: never;
        /** Update a list item */
        patch: operations["ListItemUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/items/{listItemId}/complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Complete a list item */
        post: operations["ListItemCompleteCreate"];
        /** Uncomplete a list item */
        delete: operations["ListItemCompleteDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/members/{userId}/social-links/{socialLinkType}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a member's public social links */
        get: operations["MemberSocialLinkRead"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/members/{userId}/nickname": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update a member's nickname */
        put: operations["MemberNicknameUpdate"];
        post?: never;
        /** Delete a member's nickname */
        delete: operations["MemberNicknameDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a channel
         * @description Only server channels are supported at this time (coming soon™: DM Channels!). By default, a channel will be created with a null value for priority on a server. You can update its priority using [the channel update route](/docs/api/channels/ChannelUpdate)
         */
        post: operations["ChannelCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a channel
         * @description Must be a member of the server to get the channel. Only server channels are supported at this time (coming soon™: DM Channels!)
         */
        get: operations["ChannelRead"];
        put?: never;
        post?: never;
        /**
         * Delete a channel
         * @description Only server channels are supported at this time (coming soon™: DM Channels!)
         */
        delete: operations["ChannelDelete"];
        options?: never;
        head?: never;
        /**
         * Update a channel
         * @description Only server channels are supported at this time (coming soon™: DM Channels!)
         */
        patch: operations["ChannelUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/docs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get docs
         * @description Results returned will be ordered descending by the doc's `updatedAt`. `before` will filter based on the doc's `updatedAt`
         */
        get: operations["DocReadMany"];
        put?: never;
        /** Create a doc */
        post: operations["DocCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/docs/{docId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a doc */
        get: operations["DocRead"];
        /** Update a doc */
        put: operations["DocUpdate"];
        post?: never;
        /** Delete a doc */
        delete: operations["DocDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/members/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a server member */
        get: operations["ServerMemberRead"];
        put?: never;
        post?: never;
        /**
         * Kick a server member
         * @description This route can be used to leave servers by passing in your own user ID or `@me` for `userId`
         */
        delete: operations["ServerMemberDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get members of a server
         * @description Results returned will be ordered ascending by the member's `joinedAt`
         */
        get: operations["ServerMemberReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/bans/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a server ban */
        get: operations["ServerMemberBanRead"];
        put?: never;
        /**
         * Create a server ban
         * @description Also known as banning a server member
         */
        post: operations["ServerMemberBanCreate"];
        /**
         * Delete a server ban
         * @description Also known as unbanning a server member
         */
        delete: operations["ServerMemberBanDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/bans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get server bans */
        get: operations["ServerMemberBanReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a server's webhooks
         * @description Get a list of webhooks from a server.
         */
        get: operations["WebhookReadMany"];
        put?: never;
        /**
         * Create a webhook
         * @description Note that each server can only have 200 webhooks
         */
        post: operations["WebhookCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/webhooks/{webhookId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a server's webhook */
        get: operations["WebhookRead"];
        /** Update a webhook */
        put: operations["WebhookUpdate"];
        post?: never;
        /** Delete a server webhook */
        delete: operations["WebhookDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a server
         * @description Fetch various information about a given server. Currently, the bot must be a member of the server in order to fetch its information.
         */
        get: operations["ServerRead"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get calendar events
         * @description Results returned will be ordered ascending by the event's `startsAt`. `before` and `after` will filter based on the event's `startsAt`
         */
        get: operations["CalendarEventReadMany"];
        put?: never;
        /**
         * Create a calendar event
         * @description We currently do not have a way to surface the `repeatInfo` after event series are updated. Stay tuned!
         */
        post: operations["CalendarEventCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/events/{calendarEventId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a calendar event */
        get: operations["CalendarEventRead"];
        put?: never;
        post?: never;
        /** Delete a calendar event */
        delete: operations["CalendarEventDelete"];
        options?: never;
        head?: never;
        /**
         * Update a calendar event
         * @description We currently do not have a way to surface the `repeatInfo` after event series are updated. Stay tuned!
         */
        patch: operations["CalendarEventUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/events/{calendarEventId}/rsvps/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a calendar event RSVP */
        get: operations["CalendarEventRsvpRead"];
        /** Create or update a calendar event RSVP */
        put: operations["CalendarEventRsvpUpdate"];
        post?: never;
        /** Delete a calendar event RSVP */
        delete: operations["CalendarEventRsvpDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/events/{calendarEventId}/rsvps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get calendar event RSVPs */
        get: operations["CalendarEventRsvpReadMany"];
        /** Create or update a calendar event RSVP for multiple users */
        put: operations["CalendarEventRsvpUpdateMany"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a user
         * @description **Note** - at this time, you can only retrieve your own user
         */
        get: operations["UserRead"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/topics/{forumTopicId}/comments/{forumTopicCommentId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create forum topic comment reaction */
        put: operations["ForumTopicCommentReactionCreate"];
        post?: never;
        /** Delete forum topic comment reaction */
        delete: operations["ForumTopicCommentReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/events/{calendarEventId}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a calendar event's comments */
        get: operations["CalendarEventCommentReadMany"];
        put?: never;
        /** Create a comment on a calendar event */
        post: operations["CalendarEventCommentCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/events/{calendarEventId}/comments/{calendarEventCommentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a comment on the calendar event */
        get: operations["CalendarEventCommentRead"];
        put?: never;
        post?: never;
        /** Delete a calendar event comment */
        delete: operations["CalendarEventCommentDelete"];
        options?: never;
        head?: never;
        /** Update a calendar event comment */
        patch: operations["CalendarEventCommentUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/events/{calendarEventId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create calendar event reaction */
        put: operations["CalendarEventReactionCreate"];
        post?: never;
        /** Delete calendar event reaction */
        delete: operations["CalendarEventReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/events/{calendarEventId}/comments/{calendarEventCommentId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create calendar event comment reaction */
        put: operations["CalendarEventCommentReactionCreate"];
        post?: never;
        /** Delete calendar event comment reaction */
        delete: operations["CalendarEventCommentReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/docs/{docId}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a doc's comments */
        get: operations["DocCommentReadMany"];
        put?: never;
        /** Create a comment on a doc */
        post: operations["DocCommentCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/docs/{docId}/comments/{docCommentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a comment on a doc */
        get: operations["DocCommentRead"];
        put?: never;
        post?: never;
        /** Delete a doc comment */
        delete: operations["DocCommentDelete"];
        options?: never;
        head?: never;
        /** Update a doc comment */
        patch: operations["DocCommentUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/docs/{docId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create doc reaction */
        put: operations["DocReactionCreate"];
        post?: never;
        /** Delete doc reaction */
        delete: operations["DocReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/docs/{docId}/comments/{docCommentId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create doc comment reaction */
        put: operations["DocCommentReactionCreate"];
        post?: never;
        /** Delete doc comment reaction */
        delete: operations["DocCommentReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/event_series/{calendarEventSeriesId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete a calendar event series */
        delete: operations["CalendarEventSeriesDelete"];
        options?: never;
        head?: never;
        /** Update a calendar event series */
        patch: operations["CalendarEventSeriesUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/announcements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get announcements
         * @description Results returned will be ordered ascending by the announcement's `createdAt`. `before` will filter based on the announcement's `createdAt`
         */
        get: operations["AnnouncementReadMany"];
        put?: never;
        /** Create an announcement */
        post: operations["AnnouncementCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/announcements/{announcementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read an announcement */
        get: operations["AnnouncementRead"];
        put?: never;
        post?: never;
        /** Delete an announcement */
        delete: operations["AnnouncementDelete"];
        options?: never;
        head?: never;
        /** Update an announcement */
        patch: operations["AnnouncementUpdate"];
        trace?: never;
    };
    "/users/{userId}/servers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a users servers
         * @description **Note** - at this time, you can only retrieve your own servers
         */
        get: operations["UserServerReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/announcements/{announcementId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create announcement reaction */
        put: operations["AnnouncementReactionCreate"];
        post?: never;
        /** Delete announcement reaction */
        delete: operations["AnnouncementReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/announcements/{announcementId}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an announcement's comments */
        get: operations["AnnouncementCommentReadMany"];
        put?: never;
        /** Create a comment on an announcement */
        post: operations["AnnouncementCommentCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/announcements/{announcementId}/comments/{announcementCommentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a comment on the announcement */
        get: operations["AnnouncementCommentRead"];
        put?: never;
        post?: never;
        /** Delete an announcement comment */
        delete: operations["AnnouncementCommentDelete"];
        options?: never;
        head?: never;
        /** Update an announcement comment */
        patch: operations["AnnouncementCommentUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/announcements/{announcementId}/comments/{announcementCommentId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create an announcement comment reaction */
        put: operations["AnnouncementCommentReactionCreate"];
        post?: never;
        /** Delete an announcement comment reaction */
        delete: operations["AnnouncementCommentReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update your status
         * @description This value can be a max of 24 hours into the future. If you are wanting a longer expiration, set this value to null so that it never expires. **Note** - at this time, you can only set a status on your own user
         */
        put: operations["UserStatusCreate"];
        post?: never;
        /**
         * Delete your status
         * @description **Note** - at this time, you can only set a status on your own user
         */
        delete: operations["UserStatusDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/messages/{messageId}/emotes/{emoteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create a message reaction */
        put: operations["ChannelMessageReactionCreate"];
        post?: never;
        /** Delete a message reaction */
        delete: operations["ChannelMessageReactionDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/messages/{messageId}/emotes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Bulk delete a message's reactions */
        delete: operations["ChannelMessageReactionDeleteMany"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get groups */
        get: operations["GroupReadMany"];
        put?: never;
        /**
         * Create a group
         * @description Note: only 100 unarchived groups can exist on a server at any time
         */
        post: operations["GroupCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/groups/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a group */
        get: operations["GroupRead"];
        put?: never;
        post?: never;
        /**
         * Delete a group
         * @description Note: you cannot delete the home group
         */
        delete: operations["GroupDelete"];
        options?: never;
        head?: never;
        /** Update a group */
        patch: operations["GroupUpdate"];
        trace?: never;
    };
    "/servers/{serverId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get roles */
        get: operations["RoleReadMany"];
        put?: never;
        /**
         * Create a role
         * @description By default, a role will be created with the lowest priority on a server. You can update its priority using [the role update route](/docs/api/roles/RoleUpdate)
         */
        post: operations["RoleCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/roles/{roleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a role */
        get: operations["RoleRead"];
        put?: never;
        post?: never;
        /** Delete a role */
        delete: operations["RoleDelete"];
        options?: never;
        head?: never;
        /**
         * Update a role
         * @description Note that when a `priority` is updated, there will still only be a socket event for the role that was touched directly and not for other roles that were shifted
         */
        patch: operations["RoleUpdate"];
        trace?: never;
    };
    "/servers/{serverId}/roles/{roleId}/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a role permission */
        patch: operations["RolePermissionUpdate"];
        trace?: never;
    };
    "/servers/{serverId}/subscriptions/tiers/{serverSubscriptionTierType}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a server subscription tier */
        get: operations["ServerSubscriptionTierRead"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/subscriptions/tiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get server subscription tiers */
        get: operations["ServerSubscriptionTierReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/members/{userId}/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read a server member's permissions
         * @description If the user has *all* of the permissions passed, the HTTP status code will be 200; if user is missing one or more permissions passed, the HTTP status code will be [418](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418) with a `meta` property containing `missingPermissions` of the permissions the user does not have (this is a 418 to differentiate from a 403 if the _bot_ did not have permissions to perform the request, not the _user_). Tip: Use the `HEAD` HTTP method for this route if you only care about if the user has permissions and not the response body containing what's missing.
         */
        get: operations["ServerMemberPermissionsRead"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channelId}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Archive a channel */
        put: operations["ChannelArchiveCreate"];
        post?: never;
        /** Restore an archived channel */
        delete: operations["ChannelArchiveDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a category */
        post: operations["CategoryCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/categories/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read a category */
        get: operations["CategoryRead"];
        put?: never;
        post?: never;
        /** Delete a category */
        delete: operations["CategoryDelete"];
        options?: never;
        head?: never;
        /** Update a category */
        patch: operations["CategoryUpdate"];
        trace?: never;
    };
    "/channels/{channelId}/messages/{messageId}/pin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pin a message */
        post: operations["ChannelMessagePinCreate"];
        /** Unpin a message */
        delete: operations["ChannelMessagePinDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/channels/{channelId}/permissions/roles/{roleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read a channel role permission */
        get: operations["ChannelRolePermissionRead"];
        put?: never;
        /** Create a channel role permission */
        post: operations["ChannelRolePermissionCreate"];
        /** Delete a channel role permission */
        delete: operations["ChannelRolePermissionDelete"];
        options?: never;
        head?: never;
        /** Update a channel role permission */
        patch: operations["ChannelRolePermissionUpdate"];
        trace?: never;
    };
    "/servers/{serverId}/channels/{channelId}/permissions/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** ReadMany a channel role permission */
        get: operations["ChannelRolePermissionReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/channels/{channelId}/permissions/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read a channel user permission */
        get: operations["ChannelUserPermissionRead"];
        put?: never;
        /** Create a channel user permission */
        post: operations["ChannelUserPermissionCreate"];
        /** Delete a channel user permission */
        delete: operations["ChannelUserPermissionDelete"];
        options?: never;
        head?: never;
        /** Update a channel user permission */
        patch: operations["ChannelUserPermissionUpdate"];
        trace?: never;
    };
    "/servers/{serverId}/channels/{channelId}/permissions/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read a channel user permission */
        get: operations["ChannelUserPermissionReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/categories/{categoryId}/permissions/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read a channel category user permission */
        get: operations["ChannelCategoryUserPermissionRead"];
        put?: never;
        /** Create a channel category user permission */
        post: operations["ChannelCategoryUserPermissionCreate"];
        /** Delete a channel category user permission */
        delete: operations["ChannelCategoryUserPermissionDelete"];
        options?: never;
        head?: never;
        /** Update a channel category user permission */
        patch: operations["ChannelCategoryUserPermissionUpdate"];
        trace?: never;
    };
    "/servers/{serverId}/categories/{categoryId}/permissions/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of the channel category user permissions */
        get: operations["ChannelCategoryUserPermissionReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/servers/{serverId}/categories/{categoryId}/permissions/roles/{roleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read a channel category role permission */
        get: operations["ChannelCategoryRolePermissionRead"];
        put?: never;
        /** Create a channel category role permission */
        post: operations["ChannelCategoryRolePermissionCreate"];
        /** Delete a channel category role permission */
        delete: operations["ChannelCategoryRolePermissionDelete"];
        options?: never;
        head?: never;
        /** Update a channel category role permission */
        patch: operations["ChannelCategoryRolePermissionUpdate"];
        trace?: never;
    };
    "/servers/{serverId}/categories/{categoryId}/permissions/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of the channel category role permissions */
        get: operations["ChannelCategoryRolePermissionReadMany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/url-signatures": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create URL signatures
         * @description User-uploaded content hosted on our CDN will no longer be accessible directly after June 30th, 2024. To access the content, you will need to generate a valid signature via the `/url-signatures` endpoint, which is valid for 5 minutes, and download the content to store the data. Each asset comes with a daily request limit of one, so make sure to save the assets accordingly.
         */
        post: operations["UrlSignatureCreateMany"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @example {
         *       "id": "00000000-0000-0000-0000-000000000000",
         *       "type": "default",
         *       "serverId": "wlVr3Ggl",
         *       "groupId": "ZVzBo83p",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "content": "Hello **world**!",
         *       "embeds": [
         *         {
         *           "title": "embed title",
         *           "description": "embeds support a **different** __subset__ *of* markdown than other markdown fields. <@Ann6LewA>\n\n [links](https://www.guilded.gg) ```\ncheck this code out```\n\n:pizza: time!! ttyl",
         *           "url": "https://www.guilded.gg",
         *           "color": 6118369,
         *           "timestamp": "2022-04-12T22:14:36.737Z",
         *           "footer": {
         *             "icon_url": "https://www.guilded.gg/asset/Logos/logomark/Color/Guilded_Logomark_Color.png",
         *             "text": "footer text"
         *           },
         *           "thumbnail": {
         *             "url": "https://www.guilded.gg/asset/Logos/logomark/Color/Guilded_Logomark_Color.png"
         *           },
         *           "image": {
         *             "url": "https://www.guilded.gg/asset/Logos/logomark_wordmark/Color/Guilded_Logomark_Wordmark_Color.png"
         *           },
         *           "author": {
         *             "name": "Gil",
         *             "url": "https://www.guilded.gg",
         *             "icon_url": "https://www.guilded.gg/asset/Default/Gil-md.png"
         *           },
         *           "fields": [
         *             {
         *               "name": "hello",
         *               "value": "these are fields"
         *             },
         *             {
         *               "name": "~~help i have been crossed out~~",
         *               "value": "~~oh noes~~",
         *               "inline": true
         *             },
         *             {
         *               "name": "another inline",
         *               "value": "field",
         *               "inline": true
         *             }
         *           ]
         *         }
         *       ],
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA"
         *     } */
        ChatMessage: {
            /**
             * Message ID
             * Format: uuid
             * @description The ID of the message
             */
            id: string;
            /**
             * Type
             * @description The type of chat message. "system" messages are generated by Guilded, while "default" messages are user or bot-generated.
             * @enum {string}
             */
            type: ChatMessageType;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId?: string;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId?: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Content
             * Format: chat markdown
             * @description The content of the message
             */
            content?: string;
            /**
             * Hidden content link preview URLs
             * @description Links in `content` to prevent unfurling as a link preview when displaying in Guilded
             */
            hiddenLinkPreviewUrls?: string[];
            embeds?: components["schemas"]["ChatEmbed"][];
            /** @description Message IDs that were replied to */
            replyMessageIds?: string[];
            /**
             * Is private
             * @description If set, this message will only be seen by those mentioned or replied to
             */
            isPrivate?: boolean;
            /**
             * Is silent
             * @description If set, this message did not notify mention or reply recipients
             * @default false
             */
            isSilent: boolean;
            /**
             * Is pinned
             * @default false
             */
            isPinned: boolean;
            mentions?: components["schemas"]["Mentions"];
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the message was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this message (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            /**
             * Created by Webhook ID
             * @description The ID of the webhook who created this message, if it was created by a webhook
             */
            createdByWebhookId?: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the message was updated at, if relevant
             */
            updatedAt?: string;
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "messageId": "00000000-0000-0000-0000-000000000000"
         *     } */
        ChatMessageReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /**
             * Message ID
             * Format: uuid
             * @description The ID of the message
             */
            messageId: string;
        };
        /**
         * @description Rich content sections optionally associated with chat messages. Properties with "webhook-markdown" support allow for the following: link, italic, bold, strikethrough, underline, inline code, block code, reaction, mention, and role mention.
         * @example {
         *       "title": "embed title",
         *       "description": "embeds support a **different** __subset__ *of* markdown than other markdown fields. <@Ann6LewA>\n\n [links](https://www.guilded.gg) ```\ncheck this code out```\n\n:pizza: time!! ttyl",
         *       "url": "https://www.guilded.gg",
         *       "color": 6118369,
         *       "timestamp": "2022-04-12T22:14:36.737Z",
         *       "footer": {
         *         "icon_url": "https://www.guilded.gg/asset/Logos/logomark/Color/Guilded_Logomark_Color.png",
         *         "text": "footer text"
         *       },
         *       "thumbnail": {
         *         "url": "https://www.guilded.gg/asset/Logos/logomark/Color/Guilded_Logomark_Color.png"
         *       },
         *       "image": {
         *         "url": "https://www.guilded.gg/asset/Logos/logomark_wordmark/Color/Guilded_Logomark_Wordmark_Color.png"
         *       },
         *       "author": {
         *         "name": "Gil",
         *         "url": "https://www.guilded.gg",
         *         "icon_url": "https://www.guilded.gg/asset/Default/Gil-md.png"
         *       },
         *       "fields": [
         *         {
         *           "name": "hello",
         *           "value": "these are fields"
         *         },
         *         {
         *           "name": "~~help i have been crossed out~~",
         *           "value": "~~oh noes~~",
         *           "inline": true
         *         },
         *         {
         *           "name": "another inline",
         *           "value": "field",
         *           "inline": true
         *         }
         *       ]
         *     }
         */
        ChatEmbed: {
            /**
             * Format: webhook-markdown
             * @description Main header of the embed
             */
            title?: string;
            /**
             * Format: webhook-markdown
             * @description Subtext of the embed
             */
            description?: string;
            /**
             * Format: uri
             * @description URL to linkify the `title` field with
             */
            url?: string;
            /** @description The integer value corresponds to the decimal RGB representation for the color. The color that the left border should be */
            color?: number;
            /** @description A small section at the bottom of the embed */
            footer?: {
                /**
                 * Format: media-uri
                 * @description URL of a small image to put in the footer
                 */
                icon_url?: string;
                /** @description Text of the footer */
                text: string;
            };
            /**
             * Format: date-time
             * @description A timestamp to put in the footer
             */
            timestamp?: string;
            /** @description An image to the right of the embed's content */
            thumbnail?: {
                /**
                 * Format: media-uri
                 * @description URL of the image
                 */
                url?: string;
            };
            /** @description The main picture to associate with the embed */
            image?: {
                /**
                 * Format: media-uri
                 * @description URL of the image
                 */
                url?: string;
            };
            /** @description A small section above the title of the embed */
            author?: {
                /** @description Name of the author */
                name?: string;
                /**
                 * Format: uri
                 * @description URL to linkify the author's `name` field
                 */
                url?: string;
                /**
                 * Format: media-uri
                 * @description URL of a small image to display to the left of the author's `name`
                 */
                icon_url?: string;
            };
            /** @description Table-like cells to add to the embed */
            fields?: {
                /**
                 * Format: webhook-markdown
                 * @description Header of the table-like cell
                 */
                name: string;
                /**
                 * Format: webhook-markdown
                 * @description Subtext of the table-like cell
                 */
                value: string;
                /**
                 * @description If the field should wrap or not
                 * @default false
                 */
                inline: boolean;
            }[];
        };
        /** @example {
         *       "type": "roblox",
         *       "userId": "Ann6LewA",
         *       "handle": "builderman",
         *       "serviceId": "156",
         *       "createdAt": "2006-03-08T20:15:00.706Z"
         *     } */
        SocialLink: {
            /**
             * Social link type
             * @description The type of social link that Guilded supports. Depending on this value, `handle` or `serviceId` may or may not be present
             * @enum {string}
             */
            type: SocialLinkType;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user that the social link is associated with
             */
            userId: string;
            /** @description The handle of the user within the external service */
            handle?: string;
            /** @description The unique ID that represents this member's social link within the external service */
            serviceId?: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the social link was created at
             */
            createdAt: string;
        };
        /**
         * @description Metadata of who or what is mentioned in content
         * @example {
         *       "users": [
         *         {
         *           "id": "Ann6LewA"
         *         }
         *       ],
         *       "channels": [
         *         {
         *           "id": "00000000-0000-0000-0000-000000000000"
         *         }
         *       ],
         *       "roles": [
         *         {
         *           "id": 591232
         *         }
         *       ],
         *       "everyone": true,
         *       "here": true
         *     }
         */
        Mentions: {
            /**
             * Users
             * @description Info on mentioned users
             */
            users?: {
                /**
                 * User ID
                 * Format: user-id
                 * @description The ID of the user
                 */
                id: string;
            }[];
            /**
             * Channels
             * @description Info on mentioned channels
             */
            channels?: {
                /**
                 * Channel ID
                 * Format: uuid
                 * @description The ID of the channel
                 */
                id: string;
            }[];
            /**
             * Roles
             * @description Info on mentioned roles
             */
            roles?: {
                /**
                 * Role ID
                 * @description The ID of the role
                 */
                id: number;
            }[];
            /**
             * Everyone
             * @description If @everyone was mentioned
             */
            everyone?: boolean;
            /**
             * Here
             * @description If @here was mentioned
             */
            here?: boolean;
        };
        /** @example {
         *       "id": 1234567890,
         *       "content": "Great idea!",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "forumTopicId": 2036274747,
         *       "createdBy": "Ann6LewA"
         *     } */
        ForumTopicComment: {
            /** @description The ID of the forum topic comment */
            id: number;
            /**
             * Content
             * Format: long-form markdown
             * @description The content of the forum topic comment
             */
            content: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the forum topic comment was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the forum topic comment was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /** @description The ID of the forum topic */
            forumTopicId: number;
            /**
             * Created by
             * @description The ID of the user who created this forum topic comment (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            mentions?: components["schemas"]["Mentions"];
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "forumTopicId": 123456
         *     } */
        ForumTopicReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /** @description The ID of the forum topic */
            forumTopicId: number;
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "forumTopicId": 123456,
         *       "forumTopicCommentId": 1234567890
         *     } */
        ForumTopicCommentReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /** @description The ID of the forum topic */
            forumTopicId: number;
            /** @description The ID of the forum topic comment */
            forumTopicCommentId: number;
        };
        /** @example {
         *       "id": 123456,
         *       "serverId": "wlVr3Ggl",
         *       "groupId": "ZVzBo83p",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "title": "Welcome new members!!",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA",
         *       "content": "Please introduce yourself in this topic!!!"
         *     } */
        ForumTopic: {
            /** @description The ID of the forum topic */
            id: number;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Title
             * @description The title of the forum topic
             */
            title: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the forum topic was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this forum topic (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the forum topic was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Bumped at
             * Format: date-time
             * @description The ISO 8601 timestamp that the forum topic was bumped at. This timestamp is updated whenever there is any activity on the posts within the forum topic.
             */
            bumpedAt?: string;
            /**
             * Is pinned
             * @default false
             */
            isPinned: boolean;
            /**
             * Is locked
             * @default false
             */
            isLocked: boolean;
            /**
             * Content
             * Format: long-form markdown
             * @description The content of the forum topic
             */
            content: string;
            mentions?: components["schemas"]["Mentions"];
        };
        /** @example {
         *       "id": 123456,
         *       "serverId": "wlVr3Ggl",
         *       "groupId": "ZVzBo83p",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "title": "Welcome new members!!",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA"
         *     } */
        ForumTopicSummary: {
            /** @description The ID of the forum topic */
            id: number;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Title
             * @description The title of the forum topic
             */
            title: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the forum topic was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this forum topic (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the forum topic was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Bumped at
             * Format: date-time
             * @description The ISO 8601 timestamp that the forum topic was bumped at. This timestamp is updated whenever there is any activity on the posts within the forum topic.
             */
            bumpedAt?: string;
            /**
             * Is pinned
             * @default false
             */
            isPinned: boolean;
            /**
             * Is locked
             * @default false
             */
            isLocked: boolean;
        };
        /** @example {
         *       "id": "00000000-0000-0000-0000-000000000000",
         *       "serverId": "wlVr3Ggl",
         *       "groupId": "ZVzBo83p",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "message": "Remember to say hello **world**!",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA",
         *       "note": {
         *         "createdAt": "2021-06-15T20:15:00.706Z",
         *         "createdBy": "Ann6LewA",
         *         "content": "Duly noted"
         *       }
         *     } */
        ListItem: {
            /**
             * Format: uuid
             * @description The ID of the list item
             */
            id: string;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Message
             * Format: list item markdown
             * @description The message of the list item
             */
            message: string;
            mentions?: components["schemas"]["Mentions"];
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the list item was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this list item (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            /**
             * Created by Webhook ID
             * @description The ID of the webhook who created this list item, if it was created by a webhook
             */
            createdByWebhookId?: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the list item was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Updated by
             * @description The ID of the user who updated this list item
             */
            updatedBy?: string;
            /**
             * Format: uuid
             * @description The ID of the parent list item if this list item is nested
             */
            parentListItemId?: string;
            /**
             * Completed at
             * Format: date-time
             * @description The ISO 8601 timestamp that the list item was completed at
             */
            completedAt?: string;
            /**
             * Completed by
             * @description The ID of the user who completed this list item
             */
            completedBy?: string;
            note?: {
                /**
                 * Created at
                 * Format: date-time
                 * @description The ISO 8601 timestamp that the note was created at. If this field is populated, then there's a note associated with the list item
                 */
                createdAt: string;
                /**
                 * Created by
                 * @description The ID of the user who created this note
                 */
                createdBy: string;
                /**
                 * Updated at
                 * Format: date-time
                 * @description The ISO 8601 timestamp that the note was updated at, if relevant
                 */
                updatedAt?: string;
                /**
                 * Updated by
                 * @description The ID of the user who updated this note
                 */
                updatedBy?: string;
                mentions?: components["schemas"]["Mentions"];
                /**
                 * Note
                 * Format: long-form markdown
                 * @description The note of the list item
                 */
                content: string;
            };
        };
        /** @example {
         *       "id": "00000000-0000-0000-0000-000000000000",
         *       "serverId": "wlVr3Ggl",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "message": "Remember to say hello **world**!",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA",
         *       "note": {
         *         "createdAt": "2021-06-15T20:15:00.706Z",
         *         "createdBy": "Ann6LewA"
         *       }
         *     } */
        ListItemSummary: {
            /**
             * Format: uuid
             * @description The ID of the list item
             */
            id: string;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Message
             * Format: list item markdown
             * @description The message of the list item
             */
            message: string;
            mentions?: components["schemas"]["Mentions"];
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the list item was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this list item (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            /**
             * Created by Webhook ID
             * @description The ID of the webhook who created this list item, if it was created by a webhook
             */
            createdByWebhookId?: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the list item was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Updated by
             * @description The ID of the user who updated this list item
             */
            updatedBy?: string;
            /**
             * Format: uuid
             * @description The ID of the parent list item if this list item is nested
             */
            parentListItemId?: string;
            /**
             * Completed at
             * Format: date-time
             * @description The ISO 8601 timestamp that the list item was completed at
             */
            completedAt?: string;
            /**
             * Completed by
             * @description The ID of the user who completed this list item
             */
            completedBy?: string;
            note?: {
                /**
                 * Created at
                 * Format: date-time
                 * @description The ISO 8601 timestamp that the note was created at. If this field is populated, then there's a note associated with the list item
                 */
                createdAt: string;
                /**
                 * Created by
                 * @description The ID of the user who created this note
                 */
                createdBy: string;
                /**
                 * Updated at
                 * Format: date-time
                 * @description The ISO 8601 timestamp that the note was updated at, if relevant
                 */
                updatedAt?: string;
                /**
                 * Updated by
                 * @description The ID of the user who updated this note
                 */
                updatedBy?: string;
            };
        };
        /** @example {
         *       "id": 0,
         *       "serverId": "wlVr3Ggl",
         *       "groupId": "ZVzBo83p",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "title": "HOW-TO: Smoke These Meats with Sweet Baby Ray's",
         *       "content": "Spicy jalapeno bacon ipsum dolor amet sirloin ground round short loin, meatball brisket capicola tri-tip ham pork belly biltong corned beef chuck. Chicken ham brisket shank rump buffalo t-bone. Short loin sausage buffalo porchetta pork belly rump tri-tip frankfurter tail pork chop cow sirloin. Pancetta porchetta tail ball tip chislic beef ribs. Buffalo andouille leberkas jerky. Fatback shankle andouille beef. Cow kielbasa buffalo pork loin chislic meatloaf short loin rump meatball prosciutto.",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA",
         *       "updatedAt": "2021-07-15T22:20:00.706Z",
         *       "updatedBy": "Ann6LewA"
         *     } */
        Doc: {
            /**
             * Doc ID
             * @description The ID of the doc
             */
            id: number;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Title
             * @description The title of the doc
             */
            title: string;
            /**
             * Content
             * Format: long-form markdown
             * @description The content of the doc
             */
            content: string;
            mentions?: components["schemas"]["Mentions"];
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the doc was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this doc
             */
            createdBy: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the doc was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Updated by
             * @description The ID of the user who updated this doc
             */
            updatedBy?: string;
        };
        /** @example {
         *       "id": 123456,
         *       "content": "Wow, cool document!!!",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "docId": 0,
         *       "createdBy": "Ann6LewA"
         *     } */
        DocComment: {
            /**
             * Doc comment ID
             * @description The ID of the doc comment
             */
            id: number;
            /**
             * Content
             * Format: long-form markdown
             * @description The content of the doc comment
             */
            content: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the doc comment was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this doc comment (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the doc comment was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Doc ID
             * @description The ID of the doc
             */
            docId: number;
            mentions?: components["schemas"]["Mentions"];
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "docId": 0
         *     } */
        DocReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /**
             * Doc ID
             * @description The ID of the doc
             */
            docId: number;
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "docId": 0,
         *       "docCommentId": 123456
         *     } */
        DocCommentReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /**
             * Doc ID
             * @description The ID of the doc
             */
            docId: number;
            /**
             * Doc comment ID
             * @description The ID of the doc comment
             */
            docCommentId: number;
        };
        /** @example {
         *       "user": {
         *         "id": "Ann6LewA",
         *         "type": "user",
         *         "name": "Leopold Stotch",
         *         "createdAt": "2021-06-15T20:15:00.706Z"
         *       },
         *       "roleIds": [],
         *       "nickname": "Professor Chaos",
         *       "joinedAt": "2021-07-15T20:15:00.706Z"
         *     } */
        ServerMember: {
            user: components["schemas"]["User"];
            /** Role IDs */
            roleIds: number[];
            /** Nickname */
            nickname?: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the member was created at
             */
            joinedAt: string;
            /**
             * Is owner
             * @default false
             */
            isOwner: boolean;
        };
        /** @example {
         *       "user": {
         *         "id": "Ann6LewA",
         *         "type": "user",
         *         "name": "Leopold Stotch"
         *       },
         *       "roleIds": []
         *     } */
        ServerMemberSummary: {
            user: components["schemas"]["UserSummary"];
            /** Role IDs */
            roleIds: number[];
        };
        /** @example {
         *       "id": "Ann6LewA",
         *       "type": "user",
         *       "name": "Leopold Stotch",
         *       "createdAt": "2021-06-15T20:15:00.706Z"
         *     } */
        User: {
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user
             */
            id: string;
            /**
             * User type
             * @description The type of user. If this property is absent, it can assumed to be of type `user`
             * @enum {string}
             */
            type?: UserType;
            /**
             * User name
             * @description The user's name
             */
            name: string;
            /**
             * Avatar
             * Format: media-uri
             * @description The avatar image associated with the user
             */
            avatar?: string;
            /**
             * Banner
             * Format: media-uri
             * @description The banner image associated with the user
             */
            banner?: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the user was created at
             */
            createdAt: string;
            status?: components["schemas"]["UserStatus"];
        };
        /** @example {
         *       "id": "Ann6LewA",
         *       "type": "user",
         *       "name": "Leopold Stotch"
         *     } */
        UserSummary: {
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user
             */
            id: string;
            /**
             * User type
             * @description The type of user. If this property is absent, it can assumed to be of type `user`
             * @enum {string}
             */
            type?: UserSummaryType;
            /**
             * User name
             * @description The user's name
             */
            name: string;
            /**
             * Avatar
             * Format: media-uri
             * @description The avatar image associated with the user
             */
            avatar?: string;
        };
        /** @example {
         *       "user": {
         *         "id": "Ann6LewA",
         *         "type": "user",
         *         "name": "Leopold Stotch"
         *       },
         *       "reason": "More toxic than a poison Pokémon",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA"
         *     } */
        ServerMemberBan: {
            user: components["schemas"]["UserSummary"];
            /**
             * Reason
             * @description The reason for the ban as submitted by the banner
             */
            reason?: string;
            /**
             * Created by
             * @description The ID of the user who created this server member ban
             */
            createdBy: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the server member ban was created at
             */
            createdAt: string;
        };
        /** @example {
         *       "id": "00000000-0000-0000-0000-000000000000",
         *       "type": "chat",
         *       "name": "The Dank Cellar",
         *       "topic": "Dank memes ONLY",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA",
         *       "serverId": "wlVr3Ggl",
         *       "groupId": "ZVzBo83p"
         *     } */
        ServerChannel: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            id: string;
            /**
             * @description The type of channel. This will determine what routes to use for creating content in a channel. For example, if this "chat", then one must use the routes for creating channel messages
             * @enum {string}
             */
            type: ServerChannelType;
            /** @description The name of the channel */
            name: string;
            /** @description The topic of the channel. Not applicable to threads */
            topic?: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the channel was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this channel
             */
            createdBy: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the channel was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description ID of the **root** channel or thread in the channel hierarchy. Only applicable to "chat", "voice", and "stream" channels and indicates that this channel is a thread, if present
             */
            rootId?: string;
            /**
             * Channel ID
             * Format: uuid
             * @description ID of the **immediate** parent channel or thread in the channel hierarchy. Only applicable to "chat", "voice", and "stream" channels and indicates that this channel is a thread, if present
             */
            parentId?: string;
            /**
             * Message ID
             * Format: uuid
             * @description The ID of the message that this channel was created off of. Only applicable to "chat", "voice", and "stream" channels and indicates that this channel is a thread, if present
             */
            messageId?: string;
            /** @description The category that the channel exists in. Only relevant for server channels */
            categoryId?: number;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId: string;
            /**
             * @description What users can access the channel. Only applicable to server channels. If not present, this channel will respect normal permissions. `public` is accessible to everyone, even those who aren't of the server. `private` is only accessible to explicitly mentioned users. Currently, threads cannot be `public` and other channels cannot be `private`. Additionally, `private` threads can only exist with an associated `messageId` that is for a private message
             * @enum {string|null}
             */
            visibility?: null | "private" | "public";
            /**
             * Archived by
             * @description The ID of the user who archived this channel
             */
            archivedBy?: string;
            /**
             * Archived at
             * Format: date-time
             * @description The ISO 8601 timestamp that the channel was archived at, if relevant
             */
            archivedAt?: string;
            /**
             * Priority
             * @description The priority of the channel will determine its position relative to other categories in the group. The higher the value, the higher up it will be displayed in the UI. Returned values can be null, in which case sorting will be done by `createdAt` in ascending order. Due to legacy issues, sending a null value is not possible
             */
            priority?: number;
        };
        /** @example {
         *       "id": "wlVr3Ggl",
         *       "type": "community",
         *       "name": "Guilded",
         *       "url": "Guilded-Official",
         *       "about": "The Official Guilded Server! For devs, friends, and fans alike!",
         *       "ownerId": "Ann6LewA",
         *       "createdAt": "2018-10-05T20:15:00.706Z",
         *       "isVerified": true,
         *       "timezone": "America/Los Angeles (PST/PDT)"
         *     } */
        Server: {
            /**
             * Server ID
             * @description The ID of the server
             */
            id: string;
            /**
             * Created by
             * @description The ID of the user who created this server
             */
            ownerId: string;
            /**
             * Server type
             * @description The type of server designated from the server's settings page
             * @enum {string}
             */
            type?: ServerType;
            /**
             * Server name
             * @description The name given to the server
             */
            name: string;
            /**
             * Server URL
             * @description The URL that the server can be accessible from. For example, a value of "Guilded-Official" means the server can be accessible from https://www.guilded.gg/Guilded-Official
             */
            url?: string;
            /**
             * Description
             * @description The description associated with the server
             */
            about?: string;
            /**
             * Avatar
             * Format: media-uri
             * @description The avatar image associated with the server
             */
            avatar?: string;
            /**
             * Banner
             * Format: media-uri
             * @description The banner image associated with the server
             */
            banner?: string;
            /**
             * Timezone
             * @description The timezone associated with the server
             */
            timezone?: string;
            /**
             * Is verified
             * @description The verified status of the server
             */
            isVerified?: boolean;
            /**
             * Channel ID
             * Format: uuid
             * @description The channel ID of the default channel of the server. This channel is defined as the first chat or voice channel in the left sidebar of a server in our UI. This channel is useful for sending welcome messages, though note that a bot may not have permissions to interact with this channel depending on how the server is configured.
             */
            defaultChannelId?: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the server was created at
             */
            createdAt: string;
        };
        /** @example {
         *       "id": "00000000-0000-0000-0000-000000000000",
         *       "serverId": "wlVr3Ggl",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "name": "E-102 Gamma",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA"
         *     } */
        Webhook: {
            /**
             * Webhook ID
             * Format: uuid
             * @description The ID of the webhook
             */
            id: string;
            /**
             * Name
             * @description The name of the webhook
             */
            name: string;
            /**
             * Avatar
             * Format: media-uri
             * @description The avatar image associated with the webhook
             */
            avatar?: string;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the webhook was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this webhook
             */
            createdBy: string;
            /**
             * Deleted at
             * Format: date-time
             * @description The ISO 8601 timestamp that the webhook was deleted at
             */
            deletedAt?: string;
            /**
             * Token
             * @description The token of the webhook
             */
            token?: string;
        };
        /** @example {
         *       "id": 1,
         *       "serverId": "wlVr3Ggl",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "name": "Surprise LAN party for my wife 🤫",
         *       "description": "**Don't say anything to her!** She's gonna love playing Call of Duty all night",
         *       "location": "My house!",
         *       "url": "https://www.surprisepartygame.com/",
         *       "duration": 60,
         *       "color": 6118369,
         *       "startsAt": "2022-06-16T00:00:00.000Z",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA"
         *     } */
        CalendarEvent: {
            /**
             * Calendar event ID
             * @description The ID of the calendar event
             */
            id: number;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Name
             * @description The name of the event
             */
            name: string;
            /**
             * Description
             * Format: long-form markdown
             * @description The description of the event
             */
            description?: string;
            /**
             * Location
             * @description The location of the event
             */
            location?: string;
            /**
             * Format: uri
             * @description A URL to associate with the event
             */
            url?: string;
            /** @description The integer value corresponds to the decimal RGB representation for the color. The color of the event when viewing in the calendar */
            color?: number;
            /** @description Is this event a repeating event */
            repeats?: boolean;
            /**
             * Calendar event series ID
             * Format: uuid
             * @description The ID of the calendar event series. Only shows if the event is repeating
             */
            seriesId?: string;
            /**
             * Role IDs
             * @description The role IDs to restrict the event to
             */
            roleIds?: number[];
            /**
             * RSVP disabled
             * @description When disabled, users will not be able to RSVP to the event
             */
            rsvpDisabled?: boolean;
            /**
             * Is all day
             * @description Does the event last all day
             */
            isAllDay?: boolean;
            /** @description The number of RSVPs to allow before waitlisting RSVPs */
            rsvpLimit?: number;
            /** @description When `rsvpLimit` is set, users from the waitlist will be added as space becomes available in the event */
            autofillWaitlist?: boolean;
            /**
             * Starts at
             * Format: date-time
             * @description The ISO 8601 timestamp that the event starts at
             */
            startsAt: string;
            /**
             * Duration
             * @description The duration of the event _**in minutes**_
             */
            duration?: number;
            /** Is private */
            isPrivate?: boolean;
            mentions?: components["schemas"]["Mentions"];
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the event was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this event
             */
            createdBy: string;
            cancellation?: {
                /**
                 * Description
                 * Format: long-form markdown
                 * @description The description of event cancellation
                 */
                description?: string;
                /**
                 * Created by
                 * @description The ID of the user who created this event cancellation
                 */
                createdBy: string;
            };
        };
        /** @example {
         *       "id": 90000000,
         *       "name": "grinning",
         *       "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *     } */
        Emote: {
            /**
             * Emote ID
             * @description The ID of the emote
             */
            id: number;
            /**
             * Name
             * @description The name of the emote
             */
            name: string;
            /**
             * Emote URL
             * Format: media-uri
             * @description The URL of the emote image
             */
            url: string;
            /**
             * Server ID
             * @description The ID of the server the emote was created on
             */
            serverId?: string;
        };
        /** @example {
         *       "calendarEventId": 1,
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "serverId": "wlVr3Ggl",
         *       "userId": "Ann6LewA",
         *       "status": "going",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA"
         *     } */
        CalendarEventRsvp: {
            /**
             * Calendar event ID
             * @description The ID of the calendar event
             */
            calendarEventId: number;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user
             */
            userId: string;
            /**
             * Status
             * @description The status of the RSVP
             * @enum {string}
             */
            status: CalendarEventRsvpStatus;
            /**
             * Created by
             * @description The ID of the user who created this RSVP
             */
            createdBy: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the RSVP was created at
             */
            createdAt: string;
            /**
             * Updated by
             * @description The ID of the user who updated this RSVP
             */
            updatedBy?: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the RSVP was updated at, if relevant
             */
            updatedAt?: string;
        };
        /** @example {
         *       "id": 1234567890,
         *       "content": "I will be there!!",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdAt": "2022-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA",
         *       "calendarEventId": 987654321
         *     } */
        CalendarEventComment: {
            /**
             * Calendar event comment ID
             * @description The ID of the calendar event comment
             */
            id: number;
            /**
             * Content
             * Format: long-form markdown
             * @description The content of the calendar event comment
             */
            content: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the calendar event comment was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the calendar event comment was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Calendar event ID
             * @description The ID of the calendar event
             */
            calendarEventId: number;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Created by
             * @description The ID of the user who created this calendar event comment (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            mentions?: components["schemas"]["Mentions"];
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "calendarEventId": 1
         *     } */
        CalendarEventReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /**
             * Calendar event ID
             * @description The ID of the calendar event
             */
            calendarEventId: number;
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "calendarEventId": 1,
         *       "calendarEventCommentId": 1234567890
         *     } */
        CalendarEventCommentReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /**
             * Calendar event ID
             * @description The ID of the calendar event
             */
            calendarEventId: number;
            /**
             * Calendar event comment ID
             * @description The ID of the calendar event comment
             */
            calendarEventCommentId: number;
        };
        /** @example {
         *       "id": "00000000-0000-0000-0000-000000000000",
         *       "serverId": "wlVr3Ggl",
         *       "channelId": "00000000-0000-0000-0000-000000000000"
         *     } */
        CalendarEventSeries: {
            /**
             * Calendar event series ID
             * Format: uuid
             * @description The ID of the calendar event series
             */
            id: string;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
        };
        /** @example {
         *       "id": "9RVMoDZy",
         *       "serverId": "wlVr3Ggl",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdAt": "2021-06-15T20:15:00.706Z",
         *       "createdBy": "Ann6LewA",
         *       "title": "Pizza Party, don't be tardy!",
         *       "content": "Grab a slice, don't be slow, At our pizza party, it's the way to go! Toppings galore, cheesy delight, Come join us, it'll be out of sight!"
         *     } */
        Announcement: {
            /**
             * Announcement ID
             * @description The ID of the announcement
             */
            id: string;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the announcement was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this announcement
             */
            createdBy: string;
            /**
             * Content
             * Format: long-form markdown
             * @description The content of the announcement
             */
            content: string;
            mentions?: components["schemas"]["Mentions"];
            /**
             * Title
             * @description The title of the announcement
             */
            title: string;
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "announcementId": "9RVMoDZy"
         *     } */
        AnnouncementReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /**
             * Announcement ID
             * @description The ID of the announcement
             */
            announcementId: string;
        };
        /** @example {
         *       "id": 123456,
         *       "content": "Now THAT is one awesome announcement!!!",
         *       "createdAt": "2023-04-07T16:19:00.000Z",
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "announcementId": "9RVMoDZy",
         *       "createdBy": "Ann6LewA"
         *     } */
        AnnouncementComment: {
            /**
             * Announcement comment ID
             * @description The ID of the announcement comment
             */
            id: number;
            /**
             * Content
             * Format: long-form markdown
             * @description The content of the announcement comment
             */
            content: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the announcement comment was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the announcement comment was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Created by
             * @description The ID of the user who created this announcement comment (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
             */
            createdBy: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * Announcement ID
             * @description The ID of the announcement
             */
            announcementId: string;
            mentions?: components["schemas"]["Mentions"];
        };
        /** @example {
         *       "channelId": "00000000-0000-0000-0000-000000000000",
         *       "createdBy": "Ann6LewA",
         *       "emote": {
         *         "id": 90000000,
         *         "name": "grinning",
         *         "url": "https://www.guilded.gg/asset/Emojis/grinning.webp"
         *       },
         *       "announcementId": "9RVMoDZy",
         *       "announcementCommentId": 123456
         *     } */
        AnnouncementCommentReaction: {
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user who added the reaction
             */
            createdBy: string;
            emote: components["schemas"]["Emote"];
            /**
             * Announcement ID
             * @description The ID of the announcement
             */
            announcementId: string;
            /**
             * Announcement comment ID
             * @description The ID of the announcement comment
             */
            announcementCommentId: number;
        };
        /** @example {
         *       "id": "ZVzBo83p",
         *       "serverId": "wlVr3Ggl",
         *       "name": "Fans of Turnip Boy Commits Tax Evasion",
         *       "description": "Best game on steam!",
         *       "isPublic": true,
         *       "createdAt": "2021-06-15T00:04:20.696Z",
         *       "createdBy": "Ann6LewA"
         *     } */
        Group: {
            /**
             * Group ID
             * @description The ID of the group
             */
            id: string;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /** @description The name of the group */
            name: string;
            /**
             * Description
             * @description The description associated with the group
             */
            description?: string;
            /**
             * Avatar
             * Format: media-uri
             * @description The avatar image associated with the group
             */
            avatar?: string;
            /**
             * Is home
             * @description If `true`, this is the server's home group
             */
            isHome?: boolean;
            /** @description The emote to associate with the group */
            emoteId?: number;
            /**
             * Is public
             * @description Is this group open for anyone to join?
             * @default false
             */
            isPublic: boolean;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the group was created at
             */
            createdAt: string;
            /**
             * Created by
             * @description The ID of the user who created this group
             */
            createdBy: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the group was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Updated by
             * @description The ID of the user who updated this group
             */
            updatedBy?: string;
            /**
             * Archived at
             * Format: date-time
             * @description The ISO 8601 timestamp that the group was archived at, if relevant
             */
            archivedAt?: string;
            /**
             * Archived by
             * @description The ID of the user who archived this group
             */
            archivedBy?: string;
        };
        /** @example {
         *       "content": "Ready for the weekend!",
         *       "emoteId": 90000000
         *     } */
        UserStatus: {
            /**
             * Content
             * Format: status markdown
             * @description The content of the user status. The supported markdown for this content only includes reactions and plaintext for now
             */
            content?: string;
            /** @description Emote ID */
            emoteId: number;
        };
        /** @example {
         *       "id": 591232,
         *       "serverId": "wlVr3Ggl",
         *       "createdAt": "2023-04-15T20:15:00.706Z",
         *       "updatedAt": "2023-04-16T20:15:00.706Z",
         *       "name": "Captain",
         *       "isSelfAssignable": true,
         *       "permissions": [
         *         "CanUpdateServer",
         *         "CanReadChats",
         *         "CanCreateChats"
         *       ],
         *       "colors": [
         *         6118369
         *       ]
         *     } */
        Role: {
            /**
             * Role ID
             * @description The ID of the role
             */
            id: number;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the role was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the role was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Role name
             * @description The role's name
             */
            name: string;
            /**
             * Display Separately
             * @description If set, the role will be displayed separately in the channel member list
             * @default false
             */
            isDisplayedSeparately: boolean;
            /**
             * Self Assignable
             * @description If set, this roll will be self assigned
             * @default false
             */
            isSelfAssignable: boolean;
            /**
             * Mentionable
             * @description If set, this role can be mentioned
             * @default false
             */
            isMentionable: boolean;
            /** @description Permissions must be a collection of valid permissions as defined in the [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) section */
            permissions: string[];
            /** @description An array of integer values corresponding to the decimal RGB representation for a color. The first color is solid, and a second color indicates a gradient */
            colors?: number[];
            /**
             * Role icon URL
             * Format: media-uri
             * @description The URL of the role icon
             */
            icon?: string;
            /**
             * Priority
             * @description The priority the role will be in relation to other roles in the server. The higher the value, the more precedence the role has over lower priority roles, and the higher up it will be displayed in the UI. Values can be zero or negative!
             */
            priority?: number;
            /**
             * Is Base
             * @description The default role users are given when joining the server. Base roles are tied directly to the server and cannot be created or deleted
             * @default false
             */
            isBase: boolean;
            /**
             * Bot user ID
             * Format: user-id
             * @description The bot user ID this role has been defined for. Roles with this populated can only be deleted by kicking the bot
             */
            botUserId?: string;
        };
        /** @example {
         *       "type": "Gold",
         *       "serverId": "wlVr3Ggl",
         *       "roleId": 591232,
         *       "description": "Once you subscribe, this tier's benefits are free for the rest of the month!",
         *       "cost": 500,
         *       "createdAt": "2021-06-15T20:15:00.706Z"
         *     } */
        ServerSubscriptionTier: {
            /**
             * Server subscription tier type
             * @description The type of the server subscription tier. This field is case sensitive!!
             * @enum {string}
             */
            type: ServerSubscriptionTierType;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Description
             * @description The description associated with the server subscription tier
             */
            description?: string;
            /**
             * Role ID
             * @description The ID of the role
             */
            roleId?: number;
            /** @description The cost of the tier in cents USD per month */
            cost: number;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the server subscription tier was created at
             */
            createdAt: string;
        };
        /** @example {
         *       "permissions": [
         *         "CanUpdateServer",
         *         "CanReadChats",
         *         "CanCreateChats"
         *       ]
         *     } */
        ServerMemberPermissions: {
            /** @description Permissions must be a collection of valid permissions as defined in the [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) section */
            permissions: string[];
        };
        /** @example {
         *       "id": 1337,
         *       "serverId": "wlVr3Ggl",
         *       "groupId": "ZVzBo83p",
         *       "name": "Social",
         *       "createdAt": "2023-07-07T20:15:00.706Z",
         *       "updatedAt": "2023-07-08T20:15:00.706Z"
         *     } */
        Category: {
            /** @description The ID of the category */
            id: number;
            /**
             * Server ID
             * @description The ID of the server
             */
            serverId: string;
            /**
             * Group ID
             * @description The ID of the group
             */
            groupId: string;
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the category was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the category was updated at, if relevant
             */
            updatedAt?: string;
            /** @description Name of the category */
            name: string;
            /**
             * Priority
             * @description The priority of the category will determine its position relative to other categories in the group. The higher the value, the higher up it will be displayed in the UI. Returned values can be null, in which case sorting will be done by `createdAt` in descending order. Due to legacy issues, sending a null value is not possible
             */
            priority?: number;
        };
        /** @example {
         *       "id": 591232,
         *       "serverId": "wlVr3Ggl",
         *       "createdAt": "2023-06-15T20:15:00.706Z",
         *       "permissions": {
         *         "CanUpdateServer": true,
         *         "CanReadChats": true
         *       },
         *       "roleId": 591232,
         *       "channelId": "00000000-0000-0000-0000-000000000000"
         *     } */
        ChannelRolePermission: {
            permissions: {
                [key: string]: boolean;
            };
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the permission override was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the permission override was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Role ID
             * @description The ID of the role
             */
            roleId: number;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
        };
        /** @example {
         *       "id": 591232,
         *       "serverId": "wlVr3Ggl",
         *       "createdAt": "2023-06-15T20:15:00.706Z",
         *       "permissions": {
         *         "CanUpdateServer": true,
         *         "CanReadChats": true
         *       },
         *       "userId": "Ann6LewA",
         *       "channelId": "00000000-0000-0000-0000-000000000000"
         *     } */
        ChannelUserPermission: {
            permissions: {
                [key: string]: boolean;
            };
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the permission override was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the permission override was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user
             */
            userId: string;
            /**
             * Channel ID
             * Format: uuid
             * @description The ID of the channel
             */
            channelId: string;
        };
        /** @example {
         *       "id": 591232,
         *       "serverId": "wlVr3Ggl",
         *       "createdAt": "2023-06-15T20:15:00.706Z",
         *       "permissions": {
         *         "CanUpdateServer": true,
         *         "CanReadChats": true
         *       },
         *       "userId": "Ann6LewA",
         *       "categoryId": 1337
         *     } */
        ChannelCategoryUserPermission: {
            permissions: {
                [key: string]: boolean;
            };
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the permission override was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the permission override was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * User ID
             * Format: user-id
             * @description The ID of the user
             */
            userId: string;
            /** @description The ID of the category */
            categoryId: number;
        };
        /** @example {
         *       "id": 591232,
         *       "serverId": "wlVr3Ggl",
         *       "createdAt": "2023-06-15T20:15:00.706Z",
         *       "permissions": {
         *         "CanUpdateServer": true,
         *         "CanReadChats": true
         *       },
         *       "roleId": 591232,
         *       "categoryId": 1337
         *     } */
        ChannelCategoryRolePermission: {
            permissions: {
                [key: string]: boolean;
            };
            /**
             * Created at
             * Format: date-time
             * @description The ISO 8601 timestamp that the permission override was created at
             */
            createdAt: string;
            /**
             * Updated at
             * Format: date-time
             * @description The ISO 8601 timestamp that the permission override was updated at, if relevant
             */
            updatedAt?: string;
            /**
             * Role ID
             * @description The ID of the role
             */
            roleId: number;
            /** @description The ID of the category */
            categoryId: number;
        };
        /** @example {
         *       "url": "https://cdn.gilcdn.com/TeamAvatar/f3ca3496e7f2b6bfaeddfbb6526bdec7-Large.png?w=450&h=450"
         *     } */
        UrlSignature: {
            /** @description The URL that is to be signed */
            url: string;
            /** @description The url with a valid signature that has a 5 minute expiration on the signature */
            signature?: string;
            /** @description The number of seconds to wait before retrying the request */
            retryAfter?: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    ChannelMessageReadMany: {
        parameters: {
            query?: {
                /** @example 2021-06-15T20:15:00.706Z */
                before?: string;
                /**
                 * @description An ISO 8601 timestamp that will be used to filter out results for the current page. Order will be reversed when compared to `before` or when omitting this parameter altogether
                 * @example 2021-06-15T20:15:00.706Z
                 */
                after?: string;
                /** @example 25 */
                limit?: number;
                /** @description Whether to include private messages between all users in response */
                includePrivate?: boolean;
            };
            header?: never;
            path: {
                /**
                 * @description ID of the channel that the messages exist in
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        messages: components["schemas"]["ChatMessage"][];
                    };
                };
            };
        };
    };
    ChannelMessageCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Channel ID to create the message in
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "Hello **world**!",
                 *       "embeds": [
                 *         {
                 *           "title": "embed title",
                 *           "description": "embeds support a **different** __subset__ *of* markdown than other markdown fields. <@Ann6LewA>\n\n [links](https://www.guilded.gg) ```\ncheck this code out```\n\n:pizza: time!! ttyl",
                 *           "url": "https://www.guilded.gg",
                 *           "color": 6118369,
                 *           "timestamp": "2022-04-12T22:14:36.737Z",
                 *           "footer": {
                 *             "icon_url": "https://www.guilded.gg/asset/Logos/logomark/Color/Guilded_Logomark_Color.png",
                 *             "text": "footer text"
                 *           },
                 *           "thumbnail": {
                 *             "url": "https://www.guilded.gg/asset/Logos/logomark/Color/Guilded_Logomark_Color.png"
                 *           },
                 *           "image": {
                 *             "url": "https://www.guilded.gg/asset/Logos/logomark_wordmark/Color/Guilded_Logomark_Wordmark_Color.png"
                 *           },
                 *           "author": {
                 *             "name": "Gil",
                 *             "url": "https://www.guilded.gg",
                 *             "icon_url": "https://www.guilded.gg/asset/Default/Gil-md.png"
                 *           },
                 *           "fields": [
                 *             {
                 *               "name": "hello",
                 *               "value": "these are fields"
                 *             },
                 *             {
                 *               "name": "~~help i have been crossed out~~",
                 *               "value": "~~oh noes~~",
                 *               "inline": true
                 *             },
                 *             {
                 *               "name": "another inline",
                 *               "value": "field",
                 *               "inline": true
                 *             }
                 *           ]
                 *         }
                 *       ]
                 *     } */
                "application/json": {
                    /**
                     * Is private
                     * @description If set, this message will only be seen by those mentioned or replied to
                     */
                    isPrivate?: boolean;
                    /**
                     * Is silent
                     * @description If set, this message will not notify any mentioned users or roles
                     * @default false
                     */
                    isSilent?: boolean;
                    /** @description Message IDs to reply to */
                    replyMessageIds?: string[];
                    /**
                     * Content
                     * @description The content of the message
                     */
                    content?: Record<string, never> | string;
                    /**
                     * Hidden content link preview URLs
                     * @description Links in `content` to prevent unfurling as a link preview when displaying in Guilded
                     */
                    hiddenLinkPreviewUrls?: string[];
                    /** @description At this time, only one embed is supported per message, and attachments are not supported. If you need to send more than one embed or upload attachments, consider creating the message via a webhook. */
                    embeds?: components["schemas"]["ChatEmbed"][];
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["ChatMessage"];
                    };
                };
            };
        };
    };
    ChannelMessageRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description ID of the channel that the message exists in
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: components["schemas"]["ChatMessage"];
                    };
                };
            };
        };
    };
    ChannelMessageUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description ID of the channel that the message to be updated exists in
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "Hello **world**!",
                 *       "embeds": [
                 *         {
                 *           "title": "embed title",
                 *           "description": "embeds support a **different** __subset__ *of* markdown than other markdown fields. <@Ann6LewA>\n\n [links](https://www.guilded.gg) ```\ncheck this code out```\n\n:pizza: time!! ttyl",
                 *           "url": "https://www.guilded.gg",
                 *           "color": 6118369,
                 *           "timestamp": "2022-04-12T22:14:36.737Z",
                 *           "footer": {
                 *             "icon_url": "https://www.guilded.gg/asset/Logos/logomark/Color/Guilded_Logomark_Color.png",
                 *             "text": "footer text"
                 *           },
                 *           "thumbnail": {
                 *             "url": "https://www.guilded.gg/asset/Logos/logomark/Color/Guilded_Logomark_Color.png"
                 *           },
                 *           "image": {
                 *             "url": "https://www.guilded.gg/asset/Logos/logomark_wordmark/Color/Guilded_Logomark_Wordmark_Color.png"
                 *           },
                 *           "author": {
                 *             "name": "Gil",
                 *             "url": "https://www.guilded.gg",
                 *             "icon_url": "https://www.guilded.gg/asset/Default/Gil-md.png"
                 *           },
                 *           "fields": [
                 *             {
                 *               "name": "hello",
                 *               "value": "these are fields"
                 *             },
                 *             {
                 *               "name": "~~help i have been crossed out~~",
                 *               "value": "~~oh noes~~",
                 *               "inline": true
                 *             },
                 *             {
                 *               "name": "another inline",
                 *               "value": "field",
                 *               "inline": true
                 *             }
                 *           ]
                 *         }
                 *       ]
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * @description The content of the message
                     */
                    content?: Record<string, never> | string;
                    /**
                     * Hidden content link preview URLs
                     * @description Links in `content` to prevent unfurling as a link preview when displaying in Guilded
                     */
                    hiddenLinkPreviewUrls?: string[];
                    /** @description At this time, only one embed is supported per message, and attachments are not supported. If you need to send more than one embed or upload attachments, consider creating the message via a webhook. */
                    embeds?: components["schemas"]["ChatEmbed"][];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: {
                            /**
                             * Message ID
                             * Format: uuid
                             * @description The ID of the message
                             */
                            id?: string;
                            /**
                             * Type
                             * @description The type of chat message. "system" messages are generated by Guilded, while "default" messages are user or bot-generated.
                             * @enum {string}
                             */
                            type?: PathsChannelsChannelIdMessagesMessageIdPutResponses200ContentApplicationJsonMessageType;
                            /**
                             * Server ID
                             * @description The ID of the server
                             */
                            serverId?: string;
                            /**
                             * Group ID
                             * @description The ID of the group
                             */
                            groupId?: string;
                            /**
                             * Channel ID
                             * Format: uuid
                             * @description The ID of the channel
                             */
                            channelId?: string;
                            /**
                             * Content
                             * Format: chat markdown
                             * @description The content of the message
                             */
                            content?: string;
                            /**
                             * Hidden content link preview URLs
                             * @description Links in `content` to prevent unfurling as a link preview when displaying in Guilded
                             */
                            hiddenLinkPreviewUrls?: string[];
                            embeds?: components["schemas"]["ChatEmbed"][];
                            /** @description Message IDs that were replied to */
                            replyMessageIds?: string[];
                            /**
                             * Is private
                             * @description If set, this message will only be seen by those mentioned or replied to
                             */
                            isPrivate?: boolean;
                            /**
                             * Is silent
                             * @description If set, this message did not notify mention or reply recipients
                             * @default false
                             */
                            isSilent: boolean;
                            /**
                             * Is pinned
                             * @default false
                             */
                            isPinned: boolean;
                            mentions?: components["schemas"]["Mentions"];
                            /**
                             * Created at
                             * Format: date-time
                             * @description The ISO 8601 timestamp that the message was created at
                             */
                            createdAt?: string;
                            /**
                             * Created by
                             * @description The ID of the user who created this message (Note: If this event has `createdByWebhookId` present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA)
                             */
                            createdBy?: string;
                            /**
                             * Created by Webhook ID
                             * @description The ID of the webhook who created this message, if it was created by a webhook
                             */
                            createdByWebhookId?: string;
                            /**
                             * Updated at
                             * Format: date-time
                             * @description The ISO 8601 timestamp that the message was updated at, if relevant
                             */
                            updatedAt: string;
                        } & WithRequired<components["schemas"]["ChatMessage"], "updatedAt">;
                    };
                };
            };
        };
    };
    ChannelMessageDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupMembershipCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Group ID to add the member to
                 * @example ZVzBo83p
                 */
                groupId: string;
                /**
                 * @description Member ID to add to the group
                 * @example Ann6LewA
                 */
                userId: string | PathsGroupsGroupIdMembersUserIdPutParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupMembershipDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Group ID to remove the member from
                 * @example ZVzBo83p
                 */
                groupId: string;
                /**
                 * @description Member ID to remove from the group
                 * @example Ann6LewA
                 */
                userId: string | PathsGroupsGroupIdMembersUserIdDeleteParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServerXpForUserUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description Member ID to set XP to
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdMembersUserIdXpPutParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "total": 42
                 *     } */
                "application/json": {
                    /** @description The total XP to set on the user */
                    total: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The total XP after this operation */
                        total: number;
                    };
                };
            };
        };
    };
    ServerXpForUserCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description Member ID to award XP to
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdMembersUserIdXpPostParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "amount": 42
                 *     } */
                "application/json": {
                    /**
                     * Amount
                     * @description The amount of XP to award
                     */
                    amount: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The total XP after this operation */
                        total: number;
                    };
                };
            };
        };
    };
    ServerXpForUserUpdateMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "amount": 7777,
                 *       "userIds": [
                 *         "Ann6LewA"
                 *       ]
                 *     } */
                "application/json": {
                    /** @description The total XP to set on each user */
                    amount: number;
                    /** User IDs */
                    userIds: (string | PathsServersServerIdXpPutRequestBodyApplicationJsonUserIds)[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Each key of the object will be a user ID, and its value will be the total for that user after this operation */
                        totalsByUserId: {
                            [key: string]: number;
                        };
                    };
                };
            };
        };
    };
    ServerXpForUserCreateMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "amount": 42,
                 *       "userIds": [
                 *         "Ann6LewA"
                 *       ]
                 *     } */
                "application/json": {
                    /**
                     * Amount
                     * @description The amount of XP to award
                     */
                    amount: number;
                    /** User IDs */
                    userIds: (string | PathsServersServerIdXpPostRequestBodyApplicationJsonUserIds)[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Each key of the object will be a user ID, and its value will be the total for that user after this operation */
                        totalsByUserId: {
                            [key: string]: number;
                        };
                    };
                };
            };
        };
    };
    ServerXpForRoleCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description Role ID to award XP to
                 * @example 1
                 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "amount": 42
                 *     } */
                "application/json": {
                    /**
                     * Amount
                     * @description The amount of XP to award
                     */
                    amount: number;
                };
            };
        };
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RoleMembershipCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description The ID of the member that the role should be assigned to
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdMembersUserIdRolesRoleIdPutParametersPathUserId;
                /**
                 * @description The role ID to apply to the user
                 * @example 1
                 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RoleMembershipDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description The ID of the member that the role should be removed from
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdMembersUserIdRolesRoleIdDeleteParametersPathUserId;
                /**
                 * @description The role ID to remove from the user
                 * @example 1
                 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RoleMembershipReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description The ID of the member to obtain roles from
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdMembersUserIdRolesGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Role IDs
                         * @description The IDs of the roles that the member currently has
                         */
                        roleIds: number[];
                    };
                };
            };
        };
    };
    ForumTopicReadMany: {
        parameters: {
            query?: {
                /** @example 2021-06-15T20:15:00.706Z */
                before?: string;
                /** @example 25 */
                limit?: number;
            };
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forumTopics: components["schemas"]["ForumTopicSummary"][];
                    };
                };
            };
        };
    };
    ForumTopicCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "title": "Welcome new members!!",
                 *       "content": "Please introduce yourself in this topic!!!"
                 *     } */
                "application/json": {
                    /**
                     * Title
                     * @description The title of the forum topic
                     */
                    title: string;
                    /**
                     * Content
                     * @description The content of the forum topic
                     */
                    content: Record<string, never> | string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forumTopic: components["schemas"]["ForumTopic"];
                    };
                };
            };
        };
    };
    ForumTopicRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forumTopic: components["schemas"]["ForumTopic"];
                    };
                };
            };
        };
    };
    ForumTopicDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "title": "Welcome new members!!",
                 *       "content": "Please introduce yourself in this topic!!!"
                 *     } */
                "application/json": {
                    /**
                     * Title
                     * @description The title of the forum topic
                     */
                    title?: string;
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the forum topic
                     */
                    content?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forumTopic: components["schemas"]["ForumTopic"];
                    };
                };
            };
        };
    };
    ForumTopicPin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicUnpin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Channel ID where the forum topic exists
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
                /** @description Forum Topic ID */
                forumTopicId: number;
                /**
                 * @description Emote ID to apply
                 * @example 90000000
                 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicReactionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Channel ID where the forum topic exists
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
                /** @description Forum Topic ID */
                forumTopicId: number;
                /**
                 * @description Emote ID to remove
                 * @example 90000000
                 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicLock: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicUnlock: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicCommentReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forumTopicComments: components["schemas"]["ForumTopicComment"][];
                    };
                };
            };
        };
    };
    ForumTopicCommentCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "Great idea!"
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the forum topic comment
                     */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forumTopicComment: components["schemas"]["ForumTopicComment"];
                    };
                };
            };
        };
    };
    ForumTopicCommentRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
                forumTopicCommentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forumTopicComment: components["schemas"]["ForumTopicComment"];
                    };
                };
            };
        };
    };
    ForumTopicCommentDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
                forumTopicCommentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicCommentUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                forumTopicId: number;
                forumTopicCommentId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "Please introduce yourself in this topic!!!"
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the forum topic
                     */
                    content?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        forumTopicComment: components["schemas"]["ForumTopicComment"];
                    };
                };
            };
        };
    };
    ListItemReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        listItems: components["schemas"]["ListItemSummary"][];
                    };
                };
            };
        };
    };
    ListItemCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "message": "Create TODO list",
                 *       "note": {
                 *         "content": "I really need to stop putting this off"
                 *       }
                 *     } */
                "application/json": {
                    /**
                     * Message
                     * @description The message of the list item
                     */
                    message: Record<string, never> | string;
                    note?: {
                        /**
                         * Note
                         * @description The note of the list item
                         */
                        content: Record<string, never> | string;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        listItem: components["schemas"]["ListItem"];
                    };
                };
            };
        };
    };
    ListItemRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                listItemId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        listItem: components["schemas"]["ListItem"];
                    };
                };
            };
        };
    };
    ListItemDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                listItemId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ListItemUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                listItemId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "message": "Create TODO list",
                 *       "note": {
                 *         "content": "I really need to stop putting this off"
                 *       }
                 *     } */
                "application/json": {
                    /**
                     * Message
                     * Format: list item markdown
                     * @description The message of the list item
                     */
                    message?: string;
                    note?: {
                        /**
                         * Note
                         * Format: long-form markdown
                         * @description The note of the list item
                         */
                        content: string;
                    } | null;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        listItem: components["schemas"]["ListItem"];
                    };
                };
            };
        };
    };
    ListItemCompleteCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                listItemId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ListItemCompleteDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                listItemId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MemberSocialLinkRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdMembersUserIdSocialLinksSocialLinkTypeGetParametersPathUserId;
                /** @description The type of social link to retrieve */
                socialLinkType: PathsServersServerIdMembersUserIdSocialLinksSocialLinkTypeGetParametersPathSocialLinkType;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        socialLink: components["schemas"]["SocialLink"];
                    };
                };
            };
        };
    };
    MemberNicknameUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description The ID of the user to update nickname for
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdMembersUserIdNicknamePutParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "nickname": "Professor Chaos"
                 *     } */
                "application/json": {
                    /**
                     * Nickname
                     * @description The nickname to assign to the member
                     */
                    nickname: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Nickname
                         * @description The nickname that was assigned to the member
                         */
                        nickname: string;
                    };
                };
            };
        };
    };
    MemberNicknameDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description The ID of the user to remove nickname from
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdMembersUserIdNicknameDeleteParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "The Dank Cellar",
                 *       "type": "chat"
                 *     } */
                "application/json": ({
                    /** @description The name of the channel */
                    name: string;
                    /** @description The topic of the channel. Not applicable to threads */
                    topic?: string;
                    /**
                     * @description What users can access the channel. Only applicable to server channels. If not present, this channel will respect normal permissions. `public` is accessible to everyone, even those who aren't of the server. `private` is only accessible to explicitly mentioned users. Currently, threads cannot be `public` and other channels cannot be `private`. Additionally, `private` threads can only exist with an associated `messageId` that is for a private message
                     * @enum {string|null}
                     */
                    visibility?: null | "private" | "public";
                    /**
                     * @description The type of channel. This will determine what routes to use for creating content in a channel. For example, if this "chat", then one must use the routes for creating channel messages. For threads, this **must** be "chat" for now
                     * @enum {string}
                     */
                    type: PathsChannelsPostRequestBodyApplicationJsonType;
                    /**
                     * Server ID
                     * @description The ID of the server. Optional if providing a `groupId`, `categoryId`, `parentId` or `messageId`
                     */
                    serverId?: string;
                    /**
                     * Group ID
                     * @description The ID of the group. If not provided, channel will be created in the "Server home" group from `serverId` _or_ in the group that corresponds to the `categoryId` parameter. Optional if providing a `groupId`, `categoryId`, `parentId` or `messageId`
                     */
                    groupId?: string;
                    /** @description The category that the channel exists in. Only relevant for server channels. If not provided, channel will be a top-level channel. Optional if providing a `parentId` or `messageId` */
                    categoryId?: number;
                    /**
                     * Channel ID
                     * Format: uuid
                     * @description ID of the **immediate** parent channel or thread in the channel hierarchy. Only applicable to "chat", "voice", and "stream" channels and indicates that this channel is a thread, if present. Optional if providing a `messageId`
                     */
                    parentId?: string;
                    /**
                     * Message ID
                     * Format: uuid
                     * @description The ID of the message that this channel was created off of. Only applicable to "chat", "voice", and "stream" channels and indicates that this channel is a thread, if present
                     */
                    messageId?: string;
                } & unknown);
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["ServerChannel"];
                    };
                };
            };
        };
    };
    ChannelRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["ServerChannel"];
                    };
                };
            };
        };
    };
    ChannelDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "The Even Danker Cellar",
                 *       "topic": "Only the dankest of memes please",
                 *       "visibility": "public",
                 *       "priority": 5
                 *     } */
                "application/json": {
                    /** @description The name of the channel or thread */
                    name?: string;
                    /** @description The topic of the channel. Not applicable to threads */
                    topic?: string | null;
                    /**
                     * @description What users can access the channel. Only applicable to server channels. If not present, this channel will respect normal permissions. `public` is accessible to everyone, even those who aren't of the server. `private` is only accessible to explicitly mentioned users. Currently, threads cannot be `public` and other channels cannot be `private`. Additionally, `private` threads can only exist with an associated `messageId` that is for a private message. At this time, you cannot update the visibility on a channel to `private`; this must be set at creation
                     * @enum {string|null}
                     */
                    visibility?: null | "public";
                    /**
                     * Priority
                     * @description The priority of the channel will determine its position relative to other categories in the group. The higher the value, the higher up it will be displayed in the UI. Returned values can be null, in which case sorting will be done by `createdAt` in ascending order. Due to legacy issues, sending a null value is not possible
                     */
                    priority?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["ServerChannel"];
                    };
                };
            };
        };
    };
    DocReadMany: {
        parameters: {
            query?: {
                /** @example 2021-06-15T20:15:00.706Z */
                before?: string;
                /** @example 25 */
                limit?: number;
            };
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        docs: components["schemas"]["Doc"][];
                    };
                };
            };
        };
    };
    DocCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "title": "HOW-TO: Smoke These Meats with Sweet Baby Ray's",
                 *       "content": "Spicy jalapeno bacon ipsum dolor amet sirloin ground round short loin, meatball brisket capicola tri-tip ham pork belly biltong corned beef chuck. Chicken ham brisket shank rump buffalo t-bone. Short loin sausage buffalo porchetta pork belly rump tri-tip frankfurter tail pork chop cow sirloin. Pancetta porchetta tail ball tip chislic beef ribs. Buffalo andouille leberkas jerky. Fatback shankle andouille beef. Cow kielbasa buffalo pork loin chislic meatloaf short loin rump meatball prosciutto."
                 *     } */
                "application/json": {
                    /**
                     * Title
                     * @description The title of the doc
                     */
                    title: string;
                    /**
                     * Content
                     * @description The content of the doc
                     */
                    content: Record<string, never> | string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        doc: components["schemas"]["Doc"];
                    };
                };
            };
        };
    };
    DocRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        doc: components["schemas"]["Doc"];
                    };
                };
            };
        };
    };
    DocUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "title": "HOW-TO: Smoke These Meats with Sweet Baby Ray's",
                 *       "content": "Spicy jalapeno bacon ipsum dolor amet sirloin ground round short loin, meatball brisket capicola tri-tip ham pork belly biltong corned beef chuck. Chicken ham brisket shank rump buffalo t-bone. Short loin sausage buffalo porchetta pork belly rump tri-tip frankfurter tail pork chop cow sirloin. Pancetta porchetta tail ball tip chislic beef ribs. Buffalo andouille leberkas jerky. Fatback shankle andouille beef. Cow kielbasa buffalo pork loin chislic meatloaf short loin rump meatball prosciutto."
                 *     } */
                "application/json": {
                    /**
                     * Title
                     * @description The title of the doc
                     */
                    title: string;
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the doc
                     */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        doc: components["schemas"]["Doc"];
                    };
                };
            };
        };
    };
    DocDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServerMemberRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdMembersUserIdGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        member: components["schemas"]["ServerMember"];
                    };
                };
            };
        };
    };
    ServerMemberDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The ID of the server to kick the user from
                 * @example wlVr3Ggl
                 */
                serverId: string;
                /**
                 * @description The ID of the user to kick. If the value provided here is your own user's ID, the request will attempt to make you leave the server
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdMembersUserIdDeleteParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServerMemberReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        members: components["schemas"]["ServerMemberSummary"][];
                    };
                };
            };
        };
    };
    ServerMemberBanRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description The ID of the user to get a server ban for
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdBansUserIdGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        serverMemberBan: components["schemas"]["ServerMemberBan"];
                    };
                };
            };
        };
    };
    ServerMemberBanCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description The ID of the user to ban from this server
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdBansUserIdPostParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "reason": "More toxic than a poison Pokémon"
                 *     } */
                "application/json": {
                    /**
                     * Reason
                     * @description The reason for the ban
                     */
                    reason?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        serverMemberBan: components["schemas"]["ServerMemberBan"];
                    };
                };
            };
        };
    };
    ServerMemberBanDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /**
                 * @description The ID of the user to unban from this server
                 * @example Ann6LewA
                 */
                userId: string | PathsServersServerIdBansUserIdDeleteParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServerMemberBanReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        serverMemberBans: components["schemas"]["ServerMemberBan"][];
                    };
                };
            };
        };
    };
    WebhookReadMany: {
        parameters: {
            query?: {
                /**
                 * @description ID of the channel you want to filter for webhooks
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId?: string;
            };
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        webhooks: components["schemas"]["Webhook"][];
                    };
                };
            };
        };
    };
    WebhookCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Game patch webhook"
                 *     } */
                "application/json": {
                    /**
                     * Name
                     * @description The name of the webhook
                     */
                    name: string;
                    /**
                     * Channel ID
                     * Format: uuid
                     * @description Channel ID to create the webhook in
                     */
                    channelId: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        webhook: components["schemas"]["Webhook"];
                    };
                };
            };
        };
    };
    WebhookRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        webhook: components["schemas"]["Webhook"];
                    };
                };
            };
        };
    };
    WebhookUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Better name webhook"
                 *     } */
                "application/json": {
                    /**
                     * Name
                     * @description The name of the webhook
                     */
                    name: string;
                    /**
                     * Channel ID
                     * Format: uuid
                     * @description The ID of the channel
                     */
                    channelId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        webhook: components["schemas"]["Webhook"];
                    };
                };
            };
        };
    };
    WebhookDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ServerRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        server: components["schemas"]["Server"];
                        /** @description Count of members in this server after this join. **Note:** at higher member counts (1000+), this value is only updated periodically and should not be used in situations that require absolute accuracy */
                        serverMemberCount: number;
                    };
                };
            };
        };
    };
    CalendarEventReadMany: {
        parameters: {
            query?: {
                /** @example 2021-06-15T20:15:00.706Z */
                before?: string;
                /** @example 2021-06-15T20:15:00.706Z */
                after?: string;
                /** @example 25 */
                limit?: number;
            };
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEvents: components["schemas"]["CalendarEvent"][];
                    };
                };
            };
        };
    };
    CalendarEventCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The calendar to create the event in
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Surprise LAN party for my wife 🤫",
                 *       "description": "**Don't say anything to her!** She's gonna love playing Call of Duty all night",
                 *       "location": "My house!",
                 *       "url": "https://www.surprisepartygame.com/",
                 *       "color": 6118369,
                 *       "startsAt": "2022-06-16T00:00:00.000Z",
                 *       "duration": 60
                 *     } */
                "application/json": {
                    /**
                     * Name
                     * @description The name of the event
                     */
                    name: string;
                    /**
                     * Description
                     * Format: long-form markdown
                     * @description The description of the event
                     */
                    description?: string;
                    /**
                     * Location
                     * @description The location of the event
                     */
                    location?: string;
                    /**
                     * Starts at
                     * Format: date-time
                     * @description The ISO 8601 timestamp that the event starts at
                     */
                    startsAt?: string;
                    /**
                     * Format: uri
                     * @description A URL to associate with the event
                     */
                    url?: string;
                    /** @description The integer value corresponds to the decimal RGB representation for the color. The color of the event when viewing in the calendar */
                    color?: number;
                    /**
                     * Is all day
                     * @description Does the event last all day? If passed with `duration`, `duration` will only be applied if it is an interval of minutes represented in days (e.g., `duration: 2880`)
                     */
                    isAllDay?: boolean;
                    /**
                     * RSVP disabled
                     * @description When disabled, users will not be able to RSVP to the event
                     */
                    rsvpDisabled?: boolean;
                    /** @description The number of RSVPs to allow before waitlisting RSVPs */
                    rsvpLimit?: number;
                    /** @description When `rsvpLimit` is set, users from the waitlist will be added as space becomes available in the event */
                    autofillWaitlist?: boolean;
                    /**
                     * Duration
                     * @description The duration of the event _**in minutes**_
                     */
                    duration?: number;
                    /** Is private */
                    isPrivate?: boolean;
                    /**
                     * Role IDs
                     * @description The role IDs to restrict the event to
                     */
                    roleIds?: number[];
                    repeatInfo?: {
                        /**
                         * Repeat Type
                         * @description How often you want your event to repeat (important note: this will repeat for the next 365 days unless custom is defined)
                         * @default once
                         * @enum {string}
                         */
                        type: PathsChannelsChannelIdEventsPostRequestBodyApplicationJsonRepeatInfoType;
                        /** @description Apply further clarification to your events. This **must** have `type` set to `custom` */
                        every?: {
                            /**
                             * Count
                             * @description How often between your interval the event should repeat. For example, 1 would be every interval, 2 would be every second occurrence of the interval
                             */
                            count: number;
                            /**
                             * Interval
                             * @description Coupled with `count`, this indicates the time range you are repeating your event over
                             * @enum {string}
                             */
                            interval: PathsChannelsChannelIdEventsPostRequestBodyApplicationJsonRepeatInfoEveryInterval;
                        };
                        /**
                         * Occurrences
                         * @description Used to control the end date of the event repeat (only used when `type` is `custom`; if used with `endDate`, the earliest resultant date of the two will be used)
                         */
                        endsAfterOccurrences?: number;
                        /**
                         * Ends at
                         * Format: date-time
                         * @description The ISO 8601 timestamp that the event ends at. Used to control the end date of the event repeat (only used when `type` is `custom`; if used with `endsAfterOccurrences`, the earliest resultant date of the two will be used)
                         */
                        endDate?: string;
                        /** @description Used to control the day of the week that the event should repeat on (only used when `type` is `custom` and when `every.interval` is `week`) */
                        on?: PathsChannelsChannelIdEventsPostRequestBodyApplicationJsonRepeatInfoOn[];
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEvent: components["schemas"]["CalendarEvent"];
                    };
                };
            };
        };
    };
    CalendarEventRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEvent: components["schemas"]["CalendarEvent"];
                    };
                };
            };
        };
    };
    CalendarEventDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Surprise LAN party for my wife 🤫",
                 *       "description": "**Don't say anything to her!** She's gonna love playing Call of Duty all night",
                 *       "location": "My house!",
                 *       "url": "https://www.surprisepartygame.com/",
                 *       "color": 6118369,
                 *       "startsAt": "2022-06-16T00:00:00.000Z",
                 *       "duration": 60
                 *     } */
                "application/json": {
                    /**
                     * Name
                     * @description The name of the event
                     */
                    name?: string;
                    /**
                     * Description
                     * Format: long-form markdown
                     * @description The description of the event
                     */
                    description?: string;
                    /**
                     * Location
                     * @description The location of the event
                     */
                    location?: string;
                    /**
                     * Starts at
                     * Format: date-time
                     * @description The ISO 8601 timestamp that the event starts at
                     */
                    startsAt?: string;
                    /**
                     * Format: uri
                     * @description A URL to associate with the event
                     */
                    url?: string;
                    /** @description The integer value corresponds to the decimal RGB representation for the color. The color of the event when viewing in the calendar */
                    color?: number;
                    /**
                     * Is all day
                     * @description Does the event last all day? If passed with `duration`, `duration` will only be applied if it is an interval of minutes represented in days (e.g., `duration: 2880`)
                     */
                    isAllDay?: boolean;
                    /**
                     * RSVP disabled
                     * @description When disabled, users will not be able to RSVP to the event
                     */
                    rsvpDisabled?: boolean;
                    /** @description The number of RSVPs to allow before waitlisting RSVPs */
                    rsvpLimit?: number;
                    /** @description When `rsvpLimit` is set, users from the waitlist will be added as space becomes available in the event */
                    autofillWaitlist?: boolean;
                    /**
                     * Duration
                     * @description The duration of the event _**in minutes**_
                     */
                    duration?: number;
                    /** Is private */
                    isPrivate?: boolean;
                    /**
                     * Role IDs
                     * @description The role IDs to restrict the event to. Passing an empty array will clear the role IDs on the event
                     */
                    roleIds?: number[];
                    cancellation?: {
                        /**
                         * Description
                         * Format: long-form markdown
                         * @description The description of event cancellation
                         */
                        description?: string;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEvent: components["schemas"]["CalendarEvent"];
                    };
                };
            };
        };
    };
    CalendarEventRsvpRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example Ann6LewA */
                userId: string | PathsChannelsChannelIdEventsCalendarEventIdRsvpsUserIdGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEventRsvp: components["schemas"]["CalendarEventRsvp"];
                    };
                };
            };
        };
    };
    CalendarEventRsvpUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example Ann6LewA */
                userId: string | PathsChannelsChannelIdEventsCalendarEventIdRsvpsUserIdPutParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "status": "going"
                 *     } */
                "application/json": {
                    /**
                     * Status
                     * @description The status of the RSVP
                     * @enum {string}
                     */
                    status: PathsChannelsChannelIdEventsCalendarEventIdRsvpsUserIdPutRequestBodyApplicationJsonStatus;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEventRsvp: components["schemas"]["CalendarEventRsvp"];
                    };
                };
            };
        };
    };
    CalendarEventRsvpDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example Ann6LewA */
                userId: string | PathsChannelsChannelIdEventsCalendarEventIdRsvpsUserIdDeleteParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventRsvpReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEventRsvps: components["schemas"]["CalendarEventRsvp"][];
                    };
                };
            };
        };
    };
    CalendarEventRsvpUpdateMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** User IDs */
                    userIds: (string | PathsChannelsChannelIdEventsCalendarEventIdRsvpsPutRequestBodyApplicationJsonUserIds)[];
                    /**
                     * Status
                     * @description The status of the RSVP
                     * @enum {string}
                     */
                    status: PathsChannelsChannelIdEventsCalendarEventIdRsvpsPutRequestBodyApplicationJsonStatus;
                };
            };
        };
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example Ann6LewA */
                userId: string | PathsUsersUserIdGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user: components["schemas"]["User"];
                    };
                };
            };
        };
    };
    ForumTopicCommentReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Channel ID where the forum topic exists
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
                forumTopicId: number;
                forumTopicCommentId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ForumTopicCommentReactionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Channel ID where the forum topic exists
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
                forumTopicId: number;
                forumTopicCommentId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventCommentReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEventComments: components["schemas"]["CalendarEventComment"][];
                    };
                };
            };
        };
    };
    CalendarEventCommentCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "I will be there!!"
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the calendar event comment
                     */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEventComment: components["schemas"]["CalendarEventComment"];
                    };
                };
            };
        };
    };
    CalendarEventCommentRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example 1 */
                calendarEventCommentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEventComment: components["schemas"]["CalendarEventComment"];
                    };
                };
            };
        };
    };
    CalendarEventCommentDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example 1 */
                calendarEventCommentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventCommentUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example 1 */
                calendarEventCommentId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "I will be there!!"
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the calendar event comment
                     */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        calendarEventComment: components["schemas"]["CalendarEventComment"];
                    };
                };
            };
        };
    };
    CalendarEventReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventReactionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventCommentReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example 1 */
                calendarEventCommentId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventCommentReactionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                calendarEventId: number;
                /** @example 1 */
                calendarEventCommentId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocCommentReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        docComments: components["schemas"]["DocComment"][];
                    };
                };
            };
        };
    };
    DocCommentCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "Wow, cool document!!!"
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the doc comment
                     */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        docComment: components["schemas"]["DocComment"];
                    };
                };
            };
        };
    };
    DocCommentRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
                /** @example 1 */
                docCommentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        docComment: components["schemas"]["DocComment"];
                    };
                };
            };
        };
    };
    DocCommentDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
                /** @example 1 */
                docCommentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocCommentUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
                /** @example 1 */
                docCommentId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "Wow, cool document!!!"
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the doc comment
                     */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        docComment: components["schemas"]["DocComment"];
                    };
                };
            };
        };
    };
    DocReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocReactionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocCommentReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
                /** @example 1 */
                docCommentId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DocCommentReactionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                docId: number;
                /** @example 1 */
                docCommentId: number;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventSeriesDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                calendarEventSeriesId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Calendar event ID
                     * @description Control the deletion of the series from the `calendarEventId` forward. If not defined, it will delete all events
                     */
                    calendarEventId?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CalendarEventSeriesUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                calendarEventSeriesId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Surprise LAN party for my wife 🤫",
                 *       "description": "**Don't say anything to her!** She's gonna love playing Call of Duty all night",
                 *       "location": "My house!",
                 *       "url": "https://www.surprisepartygame.com/",
                 *       "color": 6118369,
                 *       "startsAt": "2022-06-16T00:00:00.000Z",
                 *       "duration": 60
                 *     } */
                "application/json": {
                    /**
                     * Name
                     * @description The name of the event
                     */
                    name?: string;
                    /**
                     * Description
                     * Format: long-form markdown
                     * @description The description of the event
                     */
                    description?: string;
                    /**
                     * Location
                     * @description The location of the event
                     */
                    location?: string;
                    /**
                     * Starts at
                     * Format: date-time
                     * @description The ISO 8601 timestamp that the event starts at
                     */
                    startsAt?: string;
                    /**
                     * Format: uri
                     * @description A URL to associate with the event
                     */
                    url?: string;
                    /** @description The integer value corresponds to the decimal RGB representation for the color. The color of the event when viewing in the calendar */
                    color?: number;
                    /**
                     * Is all day
                     * @description Does the event last all day? If passed with `duration`, `duration` will only be applied if it is an interval of minutes represented in days (e.g., `duration: 2880`)
                     */
                    isAllDay?: boolean;
                    /**
                     * RSVP disabled
                     * @description When disabled, users will not be able to RSVP to the event
                     */
                    rsvpDisabled?: boolean;
                    /** @description The number of RSVPs to allow before waitlisting RSVPs */
                    rsvpLimit?: number;
                    /** @description When `rsvpLimit` is set, users from the waitlist will be added as space becomes available in the event */
                    autofillWaitlist?: boolean;
                    /**
                     * Duration
                     * @description The duration of the event _**in minutes**_
                     */
                    duration?: number;
                    /** Is private */
                    isPrivate?: boolean;
                    /**
                     * Role IDs
                     * @description The role IDs to restrict the event to. Passing an empty array will clear the role IDs on the event
                     */
                    roleIds?: number[];
                    repeatInfo?: {
                        /**
                         * Repeat Type
                         * @description How often you want your event to repeat (important note: this will repeat for the next 365 days unless custom is defined)
                         * @default once
                         * @enum {string}
                         */
                        type: PathsChannelsChannelIdEvent_seriesCalendarEventSeriesIdPatchRequestBodyApplicationJsonRepeatInfoType;
                        /** @description Apply further clarification to your events. This **must** have `type` set to `custom` */
                        every?: {
                            /**
                             * Count
                             * @description How often between your interval the event should repeat. For example, 1 would be every interval, 2 would be every second occurrence of the interval
                             */
                            count: number;
                            /**
                             * Interval
                             * @description Coupled with `count`, this indicates the time range you are repeating your event over
                             * @enum {string}
                             */
                            interval: PathsChannelsChannelIdEvent_seriesCalendarEventSeriesIdPatchRequestBodyApplicationJsonRepeatInfoEveryInterval;
                        };
                        /**
                         * Occurrences
                         * @description Used to control the end date of the event repeat (only used when `type` is `custom`; if used with `endDate`, the earliest resultant date of the two will be used)
                         */
                        endsAfterOccurrences?: number;
                        /**
                         * Ends at
                         * Format: date-time
                         * @description The ISO 8601 timestamp that the event ends at. Used to control the end date of the event repeat (only used when `type` is `custom`; if used with `endsAfterOccurrences`, the earliest resultant date of the two will be used)
                         */
                        endDate?: string;
                        /** @description Used to control the day of the week that the event should repeat on (only used when `type` is `custom` and when `every.interval` is `week`) */
                        on?: PathsChannelsChannelIdEvent_seriesCalendarEventSeriesIdPatchRequestBodyApplicationJsonRepeatInfoOn[];
                    };
                    /**
                     * Calendar event ID
                     * @description Control the updating of the series from the `calendarEventId` forward. If not defined, it will edit all events
                     */
                    calendarEventId?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AnnouncementReadMany: {
        parameters: {
            query?: {
                /** @example 2021-06-15T20:15:00.706Z */
                before?: string;
                /** @example 25 */
                limit?: number;
            };
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        announcements: components["schemas"]["Announcement"][];
                    };
                };
            };
        };
    };
    AnnouncementCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "title": "Pizza Party, don't be tardy!",
                 *       "content": "Grab a slice, don't be slow, At our pizza party, it's the way to go! Toppings galore, cheesy delight, Come join us, it'll be out of sight!"
                 *     } */
                "application/json": {
                    /**
                     * Title
                     * @description The title of the announcement
                     */
                    title: string;
                    /**
                     * Content
                     * @description The content of the announcement
                     */
                    content: Record<string, never> | string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        announcement: components["schemas"]["Announcement"];
                    };
                };
            };
        };
    };
    AnnouncementRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        announcement: components["schemas"]["Announcement"];
                    };
                };
            };
        };
    };
    AnnouncementDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AnnouncementUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "title": "Pizza Party, don't be tardy!",
                 *       "content": "Grab a slice, don't be slow, At our pizza party, it's the way to go! Toppings galore, cheesy delight, Come join us, it'll be out of sight!"
                 *     } */
                "application/json": {
                    /**
                     * Title
                     * @description The title of the announcement
                     */
                    title?: string;
                    /**
                     * Content
                     * @description The content of the announcement
                     */
                    content?: Record<string, never> | string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        announcement: components["schemas"]["Announcement"];
                    };
                };
            };
        };
    };
    UserServerReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example Ann6LewA */
                userId: string | PathsUsersUserIdServersGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        servers: components["schemas"]["Server"][];
                    };
                };
            };
        };
    };
    AnnouncementReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
                /**
                 * @description Emote ID to apply
                 * @example 90000000
                 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AnnouncementReactionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
                /**
                 * @description Emote ID to apply
                 * @example 90000000
                 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AnnouncementCommentReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        announcementComments: components["schemas"]["AnnouncementComment"][];
                    };
                };
            };
        };
    };
    AnnouncementCommentCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "Now THAT is one awesome announcement!!!"
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the announcement comment
                     */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        announcementComment: components["schemas"]["AnnouncementComment"];
                    };
                };
            };
        };
    };
    AnnouncementCommentRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
                /** @example 1 */
                announcementCommentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        announcementComment: components["schemas"]["AnnouncementComment"];
                    };
                };
            };
        };
    };
    AnnouncementCommentDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
                /** @example 1 */
                announcementCommentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AnnouncementCommentUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
                /** @example 1 */
                announcementCommentId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "content": "Now THAT is one awesome announcement!!!"
                 *     } */
                "application/json": {
                    /**
                     * Content
                     * Format: long-form markdown
                     * @description The content of the announcement comment
                     */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        announcementComment: components["schemas"]["AnnouncementComment"];
                    };
                };
            };
        };
    };
    AnnouncementCommentReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Channel ID where the announcement comment exists
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
                /** @example 1 */
                announcementCommentId: number;
                /**
                 * @description Emote ID to apply
                 * @example 90000000
                 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AnnouncementCommentReactionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Channel ID where the announcement comment exists
                 * @example 00000000-0000-0000-0000-000000000000
                 */
                channelId: string;
                /** @example AAAAAAA */
                announcementId: string;
                /** @example 1 */
                announcementCommentId: number;
                /**
                 * @description Emote ID to apply
                 * @example 90000000
                 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserStatusCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example Ann6LewA */
                userId: string | PathsUsersUserIdStatusPutParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * Content
                     * Format: status markdown
                     * @description The content of the user status. The supported markdown for this content only includes reactions and plaintext for now
                     */
                    content?: string;
                    /** @description Emote ID to apply */
                    emoteId: number;
                    /**
                     * Expires at
                     * Format: date-time
                     * @description An ISO 8601 timestamp that will be used to indicate when an expiration occurs. Expiration usually will not occur exactly at this time. Bot logic should not expect a guarantee of timing as a result, but can expect that it'll happen very shortly afterwards
                     */
                    expiresAt?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserStatusDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example Ann6LewA */
                userId: string | PathsUsersUserIdStatusDeleteParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelMessageReactionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                messageId: string;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelMessageReactionDelete: {
        parameters: {
            query?: {
                /** @example Ann6LewA */
                userId?: string | PathsChannelsChannelIdMessagesMessageIdEmotesEmoteIdDeleteParametersQueryUserId;
            };
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                messageId: string;
                /** @example 90000000 */
                emoteId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelMessageReactionDeleteMany: {
        parameters: {
            query?: {
                /** @example 90000000 */
                emoteId?: number;
            };
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        groups: components["schemas"]["Group"][];
                    };
                };
            };
        };
    };
    GroupCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Fans of Turnip Boy Commits Tax Evasion",
                 *       "description": "Best game on steam!",
                 *       "isPublic": true
                 *     } */
                "application/json": {
                    /** @description The name of the group */
                    name: string;
                    /**
                     * Description
                     * @description The description associated with the group
                     */
                    description?: string;
                    /** @description The emote to associate with the group */
                    emoteId?: number;
                    /**
                     * Is public
                     * @description Is this group open for anyone to join?
                     * @default false
                     */
                    isPublic?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        group: components["schemas"]["Group"];
                    };
                };
            };
        };
    };
    GroupRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example ZVzBo83p */
                groupId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        group: components["schemas"]["Group"];
                    };
                };
            };
        };
    };
    GroupDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example ZVzBo83p */
                groupId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GroupUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example ZVzBo83p */
                groupId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Ex-Fans of Turnip Boy Commits Tax Evasion"
                 *     } */
                "application/json": {
                    /** @description The name of the group */
                    name?: string;
                    /**
                     * Description
                     * @description The description associated with the group
                     *     **Note** - this property cannot be modified on a home group
                     */
                    description?: string;
                    /** @description The emote to associate with the group */
                    emoteId?: number;
                    /**
                     * Is public
                     * @description Is this group open for anyone to join?
                     *     **Note** - this property cannot be modified on a home group
                     */
                    isPublic?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        group: components["schemas"]["Group"];
                    };
                };
            };
        };
    };
    RoleReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        roles: components["schemas"]["Role"][];
                    };
                };
            };
        };
    };
    RoleCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Members of Guilded",
                 *       "permissions": [
                 *         "CanManageChats"
                 *       ],
                 *       "colors": [
                 *         22051,
                 *         0
                 *       ],
                 *       "isMentionable": true
                 *     } */
                "application/json": {
                    /**
                     * Role name
                     * @description The role's name
                     */
                    name: string;
                    /**
                     * Display Separately
                     * @description If set, the role will be displayed separately in the channel member list
                     * @default false
                     */
                    isDisplayedSeparately?: boolean;
                    /**
                     * Self Assignable
                     * @description If set, this roll will be self assigned
                     * @default false
                     */
                    isSelfAssignable?: boolean;
                    /**
                     * Mentionable
                     * @description If set, this role can be mentioned
                     * @default false
                     */
                    isMentionable?: boolean;
                    /** @description Permissions must be a collection of valid permissions as defined in the [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) section */
                    permissions: string[];
                    /** @description An array of integer values corresponding to the decimal RGB representation for a color. The first color is solid, and a second color indicates a gradient */
                    colors?: number[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        role: components["schemas"]["Role"];
                    };
                };
            };
        };
    };
    RoleRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        role: components["schemas"]["Role"];
                    };
                };
            };
        };
    };
    RoleDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        role: components["schemas"]["Role"];
                    };
                };
            };
        };
    };
    RoleUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "colors": [
                 *         22051
                 *       ]
                 *     } */
                "application/json": {
                    /**
                     * Role name
                     * @description The role's name
                     */
                    name?: string;
                    /**
                     * Display Separately
                     * @description If set, the role will be displayed separately in the channel member list
                     */
                    isDisplayedSeparately?: boolean;
                    /**
                     * Self Assignable
                     * @description If set, this roll will be self assigned
                     */
                    isSelfAssignable?: boolean;
                    /**
                     * Mentionable
                     * @description If set, this role can be mentioned
                     */
                    isMentionable?: boolean;
                    /** @description Permissions must be a collection of valid permissions as defined in the [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) section */
                    permissions?: string[];
                    /**
                     * Priority
                     * @description The priority the role will be in relation to other roles in the server. The higher the value, the more precedence the role has over lower priority roles, and the higher up it will be displayed in the UI. Values can be zero or negative!
                     */
                    priority?: number;
                    /** @description An array of integer values corresponding to the decimal RGB representation for a color. The first color is solid, and a second color indicates a gradient */
                    colors?: number[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        role: components["schemas"]["Role"];
                    };
                };
            };
        };
    };
    RolePermissionUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanCreateEvents": false,
                 *         "CanReadEvents": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true` or `false` values. */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        role: components["schemas"]["Role"];
                    };
                };
            };
        };
    };
    ServerSubscriptionTierRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example Gold */
                serverSubscriptionTierType: PathsServersServerIdSubscriptionsTiersServerSubscriptionTierTypeGetParametersPathServerSubscriptionTierType;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        serverSubscriptionTier: components["schemas"]["ServerSubscriptionTier"];
                    };
                };
            };
        };
    };
    ServerSubscriptionTierReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        serverSubscriptionTiers: components["schemas"]["ServerSubscriptionTier"][];
                    };
                };
            };
        };
    };
    ServerMemberPermissionsRead: {
        parameters: {
            query?: {
                /** @description A queryString array of `ids[]` representing [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) */
                ids?: PathsServersServerIdMembersUserIdPermissionsGetParametersQueryIds[];
                channelId?: string;
                categoryId?: number;
            };
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdMembersUserIdPermissionsGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A list of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) the User has in the success case */
                        permissions: string[];
                    };
                };
            };
        };
    };
    ChannelArchiveCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelArchiveDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CategoryCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Social",
                 *       "groupId": "ZVzBo83p"
                 *     } */
                "application/json": {
                    /** @description Name of the category */
                    name: string;
                    /**
                     * Group ID
                     * @description The ID of the group. If not provided, the category will be created in the "Server home" group from `serverId`.
                     */
                    groupId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        category: components["schemas"]["Category"];
                    };
                };
            };
        };
    };
    CategoryRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        category: components["schemas"]["Category"];
                    };
                };
            };
        };
    };
    CategoryDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        category: components["schemas"]["Category"];
                    };
                };
            };
        };
    };
    CategoryUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Social Groups"
                 *     } */
                "application/json": {
                    /** @description Name of the category */
                    name?: string;
                    /**
                     * Priority
                     * @description The priority of the category will determine its position relative to other categories in the group. The higher the value, the higher up it will be displayed in the UI. Returned values can be null, in which case sorting will be done by `createdAt` in descending order. Due to legacy issues, sending a null value is not possible
                     */
                    priority?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        category: components["schemas"]["Category"];
                    };
                };
            };
        };
    };
    ChannelMessagePinCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelMessagePinDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelRolePermissionRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelRolePermission: components["schemas"]["ChannelRolePermission"];
                    };
                };
            };
        };
    };
    ChannelRolePermissionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanUpdateServer": true,
                 *         "CanReadChats": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true`, `false` or null values. Permission list can only contain relevant permissions for the channel type */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelRolePermission: components["schemas"]["ChannelRolePermission"];
                    };
                };
            };
        };
    };
    ChannelRolePermissionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelRolePermissionUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanUpdateServer": true,
                 *         "CanReadChats": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true`, `false` or null values. Permission list can only contain relevant permissions for the channel type */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelRolePermission: components["schemas"]["ChannelRolePermission"];
                    };
                };
            };
        };
    };
    ChannelRolePermissionReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelRolePermissions: components["schemas"]["ChannelRolePermission"][];
                    };
                };
            };
        };
    };
    ChannelUserPermissionRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdChannelsChannelIdPermissionsUsersUserIdGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelUserPermission: components["schemas"]["ChannelUserPermission"];
                    };
                };
            };
        };
    };
    ChannelUserPermissionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdChannelsChannelIdPermissionsUsersUserIdPostParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanUpdateServer": true,
                 *         "CanReadChats": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true`, `false` or null values. Permission list can only contain relevant permissions for the channel type */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelUserPermission: components["schemas"]["ChannelUserPermission"];
                    };
                };
            };
        };
    };
    ChannelUserPermissionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdChannelsChannelIdPermissionsUsersUserIdDeleteParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelUserPermissionUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdChannelsChannelIdPermissionsUsersUserIdPatchParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanUpdateServer": true,
                 *         "CanReadChats": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true`, `false` or null values. Permission list can only contain relevant permissions for the channel type */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelUserPermission: components["schemas"]["ChannelUserPermission"];
                    };
                };
            };
        };
    };
    ChannelUserPermissionReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 00000000-0000-0000-0000-000000000000 */
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelUserPermissions: components["schemas"]["ChannelUserPermission"][];
                    };
                };
            };
        };
    };
    ChannelCategoryUserPermissionRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdCategoriesCategoryIdPermissionsUsersUserIdGetParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelCategoryUserPermission: components["schemas"]["ChannelCategoryUserPermission"];
                    };
                };
            };
        };
    };
    ChannelCategoryUserPermissionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdCategoriesCategoryIdPermissionsUsersUserIdPostParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanUpdateServer": true,
                 *         "CanReadChats": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true`, `false` or null values. Permission list can only contain relevant permissions for the channel type */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelCategoryUserPermission: components["schemas"]["ChannelCategoryUserPermission"];
                    };
                };
            };
        };
    };
    ChannelCategoryUserPermissionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdCategoriesCategoryIdPermissionsUsersUserIdDeleteParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelCategoryUserPermissionUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
                /** @example Ann6LewA */
                userId: string | PathsServersServerIdCategoriesCategoryIdPermissionsUsersUserIdPatchParametersPathUserId;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanUpdateServer": true,
                 *         "CanReadChats": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true`, `false` or null values. Permission list can only contain relevant permissions for the channel type */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelCategoryUserPermission: components["schemas"]["ChannelCategoryUserPermission"];
                    };
                };
            };
        };
    };
    ChannelCategoryUserPermissionReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelCategoryUserPermissions: components["schemas"]["ChannelCategoryUserPermission"][];
                    };
                };
            };
        };
    };
    ChannelCategoryRolePermissionRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelCategoryRolePermission: components["schemas"]["ChannelCategoryRolePermission"];
                    };
                };
            };
        };
    };
    ChannelCategoryRolePermissionCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanUpdateServer": true,
                 *         "CanReadChats": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true`, `false` or null values. Permission list can only contain relevant permissions for the channel type */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelCategoryRolePermission: components["schemas"]["ChannelCategoryRolePermission"];
                    };
                };
            };
        };
    };
    ChannelCategoryRolePermissionDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChannelCategoryRolePermissionUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
                /** @example 1 */
                roleId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "permissions": {
                 *         "CanUpdateServer": true,
                 *         "CanReadChats": true
                 *       }
                 *     } */
                "application/json": {
                    /** @description A JSON object of [Enums/Permissions](https://www.guilded.gg/docs/api/Permissions) with `true`, `false` or null values. Permission list can only contain relevant permissions for the channel type */
                    permissions: Record<string, never>;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelCategoryRolePermission: components["schemas"]["ChannelCategoryRolePermission"];
                    };
                };
            };
        };
    };
    ChannelCategoryRolePermissionReadMany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example wlVr3Ggl */
                serverId: string;
                /** @example 1 */
                categoryId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channelCategoryRolePermissions: components["schemas"]["ChannelCategoryRolePermission"][];
                    };
                };
            };
        };
    };
    UrlSignatureCreateMany: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description An array of guilded CDN based URLs to get a signature on. Each URL is valid for 5 minutes and limited to one request per day */
                    urls: string[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description An array of URLs with a valid signature that has a 5 minute expiration. Any item with a `retryAfter` indicates you are still within the rate limit for that particular `url` */
                        urlSignatures: components["schemas"]["UrlSignature"][];
                    };
                };
            };
        };
    };
}
export enum PathsChannelsChannelIdMessagesMessageIdPutResponses200ContentApplicationJsonMessageType {
    default = "default",
    system = "system"
}
type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export enum PathsGroupsGroupIdMembersUserIdPutParametersPathUserId {
    _me = "@me"
}
export enum PathsGroupsGroupIdMembersUserIdDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdXpPutParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdXpPostParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdXpPutRequestBodyApplicationJsonUserIds {
    _me = "@me"
}
export enum PathsServersServerIdXpPostRequestBodyApplicationJsonUserIds {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdRolesRoleIdPutParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdRolesRoleIdDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdRolesGetParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdSocialLinksSocialLinkTypeGetParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdSocialLinksSocialLinkTypeGetParametersPathSocialLinkType {
    twitch = "twitch",
    bnet = "bnet",
    psn = "psn",
    xbox = "xbox",
    steam = "steam",
    origin = "origin",
    youtube = "youtube",
    twitter = "twitter",
    facebook = "facebook",
    switch = "switch",
    patreon = "patreon",
    roblox = "roblox",
    epic = "epic"
}
export enum PathsServersServerIdMembersUserIdNicknamePutParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdNicknameDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsChannelsPostRequestBodyApplicationJsonType {
    announcements = "announcements",
    chat = "chat",
    calendar = "calendar",
    forums = "forums",
    media = "media",
    docs = "docs",
    voice = "voice",
    list = "list",
    scheduling = "scheduling",
    stream = "stream"
}
export enum PathsServersServerIdMembersUserIdGetParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdMembersUserIdDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdBansUserIdGetParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdBansUserIdPostParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdBansUserIdDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsChannelsChannelIdEventsPostRequestBodyApplicationJsonRepeatInfoType {
    once = "once",
    everyDay = "everyDay",
    everyWeek = "everyWeek",
    everyMonth = "everyMonth",
    custom = "custom"
}
export enum PathsChannelsChannelIdEventsPostRequestBodyApplicationJsonRepeatInfoEveryInterval {
    day = "day",
    month = "month",
    year = "year",
    week = "week"
}
export enum PathsChannelsChannelIdEventsPostRequestBodyApplicationJsonRepeatInfoOn {
    sunday = "sunday",
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wednesday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday"
}
export enum PathsChannelsChannelIdEventsCalendarEventIdRsvpsUserIdGetParametersPathUserId {
    _me = "@me"
}
export enum PathsChannelsChannelIdEventsCalendarEventIdRsvpsUserIdPutParametersPathUserId {
    _me = "@me"
}
export enum PathsChannelsChannelIdEventsCalendarEventIdRsvpsUserIdPutRequestBodyApplicationJsonStatus {
    going = "going",
    maybe = "maybe",
    declined = "declined",
    invited = "invited"
}
export enum PathsChannelsChannelIdEventsCalendarEventIdRsvpsUserIdDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsChannelsChannelIdEventsCalendarEventIdRsvpsPutRequestBodyApplicationJsonUserIds {
    _me = "@me"
}
export enum PathsChannelsChannelIdEventsCalendarEventIdRsvpsPutRequestBodyApplicationJsonStatus {
    going = "going",
    maybe = "maybe",
    declined = "declined",
    invited = "invited"
}
export enum PathsUsersUserIdGetParametersPathUserId {
    _me = "@me"
}
export enum PathsChannelsChannelIdEvent_seriesCalendarEventSeriesIdPatchRequestBodyApplicationJsonRepeatInfoType {
    once = "once",
    everyDay = "everyDay",
    everyWeek = "everyWeek",
    everyMonth = "everyMonth",
    custom = "custom"
}
export enum PathsChannelsChannelIdEvent_seriesCalendarEventSeriesIdPatchRequestBodyApplicationJsonRepeatInfoEveryInterval {
    day = "day",
    month = "month",
    year = "year",
    week = "week"
}
export enum PathsChannelsChannelIdEvent_seriesCalendarEventSeriesIdPatchRequestBodyApplicationJsonRepeatInfoOn {
    sunday = "sunday",
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wednesday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday"
}
export enum PathsUsersUserIdServersGetParametersPathUserId {
    _me = "@me"
}
export enum PathsUsersUserIdStatusPutParametersPathUserId {
    _me = "@me"
}
export enum PathsUsersUserIdStatusDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsChannelsChannelIdMessagesMessageIdEmotesEmoteIdDeleteParametersQueryUserId {
    _me = "@me"
}
export enum PathsServersServerIdSubscriptionsTiersServerSubscriptionTierTypeGetParametersPathServerSubscriptionTierType {
    Gold = "Gold",
    Silver = "Silver",
    Copper = "Copper"
}
export enum PathsServersServerIdMembersUserIdPermissionsGetParametersQueryIds {
    CanCreateTopics = "CanCreateTopics",
    CanCreateTopicReplies = "CanCreateTopicReplies",
    CanDeleteTopics = "CanDeleteTopics",
    CanStickyTopics = "CanStickyTopics",
    CanLockTopics = "CanLockTopics",
    CanManageEmotes = "CanManageEmotes",
    CanViewFormResponses = "CanViewFormResponses",
    CanUpdateListItems = "CanUpdateListItems",
    CanManageServerXp = "CanManageServerXp",
    CanCreateThreads = "CanCreateThreads",
    CanCreateThreadMessages = "CanCreateThreadMessages",
    CanManageThreads = "CanManageThreads",
    CanCreateAnnouncements = "CanCreateAnnouncements",
    CanUpdateServer = "CanUpdateServer",
    CanManageRoles = "CanManageRoles",
    CanInviteMembers = "CanInviteMembers",
    CanKickMembers = "CanKickMembers",
    CanManageGroups = "CanManageGroups",
    CanManageChannels = "CanManageChannels",
    CanManageWebhooks = "CanManageWebhooks",
    CanMentionEveryone = "CanMentionEveryone",
    CanModerateChannels = "CanModerateChannels",
    CanBypassSlowMode = "CanBypassSlowMode",
    CanReadApplications = "CanReadApplications",
    CanApproveApplications = "CanApproveApplications",
    CanEditApplicationForm = "CanEditApplicationForm",
    CanIndicateLfmInterest = "CanIndicateLfmInterest",
    CanModifyLfmStatus = "CanModifyLfmStatus",
    CanReadAnnouncements = "CanReadAnnouncements",
    CanManageAnnouncements = "CanManageAnnouncements",
    CanReadChats = "CanReadChats",
    CanCreateChats = "CanCreateChats",
    CanUploadChatMedia = "CanUploadChatMedia",
    CanCreatePrivateMessages = "CanCreatePrivateMessages",
    CanManageChats = "CanManageChats",
    CanReadEvents = "CanReadEvents",
    CanCreateEvents = "CanCreateEvents",
    CanEditEvents = "CanEditEvents",
    CanDeleteEvents = "CanDeleteEvents",
    CanEditEventRsvps = "CanEditEventRsvps",
    CanReadForums = "CanReadForums",
    CanReadDocs = "CanReadDocs",
    CanCreateDocs = "CanCreateDocs",
    CanEditDocs = "CanEditDocs",
    CanDeleteDocs = "CanDeleteDocs",
    CanReadMedia = "CanReadMedia",
    CanAddMedia = "CanAddMedia",
    CanEditMedia = "CanEditMedia",
    CanDeleteMedia = "CanDeleteMedia",
    CanListenVoice = "CanListenVoice",
    CanAddVoice = "CanAddVoice",
    CanManageVoiceGroups = "CanManageVoiceGroups",
    CanAssignVoiceGroup = "CanAssignVoiceGroup",
    CanBroadcastVoice = "CanBroadcastVoice",
    CanDirectVoice = "CanDirectVoice",
    CanPrioritizeVoice = "CanPrioritizeVoice",
    CanUseVoiceActivity = "CanUseVoiceActivity",
    CanMuteMembers = "CanMuteMembers",
    CanDeafenMembers = "CanDeafenMembers",
    CanSendVoiceMessages = "CanSendVoiceMessages",
    CanCreateScrims = "CanCreateScrims",
    CanManageTournaments = "CanManageTournaments",
    CanRegisterForTournaments = "CanRegisterForTournaments",
    CanChangeNickname = "CanChangeNickname",
    CanManageNicknames = "CanManageNicknames",
    CanViewPollResponses = "CanViewPollResponses",
    CanReadListItems = "CanReadListItems",
    CanCreateListItems = "CanCreateListItems",
    CanDeleteListItems = "CanDeleteListItems",
    CanCompleteListItems = "CanCompleteListItems",
    CanReorderListItems = "CanReorderListItems",
    CanViewBracket = "CanViewBracket",
    CanReportScores = "CanReportScores",
    CanReadSchedules = "CanReadSchedules",
    CanCreateSchedule = "CanCreateSchedule",
    CanDeleteSchedule = "CanDeleteSchedule",
    CanManageBots = "CanManageBots",
    CanReadStreams = "CanReadStreams",
    CanJoinStreamVoice = "CanJoinStreamVoice",
    CanCreateStreams = "CanCreateStreams",
    CanSendStreamMessages = "CanSendStreamMessages",
    CanAddStreamVoice = "CanAddStreamVoice",
    CanUseVoiceActivityInStream = "CanUseVoiceActivityInStream",
    CanReceiveAllSocketEvents = "CanReceiveAllSocketEvents"
}
export enum PathsServersServerIdMembersUserIdPermissionsGetParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdChannelsChannelIdPermissionsUsersUserIdGetParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdChannelsChannelIdPermissionsUsersUserIdPostParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdChannelsChannelIdPermissionsUsersUserIdDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdChannelsChannelIdPermissionsUsersUserIdPatchParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdCategoriesCategoryIdPermissionsUsersUserIdGetParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdCategoriesCategoryIdPermissionsUsersUserIdPostParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdCategoriesCategoryIdPermissionsUsersUserIdDeleteParametersPathUserId {
    _me = "@me"
}
export enum PathsServersServerIdCategoriesCategoryIdPermissionsUsersUserIdPatchParametersPathUserId {
    _me = "@me"
}
export enum ChatMessageType {
    default = "default",
    system = "system"
}
export enum SocialLinkType {
    twitch = "twitch",
    bnet = "bnet",
    psn = "psn",
    xbox = "xbox",
    steam = "steam",
    origin = "origin",
    youtube = "youtube",
    twitter = "twitter",
    facebook = "facebook",
    switch = "switch",
    patreon = "patreon",
    roblox = "roblox",
    epic = "epic"
}
export enum UserType {
    bot = "bot",
    user = "user"
}
export enum UserSummaryType {
    bot = "bot",
    user = "user"
}
export enum ServerChannelType {
    announcements = "announcements",
    chat = "chat",
    calendar = "calendar",
    forums = "forums",
    media = "media",
    docs = "docs",
    voice = "voice",
    list = "list",
    scheduling = "scheduling",
    stream = "stream"
}
export enum ServerType {
    team = "team",
    organization = "organization",
    community = "community",
    clan = "clan",
    guild = "guild",
    friends = "friends",
    streaming = "streaming",
    other = "other"
}
export enum CalendarEventRsvpStatus {
    going = "going",
    maybe = "maybe",
    declined = "declined",
    invited = "invited",
    waitlisted = "waitlisted",
    not_responded = "not responded"
}
export enum ServerSubscriptionTierType {
    Gold = "Gold",
    Silver = "Silver",
    Copper = "Copper"
}
