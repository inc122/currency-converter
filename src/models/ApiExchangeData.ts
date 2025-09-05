export interface Dictionary {
  [key: string]: number
}

export type ApiExchangeData = {
    date: Date,
    base: string,
    rates: Dictionary
}