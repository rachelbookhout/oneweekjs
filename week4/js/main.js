  //window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1_kyf_ysj0eeV9UNhELki9E9FcAR0WF_URKxO8SThklQ/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
      console.log(data);
      drawChart(data);
    //data.forEach(function(data){
      // data.whatever
      //data.whatever
  }

  // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(init);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(info) {
        console.log("I'm drawing the chart!");
       var dataArray = [];
       dataArray.push(['Department', 'Amount in Billions', { role: 'annotation' }]);
      //create an array for data
      info.forEach(function(data){
        var dataSet = [data.department, data.amount, data.amount];
        dataArray.push(dataSet);
      })

        // Create the data table.
        //var data = google.visualization.arrayToDataTable([
         //['Element', 'Density', { role: 'style' }, { role: 'annotation' } ],
         //['Copper', 8.94, '#b87333', 'Cu' ],
         //['Silver', 10.49, 'silver', 'Ag' ],
         //['Gold', 19.30, 'gold', 'Au' ],
         //['Platinum', 21.45, 'color: #e5e4e2', 'Pt' ]
      //]);
        var data = google.visualization.arrayToDataTable(dataArray);
        // Set chart options
        console.log(data);
        var options = {'title':'Where does our taxes go?',
                        width: 600,
                        height: 400,
                        bar: {groupWidth: "95%"},
                        legend: { position: "none" },
                      };


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
