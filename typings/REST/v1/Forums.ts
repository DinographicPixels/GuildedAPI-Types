import { APIForumTopic, APIForumTopicComment, APIForumTopicSummary } from "../../payloads"

export interface POSTForumTopicBody {
    /** The title of the forum topic (min length `1`; max length `500`) */
    title: string,
    /** The content of the forum topic (min length `1`; max length `4000`) */
    content: string
}

export interface POSTForumTopicResponse {
    forumTopic: APIForumTopic
}


export interface GETForumTopicsQuery {
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    before?: string,
    /** The max size of the page (default `25`; min `1`; max `100`) */
    limit?: string
}

export interface GETForumTopicsResponse {
    forumTopics: APIForumTopicSummary
}


export interface GETForumTopicResponse {
    forumTopic: APIForumTopic
}



export interface PATCHForumTopicBody {
    /** The title of the forum topic (min length `1`; max length `500`) */
    title?: string,
    /** The content of the forum topic */
    content?: string
}

export interface PATCHForumTopicResponse {
    forumTopic: APIForumTopic
}



export interface GETForumTopicCommentResponse {
    forumTopicComments: APIForumTopicComment
}



