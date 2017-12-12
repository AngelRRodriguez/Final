
// Initialize Smooth scrolling

var scroll = new SmoothScroll('a[href*="#"]');

// Initialize Smooth scrolling



function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).on('scroll', function() {
    

    if(isScrolledIntoView($('.columna1')) && scroll)
    {

        (function($) {
            $.fn.countTo = function(options) {
                // merge the default plugin settings with the custom options
                options = $.extend({}, $.fn.countTo.defaults, options || {});
        
                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(options.speed / options.refreshInterval),
                    increment = (options.to - options.from) / loops;
        
                return $(this).each(function() {
                    var _this = this,
                        loopCount = 0,
                        value = options.from,
                        interval = setInterval(updateTimer, options.refreshInterval);
        
                    function updateTimer() {
                        value += increment;
                        loopCount++;
                        $(_this).html(value.toFixed(options.decimals));
        
                        if (typeof(options.onUpdate) == 'function') {
                            options.onUpdate.call(_this, value);
                        }
        
                        if (loopCount >= loops) {
                            clearInterval(interval);
                            value = options.to;
        
                            if (typeof(options.onComplete) == 'function') {
                                options.onComplete.call(_this, value);
                            }
                        }
                    }
                });
            };
        
            $.fn.countTo.defaults = {
                from: 0,  // the number the element should start at
                to: 100,  // the number the element should end at
                speed: 1000,  // how long it should take to count between the target numbers
                refreshInterval: 100,  // how often the element should be updated
                decimals: 0,  // the number of decimal places to show
                onUpdate: null,  // callback method for every time the element is updated,
                onComplete: null,  // callback method for when the element finishes updating
            };
        })(jQuery);
        
        jQuery(function($) {
            $('.five-columns-bg h3 .columna1').countTo({
                from: 00,
                to: 128,
                speed: 5000,
                refreshInterval: 50,
                onComplete: function(value) {
                    console.debug(this);
                }
            });
        
            $('.five-columns-bg h3 .columna2').countTo({
                from: 00,
                to: 66,
                speed: 5000,
                refreshInterval: 50,
                onComplete: function(value) {
                    console.debug(this);
                }
            });
        
            $('.five-columns-bg h3 .columna3').countTo({
                from: 00,
                to: 27,
                speed: 5000,
                refreshInterval: 50,
                onComplete: function(value) {
                    console.debug(this);
                }
            });
        
            $('.five-columns-bg h3 .columna4').countTo({
                from: 00,
                to: 47,
                speed: 5000,
                refreshInterval: 50,
                onComplete: function(value) {
                    console.debug(this);
                }
            });
        
            $('.five-columns-bg h3 .columna5').countTo({
                from: 00,
                to: 32,
                speed: 5000,
                refreshInterval: 50,
                onComplete: function(value) {
                    console.debug(this);
                }
            });
            
        });

        $(window).off('scroll');    
        
    }
        
});