/*
 * http://forrst.com/posts/Quick_Rotating_Slideshow_jquery-z32
 */
function slideshowFanart() {
	var imgcount = 0;
    // get the size of the slideshow container
	
	//	var ctrHeightFanart = Math.floor(parseInt($('#slideshowFanart').css('height')) / 1290 * 100);
	// adjust to full width and a scalable value ; 100vw 
    var ctrWidthFanart = 100;
	
    // get number of images and set width of imgRollFanart
    var imgTotalFanart = $('div#imgRollFanart > img').size();
 //   var imgRollFanartWidthFanart = imgTotalFanart * parseInt(ctrWidthFanart);
	var imgRollFanartWidthFanart = imgTotalFanart * parseInt(ctrWidthFanart);
    $('div#imgRollFanart').css('width', imgRollFanartWidthFanart + 'vw');
	
    // set images to the size of the slideshow viewport
 //   $('div#imgRollFanart img').css('height', ctrHeightFanart + 'vw');
    $('div#imgRollFanart img').css('width', ctrWidthFanart + 'vw');


    // move to nextFanart right image
    $('a#nextFanart').click(function() {
		imgcount  = imgcount  + 1; 
        // unless on the last image
		 if (imgTotalFanart == imgcount)
        {
			imgcount = 0;
            $('div#imgRollFanart').animate({left: '0vw'}, 'slow');
        } else {
            $('div#imgRollFanart').animate({
                left: '-=' + parseInt(ctrWidthFanart) + 'vw'
            }, 'slow');
        }
    });

    // auto start slideshowFanart
    function slideFanart() {
		// start slideshow only if there is more than one fanart 
        if (imgTotalFanart == '1')
		{} else {
		$('a#nextFanart').click();
		}
    }

    // simulate click every 10 seconds
    var slideDurationFanart = window.setInterval(slideFanart, 10000);

    // on click deactivate auto-scrolling
    $('a#nextFanart').click(
            function(event) {
                if (event.originalEvent) {
                    window.clearInterval(slideDurationFanart);
                }
            }
    );
}
