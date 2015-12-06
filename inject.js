


(function() {
  var ticketId = '41815604';

  var setup = function() {
    $('#ticket_information_wrapper').append('<div style="text-align: center; margin-top: 30px;"><img src="http://i.imgur.com/Tk509p6.gif"><h3>Ready to snipe...</h3></div>');

    alert('all working');
  }

  var loop = function() {
    var refreshInterval = setInterval(function() {
      //var elem = $("body").find('[id*=quant_' + ticketId + '_None]');
      var elem = $("body").find('.ticket-box-status');

      $(elem).load(location.href + " [data-automation=" + elem.attr('data-automation') + ']');

      console.log('refreshed');

      if(detect()) {
        clearInterval(refreshInterval);
        get();
      }
    }, 1000);
  }

  var detect = function() {
    var elem = $("body").find('[id*=quant_' + ticketId + '_None]');
    //var elem = $("body").find('.js-ticket-box');

    if(elem.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  var get = function() {
    //$('[id*=quant_' + ticketId + '_None]').val('1');
    //$('.js-checkout-button')[0].click();
    $('.js-register-button')[0].click();
  }

  setup();
  loop();
})();
