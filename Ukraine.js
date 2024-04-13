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
    ["1986", 51.8],
    ["1987", 51.6],
    ["1988", 51.5],
    ["1989", 51.5],
    ["1990", 51.4],
    ["1991", 51.4],
    ["1992", 51.3],
    ["1993", 51.2],
    ["1994", 51.1],
    ["1995", 51],
    ["1996", 50.9]
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