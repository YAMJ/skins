//**************************************** TEMPLATE ********************************************************
	// this .js is added to person html and group function that will be used by every files 
	// add the following line in the <head> section
	// <script src="js/template_person.js"></script>
//**********************************************************************************************************
      // This function calls the API to get the JSON data.
        // It will then update the HTML with the data and set up the paging
    function getIndexData_Header()
        {
	
			// fill all value according to language setting - from yamjv3_lang_{lang}.xml
			get_lang();
			get_style();
			get_player();
			get_prefered_page();
			if (display_type == '_list') 
				{
					$('#list img').css('background-color', 'green');
					$('#wall img').css('background-color', '');
				}
			else {
					$('#wall img').css('background-color', 'green');
					$('#list img').css('background-color', '');
				}
			// get direction
			if (direction == 'ASC') 
				{
					$('#sort_asc img').css('background-color', 'green');
					$('#sort_desc img').css('background-color', '');
				}
			else {
					$('#sort_desc img').css('background-color', 'green');
					$('#sort_asc img').css('background-color', '');
				}
			 jsonUrlHeader = "/yamj3/api/index/person.json?";	
             jsonUrl = "/yamj3/api/index/person.json?sortdir="+direction+"&dataitems=artwork&artwork=photo&artworksortdir=DESC";
		
			if (window.localStorage.getItem("search_index"))
				{
					switch (index_method) 
							{
							case 'ANY':
									search_selection = window.localStorage.getItem("search_index");
									selected_index = window.localStorage.getItem("person_label") + " (..." +search_selection.toUpperCase() + "...)";
									search_selection = search_selection + "&field=name&mode=" + index_method+ "&sortby=name";
									break;
							case 'START':
									search_selection = window.localStorage.getItem("search_index");
									selected_index = window.localStorage.getItem("person_label") + " (" +search_selection.toUpperCase() + "...)";
									search_selection = search_selection + "&field=name&mode=" + index_method + "&sortby=name";
									break;
							case 'NAME':
							// tweak to search by name, use field last_name
									search_selection = window.localStorage.getItem("search_index")  ;
									selected_index = window.localStorage.getItem("name_label") + " (? " +search_selection.toUpperCase() + "...)"
									search_selection = search_selection + "&field=last_name&mode=START&sortby=last_name" ;
									break;
							case 'PERSON':
							// tweak to search by person, use field first_name
									search_selection = window.localStorage.getItem("search_index") ;
									selected_index = window.localStorage.getItem("person_label") + " (" +search_selection.toUpperCase() + "...)"
									search_selection = search_selection + "&field=first_name&mode=START&sortby=first_name";
									break;
							}	
					
					jsonUrl = jsonUrl + "&search=" + search_selection;	
					jsonUrlHeader = jsonUrlHeader + "&search=" + search_selection;
					window.localStorage.setItem("search_index", "");	
				}	else {
					selected_index = window.localStorage.getItem("person_label") ;
					// by default sort on name ascending 
					jsonUrl = jsonUrl + "&sortby=name";
					jsonUrlHeader = jsonUrlHeader + "&sortby=name";
				//	+ " (" +window.localStorage.getItem("selection_text")+ ")";
						}
				selected_index += "&nbsp;" + window.localStorage.getItem(direction.toLowerCase()+'_label') ;
				$('#printsearch').html(selected_index);
				localStorage.setItem("current_jsonUrl", jsonUrl);
			// allow to split the request with several request less than 2500 values 
				max_count_1 = 52; 
				jsonUrl_1 = jsonUrl + "&start=" + current_count+"&max=" + max_count_1;
				current_count_2 = (parseInt(current_count, 10) + 53);
				max_count_2 = max_count - 52;
				jsonUrl_2 = jsonUrl + "&start=" + current_count_2 +"&max=" + max_count_2;
				jsonUrlHeader = jsonUrlHeader + "&start=" + current_count+"&max=" + max_count; 
				console.log("index_person  URL Header: " + jsonUrlHeader);			

            $.ajax({
                url: jsonUrlHeader,
                async: false,
                dataType: 'jsonp',
                'success': function(data)
                {
                    jsondata = data;
				//	 outputJson(data); 	
                    updateHtml_Header(data);
                    if (window.localStorage.getItem("Paging") == 'true') { 	
						pageData(perPageValue);}
                }
            });
            return ;
        } 
		
    function getIndexData_1()
        {
				
				console.log("index_person  URL 1: " + jsonUrl_1);			

            $.ajax({
                url: jsonUrl_1,
                async: true,
                dataType: 'jsonp',
                'success': function(data)
                {
                    jsondata = data;
				//	 outputJson(data); 	
                    updateHtml_1(data);
                    if (window.localStorage.getItem("Paging") == 'true') { 	
						pageData(perPageValue);}
                }
            });
            return ;
        }
		
    function getIndexData_2()
        {
				console.log("index_person  URL 2: " + jsonUrl_2);			

            $.ajax({
                url: jsonUrl_2,
                async: true,
                dataType: 'jsonp',
                'success': function(data)
                {
                    jsondata = data;
				//	 outputJson(data); 	
                    updateHtml_2(data);
                    if (window.localStorage.getItem("Paging") == 'true') { 	
						pageData(perPageValue);}
                }
            });
            return ;
        }
		
	function updateHtml_Header(yamjdata)
        {	
		var COUNT_HEADER = {
                'span.ReturnCount': function(arg) {	
					// as IE doesn't work with more than 2500 item, need to split the request with package of 2500 people
					// to display the real range of people, there is several goodies and temp value 
					// current_cout need to be stored to know what to display before to store and get the next range of people 
					// current_pos is the variable where is stored the absolute position within the totalcount of selected people 
					console.log("current_count value before store_count: "+ current_count);
					temp_current = current_count; 
					current_count_for_refresh = current_count;
					// if at the beginning set a value which have sense to be displayed 
					if (temp_current == -1) {temp_current = 1;}
					// now call the store_count with nombre of person return by the API call within the total of person stored in the db,  to calculate and store all value 
					store_count (arg.context.count, arg.context.totalCount);
					if (temp_current == 1 && current_count == -1)
						{display_count =  arg.context.count+' '+window.localStorage.getItem("results_text")+' /' +arg.context.totalCount;}
						else {
							display_count = window.localStorage.getItem("results_text")+' '+ temp_current +'-'+current_pos+'/' +arg.context.totalCount;
							}
					 console.log("current_count value after store_count: "+ current_count);
					return display_count;
					}
            };	
			$p('.count_return').render(yamjdata, COUNT_HEADER);	

        }
		
	function SetIndexData (search)
		{		
				localStorage.setItem("search_index", search);
			// as we change the search item reset the count to the beginning (-1)
				if (search != '')
					{localStorage.setItem("nextcurrent_count", (-1));}
				window.location.reload();
		
		}
		
	function ChangeIndex_special (indextype)
		{		
				localStorage.setItem("indextype", indextype);
			// as we change page reset the count item for the search item to initial value 
				localStorage.setItem("nextcurrent_count", (-1));
				console.log("ChangeIndex_special: " + indextype);
				window.location.href=_index_url;
		}

	function store_count (returncount, totalcount)
		{
			// to allow the manipulation (addition) of each value , all the value need to be parsed as Integer , because there are string 
			// totalcount is the total count of people with the selected search item 
			// maxcount is maximum of item that is allowed by IE without problem - it is fixed to 2500
			// current_pos is the position of the last item within the current request 
			// returncount is the number of item return in the current request (less that maxcount)
			// nextcurrent_count is the 1rst position of the next request if totalcount isn't rised 
			// current_count is the position of the last request which have been get from localStorage 
			
				totalcount = parseInt(totalcount, 10); 
				max_count = parseInt(max_count, 10);
				current_pos = 0;
				console.log("store_count start total_count: " + totalcount+" returncount: " + returncount+ " current_count:" + current_count+" max_count:" + max_count );
		
				if (totalcount > 2500) // the actual range isn't the 1rst display 
				{
					returncount = parseInt(returncount, 10); 
					current_count = parseInt(current_count, 10); 
					current_pos = returncount + current_count; 
					temp_nextcurrent_count = totalcount;  // if back_asked is asked and richted totalcount store the value to use it in this case 
					if (current_pos >= totalcount) // reset the nextcurrent_count and current_count to initial value -1, because the current position is greater than total amont of possible item in the database	
						{
							nextcurrent_count= -1;
							current_count = -1;
						} 
					else {
							nextcurrent_count = (parseInt(current_pos, 10) + 1);  // set the next position to the current position + 1 to do not duplicate the last and 1rst person display
							current_count = returncount;  // get and store the nomber of people returned by the API
							localStorage.setItem("current_count", current_count);
					}
					localStorage.setItem("nextcurrent_count", (nextcurrent_count));  // store the next position which should be used by the next API call 
					
				} 
				else // the actual range is the 1rst display, because totalcount is less than 2500 (maxcount), reset the nextcurrent_count to initial value -1, 
				{localStorage.setItem("nextcurrent_count", (-1));}
				
				console.log("temp_nextcurrent_count: " + temp_nextcurrent_count + " current_count: " + current_count); 
				console.log("store_count end current_pos: " + current_pos + " total_count: " + totalcount+" returncount: "
				+ returncount+ " nextcurrent_count:"
				+ localStorage.getItem("nextcurrent_count")+" max_count:" + max_count );
		}
		
	function back_asked ()
		{
			console.log("back_asked start current_pos: " + current_pos + " temp_current: " 
			+ temp_current+" nextcurrent_count: " 
			+ nextcurrent_count+ " temp_nextcurrent_count: " +temp_nextcurrent_count);

			
				if (current_pos >= 4999) // the last person displayed is beetween 4999 (after the 3rd API call) and max value, back need to calculate the jump with the 1rst displayed person so 4999 before
				{
					nextcurrent_count = (parseInt(current_pos, 10) - 4999);	
				} 
				else // we are in the range of the 1rst or 2nd display
				{
					if (current_pos > 2499 && temp_current > 2499)	// if the last person displayed is beetween 2499 and 4999 (2nd API call) and the 1rst person displayed greater than 2499 back need 1 jump before ==> -2500
						{nextcurrent_count = (parseInt(nextcurrent_count, 10) - 2500);}
		
					else { // the current displayed is in the 1rst display (inside the 1rst API call)
								if (nextcurrent_count == 2501)	// the last person displayed is exactly 2501 , position  the 1rst display at -2499 for the next call
									{ nextcurrent_count = temp_nextcurrent_count - 2499;}
			
								else {  // the 1rst person displayed is beetween 1 and 2499,  reinitialise to the beginning
										if (temp_current < 2499)
											{nextcurrent_count = -1}
										
									}
						}
				}
			localStorage.setItem("nextcurrent_count", nextcurrent_count);
	
			console.log("back_asked end current_pos: " + current_pos + " temp_current: "
			+ temp_current+" nextcurrent_count: " + nextcurrent_count+ " temp_nextcurrent_count: " 
			+temp_nextcurrent_count+ " current_count: " +current_count);
		}
		
	function check_duplicated (current_id, current_name) 
		{
			if (localStorage.getItem("name_to_compare")) 
			{
				if (localStorage.getItem("name_to_compare") == current_name) 
					{
						console.log ("duplicated name found for name: " + current_name + " id:"
						+ current_id + " with stored name:" + localStorage.getItem('name_to_compare') 
						+ " stored id:" + localStorage.getItem('id_to_compare'));
					}
			} 

			
			localStorage.setItem("name_to_compare", current_name);
			localStorage.setItem("id_to_compare", current_id);
		}
		
	function input_duplicated_person (duplicate_to_set, name_to_set)
		{
			if (localStorage.getItem("duplicate_id_setted") == 'true')
				{
					if (localStorage.getItem("duplicate_id") == duplicate_to_set) {clean_duplicate(false);}
					else {
					localStorage.setItem("duplicate_doublet", duplicate_to_set);
					console.log("input_duplicated_person duplicate_doublet: " + duplicate_to_set + " with name:" + name_to_set ); 
					localStorage.setItem("duplicate_id_setted", false);
					duplicated_person_call (localStorage.getItem('duplicate_id'), duplicate_to_set, name_to_set );
					}
				}
				else
				{
					localStorage.setItem("duplicate_id", duplicate_to_set);
					console.log("input_duplicated_person duplicate_id: " + duplicate_to_set + " with name:" + name_to_set ); 
					localStorage.setItem("duplicate_id_setted", true);
				}
		}
		
	function duplicated_person_call (id_to_duplicate, doublet_to_duplicate, duplicated_name)
		{
			console.log("duplicated_person_call with name:" + duplicated_name+ " id=" + id_to_duplicate + " doublet=" + doublet_to_duplicate ); 
			// do the job or clean what is selected after the popup of action deasapeared 
			window.setTimeout(function(){clean_duplicate(true);},5050);
			PopAction('duplicate','person ' + duplicated_name, id_to_duplicate, doublet_to_duplicate);
			
	
		}
			
	function start_duplicate ()
		{
			myStopFunction('infobox_update');
			console.log("start_duplicate: id=" + localStorage.getItem('duplicate_id') + " doublet=" + localStorage.getItem('duplicate_doublet') ); 
			
			
			var jsonUrl = "/yamj3/api/person/duplicate.json?id="+localStorage.getItem('duplicate_id')+"&doublet="+ localStorage.getItem('duplicate_doublet');
			console.log("index_person start_duplicate URL: " + jsonUrl);			
			$.ajax({
                url: jsonUrl,
                async: false,
                dataType: 'jsonp',
                'success': function(data)
                {
                    jsondata = data;
				//	 outputJson(data); 	
                }
            });
			
			localStorage.setItem("duplicate_id", '');
			localStorage.setItem("duplicate_doublet", '');
			localStorage.setItem("duplicate_id_setted", false);
			
			localStorage.setItem('nextcurrent_count', current_count_for_refresh);
			call_personindex('_self');
		}
		
	function clean_duplicate (need_refresh)
		{
			console.log("clean_duplicate: id=" + localStorage.getItem('duplicate_id') + " doublet=" + localStorage.getItem('duplicate_doublet') ); 
			localStorage.setItem("duplicate_id", '');
			localStorage.setItem("duplicate_doublet", '');
			localStorage.setItem("duplicate_id_setted", false);
			localStorage.setItem('nextcurrent_count', current_count_for_refresh);
			if (need_refresh) {call_personindex('_self');}
		}
		
	function store_count_for_refresh ()
		{
			localStorage.setItem('nextcurrent_count', current_count_for_refresh);
			console.log ("store_count_for_refresh current_count_for_refresh:" + current_count_for_refresh);
		}