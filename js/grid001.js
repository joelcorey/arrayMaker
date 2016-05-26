<script type="text/javascript">
	var tileSize = 50;
	var gridXsize = 10;
	var gridYsize = 10;
	

	var gameXsize = gridXsize * tileSize;
	var gameYsize = gridYsize * tileSize;
	console.log("Game display area: " + gameXsize + ", " + gameYsize);

	//var tileArray = [];
	var tileArray = make2Darray(gridXsize, gridYsize);
	var tileGrid = make2Dgrid (tileArray, tileSize);

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

	function make2Dgrid (arraysource, size) {

		for (var y = 0; y < arraysource.length; y++) {
			// make row or y axis here
			var row = document.createElement('div');
			row.setAttribute('id', y);
			row.setAttribute('class', 'gridy');
			document.body.appendChild(row);

			for (var x = 0; x < arraysource[y].length; x++) {
				// make column or x axis here
				var column = document.createElement('div');
				column.setAttribute('id', x);
				column.setAttribute('class', 'gridx');
				//column.innerHTML = x + ', ' + y;
				column.style.width = size + 'px';
				column.style.height = size + 'px';
				row.appendChild(column);
				
			}

		}
	}


$(".gridx")
	.mouseover(function() {
		var coordy = $(this).parent().attr("id");
		var coordx = $(this).attr("id");
		//console.log("x: " + coordx + ", Y: " + coordy);
		$(this).css("background-color","red");
		$("#coords").text("x: " + coordx + ", Y: " + coordy);
	})
	.mouseout(function() {
		$(this).css("background-color","white");
	});


</script>