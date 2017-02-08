// jQuery(document).ready(function() {
//   jQuery("time.timeago").timeago();
// });

// // 0. initialise previous timestamp
// var lastUpdated = Cookies.get('lastUpdated');
// if (lastUpdated == null) {
//     var newTimestamp = new Date("2017-02-08T12:00:00Z");
//     Cookies.set('lastUpdated', newTimestamp);
//     Cookies.set('hi', 'hello');
//     console.log(Cookies.get());
//     console.log(Cookies.get('hi'));
// } else {
//     console.log("exists");
// }

// 1. If online, fetch new rate & update timestamp
if (navigator.onLine) {
    // $.getJSON("http://api.fixer.io/latest", demo)
    console.log("FETCHING")
    $('#status').html("<span class='green'>●</span>");
} else {
    console.log("OFFLINE")
    $('#status').html("<span class='red'>●</span>");
}

// 2. display rate
// fx.rates = data.rates
// var rate = fx(1).from("GBP").to("USD")
// console.log("api: 1 = $" + rate.toFixed(4))


// 3. display new timestamp & store
// setTimeout(function() {
//     $('#last-updated').html(lastUpdated.toUTCString());

// }, 500);

function fetchOldTimestamp() {
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
}