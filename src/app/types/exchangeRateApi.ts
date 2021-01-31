export interface LatestExchangeResponse {
    base: string;
    date: string;
    rates: Rates;
}

export interface HistoricExchangeResponse {
    base: string;
    end_at:string;
    rates: Record<string, Rates>
}

export interface Rates {
    [currency: string]: number;
}