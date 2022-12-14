$( document ).ready(function() {
    console.log( "ready!" );

        // $('#extra-info-1').click(function() {
        //     console.log( "Jonguuuh werk nou" );
        //     $('html, body').animate({
        //     scrollTop: $(".paragraph-style2").offset().top
        //     }, 1000)
        // });  

        $('body#who').on('click', '#extra-info-1', function() {
            console.log('Hey3');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".extravert").offset().top
            }, 500);
            });
            
        $('body#who').on('click', '#acc1', function() {
            console.log('Hey3');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#acc1-info").offset().top
            }, 500);
            });


        $('body#who').on('click', '#extra-info-2', function() {
            console.log('Hey2');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".open-minded").offset().top
            }, 500);
            });

        $('body#who').on('click', '#acc2', function() {
            console.log('Hey3');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#acc2-info").offset().top
            }, 500);
            });

        $('body#who').on('click', '#extra-info-3', function() {
            console.log('Hey2');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".empath").offset().top
            }, 500);
            });

        $('body#who').on('click', '#acc3', function() {
            console.log('Hey3');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#acc3-info").offset().top
            }, 500);
            });

        $('body#who').on('click', '#extra-info-4', function() {
            console.log('Hey2');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".decisive").offset().top
            }, 500);
            });


        $('body#who').on('click', '#acc4', function() {
            console.log('Hey3');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#acc4-info").offset().top
            }, 500);
            });

        $('body#who').on('click', '#extra-info-5', function() {
            console.log('Hey2');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".self-conscious").offset().top
            }, 500);
            });

        $('body#who').on('click', '#acc5', function() {
            console.log('Hey3');
            //top-page
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#acc5-info").offset().top
            }, 500);
            });

        

              // extra pagina's click // 
        $('#extra-info-1').click(function(event){
            event.preventDefault();

            if ($(".extravert").hasClass( 'open' )) {
                $(".extravert").removeClass('open');

            } else {
                $(".extravert").addClass('open');
                $(".open-minded").removeClass('open');
                $(".empath").removeClass('open');
                $(".decisive").removeClass('open');
                $(".self-conscious").removeClass('open');
            } 
        });

        $('#extra-info-2').click(function(event){
            event.preventDefault();

            if ($(".open-minded").hasClass( 'open' )) {
                $(".open-minded").removeClass('open');

            } else {
                $(".open-minded").addClass('open');
                $(".extravert").removeClass('open');
                $(".empath").removeClass('open');
                $(".decisive").removeClass('open');
                $(".self-conscious").removeClass('open');

            }
        });
        $('#extra-info-3').click(function(event){
            event.preventDefault();

            if ($(".empath").hasClass( 'open' )) {
                $(".empath").removeClass('open');

            } else {
                $(".empath").addClass('open');
                $(".extravert").removeClass('open');
                $(".open-minded").removeClass('open');
                $(".decisive").removeClass('open');
                $(".self-conscious").removeClass('open');

            }
        });
        $('#extra-info-4').click(function(event){
            event.preventDefault();

            if ($(".decisive").hasClass( 'open' )) {
                $(".decisive").removeClass('open');

            } else {
                $(".decisive").addClass('open');
                $(".extravert").removeClass('open');
                $(".open-minded").removeClass('open');
                $(".empath").removeClass('open');
                $(".self-conscious").removeClass('open');

            }
        });
        $('#extra-info-5').click(function(event){
            event.preventDefault();

            if ($(".self-conscious").hasClass( 'open' )) {
                $(".self-conscious").removeClass('open');

            } else {
                $(".self-conscious").addClass('open');
                $(".extravert").removeClass('open');
                $(".open-minded").removeClass('open');
                $(".empath").removeClass('open');
                $(".decisive").removeClass('open');

            }
        });

        
    /* first prev next buttons */ 
    var currendIndex = 0;
    var divLengte = $('.container-work').length;
    $('#next').click(function(event){
        event.preventDefault();
        console.log( currendIndex, divLengte, $(".container-work").eq(currendIndex).offset().top);
        currendIndex++;
    if (currendIndex >= divLengte) currendIndex = 0;
    $("html, body").animate({
        scrollTop: $(".container-work").eq(currendIndex).offset().top - 0
    
    }, 700);
    });
    
    $('#prev').click(function(event){
        event.preventDefault();
        currendIndex--;
        if(currendIndex < 0) currendIndex = divLengte - 1;
        $("html, body").animate({
            scrollTop: $(".container-work").eq(currendIndex).offset().top - 0
        },700);
    });

    // disable scroll//
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      var html = jQuery('body#work');
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    });/* einde js*/ 


    /* second prev next buttons */ 
    var Indexproject = 0;
    var projectpage = $('.container-project').length;
    $('#next2').click(function(event){
        event.preventDefault();
        console.log( "works2" );
        Indexproject++;
    if (Indexproject >= projectpage) Indexproject = 0;
    $("html, body").animate({
        scrollTop: $(".container-project").eq(Indexproject).offset().top - 0
        
    
    }, 700);
    });
    
    $('#prev2').click(function(event){
        event.preventDefault();
        Indexproject--;
        if(Indexproject < 0) Indexproject = projectpage - 1;
        $("html, body").animate({
            scrollTop: $(".container-project").eq(Indexproject).offset().top - 0
        },700);
    });

     // disable scroll//
     var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      var html = jQuery('body#projects');
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
  
/* einde js*/ 

//click zoom in// 
        $( ".item-1, .item-2, .item-3, .item-4, .item-5, .item-6, .item-7, .item-8, .item-9, .item-10").click(function() {
            if($(this).hasClass('open')){
                $(this).removeClass('open')
            }
            else{
                $(this).addClass('open')
            };

            console.log('click does not work');
        });

        
        

        // Pie chart // 
        $('.chart').easyPieChart({
            scaleColor: "white",
            lineWidth: 10,
            lineCap: 'butt',
            barColor: '#B1B1B1',
            trackColor:	"white",
            size: 120,
            animate: 2200
          });
          console.log('werk dan toch');
         // einde pie chart resolutie 

         
          // scenes scroll + hsl hue //
          

        var scenes = $('.container-work');
        scenes.each(function(index){

        var hue = 332;
        var sat = 32;
        var light = 100-1*index;
        var kleur = "hsl("+ hue+","+ sat + "%," + light +"%)";

        $(this).css({"background": kleur })
        
        $(window).scroll(function() {
            $.fn.isInViewport = function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
              
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
              
                return elementBottom > viewportTop && elementTop < viewportBottom;
              };
            
        
        }); //einde scroll

          // scenes scroll + hsl hue //
          
        //   var projectscenes = $('.container-project');
        //   projectscenes.each(function(index){
  
        //   var hue = 20;
        //   var sat = 100;
        //   var light = 90-5*index;
        //   var kleur = "hsl("+ hue+","+ sat + "%," + light +"%)";
  
        //   $(this).css({"background": kleur })
          
        //   $(window).scroll(function() {
        //       $.fn.isInViewport = function() {
        //           var elementTop = $(this).offset().top;
        //           var elementBottom = elementTop + $(this).outerHeight();
                
        //           var viewportTop = $(window).scrollTop();
        //           var viewportBottom = viewportTop + $(window).height();
                
        //           return elementBottom > viewportTop && elementTop < viewportBottom;
        //         };
              
          
        //   }); //einde scroll
    
        //slider//

    }); //einde 

    document.addEventListener('DOMContentLoaded', function() {
        new GreenAudioPlayer('.example');
      });

      $( "#accordion" ).accordion({ animate: 0, heightStyle: "content" ,}); // de accordion functie van jQuery UI
    
        $('#accordion').css({
            'margin-bottom': '1em',
            'margin-top': '1em',
           
        })
        $("#accordion").accordion({ header: "h3", collapsible: true, active: false });

        // unmute audio toggle

        
    
       