  //************************ CONFIGURATION SETTING *********************************************
  		// include this function to set / add / list configuration key , fetched from the yamjv3 database configuration table 
		// outside skin configuration could be displayed / update with the following
		// enter in the browser /yamj3/config/list.html
		// click on enter new configuration ()
		// enter key : by exemple skin_langauge as key
		// enter a valid value 
		// click enter 
 //*****************************************************************************************   
		// set a default skin value 
		var skin_value = "bikini_skin_default_";
		// fetch the value in the config database
		function get_lang()
			{
			// check if there is an instance of the bikini skin choosen
				if (localStorage.getItem("skinset"))
					{skin_value = localStorage.getItem("skinset");}
					else {
						localStorage.setItem("skinset", skin_value);
					}
				
				var jsonLangUrl = "/yamj3/api/config/list.json?config="+skin_value+"language&mode=any";
				console.log("get_lang jsonLangUrl: " + jsonLangUrl);
				$.ajax({
                   url: jsonLangUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinLang)
                   {
						jsondata = dataSkinLang;
					//	outputJson(dataSkinLang);
					// check and fetch what lang value has been stored inside the database 
						checkLang(dataSkinLang);
						adjust_lang_setting (LangValue);
					}
					
				});	
			 return jsondata;
		}
		
			// update  the value in the config database
		function update_lang(lang_) 
		{
				var jsonLangUrl = "/yamj3/api/config/update.json?key="+skin_value+"language&value="+lang_+"";
				console.log("update_lang jsonLangUrl: " + jsonLangUrl);
				$.ajax({
                   url: jsonLangUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinLang)
                   {
						jsondata = dataSkinLang;
					//	outputJson(dataSkinLang);
						set_lang_value(lang_)
						adjust_lang_setting (lang_);
						location.reload();
					}
					
				});	
			 return jsondata;


		}	
	// check if a language as been already defined for this skin instance, if OK take it , otherwise store the default language 'en'
		function checkLang(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
									if (arg.context.count) {
										console.log("checkLang: "+arg.context.results[0].value);
										set_lang_value(arg.context.results[0].value);
										return ;} else {
										console.log("checkLang: no value found");
										update_lang('en');
										return ;}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	

	
	// set the rules to adjust lang to the lang choosen
		function set_lang_value(lang2_)
			{
				console.log('set_lang_value:'+lang2_);
				LangValue = lang2_;
				
			
			}
		function adjust_lang_setting(lang) {
		// console.log("adjust_lang_setting: "+lang);
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

					
					all_genre=(x[i].getElementsByTagName("allgenre")[0].childNodes[0].nodeValue);
					all_select=(x[i].getElementsByTagName("allselected")[0].childNodes[0].nodeValue);
					angle_label=(x[i].getElementsByTagName("anglelabel")[0].childNodes[0].nodeValue);
					any_label=(x[i].getElementsByTagName("anylabel")[0].childNodes[0].nodeValue);
					asc_label=(x[i].getElementsByTagName("ascending")[0].childNodes[0].nodeValue);
					audio_label=(x[i].getElementsByTagName("audiolabel")[0].childNodes[0].nodeValue);
					blue_label=(x[i].getElementsByTagName("bluelabel")[0].childNodes[0].nodeValue);
					close_remote_label=(x[i].getElementsByTagName("closeremotelabel")[0].childNodes[0].nodeValue);
					config_select=(x[i].getElementsByTagName("configselected")[0].childNodes[0].nodeValue);
					desc_label=(x[i].getElementsByTagName("descending")[0].childNodes[0].nodeValue);
					down_label=(x[i].getElementsByTagName("downlabel")[0].childNodes[0].nodeValue);
					eject_label=(x[i].getElementsByTagName("ejectlabel")[0].childNodes[0].nodeValue);
					enter_label=(x[i].getElementsByTagName("enterlabel")[0].childNodes[0].nodeValue);
					episode_label=(x[i].getElementsByTagName("episodelabel")[0].childNodes[0].nodeValue);
					fanart_show=(x[i].getElementsByTagName("fanartshow")[0].childNodes[0].nodeValue);
					file_label=(x[i].getElementsByTagName("filelabel")[0].childNodes[0].nodeValue);
					file_mode_label=(x[i].getElementsByTagName("filemodelabel")[0].childNodes[0].nodeValue);
					filmography_label=(x[i].getElementsByTagName("filmographylabel")[0].childNodes[0].nodeValue);
					fwd_label=(x[i].getElementsByTagName("fwdlabel")[0].childNodes[0].nodeValue);
					genre_label=(x[i].getElementsByTagName("genrelabel")[0].childNodes[0].nodeValue);
					genre_select=(x[i].getElementsByTagName("genreselected")[0].childNodes[0].nodeValue);
					green_label=(x[i].getElementsByTagName("greenlabel")[0].childNodes[0].nodeValue);
					home_label=(x[i].getElementsByTagName("homelabel")[0].childNodes[0].nodeValue);
					info_label=(x[i].getElementsByTagName("infolabel")[0].childNodes[0].nodeValue);
					lang_label=(x[i].getElementsByTagName("language")[0].childNodes[0].nodeValue);
					left_label=(x[i].getElementsByTagName("leftlabel")[0].childNodes[0].nodeValue);
					menu_label=(x[i].getElementsByTagName("menulabel")[0].childNodes[0].nodeValue);	
					movie_label=(x[i].getElementsByTagName("movielabel")[0].childNodes[0].nodeValue);
					movie_select=(x[i].getElementsByTagName("movieselected")[0].childNodes[0].nodeValue);
					mute_label=(x[i].getElementsByTagName("mutelabel")[0].childNodes[0].nodeValue);
					name_label=(x[i].getElementsByTagName("namelabel")[0].childNodes[0].nodeValue);
					next_remote_label=(x[i].getElementsByTagName("nextremotelabel")[0].childNodes[0].nodeValue);
					nbofrow=(x[i].getElementsByTagName("nbrow")[0].childNodes[0].nodeValue);
					nobiography_text=(x[i].getElementsByTagName("nobiography")[0].childNodes[0].nodeValue);
					noplot_text=(x[i].getElementsByTagName("noplot")[0].childNodes[0].nodeValue);
					nobirthday_text=(x[i].getElementsByTagName("nobirthday")[0].childNodes[0].nodeValue);
					noposter_text=(x[i].getElementsByTagName("noposter")[0].childNodes[0].nodeValue);
					page_label=(x[i].getElementsByTagName("pagelabel")[0].childNodes[0].nodeValue);
					pause_label=(x[i].getElementsByTagName("pauselabel")[0].childNodes[0].nodeValue);
					person_label=(x[i].getElementsByTagName("personlabel")[0].childNodes[0].nodeValue);
					person_select=(x[i].getElementsByTagName("personselected")[0].childNodes[0].nodeValue);
					person_show=(x[i].getElementsByTagName("personshow")[0].childNodes[0].nodeValue);
					play_label=(x[i].getElementsByTagName("playlabel")[0].childNodes[0].nodeValue);
					player_select=(x[i].getElementsByTagName("playerselected")[0].childNodes[0].nodeValue);
					plot_label=(x[i].getElementsByTagName("plotlabel")[0].childNodes[0].nodeValue);
					power_label=(x[i].getElementsByTagName("powerlabel")[0].childNodes[0].nodeValue);
					prev_remote_label=(x[i].getElementsByTagName("prevremotelabel")[0].childNodes[0].nodeValue);
					red_label=(x[i].getElementsByTagName("redlabel")[0].childNodes[0].nodeValue);
					remote_label=(x[i].getElementsByTagName("remotelabel")[0].childNodes[0].nodeValue);
					repeat_label=(x[i].getElementsByTagName("repeatlabel")[0].childNodes[0].nodeValue);
					results_text=(x[i].getElementsByTagName("resultstext")[0].childNodes[0].nodeValue);
					return_label=(x[i].getElementsByTagName("returnlabel")[0].childNodes[0].nodeValue);
					rewind_label=(x[i].getElementsByTagName("rewindlabel")[0].childNodes[0].nodeValue);
					right_label=(x[i].getElementsByTagName("rightlabel")[0].childNodes[0].nodeValue);
					search_select=(x[i].getElementsByTagName("searchselected")[0].childNodes[0].nodeValue);
					season_label=(x[i].getElementsByTagName("seasonlabel")[0].childNodes[0].nodeValue);
					season_select=(x[i].getElementsByTagName("seasonselected")[0].childNodes[0].nodeValue);
					selection_label=(x[i].getElementsByTagName("selectionlabel")[0].childNodes[0].nodeValue);
					selection_text=(x[i].getElementsByTagName("selection")[0].childNodes[0].nodeValue);
					series_label=(x[i].getElementsByTagName("serieslabel")[0].childNodes[0].nodeValue);
					series_select=(x[i].getElementsByTagName("serieselected")[0].childNodes[0].nodeValue);
					setup_label=(x[i].getElementsByTagName("setuplabel")[0].childNodes[0].nodeValue);
					show=(x[i].getElementsByTagName("show")[0].childNodes[0].nodeValue);
					source_label=(x[i].getElementsByTagName("sourcelabel")[0].childNodes[0].nodeValue);
					start_label=(x[i].getElementsByTagName("startlabel")[0].childNodes[0].nodeValue);
					stop_label=(x[i].getElementsByTagName("stoplabel")[0].childNodes[0].nodeValue);
					style_label=(x[i].getElementsByTagName("stylelabel")[0].childNodes[0].nodeValue);
					subtitle_label=(x[i].getElementsByTagName("subtitlelabel")[0].childNodes[0].nodeValue);
					time_seek_label=(x[i].getElementsByTagName("timeseeklabel")[0].childNodes[0].nodeValue);
					title_label=(x[i].getElementsByTagName("titlelabel")[0].childNodes[0].nodeValue);
					tv_mode_label=(x[i].getElementsByTagName("tvmodelabel")[0].childNodes[0].nodeValue);
					up_label=(x[i].getElementsByTagName("uplabel")[0].childNodes[0].nodeValue);
					volumedown_label=(x[i].getElementsByTagName("volumedownlabel")[0].childNodes[0].nodeValue);
					volumeup_label=(x[i].getElementsByTagName("volumeuplabel")[0].childNodes[0].nodeValue);
					year_label=(x[i].getElementsByTagName("yearlabel")[0].childNodes[0].nodeValue);
					yellow_label=(x[i].getElementsByTagName("yellowlabel")[0].childNodes[0].nodeValue);
					zoom_label=(x[i].getElementsByTagName("zoomlabel")[0].childNodes[0].nodeValue);

				// now set local lang usage depending of each file
				set_context_lang_value ();
			}
