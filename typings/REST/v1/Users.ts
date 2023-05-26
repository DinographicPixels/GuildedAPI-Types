import { APISocialLink } from "../../payloads/v1/Users";
import { APIGuild, APIUser } from "../../payloads";

export interface GETGuildMemberSocialsResponse {
    socialLink: APISocialLink;
}

export interface GETUserResponse {
    user: APIUser;
}

// no body, query GETUserServersResponse
export interface GETUserServersResponse {
    servers: Array<APIGuild>;
};

export interface PUTUserStatusBody {
    /** The content of the user status. The supported markdown for this content only includes reactions and plaintext for now (max length 100)  */
    content?: string;
    /** Emote ID to apply */
    emoteId: number;
    /** An ISO 8601 timestamp that will be used to indicate when an expiration occurs. Expiration usually will not occur exactly at this time. Bot logic should not expect a guarantee of timing as a result, but can expect that it'll happen very shortly afterwards */
    expiresAt?: string;
}
