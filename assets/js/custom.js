var lastUpdated = null;

var fileName = 'assets/txt/lastUpdated.txt';

try {
    $.get(fileName, function(data) {
        console.log(fileName);
        console.log(data);
        if (data.match(/^20[0-9]{2}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z/)) {
            // valid date string
            console.log("VALID");
            lastUpdated = new Date(data);
            console.log('last updated: ' + lastUpdated);
        } else {
            console.log('INVALID');
        }
    }, 'text');
} catch (e) {
    console.warn(e);
}

var demo = function(data) {
  fx.rates = data.rates
  var rate = fx(1).from("GBP").to("USD")
  console.log("api: 1 = $" + rate.toFixed(4))
}

if (navigator.onLine) {
    $.getJSON("http://api.fixer.io/latest", demo)
    console.log("FETCHING")
} else {
    console.log("OFFLINE")
}