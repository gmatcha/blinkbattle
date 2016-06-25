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
             var img,bitmap,hit,img2,img3,bitmap2,bitmap3;
             var connection = null;
             drawCanvas();
 


             function drawCanvas(){
                 if (scope.stage) {
                       scope.stage.autoClear = true;
                       scope.stage.removeAllChildren();
                       scope.stage.update();
                   } else {
                       scope.stage = new createjs.Stage(element[0]);
                      
                    }
                    
                   img = new Image();
                   img.src="assets/images/ic_lightbulb.png";
                   $(img).load(function(){
                        drawBitmap(img,bitmap,190,110,'lightbulb');
                    });

                    img2 = new Image();
                    img2.src="assets/images/ic_button.png";
                    $(img2).load(function(){
                        drawBitmap(img2,bitmap2,250,160,'button');
                    });

                    img3 = new Image();
                    img3.src="assets/images/ic_wire.png";
                    $(img3).load(function(){
                        drawBitmap(img3,bitmap3,350,90,'wire');
                    });

                    var end = new createjs.Shape().set({
                        x: 400,
                        y: 300
                    });
                    end.graphics.f(createjs.Graphics.getRGB(128,128,128))
                        .dc(0,0,30);
                    scope.stage.addChild(end);

                    var end2 = new createjs.Shape().set({
                        x: 500,
                        y: 300
                    });
                    end2.graphics.f(createjs.Graphics.getRGB(128,128,128))
                        .dc(0,0,30);
                    scope.stage.addChild(end2);

                    var end3 = new createjs.Shape().set({
                        x: 600,
                        y: 300
                    });
                    end3.graphics.f(createjs.Graphics.getRGB(128,128,128))
                        .dc(0,0,30);
                    scope.stage.addChild(end3);
                    // end.on("mousedown", handlePress);
                    
                   
             }

             function drawBitmap(img,bitmap,xcord,ycord,objName)
             {
                 bitmap = new createjs.Bitmap(img).set({
                     x: xcord,
                     y: ycord,
                     cursor: 'pointer',
                     name: objName
                 });
                   //bitmap.x = x;//190
                   //bitmap.y = y;//110
                   //bitmap.cursor = "pointer";
                   scope.stage.addChild(bitmap);
                   hit = new createjs.Shape();
                   var bitmapBounds = bitmap.getBounds();
                    hit.graphics.beginFill("#000").drawRect(0, 0, bitmapBounds.width, bitmapBounds.height);
                    bitmap.hitArea = hit;

                     

                   bitmap.addEventListener("pressmove", function(evt){
                       evt.target.x = evt.stageX;
                       evt.target.y = evt.stageY;
                       scope.stage.update();
                   });

                   bitmap.addEventListener("pressup", function(){
                       console.log("up");
                       scope.stage.update();
                   });
                // bitmap.on("mousedown", handlePress);
                   scope.stage.update();
                   createjs.Ticker.addEventListener("tick", tick);
                   scope.stage.enableMouseOver();
             }
             function tick(event) {
                scope.stage.update();
            }

         }
     }
 });