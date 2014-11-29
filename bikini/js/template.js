//**************************************** TEMPLATE ********************************************************
	// this .js is added to all html and group function that will be used by every files 
	// add the following line in the <head> section
	// <script src="js/template.js"></script>
	// usage : add  outputJson(yamjdata) in $ajax contents  
	// display: add  <div id="sourceData"></div>  at the end of the body section 
//**********************************************************************************************************
	var StyleValue = "frame";
	var NewValue = "30-file";
	var vlc_added = null;
	

	// Add the source output to the end of the page
        function outputJson(yamjdata)
            {
                var sourceData = document.getElementById("sourceData");
                sourceData.setAttribute("class", "code");
                sourceData.innerHTML = '<h4>Source data:</h4>';
                sourceData.appendChild(document.createElement('pre')).innerHTML = JSON.stringify(yamjdata, undefined, 4);
            }

    // Create the pagination for the index using jPages.
    // Will place the page list in the "div.holder" and page the "yRow" data.
    // Animation comes from animate.css
        function pageData(perPageValue)
			{
				$("div.holder").jPages({
					containerID: "yRow",
					animation: "fadeInUpBig",
					perPage: perPageValue,
					minHeight: false,
					delay: 20
				});
			}
			
	// hidden what is asked 
		function nodisplay_Id(Id_to_nodisplay)
					{			
				//		document.getElementById(Id_to_nodisplay).style.visibility="hidden";
				console.log("nodisplay_Id: "+Id_to_nodisplay);
				var tempid = "#"+Id_to_nodisplay;
				$(tempid).css('visibility', 'hidden');
					}
	// display the Id selected 
		function display_Id(Id_to_display)
					{		
						console.log("display_Id: "+Id_to_display);
						document.getElementById(Id_to_display).style.visibility="visible";
					}
	// on - off on the Id selected 
		function toggle_Id(Id_to_toggle)
					{			
						if (document.getElementById(Id_to_toggle).style.visibility == "visible")
						{ 
							document.getElementById(Id_to_toggle).style.visibility = "hidden";
						} else {
							document.getElementById(Id_to_toggle).style.visibility = "visible";
						}
					}
		// on - off on the class selected 
		function toggle_class(class_to_toggle)
					{			
						if ($('.'+class_to_toggle).css('visibility') == "visible")
						{ 
							$('.'+class_to_toggle).css('visibility', 'hidden');
						} else {
							$('.'+class_to_toggle).css('visibility', 'visible');
						}
					}
		// on the class selected 
		function display_class(class_to_toggle)
					{$('.'+class_to_toggle).css('visibility', 'visible');}
		// off the class selected 
		function nodisplay_class(class_to_toggle)
					{$('.'+class_to_toggle).css('visibility', 'hidden');}
	// on click, show or hide the submenu, apply to the Yamj left upper menu 
	// menu is to navigate to all the index pages without an argument 
		
		function toggle_menuleft()
					{	
						
						if (menuleft_toggle == 0)
						{ 
							menuleft_toggle = 1;
							
							$('#li_all_up').css('visibility', 'visible');
							$('#li_movie_up').css('visibility', 'visible');
							$('#li_series_up').css('visibility', 'visible');
							$('#li_season_up').css('visibility', 'visible');
							$('#li_person_up').css('visibility', 'visible');
							$('#li_genre_up').css('visibility', 'visible');			
							$('#li_search_up').css('visibility', 'visible');	
							$('#li_config_up').css('visibility', 'visible');
							$('#li_remote_up').css('visibility', 'visible');								
						} else {
							menuleft_toggle =  0;
							
							$('#li_all_up').css('visibility', 'hidden');
							$('#li_movie_up').css('visibility', 'hidden');
							$('#li_series_up').css('visibility', 'hidden');
							$('#li_season_up').css('visibility', 'hidden');
							$('#li_person_up').css('visibility', 'hidden');
							$('#li_genre_up').css('visibility', 'hidden');	
							$('#li_search_up').css('visibility', 'hidden');	
							$('#li_config_up').css('visibility', 'hidden');
							$('#li_remote_up').css('visibility', 'hidden');
						}
					}
					
	// open a new window to select search functionnality 
		function ouvre_popup_search(StyleValue) 
			{
				switch (StyleValue)
					{
					case 'frame':
						{
							console.log("ouvre_popup_search:  style:"+StyleValue);								
							parent.frames['target_frame'].location.href='search.html';
							toggle_Id('target_display');
							break;
						} 
					case 'popup':
						{
							console.log("ouvre_popup_search:  style:"+StyleValue);
							Configpopup = window.open("search.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=1040px, height=305px");
							break;
						}
					case 'ribbon':
						{
							console.log("ouvre_popup_search:  style:"+StyleValue);
							Searchpopup = window.open("search.html", "YAMJ v3 search","channelmode=no, status=no, scrollbars=hidden, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=1040px, height=305px");
							break;
						}
					case 'page':
						{
							console.log("ouvre_popup_search:  style:"+StyleValue);
							Configpopup = window.open("search.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=1040px, height=305px");
							break;
						}
					return;
					
				}
			}
	// open a new window to select configuration functionnality 
		function ouvre_config(StyleValue) 
			{
			switch (StyleValue)
					{
					case 'frame':
						{
							console.log("ouvre_config:  style:"+StyleValue);								
							parent.frames['target_frame'].location.href='config.html';
							toggle_Id('target_display');
							break;
						} 
					case 'popup':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Configpopup = window.open("config.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=320px");
							break;
						}
					case 'ribbon':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Configpopup = window.open("config.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=320px");
							break;
						}
					case 'page':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Configpopup = window.open("config.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=320px");
							break;
						}
					return;
					
				}
			}		
	// open or change to index genre page
		function call_genreindex(indextype, newpage)
			{
				localStorage.setItem("indextype", indextype);
				console.log("call_genreindex with type: "+indextype);
				if (newpage == 'true') 
				{
					Indexpopup = window.open("navGenre.html", "YAMJv3 Navigation genre index","");
				} else {
					Indexpopup = window.open("navGenre.html", "_self","");
				}
			}
		// open or change to index certification page
		function call_certificationindex(indextype, newpage)
			{
				localStorage.setItem("indextype", indextype);
				console.log("call_certificationindex with type: "+indextype);
				if (newpage == 'true') 
				{
					Indexpopup = window.open("navCertification.html", "YAMJv3 Navigation certification index","");
				} else {
					Indexpopup = window.open("navCertification.html", "_self","");
				}
			}
		// open or change to index studio page
		function call_studioindex(indextype, newpage)
			{
				localStorage.setItem("indextype", indextype);
				console.log("call_studioindex with type: "+indextype);
				if (newpage =='true') 
				{
					Indexpopup = window.open("navStudio.html", "YAMJv3 Navigation studio index","");
				} else {
					Indexpopup = window.open("navStudio.html", "_self","");
				}
			}
		// open or change to index rating page
		function call_ratingindex(indextype, newpage)
			{
				localStorage.setItem("indextype", indextype);
				console.log("call_ratingindex with type: "+indextype);
				if (newpage =='true') 
				{
					Indexpopup = window.open("navRating.html", "YAMJv3 Navigation rating index","");
				} else {
					Indexpopup = window.open("navRating.html", "_self","");
				}
			}
	// open or change to index videosource page
		function call_videosourceindex(indextype, newpage)
			{
				localStorage.setItem("indextype", indextype);
				console.log("call_videosourceindex with type: "+indextype);
				if (newpage =='true') 
				{
					Indexpopup = window.open("navVideosource.html", "YAMJv3 Navigation videosource index","");
				} else {
					Indexpopup = window.open("navVideosource.html", "_self","");
				}
			}
	// open all person depending of the style 
		function call_person(newpage)
			{
				console.log("call_person: newpage="+newpage+" style:"+StyleValue);
				switch (StyleValue)
					{
					case 'frame':
						{
						
									parent.frames['person_frame'].location.href='index_Person_frame.html';								
									parent.document.getElementById('person_frame').style.display="block";
									parent.document.getElementById('person_display').style.visibility="visible";	
								
						break;
						} 
					case 'popup':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Personpopup = window.open("navAllPerson.html", "YAMJv3 Navigation All Person","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=180px, top=5px, width=1290px, height=210px");	
							break;
						}
					case 'ribbon':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Personpopup = window.open("navAllPerson.html", "YAMJv3 Navigation All Person","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=180px, top=5px, width=150px, height=1000px");
							break;
						}
					case 'page':
						{
							if (newpage == 'true') 
								{
									Indexpopup = window.open("index_person.html", "YAMJ v3 index","");
								} else {
									Indexpopup = window.open("index_person.html", "_self","");
								}
							break;
						}
					}
			}
	// open or change window to select index person page 
		function call_personindex(newpage)
			{
				console.log("call_personindex: newpage=" + newpage);
				if (newpage == 'true') 
					{
						Indexpopup = window.open("index_person.html", "YAMJ v3 index","");
					} else {
						Indexpopup = window.open("index_person.html", "_self");
					}
			}
	// open or change vertical popup - ribbon window to select index person page 
		function call_personribbon()
			{
				console.log("call_personribbon: ");
				Personpopup = window.open("navAllPerson.html", "YAMJv3 Navigation All Person","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=180px, top=5px, width=150px, height=1000px");

			}
	// open or change vertical popup window to select index person page 
		function call_personpopup()
			{
				console.log("call_personpopup: ");
				Personpopup = window.open("navAllPerson.html", "YAMJv3 Navigation All Person","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=180px, top=5px, width=1290px, height=210px");

			}
	// open person display for id selected
		function open_person_popup(id, back_close)
			{
			   
				localStorage.setItem("Person_id", id);
				console.log("template open_person_popup Storing value: Person_id"  + id + " close: " + back_close);
			   
			   if (window.localStorage.getItem('Style') == "frame")
					{
						window.localStorage.setItem('back_close', back_close);
						parent.frames['target_frame'].location.href='Popup_Person.html';
						parent.document.getElementById('person_display').style.zIndex="2";
						toggle_Id('target_display');
				
					} else { 
					window.localStorage.setItem('back_close', 'close');
					Mypopup = window.open("Popup_Person.html", "YAMJ v3 Person popup","channelmode=no, menubar=no, status=no, scrollbars=no, menubar=no, location=no, left=310px, top=5px, width=1120px, height=720px");
					Mypopup.focus();
					}
			}
	// change index page 
		function ChangeIndex (indextype)
			{		
					window.localStorage.setItem("indextype", indextype);
					console.log("Changeindex: "+indextype);
					Indexpopup = window.open("index.html", "_self","");
			}
	// watched selection 
		function WatchedSelection (href_target, watchedselect)
			{		
					window.localStorage.setItem("watched", watchedselect);
					console.log("WatchedSelection: "+watchedselect);
					Indexpopup = window.open(href_target, "_self","");
			}
	// newest selection 
		function NewestSelection (href_target, newestselect)
			{		
					window.localStorage.setItem("newest", newestselect);
					console.log("NewestSelection: "+newestselect);
					Indexpopup = window.open(href_target, "_self","");
			}
	// boxset selection 
		function BoxsetSelection (href_target)
			{		
					console.log("BoxsetSelection: ");
					Indexpopup = window.open(href_target, "_self","");
			}
	// fetch the style value in the config database , value available : page, ribbon, frame, popup
		function get_style()
			{
				var jsonStyleUrl = "/yamj3/api/config/list.json?config="+skin_value+"style&mode=any";
				console.log("get_style jsonStyleUrl: " + jsonStyleUrl);
				$.ajax({
                   url: jsonStyleUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinStyle)
                   {
						jsondata = dataSkinStyle;
				//		outputJson(dataSkinLang);
						checkStyle(dataSkinStyle);
						}
					
				});	
			 return jsondata;
		}
		
	// update  the style value in the config database, value available : page, ribbon, frame, popup
		function update_Style(style_) 
		{
				var jsonStyleUrl = "/yamj3/api/config/update.json?key="+skin_value+"style&value="+style_+"";
				console.log("update_Style jsonStyleUrl: " + jsonStyleUrl);
				$.ajax({
                   url: jsonStyleUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinStyle)
                   {
						jsondata = dataSkinStyle;
					//	outputJson(dataSkinStyle);
						set_Style_value(style_);
					}
					
				});	
			 return jsondata;
		}	
		
		function checkStyle(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
									if (arg.context.count) {
										console.log("checkStyle: "+arg.context.results[0].value);
										set_Style_value(arg.context.results[0].value);
										return arg.context.results[0].value;} else {
										console.log("checkStyle: no value found");
										update_Style('frame');}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	
	
	// set the rules to adjust style to the style choosen : value available : page, ribbon, frame, popup
		function set_Style_value(style_)
			{
				StyleValue = style_;
				console.log('set style:'+style_);
				window.localStorage.setItem("Style", style_);
		
			}
			
			
		// fetch the new value in the config database , value available : creation, file, lastscan
		function get_new()
			{
				var jsonNewUrl = "/yamj3/api/config/list.json?config="+skin_value+"New&mode=any";
				console.log("get_style jsonStyleUrl: " + jsonNewUrl);
				$.ajax({
                   url: jsonNewUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataNew)
                   {
						jsondata = dataNew;
				//		outputJson(dataSkinLang);
						checkNew(dataNew);
						}
					
				});	
			 return jsondata;
		}
		
	// update  the new value in the config database, value available : creation, file, lastscan
		function update_New(new_) 
		{
				var jsonNewUrl = "/yamj3/api/config/update.json?key="+skin_value+"New&value="+new_+"";
				console.log("update_New jsonNewUrl: " + jsonNewUrl);
				$.ajax({
                   url: jsonNewUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataNew)
                   {
						jsondata = dataNew;
					//	outputJson(dataSkinStyle);
						set_New_value(new_);
					}
					
				});	
			 return jsondata;
		}	
		
		function checkNew(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
									if (arg.context.count) {
										console.log("checkNew: "+arg.context.results[0].value);
										set_New_value(arg.context.results[0].value);
										return arg.context.results[0].value;} else {
										console.log("checkNew: no value found");
										update_Style('frame');}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	
	
	// set the rules to adjust new to the new choosen : value available : creation, file, lastscan
		function set_New_value(new_)
			{
				NewValue = new_;
				console.log('set new:'+new_);
				window.localStorage.setItem("New", new_);
		
			}
		function network_device_list ()
			{
			
						var path = window.location.pathname.split('/');
						console.log("PING", path);
					
			
			} 

    function myIP(){ 
 
    // do some work, get variables

	 
	 $.get("myIP.php", function(data) {
		
		document.getElementById("ip").innerHTML=data[1];
//		$("#ip").val("test");
//	 console.log ("myIp: " +data);
	 });
	
   
		
	}//end myIP

	// update  the skin value in the config database, 
	function update_Skin(skin_) 
		{
			localStorage.setItem("skinset", skin_);
			get_lang();
			get_style();
			get_player();
			get_poster_number ();
		}	

	function direct_play (videoType,id ) 
		{
				var DIRECT_PLAY = {
						// display the file path stored in database		
						'span.filepath': function(arg)
							{
								var files = arg.context.result.files;
								console.log("direct_play file: " + files[0].fileName);
								play_to_device(files[0].fileName);
								return "";
								
							}	
						};
				DirectPlayUrl = "/yamj3/api/video/" + videoType.toLowerCase() + "/" + id + ".json?dataitems=files";
				console.log("direct_play URL: " + DirectPlayUrl);
				    
                $.ajax({
                    url: DirectPlayUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(DirectPlayData)
                    {
                        jsondata = DirectPlayData;
						// outputJson(DirectPlayData); 
						$p('.directplay').render(DirectPlayData, DIRECT_PLAY);
						
					}
                });
        }
	
	function direct_info (videoType,id ) 
		{
			window.localStorage.setItem("indextype", videoType);
            window.localStorage.setItem("id", id);
            console.log("direct_info: " + videoType + "-" + id);	
			parent.frames['detail_frame'].location.href='detail_frame.html';
			toggle_Id('detail_display');
          
        }
		
	// called when it's a movie , prepare the play path and set the timer to confirm playing
	function play_to_device(basefilename)
			{
			console.log("play_to_device: "+Device_type+":"+PlayerValue+", basefilename=" +basefilename); 
			for(var j = 0; j < (nbre_translate_path+1); j++){
				if (basefilename.substring(0,source_path[j].length) == source_path[j])
					{
				filenametoplay = basefilename.substring(source_path[j].length);
		//		tempfile = filenametoplay.replace(/\&/g,"%26").replace(/\?/g,"%3F").replace(/\+/g,"%2B");
		//   	will be checked later if necessary		
		//		console.log("play_to_device filename: "+filenametoplay);
				temp_file_name = filenametoplay.substring(0,filenametoplay.lastIndexOf('.'));
				file_name = temp_file_name.substring(temp_file_name.lastIndexOf('/')+1);
				switch (Device_type)
					{
					case 'PCH': 
						var UrlPlay="http://"+Ip_device+":8008/playback?arg0="+playcommand+"&arg1="+file_name+"&arg2="+target_path[j]+filenametoplay+"&arg3=show&arg4=0&arg5=0&arg6=disable";
						Currentfilename = file_name;
						CurrentUrlPlay = UrlPlay;
									console.log("play_to_device: " +UrlPlay);
						document.getElementById("infobox").innerHTML=play_label.toUpperCase()+": "+file_name+ " ?";
						document.getElementById("infobox").style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
					break; 
					case 'PC':
						Currentfilename = file_name;
						var UrlPlay=target_path[j]+filenametoplay;
						CurrentUrlPlay = UrlPlay;
						localStorage.setItem("ToPlay", UrlPlay);
						PopPlayer ();
					break; 
						
					case 'SMARTPHONE':
						var UrlPlay=target_path[j]+filenametoplay;
						$.get(UrlPlay);	
					break; 
					};
				
				}

			}	
		}
	function PopPlayer()
			{
						console.log("PopPlayer: " +Currentfilename+ ", CurrentUrlPlay: "+CurrentUrlPlay);
						document.getElementById("infobox").innerHTML=play_label.toUpperCase()+PlayerValue+": "+file_name+ "?"
						document.getElementById("infobox").style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
			//	window.open("Popup_Player.html", "YAMJv3 Player", "height=510, width=665, left=0, channelmode=no, directories=no, location=no,	menubar=no, resizable=yes, status=no, scrollbars=no,toolbar=no",false);
			}
	function PopDelete(Current_stage_file_Id, Current_title)
			{
						console.log("PopDelete:  Current_stage_file_Id: "+Current_stage_file_Id);
						document.getElementById("infobox_delete").innerHTML="Delete: "+Current_stage_file_Id+ " : " + Current_title + "?"
						document.getElementById("infobox_delete").style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction('infobox_delete');},5000);
			}	
	// if it is confirmed stop timer and call the delete action to make his job			
	function start_delete ()
		{
			myStopFunction('infobox_delete');
			delete_stage_file_Id ()
		}
	function PopIgnore(Current_artwork_type, Current_located_Id)
			{
						console.log("PopIgnore:  Current_located_Id: "+Current_located_Id);
						var infobox_artwork = ""
						if (Current_artwork_type == "poster")
						{ infobox_artwork = "infobox_ignore_poster";}
						else {infobox_artwork = "infobox_ignore_fanart";}

						document.getElementById(infobox_artwork).innerHTML="Ignore: "+ Current_located_Id + "?"
						document.getElementById(infobox_artwork).style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction(infobox_artwork);},5000);
			}	
	// if it is confirmed stop timer and call the delete action to make his job			
	function start_ignore (infobox_artwork)
		{
			myStopFunction(infobox_artwork);
			ignore_located_Id ()
		}
	// if playing is confirmed stop timer, send the playing command and open remote
	function start_playing ()
		{
			myStopFunction('infobox');
			switch (Device_type)
					{
					case 'PCH': 
						$.get(CurrentUrlPlay);
						console.log("start_playing PCH: " +Currentfilename+ ", CurrentUrlPlay: "+CurrentUrlPlay);
						ouvre_remote ();
					break; 
					case 'PC':
						console.log("start_playing PC: " +Currentfilename+ ", CurrentUrlPlay: "+CurrentUrlPlay);
						window.open("Popup_Player.html", "YAMJv3 Player", "height=510, width=665, left=0, channelmode=no, directories=no, location=no,	menubar=no, resizable=yes, status=no, scrollbars=no,toolbar=no",false);
					break; 
						
					case 'SMARTPHONE':
						var UrlPlay=target_path[j]+filenametoplay;
						$.get(UrlPlay);	
					break; 
					};
			
			
	
		}
		
	// this function is called when the episode is selected , start playing needs to click on the play movie icon
	function episode_to_play(basefilename)
			{
			console.log("episode_to_play :"+PlayerValue+" basefilename=" +basefilename); 
			for(var j = 0; j < (nbre_translate_path+1); j++){
				if (basefilename.substring(0,source_path[j].length) == source_path[j])
					{
				filenametoplay = basefilename.substring(source_path[j].length);
		//		tempfile = filenametoplay.replace(/\&/g,"%26").replace(/\?/g,"%3F").replace(/\+/g,"%2B");
		//   	will be checked later if necessary		
				console.log("filename: "+filenametoplay);

				temp_file_name = filenametoplay.substring(0,filenametoplay.lastIndexOf('.'));
				file_name = temp_file_name.substring(temp_file_name.lastIndexOf('/')+1);
		//		var UrlPlay="http://"+Ip_device+":8008/playback?arg0="+playcommand+"&arg1="+file_name+"&arg2="+target_path[j]+filenametoplay+"&arg3=show&arg4=0&arg5=0&arg6=disable";
		//		Currentfilename = file_name;
		//		CurrentUrlPlay = UrlPlay;
				switch (Device_type)
					{
					case 'PCH': 
						var UrlPlay="http://"+Ip_device+":8008/playback?arg0="+playcommand+"&arg1="+file_name+"&arg2="+target_path[j]+filenametoplay+"&arg3=show&arg4=0&arg5=0&arg6=disable";
						Currentfilename = file_name;
						CurrentUrlPlay = UrlPlay;
								//	console.log("play_to_device: " +UrlPlay);
						document.getElementById("infobox").innerHTML=play_label.toUpperCase()+": "+file_name+ " on "+PlayerValue+"?";
						document.getElementById("infobox").style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
					break; 
					case 'PC':
						var UrlPlay=target_path[j]+filenametoplay;
						Currentfilename = file_name;
						CurrentUrlPlay = UrlPlay;
						localStorage.setItem("ToPlay", UrlPlay);
						PopPlayer ();
					break; 
						
					case 'SMARTPHONE':
						var UrlPlay=target_path[j]+filenametoplay;
						$.get(UrlPlay);	
					break; 
					};
		
		
		
		
		
					}
				}
				console.log("episode_to_play:" +CurrentUrlPlay);
			}
			
	function preset_episode_to_play(basefilename)
			{
			console.log("preset_episode_to_play :"+PlayerValue+" basefilename=" +basefilename); 
			for(var j = 0; j < (nbre_translate_path+1); j++){
				if (basefilename.substring(0,source_path[j].length) == source_path[j])
					{
				filenametoplay = basefilename.substring(source_path[j].length);
		//		tempfile = filenametoplay.replace(/\&/g,"%26").replace(/\?/g,"%3F").replace(/\+/g,"%2B");
		//   	will be checked later if necessary		
				console.log("filename: "+filenametoplay);

				temp_file_name = filenametoplay.substring(0,filenametoplay.lastIndexOf('.'));
				file_name = temp_file_name.substring(temp_file_name.lastIndexOf('/')+1);
		//		var UrlPlay="http://"+Ip_device+":8008/playback?arg0="+playcommand+"&arg1="+file_name+"&arg2="+target_path[j]+filenametoplay+"&arg3=show&arg4=0&arg5=0&arg6=disable";
		//		Currentfilename = file_name;
		//		CurrentUrlPlay = UrlPlay;
				switch (Device_type)
					{
					case 'PCH': 
						var UrlPlay="http://"+Ip_device+":8008/playback?arg0="+playcommand+"&arg1="+file_name+"&arg2="+target_path[j]+filenametoplay+"&arg3=show&arg4=0&arg5=0&arg6=disable";
						Currentfilename = file_name;
						CurrentUrlPlay = UrlPlay;
							console.log("preset_episode_to_play: on PCH " +UrlPlay);
						document.getElementById("infobox").innerHTML=play_label.toUpperCase()+": "+file_name+ " on "+PlayerValue+"?";
						// document.getElementById("infobox").style.visibility="visible";
						// myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
					break; 
					case 'PC':
						var UrlPlay=target_path[j]+filenametoplay;
						Currentfilename = file_name;
						CurrentUrlPlay = UrlPlay;
						localStorage.setItem("ToPlay", UrlPlay);
							console.log("preset_episode_to_play: pn PC " +UrlPlay);
						// PopPlayer ();
					break; 
						
					case 'SMARTPHONE':
						var UrlPlay=target_path[j]+filenametoplay;
						//	console.log("preset_episode_to_play: on Smartphone " +UrlPlay);
						// $.get(UrlPlay);	
					break; 
					};

					}
				}
			}
	// when episode and click on the play icon set timer to confirm playing 
	function play_episode ()
		{	
			document.getElementById("infobox").innerHTML=play_label.toUpperCase()+": "+file_name+ " on "+PlayerValue+"?"
			document.getElementById("infobox").style.visibility="visible";
			myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
		}
		
		// open remote 
		function ouvre_remote() 
		{
				switch (StyleValue)
					{
					case 'frame':
						{
							parent.frames['remote_frame'].location.href='my_remote.html';
							document.getElementById("remote").style.visibility="visible";
							break;
						} 
					case 'popup':
						{
							Remotepopup = window.open("my_remote.html", "YAMJv3 Remote","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=1050px, top=150px, width=420px, height=650px");
							break;
						}
					case 'ribbon':
						{
						Remotepopup = window.open("my_remote.html", "YAMJv3 Remote","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=1050px, top=150px, width=420px, height=650px");
							break;
						}
					case 'page':
						{
							Remotepopup = window.open("my_remote.html", "YAMJv3 Remote","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=1050px, top=150px, width=420px, height=650px");
							break;
						}
					
				}

		}
	//close remote
		function close_remote() 
		{
			document.getElementById("remote").style.visibility="hidden";
		}
		
	// get the cursor position , apply this position to the display_frame if not in paging mode 
		// if at the top of the screen just stay fixed, position the middle of the frame at cursor height position 
		function cursor_position () {
		if (window.localStorage.getItem("Paging") != 'true') { 	
			$(this).mousemove(function(e){
				if (e.pageY > 850 ) {
						$('#detail_display').css('top', e.pageY - 250);
					}
			});
			}
		}
	// open the general system yamj3 page 	
	function ouvre_yamj3 ()
		{
		console.log("detail ouvre_yamj3");
		window.open("/yamj3/", "_blank","");
		}
	// open the general system yamj3 page 	
	function ouvre_genrelist ()
		{
		console.log("detail ouvre_yamj3");
		window.open("Genre_Config.html", "_self","");
		}