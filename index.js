const debts = [
  // {
  //   name: "PennyMac Mortgage",
  //   amount: 396742,
  //   image: "images/pennymac.jpeg",
  // },
  {
    name: "Ford Explorer",
    amount: 12500,
    image: "images/ford.jpeg",
  },
  {
    name: "VW Jetta",
    amount: 3007,
    image: "images/vw.jpeg",
  },
  {
    name: "CapitalOne Card",
    amount: 10200,
    image: "images/capitalone.png",
  },
  {
    name: "Cabelas",
    amount: 6200,
    image: "images/cabelas.jpeg",
  },
  {
    name: "Citibank",
    amount: 3007,
    image: "images/citibank.png",
  },
  {
    name: "American Express",
    amount: 4359,
    image: "images/amex.jpeg",
  },
  {
    name: "MACU Visa",
    amount: 1443,
    image: "images/macu.jpeg",
  },
  {
    name: "MACU Student Loan",
    amount: 7123,
    image: "images/macu.jpeg",
  },
  {
    name: "Federal Student Loan",
    amount: 48000,
    image: "images/fedstudentloan.png",
  },
  {
    name: "Fed Tax Loan",
    amount: 23000,
    image: "images/irslogo.jpeg",
  },
  {
    name: "Utah Tax Loan",
    amount: 3000,
    image: "images/utahlogo.jpeg",
  },
];

const initialDebtData = [
  { month: "March 2023", amount: 121000 },
  { month: "April 2023", amount: 0 },
  { month: "May 2023", amount: 0 },
  { month: "June 2023", amount: 0 },
  { month: "July 2023", amount: 0 },
  { month: "August 2023", amount: 0 },
  { month: "September 2023", amount: 0 },
  { month: "October 2023", amount: 0 },
  { month: "November 2023", amount: 0 },
  { month: "December 2023", amount: 0 },
];

const investments = [
  {
    name: "TD Ameritrade",
    amount: 4000,
    image: "images/tdameritrade.jpg",
  },
  {
    name: "Skywest 401k",
    amount: 23000,
    image: "images/skywest.jpg",
  },
  {
    name: "Crypto.com",
    amount: 4000,
    image: "images/crypto.jpg",
  },
  { name: "Robinhood", amount: 1000, image: "images/robinhood.png" },
];

const initialInvestmentData = [
  { month: "March 2023", amount: 1000 },
  { month: "April 2023", amount: 5000 },
  { month: "May 2023", amount: 7000 },
  { month: "June 2023", amount: 9000 },
  { month: "July 2023", amount: 11000 },
  { month: "August 2023", amount: 13000 },
  { month: "September 2023", amount: 15000 },
  { month: "October 2023", amount: 17000 },
  { month: "November 2023", amount: 19000 },
  { month: "December 2023", amount: 21000 },
];

Chart.register(ChartDataLabels);

// Add cards to the container
const cardsContainer = document.getElementById("cards-container");
debts.forEach((debt) => {
  const card = createCard(debt);
  cardsContainer.appendChild(card);
});

// Add investment cards to the container
const investmentCardsContainer = document.getElementById(
  "investment-cards-container"
);
investments.forEach((investment) => {
  const card = createInvestmentCard(investment);
  investmentCardsContainer.appendChild(card);
});

const chartData = {
  labels: debts.map((debt) => debt.name),
  datasets: [
    {
      label: "Debt Amount",
      data: debts.map((debt) => debt.amount),
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ctx = document.getElementById("debtGraph").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: chartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return "$" + value.toLocaleString();
        },
      },
      legend: {
        display: false,
      },
    },
  },
});

// Function to create a Bootstrap card with image
function createCard(debt) {
  const card = document.createElement("div");
  card.className =
    "col-lg-3 col-md-6 col-sm-12 mb-3 d-flex align-items-stretch";

  card.innerHTML = `
    <div class="card">
      <img src="${debt.image}" class="card-img-top" alt="${debt.name} logo" />
      <div class="card-body d-flex flex-column">
        <p class="card-text text-center mb-4">$${debt.amount.toLocaleString()}</p>
      </div>
    </div>
  `;

  return card;
}

function createInvestmentCard(investment) {
  const card = document.createElement("div");
  card.className =
    "col-lg-3 col-md-6 col-sm-12 mb-3 d-flex align-items-stretch";

  card.innerHTML = `
    <div class="card">
      <img src="${investment.image}" class="card-img-top" alt="${
    investment.name
  } logo" />
      <div class="card-body d-flex flex-column">
        <p class="card-text text-center mb-4">$${investment.amount.toLocaleString()}</p>
      </div>
    </div>
  `;

  return card;
}
{
}

// Calculate total debts
const totalDebts = debts.reduce((acc, debt) => acc + debt.amount, 0);

// Calculate total debts without house
const totalDebtsWithoutHouse = debts
  .filter((debt) => debt.name !== "PennyMac Mortgage")
  .reduce((acc, debt) => acc + debt.amount, 0);

// Update the h2 elements with the calculated values
document.getElementById(
  "total-debts"
).innerText = `Total All Debts: $${totalDebts.toLocaleString()}`;
// document.getElementById(
//   "total-debts-without-house"
// ).innerText = `Total All Debts without House: $${totalDebtsWithoutHouse.toLocaleString()}`;
// const initialTotalDebt = debts.reduce((acc, debt) => acc + debt.amount, 0);

const chartDataByMonth = {
  labels: initialDebtData.map((debt) => debt.month),
  datasets: [
    {
      label: "Debt Amount by Month",
      data: initialDebtData.map((debt) => debt.amount),
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const ctxByMonth = document.getElementById("debtGraphByMonth").getContext("2d");
const debtByMonthChart = new Chart(ctxByMonth, {
  type: "line",
  data: chartDataByMonth,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return "$" + value.toLocaleString();
        },
      },
      legend: {
        display: false,
      },
    },
  },
});

const investmentChartData = {
  labels: investments.map((investment) => investment.name),
  datasets: [
    {
      label: "Investment Amount",
      data: investments.map((investment) => investment.amount),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const investmentCtx = document
  .getElementById("investmentGraph")
  .getContext("2d");
new Chart(investmentCtx, {
  type: "bar",
  data: investmentChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return "$" + value.toLocaleString();
        },
      },
      legend: {
        display: false,
      },
    },
  },
});

const chartDataByInvestmentMonth = {
  labels: initialInvestmentData.map((investment) => investment.month),
  datasets: [
    {
      label: "Investment Amount by Month",
      data: initialInvestmentData.map((investment) => investment.amount),
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const investmentCtxByMonth = document
  .getElementById("investmentGraphByMonth")
  .getContext("2d");
const investmentByMonthChart = new Chart(investmentCtxByMonth, {
  type: "line",
  data: chartDataByInvestmentMonth,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return "$" + value.toLocaleString();
        },
      },
      legend: {
        display: false,
      },
    },
  },
});

// Calculate total investments
const totalInvestments = investments.reduce(
  (acc, investment) => acc + investment.amount,
  0
);

// Update the h2 element with the calculated value
document.getElementById(
  "total-investments"
).innerText = `Total Investments: $${totalInvestments.toLocaleString()}`;

function updateInvestmentAmounts(newInvestmentAmounts) {
  investmentByMonthChart.data.datasets[0].data = newInvestmentAmounts;
  investmentByMonthChart.update();
}

updateInvestmentAmounts([1000]); // Replace these values with the updated investment amounts, first amount is for March 2023
function updateDebtAmounts(newDebtAmounts) {
  debtByMonthChart.data.datasets[0].data = newDebtAmounts;
  debtByMonthChart.update();
}

updateDebtAmounts([121839]); // Replace these values with the updated debt amounts, first amount is for March 2023
