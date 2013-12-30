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
		function get_lang()
			{
				var jsonLangUrl = "/yamj3/api/config/list.json?config=skin_language&mode=any";
				console.log("jsonLangUrl: " + jsonLangUrl);
				$.ajax({
                   url: jsonLangUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinLang)
                   {
						jsondata = dataSkinLang;
				//		outputJson(dataSkinLang);
						checkLang(dataSkinLang);
						updateLang(dataSkinLang);
						adjust_lang_setting (LangValue);
					}
					
				});	
			 return jsondata;
		}
		
			// update  the value in the config database
		function update_lang(lang_) 
		{
				var jsonLangUrl = "/yamj3/api/config/update.json?key=skin_language&value="+lang_+"";
				console.log("jsonLangUrl: " + jsonLangUrl);
				$.ajax({
                   url: jsonLangUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinLang)
                   {
						jsondata = dataSkinLang;
				//		outputJson(dataSkinLang);
						updateLang(dataSkinLang);
						adjust_lang_setting (LangValue);
						location.reload();
					}
					
				});	
			 return jsondata;


		}				
		function checkLang(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
										if (arg.context.count) {
										return arg.context.count;} else {update_lang('en');}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	// parse the value lang
		function updateLang(yamjdata) {
		var WI = {
						"tr": {
							"list<-results":{
								"td.Value"				: function(arg) {
								set_lang_value (arg.item.value);
								return arg.item.value;
								}	
							}
						}
					};
				$p('.results').render( yamjdata, WI );			
			}
	
	// set the rules to adjust lang to the lang choosen
		function set_lang_value(lang_)
			{
				LangValue = lang_;
				console.log('set lang:'+lang_);
			}
		function adjust_lang_setting(lang) {
		console.log("set_lang: "+lang);
					if (window.XMLHttpRequest)
					  {// code for IE7+, Firefox, Chrome, Opera, Safari
					  xmlhttp=new XMLHttpRequest();
					  }
					else
					  {// code for IE6, IE5
					  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
					  }
					xmlhttp.open("GET","yamjv3_lang_"+lang+".xml",false);
					xmlhttp.send();
					xmlDoc=xmlhttp.responseXML; 
					x=xmlDoc.getElementsByTagName('lang');
					i=0;

					all_select=(x[i].getElementsByTagName("allselected")[0].childNodes[0].nodeValue);
					movie_select=(x[i].getElementsByTagName("movieselected")[0].childNodes[0].nodeValue);
					series_select=(x[i].getElementsByTagName("serieselected")[0].childNodes[0].nodeValue);
					season_select=(x[i].getElementsByTagName("seasonselected")[0].childNodes[0].nodeValue);
					person_select=(x[i].getElementsByTagName("personselected")[0].childNodes[0].nodeValue);
					genre_select=(x[i].getElementsByTagName("genreselected")[0].childNodes[0].nodeValue);
					search_select=(x[i].getElementsByTagName("searchselected")[0].childNodes[0].nodeValue);
					config_select=(x[i].getElementsByTagName("configselected")[0].childNodes[0].nodeValue);
					start_label=(x[i].getElementsByTagName("startlabel")[0].childNodes[0].nodeValue);
					asc_label=(x[i].getElementsByTagName("ascending")[0].childNodes[0].nodeValue);
					desc_label=(x[i].getElementsByTagName("descending")[0].childNodes[0].nodeValue);
					any_label=(x[i].getElementsByTagName("anylabel")[0].childNodes[0].nodeValue);
					selection_label=(x[i].getElementsByTagName("selectionlabel")[0].childNodes[0].nodeValue);
					fanart_show=(x[i].getElementsByTagName("fanartshow")[0].childNodes[0].nodeValue);
					person_show=(x[i].getElementsByTagName("personshow")[0].childNodes[0].nodeValue);
					show=(x[i].getElementsByTagName("show")[0].childNodes[0].nodeValue);
					season_label=(x[i].getElementsByTagName("seasonlabel")[0].childNodes[0].nodeValue);
					series_label=(x[i].getElementsByTagName("serieslabel")[0].childNodes[0].nodeValue);
					results_text=(x[i].getElementsByTagName("resultstext")[0].childNodes[0].nodeValue);
					selection_text=(x[i].getElementsByTagName("selection")[0].childNodes[0].nodeValue);
					episode_label=(x[i].getElementsByTagName("episodelabel")[0].childNodes[0].nodeValue);
					movie_label=(x[i].getElementsByTagName("movielabel")[0].childNodes[0].nodeValue);
					plot_label=(x[i].getElementsByTagName("plotlabel")[0].childNodes[0].nodeValue);
					genre_label=(x[i].getElementsByTagName("genrelabel")[0].childNodes[0].nodeValue);
					noplot_text=(x[i].getElementsByTagName("noplot")[0].childNodes[0].nodeValue);
					nobiography_text=(x[i].getElementsByTagName("nobiography")[0].childNodes[0].nodeValue);
					nobirthday_text=(x[i].getElementsByTagName("nobirthday")[0].childNodes[0].nodeValue);
					noposter_text=(x[i].getElementsByTagName("noposter")[0].childNodes[0].nodeValue);
					name_label=(x[i].getElementsByTagName("namelabel")[0].childNodes[0].nodeValue);
					person_label=(x[i].getElementsByTagName("personlabel")[0].childNodes[0].nodeValue);
					nbofrow=(x[i].getElementsByTagName("nbrow")[0].childNodes[0].nodeValue);
					lang_label=(x[i].getElementsByTagName("language")[0].childNodes[0].nodeValue);
					page_label=(x[i].getElementsByTagName("pagelabel")[0].childNodes[0].nodeValue);
				// now set local lang usage depending of each file
				set_context_lang_value ();
			}
