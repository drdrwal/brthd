gdjs.bearDeathCode = {};
gdjs.bearDeathCode.localVariables = [];
gdjs.bearDeathCode.GDNewVideoObjects1= [];
gdjs.bearDeathCode.GDNewVideoObjects2= [];
gdjs.bearDeathCode.GDNewVideoObjects3= [];
gdjs.bearDeathCode.GDNewTextObjects1= [];
gdjs.bearDeathCode.GDNewTextObjects2= [];
gdjs.bearDeathCode.GDNewTextObjects3= [];
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects3= [];
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1= [];
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects2= [];
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects3= [];
gdjs.bearDeathCode.GDfadeScreenObjects1= [];
gdjs.bearDeathCode.GDfadeScreenObjects2= [];
gdjs.bearDeathCode.GDfadeScreenObjects3= [];
gdjs.bearDeathCode.GDMenuObjects1= [];
gdjs.bearDeathCode.GDMenuObjects2= [];
gdjs.bearDeathCode.GDMenuObjects3= [];


gdjs.bearDeathCode.asyncCallback22579644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bearDeathCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PurpleButtonWithShadow2"), gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects3);

{for(var i = 0, len = gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects3.length ;i < len;++i) {
    gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects3[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects3[i].getBehavior("Opacity").getOpacity()), 255, 0.05));
}
}gdjs.bearDeathCode.localVariables.length = 0;
}
gdjs.bearDeathCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.bearDeathCode.localVariables);
/* Don't save PurpleButtonWithShadow2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bearDeathCode.asyncCallback22579644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.bearDeathCode.asyncCallback22577580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bearDeathCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PurpleButtonWithShadow"), gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects2);

{for(var i = 0, len = gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects2.length ;i < len;++i) {
    gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects2[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects2[i].getBehavior("Opacity").getOpacity()), 255, 0.03));
}
}
{ //Subevents
gdjs.bearDeathCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bearDeathCode.localVariables.length = 0;
}
gdjs.bearDeathCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bearDeathCode.localVariables);
for (const obj of gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1) asyncObjectsList.addObject("PurpleButtonWithShadow", obj);
for (const obj of gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1) asyncObjectsList.addObject("PurpleButtonWithShadow2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bearDeathCode.asyncCallback22577580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.bearDeathCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.bearDeathCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.bearDeathCode.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow2"), gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1);
{for(var i = 0, len = gdjs.bearDeathCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDNewVideoObjects1[i].play();
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDNewVideoObjects1[i].setVolume(0);
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDNewTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "sounds\\bear attack.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.bearDeathCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bearDeathCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.bearDeathCode.GDNewVideoObjects1[i].getCurrentTime() >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.bearDeathCode.GDNewVideoObjects1[k] = gdjs.bearDeathCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.bearDeathCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.bearDeathCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow2"), gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1);
{for(var i = 0, len = gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDNewTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.bearDeathCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.bearDeathCode.GDNewTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.bearDeathCode.GDNewTextObjects1[i].getBehavior("Opacity").getOpacity()), 255, 0.1));
}
}
{ //Subevents
gdjs.bearDeathCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow2"), gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1.length;i<l;++i) {
    if ( gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1[k] = gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1[i];
        ++k;
    }
}
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.bearDeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bearDeathCode.GDNewVideoObjects1.length = 0;
gdjs.bearDeathCode.GDNewVideoObjects2.length = 0;
gdjs.bearDeathCode.GDNewVideoObjects3.length = 0;
gdjs.bearDeathCode.GDNewTextObjects1.length = 0;
gdjs.bearDeathCode.GDNewTextObjects2.length = 0;
gdjs.bearDeathCode.GDNewTextObjects3.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects3.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects2.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects3.length = 0;
gdjs.bearDeathCode.GDfadeScreenObjects1.length = 0;
gdjs.bearDeathCode.GDfadeScreenObjects2.length = 0;
gdjs.bearDeathCode.GDfadeScreenObjects3.length = 0;
gdjs.bearDeathCode.GDMenuObjects1.length = 0;
gdjs.bearDeathCode.GDMenuObjects2.length = 0;
gdjs.bearDeathCode.GDMenuObjects3.length = 0;

gdjs.bearDeathCode.eventsList2(runtimeScene);
gdjs.bearDeathCode.GDNewVideoObjects1.length = 0;
gdjs.bearDeathCode.GDNewVideoObjects2.length = 0;
gdjs.bearDeathCode.GDNewVideoObjects3.length = 0;
gdjs.bearDeathCode.GDNewTextObjects1.length = 0;
gdjs.bearDeathCode.GDNewTextObjects2.length = 0;
gdjs.bearDeathCode.GDNewTextObjects3.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadowObjects3.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects1.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects2.length = 0;
gdjs.bearDeathCode.GDPurpleButtonWithShadow2Objects3.length = 0;
gdjs.bearDeathCode.GDfadeScreenObjects1.length = 0;
gdjs.bearDeathCode.GDfadeScreenObjects2.length = 0;
gdjs.bearDeathCode.GDfadeScreenObjects3.length = 0;
gdjs.bearDeathCode.GDMenuObjects1.length = 0;
gdjs.bearDeathCode.GDMenuObjects2.length = 0;
gdjs.bearDeathCode.GDMenuObjects3.length = 0;


return;

}

gdjs['bearDeathCode'] = gdjs.bearDeathCode;
