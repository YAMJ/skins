/*
 * http://forrst.com/posts/Quick_Rotating_Slideshow_jquery-z32
 */
function slideshow() {
	// set poster count to initial value 
	var imgcount = 0;
    // get the size of the slideshow container

  //  var ctrHeight = Math.floor(parseInt($('#slideshowCtr').css('height')) / 1290 * 100);
  //  var ctrWidth = Math.floor(parseInt($('#slideshowCtr').css('width')) / 1290 * 100);
  
  // adjust to full width and a scalable value ; 16vw 
	var ctrWidth = 16;
	
    // get number of images and set width of imgRoll
    var imgTotal = $('div#imgRoll > img').size();
    var imgRollWidth = imgTotal * parseInt(ctrWidth);
    $('div#imgRoll').css('width', imgRollWidth + 'vw');

    // set images to the size of the slideshow viewport
//    $('div#imgRoll img').css('height', ctrHeight + 'vw');
    $('div#imgRoll img').css('width', ctrWidth + 'vw');

    // on slideshow hover show controls
    $('div#slideshowCtr').hover(function() {
        $('a#next').fadeIn('slow');
    }, function() {
        $('a#next').fadeOut('slow');
    });

    // move to next right image
    $('a#next').click(function() {
		imgcount  = imgcount  + 1; 
        // unless on the last image
        if (imgTotal == imgcount)
        {
			// reset poster count to initial value 
			imgcount = 0;
            $('div#imgRoll').animate({left: '0vw'}, 'slow');
        } else {
			
            $('div#imgRoll').animate({
                left: '-=' + parseInt(ctrWidth) + 'vw'
            }, 'slow');
        }
    });

    // move to next left image
    $('a#prev').click(function() {
        // unless on the last image
        if (imgTotal == 0)
        {
            $('div#imgRoll').animate({left: '-' + (imgTotal * ctrWidth) + 'vw'}, 'slow');
        } else {
            $('div#imgRoll').animate({
                left: '+=' + parseInt(ctrWidth) + 'vw'
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
