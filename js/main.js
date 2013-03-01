$('.home #heading, .home .nav, #container, #copyright-footer').hide();

$(window).on('load', function() {
  $('#loader-container').fadeOut(200).queue(function() {
    $('#container').fadeIn(1000).queue(function() {

      /* Need a friggin workaround for the twitter button as it doesn't show @username when display: none is set. */
      $('#contact-twitter .contact-box').empty().html('<a href="https://twitter.com/AThingOfJoy" class="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="true">Follow @AThingOfJoy</a>\
        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>')
      $('.home #heading, .home .nav, #copyright-footer').fadeIn(1500);
    });
  });
});
