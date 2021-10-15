const currencyToSymbol = {
    "USD": "$",
    "GBP": "£",
    "AUD": "$",
    "JPY": "¥",
    "RUB": "₽",
}

export const mapCurrencyToSymbol = (currency) => {
    return currencyToSymbol[currency]
}