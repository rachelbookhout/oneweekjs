  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1_kyf_ysj0eeV9UNhELki9E9FcAR0WF_URKxO8SThklQ/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert("Successfully processed!")
    console.log(data);
  }
