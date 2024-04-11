// Loading of the Google Charts API
google.charts.load('current', {'packages':['corechart']});

// Callback on when Google Charts is open
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Creating the data table
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Year');
  data.addColumn('number', 'Population (in millions)');
  data.addRows([
    [1940,  73],
    [1941, 73.1],
    [1942, 73.2],
    [1943, 73.4],
    [1944, 73.5],
    [1945, 73.2],
    [1946, 71.9],
    [1947, 71.3],
    [1948, 70.6],
    [1949, 69.9],
    [1950, 69.3]
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