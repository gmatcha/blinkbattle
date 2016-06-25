
// $('.nav').append("<h1>HI</h1>");

 var stage;

 function init(){
     stage= new createjs.Stage("challengeBoard");
    var image = new Image();
    image.src="app/images/ic_lightbulb.png";
    image.onload = handleImage();
 }
 function handleImage(event)
 {
     var image = event.target;
     var bitmap = new createjs.Bitmap(image);
     stage.addChild(bitmap);
     stage.update();
 }
 //createjs.Bitmap("app/images/ic_lightbulb.png");
//  createjs.Ticker.addEventListener("tick", handleTick);

//  function handleTick(event) {
//      image.x += 10;
//      stage.update();
//  }