export const GatewayVersion = "1";
export const GatewayURL = `wss://www.guilded.gg/websocket/v${GatewayVersion}`;

export type GatewayEvents = 
        // Misc
            'BotServerMembershipCreated' |
        // Message
            'ChatMessageCreated' |
            'ChatMessageUpdated' |
            'ChatMessageDeleted' |
            'ChannelMessageReactionCreated' |
            'ChannelMessageReactionDeleted' |
        // Channel 
            'ServerChannelCreated' |
            'ServerChannelUpdated' |
            'ServerChannelDeleted' |
        // Forum Topic
            'ForumTopicCreated' |
            'ForumTopicUpdated' |
            'ForumTopicDeleted' |
            'ForumTopicPinned' | 
            'ForumTopicUnpinned' | 
            'ForumTopicReactionCreated' |
            'ForumTopicReactionDeleted' |
            'ForumTopicCommentCreated' |
            'ForumTopicCommentUpdated' |
            'ForumTopicCommentDeleted' |
        // Guild
            'ServerMemberBanned' |
            'ServerMemberUnbanned' | 
            'ServerMemberJoined' | 
            'ServerMemberRemoved' | 
            'ServerMemberUpdated' |
            "ServerRolesUpdated" | 
        // Webhook
            'ServerWebhookCreated' |
            'ServerWebhookUpdated' |
        // Doc
            'DocCreated' |
            'DocUpdated' |
            'DocDeleted' |
        // Calendar
            'CalendarEventCreated' |
            'CalendarEventUpdated' |
            'CalendarEventDeleted' |
            'CalendarEventRsvpUpdated' |
            'CalendarEventRsvpDeleted' |
            "CalendarEventRsvpManyUpdated" |
        // List
            'ListItemCreated' |
            'ListItemUpdated' |
            'ListItemDeleted' |
            'ListItemCompleted' |
            'ListItemUncompleted'

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