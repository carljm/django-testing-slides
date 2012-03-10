var timerSetUp = false;
var timerRunning = false;
var intervalRunning = false;
var seconds = 0;
var totalMinutes = 35;

function setUpTimer()
{
  if (timerSetUp) { return; }

  timerSetUp = true;

  $("#slideInfo").after('  <span id="timerInfo"></span> &nbsp; <img id="progressIcon"/>');

  $(document).keydown(function(event) {
    var key = event.keyCode;
    if (event.ctrlKey || event.altKey || event.metaKey) { return; }

    if (key == 89) // y for timer
    {
      toggleTimer();
    }
  });
}

function toggleTimer()
{
  if (!timerRunning) {
    timerRunning = true
    $("#timerInfo").text(timerStatus(0));
    seconds = 0
    if (!intervalRunning) {
      intervalRunning = true
      setInterval(function() {
        if (!timerRunning) { return; }
        seconds++;
        $("#timerInfo").text(timerStatus(seconds));
      }, 1000);  // fire every minute
    }
  } else {
    seconds = 0
    timerRunning = false
    $("#timerInfo").text('')
  }
}

function timerStatus(seconds) {
  var minutes = Math.round(seconds / 60);
  var left = (totalMinutes - minutes);
  var percent = Math.round((minutes / totalMinutes) * 100);
  var progress = getSlidePercent() - percent;
  setProgressIcon(progress);
  return ' - (' + minutes + '/' + left + ':' + percent + '%)';
}

function setProgressIcon(progress) {
  if(progress > 10) {    
    $('#progressIcon').attr('src', '/image/timer/flag_blue.png')
  } else if (progress > 0) {
    $('#progressIcon').attr('src', '/image/timer/flag_green.png')
  } else if (progress > -10) {
    $('#progressIcon').attr('src', '/image/timer/flag_yellow.png')
  } else {
    $('#progressIcon').attr('src', '/image/timer/flag_red.png')
  }
}

$(function(){
  setUpTimer();
});
