import { Permissions } from "../../gateway/v1";
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

export interface POSTBulkAwardXPBody {
    /** The amount of XP to award to each user */
    amount: number,
    /** The IDs of the users to award XP to */
    userIds: Array<string>;
}

export interface POSTBulkAwardXPResponse {
    /** The total amount of XP of each user */
    totalsByUserId: Record<string, number>;
}

export interface PUTBulkSetXPBody {
    /** The amount of XP to set to each user */
    amount: number,
    /** The IDs of the users to set XP to */
    userIds: Array<string>;
}

export interface PUTBulkSetXPResponse {
    /** The total amount of XP of each user */
    totalsByUserId: Record<string, number>;
}