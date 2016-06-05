function startup() {

	var tileSize = 25;
	var gridXsize = 2;
	var gridYsize = 10;
	
	var gameXsize = gridXsize * tileSize;
	var gameYsize = gridYsize * tileSize;
	//console.log("Game display area: " + gameXsize + ", " + gameYsize);

	//var tileArray = [];
	var tileArray = make2Darray(gridXsize, gridYsize);
	transferAccordion (tileArray);
	
	$(function() {
		$( "#accordion" )
	  		.accordion({
	    		header: "> div > h3"
	  		})
	  		.sortable({
	    		axis: "y",
	    		handle: "h3",
	    		stop: function( event, ui ) {
	      		// IE doesn't register the blur when sorting
	      		// so trigger focusout handlers to remove .ui-state-focus
	      		ui.item.children( "h3" ).triggerHandler( "focusout" );

	      		// Refresh accordion to handle new order
	      		$( this ).accordion( "refresh" );
	    	}
	  	});
	});

	function make2Darray (xlen, ylen) {
		var count = 0
	 	makeArray = []
		for (var y = 0; y < ylen; y++) {
			makeArray[y] = [];
			for (var x = 0; x < xlen; x++) {
				makeArray[y][x] = count;
				count++;
			}
			count = 0;
		}
		//console.log(makeArray);
		return makeArray;
	} 

	function transferAccordion (arraysource) {
		var cssheader = 1;
		var cssdiv = 2
		for (var y = 0; y < arraysource.length; y++) {

			// jQuery UI accordion requires a very specific HTML structure, we read it in here.
			// We then use the nested for loop to get our custom content in to the accordion.
			
			$('#accordion').append('<div id="group' + y + '" class="group">' +
				'<h3>Index ' + y + '</h3>' +
				'<div id="content' + y + '" class="array_content_container"></div>' +
				'</div>'
			);
			
			for (var x = 0; x < arraysource[y].length; x++) { 
				$('#content' + y).append('<div class="array_content">' +
					'Content ' + arraysource[y][x] + //Could also just use x from the nested for loop here.
					'</div>'
				);
			}
		cssheader++;
		cssdiv++;
		}
	}

	function transferSelectable (arraysource) {

	}

	function hoverState(selector) {
		if (thingy = $(selector).is(":hover")) {
			
		}
		return true;
	}

	// At this point we can start working on manipulating the array.
	// For now we will just represent this and not code it			
	$(".array_content")
	.mouseover(function() {
		var coordy = $(this).parent().attr("id");
		var coordx = $(this).attr("id");
		//console.log("x: " + coordx + ", Y: " + coordy);
		$(this).css("background-color","#ccebff");
		$("#coords").text("x: " + coordx + ", Y: " + coordy);
	})
	.mouseout(function() {
		$(this).css("background-color","white");
	});

	$.contextMenu({
		selector: '.main_display',
		items: {
			select: {
				name: "Select",
				callback: function(key, opt){
					alert("Clicked on " + key);
				}
			}
		}
	});

	// Make the main menu
	$( "#topmenu" ).menu();
}