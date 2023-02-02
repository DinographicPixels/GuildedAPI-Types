import { APICalendarEvent, APICalendarEventComment, APICalendarEventRSVP, APICalendarEventRSVPStatuses } from "../../payloads"

export interface POSTCalendarEventBody {
    /** The name of the event (min length `1`; max length `60`) */
    name: string,
    /** The description of the event (min length `1`; max length `8000`) */
    description?: string,
    /** The location of the event (min length `1`; max length `8000`)  */
    location?: string,
    /** The ISO 8601 timestamp that the event starts at */
    startsAt?: string,
    /** A URL to associate with the event */
    url?: string,
    /** The color of the event when viewing in the calendar (min `0`; max `16777215`) */
    color?: number,
    /** The number of RSVPs to allow before waitlisting RSVPs (min `1`) */
    rsvpLimit?: number,
    /** The duration of the event in minutes (min `1`) */
    duration?: number,
    isPrivate?: boolean
}

export interface POSTCalendarEventResponse {
    calendarEvent: APICalendarEvent
}



export interface GETCalendarEventsQuery {
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    before?: string,
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    after?: string,
    /** The max size of the page (default `25`; min `1`; max `500`) */
    limit?: number
}

// no body for GETCalendarEvents

export interface GETCalendarEventsResponse {
    calendarEvents: Array<APICalendarEvent>
}


// no body for GETCalendarEvent

export interface GETCalendarEventResponse {
    calendarEvent: APICalendarEvent
}



export interface PATCHCalendarEventBody {
        /** The name of the event (min length `1`; max length `60`) */
        name?: string,
        /** The description of the event (min length `1`; max length `8000`) */
        description?: string,
        /** The location of the event (min length `1`; max length `8000`)  */
        location?: string,
        /** The ISO 8601 timestamp that the event starts at */
        startsAt?: string,
        /** A URL to associate with the event */
        url?: string,
        /** The color of the event when viewing in the calendar (min `0`; max `16777215`) */
        color?: number,
        /** The number of RSVPs to allow before waitlisting RSVPs (min `1`) */
        rsvpLimit?: number,
        /** The duration of the event in minutes (min `1`) */
        duration?: number,
        isPrivate?: boolean
}

// no body for PATCHCalendarEvent

export interface PATCHCalendarEventResponse {
    calendarEvent: APICalendarEvent
}


// no body for GETCalendarEventRSVP

export interface GETCalendarEventRSVPResponse {
    calendarEventRsvp: APICalendarEventRSVP
}



export interface PUTCalendarEventRSVPBody {
    /** The status of the RSVP */
    status: APICalendarEventRSVPStatuses
}

export interface PUTCalendarEventRSVPResponse {
    calendarEventRsvp: APICalendarEventRSVP
}


// no body for GETCalendarEventRSVPS

export interface GETCalendarEventRSVPSResponse {
    calendarEventRsvps: Array<APICalendarEventRSVP>
}




export interface POSTCalendarEventCommentBody {
    /** The content of the forum topic */
    content: string;
}

export interface POSTCalendarEventCommentResponse {
    calendarEventComment: APICalendarEventComment;
}

// no body for GETCalendarEventComments

export interface GETCalendarEventCommentsResponse {
    calendarEventComments: Array<APICalendarEventComment>;
}


// no body for GETCalendarEventComment

export interface GETCalendarEventCommentResponse {
    calendarEventComment: APICalendarEventComment;
}

export interface PATCHCalendarEventCommentBody {
    /** The content of the forum topic */
    content: string;
}

export interface PATCHCalendarEventCommentResponse {
    calendarEventComment: APICalendarEventComment;
}