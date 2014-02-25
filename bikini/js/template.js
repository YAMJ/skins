//**************************************** TEMPLATE ********************************************************
	// this .js is added to all html and group function that will be used by every files 
	// add the following line in the <head> section
	// <script src="js/template.js"></script>
	// usage : add  outputJson(yamjdata) in $ajax contents  
	// display: add  <div id="sourceData"></div>  at the end of the body section 
//**********************************************************************************************************
	var StyleValue = "frame";
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
					delay: 20
				});
			}
			
	// hidden what is asked 
		function nodisplay_Id(Id_to_nodisplay)
					{			
				//		document.getElementById(Id_to_nodisplay).style.visibility="hidden";
				var tempid = "#"+Id_to_nodisplay;
				$(tempid).css('visibility', 'hidden');
					}
	// display the Id selected 
		function display_Id(Id_to_display)
					{			
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
				if (newpage) 
				{
					Indexpopup = window.open("navGenre.html", "YAMJ v3 index","");
				} else {
					window.location.href="navGenre.html";
				}
			}
			
	// open or change window to select index person page 
		function call_personindex(newpage)
			{
				console.log("call_personindex: ");
				if (newpage) 
					{
						Indexpopup = window.open("index_person.html", "YAMJ v3 index","");
					} else {
						window.location.href="index_person.html";
					}
			}
	// open or change vertical popup window to select index person page 
		function call_personpopup()
			{
				console.log("call_personpopup: ");
				Personpopup = window.open("navAllPerson.html", "YAMJv3 Navigation All Person","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=180px, top=5px, width=150px, height=1000px");

			}
	// change index page 
		function ChangeIndex (indextype)
			{		
					window.localStorage.setItem("indextype", indextype);
					console.log("Changeindex: "+indextype);
					window.location.href="index.html";
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
								console.log("direct_play file: " + files[0].filename);
								play_to_device(files[0].filename);
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
			console.log("play_to_device: "+PlayerValue+", basefilename=" +basefilename); 
			for(var j = 0; j < (nbre_translate_path+1); j++){
				if (basefilename.substring(0,source_path[j].length) == source_path[j])
					{
				filenametoplay = basefilename.substring(source_path[j].length);
		//		tempfile = filenametoplay.replace(/\&/g,"%26").replace(/\?/g,"%3F").replace(/\+/g,"%2B");
		//   	will be checked later if necessary		
		//		console.log("play_to_device filename: "+filenametoplay);
				temp_file_name = filenametoplay.substring(0,filenametoplay.lastIndexOf('.'));
				file_name = temp_file_name.substring(temp_file_name.lastIndexOf('/')+1);
				var UrlPlay="http://"+Ip_device+":8008/playback?arg0="+playcommand+"&arg1="+file_name+"&arg2="+target_path[j]+filenametoplay+"&arg3=show&arg4=0&arg5=0&arg6=disable";
				Currentfilename = file_name;
				CurrentUrlPlay = UrlPlay;
					}
				}
		//	console.log("play_to_device: " +UrlPlay);
			document.getElementById("infobox").innerHTML=play_label.toUpperCase()+": "+file_name+ " ?";
			document.getElementById("infobox").style.visibility="visible";
			myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
			}	

	// if playing is confirmed stop timer, send the playing command and open remote
	function start_playing ()
		{
			myStopFunction('infobox');
			$.get(CurrentUrlPlay);
			console.log("start_playing: " +Currentfilename+ ", CurrentUrlPlay: "+CurrentUrlPlay);
			ouvre_remote ();
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
				var UrlPlay="http://"+Ip_device+":8008/playback?arg0="+playcommand+"&arg1="+file_name+"&arg2="+target_path[j]+filenametoplay+"&arg3=show&arg4=0&arg5=0&arg6=disable";
				Currentfilename = file_name;
				CurrentUrlPlay = UrlPlay;
					}
				}
				console.log("episode_to_play:" +CurrentUrlPlay);
			}
	// when episode and click on the play icon set timer to confirm playing 
	function play_episode ()
		{	
			document.getElementById("infobox").innerHTML=play_label.toUpperCase()+": "+Currentfilename+ " ?";
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