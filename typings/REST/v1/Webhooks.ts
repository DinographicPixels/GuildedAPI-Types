import type * as OpenAPI from "../../schemas/v1"
import type {APIEmbedOptions} from "../../payloads";

export type POSTGuildWebhookBody = OpenAPI.operations["WebhookCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTGuildWebhookBody {
//     /** The name of the webhook (min length `1`; max length `128`) */
//     name: string,
//     /** Channel ID to create the webhook in */
//     channelId: string
// }

export type POSTGuildWebhookResponse = OpenAPI.operations["WebhookCreate"]["responses"]["201"]["content"]["application/json"];
// export interface POSTGuildWebhookResponse {
//     webhook: APIWebhook
// }



export type GETGuildWebhooksQuery = OpenAPI.operations["WebhookReadMany"]["parameters"]["query"];
// export interface GETGuildWebhooksQuery {
//     /** ID of the channel you want to filter for webhooks */
//     channelId: string
// }

export type GETGuildWebhooksResponse = OpenAPI.operations["WebhookReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildWebhooksResponse {
//     webhooks: Array<APIWebhook>
// }



export type GETGuildWebhookResponse = OpenAPI.operations["WebhookRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildWebhookResponse {
//     webhook: APIWebhook
// }



export type PUTGuildWebhookBody = OpenAPI.operations["WebhookUpdate"]["requestBody"]["content"]["application/json"];
// export interface PUTGuildWebhookBody {
//     /** The name of the webhook (min length `1`; max length `128`) */
//     name: string,
//     /** The ID of the channel */
//     channelId?: string
// }

export type PUTGuildWebhookResponse = OpenAPI.operations["WebhookUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PUTGuildWebhookResponse {
//     webhook: APIWebhook
// }

// from media.guilded.gg
export interface POSTExecuteWebhookBody {
    content?: string;
    username?: string;
    avatar_url?: string;
    embeds?: Array<APIEmbedOptions>;
}

// from media.guilded.gg
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
