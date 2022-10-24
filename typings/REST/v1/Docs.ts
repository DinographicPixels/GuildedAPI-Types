import { APIDoc } from "../../payloads"

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



