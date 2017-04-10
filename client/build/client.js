// $(document).ready(function() {

//   $('#nav').affix({
//     offset: {
//       top: $('header').height()
//     }
//   }); 

//   $('#nav').on('affix.bs.affix', function () {
//     var navHeight = $('.navbar').outerHeight(true);         
//     $('#nav + .container').css('margin-top', navHeight);
//   });
          
//   $('#nav').on('affix-top.bs.affix', function () {
//     $('#nav + .container').css('margin-top', 0);
//   });


//   $('#sidebar').affix({
//     offset: {
//       top: 17
//     }
//   }); 
// });

$(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      
      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
      })
    });