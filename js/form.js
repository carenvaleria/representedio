$(document).ready(function(){

  $('.btnNext').click(function(){
   $('.nav-tabs > .active').next('li').find('a').trigger('click');
   console.log("next");
  });

   $('.btnPrevious').click(function(){
   $('.nav-tabs > .active').prev('li').find('a').trigger('click');
  });

});
