window.onload = () => {
  navigation.init();
  chartjs.init();
};

const navigation = {
  init: function () {
    this.config();
    this.configParents();
    this.configChildrens();
  },
  config: function () {
    const openBtn = document.querySelector(".Navigation-open");
    const main = document.querySelector(".Navigation");
    const overlay = main.querySelector(".Navigation-overlay");

    openBtn.addEventListener("click", () => {
      main.classList.add("active");
    });

    overlay.addEventListener("click", () => {
      main.classList.remove("active");
    });
  },
  configParents: function () {
    const parentItems = document.querySelectorAll(".Navigation-list-item");
    parentItems.forEach((item) =>
      item.addEventListener("click", (e) => {
        const subNav = item.querySelector(".Navigation-subnavigation");
        if (subNav) {
          e.preventDefault();
          item.classList.toggle("active");
        }
      })
    );
  },
  configChildrens: function () {
    const parentItems = document.querySelectorAll(
      ".Navigation-subnavigation-item:not(.header)"
    );

    parentItems.forEach((item) =>
      item.addEventListener("click", () => {
        parentItems.forEach((i) => i.classList.remove("active"));

        item.classList.add("active");
      })
    );
  },
};

const owlCarousel = {
  init: function () {
    // this.setupTeamCarousel()
  },
  setupTeamCarousel: function () {
    const $owl = $("#about-team-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
        575: {
          items: 2,
          slideBy: 2,
        },
        700: {
          items: 3,
          slideBy: 3,
        },
        991: {
          items: 4,
          slideBy: 4,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: true,
      nav: true,
      navText: [
        '<img src="./assets/icons/icon-arrow-left-white.svg" alt="" />',
        '<img src="./assets/icons/icon-arrow-right-white.svg" alt="" />',
      ],
      margin: 20,
    });
  },
};

const chartjs = {
  init: function () {
    this.config();
  },
  config: function () {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12",
        ],
        datasets: [
          {
            label: [],
            data: [175, 100, 125, 50, 120, 160, 140, 110, 60, 160, 105, 130],
            backgroundColor: [
              "#FE6700",
              "#FE0000",
              "#CD009A",
              "#98009A",
              "#98009A",
              "#0033FF",
              "#006600",
              "#009900",
              "#66CC00",
              "#FFFF00",
              "#F8D101",
              "#FE9A01",
            ],
          },
        ],
      },
      options: {
        barPercentage: 0.6,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 25,
            },
          },
        },
      },
    });
  },
};
