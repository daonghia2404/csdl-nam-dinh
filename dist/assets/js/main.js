window.onload = () => {
  navigation.init();
  chartjs.init();
  customSelect2.init();
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
          item.classList.toggle("visible");
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
    // this.configChartJs();
    this.configHighChart();
  },
  configChartJs: function () {
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
  configHighChart: function () {
    const chartContainer = document.querySelector("#myChart");
    if (chartContainer) {
      Highcharts.chart("myChart", {
        chart: {
          type: "column",
        },
        title: {
          align: "left",
          text: "Browser market shares. January, 2022",
        },
        subtitle: {
          align: "left",
          text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
        },
        accessibility: {
          announceNewData: {
            enabled: true,
          },
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "Total percent market share",
          },
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}%",
            },
          },
        },

        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
        },

        series: [
          {
            name: "Browsers",
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 63.06,
                drilldown: "Chrome",
              },
              {
                name: "Safari",
                y: 19.84,
                drilldown: "Safari",
              },
              {
                name: "Firefox",
                y: 4.18,
                drilldown: "Firefox",
              },
              {
                name: "Edge",
                y: 4.12,
                drilldown: "Edge",
              },
              {
                name: "Opera",
                y: 2.33,
                drilldown: "Opera",
              },
              {
                name: "Internet Explorer",
                y: 0.45,
                drilldown: "Internet Explorer",
              },
              {
                name: "Other",
                y: 1.582,
                drilldown: null,
              },
            ],
          },
        ],
        drilldown: {
          breadcrumbs: {
            position: {
              align: "right",
            },
          },
          series: [
            {
              name: "Chrome",
              id: "Chrome",
              data: [
                ["v65.0", 0.1],
                ["v64.0", 1.3],
                ["v63.0", 53.02],
                ["v62.0", 1.4],
                ["v61.0", 0.88],
                ["v60.0", 0.56],
                ["v59.0", 0.45],
                ["v58.0", 0.49],
                ["v57.0", 0.32],
                ["v56.0", 0.29],
                ["v55.0", 0.79],
                ["v54.0", 0.18],
                ["v51.0", 0.13],
                ["v49.0", 2.16],
                ["v48.0", 0.13],
                ["v47.0", 0.11],
                ["v43.0", 0.17],
                ["v29.0", 0.26],
              ],
            },
            {
              name: "Firefox",
              id: "Firefox",
              data: [
                ["v58.0", 1.02],
                ["v57.0", 7.36],
                ["v56.0", 0.35],
                ["v55.0", 0.11],
                ["v54.0", 0.1],
                ["v52.0", 0.95],
                ["v51.0", 0.15],
                ["v50.0", 0.1],
                ["v48.0", 0.31],
                ["v47.0", 0.12],
              ],
            },
            {
              name: "Internet Explorer",
              id: "Internet Explorer",
              data: [
                ["v11.0", 6.2],
                ["v10.0", 0.29],
                ["v9.0", 0.27],
                ["v8.0", 0.47],
              ],
            },
            {
              name: "Safari",
              id: "Safari",
              data: [
                ["v11.0", 3.39],
                ["v10.1", 0.96],
                ["v10.0", 0.36],
                ["v9.1", 0.54],
                ["v9.0", 0.13],
                ["v5.1", 0.2],
              ],
            },
            {
              name: "Edge",
              id: "Edge",
              data: [
                ["v16", 2.6],
                ["v15", 0.92],
                ["v14", 0.4],
                ["v13", 0.1],
              ],
            },
            {
              name: "Opera",
              id: "Opera",
              data: [
                ["v50.0", 0.96],
                ["v49.0", 0.82],
                ["v12.1", 0.14],
              ],
            },
          ],
        },
      });
    }
  },
};

const customSelect2 = {
  init: function () {
    this.config();
  },
  config: function () {
    const allSelects = document.querySelectorAll(".js-select2");
    allSelects.forEach((select) => {
      const options = JSON.parse(select.dataset.options);
      $(select).select2(options);
    });
  },
};
