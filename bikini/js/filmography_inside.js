  //************************ list inside filmography *********************************************
  // include this function to list inside filmography 
  //********************************************************************************************** 
 function update_inside (id)
            {
		
			    jsonFilmography_inside = "/yamj3/api/person/" + id + ".json?dataitems=filmography_inside&sortby=year&sortdir=asc";
				console.log("Popup_Person jsonFilmography_inside: " + jsonFilmography_inside);
				  $.ajax({
						url: jsonFilmography_inside,
						async: false,
						dataType: 'jsonp',
						'success': function(Filmography_inside_data)
						{
							jsondata = Filmography_inside_data;
						//	outputJson(Filmography_inside_data); 	
							updateHtml_inside(Filmography_inside_data);
						}
					});
			}
		function updateHtml_inside (Filmography_inside_data)
			{
 				var LIST_FILMOGRAPHY_INSIDE = { 
				'span.filmography_inside': function(arg)
					{
						// test if there is a filmography_inside returned
						if (arg.context.result.filmography) {
						var filmography_inside_list = arg.context.result.filmography;
						// clear all contents  
						$('.Filmography_in').css('display', 'none'); 
						$('.result_filmography_inside').empty();
						// set header
						var init_inside = "<tr><td><span class=\"filmography_inside\"></span></td></tr>"
						$('.result_filmography_inside').append(init_inside);
						var output_inside =  "";
							// loop thru the list of filmography
							for (i = 0; i < filmography_inside_list.length; i++) {	
								var boucle_filmography_compare = true;
								if (filmography_list) {
								for (j = 0; j < filmography_list.length && boucle_filmography_compare; j++) {
							//		console.log ('Popup_person filmography_list.length:' + filmography_list.length + ' filmography_list['+j+'].title:' + filmography_list[j].title + ' filmography_inside_list[' + i + '].title:' +filmography_inside_list[i].title);
							//	check if it is a movie inside 
								if (filmography_list[j].originalTitle == filmography_inside_list[i].originalTitle)
										{
										boucle_filmography_compare = false; 
										console.log ("Popup_person found in filmography a movie stored in db: " +  filmography_list[j].originalTitle + " index j:" + j);
										$("#inside_href"+j).css("color", "red");
										$("#inside_href"+j).css("font-weight", "bold");
										document.getElementById("inside_href"+j).href="javascript:setId('" + filmography_inside_list[i].type + "', '" + filmography_inside_list[i].videodataId + "')";
										document.getElementById("inside_img"+j).src="./pictures/go_select.png";
										}
									}
								} 
								
								if (filmography_inside_list[i].type == "MOVIE")
									{
									// if there is already one filmography display this section
									$('.Filmography_in').css('display', 'block'); 
									// test if there is an actor 
									if (filmography_inside_list[i].job != 'ACTOR')
									{
										temp_output_inside =  "<td style='padding: 0px; border: 1px solid #fff; border-right: 3px solid #fff; border-radius:9px;'><a href=\"javascript:setId('" + filmography_inside_list[i].type + "', '" + filmography_inside_list[i].videodataId + "');\"><p class=\"filmography_name\">"+ filmography_inside_list[i].title +"</p><img class=\"poster"+i+"\" src=\"\" style='width:9.5vw;' ></img><p class=\"filmography_job\">"+ filmography_inside_list[i].job.italics() +"</p></a></td>" ;
									} else {
									// test if the role is not empty
											if (filmography_inside_list[i].role) {temp_output_inside =  "<td style='padding: 0px; border: 1px solid #fff; border-right: 3px solid #fff;border-radius:  9px;'><a href=\"javascript:setId('" + filmography_inside_list[i].type + "', '" + filmography_inside_list[i].videodataId + "');\"><p class=\"filmography_name\">"+ filmography_inside_list[i].title +"</p><img class=\"poster"+i+"\" src=\"\" style='width:9.5vw;' ></img><p class=\"filmography_job\">"+ filmography_inside_list[i].role.italics() +"</p></a></td>" ;}
											else {temp_output_inside =  "<td style='padding: 0px; border: 1px solid #fff; border-right: 3px solid #fff; border-radius:9px;'><a href=\"javascript:setId('" + filmography_inside_list[i].type + "', '" + filmography_inside_list[i].videodataId + "');\"><p class=\"filmography_name\">"+ filmography_inside_list[i].title +"</p><img class=\"poster"+i+"\" src=\"\" style='width:9.5vw;' ></img><p class=\"filmography_job\"></p></a></td>" ;}
									} 
									// append to display with  job and role translated
									$('.filmography_inside').append(translate_job(temp_output_inside));
									get_poster(filmography_inside_list[i].type, filmography_inside_list[i].videodataId, i); 
									}
								// repeat the sequence for series 
								if (filmography_inside_list[i].type == "SERIES")
									{
									$('.Filmography_in').css('display', 'block'); 
									if (filmography_inside_list[i].job != 'ACTOR')
									{
										temp_output_inside =  "<td style='padding: 0px; border: 1px solid #fff; border-right: 3px solid #fff; border-radius:9px; font-size: 1.2vw;'><a href=\"javascript:setId('" + filmography_inside_list[i].type + "', '" + filmography_inside_list[i].seriesId + "');\"><p class=\"filmography_name\">"+ filmography_inside_list[i].title +"</p><img class=\"poster"+i+"\" src=\"\" style='width:9.5vw;' ></img><p class=\"filmography_job\">"+ filmography_inside_list[i].job.italics() +"</p></a></td>" ;
									} else {
											if (filmography_inside_list[i].role) {
													temp_output_inside =  "<td style='padding: 0px; border: 1px solid #fff; border-right: 3px solid #fff; border-radius:9px;'><a href=\"javascript:setId('" + filmography_inside_list[i].type + "', '" + filmography_inside_list[i].seriesId + "');\"><p class=\"filmography_name\">"+ filmography_inside_list[i].title +"</p><img class=\"poster"+i+"\" src=\"\" style='width:9.5vw;' ></img><p class=\"filmography_job\">"+ filmography_inside_list[i].role.italics() +"</p></a></td>" ;
											} else {temp_output_inside =  "<td style='padding: 0px; border: 1px solid #fff; border-right: 3px solid #fff; border-radius:9px;'><a href=\"javascript:setId('" + filmography_inside_list[i].type + "', '" + filmography_inside_list[i].seriesId + "');\"><p class=\"filmography_name\">"+ filmography_inside_list[i].title +"</p><img class=\"poster"+i+"\" src=\"\" style='width:9.5vw;' ></img><p class=\"filmography_job\"></p></a></td>" ;}
									} 
									 $('.filmography_inside').append(translate_job(temp_output_inside));
									get_poster(filmography_inside_list[i].type, filmography_inside_list[i].seriesId, i); 
									}
							}
							return translate_job(output_inside); 
						} else return '';
					}
				};
				$p('.result_filmography_inside').render(Filmography_inside_data, LIST_FILMOGRAPHY_INSIDE);
            }			
	function get_poster (type, videodataId, i) 
			{
		//	var jsondata = null;
				jsonPoster = "/yamj3/api/video/" + type.toLowerCase() + "/" + videodataId + ".json?dataitems=artwork,externalid";
				console.log("Popup_Person jsonPoster: " + jsonPoster);
				$.ajax({
                    url: jsonPoster,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(Poster_data)
                    {
                     jsondata = Poster_data; 
					 updatePosterHtml(Poster_data, i);
				//	outputJson(Poster_data); 	
                    }
                });
			}
			
	 function updatePosterHtml(Posterdata, i)
            {
            	var boucle = true;
				switch (i) 
					{
							case 0:
								YAMJ_DIR0 = {
							   // display poster 	
								'img.poster0@src': function(arg) {
						// Get the first poster available from the list
								for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR0); 
								break;
							case 1:
								YAMJ_DIR1 = {
							   // display poster 	
								'img.poster1@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR1); 
								break;
							case 2:
								YAMJ_DIR2 = {
							   // display poster 	
								'img.poster2@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR2); 
								break;
							case 3:
								YAMJ_DIR3 = {
							   // display poster 	
								'img.poster3@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR3); 
								break;
							case 4:
								YAMJ_DIR4 = {
							   // display poster 	
								'img.poster4@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR4); 
								break;
							case 5:
								YAMJ_DIR5 = {
							   // display poster 	
								'img.poster5@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR5); 
								break;
							case 6:
								YAMJ_DIR6 = {
							   // display poster 	
								'img.poster6@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR6); 
								break;
							case 7:
								YAMJ_DIR7 = {
							   // display poster 	
								'img.poster7@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR7); 
								break;
							case 8:
								YAMJ_DIR8 = {
							   // display poster 	
								'img.poster8@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR8); 
								break;
							case 9:
								YAMJ_DIR9 = {
							   // display poster 	
								'img.poster9@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR9); 
								break;
							case 10:
								YAMJ_DIR10 = {
							   // display poster 	
								'img.poster10@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR10); 
								break;
							case 11:
								YAMJ_DIR11 = {
							   // display poster 	
								'img.poster11@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR11); 
								break;	
							case 12:
								YAMJ_DIR12 = {
							   // display poster 	
								'img.poster12@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}	
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR12); 
								break;
							case 13:
								YAMJ_DIR13 = {
							   // display poster 	
								'img.poster13@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR13); 
								break;	
							case 14:
								YAMJ_DIR14 = {
							   // display poster 	
								'img.poster14@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR14); 
								break;
							case 15:
								YAMJ_DIR15 = {
							   // display poster 	
								'img.poster15@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR15); 
								break;
							case 16:
								YAMJ_DIR16 = {
							   // display poster 	
								'img.poster16@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR16); 
								break;
							case 17:
								YAMJ_DIR17 = {
							   // display poster 	
								'img.poster17@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR17); 
								break;
							case 18:
								YAMJ_DIR18 = {
							   // display poster 	
								'img.poster18@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR18); 
								break;
							case 19:
								YAMJ_DIR19 = {
							   // display poster 	
								'img.poster19@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR19); 
								break;
							case 20:
								YAMJ_DIR20 = {
							   // display poster 	
								'img.poster20@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR20); 
								break;
							case 21:
								YAMJ_DIR21 = {
							   // display poster 	
								'img.poster21@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR21); 
								break;
							case 22:
								YAMJ_DIR22 = {
							   // display poster 	
								'img.poster22@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}	
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR22); 
								break;
							case 23:
								YAMJ_DIR23 = {
							   // display poster 	
								'img.poster23@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR23); 
								break;	
							case 24:
								YAMJ_DIR24 = {
							   // display poster 	
								'img.poster24@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR24); 
								break;
							case 25:
								YAMJ_DIR25 = {
							   // display poster 	
								'img.poster25@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR25); 
								break;
							case 26:
								YAMJ_DIR26 = {
							   // display poster 	
								'img.poster26@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR26); 
								break;
							case 27:
								YAMJ_DIR27 = {
							   // display poster 	
								'img.poster27@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR27); 
								break;
							case 28:
								YAMJ_DIR28 = {
							   // display poster 	
								'img.poster28@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR28); 
								break;
							case 29:
								YAMJ_DIR29 = {
							   // display poster 	
								'img.poster29@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR29); 
								break;
							case 30:
								YAMJ_DIR30 = {
							   // display poster 	
								'img.poster30@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR30); 
								break;
							case 31:
								YAMJ_DIR31 = {
							   // display poster 	
								'img.poster31@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR31); 
								break;
							case 32:
								YAMJ_DIR32 = {
							   // display poster 	
								'img.poster32@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}	
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR32); 
								break;
							case 33:
								YAMJ_DIR33 = {
							   // display poster 	
								'img.poster33@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR33); 
								break;	
							case 34:
								YAMJ_DIR34 = {
							   // display poster 	
								'img.poster34@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR34); 
								break;
							case 35:
								YAMJ_DIR35 = {
							   // display poster 	
								'img.poster35@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR35); 
								break;
							case 36:
								YAMJ_DIR36 = {
							   // display poster 	
								'img.poster36@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR36); 
								break;
							case 37:
								YAMJ_DIR37 = {
							   // display poster 	
								'img.poster37@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR37); 
								break;
							case 38:
								YAMJ_DIR38 = {
							   // display poster 	
								'img.poster38@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR38); 
								break;
							case 39:
								YAMJ_DIR39 = {
							   // display poster 	
								'img.poster39@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR39); 
								break;
							case 40:
								YAMJ_DIR40 = {
							   // display poster 	
								'img.poster40@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR40); 
								break;
							case 41:
								YAMJ_DIR41 = {
							   // display poster 	
								'img.poster41@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR41); 
								break;
							case 42:
								YAMJ_DIR42 = {
							   // display poster 	
								'img.poster42@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}	
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR42); 
								break;
							case 43:
								YAMJ_DIR43 = {
							   // display poster 	
								'img.poster43@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR43); 
								break;	
							case 44:
								YAMJ_DIR44 = {
							   // display poster 	
								'img.poster44@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR44); 
								break;
							case 45:
								YAMJ_DIR45 = {
							   // display poster 	
								'img.poster45@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR45); 
								break;
							case 46:
								YAMJ_DIR46 = {
							   // display poster 	
								'img.poster46@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR46); 
								break;
							case 47:
								YAMJ_DIR47 = {
							   // display poster 	
								'img.poster47@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR47); 
								break;
							case 48:
								YAMJ_DIR48 = {
							   // display poster 	
								'img.poster48@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR48); 
								break;
							case 49:
								YAMJ_DIR49 = {
							   // display poster 	
								'img.poster49@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR49); 
								break;
							case 50:
								YAMJ_DIR50 = {
							   // display poster 	
								'img.poster50@src': function(arg) {
									for (j = 0; boucle && j < arg.context.result.artwork.POSTER.length; j++) 
										{
											if (arg.context.result.artwork.POSTER[j].generatedId != 0)
											{
												boucle = false;
											// Check to see if there are posters
												return arg.context.baseArtworkUrl + arg.context.result.artwork.POSTER[j].filename; 
											}
										}
									}
								}
								$p('.result_filmography_inside').render(Posterdata, YAMJ_DIR50); 
								break;
					}		
            }
			
	 function setId(type, id)
        {
            window.localStorage.setItem("indextype", type);
            window.localStorage.setItem("id", id);
            console.log("setId Storing value: " + type + "-" + id);
          	window.open("detail.html", "YAMJ v3 detail page", "");
        }