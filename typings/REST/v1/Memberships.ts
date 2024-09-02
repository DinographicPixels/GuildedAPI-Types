import type * as OpenAPI from "../../schemas/v1"

export type GETGuildMemberRolesResponse = OpenAPI.operations["RoleMembershipReadMany"]["responses"]["200"]["content"]["application/json"];
// export interface GETGuildMemberRolesResponse {
//     /** The IDs of the roles that the member currently has (must have unique items `true`) */
//     roleIds: Array<number>;
// }
