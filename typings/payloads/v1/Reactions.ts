import type * as OpenAPI from "../../schemas/v1"

export type APIChatMessageReaction = OpenAPI.components["schemas"]["ChatMessageReaction"];
// export interface APIChatMessageReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the message */
//     messageId: string;
// }

export type APIForumTopicReaction = OpenAPI.components["schemas"]["ForumTopicReaction"];
// export interface APIForumTopicReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the forum topic */
//     forumTopicId: number;
// }

export type APIForumTopicCommentReaction = OpenAPI.components["schemas"]["ForumTopicCommentReaction"];
// export interface APIForumTopicCommentReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the message */
//     forumTopicId: number;
//     /** The ID of the forum topic comment */
//     forumTopicCommentId: number;
// }

export type APIDocReaction = OpenAPI.components["schemas"]["DocReaction"];
// export interface APIDocReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the doc */
//     docId: number;
// }

export type APIDocCommentReaction = OpenAPI.components["schemas"]["DocCommentReaction"];
// export interface APIDocCommentReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the doc */
//     docId: number;
//     /** The ID of the doc comment */
//     docCommentId: number;
// }

export type APICalendarEventReaction = OpenAPI.components["schemas"]["CalendarEventReaction"];
// export interface APICalendarEventReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the calendar event */
//     calendarEventId: number;
// }

export type APICalendarEventCommentReaction = OpenAPI.components["schemas"]["CalendarEventCommentReaction"];
// export interface APICalendarEventCommentReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the calendar event */
//     calendarEventId: number;
//     /** The ID of the calendar event comment */
//     calendarEventCommentId: number;
// }

export type APIAnnouncementReaction = OpenAPI.components["schemas"]["AnnouncementReaction"];
// export interface APIAnnouncementReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the announcement */
//     announcementId: string;
// }

export type APIAnnouncementCommentReaction = OpenAPI.components["schemas"]["AnnouncementCommentReaction"];
// export interface APIAnnouncementCommentReaction {
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the user who added the reaction */
//     createdBy: string;
//     emote: APIEmote;
//     /** The ID of the announcement */
//     announcementId: string;
//     /** The ID of the announcement comment */
//     announcementCommentId: number;
// }
