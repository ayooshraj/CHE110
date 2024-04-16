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
    ["2014", 1307],
    ["2015", 1322],
    ["2016", 1338],
    ["2017", 1354],
    ["2018", 1369],
    ["2019", 1383],
    ["2020", 1396],
    ["2021", 1407],
    ["2022", 1417],
    ["2023", 1428],
    ["2024", 1441]
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
<<<<<<< HEAD
    colors: ['#83cfc1']
=======
    backgroundColor:'83cfc1',
    colors: ['#000']
>>>>>>> b3f32456c66befa1ca95ac26ba0f9d55980ef1f0
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