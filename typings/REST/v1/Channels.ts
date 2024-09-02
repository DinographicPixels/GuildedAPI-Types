import type * as OpenAPI from "../../schemas/v1"

export type POSTChannelBody = OpenAPI.operations["ChannelCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTChannelBody {
//     /** The name of the channel (min length 1; max length 100) */
//     name: string,
//     /** The topic of the channel (min length 1; max length 512) */
//     topic?: string,
//     /** Whether the channel can be accessed from users who are not member of the server (default `false`) */
//     isPublic?: boolean,
//     /** The type of channel to create */
//     type?: APIChannelCategories,
//     /** The server that the channel should be created in. Optional if providing a groupId or categoryId */
//     serverId?: string,
//     /** The group that the channel should be created in. If not provided, channel will be created in the "Server home" group from serverId or in the group that corresponds to the categoryId parameter */
//     groupId?: string,
//     /** The category the channel should go in. If not provided, channel will be a top-level channel */
//     categoryId: number
//     /** Channel visibility */
//     visibility?: string | null
// }

export type POSTChannelResponse = OpenAPI.operations["ChannelCreate"]["responses"]["201"]["content"]["application/json"];
// export interface POSTChannelResponse {
//     channel: APIGuildChannel
// }

export type GETChannelResponse = OpenAPI.operations["ChannelRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelResponse {
//     channel: APIGuildChannel
// }

export type PATCHChannelBody = OpenAPI.operations["ChannelUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHChannelBody {
//     /** The name of the channel or thread (min length 1; max length 100) */
//     name?: string,
//     /** The topic of the channel. Not applicable to threads (min length 1; max length 512) */
//     topic?: string,
//     /** Whether the channel can be accessed from users who are not member of the server. Not applicable to threads */
//     isPublic?: boolean
//     /** Channel visibility */
//     visibility?: string | null
// }

export type PATCHChannelResponse = OpenAPI.operations["ChannelUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHChannelResponse {
//     channel: APIGuildChannel
// }

export type POSTChannelRolePermissionBody = OpenAPI.operations["ChannelRolePermissionCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTChannelRolePermissionBody {
//     /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
//     permissions: { [key: string]: boolean }
// }

export type POSTChannelRolePermissionResponse = OpenAPI.operations["ChannelRolePermissionCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTChannelRolePermissionResponse {
//     channelRolePermission: APIChannelRolePermission
// }

export type GETChannelRolePermissionResponse = OpenAPI.operations["ChannelRolePermissionRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelRolePermissionResponse {
//     channelRolePermission: APIChannelRolePermission
// }

export type GETChannelRoleManyPermissionResponse = OpenAPI.operations["ChannelRolePermissionReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelRoleManyPermissionResponse {
//     channelRolePermissions: Array<APIChannelRolePermission>
// }

export type PATCHChannelRolePermissionBody = OpenAPI.operations["ChannelRolePermissionUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHChannelRolePermissionBody {
//     /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
//     permissions: { [key: string]: boolean }
// }

export type PATCHChannelRolePermissionResponse = OpenAPI.operations["ChannelRolePermissionUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHChannelRolePermissionResponse {
//     channelRolePermission: APIChannelRolePermission
// }

export type POSTChannelUserPermissionBody = OpenAPI.operations["ChannelUserPermissionCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTChannelUserPermissionBody {
//     /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
//     permissions: { [key: string]: boolean }
// }

export type POSTChannelUserPermissionResponse = OpenAPI.operations["ChannelUserPermissionCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTChannelUserPermissionResponse {
//     channelUserPermission: APIChannelUserPermission
// }

export type GETChannelUserPermissionResponse = OpenAPI.operations["ChannelUserPermissionRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelUserPermissionResponse {
//     channelUserPermission: APIChannelUserPermission
// }

export type GETChannelUserManyPermissionResponse = OpenAPI.operations["ChannelUserPermissionReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelUserManyPermissionResponse {
//     channelUserPermissions: Array<APIChannelUserPermission>
// }

export type PATCHChannelUserPermissionBody = OpenAPI.operations["ChannelUserPermissionUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHChannelUserPermissionBody {
//     /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
//     permissions: { [key: string]: boolean }
// }

export type PATCHChannelUserPermissionResponse = OpenAPI.operations["ChannelUserPermissionUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHChannelUserPermissionResponse {
//     channelUserPermission: APIChannelUserPermission
// }

export type POSTChannelCategoryUserPermissionBody = OpenAPI.operations["ChannelCategoryUserPermissionCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTChannelCategoryUserPermissionBody {
//     /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
//     permissions: { [key: string]: boolean }
// }

export type POSTChannelCategoryUserPermissionResponse = OpenAPI.operations["ChannelCategoryUserPermissionCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTChannelCategoryUserPermissionResponse {
//     channelCategoryUserPermission: APIGuildCategoryUserPermission
// }

export type GETChannelCategoryUserPermissionResponse = OpenAPI.operations["ChannelCategoryUserPermissionRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelCategoryUserPermissionResponse {
//     channelCategoryUserPermission: APIGuildCategoryUserPermission
// }

export type GETChannelCategoryUserManyPermissionResponse = OpenAPI.operations["ChannelCategoryUserPermissionReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelCategoryUserManyPermissionResponse {
//     channelCategoryUserPermissions: Array<APIGuildCategoryUserPermission>
// }

export type PATCHChannelCategoryUserPermissionBody = OpenAPI.operations["ChannelCategoryUserPermissionUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHChannelCategoryUserPermissionBody {
//     /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
//     permissions: { [key: string]: boolean }
// }

export type PATCHChannelCategoryUserPermissionResponse = OpenAPI.operations["ChannelCategoryUserPermissionUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHChannelCategoryUserPermissionResponse {
//     channelCategoryUserPermission: APIGuildCategoryUserPermission
// }

export type POSTChannelCategoryRolePermissionBody = OpenAPI.operations["ChannelCategoryRolePermissionCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTChannelCategoryRolePermissionBody {
//     /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
//     permissions: { [key: string]: boolean }
// }

export type POSTChannelCategoryRolePermissionResponse = OpenAPI.operations["ChannelCategoryRolePermissionCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTChannelCategoryRolePermissionResponse {
//     channelCategoryRolePermission: APIGuildCategoryRolePermission
// }

export type GETChannelCategoryRolePermissionResponse = OpenAPI.operations["ChannelCategoryRolePermissionRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelCategoryRolePermissionResponse {
//     channelCategoryRolePermission: APIGuildCategoryRolePermission
// }

export type GETChannelCategoryRoleManyPermissionResponse = OpenAPI.operations["ChannelCategoryRolePermissionReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETChannelCategoryRoleManyPermissionResponse {
//     channelCategoryRolePermissions: Array<APIGuildCategoryRolePermission>
// }

export type PATCHChannelCategoryRolePermissionBody = OpenAPI.operations["ChannelCategoryRolePermissionUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHChannelCategoryRolePermissionBody {
//     /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
//     permissions: { [key: string]: boolean }
// }

export type PATCHChannelCategoryRolePermissionResponse = OpenAPI.operations["ChannelCategoryRolePermissionUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHChannelCategoryRolePermissionResponse {
//     channelCategoryRolePermission: APIGuildCategoryRolePermission
// }
