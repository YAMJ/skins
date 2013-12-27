  //************************ CONFIGURATION SETTING *********************************************
  		// include this function to set / add / list configuration key , fetched from the yamjv3 database configuration table 
		// outside skin configuration could be displayed / update with the following
		// enter in the browser http://localhost:8888/yamj3/config/list.html
		// click on enter new configuration ()
		// enter key : by exemple skin_langauge as key
		// enter a valid value 
		// click enter 
 //*****************************************************************************************   
			// fetch the value in the config database
		function get_poster_number()
			{
				var jsonPosterNbUrl = "/yamj3/api/config/list.json?config=skin_index_row";
				console.log("jsonPosterNbUrl: " + jsonPosterNbUrl);
				$.ajax({
                   url: jsonPosterNbUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPosterNb)
                   {
						jsondata = dataSkinPosterNb;
				//		outputJson(dataSkinPosterNb);
						checkSkinPosterNb(dataSkinPosterNb);
						updateSkinPosterNb(dataSkinPosterNb);
						adjust_poster_setting (RowperPageValue);
					}
					
				});	
			 return jsondata;
		}
		
			// update  the value in the config database
		function update_poster_number(row) 
		{
				var jsonPosterNbUrl = "/yamj3/api/config/update.json?key=skin_index_row&value="+row+"";
				console.log("jsonPosterNbUrl: " + jsonPosterNbUrl);
				$.ajax({
                   url: jsonPosterNbUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPosterNb)
                   {
						jsondata = dataSkinPosterNb;
				//		outputJson(dataSkinPosterNb);
						updateSkinPosterNb(dataSkinPosterNb);
						adjust_poster_setting (RowperPageValue);
						location.reload();
					}
					
				});	
			 return jsondata;


		}				
		function checkSkinPosterNb(yamjdata) {
				var PN = {
						"td.Poster_Value":  function(arg) {
										if (arg.context.count) {
										return arg.context.count;} else {update_poster_number(2);}
								}								
							
						};
				
				$p('.poster_results').render( yamjdata, PN );			
			}	
	// parse the value nbre of row index 
		function updateSkinPosterNb(yamjdata) {
				var PN = {
						"tr": {
							"list<-results":{
								"td.Poster_Value"				: function(arg) {
										set_poster_value (arg.item.value);
										return arg.item.value;
								}								
							}
						}
					};
				$p('.poster_results').render( yamjdata, PN );			
			}
	// set the rules to adjust poster to the number of row choosen
		function set_poster_value(poster_nb)
			{
				RowperPageValue = parseInt(poster_nb, 10);
				console.log('set index_row:'+poster_nb);
			}
		function adjust_poster_setting(RowperPageValue) {
				if (parseInt(RowperPageValue, 10) < 6  ) {
					switch (RowperPageValue)
						{
						// no paging , 12 columns 
						case 0:
							$('.row').css('padding', '5px 0px 0px 15px');
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
							$('.row').css('padding', '5px 0px 0px 5px');
							$('.block').css('height', '330px');
							$('.block').css('width', '194px');
							$('.block').css('margin', '3px');
							$('.block').css('padding', '4px');
							$('.poster').css('height', '285px');
							$('.poster').css('width', '190px');
							$('.title').css('font-size', '0.9em');
							$('.title').css('line-height', '100%');
							break;
						//2 rows , 6 columns
						case 2:
							perPageValue = 12;
							$('.row').css('padding', '5px 0px 0px 5px');
							$('.block').css('height', '330px');
							$('.block').css('width', '194px');
							$('.block').css('margin', '3px');
							$('.block').css('padding', '4px');
							$('.poster').css('height', '285px');
							$('.poster').css('width', '190px');
							$('.title').css('font-size', '0.9em');
							$('.title').css('line-height', '100%');
							break;
						//3 rows, 9 columns 
						case 3:
							perPageValue = 27;
							$('.row').css('padding', '5px 0px 0px 3px');
							$('.block').css('height', '225px');
							$('.block').css('width', '130px');
							$('.block').css('margin', '3px');
							$('.block').css('padding', '1px');
							$('.poster').css('height', '190px');
							$('.poster').css('width', '127px');
							$('.title').css('font-size', '0.7em');
							$('.title').css('line-height', '70%');
							break;
						//4 rows, 10 columns 
						case 4:
							perPageValue = 44;
							$('.row').css('padding', '5px 0px 0px 5px');
							$('.block').css('height', '165px');
							$('.block').css('width', '104px');
							$('.block').css('margin', '3px');
							$('.block').css('padding', '1px');
							$('.poster').css('height', '152px');
							$('.poster').css('width', '102px');
							$('.title').css('font-size', '0.5em');
							$('.title').css('line-height', '60%');
							break;	
						//5 rows, 12 columns
						case 5:
							perPageValue = 60;
							$('.row').css('padding', '5px 0px 0px 15px');
							$('.block').css('height', '136px');
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
						perPageValue = (parseInt(RowperPageValue, 10) * 12);
						$('.row').css('padding', '5px 0px 0px 15px');
						$('.block').css('height', '136px');
						$('.block').css('width', '96px');
						$('.block').css('margin', '0px 2px 1px 1px');
						$('.block').css('padding', '0px 1px 0px 1px');
						$('.poster').css('height', '135px');
						$('.poster').css('width', '95px');
						$('.title').css('font-size', '0.4em');
						$('.title').css('line-height', '30%');
					}
			}
