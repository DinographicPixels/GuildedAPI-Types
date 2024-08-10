import * as OpenAPI from "../../schemas/v1"

export const APIChannelCategories = OpenAPI.ServerChannelType;
export type APIChannelCategories = OpenAPI.ServerChannelType | `${OpenAPI.ServerChannelType}`;

export type APIGuildChannel = OpenAPI.components["schemas"]["ServerChannel"];

// export interface APIGuildChannel {
//     /** The ID of the channel */
//     id: string,
//     /** The type of channel. This will determine what routes to use for creating content in a channel. For example, if this "chat", then one must use the routes for creating channel messages */
//     type: APIChannelCategories,
//     /** The name of the channel (min length 1; max length 100) */
//     name: string,
//     /** The topic of the channel (min length 1; max length 512) */
//     topic?: string,
//     /** The ISO 8601 timestamp that the channel was created at */
//     createdAt: string,
//     /** The ID of the user who created this channel */
//     createdBy: string,
//     /** The ISO 8601 timestamp that the channel was updated at, if relevant */
//     updatedAt?: string,
//     /** The ID of the server */
//     serverId: string,
//     /** ID of the parent channel or parent thread, if present. Only relevant for server channels */
//     parentId?: string,
//     /** Only relevant for server channels */
//     categoryId?: number,
//     /** The ID of the group */
//     groupId: string,
//     /** Whether the channel can be accessed from users who are not member of the server (default `false`) */
//     isPublic?: boolean,
//     /** The ID of the user who archived this channel */
//     archivedBy?: string,
//     /** The ISO 8601 timestamp that the channel was archived at, if relevant */
//     archivedAt?: string,
//     /** The visibility of the channel. Only relevant for server channels */
//     visibility?: string
// }

export type APIChannelRolePermission = OpenAPI.components["schemas"]["ChannelRolePermission"];
// export interface APIChannelRolePermission {
//     permissions: Record<string, boolean>,
//     /** The ISO 8601 timestamp that the permission override was created at */
//     createdAt: Date,
//     /** The ISO 8601 timestamp that the permission override was updated at, if relevant */
//     updatedAt?: Date,
//     /** The ID of the role */
//     roleId: number,
//     /** The ID of the channel */
//     channelId: string,
// }

export type APIChannelUserPermission = OpenAPI.components["schemas"]["ChannelUserPermission"];
// export interface APIChannelUserPermission {
//     permissions: Record<string, boolean>
//     /** The ISO 8601 timestamp that the permission override was created at */
//     createdAt: Date,
//     /** The ISO 8601 timestamp that the permission override was updated at, if relevant */
//     updatedAt?: Date,
//     /** The ID of the user */
//     userId: string,
//     /** The ID of the channel */
//     channelId: string,
// }
