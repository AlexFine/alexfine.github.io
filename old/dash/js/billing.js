
var blip = document.getElementById("billingbreakdown");
var billingbreakdown = new Chart(blip, {
  type: 'doughnut',
  data: {
    labels: ["Tax", "Insurance", "HR", "Accounting"],
    datasets: [{
      data: [20, 25, 30, 25],
      backgroundColor: ['rgba(88, 219, 151, 0.9)', 'rgba(222, 81, 71, 0.9)', 'rgba(250, 193, 70, 0.9)', 'rgba(30, 184, 250, 0.9)'],
      hoverBackgroundColor: ['rgba(28, 179, 99, 0.9)', 'rgba(182, 41, 21, 0.9)', 'rgba(210, 143, 20, 0.9)', 'rgba(00, 154, 220, 0.9)'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
