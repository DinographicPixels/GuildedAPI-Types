import type { APICalendarEvent, APICalendarEventComment, APICalendarEventRSVP, APICalendarEventSeries } from "./Calendars";
import type { APIChannelRolePermission, APIChannelUserPermission, APIGuildChannel } from "./Channels";
import type { APIAnnouncement, APIAnnouncementComment, APIChatMessage } from "./Chat";
import type { APIDoc, APIDocComment } from "./Docs";
import type { APIEmote } from "./Emotes";
import type { APIForumTopic, APIForumTopicComment } from "./Forums";
import type { APIGuild, APIGuildCategory, APIGuildCategoryRolePermission, APIGuildCategoryUserPermission, APIGuildGroup, APIGuildRole } from "./Guilds";
import type { APIListItem } from "./ListItems";
import type { APIGuildMember, APIGuildMemberBan } from "./Members";
import type { APIAnnouncementCommentReaction, APIAnnouncementReaction, APICalendarEventCommentReaction, APICalendarEventReaction, APIChatMessageReaction, APIDocCommentReaction, APIDocReaction, APIForumTopicCommentReaction, APIForumTopicReaction } from "./Reactions";
import type { APISocialLink, APIUserStatus } from "./Users";
import type { APIWebhook } from "./Webhooks";

export interface GatewayEvent_BotServerMembershipCreated {
    server: APIGuild,
    /** The ID of the user who created this server membership */
    createdBy: string
}

export interface GatewayEvent_BotServerMembershipDeleted {
    server: APIGuild,
    /** The ID of the user who deleted this server membership */
    createdBy: string
}

export interface GatewayEvent_ChatMessageCreated {
    /** The ID of the server */
    serverId: string,
    message: APIChatMessage
}

export interface GatewayEvent_ChatMessageUpdated {
    /** The ID of the server */
    serverId: string,
    message: APIChatMessage
}

export interface GatewayEvent_ChatMessageDeleted {
    /** The ID of the server */
    serverId: string,
    message: {
        /** The ID of the message */
        id: string,
        /** The ID of the server */
        serverId?: string,
        /** The ID of the channel */
        channelId: string,
        /** The ISO 8601 timestamp that the message was deleted at */
        deletedAt: string,
        isPrivate?: boolean
    }
}

export interface GatewayEvent_AnnouncementCreated {
    /** The ID of the server */
    serverId: string;
    announcement: APIAnnouncement;
};

export interface GatewayEvent_AnnouncementUpdated {
    /** The ID of the server */
    serverId: string;
    announcement: APIAnnouncement;
};

export interface GatewayEvent_AnnouncementDeleted {
    /** The ID of the server */
    serverId: string;
    announcement: APIAnnouncement;
};

export interface GatewayEvent_AnnouncementCommentCreated {
    /** The ID of the server */
    serverId: string;
    announcementComment: APIAnnouncementComment;
};

export interface GatewayEvent_AnnouncementCommentUpdated {
    /** The ID of the server */
    serverId: string;
    announcementComment: APIAnnouncementComment;
};

export interface GatewayEvent_AnnouncementCommentDeleted {
    /** The ID of the server */
    serverId: string;
    announcementComment: APIAnnouncementComment;
};


export interface GatewayEvent_ServerMemberJoined {
    /** The ID of the server */
    serverId: string,
    member: APIGuildMember
    /** Count of members in this server after this join.
     *
     * Note: at higher member counts (1000+), this value is only updated periodically and should not be used in situations that require absolute accuracy
    */
    serverMemberCount: number;
}

export interface GatewayEvent_ServerMemberRemoved {
    /** The ID of the server */
    serverId: string,
    /** The ID of the user */
    userId: string
    /** If this member leaving was the result of a kick */
    isKick?: boolean,
    /** If this member leaving was the result of a ban */
    isBan?: boolean
}

export interface GatewayEvent_ServerMemberBanned {
    /** The ID of the server */
    serverId: string,
    serverMemberBan: APIGuildMemberBan
}

export interface GatewayEvent_ServerMemberUnbanned {
    /** The ID of the server */
    serverId: string,
    serverMemberBan: APIGuildMemberBan
}

export interface GatewayEvent_ServerMemberUpdated {
    /** The ID of the server */
    serverId: string,
    userInfo: {
        /** The ID of the user */
        id: string,
        /** The nickname that was just updated for the user */
        nickname?: string
    }
}

export interface GatewayEvent_ServerRolesUpdated {
    /** The ID of the server */
    serverId: string,
    memberRoleIds: Array<{
        /** The ID of the member that had roles updated */
        userId: string,
        /** The IDs of the roles that the member currently has after this operation (must have unique items `true`) */
        roleIds: Array<number>
    }>
}

export interface GatewayEvent_ServerChannelCreated {
    /** The ID of the server */
    serverId: string,
    channel: APIGuildChannel
}

export interface GatewayEvent_ServerChannelUpdated {
    /** The ID of the server */
    serverId: string,
    channel: APIGuildChannel
}

export interface GatewayEvent_ServerChannelDeleted {
    /** The ID of the server */
    serverId: string,
    channel: APIGuildChannel
}

export interface GatewayEvent_ServerMemberSocialLinkCreated {
    /** The ID of the server */
    serverId: string;
    socialLink: APISocialLink;
}

export interface GatewayEvent_ServerMemberSocialLinkUpdated {
    /** The ID of the server */
    serverId: string;
    socialLink: APISocialLink;
}

export interface GatewayEvent_ServerMemberSocialLinkDeleted {
    /** The ID of the server */
    serverId: string;
    socialLink: APISocialLink;
}

export interface GatewayEvent_ServerWebhookCreated {
    /** The ID of the server */
    serverId: string,
    webhook: APIWebhook
}

export interface GatewayEvent_ServerWebhookUpdated {
    /** The ID of the server */
    serverId: string,
    webhook: APIWebhook
}

export interface GatewayEvent_DocCreated {
    /** The ID of the server */
    serverId: string,
    doc: APIDoc
}

export interface GatewayEvent_DocUpdated {
    /** The ID of the server */
    serverId: string,
    doc: APIDoc
}

export interface GatewayEvent_DocDeleted {
    /** The ID of the server */
    serverId: string,
    doc: APIDoc
}

export interface GatewayEvent_DocReactionCreated {
    /** The ID of the server */
    serverId: string;
    reaction: APIDocReaction;
}

export interface GatewayEvent_DocReactionDeleted {
    /** The ID of the server */
    serverId: string;
    reaction: APIDocReaction;
}

export interface GatewayEvent_DocCommentCreated {
    /** The ID of the server */
    serverId: string;
    docComment: APIDocComment;
}

export interface GatewayEvent_DocCommentUpdated {
    /** The ID of the server */
    serverId: string;
    docComment: APIDocComment;
}

export interface GatewayEvent_DocCommentDeleted {
    /** The ID of the server */
    serverId: string;
    docComment: APIDocComment;
}

export interface GatewayEvent_DocCommentReactionCreated {
    /** The ID of the server */
    serverId: string;
    reaction: APIDocCommentReaction;
}

export interface GatewayEvent_DocCommentReactionDeleted {
    /** The ID of the server */
    serverId: string;
    reaction: APIDocCommentReaction;
}

export interface GatewayEvent_CalendarEventSeriesUpdated {
    /** The ID of the server */
    serverId: string;
    calendarEventSeries: APICalendarEventSeries;
    /** The calendar event updates started at */
    calendarEventId?: number;
}

export interface GatewayEvent_CalendarEventCreated {
    /** The ID of the server */
    serverId: string,
    calendarEvent: APICalendarEvent
}

export interface GatewayEvent_CalendarEventUpdated {
    /** The ID of the server */
    serverId: string,
    calendarEvent: APICalendarEvent
}

export interface GatewayEvent_CalendarEventDeleted {
    /** The ID of the server */
    serverId: string,
    calendarEvent: APICalendarEvent
}

export interface GatewayEvent_ForumTopicCreated {
    /** The ID of the server */
    serverId: string,
    forumTopic: APIForumTopic
}

export interface GatewayEvent_ForumTopicUpdated {
    /** The ID of the server */
    serverId: string,
    forumTopic: APIForumTopic
}

export interface GatewayEvent_ForumTopicDeleted {
    /** The ID of the server */
    serverId: string,
    forumTopic: APIForumTopic
}

export interface GatewayEvent_ForumTopicPinned {
    /** The ID of the server */
    serverId: string,
    forumTopic: APIForumTopic
}

export interface GatewayEvent_ForumTopicUnpinned {
    /** The ID of the server */
    serverId: string,
    forumTopic: APIForumTopic
}

export interface GatewayEvent_ForumTopicReactionCreated {
    /** The ID of the server */
    serverId?: string,
    reaction: APIForumTopicReaction;
}

export interface GatewayEvent_ForumTopicReactionDeleted {
    /** The ID of the server */
    serverId?: string,
    reaction: APIForumTopicReaction;
}

export interface GatewayEvent_CalendarEventCommentCreated {
    /** The ID of the server. */
    serverId: string;
    calendarEventComment: APICalendarEventComment;
}

export interface GatewayEvent_CalendarEventCommentUpdated {
    /** The ID of the server. */
    serverId: string;
    calendarEventComment: APICalendarEventComment;
}

export interface GatewayEvent_CalendarEventCommentDeleted {
    /** The ID of the server. */
    serverId: string;
    calendarEventComment: APICalendarEventComment;
}

export interface GatewayEvent_ForumTopicCommentReactionCreated {
    /** The ID of the server */
    serverId?: string;
    reaction: APIForumTopicCommentReaction;
}

export interface GatewayEvent_ForumTopicCommentReactionDeleted {
    /** The ID of the server */
    serverId?: string;
    reaction: APIForumTopicCommentReaction;
}

export interface GatewayEvent_ForumTopicLocked {
    /** The ID of the server */
    serverId?: string,
    forumTopic: APIForumTopic
}

export interface GatewayEvent_ForumTopicUnlocked {
    /** The ID of the server */
    serverId?: string,
    forumTopic: APIForumTopic
}

export interface GatewayEvent_ForumTopicCommentCreated {
    /** The ID of the server */
    serverId: string,
    forumTopicComment: APIForumTopicComment
}

export interface GatewayEvent_ForumTopicCommentUpdated {
    /** The ID of the server */
    serverId: string,
    forumTopicComment: APIForumTopicComment
}

export interface GatewayEvent_ForumTopicCommentDeleted {
    /** The ID of the server */
    serverId: string,
    forumTopicComment: APIForumTopicComment
}

export interface GatewayEvent_CalendarEventRsvpUpdated {
    /** The ID of the server */
    serverId?: string,
    calendarEventRsvp: APICalendarEventRSVP
}

export interface GatewayEvent_CalendarEventRsvpManyUpdated {
    /** The ID of the server */
    serverId?: string,
    calendarEventRsvps: Array<APICalendarEventRSVP>
}

export interface GatewayEvent_CalendarEventRsvpDeleted {
    /** The ID of the server */
    serverId?: string,
    calendarEventRsvp: APICalendarEventRSVP
}

export interface GatewayEvent_CalendarEventReactionCreated {
    serverId?: string;
    reaction: APICalendarEventReaction;
}

export interface GatewayEvent_CalendarEventReactionDeleted {
    serverId?: string;
    reaction: APICalendarEventReaction;
}

export interface GatewayEvent_CalendarEventCommentReactionCreated {
    serverId?: string;
    reaction: APICalendarEventCommentReaction;
}

export interface GatewayEvent_CalendarEventCommentReactionDeleted {
    serverId?: string;
    reaction: APICalendarEventCommentReaction;
}

export interface GatewayEvent_ListItemCreated {
    /** The ID of the server */
    serverId: string
    listItem: APIListItem
}

export interface GatewayEvent_ListItemUpdated {
    /** The ID of the server */
    serverId: string
    listItem: APIListItem
}

export interface GatewayEvent_ListItemDeleted {
    /** The ID of the server */
    serverId: string
    listItem: APIListItem
}

export interface GatewayEvent_ListItemCompleted {
    /** The ID of the server */
    serverId: string
    listItem: APIListItem
}

export interface GatewayEvent_ListItemUncompleted {
    /** The ID of the server */
    serverId: string
    listItem: APIListItem
}

export interface GatewayEvent_ChannelMessageReactionCreated {
    /** The ID of the server */
    serverId?: string
    reaction: APIChatMessageReaction;
}

export interface GatewayEvent_ChannelMessageReactionDeleted {
    /** The ID of the server */
    serverId?: string
    reaction: APIChatMessageReaction;
}

export interface GatewayEvent_ChannelMessageReactionManyDeleted {
    /** The ID of the server */
    serverId: string;
    /** The ID of the channel */
    channelId: string;
    /** The ID of the message */
    messageId: string;
    /** The ID of the user who deleted this reaction */
    deletedBy: string;
    /** The count of reactions that were removed */
    count: number;
    /** If present, only reactions of this emote were bulk removed from the message */
    emote?: APIEmote;
}

export interface GatewayEvent_AnnouncementReactionCreated {
    /** The ID of the server */
    serverId?: string
    reaction: APIAnnouncementReaction;
}

export interface GatewayEvent_AnnouncementReactionDeleted {
    /** The ID of the server */
    serverId?: string
    reaction: APIAnnouncementReaction;
}

export interface GatewayEvent_AnnouncementCommentReactionCreated {
    /** The ID of the server */
    serverId?: string
    reaction: APIAnnouncementCommentReaction;
}

export interface GatewayEvent_AnnouncementCommentReactionDeleted {
    /** The ID of the server */
    serverId?: string
    reaction: APIAnnouncementCommentReaction;
}

export interface GatewayEvent_GroupCreated {
    /** The ID of the server */
    serverId: string;
    group: APIGuildGroup;
}

export interface GatewayEvent_GroupUpdated {
    /** The ID of the server */
    serverId: string;
    group: APIGuildGroup;
}

export interface GatewayEvent_GroupDeleted {
    /** The ID of the server */
    serverId: string;
    group: APIGuildGroup;
}

export interface GatewayEvent_UserStatusCreated {
    /** An ISO 8601 timestamp that will be used to indicate when an expiration occurs. Expiration usually will not occur exactly at this time. Bot logic should not expect a guarantee of timing as a result, but can expect that it'll happen very shortly afterwards */
    expiresAt?: string;
    /** The ID of the user */
    userId: string;
    userStatus: APIUserStatus;
}

export interface GatewayEvent_UserStatusDeleted {
    /** The ID of the user */
    userId: string;
    userStatus: APIUserStatus;
}

export interface GatewayEvent_RoleCreated {
    /** The ID of the server */
    serverId: string;
    role: APIGuildRole;
}

export interface GatewayEvent_RoleUpdated {
    /** The ID of the server */
    serverId: string;
    role: APIGuildRole;
}

export interface GatewayEvent_RoleDeleted {
    /** The ID of the server */
    serverId: string;
    role: APIGuildRole;
}

export interface GatewayEvent_ChannelArchived {
    /** The ID of the server */
    serverId: string;
    channel: APIGuildChannel;
}

export interface GatewayEvent_ChannelRestored {
    /** The ID of the server */
    serverId: string;
    channel: APIGuildChannel;
}

export interface GatewayEvent_CategoryCreated {
    /** The ID of the server */
    serverId: string;
    category: APIGuildCategory;
}

export interface GatewayEvent_CategoryUpdated {
    /** The ID of the server */
    serverId: string;
    category: APIGuildCategory;
}

export interface GatewayEvent_CategoryDeleted {
    /** The ID of the server */
    serverId: string;
    category: APIGuildCategory;
}

export interface GatewayEvent_ChannelMessagePinned {
    /** The ID of the server */
    serverId: string;
    message: APIChatMessage;
}

export interface GatewayEvent_ChannelMessageUnpinned {
    /** The ID of the server */
    serverId: string;
    message: APIChatMessage;
}

export interface GatewayEvent_ChannelRolePermissionCreated {
    /** The ID of the server */
    serverId: string;
    channelRolePermission: APIChannelRolePermission;
}

export interface GatewayEvent_ChannelRolePermissionUpdated {
    /** The ID of the server */
    serverId: string;
    channelRolePermission: APIChannelRolePermission;
}

export interface GatewayEvent_ChannelRolePermissionDeleted {
    /** The ID of the server */
    serverId: string;
    channelRolePermission: APIChannelRolePermission;
}

export interface GatewayEvent_ChannelUserPermissionCreated {
    /** The ID of the server */
    serverId: string;
    channelUserPermission: APIChannelUserPermission;
}

export interface GatewayEvent_ChannelUserPermissionUpdated {
    /** The ID of the server */
    serverId: string;
    channelUserPermission: APIChannelUserPermission;
}

export interface GatewayEvent_ChannelUserPermissionDeleted {
    /** The ID of the server */
    serverId: string;
    channelUserPermission: APIChannelUserPermission;
}

export interface GatewayEvent_ChannelCategoryUserPermissionCreated {
    /** The ID of the server */
    serverId: string;
    channelCategoryUserPermission: APIGuildCategoryUserPermission;
}

export interface GatewayEvent_ChannelCategoryUserPermissionUpdated {
    /** The ID of the server */
    serverId: string;
    channelCategoryUserPermission: APIGuildCategoryUserPermission;
}

export interface GatewayEvent_ChannelCategoryUserPermissionDeleted {
    /** The ID of the server */
    serverId: string;
    channelCategoryUserPermission: APIGuildCategoryUserPermission;
}

export interface GatewayEvent_ChannelCategoryRolePermissionCreated {
    /** The ID of the server */
    serverId: string;
    channelCategoryRolePermission: APIGuildCategoryRolePermission;
}

export interface GatewayEvent_ChannelCategoryRolePermissionUpdated {
    /** The ID of the server */
    serverId: string;
    channelCategoryRolePermission: APIGuildCategoryRolePermission;
}

export interface GatewayEvent_ChannelCategoryRolePermissionDeleted {
    /** The ID of the server */
    serverId: string;
    channelCategoryRolePermission: APIGuildCategoryRolePermission;
}
