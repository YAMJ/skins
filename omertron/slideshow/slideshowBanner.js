/*
 * http://forrst.com/posts/Quick_Rotating_Slideshow_jQuery-z32
 */
function slideshowBanner() {
	$('div#slideshowBanner').css('visibility', 'visible');
    // get the size of the slideshow container
    var ctrHeightBanner = $('#slideshowBanner').css('height');
    var ctrWidthBanner = $('#slideshowBanner').css('width');

    // get number of images and set width of imgRollBanner
    var imgTotalBanner = $('div#imgRollBanner > img').size();
    var imgRollBannerWidthBanner = imgTotalBanner * parseInt(ctrWidthBanner);
    $('div#imgRollBanner').css('width', imgRollBannerWidthBanner);

    // set images to the size of the slideshow viewport
    $('div#imgRollBanner img').css('height', ctrHeightBanner);
    $('div#imgRollBanner img').css('width', ctrWidthBanner);

    // set maximum scroll distance
    var maxScrollBanner = imgRollBannerWidthBanner - parseInt(ctrWidthBanner) + 'px';

    // on slideshow hover show Banner, commented to let the button show Banner only
	
    $('div#slideshowBanner').hover(function() {
	//	$('a#nextBanner, a#prevBanner').fadeIn('slow');
    }, function() {
	//	$('a#nextBanner, a#prevBanner').fadeOut('slow');

    });

    // move to nextBanner right image
    $('a#nextBanner').click(function() {
        // unless on the last image
        if ($('div#imgRollBanner').css('left') === '-' + maxScrollBanner)
        {
            $('div#imgRollBanner').animate({left: '0px'}, 'slow');
        } else {
            $('div#imgRollBanner').animate({
                left: '-=' + parseInt(ctrWidthBanner) + 'px'
            }, 'slow');
        }
    });

    // move to nextBanner left image
    $('a#prevBanner').click(function() {
        // unless on the last image
        if ($('div#imgRollBanner').css('left') === '0px')
        {
            $('div#imgRollBanner').animate({left: '-' + maxScrollBanner}, 'slow');
        } else {
            $('div#imgRollBanner').animate({
                left: '+=' + parseInt(ctrWidthBanner) + 'px'
            }, 'slow');
        }
    });


    // auto start slideshowBanner
    function slideBanner() {
        	if (imgTotalBanner == '1')
		{} else {
		$('a#nextBanner').click();
		}
    }

    // simulate click every 3 seconds
    var slideDurationBanner = window.setInterval(slideBanner, 3000);

    // on click deactivate auto-scrolling
    $('a#prevBanner, a#nextBanner').click(
            function(event) {
                if (event.originalEvent) {
                    window.clearInterval(slideDurationBanner);
                }
            }
    );
}
