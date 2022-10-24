/** Different types of Guilds */
export type APIGuildCategories = 'team'|'organization'|'community'|'clan'|'guild'|'friends'|'streaming'|'other';

export interface APIGuild {
    /** The ID of the server */
    id: string,
    /** The ID of the user who created this server */
    ownerId: string,
    /** The type of server designated from the server's settings page */
    type?: APIGuildCategories
    /** The name given to the server */
    name: string,
    /** The URL that the server can be accessible from. For example, a value of "Guilded-Official" means the server can be accessible from https://www.guilded.gg/Guilded-Official */
    url?: string;
    /** The description associated with the server */
    about?: string,
    /** The avatar image associated with the server */
    avatar?: string,
    /** The banner image associated with the server */
    banner?: string,
    /** The timezone associated with the server */
    timezone?: string,
    /** The verified status of the server */
    isVerified?: boolean,
    /** The channel ID of the default channel of the server. Useful for welcome messages */
    defaultChannelId?: string,
    /** The ISO 8601 timestamp that the server was created at */
    createdAt: string
}