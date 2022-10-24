import { APIWebhook } from "../../payloads"

export interface POSTGuildWebhookBody {
    /** The name of the webhook (min length `1`; max length `128`) */
    name: string,
    /** Channel ID to create the webhook in */
    channelId: string
}

export interface POSTGuildWebhookResponse {
    webhook: APIWebhook
}



export interface GETGuildWebhooksQuery {
    /** ID of the channel you want to filter for webhooks */
    channelId: string
}

export interface GETGuildWebhooksResponse {
    webhooks: Array<APIWebhook>
}



export interface GETGuildWebhookResponse {
    webhook: APIWebhook
}



export interface PUTGuildWebhookBody {
    /** The name of the webhook (min length `1`; max length `128`) */
    name: string,
    /** The ID of the channel */
    channelId?: string
}

export interface PUTGuildWebhookResponse {
    webhook: APIWebhook
}