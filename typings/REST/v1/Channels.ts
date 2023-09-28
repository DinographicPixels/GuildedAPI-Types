import { APIChannelCategories, APIChannelCategoryRolePermission, APIChannelCategoryUserPermission, APIChannelRolePermission, APIChannelUserPermission, APIGuildChannel } from "../../payloads/v1/Channels";

export interface POSTChannelBody {
    /** The name of the channel (min length 1; max length 100) */
    name: string,
    /** The topic of the channel (min length 1; max length 512) */
    topic?: string,
    /** Whether the channel can be accessed from users who are not member of the server (default `false`) */
    isPublic?: boolean,
    /** The type of channel to create */
    type?: APIChannelCategories,
    /** The server that the channel should be created in. Optional if providing a groupId or categoryId */
    serverId?: string,
    /** The group that the channel should be created in. If not provided, channel will be created in the "Server home" group from serverId or in the group that corresponds to the categoryId parameter */
    groupId?: string,
    /** The category the channel should go in. If not provided, channel will be a top-level channel */
    categoryId: number
    /** Channel visibility */
    visibility?: string | null
}

export interface POSTChannelResponse {
    channel: APIGuildChannel
}


export interface GETChannelResponse {
    channel: APIGuildChannel
}


export interface PATCHChannelBody {
    /** The name of the channel or thread (min length 1; max length 100) */
    name?: string,
    /** The topic of the channel. Not applicable to threads (min length 1; max length 512) */
    topic?: string,
    /** Whether the channel can be accessed from users who are not member of the server. Not applicable to threads */
    isPublic?: boolean
    /** Channel visibility */
    visibility?: string | null
}

export interface PATCHChannelResponse {
    channel: APIGuildChannel
}

export interface POSTChannelRolePermissionBody {
    /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
    permissions: Array<string>
}

export interface POSTChannelRolePermissionResponse {
    channelRolePermissions: APIChannelRolePermission
}

export interface GETChannelRolePermissionResponse {
    channelRolePermissions: APIChannelRolePermission
}

export interface GETChannelRoleManyPermissionResponse {
    channelRolePermissions: Array<APIChannelRolePermission>
}

export interface PATCHChannelRolePermissionBody {
    /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
    permissions: Array<string>
}

export interface PATCHChannelRolePermissionResponse {
    channelRolePermissions: APIChannelRolePermission
}

export interface POSTChannelUserPermissionBody {
    /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
    permissions: Array<string>
}

export interface POSTChannelUserPermissionResponse {
    channelUserPermissions: APIChannelUserPermission
}

export interface GETChannelUserPermissionResponse {
    channelUserPermissions: APIChannelUserPermission
}

export interface GETChannelUserManyPermissionResponse {
    channelUserPermissions: Array<APIChannelUserPermission>
}

export interface PATCHChannelUserPermissionBody {
    /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
    permissions: Array<string>
}

export interface PATCHChannelUserPermissionResponse {
    channelUserPermissions: APIChannelUserPermission
}

export interface POSTChannelCategoryUserPermissionBody {
    /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
    permissions: Array<string>
}

export interface POSTChannelCategoryUserPermissionResponse {
    channelCategoryUserPermission: APIChannelCategoryUserPermission
}

export interface GETChannelCategoryUserPermissionResponse {
    channelCategoryUserPermission: APIChannelCategoryUserPermission
}

export interface GETChannelCategoryUserManyPermissionResponse {
    channelCategoryUserPermission: Array<APIChannelCategoryUserPermission>
}

export interface PATCHChannelCategoryUserPermissionBody {
    /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
    permissions: Array<string>
}

export interface PATCHChannelCategoryUserPermissionResponse {
    channelCategoryUserPermission: APIChannelCategoryUserPermission
}

export interface POSTChannelCategoryRolePermissionBody {
    /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
    permissions: Array<string>
}

export interface POSTChannelCategoryRolePermissionResponse {
    channelCategoryRolePermission: APIChannelCategoryRolePermission
}

export interface GETChannelCategoryRolePermissionResponse {
    channelCategoryRolePermission: APIChannelCategoryRolePermission
}

export interface GETChannelCategoryRoleManyPermissionResponse {
    channelCategoryRolePermission: Array<APIChannelCategoryRolePermission>
}

export interface PATCHChannelCategoryRolePermissionBody {
    /** A JSON object of Enums/Permissions with true, false or null values. Permission list can only contain relevant permissions for the channel type */
    permissions: Array<string>
}

export interface PATCHChannelCategoryRolePermissionResponse {
    channelCategoryRolePermission: APIChannelCategoryRolePermission
}