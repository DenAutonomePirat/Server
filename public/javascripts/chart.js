
$(document).ready(function() {
  //Already loaded!

var s = require('smoothie');



var smoothie = new s.SmoothieChart();
smoothie.streamTo(document.getElementById("chart"));

// Data
var line1 = new TimeSeries();
var line2 = new TimeSeries();

// Add a random value to each line every second
setInterval(function() {
  line1.append(new Date().getTime(), Math.random());
  line2.append(new Date().getTime(), Math.random());
}, 1000);

// Add to SmoothieChart
smoothie.addTimeSeries(line1);
smoothie.addTimeSeries(line2);
alert("doneJohn");
});
