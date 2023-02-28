export const GatewayVersion = "1";
export const GatewayURL = `wss://www.guilded.gg/websocket/v${GatewayVersion}`;

export const GatewayEvents = {
        // Misc
        BotServerMembershipCreated: "BotServerMembershipCreated",
        BotServerMembershipDeleted: "BotServerMembershipDeleted",
        // Message
        ChatMessageCreated: "ChatMessageCreated",
        ChatMessageUpdated: "ChatMessageUpdated",
        ChatMessageDeleted: "ChatMessageDeleted",
        ChannelMessageReactionCreated: "ChannelMessageReactionCreated",
        ChannelMessageReactionDeleted: "ChannelMessageReactionDeleted",
        // Channel 
        ServerChannelCreated: "ServerChannelCreated",
        ServerChannelUpdated: "ServerChannelUpdated",
        ServerChannelDeleted: "ServerChannelDeleted",
        // Forum Topic
        ForumTopicCreated: "ForumTopicCreated",
        ForumTopicUpdated: "ForumTopicUpdated",
        ForumTopicDeleted: "ForumTopicDeleted",
        ForumTopicPinned: "ForumTopicPinned", 
        ForumTopicUnpinned: "ForumTopicUnpinned", 
        ForumTopicReactionCreated: "ForumTopicReactionCreated",
        ForumTopicReactionDeleted: "ForumTopicReactionDeleted",
        ForumTopicCommentCreated: "ForumTopicCommentCreated",
        ForumTopicCommentUpdated: "ForumTopicCommentUpdated",
        ForumTopicCommentDeleted: "ForumTopicCommentDeleted",
        ForumTopicCommentReactionCreated: "ForumTopicCommentReactionCreated",
        ForumTopicCommentReactionDeleted: "ForumTopicCommentReactionDeleted",
        ForumTopicLocked: "ForumTopicLocked",
        ForumTopicUnlocked: "ForumTopicUnlocked",
        // Guild
        ServerMemberBanned: "ServerMemberBanned",
        ServerMemberUnbanned: "ServerMemberUnbanned", 
        ServerMemberJoined: "ServerMemberJoined", 
        ServerMemberRemoved: "ServerMemberRemoved", 
        ServerMemberUpdated: "ServerMemberUpdated",
        ServerRolesUpdated: "ServerRolesUpdated",  
        ServerMemberSocialLinkCreated: "ServerMemberSocialLinkCreated",
        ServerMemberSocialLinkUpdated: "ServerMemberSocialLinkUpdated",
        ServerMemberSocialLinkDeleted: "ServerMemberSocialLinkDeleted",
        // Webhook
        ServerWebhookCreated: "ServerWebhookCreated",
        ServerWebhookUpdated: "ServerWebhookUpdated",
        // Doc
        DocCreated: "DocCreated",
        DocUpdated: "DocUpdated",
        DocDeleted: "DocDeleted",
        DocReactionCreated: "DocReactionCreated",
        DocReactionDeleted: "DocReactionDeleted",
        DocCommentCreated: "DocCommentCreated",
        DocCommentUpdated: "DocCommentUpdated",
        DocCommentDeleted: "DocCommentDeleted",
        DocCommentReactionCreated: "DocCommentReactionCreated",
        DocCommentReactionDeleted: "DocCommentReactionDeleted",
        // Calendar
        CalendarEventCreated: "CalendarEventCreated",
        CalendarEventUpdated: "CalendarEventUpdated",
        CalendarEventDeleted: "CalendarEventDeleted",
        CalendarEventRsvpUpdated: "CalendarEventRsvpUpdated",
        CalendarEventRsvpDeleted: "CalendarEventRsvpDeleted",
        CalendarEventRsvpManyUpdated: "CalendarEventRsvpManyUpdated", 
        CalendarEventReactionCreated: "CalendarEventReactionCreated",
        CalendarEventReactionDeleted: "CalendarEventReactionDeleted",
        CalendarEventCommentCreated: "CalendarEventCommentCreated",
        CalendarEventCommentUpdated: "CalendarEventCommentUpdated",
        CalendarEventCommentDeleted: "CalendarEventCommentDeleted",
        CalendarEventCommentReactionCreated: "CalendarEventCommentReactionCreated",
        CalendarEventCommentReactionDeleted: "CalendarEventCommentReactionDeleted",
        // List
        ListItemCreated: "ListItemCreated",
        ListItemUpdated: "ListItemUpdated",
        ListItemDeleted: "ListItemDeleted",
        ListItemCompleted: "ListItemCompleted",
        ListItemUncompleted: "ListItemUncompleted"
} as const;

export type GATEWAY_EVENTS = typeof GatewayEvents;

export interface GatewayStructure {
    /** OP Code */
    op: GatewayOPCodes;
    /** DATA */
    d?: object;
    /** Message ID used for replaying events after a disconnect */
    s?: string;
    /** Event name */
    t?: string;
};

export interface GatewayWelcome {
    /** OP Code */
    op: GatewayOPCodes.Welcome;
    /** DATA */
    d: GatewayWelcomeData;
};

export interface GatewayWelcomeData {
    lastMessageId: string;
    user: {
        id: string;
        botId: string;
        name: string;
        createdAt: string;
        createdBy: string;
    };
    heartbeatIntervalMs: number;
};

export interface GatewayResume {
    /** OP Code */
    op: GatewayOPCodes.Welcome;
    /** DATA */
    d: GatewayResumeData;
};

export interface GatewayResumeData {
    /** Message ID used for replaying events after a disconnect */
    s: string;
};

export enum GatewayOPCodes {
    Welcome = 1,
    Event = 0,
    Resume = 2,
    Failure = 8,
    Success = 9
};

// Endpoints (credits to TouchGuild)
export const CHANNELS = () => `/channels`;
export const CHANNEL = (channelID: string) => `/channels/${channelID}`;

export const GUILD = (guildID: string) => `/servers/${guildID}`;
export const USER = (userID: string) => `/users/${userID}`;

export const CHANNEL_MESSAGES = (channelID: string) => `/channels/${channelID}/messages`;
export const CHANNEL_MESSAGE = (channelID: string, messageID: string) => `/channels/${channelID}/messages/${messageID}`;
export const CHANNEL_MESSAGE_CONTENT_EMOTES = (channelID: string, messageID: string) => `/channels/${channelID}/content/${messageID}/emotes`;
export const CHANNEL_MESSAGE_CONTENT_EMOTE = (channelID: string, messageID: string, emoteID: number) => `/channels/${channelID}/content/${messageID}/emotes/${emoteID}`;

export const MEMBER_NICKNAME = (guildID: string, memberID: string) => `/servers/${guildID}/members/${memberID}/nickname`;

export const GUILD_MEMBER = (guildID: string, memberID: string) => `/servers/${guildID}/members/${memberID}`;
export const GUILD_MEMBER_XP = (guildID: string, memberID: string) => `/servers/${guildID}/members/${memberID}/xp`;
export const GUILD_MEMBERS = (guildID: string) => `/servers/${guildID}/members`;
export const GUILD_MEMBER_SOCIALS = (guildID: string, memberID: string, type: string) => `/servers/${guildID}/members/${memberID}/social-links/${type}`;

export const GUILD_GROUP_MEMBER = (groupID: string, memberID: string) => `/groups/${groupID}/members/${memberID}`;
export const GUILD_GROUP_MEMBERS = (groupID: string) => `/groups/${groupID}/members/`;
export const GUILD_GROUP = (groupID: string) => `/groups/${groupID}`;

export const GUILD_BAN = (guildID: string, memberID: string) => `/servers/${guildID}/bans/${memberID}`;
export const GUILD_BANS = (guildID: string) => `/servers/${guildID}/bans`;

export const GUILD_MEMBER_ROLE = (guildID: string, memberID: string, roleID: number) => `/servers/${guildID}/members/${memberID}/roles/${roleID}`;
export const GUILD_MEMBER_ROLE_XP = (guildID: string, roleID: number) => `/servers/${guildID}/roles/${roleID}/xp`;
export const GUILD_MEMBER_ROLES = (guildID: string, memberID: string) => `/servers/${guildID}/members/${memberID}/roles`;

export const FORUM_TOPICS = (channelID: string) => `/channels/${channelID}/topics`;
export const FORUM_TOPIC = (channelID: string, topicID: number) => `/channels/${channelID}/topics/${topicID}`;
export const FORUM_TOPIC_PIN = (channelID: string, topicID: number) => `/channels/${channelID}/topics/${topicID}/pin`;
export const FORUM_TOPIC_LOCK = (channelID: string, topicID: number) => `/channels/${channelID}/topics/${topicID}/lock`;
export const FORUM_TOPIC_EMOTE = (channelID: string, topicID: number, emoteID: number) => `/channels/${channelID}/topics/${topicID}/emotes/${emoteID}`;
export const FORUM_TOPIC_COMMENTS = (channelID: string, topicID: number) => `/channels/${channelID}/topics/${topicID}/comments`;
export const FORUM_TOPIC_COMMENT = (channelID: string, topicID: number, commentID: number) => `/channels/${channelID}/topics/${topicID}/comments/${commentID}`;
export const FORUM_TOPIC_COMMENT_EMOTES = (channelID: string, topicID: number, commentID: number) => `/channels/${channelID}/topics/${topicID}/comments/${commentID}/emotes`;
export const FORUM_TOPIC_COMMENT_EMOTE = (channelID: string, topicID: number, commentID: number, emoteID: number) => `/channels/${channelID}/topics/${topicID}/comments/${commentID}/emotes/${emoteID}`;

export const LIST_ITEMS = (channelID: string)=> `/channels/${channelID}/items`;
export const LIST_ITEM = (channelID: string, itemID: string)=> `/channels/${channelID}/items/${itemID}`;
export const LIST_ITEM_COMPLETE = (channelID: string, itemID: string)=> `/channels/${channelID}/items/${itemID}/complete`;

export const CHANNEL_DOCS = (channelID: string)=> `/channels/${channelID}/docs`;
export const CHANNEL_DOC = (channelID: string, docID: number)=> `/channels/${channelID}/docs/${docID}`;
export const CHANNEL_DOC_COMMENTS = (channelID: string, docID: number)=> `/channels/${channelID}/docs/${docID}/comments`;
export const CHANNEL_DOC_COMMENT = (channelID: string, docID: number, commentID: number)=> `/channels/${channelID}/docs/${docID}/comments/${commentID}`;

export const CHANNEL_EVENTS = (channelID: string)=> `/channels/${channelID}/events`;
export const CHANNEL_EVENT = (channelID: string, eventID: number)=> `/channels/${channelID}/events/${eventID}`;
export const CHANNEL_EVENT_EMOTES = (channelID: string, eventID: number)=> `/channels/${channelID}/events/${eventID}/emotes`;
export const CHANNEL_EVENT_EMOTE = (channelID: string, eventID: number, emoteID: number)=> `/channels/${channelID}/events/${eventID}/emotes/${emoteID}`;
export const CHANNEL_EVENT_RSVP = (channelID: string, eventID: number, memberID: string)=> `/channels/${channelID}/events/${eventID}/rsvps/${memberID}`;
export const CHANNEL_EVENT_RSVPS = (channelID: string, eventID: number) => `/channels/${channelID}/events/${eventID}/rsvps`;
export const CHANNEL_EVENT_COMMENTS = (channelID: string, eventID: number)=> `/channels/${channelID}/events/${eventID}/comments`;
export const CHANNEL_EVENT_COMMENT = (channelID: string, eventID: number, commentID: number)=> `/channels/${channelID}/events/${eventID}/comments/${commentID}`;
export const CHANNEL_EVENT_COMMENT_EMOTES = (channelID: string, eventID: number, commentID: number)=> `/channels/${channelID}/events/${eventID}/comments/${commentID}/emotes`;
export const CHANNEL_EVENT_COMMENT_EMOTE = (channelID: string, eventID: number, commentID: number, emoteID: number)=> `/channels/${channelID}/events/${eventID}/comments/${commentID}/emotes/${emoteID}`;
export const CHANNEL_EVENT_EVENT_SERIES = (channelID: string) => `/channels/${channelID}/event_series/`
export const CHANNEL_EVENT_EVENT_SERIES_ENTITY = (channelID: string, seriesID: string) => `/channels/${channelID}/event_series/${seriesID}`;


export const GUILD_WEBHOOKS = (guildID: string)=> `/servers/${guildID}/webhooks`;
export const GUILD_WEBHOOK = (guildID: string, webhookID: string)=> `/servers/${guildID}/webhooks/${webhookID}`;

