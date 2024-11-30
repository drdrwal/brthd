gdjs.DeathCode = {};
gdjs.DeathCode.localVariables = [];
gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.DeathCode.GDfadeScreenObjects1= [];
gdjs.DeathCode.GDfadeScreenObjects2= [];
gdjs.DeathCode.GDMenuObjects1= [];
gdjs.DeathCode.GDMenuObjects2= [];


gdjs.DeathCode.asyncCallback22454748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DeathCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects2);
{for(var i = 0, len = gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects2.length ;i < len;++i) {
    gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects2[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects2[i].getBehavior("Opacity").getOpacity()), 255, 0.05));
}
}gdjs.DeathCode.localVariables.length = 0;
}
gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DeathCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.DeathCode.asyncCallback22454748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DeathCode.asyncCallback22456116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DeathCode.localVariables);
gdjs.DeathCode.localVariables.length = 0;
}
gdjs.DeathCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DeathCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.DeathCode.asyncCallback22456116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DeathCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sounds\\hit.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.DeathCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
{ //Subevents
gdjs.DeathCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.DeathCode.GDfadeScreenObjects1.length = 0;
gdjs.DeathCode.GDfadeScreenObjects2.length = 0;
gdjs.DeathCode.GDMenuObjects1.length = 0;
gdjs.DeathCode.GDMenuObjects2.length = 0;

gdjs.DeathCode.eventsList2(runtimeScene);
gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.DeathCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.DeathCode.GDfadeScreenObjects1.length = 0;
gdjs.DeathCode.GDfadeScreenObjects2.length = 0;
gdjs.DeathCode.GDMenuObjects1.length = 0;
gdjs.DeathCode.GDMenuObjects2.length = 0;


return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
