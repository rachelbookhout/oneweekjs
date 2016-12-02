//set up the url for the spreadsheet that has our data
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1_kyf_ysj0eeV9UNhELki9E9FcAR0WF_URKxO8SThklQ/edit?usp=sharing';

function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

// from http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function get_random_color() {
  function c() {
    var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
      }
    return "#"+c()+c()+c();
  }

//from tabletop.js, runs through the data to make it usable for google charts
// which requires it to an array of arrays with the names of the columns
//as the first item in the array. First two values are column names, third is the color
//of bar and the last is the name of the bar on the column

function showInfo(data, tabletop) {
  var dataSet = [];
  data.forEach(function(data){
    var obj = {};
    obj = [data.Department, Number(data.Amount), get_random_color() ,data.Department];
    dataSet.push(obj);
  })
  dataSet.unshift(['Department', 'Amount in Billions', { role: 'style' }, { role: 'annotation'}])
  drawChart(dataSet);
}

  // Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(init);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
function drawChart(info) {

  // Create the data table.
  var data = google.visualization.arrayToDataTable(info);
  var options = {'title':'Where does our taxes go?',
                  width: 600,
                  height: 400,
                  bar: {groupWidth: "95%"},
                  legend: { position: "none" }
                };


// Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
