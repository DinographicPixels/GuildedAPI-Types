import { APIChatMessage, APIChatMessageCategories, APIEmbedOptions, APIMentions } from "../../payloads/v1/Chat";

export interface POSTChannelMessageBody {
    /** If set, this message will only be seen by those mentioned or replied to */
    isPrivate?: boolean,
    /** If set, this message will not notify any mentioned users or roles (default false) */
    isSilent?: boolean,
    /** Message IDs to reply to (min items 1; max items 5) */
    replyMessageIds?: Array<string>,
    /** The content of the message (min length `1`; max length `4000`) */
    content?: string,
    /** At this time, only one embed is supported per message, and attachments are not supported. If you need to send more than one embed or upload attachments, consider creating the message via a webhook. (min items `1`; max items `1` */
    embeds?: Array<APIEmbedOptions>
}

export interface POSTChannelMessageResponse {
    message: APIChatMessage
}

export interface GETChannelMessagesQuery {
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    before?: string,
    /** undefined. Order will be reversed when compared to before or when omitting this parameter altogether */
    after?: string,
    /** The max size of the page (default `50`; min `1`; max `100`) */
    limit?: number,
    /** Whether to include private messages between all users in response (default `false`) */
    includePrivate?: boolean
}

export interface GETChannelMessagesResponse {
    messages: Array<APIChatMessage>
}

export interface GETChannelMessageResponse {
    message: APIChatMessage
}

export interface PUTChannelMessageBody {
    /** The content of the message */
    content?: string,
    /** At this time, only one embed is supported per message, and attachments are not supported. If you need to send more than one embed or upload attachments, consider creating the message via a webhook. (min items `1`; max items `1`) */
    embeds?: Array<APIChatMessage>
}

export interface PUTChannelMessageResponse {
    message: APIChatMessage | {
        /** The ID of the message */
        id?: string,
        /** The type of chat message. "system" messages are generated by Guilded, while "default" messages are user or bot-generated. */
        type?: APIChatMessageCategories,
        /** The ID of the server */
        serverId?: string,
        /** The ID of the channel */
        channelId: string,
        /** The content of the message */
        content?: string,
        /** (min items `1`; max items `10`) */
        embeds?: Array<APIEmbedOptions>,
        /** Message IDs that were replied to (min items `1`; max items `5`) */
        replyMessageIds?: Array<string>,
        /** If set, this message will only be seen by those mentioned or replied to */
        isPrivate?: boolean,
        /** If set, this message did not notify mention or reply recipients (default `false`) */
        isSilent?: boolean,

        mentions?: APIMentions,
        /** The ISO 8601 timestamp that the message was created at */
        createdAt?: string,
        /** The ID of the user who created this message (Note: If this event has createdByWebhookId present, this field will still be populated, but can be ignored. In this case, the value of this field will always be Ann6LewA) */
        createdBy?: string,
        /** The ID of the webhook who created this message, if it was created by a webhook */
        createdByWebhookId?: string,
        /** The ISO 8601 timestamp that the message was updated at, if relevant */
        updatedAt: string
    }
}