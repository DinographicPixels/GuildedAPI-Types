import { APIGuild } from "../../payloads/v1/Guilds"
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