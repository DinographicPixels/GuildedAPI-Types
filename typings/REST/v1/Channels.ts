import { APIChannelCategories, APIGuildChannel } from "../../payloads/v1/Channels";

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
}

export interface PATCHChannelResponse {
    channel: APIGuildChannel
}