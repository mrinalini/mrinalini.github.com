$('.home #heading, .home .nav, #container, #copyright-footer').hide();

$(window).on('load', function() {
  $('#loader-container').fadeOut(200).queue(function() {
    $('#container').fadeIn(1000).queue(function() {
      $('.home #heading, .home .nav, #copyright-footer').fadeIn(1500);
    });
  });
});
