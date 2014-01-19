This is the readme for Bikini skin : 
Bikini skin is built to use Yamj3 . 
this skin could be used with a PC and tablet (android). 

Tested with: 
-  last yamj3 version ,
-  PC win7 64b
-  Firefox 26.0
-  Chrome 32.0
-  IE 11.0
- android 4.3 (chrome and IE)


installation : 

STEP 1: INSTALL
 - 1rst method 
    download bikini.zip 
	extract under yamj3/resources/skins
	goto step 2
 - 2nd method
    Make sure YAMJ core is running
    Browse to localhost:8888/yamj3
    Select skins
    Past the URL into the "URL to download" box
    Click "Add Skin"
    wait for download and install
	goto step 2
	
STEP 2: CUSTOMISE
 -  edit yamj3/resources/skins/bikini/My_Library.xml
	<players>  <!-- is mandatory should be the 1rst line don't skip, modify, delete, .... -->
	...
	</players> <!-- is mandatory, shouls be the last line , don't skip, modify, delete, ....don't forget to close -->
 - 	for each player (player is the device where you want to play the movie) add the following sequence 
	<player>
		<playername>Name of the Player</playername> <!-- this name is free, it's the one used to select the player inside the skin --> 
		<playeradress>IP_player</playeradress>  <!-- IP of the device / player -->
		<path> <!-- repeat as long as there is various path used) 
			<sourcepath>drive_letter</sourcepath>  <!-- the target path used when you add a network_share generally it is the lettre_drive used inside the flescanner.cmd  -->
			<targetpath>name_of_share</targetpath>  <!-- it's the path of the share device which will be substituate to sourcepath in the order PLAY  -->
		</path>
	</player>  <!-- don't forget to close -->
 - example: 	
	<player>
		<playername>C200</playername>
		<playeradress>192.168.1.25</playeradress>
		<path>
			<sourcepath>W:</sourcepath>
			<targetpath>/opt/sybhttpd/localhost.drives/NETWORK_SHARE/READYNAS</targetpath>
		</path>
		<path>
			<sourcepath>D:/Mes films</sourcepath>
			<targetpath>/opt/sybhttpd/localhost.drives/NETWORK_SHARE/MYPC</targetpath>
		</path>
		<path>
			<sourcepath>U:</sourcepath>
			<targetpath>/opt/sybhttpd/localhost.drives/SATA_DISK</targetpath>
		</path>
	</player>
 - don't forget to save with the same name 

STEP 3: RUN
    hit skins
    select bikini launch the skin
	
STEP 4: CHOOSE YOUR CONFIG (mandatory the 1rst time you install the skin) 
 - adjust configuration for player / language / index number of line / style  
    select configuration menu (upper left menu with the logo Yamj) 
	repeat for the 4 parameters

GENERAL FUNCTIONNALITY: 
 - parameter: (configuration menu)
    adjust : language (available language en: english, fr: french, de:german, es:spanich, it:italian) 
	adjust : player (list of player added in the My_bibrary.xml file) 
	adjust : number of line (available 1 to 6 and 0 or ~) 
	         depending of the parameter choosen , will adjust automatically thumb and title dimension 
			-- 0 or ~ : scroll all the movie without page, no line break, generally used with tablet to allow scrolling with hand move, no title display
			-- 1 : 1 row and 6 posters, allow to display title under the poster
			-- 2 : 2 rows and 12 posters, allow to display title under the poster
			-- 3 : 3 rows and 27 postes (9 columns), allow to display title under the poster
			-- 4 : 4 rows and 44 posters (11 colmns), allow to display title under the poster
			-- 5 : 5 rows and 60 posters (12 columns), just display poster
			-- 6 : 6 rows and 72 posters (12 columns), just display poster
	adjust : style 
			left menu : movie, series, season , movie and series are never affected by this parameter, open everytime an entire page 
			this parameter is applied to the right contextual menu entries : person, movie, selection and to the left general menu : search , configuration 
			-- page : open the feature selected in a new page
			-- ribbon : only used with contextual person and movie menu , open a new vertical (1 column) ribbon page, for the other menu like page
			-- frame : open a frame inside the windows, click on the selected menu toggle the frame (display if hidden, hide if displayed) 
			-- popup : only used with person right contextual menu , open an horizontal (1 line) scrolling windows 

 - left menu (yamj logo on the left upper side) 
	this menu could be displayed with the mouse over the logo and / or permanently displayed with a click on the the menu (click again to hide / display) 
	it is a permanent menu which is out of context, open functionnality depending of the style  
	-- movie and series,  list all the contents of the jukebox for movie and series 
	-- movie,  select all movie 
	-- series,  select all series
	-- season,  select all season 
	-- person,  select all person
	-- search,  open the search window
	-- configuration,  open the configuration window
	
 - right menu (yamj logo on the right upper side) - available only in the detail page
	this menu could be displayed with the mouse over the logo and / or permanently displayed with a click on the the menu (click again to hide / display) 
	it is a contextual menu which takes in charge the detail context selected, open functionnality depending of the style  
	-- fanart,  toggle display fanart only or fanart and all info
	-- person,  select and display the crew and cast for this video  (style depending)
	-- movie,  select and display the video type of the detail page (style depending) 
	-- selection,  allow to select and display alphabetical title of the video type from the detail page (style depending)
	-- remote, toggle display / hide the remote menu (only frame)
 
 - index page  
	this pages is called from index menu depending of the contents selected, parameter selected (style, line, language) 
	display poster and title (depending of the line number choosen). 
	click on a poster will open the detail page or sub menu. 
	index of all video is the default page. 
	-- movie and series,  list all the contents of the jukebox for movie and series 
	-- movie,  list all movie 
	-- series,  list all series
	-- season,  list all season 
	-- person, list all person 	
		warning:  because of IE limitation only 2500 people could be listed at the same time (even with paging feature),
		click to refresh the window display the next 2500 people and do on , rotate to the 1rst 2500 if the last people is displayed
	-- genres, list all genres 
	-- selected genres, list all video for the genre selected , video type could be selected inside the page 

 - index ribbon 
	is called when ribbon style is selected (configuration menu) and is available for person, video
	open a new vertical page (1 column) with selected functionnality
	vertical scroll 
	click on a poster will display the selected video on the detail page . 
			
 - index popup 
	is called when popup style is selected (configuration menu) and is available for person
	open a new horizontal page (1 line) with selected functionnality
	horizontal scroll 
	click on a poster will display the selected biography. 
	inside biography page click on the return icon will get back to list of person. 
	
 - index frame 
	is called when frame style is selected (configuration menu) and is available for person, video, contextual movie, contextual selection, search, configuration
	open a frame inside the page displayed with selected functionnality
	no scroll 
	click on a poster will display the selected video on the detail page. 
	
 - PLAY logo (upper right on the detail page)
	is displayed on the detail selected video and is available for movie, episode (not tested yet)
	open the remote menu and send the play command to the player selected (configuration menu) 
	click on close remote to close the menu (will not stop the video playing). 
	
 - Remote 
	is called when play button is reached or the remote submenu called 
	open the remote menu and send the selected command to the player (configuration menu) 
	click on close remote to close the menu (will not stop the command sent). 
	warning:  the play button isn't applied to the video on the detail windows, just to the item highlited on player itself. 

 - search  
	is called when search menu is reached (frame if frame selected, otherwise popup windows) 
	open the search menu which all to select: 
	-- video type:  movie and series, movie, series, season (by default movie and series)
	-- person : person will select on 1rst name, name will select on name (the 1rst chain after the 1rst blank) (by default movie and series)
	-- ascending or descending:  (by default ascending)
	-- page / ribbon:  allow to specify the target form of the display 
	-- letter : click on the letter directly send the command with other parameter already selected 
	-- chain : need to click on submit and send the command with other parameter already selected 
	
 - configuration 
	is called when configuration menu is reached (frame if frame selected, otherwise popup windows) 
	open the configuration menu which all to select: look at parameter functionnality 
 