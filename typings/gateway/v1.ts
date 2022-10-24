export const GatewayVersion = "1";
export const GatewayURL = `wss://www.guilded.gg/websocket/v${GatewayVersion}`;

export type GatewayEvents = 
        // Message
            'ChatMessageCreated' |
            'ChatMessageUpdated' |
            'ChatMessageDeleted' |
            'ChannelMessageReactionCreated' |
            'ChannelMessageReactionDeleted' |
        // Channel 
            'TeamChannelCreated' |
            'TeamChannelUpdated' |
            'TeamChannelDeleted' |
        // Forum Topic
            'ForumTopicCreated' |
            'ForumTopicUpdated' |
            'ForumTopicDeleted' |
            'ForumTopicPinned' | 
            'ForumTopicUnpinned' | 
            'ForumTopicReactionCreated' |
            'ForumTopicReactionDeleted' |
        // Guild
            'TeamMemberBanned' |
            'TeamMemberUnbanned' | 
            'TeamMemberJoined' | 
            'TeamMemberRemoved' | 
            'TeamMemberUpdated' |
            "teamRolesUpdated" | 
        // Webhook
            'TeamWebhookCreated' |
            'TeamWebhookUpdated' |
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