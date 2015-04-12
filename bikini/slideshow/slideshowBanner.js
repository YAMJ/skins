/*
 * http://forrst.com/posts/Quick_Rotating_Slideshow_jQuery-z32
 */
function slideshowBanner() {
	var imgcount = 0;
    // get the size of the slideshow container
	// and as height / width are return with px convert in vw (for responsive design) 
 //	var ctrHeightBanner = Math.floor(parseInt($('#slideshowBanner').css('height')) / 1450 * 100);
 //  var ctrWidthBanner = Math.floor(parseInt($('#slideshowBanner').css('width')) / 1450 * 100);
	var ctrWidthBanner = 18;
    // get number of images and set width of imgRollBanner
    var imgTotalBanner = $('div#imgRollBanner > img').size();
    var imgRollBannerWidthBanner = imgTotalBanner * parseInt(ctrWidthBanner);
    $('div#imgRollBanner').css('width', imgRollBannerWidthBanner + 'vw');
	
    // set images to the size of the slideshow viewport
 //   $('div#imgRollBanner img').css('height', ctrHeightBanner + 'vw');
    $('div#imgRollBanner img').css('width', ctrWidthBanner + 'vw');


    // move to nextBanner right image
    $('a#nextBanner').click(function() {
		imgcount  = imgcount  + 1; 
        // unless on the last image
		 if (imgTotalBanner == imgcount)
        {
			imgcount = 0;
            $('div#imgRollBanner').animate({left: '0vw'}, 'slow');
        } else {
            $('div#imgRollBanner').animate({
                left: '-=' + parseInt(ctrWidthBanner) + 'vw'
            }, 'slow');
        }
    });

    // auto start slideshowBanner
    function slideBanner() {
		// start slideshow only if there is more than one fanart 
        if (imgTotalBanner == '1')
		{} else {
		$('a#nextBanner').click();
		}
    }

    // simulate click every 10 seconds
    var slideDurationBanner = window.setInterval(slideBanner, 10000);

    // on click deactivate auto-scrolling
    $('a#nextBanner').click(
            function(event) {
                if (event.originalEvent) {
                    window.clearInterval(slideDurationBanner);
                }
            }
    );
}
