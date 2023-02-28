import { APIDoc, APIDocComment } from "../../payloads"

export interface POSTDocBody {
    /** The title of the doc (min length `1`) */
    title: string,
    /** The content of the doc */
    content: string
}

export interface POSTDocResponse {
    doc: APIDoc
}



export interface GETDocsQuery {
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    before?: string,
    /** The max size of the page (default `25`; min `1`; max `100`) */
    limit?: number
}

export interface GETDocsResponse {
    docs: Array<APIDoc>
}



export interface GETDocResponse {
    doc: APIDoc
}



export interface PUTDocBody {
    /** The title of the doc (min length `1`) */
    title: string,
    /** The content of the doc */
    content: string
}

export interface PUTDocResponse {
    doc: APIDoc
}


export interface POSTDocCommentBody {
    /** The content of the doc comment (min length 1; max length 10000) */
    content: string;
}

export interface POSTDocCommentResponse {
    docComment: APIDocComment;
}


// no body for GETDocComments

export interface GETDocCommentsResponse {
    docComments: Array<APIDocComment>;
}


// no body for GETDocComment

export interface GETDocCommentResponse {
    docComment: APIDocComment;
}


export interface PATCHDocCommentBody {
    /** The content of the doc comment (min length 1; max length 10000) */
    content: string;
}

export interface PATCHDocCommentResponse {
    docComment: APIDocComment;
}

