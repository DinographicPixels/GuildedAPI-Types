import type * as OpenAPI from "../../schemas/v1"

export type GETGuildMemberSocialsResponse = OpenAPI.operations["MemberSocialLinkRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildMemberSocialsResponse {
//     socialLink: APISocialLink;
// }

export type GETUserResponse = OpenAPI.operations["UserRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETUserResponse {
//     user: APIUser;
// }

// no body, query GETUserServersResponse
export type GETUserServersResponse = OpenAPI.operations["UserServerReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETUserServersResponse {
//     servers: Array<APIGuild>;
// }

export type PUTUserStatusBody = OpenAPI.operations["UserStatusCreate"]["requestBody"]["content"]["application/json"];
// export interface PUTUserStatusBody {
//     /** The content of the user status. The supported markdown for this content only includes reactions and plaintext for now (max length 100)  */
//     content?: string;
//     /** Emote ID to apply */
//     emoteId: number;
//     /** An ISO 8601 timestamp that will be used to indicate when an expiration occurs. Expiration usually will not occur exactly at this time. Bot logic should not expect a guarantee of timing as a result, but can expect that it'll happen very shortly afterwards */
//     expiresAt?: string;
// }
