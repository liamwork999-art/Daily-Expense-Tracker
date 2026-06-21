/*
Daily Expense Tracker

A small JavaScript project that calculates:
- total spending
- the largest expense
- how many expenses are above a chosen limit
- the average expense

This project is part of my learning journey to practice real-world problem solving with JavaScript.
*/

const expenses = [12, 35, 8, 50, 20, 15];
const limit = 20;

function totalAmountSpent(expenseList) {
  return expenseList.reduce((sum, value) => sum + value, 0);
}

function largestExpense(expenseList) {
  return Math.max(...expenseList);
}

function expensesAboveLimit(limitValue, expenseList) {
  const aboveLimitExpenses = expenseList.filter((value) => value > limitValue);

  return `Expenses above limit: ${aboveLimitExpenses.length} -> (${aboveLimitExpenses.join(
    " and ",
  )}) | Limit: ${limitValue}`;
}

function average(expenseList) {
  return totalAmountSpent(expenseList) / expenseList.length;
}

console.log("\nExpenses Display\n");
console.log(`💠 Total: ${totalAmountSpent(expenses)}`);
console.log(`💠 Largest expense: ${largestExpense(expenses)}`);
console.log(`💠 ${expensesAboveLimit(limit, expenses)}`);
console.log(`💠 Average: ${average(expenses)}`);
