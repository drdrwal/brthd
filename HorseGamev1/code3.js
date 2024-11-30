gdjs.HouseCode = {};
gdjs.HouseCode.localVariables = [];
gdjs.HouseCode.GDkissPointEarsObjects1_1final = [];

gdjs.HouseCode.GDkissPointEyesObjects1_1final = [];

gdjs.HouseCode.GDkissPointNoseObjects1_1final = [];

gdjs.HouseCode.GDnoButton2Objects1_1final = [];

gdjs.HouseCode.GDnoButtonObjects1_1final = [];

gdjs.HouseCode.GDNewSpriteObjects1= [];
gdjs.HouseCode.GDNewSpriteObjects2= [];
gdjs.HouseCode.GDNewSpriteObjects3= [];
gdjs.HouseCode.GDNewSprite2Objects1= [];
gdjs.HouseCode.GDNewSprite2Objects2= [];
gdjs.HouseCode.GDNewSprite2Objects3= [];
gdjs.HouseCode.GDNewParticlesEmitterObjects1= [];
gdjs.HouseCode.GDNewParticlesEmitterObjects2= [];
gdjs.HouseCode.GDNewParticlesEmitterObjects3= [];
gdjs.HouseCode.GDNewSprite3Objects1= [];
gdjs.HouseCode.GDNewSprite3Objects2= [];
gdjs.HouseCode.GDNewSprite3Objects3= [];
gdjs.HouseCode.GDNewSprite4Objects1= [];
gdjs.HouseCode.GDNewSprite4Objects2= [];
gdjs.HouseCode.GDNewSprite4Objects3= [];
gdjs.HouseCode.GDbearObjects1= [];
gdjs.HouseCode.GDbearObjects2= [];
gdjs.HouseCode.GDbearObjects3= [];
gdjs.HouseCode.GDtextConvObjects1= [];
gdjs.HouseCode.GDtextConvObjects2= [];
gdjs.HouseCode.GDtextConvObjects3= [];
gdjs.HouseCode.GDtextBarObjects1= [];
gdjs.HouseCode.GDtextBarObjects2= [];
gdjs.HouseCode.GDtextBarObjects3= [];
gdjs.HouseCode.GDcharNameTextObjects1= [];
gdjs.HouseCode.GDcharNameTextObjects2= [];
gdjs.HouseCode.GDcharNameTextObjects3= [];
gdjs.HouseCode.GDnextButtonObjects1= [];
gdjs.HouseCode.GDnextButtonObjects2= [];
gdjs.HouseCode.GDnextButtonObjects3= [];
gdjs.HouseCode.GDyesButtonObjects1= [];
gdjs.HouseCode.GDyesButtonObjects2= [];
gdjs.HouseCode.GDyesButtonObjects3= [];
gdjs.HouseCode.GDnoButtonObjects1= [];
gdjs.HouseCode.GDnoButtonObjects2= [];
gdjs.HouseCode.GDnoButtonObjects3= [];
gdjs.HouseCode.GDhonObjects1= [];
gdjs.HouseCode.GDhonObjects2= [];
gdjs.HouseCode.GDhonObjects3= [];
gdjs.HouseCode.GDjupiiHeartsObjects1= [];
gdjs.HouseCode.GDjupiiHeartsObjects2= [];
gdjs.HouseCode.GDjupiiHeartsObjects3= [];
gdjs.HouseCode.GDyesButton2Objects1= [];
gdjs.HouseCode.GDyesButton2Objects2= [];
gdjs.HouseCode.GDyesButton2Objects3= [];
gdjs.HouseCode.GDnoButton2Objects1= [];
gdjs.HouseCode.GDnoButton2Objects2= [];
gdjs.HouseCode.GDnoButton2Objects3= [];
gdjs.HouseCode.GDkissPointEyesObjects1= [];
gdjs.HouseCode.GDkissPointEyesObjects2= [];
gdjs.HouseCode.GDkissPointEyesObjects3= [];
gdjs.HouseCode.GDkissPointNoseObjects1= [];
gdjs.HouseCode.GDkissPointNoseObjects2= [];
gdjs.HouseCode.GDkissPointNoseObjects3= [];
gdjs.HouseCode.GDkissPointEarsObjects1= [];
gdjs.HouseCode.GDkissPointEarsObjects2= [];
gdjs.HouseCode.GDkissPointEarsObjects3= [];
gdjs.HouseCode.GDkissesDemandObjects1= [];
gdjs.HouseCode.GDkissesDemandObjects2= [];
gdjs.HouseCode.GDkissesDemandObjects3= [];
gdjs.HouseCode.GDkissesAmountObjects1= [];
gdjs.HouseCode.GDkissesAmountObjects2= [];
gdjs.HouseCode.GDkissesAmountObjects3= [];
gdjs.HouseCode.GDkissesAmount2Objects1= [];
gdjs.HouseCode.GDkissesAmount2Objects2= [];
gdjs.HouseCode.GDkissesAmount2Objects3= [];
gdjs.HouseCode.GDNewVideoObjects1= [];
gdjs.HouseCode.GDNewVideoObjects2= [];
gdjs.HouseCode.GDNewVideoObjects3= [];
gdjs.HouseCode.GDfadeScreenObjects1= [];
gdjs.HouseCode.GDfadeScreenObjects2= [];
gdjs.HouseCode.GDfadeScreenObjects3= [];
gdjs.HouseCode.GDMenuObjects1= [];
gdjs.HouseCode.GDMenuObjects2= [];
gdjs.HouseCode.GDMenuObjects3= [];


gdjs.HouseCode.eventsList0 = function(runtimeScene) {

};gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDNewSprite3Objects2Objects = Hashtable.newFrom({"NewSprite3": gdjs.HouseCode.GDNewSprite3Objects2});
gdjs.HouseCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.HouseCode.GDkissPointEyesObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDkissPointEyesObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDkissPointEyesObjects2[i].getVariableNumber(gdjs.HouseCode.GDkissPointEyesObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDkissPointEyesObjects2[k] = gdjs.HouseCode.GDkissPointEyesObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDkissPointEyesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22482916);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDkissPointEyesObjects2 */
gdjs.copyArray(runtimeScene.getObjects("kissesDemand"), gdjs.HouseCode.GDkissesDemandObjects2);
{for(var i = 0, len = gdjs.HouseCode.GDkissesDemandObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissesDemandObjects2[i].getBehavior("Text").setText("Poproszę buziaka w... nosek!");
}
}{for(var i = 0, len = gdjs.HouseCode.GDkissPointEyesObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissPointEyesObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.HouseCode.mapOfEmptyGDkissPointEyesObjects = Hashtable.newFrom({"kissPointEyes": []});
gdjs.HouseCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.HouseCode.GDkissPointNoseObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDkissPointNoseObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDkissPointNoseObjects2[i].getVariableNumber(gdjs.HouseCode.GDkissPointNoseObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDkissPointNoseObjects2[k] = gdjs.HouseCode.GDkissPointNoseObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDkissPointNoseObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.HouseCode.mapOfEmptyGDkissPointEyesObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22485436);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDkissPointNoseObjects2 */
gdjs.copyArray(runtimeScene.getObjects("kissesDemand"), gdjs.HouseCode.GDkissesDemandObjects2);
{for(var i = 0, len = gdjs.HouseCode.GDkissesDemandObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissesDemandObjects2[i].getBehavior("Text").setText("Poproszę buziaka w... uszka!");
}
}{for(var i = 0, len = gdjs.HouseCode.GDkissPointNoseObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissPointNoseObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.HouseCode.mapOfEmptyGDkissPointEyesObjects = Hashtable.newFrom({"kissPointEyes": []});
gdjs.HouseCode.mapOfEmptyGDkissPointNoseObjects = Hashtable.newFrom({"kissPointNose": []});
gdjs.HouseCode.asyncCallback22490164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HouseCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ending", false);
}gdjs.HouseCode.localVariables.length = 0;
}
gdjs.HouseCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HouseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.HouseCode.asyncCallback22490164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HouseCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.HouseCode.GDkissPointEarsObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDkissPointEarsObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDkissPointEarsObjects2[i].getVariableNumber(gdjs.HouseCode.GDkissPointEarsObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDkissPointEarsObjects2[k] = gdjs.HouseCode.GDkissPointEarsObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDkissPointEarsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.HouseCode.mapOfEmptyGDkissPointEyesObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.HouseCode.mapOfEmptyGDkissPointNoseObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22488772);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.HouseCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.HouseCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.HouseCode.GDNewSprite3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.HouseCode.GDNewVideoObjects2);
gdjs.copyArray(runtimeScene.getObjects("kissesDemand"), gdjs.HouseCode.GDkissesDemandObjects2);
{for(var i = 0, len = gdjs.HouseCode.GDkissesDemandObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissesDemandObjects2[i].getBehavior("Text").setText("YIPPIEEEEEEEE, dziekuje!!!");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sounds\\yippieee.mp3", 2, false, 100, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sounds\\chime.mp3", 3, false, 50, 1);
}{for(var i = 0, len = gdjs.HouseCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.HouseCode.GDNewSprite2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDNewSpriteObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.HouseCode.GDNewSprite3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDNewVideoObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.HouseCode.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDNewVideoObjects2[i].play();
}
}
{ //Subevents
gdjs.HouseCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDkissPointEarsObjects2Objects = Hashtable.newFrom({"kissPointEars": gdjs.HouseCode.GDkissPointEarsObjects2});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDkissPointNoseObjects2Objects = Hashtable.newFrom({"kissPointNose": gdjs.HouseCode.GDkissPointNoseObjects2});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDkissPointEyesObjects2Objects = Hashtable.newFrom({"kissPointEyes": gdjs.HouseCode.GDkissPointEyesObjects2});
gdjs.HouseCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22476316);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds\\Polka.mp3", 2, true, 10, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 10;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bearDeath", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.HouseCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("kissPointEyes"), gdjs.HouseCode.GDkissPointEyesObjects2);
gdjs.copyArray(runtimeScene.getObjects("kissesAmount"), gdjs.HouseCode.GDkissesAmountObjects2);
gdjs.copyArray(runtimeScene.getObjects("kissesAmount2"), gdjs.HouseCode.GDkissesAmount2Objects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.HouseCode.GDNewSpriteObjects2.length !== 0 ? gdjs.HouseCode.GDNewSpriteObjects2[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.HouseCode.GDNewSpriteObjects2.length !== 0 ? gdjs.HouseCode.GDNewSpriteObjects2[0] : null), true, "Kisses", 0);
}{for(var i = 0, len = gdjs.HouseCode.GDkissesAmountObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissesAmountObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.HouseCode.GDkissesAmount2Objects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissesAmount2Objects2[i].getBehavior("Text").setText(((gdjs.HouseCode.GDkissPointEyesObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.HouseCode.GDkissPointEyesObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22478756);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewParticlesEmitter"), gdjs.HouseCode.GDNewParticlesEmitterObjects2);
gdjs.HouseCode.GDNewSprite3Objects2.length = 0;

{for(var i = 0, len = gdjs.HouseCode.GDNewParticlesEmitterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDNewParticlesEmitterObjects2[i].startEmission();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDNewSprite3Objects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 35, gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 30, "Kisses");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22480380);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewParticlesEmitter"), gdjs.HouseCode.GDNewParticlesEmitterObjects2);
{for(var i = 0, len = gdjs.HouseCode.GDNewParticlesEmitterObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDNewParticlesEmitterObjects2[i].stopEmission();
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("kissPointEyes"), gdjs.HouseCode.GDkissPointEyesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDkissPointEyesObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDkissPointEyesObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDkissPointEyesObjects2[k] = gdjs.HouseCode.GDkissPointEyesObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDkissPointEyesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22481308);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDkissPointEyesObjects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{for(var i = 0, len = gdjs.HouseCode.GDkissPointEyesObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissPointEyesObjects2[i].returnVariable(gdjs.HouseCode.GDkissPointEyesObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sounds\\kiss.mp3", 1, false, 100, 1);
}
{ //Subevents
gdjs.HouseCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("kissPointNose"), gdjs.HouseCode.GDkissPointNoseObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDkissPointNoseObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDkissPointNoseObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDkissPointNoseObjects2[k] = gdjs.HouseCode.GDkissPointNoseObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDkissPointNoseObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22483780);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDkissPointNoseObjects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{for(var i = 0, len = gdjs.HouseCode.GDkissPointNoseObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissPointNoseObjects2[i].returnVariable(gdjs.HouseCode.GDkissPointNoseObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sounds\\kiss.mp3", 1, false, 100, 1);
}
{ //Subevents
gdjs.HouseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("kissPointEars"), gdjs.HouseCode.GDkissPointEarsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDkissPointEarsObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDkissPointEarsObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDkissPointEarsObjects2[k] = gdjs.HouseCode.GDkissPointEarsObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDkissPointEarsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22486612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDkissPointEarsObjects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{for(var i = 0, len = gdjs.HouseCode.GDkissPointEarsObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDkissPointEarsObjects2[i].returnVariable(gdjs.HouseCode.GDkissPointEarsObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sounds\\kiss.mp3", 1, false, 100, 1);
}
{ //Subevents
gdjs.HouseCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.HouseCode.GDkissPointEarsObjects1.length = 0;

gdjs.HouseCode.GDkissPointEyesObjects1.length = 0;

gdjs.HouseCode.GDkissPointNoseObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.HouseCode.GDkissPointEarsObjects1_1final.length = 0;
gdjs.HouseCode.GDkissPointEyesObjects1_1final.length = 0;
gdjs.HouseCode.GDkissPointNoseObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("kissPointEars"), gdjs.HouseCode.GDkissPointEarsObjects2);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDkissPointEarsObjects2Objects, runtimeScene, true, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.HouseCode.GDkissPointEarsObjects2.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDkissPointEarsObjects1_1final.indexOf(gdjs.HouseCode.GDkissPointEarsObjects2[j]) === -1 )
            gdjs.HouseCode.GDkissPointEarsObjects1_1final.push(gdjs.HouseCode.GDkissPointEarsObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("kissPointNose"), gdjs.HouseCode.GDkissPointNoseObjects2);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDkissPointNoseObjects2Objects, runtimeScene, true, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.HouseCode.GDkissPointNoseObjects2.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDkissPointNoseObjects1_1final.indexOf(gdjs.HouseCode.GDkissPointNoseObjects2[j]) === -1 )
            gdjs.HouseCode.GDkissPointNoseObjects1_1final.push(gdjs.HouseCode.GDkissPointNoseObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("kissPointEyes"), gdjs.HouseCode.GDkissPointEyesObjects2);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDkissPointEyesObjects2Objects, runtimeScene, true, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.HouseCode.GDkissPointEyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDkissPointEyesObjects1_1final.indexOf(gdjs.HouseCode.GDkissPointEyesObjects2[j]) === -1 )
            gdjs.HouseCode.GDkissPointEyesObjects1_1final.push(gdjs.HouseCode.GDkissPointEyesObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.HouseCode.GDkissPointEarsObjects1_1final, gdjs.HouseCode.GDkissPointEarsObjects1);
gdjs.copyArray(gdjs.HouseCode.GDkissPointEyesObjects1_1final, gdjs.HouseCode.GDkissPointEyesObjects1);
gdjs.copyArray(gdjs.HouseCode.GDkissPointNoseObjects1_1final, gdjs.HouseCode.GDkissPointNoseObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22491964);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sounds\\bearRoar.mp3", 2, false, 100, 1);
}}

}


};gdjs.HouseCode.asyncCallback22494828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HouseCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("noButton"), gdjs.HouseCode.GDnoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("yesButton"), gdjs.HouseCode.GDyesButtonObjects2);
{for(var i = 0, len = gdjs.HouseCode.GDyesButtonObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDyesButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.HouseCode.GDnoButtonObjects2.length ;i < len;++i) {
    gdjs.HouseCode.GDnoButtonObjects2[i].hide(false);
}
}gdjs.HouseCode.localVariables.length = 0;
}
gdjs.HouseCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HouseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HouseCode.asyncCallback22494828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDyesButton2Objects2Objects = Hashtable.newFrom({"yesButton2": gdjs.HouseCode.GDyesButton2Objects2});
gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDnoButton2Objects2Objects = Hashtable.newFrom({"noButton2": gdjs.HouseCode.GDnoButton2Objects2});
gdjs.HouseCode.asyncCallback22497236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HouseCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("noButton"), gdjs.HouseCode.GDnoButtonObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("yesButton"), gdjs.HouseCode.GDyesButtonObjects2);

gdjs.HouseCode.GDnoButton2Objects2.length = 0;

gdjs.HouseCode.GDyesButton2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDyesButton2Objects2Objects, (( gdjs.HouseCode.GDyesButtonObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDyesButtonObjects2[0].getX()), (( gdjs.HouseCode.GDyesButtonObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDyesButtonObjects2[0].getY()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.HouseCode.mapOfGDgdjs_9546HouseCode_9546GDnoButton2Objects2Objects, (( gdjs.HouseCode.GDnoButtonObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDnoButtonObjects2[0].getX()), (( gdjs.HouseCode.GDnoButtonObjects2.length === 0 ) ? 0 :gdjs.HouseCode.GDnoButtonObjects2[0].getY()), "");
}gdjs.HouseCode.localVariables.length = 0;
}
gdjs.HouseCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HouseCode.localVariables);
for (const obj of gdjs.HouseCode.GDnoButtonObjects1) asyncObjectsList.addObject("noButton", obj);
for (const obj of gdjs.HouseCode.GDyesButtonObjects1) asyncObjectsList.addObject("yesButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.HouseCode.asyncCallback22497236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HouseCode.asyncCallback22499188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HouseCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}gdjs.HouseCode.localVariables.length = 0;
}
gdjs.HouseCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HouseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HouseCode.asyncCallback22499188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HouseCode.asyncCallback22501300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HouseCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bearDeath", false);
}gdjs.HouseCode.localVariables.length = 0;
}
gdjs.HouseCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HouseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.HouseCode.asyncCallback22501300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HouseCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewParticlesEmitter"), gdjs.HouseCode.GDNewParticlesEmitterObjects1);
gdjs.copyArray(runtimeScene.getObjects("fadeScreen"), gdjs.HouseCode.GDfadeScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("hon"), gdjs.HouseCode.GDhonObjects1);
gdjs.copyArray(runtimeScene.getObjects("jupiiHearts"), gdjs.HouseCode.GDjupiiHeartsObjects1);
gdjs.copyArray(runtimeScene.getObjects("noButton"), gdjs.HouseCode.GDnoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("yesButton"), gdjs.HouseCode.GDyesButtonObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDNewParticlesEmitterObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDNewParticlesEmitterObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.HouseCode.GDjupiiHeartsObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDjupiiHeartsObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.HouseCode.GDhonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDhonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDyesButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDyesButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDnoButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDnoButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDfadeScreenObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDfadeScreenObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds\\bearHouse.mp3", 1, true, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\kiss.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\bearRoar.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\yippieee.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\chime.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\Polka.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "sounds\\bearHouse.mp3");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fadeScreen"), gdjs.HouseCode.GDfadeScreenObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDfadeScreenObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDfadeScreenObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp(((gdjs.HouseCode.GDfadeScreenObjects1[i].getBehavior("Opacity").getOpacity())), 0, 0.05));
}
}}

}


{


gdjs.HouseCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.HouseCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("nextButton"), gdjs.HouseCode.GDnextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDnextButtonObjects1.length;i<l;++i) {
    if ( gdjs.HouseCode.GDnextButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDnextButtonObjects1[k] = gdjs.HouseCode.GDnextButtonObjects1[i];
        ++k;
    }
}
gdjs.HouseCode.GDnextButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22493284);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.HouseCode.GDnextButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("textConv"), gdjs.HouseCode.GDtextConvObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDtextConvObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDtextConvObjects1[i].getBehavior("Text").setText("Prosze, to miodek dla Ciebie jako podziekowanie...");
}
}{for(var i = 0, len = gdjs.HouseCode.GDtextConvObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDtextConvObjects1[i].returnVariable(gdjs.HouseCode.GDtextConvObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.HouseCode.GDnextButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDnextButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("textConv"), gdjs.HouseCode.GDtextConvObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDtextConvObjects1.length;i<l;++i) {
    if ( gdjs.HouseCode.GDtextConvObjects1[i].getVariableNumber(gdjs.HouseCode.GDtextConvObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDtextConvObjects1[k] = gdjs.HouseCode.GDtextConvObjects1[i];
        ++k;
    }
}
gdjs.HouseCode.GDtextConvObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22494364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hon"), gdjs.HouseCode.GDhonObjects1);
{for(var i = 0, len = gdjs.HouseCode.GDhonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDhonObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.HouseCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yesButton"), gdjs.HouseCode.GDyesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDyesButtonObjects1.length;i<l;++i) {
    if ( gdjs.HouseCode.GDyesButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDyesButtonObjects1[k] = gdjs.HouseCode.GDyesButtonObjects1[i];
        ++k;
    }
}
gdjs.HouseCode.GDyesButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22495812);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bear"), gdjs.HouseCode.GDbearObjects1);
gdjs.copyArray(runtimeScene.getObjects("hon"), gdjs.HouseCode.GDhonObjects1);
gdjs.copyArray(runtimeScene.getObjects("jupiiHearts"), gdjs.HouseCode.GDjupiiHeartsObjects1);
gdjs.copyArray(runtimeScene.getObjects("noButton"), gdjs.HouseCode.GDnoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("textConv"), gdjs.HouseCode.GDtextConvObjects1);
/* Reuse gdjs.HouseCode.GDyesButtonObjects1 */
{for(var i = 0, len = gdjs.HouseCode.GDtextConvObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDtextConvObjects1[i].returnVariable(gdjs.HouseCode.GDtextConvObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}{for(var i = 0, len = gdjs.HouseCode.GDtextConvObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDtextConvObjects1[i].getBehavior("Text").setText("Jupii... a moge poprosic o pare buziakow? Troche mi smutno...");
}
}{for(var i = 0, len = gdjs.HouseCode.GDjupiiHeartsObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDjupiiHeartsObjects1[i].startEmission();
}
}{for(var i = 0, len = gdjs.HouseCode.GDjupiiHeartsObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDjupiiHeartsObjects1[i].setPosition((( gdjs.HouseCode.GDbearObjects1.length === 0 ) ? 0 :gdjs.HouseCode.GDbearObjects1[0].getPointX("")) + 300,(( gdjs.HouseCode.GDbearObjects1.length === 0 ) ? 0 :gdjs.HouseCode.GDbearObjects1[0].getPointY("")) + 100);
}
}{for(var i = 0, len = gdjs.HouseCode.GDhonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDhonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDyesButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDyesButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDnoButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDnoButtonObjects1[i].hide();
}
}
{ //Subevents
gdjs.HouseCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yesButton2"), gdjs.HouseCode.GDyesButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HouseCode.GDyesButton2Objects1.length;i<l;++i) {
    if ( gdjs.HouseCode.GDyesButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HouseCode.GDyesButton2Objects1[k] = gdjs.HouseCode.GDyesButton2Objects1[i];
        ++k;
    }
}
gdjs.HouseCode.GDyesButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22498436);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("noButton2"), gdjs.HouseCode.GDnoButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("textConv"), gdjs.HouseCode.GDtextConvObjects1);
/* Reuse gdjs.HouseCode.GDyesButton2Objects1 */
{for(var i = 0, len = gdjs.HouseCode.GDtextConvObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDtextConvObjects1[i].getBehavior("Text").setText("YIPPIEEEEEEEE");
}
}{for(var i = 0, len = gdjs.HouseCode.GDtextConvObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDtextConvObjects1[i].returnVariable(gdjs.HouseCode.GDtextConvObjects1[i].getVariables().getFromIndex(0)).setNumber(3);
}
}{for(var i = 0, len = gdjs.HouseCode.GDnoButton2Objects1.length ;i < len;++i) {
    gdjs.HouseCode.GDnoButton2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDyesButton2Objects1.length ;i < len;++i) {
    gdjs.HouseCode.GDyesButton2Objects1[i].hide();
}
}
{ //Subevents
gdjs.HouseCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.HouseCode.GDnoButtonObjects1.length = 0;

gdjs.HouseCode.GDnoButton2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.HouseCode.GDnoButtonObjects1_1final.length = 0;
gdjs.HouseCode.GDnoButton2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("noButton"), gdjs.HouseCode.GDnoButtonObjects2);
for (var i = 0, k = 0, l = gdjs.HouseCode.GDnoButtonObjects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDnoButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.HouseCode.GDnoButtonObjects2[k] = gdjs.HouseCode.GDnoButtonObjects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDnoButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.HouseCode.GDnoButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDnoButtonObjects1_1final.indexOf(gdjs.HouseCode.GDnoButtonObjects2[j]) === -1 )
            gdjs.HouseCode.GDnoButtonObjects1_1final.push(gdjs.HouseCode.GDnoButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("noButton2"), gdjs.HouseCode.GDnoButton2Objects2);
for (var i = 0, k = 0, l = gdjs.HouseCode.GDnoButton2Objects2.length;i<l;++i) {
    if ( gdjs.HouseCode.GDnoButton2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.HouseCode.GDnoButton2Objects2[k] = gdjs.HouseCode.GDnoButton2Objects2[i];
        ++k;
    }
}
gdjs.HouseCode.GDnoButton2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.HouseCode.GDnoButton2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.HouseCode.GDnoButton2Objects1_1final.indexOf(gdjs.HouseCode.GDnoButton2Objects2[j]) === -1 )
            gdjs.HouseCode.GDnoButton2Objects1_1final.push(gdjs.HouseCode.GDnoButton2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.HouseCode.GDnoButtonObjects1_1final, gdjs.HouseCode.GDnoButtonObjects1);
gdjs.copyArray(gdjs.HouseCode.GDnoButton2Objects1_1final, gdjs.HouseCode.GDnoButton2Objects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22500308);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("charNameText"), gdjs.HouseCode.GDcharNameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("jupiiHearts"), gdjs.HouseCode.GDjupiiHeartsObjects1);
/* Reuse gdjs.HouseCode.GDnoButtonObjects1 */
/* Reuse gdjs.HouseCode.GDnoButton2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("textBar"), gdjs.HouseCode.GDtextBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("textConv"), gdjs.HouseCode.GDtextConvObjects1);
gdjs.copyArray(runtimeScene.getObjects("yesButton"), gdjs.HouseCode.GDyesButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("yesButton2"), gdjs.HouseCode.GDyesButton2Objects1);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.HouseCode.GDjupiiHeartsObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDjupiiHeartsObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.HouseCode.GDyesButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDyesButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDcharNameTextObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDcharNameTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDtextBarObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDtextBarObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDtextConvObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDtextConvObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDyesButton2Objects1.length ;i < len;++i) {
    gdjs.HouseCode.GDyesButton2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDnoButton2Objects1.length ;i < len;++i) {
    gdjs.HouseCode.GDnoButton2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.HouseCode.GDnoButtonObjects1.length ;i < len;++i) {
    gdjs.HouseCode.GDnoButtonObjects1[i].hide();
}
}
{ //Subevents
gdjs.HouseCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.HouseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HouseCode.GDNewSpriteObjects1.length = 0;
gdjs.HouseCode.GDNewSpriteObjects2.length = 0;
gdjs.HouseCode.GDNewSpriteObjects3.length = 0;
gdjs.HouseCode.GDNewSprite2Objects1.length = 0;
gdjs.HouseCode.GDNewSprite2Objects2.length = 0;
gdjs.HouseCode.GDNewSprite2Objects3.length = 0;
gdjs.HouseCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.HouseCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.HouseCode.GDNewParticlesEmitterObjects3.length = 0;
gdjs.HouseCode.GDNewSprite3Objects1.length = 0;
gdjs.HouseCode.GDNewSprite3Objects2.length = 0;
gdjs.HouseCode.GDNewSprite3Objects3.length = 0;
gdjs.HouseCode.GDNewSprite4Objects1.length = 0;
gdjs.HouseCode.GDNewSprite4Objects2.length = 0;
gdjs.HouseCode.GDNewSprite4Objects3.length = 0;
gdjs.HouseCode.GDbearObjects1.length = 0;
gdjs.HouseCode.GDbearObjects2.length = 0;
gdjs.HouseCode.GDbearObjects3.length = 0;
gdjs.HouseCode.GDtextConvObjects1.length = 0;
gdjs.HouseCode.GDtextConvObjects2.length = 0;
gdjs.HouseCode.GDtextConvObjects3.length = 0;
gdjs.HouseCode.GDtextBarObjects1.length = 0;
gdjs.HouseCode.GDtextBarObjects2.length = 0;
gdjs.HouseCode.GDtextBarObjects3.length = 0;
gdjs.HouseCode.GDcharNameTextObjects1.length = 0;
gdjs.HouseCode.GDcharNameTextObjects2.length = 0;
gdjs.HouseCode.GDcharNameTextObjects3.length = 0;
gdjs.HouseCode.GDnextButtonObjects1.length = 0;
gdjs.HouseCode.GDnextButtonObjects2.length = 0;
gdjs.HouseCode.GDnextButtonObjects3.length = 0;
gdjs.HouseCode.GDyesButtonObjects1.length = 0;
gdjs.HouseCode.GDyesButtonObjects2.length = 0;
gdjs.HouseCode.GDyesButtonObjects3.length = 0;
gdjs.HouseCode.GDnoButtonObjects1.length = 0;
gdjs.HouseCode.GDnoButtonObjects2.length = 0;
gdjs.HouseCode.GDnoButtonObjects3.length = 0;
gdjs.HouseCode.GDhonObjects1.length = 0;
gdjs.HouseCode.GDhonObjects2.length = 0;
gdjs.HouseCode.GDhonObjects3.length = 0;
gdjs.HouseCode.GDjupiiHeartsObjects1.length = 0;
gdjs.HouseCode.GDjupiiHeartsObjects2.length = 0;
gdjs.HouseCode.GDjupiiHeartsObjects3.length = 0;
gdjs.HouseCode.GDyesButton2Objects1.length = 0;
gdjs.HouseCode.GDyesButton2Objects2.length = 0;
gdjs.HouseCode.GDyesButton2Objects3.length = 0;
gdjs.HouseCode.GDnoButton2Objects1.length = 0;
gdjs.HouseCode.GDnoButton2Objects2.length = 0;
gdjs.HouseCode.GDnoButton2Objects3.length = 0;
gdjs.HouseCode.GDkissPointEyesObjects1.length = 0;
gdjs.HouseCode.GDkissPointEyesObjects2.length = 0;
gdjs.HouseCode.GDkissPointEyesObjects3.length = 0;
gdjs.HouseCode.GDkissPointNoseObjects1.length = 0;
gdjs.HouseCode.GDkissPointNoseObjects2.length = 0;
gdjs.HouseCode.GDkissPointNoseObjects3.length = 0;
gdjs.HouseCode.GDkissPointEarsObjects1.length = 0;
gdjs.HouseCode.GDkissPointEarsObjects2.length = 0;
gdjs.HouseCode.GDkissPointEarsObjects3.length = 0;
gdjs.HouseCode.GDkissesDemandObjects1.length = 0;
gdjs.HouseCode.GDkissesDemandObjects2.length = 0;
gdjs.HouseCode.GDkissesDemandObjects3.length = 0;
gdjs.HouseCode.GDkissesAmountObjects1.length = 0;
gdjs.HouseCode.GDkissesAmountObjects2.length = 0;
gdjs.HouseCode.GDkissesAmountObjects3.length = 0;
gdjs.HouseCode.GDkissesAmount2Objects1.length = 0;
gdjs.HouseCode.GDkissesAmount2Objects2.length = 0;
gdjs.HouseCode.GDkissesAmount2Objects3.length = 0;
gdjs.HouseCode.GDNewVideoObjects1.length = 0;
gdjs.HouseCode.GDNewVideoObjects2.length = 0;
gdjs.HouseCode.GDNewVideoObjects3.length = 0;
gdjs.HouseCode.GDfadeScreenObjects1.length = 0;
gdjs.HouseCode.GDfadeScreenObjects2.length = 0;
gdjs.HouseCode.GDfadeScreenObjects3.length = 0;
gdjs.HouseCode.GDMenuObjects1.length = 0;
gdjs.HouseCode.GDMenuObjects2.length = 0;
gdjs.HouseCode.GDMenuObjects3.length = 0;

gdjs.HouseCode.eventsList10(runtimeScene);
gdjs.HouseCode.GDNewSpriteObjects1.length = 0;
gdjs.HouseCode.GDNewSpriteObjects2.length = 0;
gdjs.HouseCode.GDNewSpriteObjects3.length = 0;
gdjs.HouseCode.GDNewSprite2Objects1.length = 0;
gdjs.HouseCode.GDNewSprite2Objects2.length = 0;
gdjs.HouseCode.GDNewSprite2Objects3.length = 0;
gdjs.HouseCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.HouseCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.HouseCode.GDNewParticlesEmitterObjects3.length = 0;
gdjs.HouseCode.GDNewSprite3Objects1.length = 0;
gdjs.HouseCode.GDNewSprite3Objects2.length = 0;
gdjs.HouseCode.GDNewSprite3Objects3.length = 0;
gdjs.HouseCode.GDNewSprite4Objects1.length = 0;
gdjs.HouseCode.GDNewSprite4Objects2.length = 0;
gdjs.HouseCode.GDNewSprite4Objects3.length = 0;
gdjs.HouseCode.GDbearObjects1.length = 0;
gdjs.HouseCode.GDbearObjects2.length = 0;
gdjs.HouseCode.GDbearObjects3.length = 0;
gdjs.HouseCode.GDtextConvObjects1.length = 0;
gdjs.HouseCode.GDtextConvObjects2.length = 0;
gdjs.HouseCode.GDtextConvObjects3.length = 0;
gdjs.HouseCode.GDtextBarObjects1.length = 0;
gdjs.HouseCode.GDtextBarObjects2.length = 0;
gdjs.HouseCode.GDtextBarObjects3.length = 0;
gdjs.HouseCode.GDcharNameTextObjects1.length = 0;
gdjs.HouseCode.GDcharNameTextObjects2.length = 0;
gdjs.HouseCode.GDcharNameTextObjects3.length = 0;
gdjs.HouseCode.GDnextButtonObjects1.length = 0;
gdjs.HouseCode.GDnextButtonObjects2.length = 0;
gdjs.HouseCode.GDnextButtonObjects3.length = 0;
gdjs.HouseCode.GDyesButtonObjects1.length = 0;
gdjs.HouseCode.GDyesButtonObjects2.length = 0;
gdjs.HouseCode.GDyesButtonObjects3.length = 0;
gdjs.HouseCode.GDnoButtonObjects1.length = 0;
gdjs.HouseCode.GDnoButtonObjects2.length = 0;
gdjs.HouseCode.GDnoButtonObjects3.length = 0;
gdjs.HouseCode.GDhonObjects1.length = 0;
gdjs.HouseCode.GDhonObjects2.length = 0;
gdjs.HouseCode.GDhonObjects3.length = 0;
gdjs.HouseCode.GDjupiiHeartsObjects1.length = 0;
gdjs.HouseCode.GDjupiiHeartsObjects2.length = 0;
gdjs.HouseCode.GDjupiiHeartsObjects3.length = 0;
gdjs.HouseCode.GDyesButton2Objects1.length = 0;
gdjs.HouseCode.GDyesButton2Objects2.length = 0;
gdjs.HouseCode.GDyesButton2Objects3.length = 0;
gdjs.HouseCode.GDnoButton2Objects1.length = 0;
gdjs.HouseCode.GDnoButton2Objects2.length = 0;
gdjs.HouseCode.GDnoButton2Objects3.length = 0;
gdjs.HouseCode.GDkissPointEyesObjects1.length = 0;
gdjs.HouseCode.GDkissPointEyesObjects2.length = 0;
gdjs.HouseCode.GDkissPointEyesObjects3.length = 0;
gdjs.HouseCode.GDkissPointNoseObjects1.length = 0;
gdjs.HouseCode.GDkissPointNoseObjects2.length = 0;
gdjs.HouseCode.GDkissPointNoseObjects3.length = 0;
gdjs.HouseCode.GDkissPointEarsObjects1.length = 0;
gdjs.HouseCode.GDkissPointEarsObjects2.length = 0;
gdjs.HouseCode.GDkissPointEarsObjects3.length = 0;
gdjs.HouseCode.GDkissesDemandObjects1.length = 0;
gdjs.HouseCode.GDkissesDemandObjects2.length = 0;
gdjs.HouseCode.GDkissesDemandObjects3.length = 0;
gdjs.HouseCode.GDkissesAmountObjects1.length = 0;
gdjs.HouseCode.GDkissesAmountObjects2.length = 0;
gdjs.HouseCode.GDkissesAmountObjects3.length = 0;
gdjs.HouseCode.GDkissesAmount2Objects1.length = 0;
gdjs.HouseCode.GDkissesAmount2Objects2.length = 0;
gdjs.HouseCode.GDkissesAmount2Objects3.length = 0;
gdjs.HouseCode.GDNewVideoObjects1.length = 0;
gdjs.HouseCode.GDNewVideoObjects2.length = 0;
gdjs.HouseCode.GDNewVideoObjects3.length = 0;
gdjs.HouseCode.GDfadeScreenObjects1.length = 0;
gdjs.HouseCode.GDfadeScreenObjects2.length = 0;
gdjs.HouseCode.GDfadeScreenObjects3.length = 0;
gdjs.HouseCode.GDMenuObjects1.length = 0;
gdjs.HouseCode.GDMenuObjects2.length = 0;
gdjs.HouseCode.GDMenuObjects3.length = 0;


return;

}

gdjs['HouseCode'] = gdjs.HouseCode;
