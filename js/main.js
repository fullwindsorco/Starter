$(document).ready(function() {

// Tabs

  $('.tabs > div').parent().next('.panels').children('div').first().addClass('current');
  $('.tabs > div').first().addClass('current');
  $('.tabs > div').click(function() {
    var indexTab = $( ".tabs div" ).index( this );
    $('.tabs > div').removeClass('current');
    $(this).addClass('current');
    $(this).parent().next('.panels').children('div').removeClass('current');
    $(this).parent().next('.panels').children('div').eq(indexTab).addClass('current');
  });


// Accordions

  $('.accButton').click(function() {
    $(this).addClass('current');
    $(this).toggleClass('arrowUp');
    $(this).siblings('.accButton').removeClass('arrowUp');
    $(this).not().next().siblings('.accPanel').slideUp();
    $(this).next('.accPanel').slideToggle(200);
  });
});