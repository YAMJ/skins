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
				var jsonPosterNbUrl = "/yamj3/api/config/update.json?key="+skin_value+"index_row&value="+row+"";
				console.log("update_poster_number jsonPosterNbUrl: " + jsonPosterNbUrl);
				$.ajax({
                   url: jsonPosterNbUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPosterNb)
                   {
						jsondata = dataSkinPosterNb;
				//		outputJson(dataSkinPosterNb);
						set_poster_value(row)
						adjust_poster_setting (row);
						parent.location.reload();
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
							$('.row').css('padding', '0px 0px 0px 15px');
							$('.block').css('height', '136px');
							$('.block').css('width', '96px');
							$('.block').css('margin', '0px 2px 1px 1px');
							$('.block').css('padding', '0px 1px 0px 1px');
							$('.poster').css('height', '135px');
							$('.poster').css('width', '95px');
							$('.title').css('font-size', '0.4em');
							$('.title').css('line-height', '30%');
							break;
						//1 row , 6 columns
						case 1:
							perPageValue = 6;
							$('.row').css('padding', '0px 0px 0px 5px');
							$('.block').css('height', '328px');
							$('.block').css('width', '194px');
							$('.block').css('margin', '3px');
							$('.block').css('padding', '2px');
							$('.block').mouseover(function() {
								$(this).css('padding', '0px');
								$(this).css('border', '5px solid yellow');});
							$('.block').mouseout(function() {
								$(this).css('padding', '2px');
								$(this).css('border', '3px solid white');});
							$('.poster').css('height', '285px');
							$('.poster').css('width', '190px');
							$('.title').css('font-size', '0.9em');
							$('.title').css('line-height', '100%');
							break;
						//2 rows , 6 columns
						case 2:
							perPageValue = 12;
							$('.row').css('padding', '0px 0px 0px 5px');
							$('.block').css('height', '323px');
							$('.block').css('width', '194px');
							$('.block').css('margin', '3px');
							$('.block').mouseover(function() {
								$(this).css('padding', '0px');
								$(this).css('border', '5px solid yellow');});
							$('.block').mouseout(function() {
								$(this).css('padding', '2px');
								$(this).css('border', '3px solid white');});
							$('.block').css('padding', '2px');
							$('.poster').css('height', '285px');
							$('.poster').css('width', '190px');
							$('.title').css('font-size', '0.9em');
							$('.title').css('line-height', '100%');
							break;
						//3 rows, 9 columns 
						case 3:
							perPageValue = 27;
							$('.row').css('padding', '0px 0px 0px 3px');
							$('.block').css('height', '215px');
							$('.block').css('width', '130px');
							$('.block').css('margin', '2px');
							$('.block').css('padding', '0px');
							$('.poster').css('height', '185px');
							$('.poster').css('width', '127px');
							$('.title').css('font-size', '0.7em');
							$('.title').css('line-height', '50%');
							break;
						//4 rows, 10 columns 
						case 4:
							perPageValue = 44;
							$('.row').css('padding', '0px 0px 0px 5px');
							$('.block').css('height', '160px');
							$('.block').css('width', '104px');
							$('.block').css('margin', '2px');
							$('.block').css('padding', '0px');
							$('.poster').css('height', '152px');
							$('.poster').css('width', '102px');
							$('.title').css('font-size', '0.5em');
							$('.title').css('line-height', '50%');
							break;	
						//5 rows, 12 columns
						case 5:
							perPageValue = 60;
							$('.row').css('padding', '0px 0px 0px 15px');
							$('.block').css('height', '132px');
							$('.block').css('width', '96px');
							$('.block').css('margin', '0px 2px 1px 1px');
							$('.block').css('padding', '0px 1px 0px 1px');
							$('.poster').css('height', '135px');
							$('.poster').css('width', '95px');
							$('.title').css('font-size', '0.4em');
							$('.title').css('line-height', '30%');
							break;
						}
					} else {
						// x rows , 12 columns 
						perPageValue = (parseInt(Row_, 10) * 12);
						$('.row').css('padding', '5px 0px 0px 15px');
						$('.block').css('height', '134px');
						$('.block').css('width', '96px');
						$('.block').css('margin', '0px 2px 1px 1px');
						$('.block').css('padding', '0px 1px 0px 1px');
						$('.poster').css('height', '135px');
						$('.poster').css('width', '95px');
						$('.title').css('font-size', '0.4em');
						$('.title').css('line-height', '30%');
					}
			}
