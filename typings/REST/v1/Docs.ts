import type * as OpenAPI from "../../schemas/v1"

export type POSTDocBody = OpenAPI.operations["DocCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTDocBody {
//     /** The title of the doc (min length `1`) */
//     title: string,
//     /** The content of the doc */
//     content: string
// }

export type POSTDocResponse = OpenAPI.operations["DocCreate"]["responses"]["201"]["content"]["application/json"];
// export interface POSTDocResponse {
//     doc: APIDoc
// }


export type GETDocsQuery = OpenAPI.operations["DocReadMany"]["parameters"]["query"];
// export interface GETDocsQuery {
//     /** An ISO 8601 timestamp that will be used to filter out results for the current page */
//     before?: string,
//     /** The max size of the page (default `25`; min `1`; max `100`) */
//     limit?: number
// }

export type GETDocsResponse = OpenAPI.operations["DocReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETDocsResponse {
//     docs: Array<APIDoc>
// }


export type GETDocResponse = OpenAPI.operations["DocRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETDocResponse {
//     doc: APIDoc
// }


export type PUTDocBody = OpenAPI.operations["DocUpdate"]["requestBody"]["content"]["application/json"];
// export interface PUTDocBody {
//     /** The title of the doc (min length `1`) */
//     title: string,
//     /** The content of the doc */
//     content: string
// }

export type PUTDocResponse = OpenAPI.operations["DocUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PUTDocResponse {
//     doc: APIDoc
// }

export type POSTDocCommentBody = OpenAPI.operations["DocCommentCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTDocCommentBody {
//     /** The content of the doc comment (min length 1; max length 10000) */
//     content: string;
// }

export type POSTDocCommentResponse = OpenAPI.operations["DocCommentCreate"]["responses"]["201"]["content"]["application/json"];
// export interface POSTDocCommentResponse {
//     docComment: APIDocComment;
// }


// no body for GETDocComments
export type GETDocCommentsResponse = OpenAPI.operations["DocCommentReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETDocCommentsResponse {
//     docComments: Array<APIDocComment>;
// }


// no body for GETDocComment
export type GETDocCommentResponse = OpenAPI.operations["DocCommentRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETDocCommentResponse {
//     docComment: APIDocComment;
// }

export type PATCHDocCommentBody = OpenAPI.operations["DocCommentUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHDocCommentBody {
//     /** The content of the doc comment (min length 1; max length 10000) */
//     content: string;
// }

export type PATCHDocCommentResponse = OpenAPI.operations["DocCommentUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHDocCommentResponse {
//     docComment: APIDocComment;
// }

