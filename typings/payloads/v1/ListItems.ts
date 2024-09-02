import type * as OpenAPI from "../../schemas/v1"

export type APIListItem = OpenAPI.components["schemas"]["ListItem"];
// export interface APIListItem {
//     /** The ID of the list item */
//     id: string,
//     /** The ID of the server */
//     serverId: string,
//     /** The ID of the channel */
//     channelId: string,
//     /** The message of the list item */
//     message: string,
//     /** List item's mentions */
//     mentions?: APIMentions,
//     /** The ISO 8601 timestamp that the list item was created at */
//     createdAt: string,
//     /** The ID of the user who created this list item (Note: If this event has createdByWebhookId present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA) */
//     createdBy: string,
//     /** The ID of the webhook who created this list item, if it was created by a webhook */
//     createdByWebhookId?: string,
//     /** The ISO 8601 timestamp that the list item was updated at, if relevant */
//     updatedAt?: string,
//     /** The ID of the user who updated this list item */
//     updatedBy?: string,
//     /** The ID of the parent list item if this list item is nested */
//     parentListItemId?: string,
//     /** The ISO 8601 timestamp that the list item was completed at */
//     completedAt?: string,
//     /** The ID of the user who completed this list item */
//     completedBy?: string,
//     /** List item note */
//     note?: APIListItemNote
// }

export type APIListItemNote = OpenAPI.components["schemas"]["ListItem"]["note"];
// export interface APIListItemNote {
//     /** The ISO 8601 timestamp that the note was created at. If this field is populated, then there's a note associated with the list item */
//     createdAt: string,
//     /** The ID of the user who created this note */
//     createdBy: string,
//     /** The ISO 8601 timestamp that the note was updated at, if relevant */
//     updatedAt?: string,
//     /** The ID of the user who updated this note */
//     updatedBy?: string,
//     /** Note's mentions */
//     mentions?: APIMentions,
//     /** The note of the list item */
//     content: string
// }

export type APIListItemSummary = OpenAPI.components["schemas"]["ListItemSummary"];
// export interface APIListItemSummary {
//     /** The ID of the list item */
//     id: string,
//     /** The ID of the server */
//     serverId: string,
//     /** The ID of the channel */
//     channelId: string,
//     /** The message of the list item */
//     message: string,
//     /** List item's mentions */
//     mentions?: APIMentions,
//     /** The ISO 8601 timestamp that the list item was created at */
//     createdAt: string,
//     /** The ID of the user who created this list item (Note: If this event has createdByWebhookId present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA) */
//     createdBy: string,
//     /** The ID of the webhook who created this list item, if it was created by a webhook */
//     createdByWebhookId?: string,
//     /** The ISO 8601 timestamp that the list item was updated at, if relevant */
//     updatedAt?: string,
//     /** The ID of the user who updated this list item */
//     updatedBy?: string,
//     /** The ID of the parent list item if this list item is nested */
//     parentListItemId?: string,
//     /** The ISO 8601 timestamp that the list item was completed at */
//     completedAt?: string,
//     /** The ID of the user who completed this list item */
//     completedBy?: string,
//     /** List item note */
//     note?: APIListItemNoteSummary
// }

export type APIListItemNoteSummary = OpenAPI.components["schemas"]["ListItemSummary"]["note"];
// export interface APIListItemNoteSummary {
//     /** The ISO 8601 timestamp that the note was created at. If this field is populated, then there's a note associated with the list item */
//     createdAt: string,
//     /** The ID of the user who created this note */
//     createdBy: string,
//     /** The ISO 8601 timestamp that the note was updated at, if relevant */
//     updatedAt?: string,
//     /** The ID of the user who updated this note */
//     updatedBy?: string,
// }
