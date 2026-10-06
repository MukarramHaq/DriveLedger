import data from '../data/shifts.json' with { type: 'json' };

const shift: Shift[] = data;

// Helps to catch bugs beforehand if anything goes wrong. We are doing this to actually use TS with its powers.
interface Shift {
    date: string,
    hours: number,
    earnings: number,
    tips: number,
    milesDriven: number,
    gasSpent: number,
    otherExpenses: number,
}

let totalIncome: number = 0;
let totalExpense: number = 0;
let netIncome: number = 0;
let hourlyRate: number = 1;

shift.forEach((shift => {
    totalIncome = shift.earnings + shift.tips;
    totalExpense = shift.gasSpent + shift.otherExpenses;
    netIncome = totalIncome - totalExpense;
    hourlyRate = netIncome / shift.hours;
    console.log(`Shift on ${shift.date}: $${hourlyRate}/hour`);
}))