gdjs.EndingCode = {};
gdjs.EndingCode.localVariables = [];
gdjs.EndingCode.GDNewVideoObjects1= [];
gdjs.EndingCode.GDNewVideoObjects2= [];
gdjs.EndingCode.GDBearPhysObjects1= [];
gdjs.EndingCode.GDBearPhysObjects2= [];
gdjs.EndingCode.GDNewSpriteObjects1= [];
gdjs.EndingCode.GDNewSpriteObjects2= [];
gdjs.EndingCode.GDMisioObjects1= [];
gdjs.EndingCode.GDMisioObjects2= [];
gdjs.EndingCode.GDKonikObjects1= [];
gdjs.EndingCode.GDKonikObjects2= [];
gdjs.EndingCode.GDNewTextObjects1= [];
gdjs.EndingCode.GDNewTextObjects2= [];
gdjs.EndingCode.GDNewVideo2Objects1= [];
gdjs.EndingCode.GDNewVideo2Objects2= [];
gdjs.EndingCode.GDfadeScreenObjects1= [];
gdjs.EndingCode.GDfadeScreenObjects2= [];
gdjs.EndingCode.GDMenuObjects1= [];
gdjs.EndingCode.GDMenuObjects2= [];


gdjs.EndingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22589660);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.EndingCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.EndingCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDNewVideoObjects1[i].play();
}
}{for(var i = 0, len = gdjs.EndingCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDNewVideoObjects1[i].setVolume(0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "sounds\\sti.mp3", false, 40, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.EndingCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndingCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.EndingCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.EndingCode.GDNewVideoObjects1[k] = gdjs.EndingCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.EndingCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22590012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.EndingCode.GDNewTextObjects1);
/* Reuse gdjs.EndingCode.GDNewVideoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewVideo2"), gdjs.EndingCode.GDNewVideo2Objects1);
{for(var i = 0, len = gdjs.EndingCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDNewVideoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EndingCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDNewTextObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 300);
}
}{for(var i = 0, len = gdjs.EndingCode.GDNewVideo2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDNewVideo2Objects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.EndingCode.GDNewVideo2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDNewVideo2Objects1[i].setLoop(true);
}
}{for(var i = 0, len = gdjs.EndingCode.GDNewVideo2Objects1.length ;i < len;++i) {
    gdjs.EndingCode.GDNewVideo2Objects1[i].play();
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sounds\\yayy.mp3", 3, false, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.EndingCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.EndingCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.EndingCode.GDNewVideoObjects1[i].setCurrentTime(99);
}
}}

}


};

gdjs.EndingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndingCode.GDNewVideoObjects1.length = 0;
gdjs.EndingCode.GDNewVideoObjects2.length = 0;
gdjs.EndingCode.GDBearPhysObjects1.length = 0;
gdjs.EndingCode.GDBearPhysObjects2.length = 0;
gdjs.EndingCode.GDNewSpriteObjects1.length = 0;
gdjs.EndingCode.GDNewSpriteObjects2.length = 0;
gdjs.EndingCode.GDMisioObjects1.length = 0;
gdjs.EndingCode.GDMisioObjects2.length = 0;
gdjs.EndingCode.GDKonikObjects1.length = 0;
gdjs.EndingCode.GDKonikObjects2.length = 0;
gdjs.EndingCode.GDNewTextObjects1.length = 0;
gdjs.EndingCode.GDNewTextObjects2.length = 0;
gdjs.EndingCode.GDNewVideo2Objects1.length = 0;
gdjs.EndingCode.GDNewVideo2Objects2.length = 0;
gdjs.EndingCode.GDfadeScreenObjects1.length = 0;
gdjs.EndingCode.GDfadeScreenObjects2.length = 0;
gdjs.EndingCode.GDMenuObjects1.length = 0;
gdjs.EndingCode.GDMenuObjects2.length = 0;

gdjs.EndingCode.eventsList0(runtimeScene);
gdjs.EndingCode.GDNewVideoObjects1.length = 0;
gdjs.EndingCode.GDNewVideoObjects2.length = 0;
gdjs.EndingCode.GDBearPhysObjects1.length = 0;
gdjs.EndingCode.GDBearPhysObjects2.length = 0;
gdjs.EndingCode.GDNewSpriteObjects1.length = 0;
gdjs.EndingCode.GDNewSpriteObjects2.length = 0;
gdjs.EndingCode.GDMisioObjects1.length = 0;
gdjs.EndingCode.GDMisioObjects2.length = 0;
gdjs.EndingCode.GDKonikObjects1.length = 0;
gdjs.EndingCode.GDKonikObjects2.length = 0;
gdjs.EndingCode.GDNewTextObjects1.length = 0;
gdjs.EndingCode.GDNewTextObjects2.length = 0;
gdjs.EndingCode.GDNewVideo2Objects1.length = 0;
gdjs.EndingCode.GDNewVideo2Objects2.length = 0;
gdjs.EndingCode.GDfadeScreenObjects1.length = 0;
gdjs.EndingCode.GDfadeScreenObjects2.length = 0;
gdjs.EndingCode.GDMenuObjects1.length = 0;
gdjs.EndingCode.GDMenuObjects2.length = 0;


return;

}

gdjs['EndingCode'] = gdjs.EndingCode;
