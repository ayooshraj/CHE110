// Loading of the Google Charts API
google.charts.load('current', {'packages':['corechart']});

// Callback on when Google Charts is open
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Creating the data table
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Population (in millions)');
  data.addRows([
    ["2015", 324],
    ["2016", 327],
    ["2017", 329],
    ["2018", 332],
    ["2019", 334],
    ["2020", 335],
    ["2021", 336],
    ["2022", 338],
    ["2023", 339],
    ["2024", 341]
  ]);

  // Setting the chart options
  var options = {
    hAxis: {
      title: 'Year'
    },
    vAxis: {
      title: 'Population (in millions)'
    },
    pointSize: 10,
    pointShape: 'circle',
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    },
    colors: ['#008000']
  };

  var chart = new google.visualization.LineChart(document.getElementById('lineChart'));
  google.visualization.events.addListener(chart, 'select', selectHandler);
  chart.draw(data, options);

  // Scrolling to its respective content
  function selectHandler() {
    var selection = chart.getSelection();
    if (selection.length > 0) {
      var row = selection[0].row;
      var id = 'info' + (row + 1);
      var section = document.getElementById(id);
      section.classList.add('highlight');
      setTimeout(function() {
        section.classList.remove('highlight');
      }, 1010);
      section.scrollIntoView({behavior: 'smooth'});
    }
  }
}