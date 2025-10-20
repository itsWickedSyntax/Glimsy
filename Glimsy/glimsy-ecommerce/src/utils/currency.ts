export const formatCurrency = (amount: number, currency: string = 'KWD'): string => {
    return new Intl.NumberFormat('en-KW', {
        style: 'currency',
        currency: currency,
    }).format(amount);
};