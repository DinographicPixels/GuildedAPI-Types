export type UserCategories = 'bot' | 'user';

export interface APIUser {
    /** The ID of the user */
    id: string,
    /** The type of user. If this property is absent, it can assumed to be of type user */
    type?: UserCategories,
    /** User's name */
    name: string,
    /** The avatar image associated with the user */
    avatar?: string,
    /** The banner image associated with the user */
    banner?: string,
    /** The ISO 8601 timestamp that the user was created at */
    createdAt: string
}

export interface APIUserSummary {
    /** The ID of the user */
    id: string,
    /** The type of user. If this property is absent, it can assumed to be of type user */
    type?: UserCategories,
    /** User's name */
    name: string,
    /** The avatar image associated with the user */
    avatar?: string
}

export interface APIGuildMember {
    user: APIUser,
    /** (must have unique items true) */
    roleIds: Array<number>,
    /** Member's nickname */
    nickname?: string,
    /** The ISO 8601 timestamp that the member was created at */
    joinedAt: string,
    /** (default `false`) */
    isOwner: boolean
}

export interface APIGuildMemberSummary {
    user: APIUserSummary,
    /** (must have unique items true) */
    roleIds: Array<number>
}

export interface APIGuildMemberBan {
    user: APIUserSummary,
    /** The reason for the ban as submitted by the banner */
    reason?: string,
    /** The ID of the user who created this server member ban */
    createdBy: string,
    /** The ISO 8601 timestamp that the server member ban was created at */
    createdAt: string
}


export interface APIBotUser {
    user: {
        id: string,
        botId: string,
        name: string,
        createdAt: string,
        createdBy: string
    }
}