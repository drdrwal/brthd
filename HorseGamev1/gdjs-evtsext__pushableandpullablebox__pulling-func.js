
if (typeof gdjs.evtsExt__PushableAndPullableBox__Pulling !== "undefined") {
  gdjs.evtsExt__PushableAndPullableBox__Pulling.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PushableAndPullableBox__Pulling = {};
gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex3 = 0;

gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4 = 0;

gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachObjects3 = [];

gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachObjects4 = [];

gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTemporary3 = null;

gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTemporary4 = null;

gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTotalCount3 = 0;

gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTotalCount4 = 0;

gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects1= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects1= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects2= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects3= [];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects4= [];


gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2 */

for (gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex3 = 0;gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex3 < gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2.length;++gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex3) {
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTemporary3 = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2[gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex3];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.push(gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21802948);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).setMaxSpeed(eventsFunctionContext.getArgument("Weight"));
}
}}
}

}


};gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects4Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects4Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDMultiBoxesObjects4Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList2 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3);

for (gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4 = 0;gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4 < gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length;++gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects4);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4);
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTemporary4 = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3[gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.push(gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects4Objects, 1000, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getX() < (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[0].getAABBRight()) - (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getAABBLeft()) >= -(eventsFunctionContext.getArgument("Distance")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("PullKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("LeftKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getAABBCenterY() > (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getAABBCenterY() <= (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getAABBBottom()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects4Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDMultiBoxesObjects4Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
}
}
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).getMaxSpeed()));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).simulateLeftKey();
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), true);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects3Objects, 1000, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects3Objects, (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[0].getAABBCenterX()), (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[0].getAABBCenterY()), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getX() < (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("PullKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).getMaxSpeed() == eventsFunctionContext.getArgument("Weight") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[0].getAABBRight()) - (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3[0].getAABBLeft()) < -(eventsFunctionContext.getArgument("Distance")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, eventsFunctionContext.getArgument("LeftKey"));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, eventsFunctionContext.getArgument("RightKey"));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, eventsFunctionContext.getArgument("PullKey"));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), false);
}
}}

}


};gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects4Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects4Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDMultiBoxesObjects4Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList4 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3);

for (gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4 = 0;gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4 < gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length;++gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects4);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4);
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTemporary4 = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3[gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachIndex4];
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.push(gdjs.evtsExt__PushableAndPullableBox__Pulling.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getX() > (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects4Objects, 1000, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[0].getAABBLeft()) - (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getAABBRight()) <= eventsFunctionContext.getArgument("Distance"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("PullKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("RightKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getAABBCenterY() > (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getAABBCenterY() <= (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getAABBBottom()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects4Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects4Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDMultiBoxesObjects4Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = k;
}
}
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).simulateRightKey();
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).getMaxSpeed()));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), true);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects3Objects, 1000, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects3Objects, (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[0].getAABBCenterX()), (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[0].getAABBCenterY()), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getX() > (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("PullKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).getMaxSpeed() == eventsFunctionContext.getArgument("Weight") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[0].getAABBLeft()) - (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3[0].getAABBRight()) > eventsFunctionContext.getArgument("Distance"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("PullKey")));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), false);
}
}}

}


};gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects1Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects1});
gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects1Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects1});
gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].returnVariable(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed")).setNumber((gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).getMaxSpeed()));
}
}
{ //Subevents
gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList5(runtimeScene, eventsFunctionContext);
}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, eventsFunctionContext.getArgument("PullKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDPlayerObjects1Objects, gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects1Objects, 1000, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__PushableAndPullableBox__Pulling.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pulling_9546GDBoxObjects1Objects, (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[0].getAABBCenterX()), (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[0].getAABBCenterY()), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i].getAABBBottom() != (( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects1[0].getAABBBottom()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[k] = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), false);
}
}}

}


};gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList6(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PushableAndPullableBox__Pulling.func = function(runtimeScene, Player, PlatformerCharacterBehaviorForPlayer, Box, PlatformerCharacterBehaviorForBox, PlatformBehavior, PullKey, Weight, RightKey, LeftKey, Distance, MultiBoxes, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "Box": Box
, "MultiBoxes": MultiBoxes
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "Box": gdjs.objectsListsToArray(Box)
, "MultiBoxes": gdjs.objectsListsToArray(MultiBoxes)
},
  _behaviorNamesMap: {
"PlatformerCharacterBehaviorForPlayer": PlatformerCharacterBehaviorForPlayer
, "PlatformerCharacterBehaviorForBox": PlatformerCharacterBehaviorForBox
, "PlatformBehavior": PlatformBehavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PushableAndPullableBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PushableAndPullableBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PullKey") return PullKey;
if (argName === "Weight") return Weight;
if (argName === "RightKey") return RightKey;
if (argName === "LeftKey") return LeftKey;
if (argName === "Distance") return Distance;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects4.length = 0;

gdjs.evtsExt__PushableAndPullableBox__Pulling.eventsList7(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDPlayerObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDBoxObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pulling.GDMultiBoxesObjects4.length = 0;


return;
}

gdjs.evtsExt__PushableAndPullableBox__Pulling.registeredGdjsCallbacks = [];