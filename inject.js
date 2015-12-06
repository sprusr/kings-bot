


(function() {
  var ticketId = '41815604';

  var setup = function() {
    $('#ticket_information_wrapper').append('<div style="text-align: center; margin-top: 30px;"><img src="http://i.imgur.com/Tk509p6.gif"><h3>Ready to snipe...</h3></div>');

    alert('all working');
  }

  var loop = function() {
    var refreshInterval = setInterval(function() {
      var elem = $("body").find('#ticket_table');

      $(elem).load(location.href + ' #ticket_table');

      console.log('refreshed');

      if(detect()) {
        clearInterval(refreshInterval);
        get();
      }
    }, 2000);
  }

  var detect = function() {
    var elem = $("body").find('[id*=quant_' + ticketId + '_None]');

    if(elem.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  var get = function() {
    $('[id*=quant_' + ticketId + '_None]').val('1');
    $('.js-checkout-button')[0].click();
  }

  setup();
  loop();
})();
