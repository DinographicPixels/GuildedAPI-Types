import type * as OpenAPI from "../../schemas/v1"

export type POSTListItemBody = OpenAPI.operations["ListItemCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTListItemBody {
//     /** The message of the list item */
//     message: string,
//     note?: {
//         /** The note of the list item */
//         content: string
//     }
// }

export type POSTListItemResponse = OpenAPI.operations["ListItemCreate"]["responses"]["201"]["content"]["application/json"];
// export interface POSTListItemResponse {
//     listItem: APIListItem
// }


export type GETChannelListItemsResponse = OpenAPI.operations["ListItemReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelListItemsResponse {
//     listItems: Array<APIListItemSummary>
// }


export type GETListItemResponse = OpenAPI.operations["ListItemRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETListItemResponse {
//     listItem: APIListItem
// }



export type PATCHListItemBody = OpenAPI.operations["ListItemUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHListItemBody {
//     /** The message of the list item */
//     message?: string,
//     note?: {
//         /** The note of the list item */
//         content: string
//     }
// }

export type PATCHListItemResponse = OpenAPI.operations["ListItemUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHListItemResponse {
//     listItem: APIListItem
// }
