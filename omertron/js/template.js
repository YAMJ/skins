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
