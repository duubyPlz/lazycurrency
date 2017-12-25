// init
jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
  console.log("LOADED");
});

// toggle all tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// // 0. initialise previous timestamp
// var lastUpdated = Cookies.get('lastUpdated');
// if (lastUpdated == null) {
//     lastUpdated = jQuery.timeago(new Date());
//     Cookies.set('lastUpdated', lastUpdated);
//     Cookies.set('name', 'value');
// } else {
//     console.log("exists");
// }

// var herp = Cookies.get('name');
// console.log(Cookies.get());
// console.log(Cookies.get('lastUpdated'));
// console.log(herp);

var rate = 23.50; // default val
var success = false;

// 4. ux
// > a) input fields
$('#input-root').on('click', function() {
    $('#input-convert').val("");
    $('#input-root').val("");
});

$('#input-convert').on('click', function() {
    $('#input-convert').val("");
    $('#input-root').val("");
});

$('#input-root').on('keyup', function() {
    var toConvert = $('#input-root').val();
    var toDisplay = convert(toConvert, true);
    $('#input-convert').val(toDisplay);
});

$('#input-convert').on('keyup', function() {
    var toConvert = $('#input-convert').val();
    var toDisplay = convert(toConvert, false);
    $('#input-root').val(toDisplay);
});

// > b) currency selector
updateCurrencyDisplay();

$('.currency').on('click', function() {
    $('#input-convert').val("");
    $('#input-root').val("");

    var currentCurrency = $(this);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    updateCurrencyDisplay();
});

function fetchData(currency) {
    if (navigator.onLine) {
        // skip twd
        if (currency == 'TWD') {
            rate = 23.50;
            success = false;
        } else {        
            // 1b. update rate
            var demo = function(data) {
              fx.rates = data.rates;
              rate = fx(1).from("AUD").to(currency);
              console.log("api: 1 = $" + rate.toFixed(3));
              success = true;
            }
            $.getJSON("http://api.fixer.io/latest", demo);
        }

        setTimeout(function() {
            $('#ratio').html(rate.toFixed(3));
            if (success) {
                // 3. display new timestamp & store
                // proper usage:
                // https://stackoverflow.com/questions/5839720/how-do-i-use-jquery-timeago-to-live-update
                $("#last-updated").addClass('timeago');

                $('.timeago').timeago('update', new Date());
                $('#status').html("<span class='green'>&#x25cf;</span>");
            } else {
                // online but can't fetch
                $('#status').html("<span class='red'>&#x25cf;</span>");
                $("#last-updated").removeClass('timeago');
                $('#last-updated').html('hardcoded &#x25cf;&#xFE3F;&#x25cf;');
            }
        }, 1000);
    } // else not online, grey dot
    // then step 1: hard code values
    // step 2: instead of hard coded values,
    // use values from cookies from a while ago 
    // (better than "hardcoded")
}

function updateCurrencyDisplay() {
    var activeCurrency = $('.currency.active');
    var symbol = activeCurrency.attr('id');

    var width = activeCurrency.width();
    var doubleWidth = (activeCurrency.width() * 2) - 7;
    var translateString = 'translate(' + width + 'px)';
    var doubleTranslateString = 'translate(' + doubleWidth + 'px)';
    if (symbol == 'TWD') {
        $('.currency-picker').css('transform', doubleTranslateString);
    } else if (symbol == 'MYR') {
        $('.currency-picker').css('transform', translateString);
    } else if (symbol == 'HKD') {
        $('.currency-picker').css('transform', 'translate(0px)');
    }
    fetchData(symbol);
}

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

// use cookies instead
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