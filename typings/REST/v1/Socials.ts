export interface GETGuildMemberSocialsResponse {
    socialLink: {
        /** The handle of the user within the external service */
        handle?: string,
        /** The unique ID that represents this members social link within the external service */
        serviceId?: string,
        /** The type of social link requested */
        type: string
    }
}