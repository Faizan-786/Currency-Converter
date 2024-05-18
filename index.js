import inquirer from 'inquirer';
const conversionRates = {
    "PAK": {
        "PAK": 1,
        "USDT": 0.0044,
        "GBP": 0.0037,
        "EUR": 0.0090,
        "USD": 0.0038,
        "AUD": 0.0052,
        "CAD": 0.0058,
        "JPY": 3.80,
        "CNY": 0.39,
        "INR": 0.31,
        "CHF": 0.0042
    },
    "USD": {
        "USD": 1,
        "PAK": 263.16,
        "GBP": 0.79,
        "EUR": 0.92,
        "AUD": 1.32,
        "CAD": 1.25,
        "JPY": 130.0,
        "CNY": 6.76,
        "INR": 82.0,
        "CHF": 0.92
    },
    "EUR": {
        "EUR": 1,
        "PAK": 111.11,
        "USD": 1.09,
        "GBP": 0.86,
        "AUD": 1.44,
        "CAD": 1.37,
        "JPY": 142.0,
        "CNY": 7.42,
        "INR": 89.0,
        "CHF": 0.99
    },
    "JPY": {
        "JPY": 1,
        "PAK": 0.26,
        "USD": 0.0077,
        "EUR": 0.0070,
        "GBP": 0.0066,
        "CAD": 0.0097,
        "AUD": 0.0077,
        "CNY": 0.056,
        "INR": 0.62,
        "CHF": 0.0070
    },
    "CNY": {
        "CNY": 1,
        "PAK": 2.56,
        "USD": 0.148,
        "EUR": 0.135,
        "GBP": 0.120,
        "CAD": 0.184,
        "AUD": 0.154,
        "JPY": 17.86,
        "INR": 8.60,
        "CHF": 0.13
    },
    "GBP": {
        "GBP": 1,
        "PAK": 284.05,
        "USD": 1.27,
        "EUR": 1.16,
        "AUD": 1.83,
        "CAD": 1.58,
        "JPY": 162.5,
        "CNY": 8.33,
        "INR": 104.0,
        "CHF": 1.16
    },
    "AUD": {
        "AUD": 1,
        "PAK": 192.31,
        "USD": 0.76,
        "EUR": 0.69,
        "GBP": 0.55,
        "CAD": 0.86,
        "JPY": 88.89,
        "CNY": 5.45,
        "INR": 56.83,
        "CHF": 0.63
    },
    "CAD": {
        "CAD": 1,
        "PAK": 172.41,
        "USD": 0.80,
        "EUR": 0.73,
        "GBP": 0.63,
        "AUD": 1.16,
        "JPY": 103.03,
        "CNY": 5.43,
        "INR": 66.67,
        "CHF": 0.74
    },
    "INR": {
        "INR": 1,
        "PAK": 3.26,
        "USD": 0.012,
        "EUR": 0.011,
        "GBP": 0.0096,
        "AUD": 0.018,
        "CAD": 0.015,
        "JPY": 1.54,
        "CNY": 0.12,
        "CHF": 0.011
    },
    "CHF": {
        "CHF": 1,
        "PAK": 238.10,
        "USD": 1.09,
        "EUR": 1.01,
        "GBP": 0.86,
        "AUD": 1.59,
        "CAD": 1.35,
        "JPY": 142.86,
        "CNY": 7.69,
        "INR": 90.91
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["CHF", "PAK", "USD", "EUR", "GBP", "AUD", "CAD", "JPY", "CNY", "INR"],
        message: "Select Your Currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["CHF", "PAK", "USD", "EUR", "GBP", "AUD", "CAD", "JPY", "CNY", "INR"],
        message: "Select Your Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Conversion Amount"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    const conversionRate = conversionRates[from][to];
    const convertedAmount = amount * conversionRate;
    console.log(`Converted amount: ${convertedAmount} ${to}`);
}
else {
    console.log("Invalid Inputs");
}
