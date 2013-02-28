$('.home #heading, .home .nav, #container').hide();

$('document').ready(function() {
  $('#container').fadeIn(1000).queue(function() {
    $('.home #heading, .home .nav').fadeIn(1500);
  });
});
