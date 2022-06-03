$(document).ready(function () {
  //Рост
  new Chart(document.getElementById("chart-graph"), {
    type: "line",

    data: {
      labels: [
        "10.08.20",
        "02.09.20",
        "29.09.20",
        "22.10.20",
        "23.11.20",
        "04.02.21",
      ],
      datasets: [
        {
          data: [250, 190, 190, 200, 220, 270],
          label: "Equity Growth",
          borderColor: "#BEAC4E",
          backgroundColor: "#BEAC4E",
        },
        {
          data: [200, 200, 190, 220, 250, 300],
          label: "Growth",
          borderColor: "#6EA874",
          backgroundColor: "#6EA874",
        },
      ],
    },
    options: {
      title: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            boxHeight: 0.2,
          },
          align: "end",
        },
      },
    },
  });
  //Рост
  new Chart(document.getElementById("chart-height"), {
    type: "line",

    data: {
      labels: [
        "10.08.20",
        "02.09.20",
        "29.09.20",
        "22.10.20",
        "23.11.20",
        "04.02.21",
      ],
      datasets: [
        {
          data: [98, 100, 105, 110, 99, 130],
          label: "Equity Growth",
          borderColor: "#BEAC4E",
          backgroundColor: "#BEAC4E",
        },
        {
          data: [100, 105, 110, 118, 103, 138],
          label: "Growth",
          borderColor: "#6EA874",
          backgroundColor: "#6EA874",
        },
      ],
    },
    options: {
      title: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            boxHeight: 0.2,
          },
          align: "end",
        },
      },
    },
  });
  //Баланс
  new Chart(document.getElementById("chart-balance"), {
    type: "line",

    data: {
      labels: [
        "10.08.20",
        "02.09.20",
        "29.09.20",
        "22.10.20",
        "23.11.20",
        "04.02.21",
      ],
      datasets: [
        {
          data: [100, 105, 110, 118, 103, 138],
          label: "Balance",
          borderColor: "#6EA874",
          backgroundColor: "#6EA874",
        },
      ],
    },
    options: {
      title: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            boxHeight: 0.2,
          },
          align: "end",
        },
      },
    },
  });
  //Профит
  new Chart(document.getElementById("chart-profit"), {
    type: "line",

    data: {
      labels: [
        "10.08.20",
        "02.09.20",
        "29.09.20",
        "22.10.20",
        "23.11.20",
        "04.02.21",
      ],
      datasets: [
        {
          data: [1, 3, -1, 18, 3, 20],
          label: "Profit",
          borderColor: "#6EA874",
          backgroundColor: "#6EA874",
        },
      ],
    },
    options: {
      title: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            boxHeight: 0.2,
          },
          align: "end",
        },
      },
    },
  });
  //Просадка
  new Chart(document.getElementById("chart-drowdown"), {
    type: "line",

    data: {
      labels: [
        "10.08.20",
        "02.09.20",
        "29.09.20",
        "22.10.20",
        "23.11.20",
        "04.02.21",
      ],
      datasets: [
        {
          data: [-3, -10, 5, 10, 12, 8],
          label: "Drawdown",
          borderColor: "#6EA874",
          backgroundColor: "#6EA874",
        },
      ],
    },
    options: {
      title: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            boxHeight: 0.2,
          },
          align: "end",
        },
      },
    },
  });
});
