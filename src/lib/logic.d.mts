export const STATUS_LABELS: Record<'suspected'|'confirmed'|'repaired'|'verified',string>;
export const REQUIRED_EVENT: Record<string,string>;
export function validateTicketId(value:unknown): {ok:boolean;id?:string;error?:string};
export function verifyTicket(t:{fictional:boolean;status:string;humanEventHistory:{eventType:string;sourceType:string}[];waterServiceState:string;updatedAt:string}):boolean;
export function lookupTicket<T extends {ticketId:string}>(list:T[],input:string):{ok:boolean;ticket?:T|null;error?:string};
export function estimate(model:{coefficients:number[]},features:{pressureDrop:number;flowAnomaly:number;reportAge:number}):number;
