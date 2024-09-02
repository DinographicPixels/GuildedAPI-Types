import type * as OpenAPI from "../../schemas/v1"

export type PUTMemberNicknameBody = OpenAPI.operations["MemberNicknameUpdate"]["requestBody"]["content"]["application/json"];
// export interface PUTMemberNicknameBody {
//     /** The nickname to assign to the member */
//     nickname: string
// }

export type PUTMemberNicknameResponse = OpenAPI.operations["MemberNicknameUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PUTMemberNicknameResponse {
//     /** The nickname that was assigned to the member */
//     nickname: string;
// }

export type GETGuildMemberResponse = OpenAPI.operations["ServerMemberRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildMemberResponse {
//     member: APIGuildMember;
// }

export type GETGuildMembersResponse = OpenAPI.operations["ServerMemberReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildMembersResponse {
//     members: Array<APIGuildMemberSummary>;
// }

export type GETGuildMemberPermissionResponse = OpenAPI.operations["ServerMemberPermissionsRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildMemberPermissionResponse {
//     permissions: Array<Permissions>;
// }

// // GUILD XP
// SPECIFIC
export type POSTAwardGuildMemberXPBody = OpenAPI.operations["ServerXpForUserCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTGuildMemberXPBody {
//     /** The amount of XP to award (min `-1000`; max `1000`) */
//     amount: number
// }

export type POSTAwardGuildMemberXPResponse = OpenAPI.operations["ServerXpForUserCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTGuildMemberXPResponse {
//     /** The total XP after this operation */
//     total: number
// }


export type PUTAwardGuildMemberXPBody = OpenAPI.operations["ServerXpForUserUpdate"]["requestBody"]["content"]["application/json"];
// export interface PUTGuildMemberXPBody {
//     /** The total XP to set on the user (min `-1000000000`; max `1000000000`) */
//     total: number
// }

export type PUTAwardGuildMemberXPResponse = OpenAPI.operations["ServerXpForUserUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PUTGuildMemberXPResponse {
//     /** The total XP after this operation */
//     total: number
// }

export type POSTAwardGuildRoleXPBody = OpenAPI.operations["ServerXpForRoleCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTGuildRoleXPBody {
//     /** The amount of XP to award (min `-1000`; max `1000`) */
//     amount: number
// }

// BULK
export type POSTBulkAwardXPBody = OpenAPI.operations["ServerXpForUserCreateMany"]["requestBody"]["content"]["application/json"];
// export interface POSTBulkAwardXPBody {
//     /** The amount of XP to award to each user */
//     amount: number,
//     /** The IDs of the users to award XP to */
//     userIds: Array<string>;
// }

export type POSTBulkAwardXPResponse = OpenAPI.operations["ServerXpForUserCreateMany"]["responses"]["200"]["content"]["application/json"];
// export interface POSTBulkAwardXPResponse {
//     /** The total amount of XP of each user */
//     totalsByUserId: Record<string, number>;
// }

export type PUTBulkSetXPBody = OpenAPI.operations["ServerXpForUserUpdateMany"]["requestBody"]["content"]["application/json"];
// export interface PUTBulkSetXPBody {
//     /** The amount of XP to set to each user */
//     amount: number,
//     /** The IDs of the users to set XP to */
//     userIds: Array<string>;
// }

export type PUTBulkSetXPResponse = OpenAPI.operations["ServerXpForUserUpdateMany"]["responses"]["200"]["content"]["application/json"];
// export interface PUTBulkSetXPResponse {
//     /** The total amount of XP of each user */
//     totalsByUserId: Record<string, number>;
// }
