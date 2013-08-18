/*
 * http://forrst.com/posts/Quick_Rotating_Slideshow_jQuery-z32
 */
function slideshow() {

    // get the size of the slideshow container
    var ctrHeight = $('#slideshowCtr').css('height');
    var ctrWidth = $('#slideshowCtr').css('width');

    // get number of images and set width of imgRoll
    var imgTotal = $('div#imgRoll > img').size();
    var imgRollWidth = imgTotal * parseInt(ctrWidth);
    $('div#imgRoll').css('width', imgRollWidth);

    // set images to the size of the slideshow viewport
    $('div#imgRoll img').css('height', ctrHeight);
    $('div#imgRoll img').css('width', ctrWidth);

    // set maximum scroll distance
    var maxScroll = imgRollWidth - parseInt(ctrWidth) + 'px';

    // on slideshow hover show controls
    $('div#slideshowCtr').hover(function() {
        $('a#next, a#prev').fadeIn('fast');
    }, function() {
        $('a#next, a#prev').fadeOut('fast');
    });

    // move to next right image
    $('a#next').click(function() {
        // unless on the last image
        if ($('div#imgRoll').css('left') === '-' + maxScroll)
        {
            $('div#imgRoll').animate({left: '0px'}, 'slow');
        } else {
            $('div#imgRoll').animate({
                left: '-=' + parseInt(ctrWidth) + 'px'
            }, 'slow');
        }
    });

    // move to next left image
    $('a#prev').click(function() {
        // unless on the last image
        if ($('div#imgRoll').css('left') === '0px')
        {
            $('div#imgRoll').animate({left: '-' + maxScroll}, 'slow');
        } else {
            $('div#imgRoll').animate({
                left: '+=' + parseInt(ctrWidth) + 'px'
            }, 'slow');
        }
    });


    // auto start slideshow
    function slide() {
       	if (imgTotal == '1')
		{} else {
        $('a#next').click();
		}
    }

    // simulate click every 3 seconds
    var slideDuration = window.setInterval(slide, 3000);

    // on click deactivate auto-scrolling
    $('a#prev, a#next').click(
            function(event) {
                if (event.originalEvent) {
                    window.clearInterval(slideDuration);
                }
            }
    );
}
