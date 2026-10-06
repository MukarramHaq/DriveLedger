import data from '../data/shifts.json' with { type: 'json' };
const shift = data;
let totalIncome = 0;
let totalExpense = 0;
let netIncome = 0;
let hourlyRate = 1;
shift.forEach((shift => {
    totalIncome = shift.earnings + shift.tips;
    totalExpense = shift.gasSpent + shift.otherExpenses;
    netIncome = totalIncome - totalExpense;
    hourlyRate = netIncome / shift.hours;
    console.log(`Shift on ${shift.date}: $${hourlyRate}/hour`);
}));
//# sourceMappingURL=index.js.map