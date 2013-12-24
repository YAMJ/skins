//**************************************** TEMPLATE ********************************************************
	// this .js is added to all html and group function that will be used by every files 
	// add the following line in the <head> section
	// <script src="js/set_skin_lang.js"></script>
	// usage : add  outputJson(yamjdata) in $ajax contents  
	// display: add  <div id="sourceData"></div>  at the end of the body section 
//**********************************************************************************************************
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
						} else {
							menuleft_toggle =  0;
							
							$('#li_all_up').css('visibility', 'hidden');
							$('#li_movie_up').css('visibility', 'hidden');
							$('#li_series_up').css('visibility', 'hidden');
							$('#li_season_up').css('visibility', 'hidden');
							$('#li_person_up').css('visibility', 'hidden');
							$('#li_genre_up').css('visibility', 'hidden');	
							
						}
					}
					
	// open a new window to select search functionnality 
		function ouvre_popup_search() 
			{
				Searchpopup = window.open("search.html", "YAMJ v3 search","channelmode=no, status=no, scrollbars=no, menubar=no, location=no, resizable=yes, left=180px, top=5px, width=1190px, height=220px");
			}
			
	// open or change to index genre page
		function call_genreindex(indextype, newpage)
			{
				localStorage.setItem("indextype", indextype);
				console.log("call genreindex with indextype: "+indextype);
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
				console.log("call personindex: ");
				if (newpage) 
					{
						Indexpopup = window.open("index_person.html", "YAMJ v3 index","");
					} else {
						window.location.href="index_person.html";
					}
			}
	// change index page 
		function ChangeIndex (indextype)
			{		
					window.localStorage.setItem("indextype", indextype);
					console.log("call Changeindex: "+indextype);
					window.location.reload();
			}
	
	
	