import { APIListItem, APIListItemSummary } from "../../payloads"

export interface POSTListItemBody {
    /** The message of the list item */
    message: string,
    note?: {
        /** The note of the list item */
        content: string
    }
}

export interface POSTListItemResponse {
    listItem: APIListItem
}



export interface GETChannelListItemsResponse {
    listItems: Array<APIListItemSummary>
}



export interface GETListItemResponse {
    listItem: APIListItem
}



export interface PATCHListItemBody {
    /** The message of the list item */
    message?: string,
    note?: {
        /** The note of the list item */
        content: string
    }
}

export interface PATCHListItemResponse {
    listItem: APIListItem
}