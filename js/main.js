$(document).ready(function(){
    $('.team__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2700,
        dots: true,
        responsive: [
            {
              breakpoint: 875,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      });

      $('a.gallery__item').fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'	:	700, 
		    'speedOut' :	400,
        'changeSpeed' : 700
      });

      
      });