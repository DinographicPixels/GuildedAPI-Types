import type { APIURLSignature } from "../../payloads/v1/URLSignature";

export interface POSTURLSignatureBody {
    /** An array of Guilded CDN based URLs to get a signature on.
     * Each URL is valid for 5 minutes and limited to one request per day (min items 1; max items 10) */
    urls: Array<string>;
}

export interface POSTURLSignatureResponse {
    /** An array of URLs with a valid signature that has a 5 minute expiration.
     * Any item with a retryAfter indicates you are still within the rate limit for that particular url */
    urlSignatures: Array<APIURLSignature>;
}
