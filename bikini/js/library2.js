  //************************ CONFIGURATION SETTING *********************************************
  		// include this function to set / add / list configuration key , fetched from the yamjv3 database configuration table 
		// default is C200
		// outside skin configuration could be displayed / update with the yam3 playerinformation 
 //*****************************************************************************************   
		var Ip_device = '';
		var Device_type = '';
		var source_path = new Array ();
		var playcommand = 'start_vod';
		var target_path = new Array ();
		var player_list = new Array(); 	
	
		var player_select_rank = 0;
		
	// fetch the value in the config database
		var default_player = 'C200';
	
		// fetch the value in the config database
		function get_player_()
				{if (localStorage.getItem("skinset"))
					{skin_value = localStorage.getItem("skinset");}
				else {
						skin_value = 'bikini_skin_0_';
						localStorage.setItem("skinset", skin_value);
					}
			
				var jsonPlayerUrl = "/yamj3/api/config/list.json?config="+skin_value+"player&mode=any";
				console.log("get_player_ jsonPlayerUrl: " + jsonPlayerUrl);
				$.ajax({
                   url: jsonPlayerUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPlayer)
                   {
						jsondata = dataSkinPlayer;
				//		outputJson(dataSkinPlayer);
						checkPlayer(dataSkinPlayer);
						Player_setting_from_db (PlayerValue);
					}
					
				});	
			 return jsondata;
		}
				
			// update  the value in the config database
			
	
		function update_Player(Player_) 
		{
				var jsonPlayerUrl = "/yamj3/api/config/update.json?key="+skin_value+"player&value="+Player_+"";
				console.log("update_Player jsonPlayerUrl: " + jsonPlayerUrl);
				$.ajax({
                   url: jsonPlayerUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPlayer)
                   {
						jsondata = dataSkinPlayer;
				//		outputJson(dataSkinPlayer);
						set_Player_value(Player_)
				// this is new a now the settings could be fetch from db with player API
						Player_setting_from_db (Player_);
						location.reload();
					}
					
				});	
			 return jsondata;


		}
		function checkPlayer(yamjdata) {
					var PN = {
						"td.Value":  function(arg) {
										if (arg.context.count) {
										console.log("checkPlayer: "+arg.context.results[0].value);
										set_Player_value(arg.context.results[0].value);
										return arg.context.results[0].value;} else {
										console.log("checkPlayer: no value found");
										update_Player(default_player);}
								}								
							
						};
				
				$p('.results').render( yamjdata, PN );			
			}	
	
	
	// set the rules to adjust Player to the Player choosen
		function set_Player_value(Player_)
			{
				PlayerValue = Player_;
				console.log('set_Player_value:'+Player_);
				window.localStorage.setItem("Player", Player_);
			}
	
	// get all the player settings : ip, path for the selected player 'player'
	
		function Player_setting_from_db(player) {
					
				var jsonPlayer_db_Url = "/yamj3/api/player/list.json?playerName="+player;
				console.log("Player_setting_from_db jsonPlayerUrl: " + jsonPlayer_db_Url);
				$.ajax({
                   url: jsonPlayer_db_Url,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPlayer)
                   {
						jsondata = dataSkinPlayer;
				//		outputJson(dataSkinPlayer);
						set_Player_value_from_db(dataSkinPlayer)
				
					}
			
				});	
		}
		
		function set_Player_value_from_db(yamjdata) {
				var PLAYER_DB = {
						"td.Value":  function(arg) {
										if (arg.context.count) {
											console.log ("set_Player_value_from_db: count= "+arg.context.count);	
											var player_list = new Array; 
											player_list = arg.context.results;
												Ip_device = player_list[0].ipAddress;
												window.localStorage.setItem("Player_Ip", player_list[0].ipAddress);
												Device_type=player_list[0].deviceType;
												window.localStorage.setItem("Player_Type", player_list[0].deviceType);
												console.log ("Player_setting: player= "+ player_list[0].name +" Ip="+Ip_device+ " type=" + Device_type);
												if (player_list[0].paths) {
												window.localStorage.setItem("Player_Paths_Number", player_list[0].paths.length);	
												for(j = 0; j < player_list[0].paths.length; j++){
													source_path[j]= normalise_path(player_list[0].paths[j].sourcePath);																										
													target_path[j]= normalise_path(player_list[0].paths[j].targetPath);
													window.localStorage.setItem("Player_Paths_" + (j+1), ""+ window.localStorage.getItem('source_label') 
													+"=" +source_path[j]+ "&nbsp;==>&nbsp;"+ window.localStorage.getItem('target_label') + "=" + target_path[j]);
													console.log ("Player_setting: player= "+ player_list[0].name +" change="+source_path[j]+ " by=" + target_path[j]);	
													nbre_translate_path = j;
													}
												}
											
											return player_list[0].name;
											}
											else {
											console.log("checkPlayer: no value found");
								//			update_Player(default_player);
											}
										}								
							
						};
				
				$p('.results').render( yamjdata, PLAYER_DB );		
			}
			
			
		
		

			
		// normalise any path to avoid unix path, / at the end and so on ...
		function normalise_path (path_to_normalise)
			{
				// change all the \\ by / 
				var path = path_to_normalise.replace (/\\/g, "/");
				// the path should be stored without any / ending the prefix to change 
				if (path.substring(path.length-1, path.length) == '/') {
					path = path.substring (0, (path.length - 1));}
				console.log ("normalise_path: "+path_to_normalise + " path normalised:" + path );	
				return path;
			}
	