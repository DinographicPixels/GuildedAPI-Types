import * as OpenAPI from "../../schemas/v1"

/** Different types of Guilds */
export const APIGuildCategories = OpenAPI.ServerType;
export type APIGuildCategories = OpenAPI.ServerType | `${OpenAPI.ServerType}`;
// export type APIGuildCategories = 'team'|'organization'|'community'|'clan'|'guild'|'friends'|'streaming'|'other';

export type APIGuild = OpenAPI.components["schemas"]["Server"];
// export interface APIGuild {
//     /** The ID of the server */
//     id: string,
//     /** The ID of the user who created this server */
//     ownerId: string,
//     /** The type of server designated from the server's settings page */
//     type?: APIGuildCategories
//     /** The name given to the server */
//     name: string,
//     /** The URL that the server can be accessible from. For example, a value of "Guilded-Official" means the server can be accessible from https://www.guilded.gg/Guilded-Official */
//     url?: string;
//     /** The description associated with the server */
//     about?: string,
//     /** The avatar image associated with the server */
//     avatar?: string,
//     /** The banner image associated with the server */
//     banner?: string,
//     /** The timezone associated with the server */
//     timezone?: string,
//     /** The verified status of the server */
//     isVerified?: boolean,
//     /** The channel ID of the default channel of the server. Useful for welcome messages */
//     defaultChannelId?: string,
//     /** The ISO 8601 timestamp that the server was created at */
//     createdAt: string
// }

export type APIGuildGroup = OpenAPI.components["schemas"]["Group"];
// export interface APIGuildGroup {
//     /** The ID of the group */
//     id: string;
//     /** The ID of the server */
//     serverId: string;
//     /** The name of the group (min length 1; max length 80)  */
//     name: string;
//     /** The description associated with the group (max length 280) */
//     description?: string;
//     /** The avatar image associated with the group */
//     avatar?: string;
//     /** If true, this is the server's home group */
//     isHome?: boolean;
//     /** The emote to associate with the group */
//     emoteId?: number;
//     /** Is this group open for anyone to join? (default false) */
//     isPublic?: boolean;
//     /** The ISO 8601 timestamp that the group was created at */
//     createdAt: string;
//     /** The ID of the user who created this group */
//     createdBy: string;
//     /** The ISO 8601 timestamp that the group was updated at, if relevant */
//     updatedAt?: string;
//     /** The ID of the user who updated this group */
//     updatedBy?: string;
//     /** The ISO 8601 timestamp that the group was archived at, if relevant */
//     archivedAt?: string;
//     /** The ID of the user who archived this group */
//     archivedBy?: string;
// }

export type APIGuildRole = OpenAPI.components["schemas"]["Role"];
// export interface APIGuildRole {
//     /** The ID of the role */
//     id: number;
//     /** The ID of the server */
//     serverId: string;
//     /** The ISO 8601 timestamp that the role was created at */
//     createdAt: string;
//     /** The ISO 8601 timestamp that the role was updated at, if relevant */
//     updatedAt?: string;
//     /** The role's name */
//     name: string;
//     /** If set, the role will be displayed separately in the channel member list (default false) */
//     isDisplayedSeparately?: boolean;
//     /** If set, this roll will be self assigned (default false) */
//     isSelfAssignable?: boolean;
//     /** If set, this role can be mentioned (default false) */
//     isMentionable?: boolean;
//     /** Permissions must be a collection of valid permissions as defined in the Enums/Permissions section */
//     permissions: Array<Permissions>;
//     /** An array of integer values corresponding to the decimal RGB representation for a color. The first color is solid, and a second color indicates a gradient (min items 0; max items 2) */
//     colors?: Array<number>;
//     /** The URL of the role icon */
//     icon?: string;
//     /** The priority the role will be in relation to other roles in the server. The higher the value, the more precedence the role has over lower priority roles, and the higher up it will be displayed in the UI. Values can be zero or negative */
//     priority: number;
//     /** The default role users are given when joining the server. Base roles are tied directly to the server and cannot be created or deleted (default false) */
//     isBase?: boolean;
//     /** The bot user ID this role has been defined for. Roles with this populated can only be deleted by kicking the bot */
//     botUserId?: string;
// }

export type APIGuildSubscription = OpenAPI.components["schemas"]["ServerSubscriptionTier"];
// export interface APIGuildSubscription {
//     type: string;
//     serverId: string;
//     description: string | null;
//     roleId: number;
//     cost: number;
//     createdAt: string;
// }

export type APIGuildCategory = OpenAPI.components["schemas"]["Category"];
// export interface APIGuildCategory {
//     id: number;
//     serverId: string;
//     groupId: string;
//     createdAt: Date;
//     updatedAt: Date | null;
//     name: string;
// }

export type APIGuildCategoryUserPermission = OpenAPI.components["schemas"]["ChannelCategoryUserPermission"];
// export interface APIGuildCategoryUserPermission {
//     id: number;
//     permissions: Record<string, boolean>;
//     /** The ISO 8601 timestamp that the permission override was created at */
//     createdAt: Date;
//     /** The ISO 8601 timestamp that the permission override was updated at, if relevant */
//     updatedAt?: Date;
//     /** The ID of the user */
//     userId: string;
//     /** The ID of the channel */
//     categoryId: number;
// }

export type APIGuildCategoryRolePermission = OpenAPI.components["schemas"]["ChannelCategoryRolePermission"];
// export interface APIGuildCategoryRolePermission {
//     id: number;
//     permissions: Record<string, boolean>;
//     /** The ISO 8601 timestamp that the permission override was created at */
//     createdAt: Date;
//     /** The ISO 8601 timestamp that the permission override was updated at, if relevant */
//     updatedAt?: Date;
//     /** The ID of the role */
//     roleId: number;
//     /** The ID of the channel */
//     categoryId: number;
// }
