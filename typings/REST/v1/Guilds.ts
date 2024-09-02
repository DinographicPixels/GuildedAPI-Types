import type * as OpenAPI from "../../schemas/v1"

export type GETGuildResponse = OpenAPI.operations["ServerRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildResponse {
//     server: APIGuild
// }

export type POSTGuildBanBody = NonNullable<OpenAPI.operations["ServerMemberBanCreate"]["requestBody"]>["content"]["application/json"];
// export interface POSTGuildBanBody {
//     /** The reason for the ban */
//     reason?: string
// }

export type POSTGuildBanResponse = OpenAPI.operations["ServerMemberBanCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTGuildBanResponse {
//     serverMemberBan: APIGuildMemberBan
// }

export type GETGuildBanResponse = OpenAPI.operations["ServerMemberBanRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildBanResponse {
//     serverMemberBan: APIGuildMemberBan
// }

export type GETGuildBansResponse = OpenAPI.operations["ServerMemberBanReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildBansResponse {
//     serverMemberBans: Array<APIGuildMemberBan>
// }

export type POSTGuildGroupBody = OpenAPI.operations["GroupCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTGuildGroupBody {
//     /* The name of the group (min length 1; max length 80) */
//     name: string;
//     /** The description associated with the group (max length 280) */
//     description?: string;
//     /** The emote to associate with the group */
//     emoteId?: number;
//     /** Is this group open for anyone to join? (default false) */
//     isPublic?: boolean;
// }

export type POSTGuildGroupResponse = OpenAPI.operations["GroupCreate"]["responses"]["201"]["content"]["application/json"];
// export interface POSTGuildGroupResponse {
//     group: APIGuildGroup;
// }

export type GETGuildGroupsResponse = OpenAPI.operations["GroupReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildGroupsResponse {
//     groups: Array<APIGuildGroup>;
// }

export type GETGuildGroupResponse = OpenAPI.operations["GroupRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildGroupResponse {
//     group: APIGuildGroup;
// }

export type PATCHGuildGroupBody = OpenAPI.operations["GroupUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHGuildGroupBody {
//     /** The name of the group (min length 1; max length 80) */
//     name?: string;
//     /** The description associated with the group, Note - this property cannot be modified on a home group (max length 280) */
//     description?: string;
//     /** The emote to associate with the group */
//     emoteId?: number;
//     /** Is this group open for anyone to join? Note - this property cannot be modified on a home group  */
//     isPublic?: boolean;
// }

export type PATCHGuildGroupResponse = OpenAPI.operations["GroupUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHGuildGroupResponse {
//     group: APIGuildGroup;
// }

export type GETGuildRoleResponse = OpenAPI.operations["RoleRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildRoleResponse {
//     role: APIGuildRole;
// }

export type GETGuildRolesResponse = OpenAPI.operations["RoleReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildRolesResponse {
//     roles: Array<APIGuildRole>;
// }

export type POSTGuildRoleBody = OpenAPI.operations["RoleCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTGuildRoleBody {
//     /** The role's name */
//     name: string;
//     /** If set, the role will be displayed separately in the channel member list (default false) */
//     isDisplayedSeparately?: boolean;
//     /** If set, this roll will be self assigned (default false) */
//     isSelfAssignable?: boolean;
//     /** If set, this role can be mentioned (default false) */
//     isMentionable?: boolean;
//     /** Permissions must be a collection of valid permissions as defined in the Enums/Permissions section of Guilded API documentation website */
//     permissions: Array<Permissions>;
//     /** An array of integer values corresponding to the decimal RGB representation for a color. The first color is solid, and a second color indicates a gradient (min items 0; max items 2) */
//     colors: Array<number>;
// }

export type POSTGuildRoleResponse = OpenAPI.operations["RoleCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTGuildRoleResponse {
//     role: APIGuildRole;
// }

export type PATCHGuildRoleBody = OpenAPI.operations["RoleUpdate"]["requestBody"]["content"]["application/json"];
// // export interface PATCHGuildRoleBody {
// //     /** The role's name */
// //     name?: string;
// //     /** If set, the role will be displayed separately in the channel member list (default false) */
// //     isDisplayedSeparately?: boolean;
// //     /** If set, this roll will be self assigned (default false) */
// //     isSelfAssignable?: boolean;
// //     /** If set, this role can be mentioned (default false) */
// //     isMentionable?: boolean;
// //     /** Permissions must be a collection of valid permissions as defined in the Enums/Permissions section of Guilded API documentation website */
// //     permissions: Array<Permissions>;
// //     /** The priority the role will be in relation to other roles in the server. The higher the value, the more precedence the role has over lower priority roles, and the higher up it will be displayed in the UI. Values can be zero or negative (min `1`) */
// //     priority?: number;
// //     /** An array of integer values corresponding to the decimal RGB representation for a color. The first color is solid, and a second color indicates a gradient (min items 0; max items 2) */
// //     colors: Array<number>;
// // }

export type PATCHGuildRoleResponse = OpenAPI.operations["RoleUpdate"]["responses"]["200"]["content"]["application/json"];
// // export interface PATCHGuildRoleResponse {
// //     role: APIGuildRole;
// // }

export type PATCHGuildRolePermissionUpdateBody = OpenAPI.operations["RolePermissionUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHGuildRolePermissionUpdateBody {
//     permissions: Partial<Record<Permissions, boolean>>;
// }

export type PATCHGuildRolePermissionUpdateResponse = OpenAPI.operations["RolePermissionUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHGuildRolePermissionUpdateResponse {
//     role: APIGuildRole;
// }

export type GETGuildSubscriptionResponse = OpenAPI.operations["ServerSubscriptionTierRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildSubscriptionResponse {
//     serverSubscriptionTier: APIGuildSubscription;
// }

export type GETGuildSubscriptionsResponse = OpenAPI.operations["ServerSubscriptionTierReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildSubscriptionsResponse {
//     serverSubscriptionTiers: Array<APIGuildSubscription>;
// }

export type POSTCreateCategoryBody = OpenAPI.operations["CategoryCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTCreateCategoryBody {
//     /** Name of the category (min length 1; max length 100) */
//     name: string;
//     /** The ID of the group. If not provided, the category will be created in the "Server home" group from serverId. */
//     groupId?: string;
// }

export type POSTCreateCategoryResponse = OpenAPI.operations["CategoryCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTCreateCategoryResponse {
//     category: APIGuildCategory;
// }

export type GETReadCategoryResponse = OpenAPI.operations["CategoryRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETReadCategoryResponse {
//     category: APIGuildCategory;
// }

export type PATCHUpdateCategoryBody = OpenAPI.operations["CategoryUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHUpdateCategoryBody {
//     /** Name of the category (min length 1; max length 100) */
//     name: string;
// }

export type PATCHUpdateCategoryResponse = OpenAPI.operations["CategoryUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHUpdateCategoryResponse {
//     category: APIGuildCategory;
// }

export type DELETEDeleteCategoryResponse = OpenAPI.operations["CategoryDelete"]["responses"]["200"]["content"]["application/json"];
// export interface DELETEDeleteCategoryResponse {
//     category: APIGuildCategory;
// }
