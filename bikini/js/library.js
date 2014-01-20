  //************************ CONFIGURATION SETTING *********************************************
  		// include this function to set / add / list configuration key , fetched from the yamjv3 database configuration table 
		// default is C200
		// outside skin configuration could be displayed / update with the following
		// enter in the browser /yamj3/config/list.html
		// click on enter new configuration ()
		// enter key : by exemple bikini_skin_player as key
		// enter a valid value 
		// click enter 
 //*****************************************************************************************   
		var Ip_device = new Array ();
		var source_path = new Array ();
		var playcommand = 'start_vod';
		var target_path = new Array ();
		var player_list = new Array(); 	
		var player_select_rank = 0;
	// fetch the value in the config database
		var default_player = 'C200';
		function get_player()
			{
				var jsonPlayerUrl = "/yamj3/api/config/list.json?config=bikini_skin_player&mode=any";
				console.log("jsonPlayerUrl: " + jsonPlayerUrl);
				$.ajax({
                   url: jsonPlayerUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPlayer)
                   {
						jsondata = dataSkinPlayer;
				//		outputJson(dataSkinPlayer);
						checkPlayer(dataSkinPlayer);
						updatePlayer(dataSkinPlayer);
						get_player_setting (PlayerValue);
					}
					
				});	
			 return jsondata;
		}
				
			// update  the value in the config database
		function update_Player(Player_) 
		{
				var jsonPlayerUrl = "/yamj3/api/config/update.json?key=bikini_skin_player&value="+Player_+"";
				console.log("jsonPlayerUrl: " + jsonPlayerUrl);
				$.ajax({
                   url: jsonPlayerUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPlayer)
                   {
						jsondata = dataSkinPlayer;
				//		outputJson(dataSkinPlayer);
						updatePlayer(dataSkinPlayer);
						get_player_setting (PlayerValue);
						location.reload();
					}
					
				});	
			 return jsondata;


		}				
		function checkPlayer(yamjdata) {
				var PN = {
						"td.Value":  function(arg) {
										if (arg.context.count) {
										return arg.context.count;} else {update_Player(default_player);}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	// parse the value Player
		function updatePlayer(yamjdata) {
		var WI = {
						"tr": {
							"list<-results":{
								"td.Value"				: function(arg) {
								set_Player_value (arg.item.value);
								return arg.item.value;
								}	
							}
						}
					};
				$p('.results').render( yamjdata, WI );			
			}
	
	// set the rules to adjust Player to the Player choosen
		function set_Player_value(Player_)
			{
				PlayerValue = Player_;
				console.log('set Player:'+Player_);
				window.localStorage.setItem("Player", Player_);
			}
	
	// get all the player settings : ip, path for the selected player 'player'
		function get_player_setting(player) {
		
			console.log("get_player_setting: "+player);
					if (window.XMLHttpRequest)
					  {// code for IE7+, Firefox, Chrome, Opera, Safari
					  xmlhttp=new XMLHttpRequest();
					  }
					else
					  {// code for IE6, IE5
					  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
					  }
					xmlhttp.open("GET","My_Library.xml",false);
					xmlhttp.send();
					xmlDoc=xmlhttp.responseXML; 
				// get the list of player declared (var player_list) in My_Library.xml, 
				// select the one which fetched (rank is stored in player_select ,
				// root is named 'players' 
					z=xmlDoc.getElementsByTagName('players');
					get_player_list (player);
					x=z[0].getElementsByTagName('player')[player_select_rank];
				// store ip, path for the selected player 'player'
					Ip_device=(x.getElementsByTagName("playeradress")[0].childNodes[0].nodeValue);
					for(j = 0; j < x.getElementsByTagName('path').length; j++){
					source_path[j]=(x.getElementsByTagName("sourcepath")[j].childNodes[0].nodeValue);
					target_path[j]=(x.getElementsByTagName("targetpath")[j].childNodes[0].nodeValue);
					nbre_translate_path = j;
					}	
			}
		// construct player list and select the player rank 
		function get_player_list (player)
			{	
				for(var i = 0; i<z[0].getElementsByTagName('player').length; i++)
					{
						player_list[i] = (z[0].getElementsByTagName('playername')[i].childNodes[0].nodeValue);
						if (player_list[i] == player) {player_select_rank = i;}
					}
				console.log("get_player_list: player_select_rank " +player_select_rank);
			}
