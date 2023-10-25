import { Permissions } from "../../gateway"
import { APIGuild, APIGuildGroup, APIGuildRole, APIGuildSubscription, APIGuildCategory } from "../../payloads/v1/Guilds"
import { APIGuildMemberBan } from "../../payloads/v1/Members"

export interface GETGuildResponse {
    server: APIGuild
}

export interface POSTGuildBanBody {
    /** The reason for the ban */
    reason?: string
}

export interface POSTGuildBanResponse {
    serverMemberBan: APIGuildMemberBan
}

export interface GETGuildBanResponse {
    serverMemberBan: APIGuildMemberBan
}

export interface GETGuildBansResponse {
    serverMemberBans: Array<APIGuildMemberBan>
}

export interface POSTGuildGroupBody {
    /* The name of the group (min length 1; max length 80) */
    name: string;
    /** The description associated with the group (max length 280) */
    description?: string;
    /** The emote to associate with the group */
    emoteId?: number;
    /** Is this group open for anyone to join? (default false) */
    isPublic?: boolean;
}

export interface POSTGuildGroupResponse {
    group: APIGuildGroup;
}

export interface GETGuildGroupsResponse {
    groups: Array<APIGuildGroup>;
}

export interface GETGuildGroupResponse {
    group: APIGuildGroup;
}

export interface PATCHGuildGroupBody {
    /** The name of the group (min length 1; max length 80) */
    name?: string;
    /** The description associated with the group, Note - this property cannot be modified on a home group (max length 280) */
    description?: string;
    /** The emote to associate with the group */
    emoteId?: number;
    /** Is this group open for anyone to join? Note - this property cannot be modified on a home group  */
    isPublic?: boolean;
}

export interface PATCHGuildGroupResponse {
    group: APIGuildGroup;
}

export interface GETGuildRoleResponse {
    role: APIGuildRole;
}

export interface GETGuildRolesResponse {
    roles: Array<APIGuildRole>;
}

export interface POSTGuildRoleBody {
    /** The role's name */
    name: string;
    /** If set, the role will be displayed separately in the channel member list (default false) */
    isDisplayedSeparately?: boolean;
    /** If set, this roll will be self assigned (default false) */
    isSelfAssignable?: boolean;
    /** If set, this role can be mentioned (default false) */
    isMentionable?: boolean;
    /** Permissions must be a collection of valid permissions as defined in the Enums/Permissions section of Guilded API documentation website */
    permissions: Array<Permissions>;
    /** An array of integer values corresponding to the decimal RGB representation for a color. The first color is solid, and a second color indicates a gradient (min items 0; max items 2) */
    colors: Array<number>;
}

export interface POSTGuildRoleResponse {
    role: APIGuildRole;
}

export interface PATCHGuildRoleBody {
    /** The role's name */
    name?: string;
    /** If set, the role will be displayed separately in the channel member list (default false) */
    isDisplayedSeparately?: boolean;
    /** If set, this roll will be self assigned (default false) */
    isSelfAssignable?: boolean;
    /** If set, this role can be mentioned (default false) */
    isMentionable?: boolean;
    /** Permissions must be a collection of valid permissions as defined in the Enums/Permissions section of Guilded API documentation website */
    permissions: Array<Permissions>;
    /** The priority the role will be in relation to other roles in the server. The higher the value, the more precedence the role has over lower priority roles, and the higher up it will be displayed in the UI. Values can be zero or negative (min `1`) */
    priority?: number;
    /** An array of integer values corresponding to the decimal RGB representation for a color. The first color is solid, and a second color indicates a gradient (min items 0; max items 2) */
    colors: Array<number>;
}

export interface PATCHGuildRoleResponse {
    role: APIGuildRole;
}

export interface PATCHGuildRoleUpdateBody {
    permissions: Partial<Record<Permissions, boolean>>;
}

export interface PATCHGuildRoleUpdateResponse {
    role: APIGuildRole;
}

export interface GETGuildSubscriptionResponse {
    serverSubscriptionTier: APIGuildSubscription;
}

export interface GETGuildSubscriptionsResponse {
    serverSubscriptionTiers: Array<APIGuildSubscription>;
}

export interface POSTCreateCategoryBody {
    /** Name of the category (min length 1; max length 100) */
    name: string;
    /** The ID of the group. If not provided, the category will be created in the "Server home" group from serverId. */
    groupId?: string;
}

export interface POSTCreateCategoryResponse {
    category: APIGuildCategory;
}

export interface GETReadCategoryResponse {
    category: APIGuildCategory;
}

export interface PATCHUpdateCategoryBody {
    /** Name of the category (min length 1; max length 100) */
    name: string;
}

export interface PATCHUpdateCategoryResponse {
    category: APIGuildCategory;
}

export interface DELETEDeleteCategoryResponse {
    category: APIGuildCategory;
}