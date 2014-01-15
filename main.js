	enchant();

/*Vars*/
/*Dirs*/
var dImages = "images/";
var dMusic = "music/";
/*Sprites*/
var charMain = dImages + 'testObj.png';
var mapGraphic = dImages + 'map0.png';
/*Text*/
var label = new Label("test");
label.color = '#f00';
label.font = "8px cursive";
/*Sounds*/
var sJump = dMusic + 'jump.wav';

var mapGrid = [
	  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
	  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  0],
	  [  0,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
	  [  0,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
	  [  0,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
	  [  0,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
	];


var colMap = [
  [  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0],
  [  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0],
  [  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0],
  [  0,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [  0,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
];

window.onload = function () {
  var game = new Game(320, 320);
  game.preload(charMain, sJump, mapGraphic);
  game.scale = 1;
  game.onload = function () {
    // Anything written here is processed
    var scene = new Scene();
    var sprite = new Sprite(47, 47);
    sprite.image = game.assets[charMain];
    sprite.moveTo(0, 152);

    game.assets[sJump].play();
	
	//Listener en cada Frame
	game.addEventListener('enterframe', function() {
	          sprite.x += 1;
	          sprite.rotate(1);
	        });

	sprite.addEventListener('touchstart', function() {
	          sprite.x += 1;
	          game.assets[sJump].play();
	        });

	/*Map*/
	var map = new Map(16, 16);
	map.image = game.assets[mapGraphic];
	
	map.loadData(mapGrid);
	map.collisionData = colMap;

	if (map.hitTest(100,100) === true) {
	  alert('hit!');
	}

	//Add to Scene 
	scene.addChild(map);
    scene.addChild(sprite);
    scene.addChild(label);

    game.pushScene(scene);
  };
  game.start();
}
