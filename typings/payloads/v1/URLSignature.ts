import type * as OpenAPI from "../../schemas/v1"

export type APIURLSignature = OpenAPI.components["schemas"]["UrlSignature"];
// export interface APIURLSignature {
//     /** The URL that is to be signed */
//     url: string;
//     /** The url with a valid signature that has a 5 minutes expiration on the signature */
//     signature?: string;
//     /** The number of seconds to wait before retrying the request */
//     retryAfter?: number;
// }
