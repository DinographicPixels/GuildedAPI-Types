import { APIMentions } from "./Chat";

export interface APICalendarEvent {
    /** The ID of the calendar event (min 1) */
    id: number,
    /** The ID of the server */
    serverId: string,
    /** The ID of the channel */
    channelId: string,
    /** The name of the event (min length 1; max length 60) */
    name: string,
    /** The description of the event (min length 1; max length 8000) */
    description?: string,
    /** The location of the event (min length 1; max length 8000) */
    location?: string,
    /** A URL to associate with the event */
    url?: string,
    /** The color of the event when viewing in the calendar (min 0; max 16777215) */
    color?: number,
    /** The number of RSVPs to allow before waitlisting RSVPs (min 1) */
    rsvpLimit?: number,
    /** The ISO 8601 timestamp that the event starts at */
    startsAt: string,
    /** The duration of the event in minutes (min 1) */
    duration?: number,

    isPrivate?: boolean,
    /** Calendar Event's mentions */
    mentions?: APIMentions,
    /** The ISO 8601 timestamp that the event was created at */
    createdAt: string,
    /** The ID of the user who created this event */
    createdBy: string,

    cancellation?: {
        /** The description of event cancellation (min length 1; max length 140) */
        description?: string,
        /** The ID of the user who created this event cancellation */
        createdBy?: string
    }
}

export type APICalendarEventRSVPStatuses = 'going' | 'maybe' | 'declined' | 'invited' | 'waitlisted' | 'not responded';

export interface APICalendarEventRSVP {
    /** The ID of the calendar event (min 1) */
    calendarEventId: number,
    /** The ID of the channel */
    channelId: string,
    /** The ID of the server */
    serverId: string,
    /** The ID of the user */
    userId: string,
    /** The status of the RSVP */
    status: APICalendarEventRSVPStatuses,
    /** The ID of the user who created this RSVP */
    createdBy: string,
    /** The ISO 8601 timestamp that the RSVP was created at */
    createdAt: string,
    /** The ID of the user who updated this RSVP */
    updatedBy?: string,
    /** The ISO 8601 timestamp that the RSVP was updated at, if relevant */
    updatedAt?: string
}