import { Permissions } from "guildedapi-types.ts/v1";
import { APIGuildMember, APIGuildMemberSummary } from "../../payloads/v1/Members";

export interface PUTMemberNicknameBody {
    /** The nickname to assign to the member */
    nickname: string
}

export interface PUTMemberNicknameResponse {
    /** The nickname that was assigned to the member */
    nickname: string;
}

export interface GETGuildMemberResponse {
    member: APIGuildMember;
}

export interface GETGuildMembersResponse {
    members: Array<APIGuildMemberSummary>;
}

export interface GETGuildMemberPermissionResponse {
    permissions: Array<Permissions>;
}