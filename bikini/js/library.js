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
				var jsonPlayerUrl = "/yamj3/api/config/list.json?config="+skin_value+"player&mode=any";
				console.log("get_player jsonPlayerUrl: " + jsonPlayerUrl);
				$.ajax({
                   url: jsonPlayerUrl,
                    async: false,
                    dataType: 'jsonp',
                    'success': function(dataSkinPlayer)
                   {
						jsondata = dataSkinPlayer;
				//		outputJson(dataSkinPlayer);
						checkPlayer(dataSkinPlayer);
						Player_setting (PlayerValue);
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
						Player_setting (Player_);
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
		function Player_setting(player) {
		
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
					source_path[j]= normalise_path(x.getElementsByTagName("sourcepath")[j].childNodes[0].nodeValue);				
					target_path[j]= normalise_path(x.getElementsByTagName("targetpath")[j].childNodes[0].nodeValue);
					console.log ("Player_setting: player= "+player+" change="+source_path[j]+ " by=" + target_path[j]);	
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
			//	console.log("get_player_list: player_select_rank " +player_select_rank);
			}
			
		// normalise any path to avoid unix path, / at the end and so on ...
		function normalise_path (path_to_normalise)
			{
				// change all the \\ by / 
				var path = path_to_normalise.replace ('\\', '/');
				// the path should be stored without any / ending the prefix to change 
				if (path.substring(path.length-1, path.length) == '/') {
			//		console.log ("normalise_path: change \\ by / and skip last / with path= "+path_to_normalise);	
					path = path.substring (0, (path.length - 1));}
				return path;
			}
				