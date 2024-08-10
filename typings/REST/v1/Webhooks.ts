import {APIEmbedOptions, APIWebhook} from "../../payloads"

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

export interface POSTExecuteWebhookBody {
    content?: string;
    username?: string;
    avatar_url?: string;
    embeds?: Array<APIEmbedOptions>;
}

export interface POSTExecuteWebhookResponse {
    id: string;
    channelId: string;
    content: {
        object: string;
        document: {
            data: {
                profile: {
                    name: string;
                    profilePicture: string;
                }
            },
            nodes: Array<{
                object: string;
                type: string;
                data: object;
                nodes: Array<{
                    object: string;
                    leaves: Array<{
                        object: string;
                        text: string;
                        marks: Array<string>
                    }>
                }>
            }>;
        }
    };
    type: string;
    createdBy: string;
    createdAt: string;
    webhookId: string;
    isOptimistic: boolean;
    isUploadPending: boolean;
}
