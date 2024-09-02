import type * as OpenAPI from "../../schemas/v1";

export type POSTCalendarEventBody =
    OpenAPI.operations["CalendarEventCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTCalendarEventBody {
//     /** The name of the event (min length `1`; max length `60`) */
//     name: string;
//     /** The description of the event (min length `1`; max length `8000`) */
//     description?: string;
//     /** The location of the event (min length `1`; max length `8000`)  */
//     location?: string;
//     /** The ISO 8601 timestamp that the event starts at */
//     startsAt?: string;
//     /** A URL to associate with the event */
//     url?: string;
//     /** The color of the event when viewing in the calendar (min `0`; max `16777215`) */
//     color?: number;
//     /** Does the event last all day */
//     isAllDay?: boolean;
//     /** The number of RSVPs to allow before waitlisting RSVPs (min 1) */
//     rsvpLimit?: number,
//     /** When `rsvpLimit` is set, users from the waitlist will be added as space becomes available in the event */
//     autofillWaitlist?: boolean;
//     /** The duration of the event in minutes (min `1`) */
//     duration?: number;
//     isPrivate?: boolean;
//     /* The role IDs to restrict the event to. */
//     roleIds?: Array<number>;
//     repeatInfo?: {
//         /** How often you want your event to repeat (important note: this will repeat for the next 180 days unless custom is defined) (default once) */
//         type: "once" | "everyDay" | "everyWeek" | "everyMonth" | "custom";
//         /** Apply further clarification to your events. This must have type set to custom */
//         every?: {
//             /** How often between your interval the event should repeat. For example, 1 would be every interval, 2 would be every second occurrence of the interval */
//             count: number;
//             /** Coupled with count, this indicates the time range you are repeating your event over */
//             interval: "day" | "week" | "month" | "year";
//         }
//         /** Used to control the end date of the event repeat (only used when type is custom; if used with endDate, the earliest resultant date of the two will be used) (max 24) */
//         endsAfterOccurrences?: number;
//         /** The ISO 8601 timestamp that the event ends at. Used to control the end date of the event repeat (only used when type is custom; if used with endsAfterOccurrences, the earliest resultant date of the two will be used) */
//         endDate?: string;
//         /** Used to control the day of the week that the event should repeat on (only used when type is custom and when every.interval is week) (min items 1) */
//         on?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
//     };
// }

export type POSTCalendarEventResponse =
    OpenAPI.operations["CalendarEventCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTCalendarEventResponse {
//     calendarEvent: APICalendarEvent;
// }


export type GETCalendarEventsQuery =
    OpenAPI.operations["CalendarEventReadMany"]["parameters"]["query"];

// export interface GETCalendarEventsQuery {
//     /** An ISO 8601 timestamp that will be used to filter out results for the current page */
//     before?: string;
//     /** An ISO 8601 timestamp that will be used to filter out results for the current page */
//     after?: string;
//     /** The max size of the page (default `25`; min `1`; max `500`) */
//     limit?: number;
// }

// no body for GETCalendarEvents

export type GETCalendarEventsResponse =
    OpenAPI.operations["CalendarEventReadMany"]["responses"]["200"]["content"]["application/json"];

// export interface GETCalendarEventsResponse {
//     calendarEvents: Array<APICalendarEvent>;
// }


// no body for GETCalendarEvent

export type GETCalendarEventResponse =
    OpenAPI.operations["CalendarEventRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETCalendarEventResponse {
//     calendarEvent: APICalendarEvent;
// }


export type PATCHCalendarEventBody =
    OpenAPI.operations["CalendarEventUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHCalendarEventBody {
//     /** The name of the event (min length `1`; max length `60`) */
//     name?: string;
//     /** The description of the event (min length `1`; max length `8000`) */
//     description?: string;
//     /** The location of the event (min length `1`; max length `8000`)  */
//     location?: string;
//     /** The ISO 8601 timestamp that the event starts at */
//     startsAt?: string;
//     /** A URL to associate with the event */
//     url?: string;
//     /** The color of the event when viewing in the calendar (min `0`; max `16777215`) */
//     color?: number;
//     /** Does the event last all day */
//     isAllDay?: boolean;
//     /** The number of RSVPs to allow before waitlisting RSVPs (min 1) */
//     rsvpLimit?: number,
//     /** When `rsvpLimit` is set, users from the waitlist will be added as space becomes available in the event */
//     autofillWaitlist?: boolean;
//     /** The duration of the event in minutes (min `1`) */
//     duration?: number;
//     isPrivate?: boolean;
//     /* The role IDs to restrict the event to. */
//     roleIds?: Array<number>;
//     repeatInfo?: {
//         /** How often you want your event to repeat (important note: this will repeat for the next 180 days unless custom is defined) (default once) */
//         type: "once" | "everyDay" | "everyWeek" | "everyMonth" | "custom";
//         /** Apply further clarification to your events. This must have type set to custom */
//         every?: {
//             /** How often between your interval the event should repeat. For example, 1 would be every interval, 2 would be every second occurrence of the interval */
//             count: number;
//             /** Coupled with count, this indicates the time range you are repeating your event over */
//             interval: "day" | "week" | "month" | "year";
//         }
//         /** Used to control the end date of the event repeat (only used when type is custom; if used with endDate, the earliest resultant date of the two will be used) (max 24) */
//         endsAfterOccurrences?: number;
//         /** The ISO 8601 timestamp that the event ends at. Used to control the end date of the event repeat (only used when type is custom; if used with endsAfterOccurrences, the earliest resultant date of the two will be used) */
//         endDate?: string;
//         /** Used to control the day of the week that the event should repeat on (only used when type is custom and when every.interval is week) (min items 1) */
//         on?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
//     };
//     cancellation?: {
//         /** The description of event cancellation (min length 1; max length 140) */
//         description?: string,
//     }
// }

// no body for PATCHCalendarEvent

export type PATCHCalendarEventResponse =
    OpenAPI.operations["CalendarEventUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHCalendarEventResponse {
//     calendarEvent: APICalendarEvent;
// }


// no body for GETCalendarEventRSVP

export type GETCalendarEventRSVPResponse =
    OpenAPI.operations["CalendarEventRsvpRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETCalendarEventRSVPResponse {
//     calendarEventRsvp: APICalendarEventRSVP;
// }


export type PUTCalendarEventRSVPBody =
    OpenAPI.operations["CalendarEventRsvpUpdate"]["requestBody"]["content"]["application/json"];
// export interface PUTCalendarEventRSVPBody {
//     /** The status of the RSVP */
//     status: APICalendarEventRSVPStatuses;
// }

export type PUTCalendarEventRSVPResponse =
    OpenAPI.operations["CalendarEventRsvpUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PUTCalendarEventRSVPResponse {
//     calendarEventRsvp: APICalendarEventRSVP;
// }


// no body for GETCalendarEventRSVPS

export type GETCalendarEventRSVPSResponse =
    OpenAPI.operations["CalendarEventRsvpReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETCalendarEventRSVPSResponse {
//     calendarEventRsvps: Array<APICalendarEventRSVP>;
// }



export type POSTCalendarEventCommentBody =
    OpenAPI.operations["CalendarEventCommentCreate"]["requestBody"]["content"]["application/json"];
// export interface POSTCalendarEventCommentBody {
//     /** The content of the forum topic */
//     content: string;
// }

export type POSTCalendarEventCommentResponse =
    OpenAPI.operations["CalendarEventCommentCreate"]["responses"]["200"]["content"]["application/json"];
// export interface POSTCalendarEventCommentResponse {
//     calendarEventComment: APICalendarEventComment;
// }

// no body for GETCalendarEventComments

export type GETCalendarEventCommentsResponse =
    OpenAPI.operations["CalendarEventCommentReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETCalendarEventCommentsResponse {
//     calendarEventComments: Array<APICalendarEventComment>;
// }


// no body for GETCalendarEventComment

export type GETCalendarEventCommentResponse =
    OpenAPI.operations["CalendarEventCommentRead"]["responses"]["200"]["content"]["application/json"];
// export interface GETCalendarEventCommentResponse {
//     calendarEventComment: APICalendarEventComment;
// }

export type PATCHCalendarEventCommentBody =
    OpenAPI.operations["CalendarEventCommentUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHCalendarEventCommentBody {
//     /** The content of the forum topic */
//     content: string;
// }

export type PATCHCalendarEventCommentResponse =
    OpenAPI.operations["CalendarEventCommentUpdate"]["responses"]["200"]["content"]["application/json"];
// export interface PATCHCalendarEventCommentResponse {
//     calendarEventComment: APICalendarEventComment;
// }

export type PATCHCalendarEventSeriesBody =
    OpenAPI.operations["CalendarEventSeriesUpdate"]["requestBody"]["content"]["application/json"];
// export interface PATCHCalendarEventSeriesBody extends PATCHCalendarEventBody {
//     repeatInfo?: {
//         /** How often you want your event to repeat (important note: this will repeat for the next 180 days unless custom is defined) (default once) */
//         type: "once" | "everyDay" | "everyWeek" | "everyMonth" | "custom";
//         /** Apply further clarification to your events. This must have type set to custom */
//         every?: {
//             /** How often between your interval the event should repeat. For example, 1 would be every interval, 2 would be every second occurrence of the interval */
//             count: number;
//             /** Coupled with count, this indicates the time range you are repeating your event over */
//             interval: "day" | "week" | "month" | "year";
//         }
//         /** Used to control the end date of the event repeat (only used when type is custom; if used with endDate, the earliest resultant date of the two will be used) (max 24) */
//         endsAfterOccurrences?: number;
//         /** The ISO 8601 timestamp that the event ends at. Used to control the end date of the event repeat (only used when type is custom; if used with endsAfterOccurrences, the earliest resultant date of the two will be used) */
//         endDate?: string;
//         /** Used to control the day of the week that the event should repeat on (only used when type is custom and when every.interval is week) (min items 1) */
//         on?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
//     };
//     /** Control the updating of the series from the calendarEventId forward. If not defined, it will edit all events (min 1) */
//     calendarEventId?: number;
// }

// no response for PATCHCalendarEventSeriesBody


export type DELETECalendarEventSeriesBody =
    NonNullable<OpenAPI.operations["CalendarEventSeriesDelete"]["requestBody"]>["content"]["application/json"];
// export interface DELETECalendarEventSeriesBody {
//     /** Control the deletion of the series from the calendarEventId forward. If not defined, it will delete all events (min 1) */
//     calendarEventId?: number;
// }

// no response for DELETECalendarEventSeriesBody

export type PUTCalendarEventRSVPBulkBody =
    NonNullable<OpenAPI.operations["CalendarEventRsvpUpdateMany"]["requestBody"]>["content"]["application/json"];
// export interface PUTCalendarEventRSVPBulkBody {
//     userIds: Array<string>;
//     status: "going" | "maybe" | "declined" | "invited";
// }

// no response for PUTCalendarEventRSVPBulk
