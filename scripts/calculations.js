let budgetValue = 0;
let totalExpensesValue = 0;

// array
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// calculo total de despesas

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];

  console.log("Despesas totais: " + totalExpensesValue);
}

// calculo da media de despesas
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  return totalExpensesValue / expenseEntries.length;
}
// calcular saldo
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
// cor do saldo
let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
// calcular estatisticas por categoria
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }

  return categoryTotal;
}
// calcula maior catergoria de despesa

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  const categoriesTotals = [];

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const total = calculateCategoryExpenses(category);

    categoriesTotals.push([category, total]);
  }

  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestTotal) {
      largestTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }

  return largestCategory;
}

// adiciona novas despesas

function addExpenseEntry(expenseEntry) {
  expenseEntries.push(expenseEntry);
  totalExpensesValue += expenseEntry[1];
}
