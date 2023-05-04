/** {@link https://www.guilded.gg/docs/api/reactions/ChannelMessageReactionDeleteMany | DELETE at /channels/channelId/messages/messageId/emotes} */
export interface DELETEMessageReactionQuery {
    /** Filter out reactions to delete by this emote ID */
    emoteId: number;
}
