
// Accordions and Tabs from what we did for Slate.
// Feel free to discard.

$(document).ready(function(){
  $('<ul class="tabs"><ul class="header"></ul></ul>').insertAfter('.tab-toggle');
  $('.tab-toggle .acc-button').each(function(){
    var content = $(this).clone().wrap('<div>').parent().html();
    $(this).parent().siblings('.tabs').children('.header').append(content);
  });
  $('.tab-toggle .acc-panel').each(function(){
    var content = $(this).clone().wrap('<div>').parent().html();
    $(this).parent().siblings('.tabs').append(content);
  });
  $('.tabs').each(function(){
    $(this).find('.acc-panel').first().addClass('active');
    $(this).find('.acc-button').first().addClass('selected');
  });
  $('.accordion .acc-button').click(function(){
    if ($(this).find('.fa').is(':visible')) {
      var buttonID = $(this).attr('id');
      if ($(this).parent('.link-list').length) {
        $('.link-list .acc-button').not(this).removeClass('selected');
        var accPanel = $('.link-list .acc-panel');
      }
      else {
        $(this).siblings('.acc-button').removeClass('selected');
        var accPanel = $(this).siblings('.acc-panel');
      }
      $(this).toggleClass('selected');
      $(accPanel).each(function(){
        $(this).addClass('test');
        var id = $(this).attr('id');
        if (id !== buttonID) {
          $(this).slideUp(175);
        }
        else {
          $(this).slideToggle(175);
        }
      });
    }
  });
  $('.header > .acc-button').click(function(){
    $(this).siblings('.acc-button').removeClass('selected');
    $(this).addClass('selected');
    var buttonID = $(this).attr('id');
    var tabPanel = $(this).parent('.header').siblings('.acc-panel');
    $(tabPanel).each(function(){
      var id = $(this).attr('id');
      $(this).removeClass('active');
      if (id == buttonID) {
        $(this).toggleClass('active');
      }
    });
  });
});