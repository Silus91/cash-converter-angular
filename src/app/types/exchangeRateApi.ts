export interface LatestExchangeResponse {
    base: string;
    date: string;
    rates: Record<string,number>;
}