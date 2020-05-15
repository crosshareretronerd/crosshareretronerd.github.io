/* ===================================================================
 *            _                                _ 
          | |                              | |
  _ __ ___| |_ _ __ ___  _ __   ___ _ __ __| |
 | '__/ _ \ __| '__/ _ \| '_ \ / _ \ '__/ _` |
 | | |  __/ |_| | | (_) | | | |  __/ | | (_| |
 |_|  \___|\__|_|  \___/|_| |_|\___|_|  \__,_|
                                              
                                              
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* Preloader
    * -------------------------------------------------- */
    var ssPreloader = function() {
        
        $("html").addClass('ss-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        
        });
    };





   /* Initialize
    * ------------------------------------------------------ */
    (function clInit() {

        ssPreloader();

    })();

})(jQuery);