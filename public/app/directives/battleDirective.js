 angular.module('blinkBattle')
 .directive('battleCanvas', function(){
     'use strict';
     return {
         restrict: 'EAC',
         replace: 'true',
         scope:{

         },
         template: "<canvas id='challengeBoard' width='800' height='400'></canvas>",
         link: function(scope,element, attribute){
             var img,bitmap;
             drawCanvas();
             function drawCanvas(){
                 if (scope.stage) {
                       scope.stage.autoClear = true;
                       scope.stage.removeAllChildren();
                       scope.stage.update();
                   } else {
                       scope.stage = new createjs.Stage(element[0]);
                      
                    }
                //    w = scope.stage.canvas.width;
                //    h = scope.stage.canvas.height;
                   img = new Image();
                   img.src="assets/images/ic_lightbulb.png";
                   $(img).load(function(){
                        drawBitmap();
                    });
                   
             }

             function drawBitmap()
             {
                 bitmap = new createjs.Bitmap(img);
                   bitmap.x = 190;
                   bitmap.y = 110;
                   scope.stage.addChild(bitmap);
                   bitmap.addEventListener("pressmove", function(evt){
                       evt.target.x = evt.stageX;
                       evt.target.y = evt.stageY;
                       scope.stage.update();
                   });

                   bitmap.addEventListener("pressup", function(){
                       console.log("up");
                       scope.stage.update();
                   });
                   scope.stage.update();
             }

         }
     }
 });