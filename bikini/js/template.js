//**************************************** TEMPLATE ********************************************************
	// this .js is added to all html and group function that will be used by every files 
	// add the following line in the <head> section
	// <script src="js/template.js"></script>
	// usage : add  outputJson(yamjdata) in $ajax contents  
	// display: add  <div id="sourceData"></div>  at the end of the body section 
//**********************************************************************************************************
	var StyleValue = "frame";
	var NewValue = "30-file";
	var Prefered_PageValue = "index_all";
	var PagingValue = true;
	var vlc_added = null;
	var skin_default_ = 'bikini_skin_0';

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
	// display none what is asked 
		function display_none_Id(Id_to_nodisplay)
					{			
				//		document.getElementById(Id_to_nodisplay).style.visibility="hidden";
				console.log("display_none_Id: "+Id_to_nodisplay);
				var tempid = "#"+Id_to_nodisplay;
				$(tempid).css('display', 'none');
					}
	// display block the Id selected 
		function display_block_Id(Id_to_display)
					{		
						console.log("display_block_Id: "+Id_to_display);
						document.getElementById(Id_to_display).style.display="block";
					}	
	// display on - off on the Id selected 
		function toggle_display_Id(Id_to_toggle)
					{	
						if (document.getElementById(Id_to_toggle).style.display == "block")
						{ 
							document.getElementById(Id_to_toggle).style.display = "none";
						} else {
							document.getElementById(Id_to_toggle).style.display = "block";
						}
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
		// on - off on the Id selected 
		function toggle_Parent_Id(Id_to_toggle)
					{	
						if (parent.document.getElementById(Id_to_toggle).style.visibility == "visible")
						{ 
							parent.document.getElementById(Id_to_toggle).style.visibility = "hidden";
						} else {
							parent.document.getElementById(Id_to_toggle).style.visibility = "visible";
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
		// on - off display for the class selected 
		function toggle_display_class(class_to_toggle)
					{			
						if ($('.'+class_to_toggle).css('display') == "none")
						{ 
							$('.'+class_to_toggle).css('display', 'block');
						} else {
							$('.'+class_to_toggle).css('display', 'none');
						}
					}
		// toggle the sort item to hide / show the sort feature - sort by year or title , sort ascending descending			
		function toggle_show_sort ()
		{
			if (!show_sorted)
				{
					$("#sort_desc").css("visibility", "visible");
					$("#sort_asc").css("visibility", "visible");
					$("#sort_year").css("visibility", "visible");
					$("#sort_title").css("visibility", "visible");
					$("#sort_section").css("background", "grey");
					$("#sort_section").css("outline", "2px solid black");
					$("#sort_section").css("z-index", "10");
					$("#sort_item").css("z-index", "9");
					parent.document.getElementById('my_header_menu').style.height = '240px';
					show_sorted = true;
				}
			else
				{
					$("#sort_desc").css("visibility", "hidden");
					$("#sort_asc").css("visibility", "hidden");
					$("#sort_year").css("visibility", "hidden");
					$("#sort_title").css("visibility", "hidden");
					$("#sort_section").css("background", "none");
					$("#sort_section").css("outline", "none");
					parent.document.getElementById('my_header_menu').style.height = '60px';
				
					show_sorted = false;
				}
		}
		// toggle the watched item to hide / show the watched selector watched_all , watched , unwatched 
		function toggle_show_watched ()
		{
			if (!show_watched)
				{
					$("#watched_all").css("visibility", "visible");
					$("#watched_true").css("visibility", "visible");
					$("#watched_false").css("visibility", "visible");
					
					$("#watch_section").css("background", "grey");
					$("#watch_section").css("outline", "2px solid black");
					$("#watch_section").css("z-index", "10");
					$("#watch_item").css("z-index", "9");
					parent.document.getElementById('my_header_menu').style.height = '240px';
					show_watched = true;
				}
			else
				{
					$("#watched_all").css("visibility", "hidden");
					$("#watched_true").css("visibility", "hidden");
					$("#watched_false").css("visibility", "hidden");
					
					$("#watch_section").css("background", "none");
					$("#watch_section").css("outline", "none");
					parent.document.getElementById('my_header_menu').style.height = '60px';

					show_watched = false;
				}
		}
		// toggle the videotype item to hide / show the videotype selector movie and series, movie, series, season 
		function toggle_show_type ()
		{
			if (!show_type)
				{
					$("#movie_series_type").css("visibility", "visible");
					$("#movie_type").css("visibility", "visible");
					$("#series_type").css("visibility", "visible");
					$("#season_type").css("visibility", "visible");
					
					$("#type_section").css("background", "grey");
					$("#type_section").css("outline", "2px solid black");
					$("#type_section").css("z-index", "10");
					$("#type_item").css("z-index", "9");
					parent.document.getElementById('my_header_menu').style.height = '240px';
					show_type = true;
				}
			else
				{
					$("#movie_series_type").css("visibility", "hidden");
					$("#movie_type").css("visibility", "hidden");
					$("#series_type").css("visibility", "hidden");
					$("#season_type").css("visibility", "hidden");
					
					$("#type_section").css("background", "none");
					$("#type_section").css("outline", "none");
					parent.document.getElementById('my_header_menu').style.height = '60px';

					show_type = false;
				}
		}
		// display/nodisplay left menu when click on icon open/close
		function toggle_menu_left ()
		{
			if (document.getElementById('open_menu_left').style.visibility == 'visible')
				{
					console.log("detail toggle_menu_left: " + document.getElementById('open_menu_left').style.visibility)
					parent.document.getElementById('my_left_menu').style.width = '12%';
					document.getElementById('container_menu_left').style.opacity = '1';
					document.getElementById('open_menu_left').style.visibility = 'hidden';
					document.getElementById('close_menu_left').style.visibility = 'visible';
				} else 
				{
					console.log("detail toggle_menu_left: " + document.getElementById('open_menu_left').style.visibility)
					parent.document.getElementById('my_left_menu').style.width = '2%';
					document.getElementById('container_menu_left').style.opacity = '0';
					document.getElementById('open_menu_left').style.visibility = 'visible';
					document.getElementById('close_menu_left').style.visibility = 'hidden';
				}
		}
			function toggle_detail_menu_left ()
		{
			if (document.getElementById('open_menu_left').style.visibility == 'visible')
				{
					console.log("detail toggle_menu_left: " + document.getElementById('open_menu_left').style.visibility)
			//		parent.document.getElementById('my_left_menu').style.width = '12%';
					document.getElementById('container_menu_left').style.opacity = '1';
					document.getElementById('open_menu_left').style.visibility = 'hidden';
					document.getElementById('close_menu_left').style.visibility = 'visible';
				} else 
				{
					console.log("detail toggle_menu_left: " + document.getElementById('open_menu_left').style.visibility)
			//		parent.document.getElementById('my_left_menu').style.width = '2%';
					document.getElementById('container_menu_left').style.opacity = '0';
					document.getElementById('open_menu_left').style.visibility = 'visible';
					document.getElementById('close_menu_left').style.visibility = 'hidden';
				}
		}
		// change watched_api status 
		function toggle_watched(watchedflag, videoid, videotype)
				{	
				if (watchedflag)
					{ watched_to_set = 'unwatched';}
					else {watched_to_set = 'watched';}
							
				console.log("template toggle_watched:  videotype:" + videotype + " watched_to_set:" + watched_to_set + " id:" + videoid);
				var jsonWatchedUrl = "/yamj3/api/"+ watched_to_set + "/" + videotype.toLowerCase() + "/" + videoid;
				console.log("template toggle_watched:  jsonWatchedUrl: " + jsonWatchedUrl);
				$.ajax({
                   url: jsonWatchedUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataWatched)
					{
						jsondata = dataWatched;
						
				//		outputJson(dataWatched);
					}
				});
				Watchedpopup = window.open("index.html", "_self","");
				}
		// display update icon on mouseover with watched_small
		function animate_watched ()
		{
			$(".watched_small").mouseover(function(){
				$(this).attr('src','./pictures/update_watched.png'); 
			});
		
		}
		// on the class selected 
		function display_class(class_to_toggle)
					{$('.'+class_to_toggle).css('visibility', 'visible');}
		// off the class selected 
		function nodisplay_class(class_to_toggle)
					{$('.'+class_to_toggle).css('visibility', 'hidden');}
	
	// open a new window to select search functionnality 
		function ouvre_popup_search(StyleValue) 
			{
				switch (StyleValue)
					{
					case 'frame':
						{
							console.log("ouvre_popup_search:  style:"+StyleValue);								
							parent.frames['target_frame'].location.href='search.html';
							toggle_Parent_Id('target_display');
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
		// open a new window to select search functionnality and display in parent windows
		function ouvre_parent_popup_search(StyleValue) 
			{
				switch (StyleValue)
					{
					case 'frame':
						{
							console.log("ouvre_parent_popup_search:  style:"+StyleValue);								
							parent.frames['target_frame'].location.href='search.html';
							toggle_Parent_Id('target_display');
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
	// open info_config 
		function ouvre_info_config() 
			{
				console.log("ouvre_info_config");								
				parent.frames['target_frame'].location.href='info_config.html';
				toggle_Id('target_display');
			}
	// open in the current window to select configuration functionnality 
		function ouvre_config(StyleValue) 
			{
			switch (StyleValue)
					{
					case 'frame':
					case 'popup':
					case 'ribbon':
					case 'page':
					default:
						{
							console.log("ouvre_config:  style:"+StyleValue);								
			//				parent.frames['target_frame'].location.href='config.html';
			//				toggle_Id('target_display');
							Configpopup = window.open("config2.html", "_self","");
							break;
						} 
				
					return;
					
				}
			}
		// open a new window to select configuration functionnality 
		function ouvre_config_page(StyleValue) 
			{
			switch (StyleValue)
					{
					case 'frame':
					case 'popup':
					case 'ribbon':
					case 'page':
					default:
						{
							console.log("ouvre_config:  style:"+StyleValue);								
			//				parent.frames['target_frame'].location.href='config.html';
			//				toggle_Id('target_display');
							Configpopup = window.open("config2.html", "_parent","");
							break;
						} 
				
					return;
					
				}
			}
	// fetch prefered page : value available : index_all, index_movie, index_series, person, genre, country, boxset, rating, certification, source, new
		function ouvre_prefered_page() 
			{
			if (localStorage.getItem("prefered_page"))
			{Prefered_PageValue = localStorage.getItem("prefered_page");}
			else {localStorage.setItem("prefered_page", Prefered_PageValue);}
			console.log("ouvre_prefered_page:  Prefered_PageValue:"+Prefered_PageValue);	
			switch (Prefered_PageValue)
					{
					case 'index_all':
						{
							localStorage.setItem("indextype", "movie,series");				
							Configpopup = window.open("index.html", "_self","");
							break;
						} 
					case 'index_movie':
						{
							localStorage.setItem("indextype", "movie");							
							Configpopup = window.open("index.html", "_self","");
							break;
						} 
					case 'index_series':
						{
							localStorage.setItem("indextype", "series");								
							Configpopup = window.open("index.html", "_self","");
							break;
						} 
					case 'person':
						{	
							call_personindex("YAMJ v3 index");
							break;
						}
					case 'genre':
						{
							open_self_index(localStorage.getItem("indextype"), "navGenre.html");
							break;
						}
					case 'country':
						{
							open_name_index(localStorage.getItem("indextype"), "navCountry.html", "YAMJv3 Navigation country index");
							break;
						}
					case 'boxset':
						{
							open_name_index(localStorage.getItem("indextype"), "navBoxset.html", "YAMJv3 Navigation boxset index");
							break;
						}
					case 'rating':
						{
							open_name_index(localStorage.getItem("indextype"), "navRating.html", "YAMJv3 Navigation rating index");
							break;
						}
					case 'certification':
						{
							open_name_index(localStorage.getItem("indextype"), "navCertification.html", "YAMJv3 Navigation certification index");
							break;
						}
					case 'source':
						{						
							open_name_index(localStorage.getItem("indextype"), "navSource.html", "YAMJv3 Navigation videosource index");
							break;
						} 
					case 'new':
						{						
							NewestSelection("index.html", localStorage.getItem("New"));
							break;
						} 
					default:
						{
							localStorage.setItem("indextype", "movie,series");				
							Configpopup = window.open("index.html", "_self","");
							break;
						} 
					return;
					
				}
			}
	// open or change index page in the same windows
		function open_self_index(indextype, index_to_call, windows_name)
			{
				localStorage.setItem("indextype", indextype);
				console.log("open_self_index with type: "+ indextype +" with index: " + index_to_call + " self windows");
					Indexpopup = window.open(index_to_call, "_self", "");
			}
	// open or change index page in parent windows
		function open_parent_index(indextype, index_to_call)
			{
				localStorage.setItem("indextype", indextype);
				console.log("open_parent_index with type: "+ indextype +" with index: " + index_to_call + " parent windows");
					Indexpopup = window.open(index_to_call, "_parent", "");
			}
	// open or change index page in a named windows
		function open_name_index(indextype, index_to_call, windows_name)
			{
				localStorage.setItem("indextype", indextype);
				console.log("open_name_index with type: "+ indextype +" with index: " + index_to_call + " windows name:" + windows_name);
					Indexpopup = window.open(index_to_call, windows_name, "");
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
									parent.document.getElementById('person_display').style.zindex="9";
								
						break;
						} 
					case 'popup':
						{
							console.log("call_person:  style:"+StyleValue);
							Personpopup = window.open("navAllPerson.html", "YAMJv3 Navigation All Person","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=180px, top=5px, width=1290px, height=210px");	
							break;
						}
					case 'ribbon':
						{
							console.log("call_person:  style:"+StyleValue);
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
		function call_personindex(page_to_set)
			{
				console.log("call_personindex: page to set=" + page_to_set);
				Indexpopup = window.open("index_person.html", page_to_set);
				
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
						parent.frames['target_frame'].location.href='Popup_Person_Biography.html';
						parent.document.getElementById('person_display').style.zIndex="8";
						toggle_Parent_Id('target_display');
				
					} else { 
					window.localStorage.setItem('back_close', 'close');
					Mypopup = window.open("Popup_Person_Biography.html", "YAMJ v3 Person Biography","channelmode=no, menubar=no, status=no, scrollbars=no, menubar=no, location=no, left=310px, top=5px, width=1120px, height=720px");
					Mypopup.focus();
					}
			}
		// open filmography person display for id selected
		function open_filmography_popup(id, back_close)
			{
			   
				localStorage.setItem("Person_id", id);
				console.log("template open_filmography_popup Storing value: Person_id"  + id + " close: " + back_close);
			   
			   if (window.localStorage.getItem('Style') == "frame")
					{
						window.localStorage.setItem('back_close', back_close);
						parent.frames['target_frame'].location.href='Popup_Person_Filmography.html';
						parent.document.getElementById('person_display').style.zIndex="8";
						toggle_Parent_Id('target_display');
				
					} else { 
					window.localStorage.setItem('back_close', 'close');
					Mypopup_Filmography = window.open("Popup_Person_Filmography.html", "YAMJ v3 Person Filmography","channelmode=no, menubar=no, status=no, scrollbars=no, menubar=no, location=no, left=310px, top=5px, width=1120px, height=720px");
					Mypopup_Filmography.focus();
					}
			}
		// open biography person display for id selected
		function open_biography_popup(id, back_close)
			{
			   
				localStorage.setItem("Person_id", id);
				console.log("template open_biography_popup Storing value: Person_id"  + id + " close: " + back_close);
			   
			   if (window.localStorage.getItem('Style') == "frame")
					{
						window.localStorage.setItem('back_close', back_close);
						parent.frames['target_frame'].location.href='Popup_Person_Biography.html';
						parent.document.getElementById('person_display').style.zIndex="8";
						toggle_Parent_Id('target_display');
				
					} else { 
					window.localStorage.setItem('back_close', 'close');
					Mypopup = window.open("Popup_Person_Biography.html", "YAMJ v3 Person Biography","channelmode=no, menubar=no, status=no, scrollbars=no, menubar=no, location=no, left=310px, top=5px, width=1120px, height=720px");
					Mypopup.focus();
					}
			}
	// sort index page 
		function SortIndex (sort_indextype, url)
			{		
					window.localStorage.setItem("sort_indextype", sort_indextype);
					console.log("refresh: " + url + " Sortindex: "+sort_indextype);
					Indexpopup = window.open(url, "_parent","");
			}
	// sort index page 
		function SortDirection (direction, url)
			{		
					window.localStorage.setItem("direction", direction);
					console.log("refresh: " + url + " SortDirection: "+direction);
					Indexpopup = window.open(url, "_parent","");
			}
	// change index page 
		function ChangeIndex (indextype)
			{		
					window.localStorage.setItem("indextype", indextype);
					console.log("Changeindex: "+indextype);
					Indexpopup = window.open("index.html", "_parent","");
			}
	// watched selection 
		function WatchedSelection (href_target, watchedselect)
			{		
					window.localStorage.setItem("watched", watchedselect);
					console.log("WatchedSelection: "+watchedselect);
					Indexpopup = window.open(href_target, "_parent","");
			}
	// newest selection 
		function NewestSelection (href_target, newestselect)
			{		
					window.localStorage.setItem("newest", newestselect);
					console.log("NewestSelection: "+newestselect);
					Indexpopup = window.open(href_target, "_parent","");
			}
	// boxset selection 
		function BoxsetSelection (href_target)
			{		
					console.log("BoxsetSelection: ");
					Indexpopup = window.open(href_target, "_self","");
			}
	// fetch the style value in the local storage, value available : page, ribbon, frame, popup
		function get_style()
			{
				if (window.localStorage.getItem("Style"))
				{
					StyleValue = window.localStorage.getItem("Style");
					console.log("get_style Style: " + StyleValue);
				}
				else {get_style_();}
			}
	// fetch the style value in the config database , value available : page, ribbon, frame, popup
		function get_style_()
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

	// set the rules to adjust style to the style choosen : value available : page, ribbon, frame, popup
		function set_Style_value(style_)
			{
				StyleValue = style_;
				console.log('set style:'+style_);
				window.localStorage.setItem("Style", style_);
			}
			
	// fetch prefered certification in local storage : value available : DE, FR, GB, US
		function get_prefered_certification()
			{
				if (window.localStorage.getItem("prefered_certification"))
				{ 
					Prefered_CertificationValue = window.localStorage.getItem("prefered_certification");
					console.log("get_prefered_certification prefered_certification: " + Prefered_CertificationValue);
				//	get_prefered_certification_();
				}
				else {get_prefered_certification_();}
			}

	// fetch prefered certification in local storage : value available : DE, FR, GB, US
		function get_prefered_certification_()
			{
				if (localStorage.getItem("skinset"))
					{skin_value = window.localStorage.getItem("skinset");}
					else { skin_value = "bikini_skin_0";}
				var jsonPreferedCertificationUrl = "/yamj3/api/config/list.json?config="+skin_value+"prefered_certification&mode=any";
				console.log("get_prefered_certification jsonPreferedCertificationUrl: " + jsonPreferedCertificationUrl);
				$.ajax({
                   url: jsonPreferedCertificationUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPreferedCertification)
                   {			
						jsondata = dataSkinPreferedCertification;
				//		outputJson(dataSkinPreferedCertification);
						checkPrefered_Certification(dataSkinPreferedCertification);
						}
				});	
			 return jsondata;
		}
	// fetch certification list stored in yamj3.certification.countries 
		function get_Prefered_certification_from_list()
			{
			
				var jsonCertificationListUrl = "/yamj3/api/config/list.json?config=yamj3.certification.countries";
				console.log("get_Prefered_certification_from_list jsonCertificationListUrl: " + jsonCertificationListUrl);
				$.ajax({
                   url: jsonCertificationListUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataCertificationList)
                   {			
						jsondata = dataCertificationList;
				//		outputJson(dataCertificationList);
						var CL = {
						"td.Value":  function(arg) {
									if (arg.context.count) {
										console.log("get_Prefered_certification_from_list: "+arg.context.results[0].value.substring(0,2));
										update_Prefered_Certification(arg.context.results[0].value.substring(0,2));
										return arg.context.results[0].value.substring(0,2);} else {
										console.log("get_Prefered_certification_from_list: no value found");
										// if really no value found then store one 
										update_Prefered_Certification('FR');}
								}								
							
						};
				
				$p('.results').render( dataCertificationList, CL );
						}
				});	
			 return jsondata;
		}	
	// update prefered certification in local storage : value available : DE, FR, GB, US
		function update_Prefered_Certification(prefered_certification) 
		{
				var jsonPrefereCertificationdUrl = "/yamj3/api/config/update.json?key="+skin_value+"prefered_certification&value="+prefered_certification+"";
				console.log("update_Prefered_Certification jsonPrefereCertificationdUrl: " + jsonPrefereCertificationdUrl);
				$.ajax({
                   url: jsonPrefereCertificationdUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPreferedCertification)
                   {
						jsondata = dataSkinPreferedCertification;
					//	outputJson(dataSkinPreferedCertification);
						set_Prefered_Certification_value(prefered_certification);
					}
					
				});	
			 return jsondata;
		}	
		
		function checkPrefered_Certification(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
									if (arg.context.count) {
										console.log("checkPrefered_Certification: "+arg.context.results[0].value);
										set_Prefered_Certification_value(arg.context.results[0].value);
										return arg.context.results[0].value;} else {
										console.log("checkPrefered_Certification: no value found");
										get_Prefered_certification_from_list();}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	
	
	// set the rules to adjust prefered certification in local storage : value available : DE, FR, GB, US
		function set_Prefered_Certification_value(prefered_certification)
			{
				console.log('set prefered certification:'+prefered_certification);
				window.localStorage.setItem("prefered_certification", prefered_certification);
		
			}
			
			
	// fetch prefered page in local storage : value available : index_all, index_movie, index_series, person, genre, country, boxset, rating, certification, source, new
		function get_prefered_page()
			{
				if (window.localStorage.getItem("prefered_page"))
				{ 
					Prefered_PageValue = window.localStorage.getItem("prefered_page");
					console.log("get_prefered_page prefered_page: " + Prefered_PageValue);
				}
				else {get_prefered_page_();}
			}

	// fetch prefered page in database: value available : index_all, index_movie, index_series, person, genre, country, boxset, rating, certification, source, new
		function get_prefered_page_()
			{
				var jsonPreferedUrl = "/yamj3/api/config/list.json?config="+skin_value+"prefered_page&mode=any";
				console.log("get_prefered_page jsonPreferedUrl: " + jsonPreferedUrl);
				$.ajax({
                   url: jsonPreferedUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPrefered)
                   {
						jsondata = dataSkinPrefered;
				//		outputJson(dataSkinPrefered);
						checkPrefered_Page(dataSkinPrefered);
						}
					
				});	
			 return jsondata;
		}
		
	// update prefered page : value available : index_all, index_movie, index_series, person, genre, country, boxset, rating, certification, source, new
		function update_Prefered_Page(prefered_) 
		{
				var jsonPreferedUrl = "/yamj3/api/config/update.json?key="+skin_value+"prefered_page&value="+prefered_+"";
				console.log("update_Prefered_Page jsonPreferedUrl: " + jsonPreferedUrl);
				$.ajax({
                   url: jsonPreferedUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPrefered)
                   {
						jsondata = dataSkinPrefered;
					//	outputJson(dataSkinpPrefered);
						set_Prefered_Page_value(prefered_);
					}
					
				});	
			 return jsondata;
		}	
		
		function checkPrefered_Page(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
									if (arg.context.count) {
										console.log("checkPrefered_Page: "+arg.context.results[0].value);
										set_Prefered_Page_value(arg.context.results[0].value);
										return arg.context.results[0].value;} else {
										console.log("checkPrefered_Page: no value found");
										update_Prefered_Page('index_all');}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	
	
	// set the rules to adjust prefered page : value available : index_all, index_movie, index_series, person, genre, country,  boxset, rating, certification, source, new
		function set_Prefered_Page_value(prefered_)
			{
				Prefered_PageValue = prefered_;
				console.log('set prefered page:'+prefered_);
				window.localStorage.setItem("prefered_page", prefered_);
		
			}
	// fetch from local storage 		
		function get_new()
			{
				if (window.localStorage.getItem("New"))
				{
					NewValue = window.localStorage.getItem("New");
					console.log('get New:'+ NewValue);
				}
				else { get_new_(); }
			}
			
	// fetch the new value in the config database , value available : creation, file, lastscan
		function get_new_()
			{
				var jsonNewUrl = "/yamj3/api/config/list.json?config="+skin_value+"New&mode=any";
				console.log("get_new jsonNewUrl: " + jsonNewUrl);
				$.ajax({
                   url: jsonNewUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataNew)
                   {
						jsondata = dataNew;
				//		outputJson(dataNew);
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
					//	outputJson(dataNew);
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
										console.log("checkNew: no value found set default: "+NewValue);
										update_New(NewValue);}
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
	// fetch the paging value in the local storage , value available : true , false
		function get_paging()
			{
				if (window.localStorage.getItem("Paging"))
				{
					PagingValue = window.localStorage.getItem("Paging");
					console.log('get Paging:'+ PagingValue);
				}
				else { get_paging_(); }
			}
	// fetch the paging value in the config database , value available : true , false
		function get_paging_()
			{
				var jsonPagingUrl = "/yamj3/api/config/list.json?config="+skin_value+"paging&mode=any";
				console.log("get_paging jsonPagingUrl: " + jsonPagingUrl);
				$.ajax({
                   url: jsonPagingUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataPaging)
                   {
						jsondata = dataPaging;
				//		outputJson(dataPaging);
						checkPaging(dataPaging);
						}
					
				});	
			 return jsondata;
		}
		
	// update  the paging value in the config database, value available : true, false
		function update_Paging(paging_) 
		{
				var jsonPagingUrl = "/yamj3/api/config/update.json?key="+skin_value+"paging&value="+paging_+"";
				console.log("update_Paging jsonPagingUrl: " + jsonPagingUrl);
				$.ajax({
                   url: jsonPagingUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataPaging)
                   {
						jsondata = dataPaging;
					//	outputJson(dataPaging);
						set_Paging_value(paging_);
					}
					
				});	
			 return jsondata;
		}	
		
		function checkPaging(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
									if (arg.context.count) {
										console.log("checkPaging: "+arg.context.results[0].value);
										set_Paging_value(arg.context.results[0].value);
										return arg.context.results[0].value;} else {
										console.log("checkPaging: no value found set default: "+PagingValue);
										update_Paging(PagingValue);}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	
	
	// set the rules to adjust paging to the paging choosen : value available : true, false
		function set_Paging_value(paging_)
			{
				PagingValue = paging_;
				console.log('set paging:'+paging_);
				window.localStorage.setItem("Paging", paging_);
		
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

	// get the skin value in the config database and all value in the local storage
	function get_Skin () {
		
			if (window.localStorage.getItem("skinset"))
				{	
					skinset = window.localStorage.getItem("skinset");
					console.log ('get_skin: skin stored ' + skinset );
				}
			
			 else {update_skin_(skin_default_);}

		}	
	// check to update the skin value in the config database and all value in the local storage
	function update_Skin (skin_) 
		{
			if (window.localStorage.getItem("skinset"))
			{ if (window.localStorage.getItem("skinset") == skin_)
				{console.log ('update_skin: skin ' + skin_ + ' already setted no action');}
				else {update_Skin_(skin_);}
			} else {update_Skin_(skin_);}
			

		}	
	// update the skin value in the config database and all value in the local storage
	function update_Skin_(skin_) 
		{
			console.log ('update_skin_: set skin ' + skin_ + ' and update all value');
			window.localStorage.setItem("skinset", skin_);
			
			get_style_();
			get_player_();
			get_poster_number_ ();
			get_prefered_page_();
			get_prefered_certification_();
			get_paging_();
			get_new_();
			get_lang_();
			window.location.reload();
			
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
			display_Id('detail_display');
          
        }
		
	// called when it's a movie , prepare the play path and set the timer to confirm playing
	function play_to_device(basefilename)
			{
			if (!source_path[0]) {get_player_();}
			console.log("play_to_device: "+Device_type+":"+PlayerValue+", basefilename=" +basefilename+ " nbre_translate_path=" +nbre_translate_path); 
			var boucle = true; 
			for(var j = 0; boucle && j < (nbre_translate_path+2); j++){
				if (j == (nbre_translate_path+1))
				{ 
					console.log ("template play_to_device no source_path found to transform :" + basefilename);
					document.getElementById("infobox").onclick = '';
					myVar=window.setTimeout(function(){myStopFunction('infobox');},10000);
					document.getElementById("infobox").innerHTML=localStorage.getItem('play_label').toUpperCase()+ " " + PlayerValue +": " +basefilename+  ": " + localStorage.getItem('transform_error_text');
					document.getElementById("infobox").style.visibility="visible";
					//document.getElementById("infobox").click=(function(){clearInterval(myVar);document.getElementById("infobox").style.visibility="hidden";});
					$("button#infobox").click(
							function(event) {
								if (event.originalEvent) {
									console.log ("template play_to_device stop timer :" + myVar);
									clearInterval(myVar);
									document.getElementById("infobox").style.visibility="hidden";
								}
							}
					);
					break;
				} else {
				//	console.log ("template play_to_device j :" + j + " source_path:" + source_path[j]);
					if (basefilename.substring(0,source_path[j].length) == source_path[j])
						{
					boucle = false;
					filenametoplay = normalise_path(basefilename.substring(source_path[j].length));
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
							document.getElementById("infobox").innerHTML=localStorage.getItem('play_label').toUpperCase()+ " " + PlayerValue +": "+file_name+ " ?";
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
		}
	function PopPlayer()
			{
						console.log("PopPlayer: " +Currentfilename+ ", CurrentUrlPlay: "+CurrentUrlPlay);
						document.getElementById("infobox").innerHTML=localStorage.getItem('play_label').toUpperCase()+PlayerValue+": "+file_name+ "?"
						document.getElementById("infobox").style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
			//	window.open("Popup_Player.html", "YAMJv3 Player", "height=510, width=665, left=0, channelmode=no, directories=no, location=no,	menubar=no, resizable=yes, status=no, scrollbars=no,toolbar=no",false);
			}
	function PopDelete(Current_stage_file_Id, Current_title)
			{
						console.log("PopDelete:  Current_stage_file_Id: "+Current_stage_file_Id);
						document.getElementById("infobox_delete").innerHTML=localStorage.getItem('delete_text') + " stage_file id: "+Current_stage_file_Id+ " " + Current_title + "?"
						document.getElementById("infobox_delete").style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction('infobox_delete');},5000);
			}	
	// if it is confirmed stop timer and call the delete action to make his job			
	function start_delete ()
		{
			myStopFunction('infobox_delete');
			delete_stage_file_Id ()
		}
	function PopUpdate(Current_update_type, Current_file_Id, Current_title)
			{
						console.log("PopUpdate: Current_update_type: " + Current_update_type + " Current_file_Id: " + Current_file_Id);
						document.getElementById("infobox_update").innerHTML=localStorage.getItem('update_label') + " " + Current_update_type + " id:" + Current_file_Id + " " + Current_title + "?"
						document.getElementById("infobox_update").style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction('infobox_update');},5000);
			}
	function PopAction(Action_type, Current_update_type, Current_file_Id, Current_title)
			{
						console.log("PopAction: Current_update_type: " + Current_update_type + " Current_file_Id: " + Current_file_Id + " action:" + Action_type);
						document.getElementById("infobox_update").innerHTML=localStorage.getItem(Action_type + "_text") + " " + Current_update_type + " id:" + Current_file_Id + " " + Current_title + "?"
						document.getElementById("infobox_update").style.visibility="visible";
						myVar=window.setTimeout(function(){myStopFunction('infobox_update');},5000);
			}				
	// if it is confirmed stop timer and call the update action to make his job			
	function start_update ()
		{
			myStopFunction('infobox_update');
			delete_stage_file_Id ()
		}
	function PopIgnore(Current_artwork_type, Current_located_Id)
			{
						console.log("PopIgnore:  Current_located_Id: "+Current_located_Id);
						var infobox_artwork = ""
						if (Current_artwork_type == "poster")
						{ infobox_artwork = "infobox_ignore_poster";}
						else {infobox_artwork = "infobox_ignore_fanart";}

						document.getElementById(infobox_artwork).innerHTML=localStorage.getItem('remove_text') + ": "+ Current_located_Id + "?"
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
			console.log("episode_to_play :"+PlayerValue+" basefilename=" +decodeURIComponent(basefilename)); 
			if (!source_path[0]) {get_player_();}
			for(var j = 0; j < (nbre_translate_path+1); j++){
				if (decodeURIComponent(basefilename).substring(0,source_path[j].length) == source_path[j])
					{
				filenametoplay = normalise_path(decodeURIComponent(basefilename).substring(source_path[j].length));
		//		tempfile = filenametoplay.replace(/\&/g,"%26").replace(/\?/g,"%3F").replace(/\+/g,"%2B");
		//   	will be checked later if necessary		
		//		console.log("filename: "+filenametoplay);

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
						document.getElementById("infobox").innerHTML=localStorage.getItem('play_label').toUpperCase()+" "+PlayerValue+": "+file_name+"?";
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
			console.log("preset_episode_to_play :"+PlayerValue+" basefilename=" +decodeURIComponent(basefilename)); 
			if (!source_path[0]) {get_player_();}
			for(var j = 0; j < (nbre_translate_path+1); j++){
				if (decodeURIComponent(basefilename).substring(0,source_path[j].length) == source_path[j])
					{
				filenametoplay = normalise_path(decodeURIComponent(basefilename).substring(source_path[j].length));
		//		tempfile = filenametoplay.replace(/\&/g,"%26").replace(/\?/g,"%3F").replace(/\+/g,"%2B");
		//   	will be checked later if necessary		
		//		console.log("filename: "+normalise_path(filenametoplay));

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
						document.getElementById("infobox").innerHTML=localStorage.getItem('play_label').toUpperCase()+" "+PlayerValue+": "+file_name+"?";
						// document.getElementById("infobox").style.visibility="visible";
						// myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
					break; 
					case 'PC':
						var UrlPlay=target_path[j]+filenametoplay;
						Currentfilename = file_name;
						CurrentUrlPlay = UrlPlay;
						localStorage.setItem("ToPlay", UrlPlay);
							console.log("preset_episode_to_play: on PC " +UrlPlay);
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
			document.getElementById("infobox").innerHTML=localStorage.getItem('play_label').toUpperCase()+" "+PlayerValue+": "+file_name+ "?"
			document.getElementById("infobox").style.visibility="visible";
			myVar=window.setTimeout(function(){myStopFunction('infobox');},5000);
		}
		
		// open remote 
		function ouvre_remote(StyleValue) 
		{
				switch (StyleValue)
					{
					case 'frame':
						{
							parent.frames['remote_frame'].location.href='my_remote.html';
							parent.document.getElementById("remote").style.visibility="visible";
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
	function ouvre_genrelist (page_to_set)
		{
		console.log("detail ouvre_genrelist page to set: " + page_to_set);
		window.open("Genre_Config.html", page_to_set,"");
		}
	function get_player ()
			{
				if (localStorage.getItem("Player"))
					{
						PlayerValue = localStorage.getItem("Player");
						console.log("get_player Player: " + PlayerValue);
					}
				else {get_player_();}
			}
	function open_boxset_index(boxsetid, boxsetname)
        {
			localStorage.setItem("Boxset_id", boxsetid);
			localStorage.setItem("Boxset_name", boxsetname);
            console.log("navBoxset open_boxset_index Storing value: Boxset Id: " +boxsetid);
			window.location.href="index_Boxset.html";
			Mypopup.focus();
		}
	function open_rating_index(ratingsource, ratingvalue)
        {
			localStorage.setItem("Rating_source", ratingsource);
			localStorage.setItem("Rating_value", ratingvalue);
            console.log("navRating open_rating_index Storing value: Rating source: " + ratingsource + " Rating value: "+ ratingvalue);
			window.location.href="index_Rating.html";
		
		}
	