import type * as OpenAPI from "../../schemas/v1"

export type POSTForumTopicBody = OpenAPI.operations["ForumTopicCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTForumTopicBody {
//     /** The title of the forum topic (min length `1`; max length `500`) */
//     title: string,
//     /** The content of the forum topic (min length `1`; max length `4000`) */
//     content: string
// }

export type POSTForumTopicResponse = OpenAPI.operations["ForumTopicCreate"]["responses"]["201"]["content"]["application/json"];
// export interface POSTForumTopicResponse {
//     forumTopic: APIForumTopic
// }


export type GETForumTopicsQuery = OpenAPI.operations["ForumTopicReadMany"]["parameters"]["query"];
// export interface GETForumTopicsQuery {
//     /** An ISO 8601 timestamp that will be used to filter out results for the current page */
//     before?: string,
//     /** The max size of the page (default `25`; min `1`; max `100`) */
//     limit?: string
// }

export type GETForumTopicsResponse = OpenAPI.operations["ForumTopicReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETForumTopicsResponse {
//     forumTopics: Array<APIForumTopicSummary>
// }


export type GETForumTopicResponse = OpenAPI.operations["ForumTopicRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETForumTopicResponse {
//     forumTopic: APIForumTopic
// }


export type PATCHForumTopicBody = OpenAPI.operations["ForumTopicUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHForumTopicBody {
//     /** The title of the forum topic (min length `1`; max length `500`) */
//     title?: string,
//     /** The content of the forum topic */
//     content?: string
// }

export type PATCHForumTopicResponse = OpenAPI.operations["ForumTopicUpdate"]["responses"]["201"]["content"]["application/json"];
// export interface PATCHForumTopicResponse {
//     forumTopic: APIForumTopic
// }

export type POSTForumTopicCommentBody = OpenAPI.operations["ForumTopicCommentUpdate"]["requestBody"]["content"]["application/json"];
// export interface POSTForumTopicCommentBody {
//     /** The content of the forum topic */
//     content: string
// }

export type POSTForumTopicCommentResponse = OpenAPI.operations["ForumTopicCommentUpdate"]["responses"]["201"]["content"]["application/json"];
// export interface POSTForumTopicCommentResponse {
//     forumTopicComment: APIForumTopicComment
// }


export type GETForumTopicCommentsResponse = OpenAPI.operations["ForumTopicCommentReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETForumTopicCommentsResponse {
//     forumTopicComments: Array<APIForumTopicComment>
// }


export type GETForumTopicCommentResponse = OpenAPI.operations["ForumTopicCommentRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETForumTopicCommentResponse {
//     forumTopicComment: APIForumTopicComment
// }

export type PATCHForumTopicCommentBody = OpenAPI.operations["ForumTopicCommentUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHForumTopicCommentBody {
//     /** The content of the forum topic */
//     content?: string
// }

export type PATCHForumTopicCommentResponse = OpenAPI.operations["ForumTopicCommentUpdate"]["responses"]["201"]["content"]["application/json"];
// export interface PATCHForumTopicCommentResponse {
//     forumTopicComment: APIForumTopicComment
// }

