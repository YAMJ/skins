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
		var skin_value = "bikini_skin_0_";
		// fetch the value in local storage
		function get_lang ()
			{
				if (localStorage.getItem("Lang"))
					{
						LangValue = localStorage.getItem("Lang");
						console.log("get_lang Lang: " + LangValue);
						set_context_lang_value ();
						//adjust_lang_setting(LangValue);
					}
				else {get_lang_();}
			}
		// fetch the value in the config database
		function get_lang_()
			{
			// check if there is an instance of the bikini skin choosen
				if (localStorage.getItem("skinset"))
					{skin_value = localStorage.getItem("skinset");
					console.log("get_lang_  get Lang from local storage: " + skin_value);}
					else {
						localStorage.setItem("skinset", skin_value);
						console.log("get_lang_  set Lang into local storage: " + skin_value);
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
				window.localStorage.setItem("Lang", lang2_);
				LangValue = lang2_;
				
			
			}

			
			
		function adjust_lang_setting(lang) {
		 console.log("adjust_lang_setting: "+lang);
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
					
					window.localStorage.setItem("action_label", (x[i].getElementsByTagName("actionlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("actor_label", (x[i].getElementsByTagName("actorlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("all_label", (x[i].getElementsByTagName("alllabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("all_genre",(x[i].getElementsByTagName("allgenre")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("all_select",(x[i].getElementsByTagName("allselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("angle_label",(x[i].getElementsByTagName("anglelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("any_label", (x[i].getElementsByTagName("anylabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("asc_label", (x[i].getElementsByTagName("ascending")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("audio_label", (x[i].getElementsByTagName("audiolabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("awards_label", (x[i].getElementsByTagName("awardslabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("blue_label", (x[i].getElementsByTagName("bluelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("boxset_label", (x[i].getElementsByTagName("boxsetlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("certification_label", (x[i].getElementsByTagName("certificationlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("click_to_display_with", (x[i].getElementsByTagName("clicktodisplaywith")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("close_label", (x[i].getElementsByTagName("closelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("close_navigation_menu", (x[i].getElementsByTagName("closenavigationmenu")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("close_remote_label", (x[i].getElementsByTagName("closeremotelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("combined_label", (x[i].getElementsByTagName("combinedlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("config_select", (x[i].getElementsByTagName("configselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("country_label", (x[i].getElementsByTagName("countrylabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("country_select", (x[i].getElementsByTagName("countryselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("creation_comment", (x[i].getElementsByTagName("creationcomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("creation_label", (x[i].getElementsByTagName("creationlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("delete_text", (x[i].getElementsByTagName("deletetext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("desc_label", (x[i].getElementsByTagName("descending")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("detail_comment", (x[i].getElementsByTagName("detailcomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("director_label", (x[i].getElementsByTagName("directorlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("down_label", (x[i].getElementsByTagName("downlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("download_text", (x[i].getElementsByTagName("downloadtext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("eject_label", (x[i].getElementsByTagName("ejectlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("enter_label", (x[i].getElementsByTagName("enterlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("enter_day_number", (x[i].getElementsByTagName("enterdaynumber")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("episode_label", (x[i].getElementsByTagName("episodelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("false_text", (x[i].getElementsByTagName("falsetext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("fanart_show", (x[i].getElementsByTagName("fanartshow")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("file_comment", (x[i].getElementsByTagName("filecomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("file_label", (x[i].getElementsByTagName("filelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("file_mode_label", (x[i].getElementsByTagName("filemodelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("filmography_label", (x[i].getElementsByTagName("filmographylabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("format_label", (x[i].getElementsByTagName("formatlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("fps_label", (x[i].getElementsByTagName("fpslabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("frame_comment", (x[i].getElementsByTagName("framecomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("frame_label", (x[i].getElementsByTagName("framelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("fwd_label", (x[i].getElementsByTagName("fwdlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("genre_label", (x[i].getElementsByTagName("genrelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("genre_select", (x[i].getElementsByTagName("genreselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("genrelist_select", (x[i].getElementsByTagName("genrelistselect")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("green_label", (x[i].getElementsByTagName("greenlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("home_label", (x[i].getElementsByTagName("homelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("ignore_text", (x[i].getElementsByTagName("ignoretext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("info_label", (x[i].getElementsByTagName("infolabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("key_label", (x[i].getElementsByTagName("keylabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("lang_comment", (x[i].getElementsByTagName("langcomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("lang_label", (x[i].getElementsByTagName("language")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("lastscan_comment", (x[i].getElementsByTagName("lastscancomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("lastscan_label", (x[i].getElementsByTagName("lastscanlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("left_label", (x[i].getElementsByTagName("leftlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("menu_label", (x[i].getElementsByTagName("menulabel")[0].childNodes[0].nodeValue));	
					window.localStorage.setItem("movie_label", (x[i].getElementsByTagName("movielabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("movie_select", (x[i].getElementsByTagName("movieselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("mute_label", (x[i].getElementsByTagName("mutelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("name_label", (x[i].getElementsByTagName("namelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("next_remote_label", (x[i].getElementsByTagName("nextremotelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("new_", (x[i].getElementsByTagName("new")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("new_comment", (x[i].getElementsByTagName("newcomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("nbrow_comment", (x[i].getElementsByTagName("nbrowcomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("nbofrow", (x[i].getElementsByTagName("nbrow")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("no_text", (x[i].getElementsByTagName("notext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("nobiography_text", (x[i].getElementsByTagName("nobiography")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("noplot_text", (x[i].getElementsByTagName("noplot")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("nobirthday_text", (x[i].getElementsByTagName("nobirthday")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("noposter_text", (x[i].getElementsByTagName("noposter")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("open_navigation_menu", (x[i].getElementsByTagName("opennavigationmenu")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("page_comment", (x[i].getElementsByTagName("pagecomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("page_label", (x[i].getElementsByTagName("pagelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("page_style_comment", (x[i].getElementsByTagName("pagestylecomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("pause_label", (x[i].getElementsByTagName("pauselabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("person_label", (x[i].getElementsByTagName("personlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("person_select", (x[i].getElementsByTagName("personselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("person_show", (x[i].getElementsByTagName("personshow")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("play_label", (x[i].getElementsByTagName("playlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("player_comment", (x[i].getElementsByTagName("playercomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("player_select", (x[i].getElementsByTagName("playerselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("plot_label", (x[i].getElementsByTagName("plotlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("popup_comment", (x[i].getElementsByTagName("popupcomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("popup_label", (x[i].getElementsByTagName("popuplabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("power_label", (x[i].getElementsByTagName("powerlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("prefered_", (x[i].getElementsByTagName("prefered")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("prefered_comment", (x[i].getElementsByTagName("preferedcomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("prev_remote_label", (x[i].getElementsByTagName("prevremotelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("producer_label", (x[i].getElementsByTagName("producerlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("rating_label", (x[i].getElementsByTagName("ratinglabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("rating_index", (x[i].getElementsByTagName("ratingindex")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("red_label", (x[i].getElementsByTagName("redlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("remote_label", (x[i].getElementsByTagName("remotelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("remove_text", (x[i].getElementsByTagName("removetext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("remove_fanart_text", (x[i].getElementsByTagName("removefanarttext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("remove_poster_text", (x[i].getElementsByTagName("removepostertext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("repeat_label", (x[i].getElementsByTagName("repeatlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("results_text", (x[i].getElementsByTagName("resultstext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("ribbon_comment", (x[i].getElementsByTagName("ribboncomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("ribbon_label", (x[i].getElementsByTagName("ribbonlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("return_label", (x[i].getElementsByTagName("returnlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("runtime_label", (x[i].getElementsByTagName("runtimelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("rewind_label", (x[i].getElementsByTagName("rewindlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("right_label", (x[i].getElementsByTagName("rightlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("search_select", (x[i].getElementsByTagName("searchselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("season_label", (x[i].getElementsByTagName("seasonlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("season_select", (x[i].getElementsByTagName("seasonselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("select_type", (x[i].getElementsByTagName("selecttype")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("selected_", (x[i].getElementsByTagName("selected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("selection_label", (x[i].getElementsByTagName("selectionlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("selection_text", (x[i].getElementsByTagName("selection")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("series_label", (x[i].getElementsByTagName("serieslabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("series_select", (x[i].getElementsByTagName("serieselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("setup_label", (x[i].getElementsByTagName("setuplabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("show", (x[i].getElementsByTagName("show")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("skin_", (x[i].getElementsByTagName("skin")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("sort_label", (x[i].getElementsByTagName("sortlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("source_label", (x[i].getElementsByTagName("sourcelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("start_label", (x[i].getElementsByTagName("startlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("stop_label", (x[i].getElementsByTagName("stoplabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("studio_select", (x[i].getElementsByTagName("studioselected")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("style_comment", (x[i].getElementsByTagName("stylecomment")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("style_label", (x[i].getElementsByTagName("stylelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("subtitle_label", (x[i].getElementsByTagName("subtitlelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("time_seek_label", (x[i].getElementsByTagName("timeseeklabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("title_label", (x[i].getElementsByTagName("titlelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("transform_error_text", (x[i].getElementsByTagName("transformerrortext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("true_text", (x[i].getElementsByTagName("truetext")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("tv_mode_label", (x[i].getElementsByTagName("tvmodelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("unwatched_select", (x[i].getElementsByTagName("unwatchedselect")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("update_label", (x[i].getElementsByTagName("updatelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("up_label", (x[i].getElementsByTagName("uplabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("value_label", (x[i].getElementsByTagName("valuelabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("video_label", (x[i].getElementsByTagName("videolabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("volumedown_label", (x[i].getElementsByTagName("volumedownlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("volumeup_label", (x[i].getElementsByTagName("volumeuplabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("year_label", (x[i].getElementsByTagName("yearlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("yellow_label", (x[i].getElementsByTagName("yellowlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("watched_select", (x[i].getElementsByTagName("watchedselect")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("writer_label", (x[i].getElementsByTagName("writerlabel")[0].childNodes[0].nodeValue));
					window.localStorage.setItem("zoom_label", (x[i].getElementsByTagName("zoomlabel")[0].childNodes[0].nodeValue));

				// now set local lang usage depending of each file
				set_context_lang_value ();
			}

	 function translate_job (job)  
		{
				var res = job.replace(/writer/gi, window.localStorage.getItem('writer_label').substring(0,1).toUpperCase() +  window.localStorage.getItem('writer_label').substring(1).toLowerCase());
				res = res.replace(/director/gi, window.localStorage.getItem('director_label').substring(0,1).toUpperCase() +  window.localStorage.getItem('director_label').substring(1).toLowerCase());
				res = res.replace(/actor/gi, window.localStorage.getItem('actor_label').substring(0,1).toUpperCase() +  window.localStorage.getItem('actor_label').substring(1).toLowerCase());
				res = res.replace(/producer/gi, window.localStorage.getItem('producer_label').substring(0,1).toUpperCase() +  window.localStorage.getItem('producer_label').substring(1).toLowerCase());

	//	console.log("translate_job job:" + job + " res:" + res);
		return res;
		}
	