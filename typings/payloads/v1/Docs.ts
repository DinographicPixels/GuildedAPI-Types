import type * as OpenAPI from "../../schemas/v1"

export type APIDoc = OpenAPI.components["schemas"]["Doc"];
// export interface APIDoc {
//     /** The ID of the doc (min 1) */
//     id: number,
//     /** The ID of the server */
//     serverId: string,
//     /** The ID of the channel */
//     channelId: string,
//     /** The title of the doc (min length 1) */
//     title: string,
//     /** The content of the doc */
//     content: string,
//     /** Doc's mentions */
//     mentions?: APIMentions,
//     /** The ISO 8601 timestamp that the doc was created at */
//     createdAt: string,
//     /** The ID of the user who created this doc */
//     createdBy: string,
//     /** The ISO 8601 timestamp that the doc was updated at, if relevant */
//     updatedAt?: string,
//     /** The ID of the user who updated this doc */
//     updatedBy?: string
// }

export type APIDocComment = OpenAPI.components["schemas"]["DocComment"];
// export interface APIDocComment {
//     /** The ID of the doc comment */
//     id: number;
//     /** The content of the doc comment (min length 1; max length 10000) */
//     content: string;
//     /** The ISO 8601 timestamp that the doc comment was created at */
//     createdAt: string;
//     /** The ID of the user who created this doc comment (Note: If this event has createdByWebhookId present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA) */
//     createdBy: string;
//     /** The ISO 8601 timestamp that the doc comment was updated at, if relevant */
//     updatedAt?: string;
//     /** The ID of the channel */
//     channelId: string;
//     /** The ID of the doc (min 1) */
//     docId: number;
//     mentions?: APIMentions;
// }
