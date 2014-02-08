jQuery(document).ready(function(){

  // Prepare composed shapes
  $('.spike').children('div:lt(4)').wrapAll("<div class='pyramid'></div>");
  $('.spike').children('div:gt(0)').wrapAll("<div class='pyramid'></div>");
  
  // List shapes
  var shapes=$('.cuboid,.cylinder,.sphere,.prism,.pyramid,.cog'); //,.spike,'.pyramid3'
  
  // Generate child divs
  shapes.each(function() {
    var neededChildDivs = $(this).attr('class').match(/[ ^]+(\d+)-div/);
    if (neededChildDivs != null){
      var existingChildDivs = $(this).length;
      var add = neededChildDivs[1] - existingChildDivs;
      if (add > 0){
        for (i = 0; i <= add; i++ ) {
          $(this).append('<div></div>');
        }      
      }
    }
  });
  
  // Add global classes
  var faces=shapes.children('div');
  shapes.addClass('shape');
  faces.addClass('face');
  
  // Add specific divs depending of shape type
  //faces.wrapInner('<div class="photon-shader"></div>'); 
  
  $('.prism').children('div:nth-child(3)').wrap('<div class="face-wrapper"></div>');
  $('.prism').children('div:nth-child(4)').wrap('<div class="face-wrapper"></div>');
  
  $('.pyramid').children('div:nth-child(1)').wrap('<div class="face-wrapper"></div>');
  $('.pyramid').children('div:nth-child(2)').wrap('<div class="face-wrapper"></div>');
  $('.pyramid').children('div:nth-child(3)').wrap('<div class="face-wrapper"></div>');
  $('.pyramid').children('div:nth-child(4)').wrap('<div class="face-wrapper"></div>');
  /*$('.pyramid').children('div:lt(4)').each(function(){
    $(this).wrap('<div class="face-wrapper"></div>');
  });*/
  
  $('.sphere').children('div').wrap('<div class="face-wrapper"></div>');
  
});