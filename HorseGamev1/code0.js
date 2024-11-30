gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDBackgObjects1= [];
gdjs.MenuCode.GDBackgObjects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDNewText2Objects1= [];
gdjs.MenuCode.GDNewText2Objects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDMedievalButtonBrownObjects1= [];
gdjs.MenuCode.GDMedievalButtonBrownObjects2= [];
gdjs.MenuCode.GDMedievalButtonBrown2Objects1= [];
gdjs.MenuCode.GDMedievalButtonBrown2Objects2= [];
gdjs.MenuCode.GDSquareGreenSliderObjects1= [];
gdjs.MenuCode.GDSquareGreenSliderObjects2= [];
gdjs.MenuCode.GDMedievalButtonBrown3Objects1= [];
gdjs.MenuCode.GDMedievalButtonBrown3Objects2= [];
gdjs.MenuCode.GDNewText3Objects1= [];
gdjs.MenuCode.GDNewText3Objects2= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];
gdjs.MenuCode.GDMedievalButtonBrown4Objects1= [];
gdjs.MenuCode.GDMedievalButtonBrown4Objects2= [];
gdjs.MenuCode.GDfadeScreenObjects1= [];
gdjs.MenuCode.GDfadeScreenObjects2= [];
gdjs.MenuCode.GDMenuObjects1= [];
gdjs.MenuCode.GDMenuObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.MenuCode.GDNewSpriteObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.MenuCode.GDNewSpriteObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\bearHouse.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\Polka.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\chime.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\yippieee.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\bearRoar.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\hit.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\jump.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\walking.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\melody1.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\heartspop.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\yayy.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\kiss.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\windSound.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\sti.mp3");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "sounds\\calm1.mp3", true, 40, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.MenuCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText2Objects1[i].getBehavior("Tween").resumeTween("Scale");
}
}{for(var i = 0, len = gdjs.MenuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText2Objects1[i].getBehavior("Tween").addObjectScaleTween3("Scale", 1.3, "easeOutQuad", 0.6, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.MenuCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNewText2Objects1[i].getBehavior("Tween").hasFinished("Scale") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNewText2Objects1[k] = gdjs.MenuCode.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNewText2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText2Objects1[i].getBehavior("Tween").addObjectScaleTween3("Scale", 1, "easeInQuad", 0.6, false, true);
}
}{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.MenuCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNewText2Objects1[i].getBehavior("Tween").hasFinished("Scale") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNewText2Objects1[k] = gdjs.MenuCode.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNewText2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText2Objects1[i].getBehavior("Tween").addObjectScaleTween3("Scale", 1.2, "easeOutQuad", 0.6, false, true);
}
}{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown"), gdjs.MenuCode.GDMedievalButtonBrownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMedievalButtonBrownObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMedievalButtonBrownObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMedievalButtonBrownObjects1[k] = gdjs.MenuCode.GDMedievalButtonBrownObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMedievalButtonBrownObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SquareGreenSlider"), gdjs.MenuCode.GDSquareGreenSliderObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, (( gdjs.MenuCode.GDSquareGreenSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDSquareGreenSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown3"), gdjs.MenuCode.GDMedievalButtonBrown3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMedievalButtonBrown3Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMedievalButtonBrown3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMedievalButtonBrown3Objects1[k] = gdjs.MenuCode.GDMedievalButtonBrown3Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMedievalButtonBrown3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMedievalButtonBrown3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MenuCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDMedievalButtonBrown3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMedievalButtonBrown3Objects1[i].SetLabelText("A jednak nie...", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSprite2Objects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown2"), gdjs.MenuCode.GDMedievalButtonBrown2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMedievalButtonBrown2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMedievalButtonBrown2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMedievalButtonBrown2Objects1[k] = gdjs.MenuCode.GDMedievalButtonBrown2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMedievalButtonBrown2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sounds\\horse.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectScaleTween3("Scale", 1.2, "easeOutQuad", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MenuCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectScaleTween3("Scale", 1, "easeOutQuad", 1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown4"), gdjs.MenuCode.GDMedievalButtonBrown4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMedievalButtonBrown4Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMedievalButtonBrown4Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMedievalButtonBrown4Objects1[k] = gdjs.MenuCode.GDMedievalButtonBrown4Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMedievalButtonBrown4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown4"), gdjs.MenuCode.GDMedievalButtonBrown4Objects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.MenuCode.GDMedievalButtonBrown4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMedievalButtonBrown4Objects1[i].SetLabelText("Wyłącz FlScr", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBrown4"), gdjs.MenuCode.GDMedievalButtonBrown4Objects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{for(var i = 0, len = gdjs.MenuCode.GDMedievalButtonBrown4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMedievalButtonBrown4Objects1[i].SetLabelText("Full Screen", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgObjects1.length = 0;
gdjs.MenuCode.GDBackgObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.MenuCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown2Objects1.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown2Objects2.length = 0;
gdjs.MenuCode.GDSquareGreenSliderObjects1.length = 0;
gdjs.MenuCode.GDSquareGreenSliderObjects2.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown3Objects1.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown3Objects2.length = 0;
gdjs.MenuCode.GDNewText3Objects1.length = 0;
gdjs.MenuCode.GDNewText3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown4Objects1.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown4Objects2.length = 0;
gdjs.MenuCode.GDfadeScreenObjects1.length = 0;
gdjs.MenuCode.GDfadeScreenObjects2.length = 0;
gdjs.MenuCode.GDMenuObjects1.length = 0;
gdjs.MenuCode.GDMenuObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDBackgObjects1.length = 0;
gdjs.MenuCode.GDBackgObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.MenuCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown2Objects1.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown2Objects2.length = 0;
gdjs.MenuCode.GDSquareGreenSliderObjects1.length = 0;
gdjs.MenuCode.GDSquareGreenSliderObjects2.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown3Objects1.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown3Objects2.length = 0;
gdjs.MenuCode.GDNewText3Objects1.length = 0;
gdjs.MenuCode.GDNewText3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown4Objects1.length = 0;
gdjs.MenuCode.GDMedievalButtonBrown4Objects2.length = 0;
gdjs.MenuCode.GDfadeScreenObjects1.length = 0;
gdjs.MenuCode.GDfadeScreenObjects2.length = 0;
gdjs.MenuCode.GDMenuObjects1.length = 0;
gdjs.MenuCode.GDMenuObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
