angular.module('blinkBattle')
.controller('LandingController',['DataFactory',function(DataFactory){
var vm = this;
// var canvasObject = {};

// function drawCanvas(){
//     canvasObject.img = new Image();
//     canvasObject.img.src = "assets/images/ic_lightbulb.png";

//     canvasObject.stage = new createjs.Stage($("#challengeBoard").get(0));
         
//     canvasObject.bitmap = new createjs.Bitmap(canvasObject.img);
//     canvasObject.stage.addChild(canvasObject.bitmap);

//     canvasObject.bitmap.x = 190;
//     canvasObject.bitmap.y = 110;
        
//     canvasObject.bitmap.addEventListener("pressmove", function(evt) {
//         evt.target.x = evt.stageX;
//         evt.target.y = evt.stageY;
//         canvasObject.stage.update(); 
//     });
//     canvasObject.bitmap.addEventListener("pressup", function(evt) {
//             console.log("up");
//             // stage.update();  

//         canvasObject.stage.update();
//     });

// }

function init(){
    // drawCanvas();
}

init();
}]);