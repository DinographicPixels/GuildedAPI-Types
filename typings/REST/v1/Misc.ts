import { APIGuild, APIUser } from "../../payloads";

export interface GETUserResponse {
    /** The user to get. */
    user: APIUser
}

// no body, query GETUserServersResponse
export interface GETUserServersResponse {
    servers: Array<APIGuild>;
};
