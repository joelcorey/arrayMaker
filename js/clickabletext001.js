<script>			
	var text, clickArea;			
	var _isDown = false;			
	var _game = new Phaser.Game(480, 320, Phaser.AUTO, '', { preload: preload, create: create, update: update });			

	function preload() {				
		_game.load.bitmapFont('Desyrel', 'desyrel.png', 'desyrel.xml');			}			

	function create() {				
		var style = { font: '70px Desyrel', align: 'center'};				
			text = _game.add.bitmapText(_game.world.centerX, _game.world.centerY, 'Click me', style);				
			text.anchor.setTo(0.5, 0.5);												
			clickArea = new Phaser.Rectangle(text.x - text.width / 2, text.y - text.height / 2, text.width, text.height);			
			}						

	function update() {				
		if (_game.input.activePointer.isDown) {					
			if (Phaser.Rectangle.contains(clickArea, _game.input.x, _game.input.y) && !_isDown) {	
				_isDown = true;						
			onClickFunction();					
			}				
		}				

		if (_game.input.activePointer.isUp) {					
			onReleaseFunction();					
				_isDown = false;				
			}							
		}			

	function onClickFunction() {				
		text.scale.x = text.scale.y = 0.9;			
	}						

	function onReleaseFunction() {				
		text.scale.x = text.scale.y = 1;			
	}					
</script>