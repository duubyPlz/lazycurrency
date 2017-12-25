// init
jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});

// toggle all tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// 0. initialise previous timestamp
var lastUpdated = Cookies.get('lastUpdated');
if (lastUpdated == null) {
    console.log('ASDF');
    lastUpdated = new Date("2017-02-08T12:00:00Z");
    Cookies.set('lastUpdated', lastUpdated);
    Cookies.set('name', 'value');
} else {
    console.log("exists");
}

var rate = 23.50; // default val
var success = false;

    var herp = Cookies.get('name');
    console.log(Cookies.get());
    console.log(Cookies.get('lastUpdated'));
    console.log(herp);

// 1. If online, fetch new rate & update timestamp
if (navigator.onLine) {
    // 1b. update rate
    var demo = function(data) {
      fx.rates = data.rates;
      rate = fx(1).from("AUD").to("HKD");
      console.log("api: 1 = $" + rate.toFixed(3));

      // 2. Display rate
      $('#ratio').html(rate.toFixed(3));

      success = true;
    }
    $.getJSON("http://api.fixer.io/latest", demo);

    setTimeout(function() {
        console.log(success);
        if (success) {
            $('#status').html("<span class='green'>&#x25cf;</span>");
        } else {
            // online but can't fetch
            $('#status').html("<span class='red'>&#x25cf;</span>");
        }

        // 3. display new timestamp & store
        $('#last-updated').html(lastUpdated.toUTCString());
    }, 500);
} // else grey dot

// 4. ux
// > a) input fields
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

// > b) currency selector
updateCurrencyDisplay();

$('.currency').on('click', function() {
    var currentCurrency = $(this);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    updateCurrencyDisplay();
})

function updateCurrencyDisplay() {
    var activeCurrency = $('.currency.active');
    if (activeCurrency.hasClass('currency-twd')) {
        $('.currency-picker').css('transform', 'translate(200px)');
    } else if (activeCurrency.hasClass('currency-myr')) {
        $('.currency-picker').css('transform', 'translate(100px)');
    } else if (activeCurrency.hasClass('currency-hkd')) {
        $('.currency-picker').css('transform', 'translate(0px)');
    }
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