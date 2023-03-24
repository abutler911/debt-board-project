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

Chart.register(ChartDataLabels);

// Add cards to the container
const cardsContainer = document.getElementById("cards-container");
debts.forEach((debt) => {
  const card = createCard(debt);
  cardsContainer.appendChild(card);
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
      // Add the datalabels plugin configuration
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return "$" + value.toLocaleString();
        },
      },
      legend: {
        display: false, // Add this line to hide the chart legends
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

{
  /* <h5 class="card-title text-center">${debt.name}</h5> */
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

  // Add more months as needed
];

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
      // Add the datalabels plugin configuration
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return "$" + value.toLocaleString();
        },
      },
      legend: {
        display: false, // Add this line to hide the chart legends
      },
    },
  },
});

function updateDebtAmounts(newDebtAmounts) {
  debtByMonthChart.data.datasets[0].data = newDebtAmounts;
  debtByMonthChart.update();
}

updateDebtAmounts([121839]); // Replace these values with the updated debt amounts
