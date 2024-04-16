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
    ["2015",  157],
    ["2016", 159],
    ["2017", 161],
    ["2018", 163],
    ["2019", 165],
    ["2020", 167],
    ["2021", 169],
    ["2022", 171],
    ["2023", 172],
    ["2024", 174]
  ]);

  // Setting the chart options
  var options = {
    hAxis: {
      title: 'Year',
      textStyle: {
        color: '#ffffff'
      },
      titleTextStyle: {
        color: '#ffffff'
      }
    },
    vAxis: {
      title: 'Population (in millions)',
      textStyle: {
        color: '#ffffff'
      },
      titleTextStyle: {
        color: '#ffffff'
      },
      titleTextStyle: {
        color: '#ffffff',
        italic: false,
        fontSize: 14
      }
    },
    pointSize: 10,
    pointShape: 'circle',
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true
    },
    backgroundColor: '#121826',
    colors: ['#83cfc1']
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