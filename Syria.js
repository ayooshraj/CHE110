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
    ["2010",  21],
    ["2011", 21.2],
    ["2012", 20.7],
    ["2013", 18.5],
    ["2014", 17],
    ["2015", 16.1],
    ["2016", 15.5],
    ["2017", 14.6],
    ["2018", 14],
    ["2019", 13.2],
    ["2020", 13]
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
    colors: ['#ff0000']
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