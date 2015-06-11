  //************************ CONFIGURATION SETTING *********************************************
  		// include this function to set / add / list configuration key , fetched from the yamjv3 database configuration table 
		// outside skin configuration could be displayed / update with the following
		// enter in the browser /yamj3/config/list.html
		// click on enter new configuration ()
		// enter key : by exemple skin_langauge as key
		// enter a valid value 
		// click enter 
 //*****************************************************************************************   
			// fetch the value in the config database
		RowperPageValue = 2;
		// fecth from local storage 
		function get_poster_number()
			{
				if (window.localStorage.getItem("RowperPage"))
				{
					RowperPageValue = parseInt(window.localStorage.getItem("RowperPage"), 10);
					console.log('get_poster_number RowperPage: '+RowperPageValue);
					adjust_poster_setting (RowperPageValue);
				}
				else { get_poster_number_(); }
			}
		// fecth from database
		function get_poster_number_()
			{
				var jsonPosterNbUrl = "/yamj3/api/config/list.json?config="+skin_value+"index_row";
				console.log("get_poster_number jsonPosterNbUrl: " + jsonPosterNbUrl);
				$.ajax({
                   url: jsonPosterNbUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPosterNb)
                   {
						jsondata = dataSkinPosterNb;
				//		outputJson(dataSkinPosterNb);
						checkSkinPosterNb(dataSkinPosterNb);
						adjust_poster_setting (RowperPageValue);
					}
					
				});	
			 return jsondata;
		}
		
			// update  the value in the config database
		function update_poster_number(row) 
		{
				if (row == '99999')
				{
					window.localStorage.setItem("Paging", false);
					set_paging(false);
					console.log("update_poster_number set paging to false and reset: "+row);
					row = window.localStorage.getItem("RowperPage");	
				} else {window.localStorage.setItem("Paging", true); 
						set_paging(true);}
				var jsonPosterNbUrl = "/yamj3/api/config/update.json?key="+skin_value+"index_row&value="+row+"";
				console.log("update_poster_number jsonPosterNbUrl: " + jsonPosterNbUrl);
				$.ajax({
                   url: jsonPosterNbUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPosterNb)
                   {
						jsondata = dataSkinPosterNb;
						outputJson(dataSkinPosterNb);
						set_poster_value(row)
						adjust_poster_setting (row);
						parent.location.reload();
					}
					
				});	
			 return jsondata;


		}
		
		function set_paging(paging)
			{
				var jsonPagingNbUrl = "/yamj3/api/config/update.json?key="+skin_value+"paging&value="+paging+"";
				console.log("config.js set_paging jsonPagingNbUrl: " + jsonPagingNbUrl);
				$.ajax({
                   url: jsonPagingNbUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPagingNb)
                   {
						jsondata = dataSkinPagingNb;
						outputJson(dataSkinPagingNb);
					}
					
				});	
				return jsondata;
			}
			
		
		function checkSkinPosterNb(yamjdata) {
				var PN = {
						"td.Poster_Value":  function(arg) {
										if (arg.context.count) {
										console.log("checkSkinPosterNb: "+arg.context.results[0].value);
										set_poster_value(arg.context.results[0].value);
										return arg.context.results[0].value;} else {
										console.log("checkSkinPosterNb: no value found");
										update_poster_number(2);}
								}								
							
						};
				
				$p('.poster_results').render( yamjdata, PN );			
			}	

	// set the rules to adjust poster to the number of row choosen
		function set_poster_value(poster_nb)
			{
				RowperPageValue = parseInt(poster_nb, 10);
				console.log('set_poster_value: '+poster_nb);
				window.localStorage.setItem("RowperPage", poster_nb);
			}
		function adjust_poster_setting(Row_) {
				if (parseInt(Row_, 10) < 6  ) {
					switch (Row_)
						{
						// no paging , 12 columns 
						case 0:
							perPageValue = 99999;
							$('.row').css('padding', '2px 0px 0px 3px');
							$('.block').css('height', '136px');
							$('.block').css('width', '94px');
							$('.block').css('margin', '0px');
							$('.block').css('padding', '0px');
							$('.poster').css('height', '135px');
							$('.poster').css('width', '93px');
							$('.title').css('font-size', '0.4em');
							$('.title').css('line-height', '30%');
							break;
						//1 row , 6 columns
						case 1:
							perPageValue = 4;
					//		$('#container').css('top', '80px');
					//		$('#container').css('height', '565px');
							$('.row').css('padding', '2px 0px 0px 25px');
							$('.block').css('height', '39.1vw');
							$('.block').css('width', '21.7vw');
							$('.block').css('margin', '10px');
					//		$('.block').css('padding', '0px');				
							
					//		$('.block').mouseover(function() {
					//			$(this).css('padding', '0px');
					//			$(this).css('border', '1px solid red');});
					//		$('.block').mouseout(function() {
					//			$(this).css('padding', '0px');
					//			$(this).css('border', '1px solid white');});
							$('.poster').css('height', '81%');
					//		$('.poster').css('width', '100%');
					//		$('.poster').css('top', '-98.3%');
					//		$('.poster').css('left', '-1.7%');
							$('.title').css('font-size', '2vw');
							$('.title').css('line-height', '130%');
							$('.title').css('top', '-4.7vw');
					//		$('.title').css('width', '90%');
							$('.title').css('height', '19%');
							$('.infobutton').css('height', '11%');
							$('.infobutton').css('width', '19%');
							$('.infobutton').css('top', '-5.6vw');
							$('.infobutton').css('left', '-3%');
							$('.playbutton').css('height', '11%');
							$('.playbutton').css('width', '23%');
							$('.playbutton').css('top', '-6vw');
							$('.playbutton').css('left', '-10%');
							$('.watched_small').css('height', '9.5%');
							$('.watched_small').css('width', '16%');
							$('.watched_small').css('top', '-6vw');
							$('.watched_small').css('left', '9%');
							$('.title_boxset').css('height', '5vw');
							break;
						//2 rows , 6 columns
						case 2:
							perPageValue = 12;
						//	$('#container').css('top', '65px');
						//	$('#container').css('height', '690px');
							$('.row').css('padding', '2px 0px 0px 5px');
							$('.block').css('height', '25.3vw');
							$('.block').css('width', '14.3vw');
							$('.block').css('margin', '2px 10px 2px 10px');
						//	$('.block').css('padding', '0px');
						//	$('.poster').css('height', '82%');
						//	$('.poster').css('width', '93%');
						//	$('.poster').css('top', '-99%');
						//	$('.poster').css('left', '-1.5%');
							$('.title').css('font-size', '1vw');
							$('.title').css('top', '-3vw');
							$('.title').css('height', '14%');
						//	$('.infobutton').css('height', '35px');
						//	$('.infobutton').css('width', '35px');
							$('.infobutton').css('top', '-3.4vw');
						//	$('.playbutton').css('height', '35px');
						//	$('.playbutton').css('width', '40px');
							$('.playbutton').css('top', '-3.5vw');
						//	$('.playbutton').css('left', '-5%');
						//	$('.watched_small').css('height', '32px');
						//	$('.watched_small').css('width', '32px');
							$('.watched_small').css('top', '-3.7vw');
						//	$('.watched_small').css('left', '7%');
							$('.title_boxset').css('height', '3.2vw');
							break;
						//3 rows, 9 columns 
						case 3:
							perPageValue = 27;
							$('.row').css('padding', '2px 0px 0px 30px');
							$('.overlay').css('display', 'none');
							$('.block').css('height', '16.8vw');
							$('.block').css('width', '9.7vw');
							$('.block').css('margin', '1px 2px 1px 2px');
							$('.block').css('padding', '0px');
							$('.poster').css('height', '85%');
							$('.poster').css('width', '100%');
							$('.poster').css('left', '0%');
							$('.poster').css('top', '0%');
							$('.title').css('font-size', '0.8vw');
					//		$('.title').css('line-height', '35%');
							$('.title').css('top', '-2.3vw');
							$('.title').css('width', '100%');
							$('.title').css('height', '2.6vw');
							$('.title').css('left', '0%');
							$('.infobutton').css('height', '11%');
							$('.infobutton').css('width', '19%');
							$('.infobutton').css('top', '-2.8vw');
							$('.infobutton').css('left', '-3%');
							$('.playbutton').css('height', '11%');
							$('.playbutton').css('width', '21%');
							$('.playbutton').css('top', '-2.9vw');
							$('.playbutton').css('left', '-13%');
							$('.watched_small').css('height', '9.5%');
							$('.watched_small').css('width', '16%');
							$('.watched_small').css('top', '-3vw');
							$('.watched_small').css('left', '10%');
							$('.title_boxset').css('height', '2.4vw');
							//	$('#watch_label').css('left', '27%');
							$('.watch_label').css('top', '-17%');
							$('.watch_label').css('left', '38%');
						//	$('#play_label').css('left', '-20%');
						//	$('#info_label').css('left', '-30%');
							break;
						//4 rows, 11 columns 
						case 4:
							perPageValue = 48;
							$('.row').css('padding', '1px 0px 0px 10px');
							$('.block').css('height', '12.5vw');
							$('.block').css('width', '7.2vw');
							$('.block').css('margin', '1px 3px 1px 3px');
					//		$('.block').css('margin', '0px');
					//		$('.block').css('padding', '1px');
					//		$('.poster').css('height', '85%');
					//		$('.poster').css('width', '93%');
							$('.title').css('font-size', '0.7vw');
					//		$('.title').css('line-height', '30%');
							$('.title').css('top', '-1.8vw');
							$('.title').css('width', '100%');
							$('.title').css('height', '14%');
					//		$('.title').css('left', '-2.5%');
					//		$('.infobutton').css('height', '13%');
					//		$('.infobutton').css('width', '21%');
							$('.infobutton').css('top', '-1.9vw');
					//		$('.playbutton').css('height', '13%');
					//		$('.playbutton').css('width', '24%');
							$('.playbutton').css('top', '-2vw');
					//		$('.playbutton').css('left', '-10%');
					//		$('.watched_small').css('height', '11.5%');
					//		$('.watched_small').css('width', '18%');
							$('.watched_small').css('top', '-2.1vw');
							$('.watched_small').css('left', '7%');
							$('.title_boxset').css('height', '1.7vw');
							break;	
						//5 rows, 12 columns
						case 5:
							perPageValue = 65;
							$('.row').css('padding', '2px 0px 0px 10px');
							$('.block').css('height', '10vw');
							$('.block').css('width', '6.8vw');
							$('.block').css('margin', '1px');
							$('.block').css('padding', '0px');
							$('.poster').css('height', '100%');
							$('.poster').css('width', '100%');
							$('.title').css('font-size', '0.4em');
							$('.title').css('top', '-114%');
					//		$('.infobutton').css('height', '15%');
					//		$('.infobutton').css('width', '23%');
							$('.infobutton').css('top', '-1.9vw');
					//		$('.playbutton').css('height', '15%');
					//		$('.playbutton').css('width', '26%');
							$('.playbutton').css('top', '-2vw');
					//		$('.playbutton').css('left', '-7%');
					//		$('.watched_small').css('height', '13.5%');
					//		$('.watched_small').css('width', '18%');
							$('.watched_small').css('top', '-2.1vw');
					//		$('.watched_small').css('left', '6%');
							$('.title_boxset').css('height', '0.1vw');
							
							break;
					
						}
					} else {
						// x rows , 12 columns 
						perPageValue = (parseInt(Row_, 10) * 12);
						//	$('.row').css('padding', '0px 0px 0px 4px');
						//	$('.block').css('height', '135px');
						//	$('.block').css('width', '94px');
						//	$('.block').css('margin', '0px 2px 1px 1px');
						//	$('.block').css('padding', '0px 1px 0px 1px');
						//	$('.poster').css('height', '134px');
						//	$('.poster').css('width', '93px');
						//	$('.title').css('font-size', '0.4em');
						//	$('.title').css('line-height', '30%');
					}
			}
