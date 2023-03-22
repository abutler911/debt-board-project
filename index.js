console.log("connected");

let myChart = document.getElementById("my-chart").getContext("2d");

// Chart.defaults.elements = "Lato";
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = "#777";

let debtChart = new Chart(myChart, {
  type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ["3/21/23", "4/21/23", "5/21/23", "6/21/23"],
    datasets: [
      {
        label: "Total Debt Amount",
        data: [515504, 500000, 489493, 434090],
        backgroundColor: [
          "rgba(251, 152, 203, 0.8)",
          "rgba(200, 150, 200, 0.7)",
          "rgba(180, 140, 190, 0.6)",
          "rgba(170, 130, 180, 0.5)",
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      title: {
        display: true,
        text: "Butler Debt Board",
        font: {
          size: 24,
          weight: 600,
        },
      },
    },
  },
});
