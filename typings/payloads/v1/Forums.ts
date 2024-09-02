import type * as OpenAPI from "../../schemas/v1"

export type APIForumTopicComment = OpenAPI.components["schemas"]["ForumTopicComment"];
// export interface APIForumTopicComment {
//     /** The ID of the forum topic comment */
//     id: number;
//     /** The content of the forum topic comment */
//     content: string;
//     /** The ISO 8601 timestamp that the forum topic comment was created at */
//     createdAt: string;
//     /** The ISO 8601 timestamp that the forum topic comment was updated at, if relevant */
//     updatedAt?: string;
//     /** The ID of the forum topic */
//     channelId: string;
//     /** The ID of the forum topic */
//     forumTopicId: number;
//     /** The ID of the user who created this forum topic comment. */
//     createdBy: string;
//     /** Mentions included in the topic comment. */
//     mentions?: APIMentions;
// }

export type APIForumTopic = OpenAPI.components["schemas"]["ForumTopic"];
// export interface APIForumTopic {
//     /** The ID of the forum topic */
//     id: number;
//     /** The ID of the server */
//     serverId: string;
//     /** The ID of the channel */
//     channelId: string;
//     /** The title of the forum topic (min length 1; max length 500) */
//     title: string;
//     /** The ISO 8601 timestamp that the forum topic was created at */
//     createdAt: string;
//     /** The ID of the user who created this forum topic. */
//     createdBy: string;
//     /** The ISO 8601 timestamp that the forum topic was updated at, if relevant */
//     updatedAt?: string;
//     /** The ISO 8601 timestamp that the forum topic was bumped at. This timestamp is updated whenever there is any activity on the posts within the forum topic. */
//     bumpedAt?: string;
//     /** (default `false`)  */
//     isPinned?: boolean;
//     /** (default `false`) */
//     isLocked?: boolean;
//     /** The content of the forum topic */
//     content: string;
//     /** Forum topic's mentions */
//     mentions?: APIMentions;
// }

export type APIForumTopicSummary = OpenAPI.components["schemas"]["ForumTopicSummary"];
// export interface APIForumTopicSummary {
//     /** The ID of the forum topic */
//     id: number;
//     /** The ID of the server */
//     serverId: string;
//     /** The ID of the channel */
//     channelId: string;
//     /** The title of the forum topic (min length 1; max length 500) */
//     title: string;
//     /** The ISO 8601 timestamp that the forum topic was created at */
//     createdAt: string;
//     /** The ID of the user who created this forum topic */
//     createdBy: string;
//     /** The ISO 8601 timestamp that the forum topic was updated at, if relevant */
//     updatedAt?: string,
//     /** The ISO 8601 timestamp that the forum topic was bumped at. This timestamp is updated whenever there is any activity on the posts within the forum topic. */
//     bumpedAt?: string;
//     /** (default `false`) */
//     isPinned?: boolean;
//     /** (default `false`) */
//     isLocked?: boolean;
// }
