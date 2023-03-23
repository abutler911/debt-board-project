const debts = [
  {
    name: "PennyMac Mortgage",
    amount: 396742,
    image: "debt-board-project/public/imgs/pennymac.jpeg",
  },
  {
    name: "Ford Explorer",
    amount: 12500,
    image: "debt-board-project/public/imgs/ford.jpeg",
  },
  {
    name: "VW Jetta",
    amount: 3007,
    image: "debt-board-project/public/imgs/vw.jpeg",
  },
  {
    name: "CapitalOne Card",
    amount: 10200,
    image: "debt-board-project/public/imgs/capitalone.png",
  },
  {
    name: "Cabelas",
    amount: 6200,
    image: "debt-board-project/public/imgs/cabelas.jpeg",
  },
  {
    name: "Citibank",
    amount: 3007,
    image: "debt-board-project/public/imgs/citibank.png",
  },
  {
    name: "American Express",
    amount: 4359,
    image: "debt-board-project/public/imgs/amex.jpeg",
  },
  {
    name: "MACU Visa",
    amount: 1443,
    image: "debt-board-project/public/imgs/macu.jpeg",
  },
  {
    name: "MACU Student Loan",
    amount: 7123,
    image: "debt-board-project/public/imgs/macu.jpeg",
  },
  {
    name: "Federal Student Loan",
    amount: 48000,
    image: "debt-board-project/public/imgs/fedstudentloan.png",
  },
  {
    name: "Fed Tax Loan",
    amount: 23000,
    image: "debt-board-project/public/imgs/irslogo.jpeg",
  },
  {
    name: "Utah Tax Loan",
    amount: 3000,
    image: "debt-board-project/public/imgs/utahlogo.jpeg",
  },
];

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
    scales: {
      y: {
        beginAtZero: true,
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
        <h5 class="card-title text-center">${debt.name}</h5>
        <p class="card-text text-center mb-4">$${debt.amount.toLocaleString()}</p>
      </div>
    </div>
  `;

  return card;
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
document.getElementById(
  "total-debts-without-house"
).innerText = `Total All Debts without House: $${totalDebtsWithoutHouse.toLocaleString()}`;
