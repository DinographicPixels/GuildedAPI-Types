export interface POSTGuildMemberXPBody {
    /** The amount of XP to award (min `-1000`; max `1000`) */
    amount: number
}

export interface POSTGuildMemberXPResponse {
    /** The total XP after this operation */
    total: number
}



export interface PUTGuildMemberXPBody {
    /** The total XP to set on the user (min `-1000000000`; max `1000000000`) */
    total: number
}

export interface PUTGuildMemberXPResponse {
    /** The total XP after this operation */
    total: number
}



export interface POSTGuildRoleXPBody {
    /** The amount of XP to award (min `-1000`; max `1000`) */
    amount: number
}