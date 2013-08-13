/*
 * http://forrst.com/posts/Quick_Rotating_Slideshow_jQuery-z32
 */
function slideshowFanart() {

    // get the size of the slideshow container
    var ctrHeightFanart = $('#slideshowFanart').css('height');
    var ctrWidthFanart = $('#slideshowFanart').css('width');

    // get number of images and set width of imgRollFanart
    var imgTotalFanart = $('div#imgRollFanart > img').size();
    var imgRollFanartWidthFanart = imgTotalFanart * parseInt(ctrWidthFanart);
    $('div#imgRollFanart').css('width', imgRollFanartWidthFanart);

    // set images to the size of the slideshow viewport
    $('div#imgRollFanart img').css('height', ctrHeightFanart);
    $('div#imgRollFanart img').css('width', ctrWidthFanart);

    // set maximum scroll distance
    var maxScrollFanart = imgRollFanartWidthFanart - parseInt(ctrWidthFanart) + 'px';

    // on slideshow hover show controls
    $('div#slideshowFanart').hover(function() {
        $('a#nextFanart, a#prevFanart').fadeIn('fast');
    }, function() {
        $('a#nextFanart, a#prevFanart').fadeOut('fast');
    });

    // move to nextFanart right image
    $('a#nextFanart').click(function() {
        // unless on the last image
        if ($('div#imgRollFanart').css('left') === '-' + maxScrollFanart)
        {
            $('div#imgRollFanart').animate({left: '0px'}, 'slow');
        } else {
            $('div#imgRollFanart').animate({
                left: '-=' + parseInt(ctrWidthFanart) + 'px'
            }, 'slow');
        }
    });

    // move to nextFanart left image
    $('a#prevFanart').click(function() {
        // unless on the last image
        if ($('div#imgRollFanart').css('left') === '0px')
        {
            $('div#imgRollFanart').animate({left: '-' + maxScrollFanart}, 'slow');
        } else {
            $('div#imgRollFanart').animate({
                left: '+=' + parseInt(ctrWidthFanart) + 'px'
            }, 'slow');
        }
    });


    // auto start slideshowFanart
    function slideFanart() {
        $('a#nextFanart').click();
    }

    // simulate click every 5 seconds
    var slideDurationFanart = window.setInterval(slideFanart, 5000);

    // on click deactivate auto-scrolling
    $('a#prevFanart, a#nextFanart').click(
            function(event) {
                if (event.originalEvent) {
                    window.clearInterval(slideDurationFanart);
                }
            }
    );
}
