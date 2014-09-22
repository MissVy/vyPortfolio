$(document).ready(function(){
  $('.sh').first().addClass('active');
  $('.sh').hide();    
  $('.active').show();

  $('.rightClick').click(function(){
    $('.active').removeClass('active').addClass('oldActive');    
    if ( $('.oldActive').is(':last-child')) {
        $('.sh').first().addClass('active');
    }
    else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.sh').fadeOut();
    $('.active').fadeIn();
        
        
  });
    
  $('.leftClick').click(function(){
    $('.active').removeClass('active').addClass('oldActive');    
    if ( $('.oldActive').is(':first-child')) {
       $('.sh').last().addClass('active');
    }
    else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.sh').fadeOut();
    $('.active').fadeIn();
  });
    
    
    
    
});