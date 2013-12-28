  //************************ LANGUAGE SETTING *********************************************
  		// include this function to set the skin language , fetched from the yamjv3 database configuration table 
		// before using this function skin_language varaible should declared with supported value  fr, en, de, es, it 
		// enter in the browser /yamj3/config/list.html
		// click on enter new configuration ()
		// enter skin_langauge as key
		// enter a valid value language as value 
		// click enter 
 //*****************************************************************************************   
		function set_skin_language()
		{		
		var jsonSkinLangUrl = "/yamj3/system/config.json?config=skin_language&mode=any";
		console.log("jsonSkinLangUrl: " + jsonSkinLangUrl);
				$.ajax({
                   url: jsonSkinLangUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinlanguage)
                   {
						jsondata = dataSkinlanguage;
					//	outputJson(dataSkinlanguage);
						updateSkinlang(dataSkinlanguage);
					}
			});	
			 return jsondata;
		}
		
		function updateSkinlang(yamjdata) {
				console.log(yamjdata);
				var WI = {
						"tr": {
							"list<-results":{
								"td.Value"				: function(arg) {
								get_lang_value (arg.item.value);
								return arg.item.value;
								}	
							}
						}
					};
				$p('.results').render( yamjdata, WI );			
			}
	// get all value according to language setting - from yamjv3_lang_{lang}.xml
		function get_lang_value (lang)
		{
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
			config_select=(x[i].getElementsByTagName("configselected")[0].childNodes[0].nodeValue);
			start_label=(x[i].getElementsByTagName("startlabel")[0].childNodes[0].nodeValue);
			any_label=(x[i].getElementsByTagName("anylabel")[0].childNodes[0].nodeValue);
			fanart_show=(x[i].getElementsByTagName("fanartshow")[0].childNodes[0].nodeValue);
			person_show=(x[i].getElementsByTagName("personshow")[0].childNodes[0].nodeValue);
			season_label=(x[i].getElementsByTagName("seasonlabel")[0].childNodes[0].nodeValue);
			series_label=(x[i].getElementsByTagName("serieslabel")[0].childNodes[0].nodeValue);
			results_text=(x[i].getElementsByTagName("resultstext")[0].childNodes[0].nodeValue);
			selection_text=(x[i].getElementsByTagName("selection")[0].childNodes[0].nodeValue);
			episode_label=(x[i].getElementsByTagName("episodelabel")[0].childNodes[0].nodeValue);
			movie_label=(x[i].getElementsByTagName("movielabel")[0].childNodes[0].nodeValue);
			plot_label=(x[i].getElementsByTagName("plotlabel")[0].childNodes[0].nodeValue);
			genre_label=(x[i].getElementsByTagName("genrelabel")[0].childNodes[0].nodeValue);
			nobiography_text=(x[i].getElementsByTagName("nobiography")[0].childNodes[0].nodeValue);
			nobirthday_text=(x[i].getElementsByTagName("nobirthday")[0].childNodes[0].nodeValue);
			name_label=(x[i].getElementsByTagName("namelabel")[0].childNodes[0].nodeValue);
			person_label=(x[i].getElementsByTagName("personlabel")[0].childNodes[0].nodeValue);
			
		// now set local lang usage depending of each file
		set_context_lang_value ();
		}

		