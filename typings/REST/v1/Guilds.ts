import { APIGuild, APIGuildGroup, APIGuildRole } from "../../payloads/v1/Guilds"
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
