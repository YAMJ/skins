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
							console.log("ouvre_config:  style:"+StyleValue);
							Configpopup = window.open("search.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=305px");
							break;
						}
					case 'ribbon':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Searchpopup = window.open("search.html", "YAMJ v3 search","channelmode=no, status=no, scrollbars=hidden, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=305px");
							break;
						}
					case 'page':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Configpopup = window.open("search.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=305px");
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
							Configpopup = window.open("config.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=220px");
							break;
						}
					case 'ribbon':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Configpopup = window.open("config.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=220px");
							break;
						}
					case 'page':
						{
							console.log("ouvre_config:  style:"+StyleValue);
							Configpopup = window.open("config.html", "YAMJ v3 config","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=380px, top=5px, width=960px, height=220px");
							break;
						}
					return;
					
				}
			}		
	// open or change to index genre page
		function call_genreindex(indextype, newpage)
			{
				localStorage.setItem("type", indextype);
				console.log("call genreindex with type: "+indextype);
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
					window.localStorage.setItem("type", indextype);
					console.log("call Changeindex: "+indextype);
					window.location.href="index.html";
			}
	// fetch the style value in the config database , value available : page, ribbon, frame, popup
		function get_style()
			{
				var jsonStyleUrl = "/yamj3/api/config/list.json?config=bikini_skin_style&mode=any";
				console.log("jsonStyleUrl: " + jsonStyleUrl);
				$.ajax({
                   url: jsonStyleUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinStyle)
                   {
						jsondata = dataSkinStyle;
				//		outputJson(dataSkinLang);
						checkStyle(dataSkinStyle);
						updateStyle(dataSkinStyle);
						}
					
				});	
			 return jsondata;
		}
		
	// update  the style value in the config database, value available : page, ribbon, frame, popup
		function update_Style(style_) 
		{
				var jsonStyleUrl = "/yamj3/api/config/update.json?key=bikini_skin_style&value="+style_+"";
				console.log("jsonStyleUrl: " + jsonStyleUrl);
				$.ajax({
                   url: jsonStyleUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinStyle)
                   {
						jsondata = dataSkinStyle;
				//		outputJson(dataSkinLang);
						updateStyle(dataSkinStyle);
				
					}
					
				});	
			 return jsondata;


		}				
		function checkStyle(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
										if (arg.context.count) {
										return arg.context.count;} else {update_Style('frame');}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	// parse the value style, value available : page, ribbon, frame, popup
		function updateStyle(yamjdata) {
		var WI = {
						"tr": {
							"list<-results":{
								"td.Value"				: function(arg) {
								set_Style_value (arg.item.value);
								return arg.item.value;
								}	
							}
						}
					};
				$p('.results').render( yamjdata, WI );			
			}
	
	// set the rules to adjust style to the style choosen : value available : page, ribbon, frame, popup
		function set_Style_value(style_)
			{
				StyleValue = style_;
				console.log('set style:'+style_);
				window.localStorage.setItem("Style", style_);
		
			}
	
	