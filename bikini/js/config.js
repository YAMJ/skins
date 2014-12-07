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
		function get_poster_number()
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
							$('.row').css('padding', '2px 0px 0px 75px');
							$('.block').css('height', '527px');
							$('.block').css('width', '290px');
							$('.block').css('margin', '0px');
							$('.block').css('padding', '0px');				
							$('.block').css('border', '1px solid white');
							$('.block').mouseover(function() {
								$(this).css('padding', '0px');
								$(this).css('border', '1px solid red');});
							$('.block').mouseout(function() {
								$(this).css('padding', '0px');
								$(this).css('border', '1px solid white');});
							$('.poster').css('height', '430px');
							$('.poster').css('width', '285px');
							$('.title').css('font-size', '0.8em');
							$('.title').css('line-height', '30%');
							$('.infobutton').css('height', '35px');
							$('.infobutton').css('width', '35px');
							$('.infobutton').css('top', '-40px');
							$('.playbutton').css('height', '35px');
							$('.playbutton').css('width', '40px');
							$('.playbutton').css('top', '-40px');
							$('.watched_small').css('height', '32px');
							$('.watched_small').css('width', '32px');
							$('.watched_small').css('top', '-42px');
							break;
						//2 rows , 6 columns
						case 2:
							perPageValue = 12;
						//	$('#container').css('top', '65px');
						//	$('#container').css('height', '690px');
							$('.row').css('padding', '2px 0px 0px 75px');
							$('.block').css('height', '325px');
							$('.block').css('width', '194px');
							$('.block').css('margin', '0px');
							$('.block').mouseover(function() {
								$(this).css('padding', '0px');
								$(this).css('border', '1px solid red');});
							$('.block').mouseout(function() {
								$(this).css('padding', '0px');
								$(this).css('border', '1px solid white');});
							$('.block').css('padding', '0px');
							$('.poster').css('height', '285px');
							$('.poster').css('width', '190px');
							$('.title').css('font-size', '0.8em');
							$('.title').css('line-height', '30%');
							$('.infobutton').css('height', '35px');
							$('.infobutton').css('width', '35px');
							$('.playbutton').css('height', '35px');
							$('.playbutton').css('width', '40px');
							$('.infobutton').css('top', '-40px');
							$('.playbutton').css('top', '-40px');
							$('.watched_small').css('height', '32px');
							$('.watched_small').css('width', '32px');
							$('.watched_small').css('top', '-42px');
							break;
						//3 rows, 9 columns 
						case 3:
							perPageValue = 30;
							$('.row').css('padding', '2px 0px 0px 1px');
							$('.block').css('height', '229px');
							$('.block').css('width', '129px');
							$('.block').css('margin', '0px');
							$('.block').css('padding', '0px');
							$('.poster').css('height', '185px');
							$('.poster').css('width', '127px');
							$('.title').css('font-size', '0.7em');
							$('.title').css('line-height', '35%');
							break;
						//4 rows, 11 columns 
						case 4:
							perPageValue = 48;
							$('.row').css('padding', '1px 0px 0px 23px');
							$('.block').css('height', '174px');
							$('.block').css('width', '103px');
							$('.block').css('margin', '0px');
							$('.block').css('padding', '1px');
							$('.poster').css('height', '150px');
							$('.poster').css('width', '102px');
							$('.title').css('font-size', '0.5em');
							$('.title').css('line-height', '30%');
							break;	
						//5 rows, 12 columns
						case 5:
							perPageValue = 70;
							$('.row').css('padding', '2px 0px 0px 10px');
							$('.block').css('height', '136px');
							$('.block').css('width', '91px');
							$('.block').css('margin', '0px');
							$('.block').css('padding', '0px');
							$('.poster').css('height', '135px');
							$('.poster').css('width', '91px');
							$('.title').css('font-size', '0.4em');
							$('.title').css('line-height', '30%');
							
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
