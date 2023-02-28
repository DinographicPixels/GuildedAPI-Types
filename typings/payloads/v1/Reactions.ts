import { APIEmote } from "./Emotes";

export interface APIChatMessageReaction {
    /** The ID of the channel */
    channelId: string;
    /** The ID of the user who added the reaction */
    createdBy: string;
    emote: APIEmote;
    /** The ID of the message */
    messageId: string;
}

export interface APIForumTopicReaction {
    /** The ID of the channel */
    channelId: string;
    /** The ID of the user who added the reaction */
    createdBy: string;
    emote: APIEmote;
    /** The ID of the forum topic */
    forumTopicId: number;
}

export interface APIForumTopicCommentReaction {
    /** The ID of the channel */
    channelId: string;
    /** The ID of the user who added the reaction */
    createdBy: string;
    emote: APIEmote;
    /** The ID of the message */
    forumTopicId: number;
    /** The ID of the forum topic comment */
    forumTopicCommentId: number;
}

export interface APIDocReaction {
    /** The ID of the channel */
    channelId: string;
    /** The ID of the user who added the reaction */
    createdBy: string;
    emote: APIEmote;
    /** The ID of the doc */
    docId: number;
}

export interface APIDocCommentReaction {
    /** The ID of the channel */
    channelId: string;
    /** The ID of the user who added the reaction */
    createdBy: string;
    emote: APIEmote;
    /** The ID of the doc */
    docId: number;
    /** The ID of the doc comment */
    docCommentId: number;
}

export interface APICalendarEventReaction {
    /** The ID of the channel */
    channelId: string;
    /** The ID of the user who added the reaction */
    createdBy: string;
    emote: APIEmote;
    /** The ID of the calendar event */
    calendarEventId: number;
}

export interface APICalendarEventCommentReaction {
    /** The ID of the channel */
    channelId: string;
    /** The ID of the user who added the reaction */
    createdBy: string;
    emote: APIEmote;
    /** The ID of the calendar event */
    calendarEventId: number;
    /** The ID of the calendar event comment */
    calendarEventCommentId: number;
}