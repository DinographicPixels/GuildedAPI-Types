import { APICalendarEvent, APICalendarEventRSVP } from "./Calendars";
import { APIGuildChannel } from "./Channels";
import { APIChatMessage } from "./Chat";
import { APIDoc } from "./Docs";
import { APIEmote } from "./Emotes";
import { APIForumTopic, APIForumTopicComment } from "./Forums";
import { APIGuild } from "./Guilds";
import { APIListItem } from "./ListItems";
import { APIGuildMember, APIGuildMemberBan } from "./Members";
import { APIWebhook } from "./Webhooks";

export interface GatewayEvent_BotTeamMembershipCreated {
    server: APIGuild,
    /** The ID of the user who created this server membership */
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

export interface GatewayEvent_TeamMemberJoined {
    /** The ID of the server */
    serverId: string,
    member: APIGuildMember
}

export interface GatewayEvent_TeamMemberRemoved {
    /** The ID of the server */
    serverId: string,
    /** The ID of the user */
    userId: string
    /** If this member leaving was the result of a kick */
    isKick?: boolean,
    /** If this member leaving was the result of a ban */
    isBan?: boolean
}

export interface GatewayEvent_TeamMemberBanned {
    /** The ID of the server */
    serverId: string,
    serverMemberBan: APIGuildMemberBan
}

export interface GatewayEvent_TeamMemberUnbanned {
    /** The ID of the server */
    serverId: string,
    serverMemberBan: APIGuildMemberBan
}

export interface GatewayEvent_TeamMemberUpdated {
    /** The ID of the server */
    serverId: string,
    userInfo: {
        /** The ID of the user */
        id: string,
        /** The nickname that was just updated for the user */
        nickname?: string
    }
}

export interface GatewayEvent_teamRolesUpdated {
    /** The ID of the server */
    serverId: string,
    memberRoleIds: Array<{
        /** The ID of the member that had roles updated */
        userId: string,
        /** The IDs of the roles that the member currently has after this operation (must have unique items `true`) */
        roleIds: Array<number>
    }>
}

export interface GatewayEvent_TeamChannelCreated {
    /** The ID of the server */
    serverId: string,
    channel: APIGuildChannel
}

export interface GatewayEvent_TeamChannelUpdated {
    /** The ID of the server */
    serverId: string,
    channel: APIGuildChannel
}

export interface GatewayEvent_TeamChannelDeleted {
    /** The ID of the server */
    serverId: string,
    channel: APIGuildChannel
}

export interface GatewayEvent_TeamWebhookCreated {
    /** The ID of the server */
    serverId: string,
    webhook: APIWebhook
}

export interface GatewayEvent_TeamWebhookUpdated {
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
    reaction: {
        /** The ID of the channel */
        channelId: string,
        /** The ID of the user who added the reaction */
        createdBy: string,
        emote: APIEmote,
        /** The ID of the forum topic */
        forumTopicId: number
    }
}

export interface GatewayEvent_ForumTopicReactionDeleted {
    /** The ID of the server */
    serverId?: string,
    reaction: {
        /** The ID of the channel */
        channelId: string,
        /** The ID of the user who added the reaction */
        createdBy: string,
        emote: APIEmote,
        /** The ID of the forum topic */
        forumTopicId: number
    }
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
    calendarEventRsvp: Array<APICalendarEventRSVP>
}

export interface GatewayEvent_CalendarEventRsvpDeleted {
    /** The ID of the server */
    serverId?: string,
    calendarEventRsvp: APICalendarEventRSVP
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

export interface GatewayEvent_ChannelMessageReactionAdded {
    /** The ID of the server */
    serverId?: string
    reaction: {
        /** The ID of the channel */
        channelId: string,
        /** The ID of the user who added the reaction */
        createdBy: string,
        /** Emote */
        emote: APIEmote,
        /** The ID of the message */
        messageId: string
    }    
}

export interface GatewayEvent_ChannelMessageReactionDeleted {
    /** The ID of the server */
    serverId?: string
    reaction: {
        /** The ID of the channel */
        channelId: string,
        /** The ID of the user who added the reaction */
        createdBy: string,
        /** Emote */
        emote: APIEmote,
        /** The ID of the message */
        messageId: string
    }    
}

