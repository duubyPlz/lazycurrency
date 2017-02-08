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

var rate = 23.50; // default val

// 1. If online, fetch new rate & update timestamp
if (navigator.onLine) {
    var success = false;
    // 1b. update rate
    // var demo = function(data) {
    //   fx.rates = data.rates;
    //   var rate = fx(1).from("AUD").to("HKD");
    //   console.log("api: 1 = $" + rate.toFixed(2));
    //   rate = rate.toFixed(2);
    //   success = true;
    // }
    // $.getJSON("http://api.fixer.io/latest", demo);
    if (success) {
        $('#status').html("<span class='green'>●</span>");
    } else {
        // online but can't fetch
        $('#status').html("<span class='red'>●</span>");
    }
} // else grey dot

// 2. display rate
$('#ratio').html(rate);

// 3. display new timestamp & store
// setTimeout(function() {
//     $('#last-updated').html(lastUpdated.toUTCString());
// }, 500);

// 4. ux
$('#aud').on('click', function() {
    $('#twd').val("");
    $('#aud').val("");
});

$('#twd').on('click', function() {
    $('#twd').val("");
    $('#aud').val("");
});

$('#aud').on('keyup', function() {
    var toConvert = $('#aud').val();
    console.log(toConvert);
    var toDisplay = convert(toConvert, true);
    $('#twd').val(toDisplay);
});

$('#twd').on('keyup', function() {
    var toConvert = $('#twd').val();
    console.log(toConvert);
    var toDisplay = convert(toConvert, false);
    $('#aud').val(toDisplay);
});

function convert(toConvert, isAud) {
    var returnVal;
    if (isAud) {
        returnVal = toConvert * rate;
        console.log(toConvert + " * " + rate + " = " + returnVal);
    } else {
        returnVal = toConvert / rate;
        console.log(toConvert + " / " + rate + " = " + returnVal);
    }
    return returnVal;
}

// function fetchOldTimestamp() {
//     var fileName = 'assets/txt/lastUpdated.txt';

//     try {
//         $.get(fileName, function(data) {
//             console.log(fileName);
//             console.log(data);
//             if (data.match(/^20[0-9]{2}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z/)) {
//                 // valid date string
//                 console.log("VALID");
//                 lastUpdated = new Date(data);
//                 console.log('last updated: ' + lastUpdated);
//             } else {
//                 console.log('INVALID');
//             }
//         }, 'text');
//     } catch (e) {
//         console.warn(e);
//     }
// }