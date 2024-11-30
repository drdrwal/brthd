
if (typeof gdjs.evtsExt__PushableAndPullableBox__Pushing !== "undefined") {
  gdjs.evtsExt__PushableAndPullableBox__Pushing.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PushableAndPullableBox__Pushing = {};
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final = [];

gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final = [];

gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 = 0;

gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4 = 0;

gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachObjects3 = [];

gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachObjects4 = [];

gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3 = null;

gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary4 = null;

gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTotalCount3 = 0;

gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTotalCount4 = 0;

gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects1= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects1= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects1= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects2= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects4= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3= [];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects4= [];


gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2 */

for (gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 = 0;gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 < gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length;++gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3) {
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3 = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2[gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21769252);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).setMaxSpeed(eventsFunctionContext.getArgument("Weight"));
}
}}
}

}


};gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects4Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList2 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3);

for (gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4 = 0;gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4 < gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length;++gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4);
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary4 = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("RightKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects4Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getX() < (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getAABBCenterY() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getAABBCenterY() <= (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[0].getAABBBottom()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).simulateRightKey();
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).getMaxSpeed()));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), true);
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, eventsFunctionContext.getArgument("RightKey"));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), false);
}
}}

}


};gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects4Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4});
gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList4 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3);

for (gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4 = 0;gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4 < gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length;++gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4);
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary4 = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex4];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("LeftKey"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects4Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getX() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getAABBCenterY() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getAABBCenterY() <= (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[0].getAABBBottom()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).simulateLeftKey();
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).getMaxSpeed()));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), true);
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, eventsFunctionContext.getArgument("LeftKey"));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), false);
}
}}

}


};gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects2Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects2Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects2Objects = Hashtable.newFrom({"Box": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects2Objects = Hashtable.newFrom({"Floor": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects3Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects3Objects = Hashtable.newFrom({"Floor": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList6 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects2Objects = Hashtable.newFrom({"Floor": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects3Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects3Objects = Hashtable.newFrom({"Floor": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects3Objects = Hashtable.newFrom({"Floor": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList7 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects3Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects3Objects = Hashtable.newFrom({"Floor": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3});
gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList8 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects1Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects1});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects1Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1});
gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects1Objects = Hashtable.newFrom({"MultiBoxes": gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1});
gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Floor"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects) > 1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2 */
{}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2);

for (gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 = 0;gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 < gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length;++gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("Floor"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3);
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3 = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getAABBBottom() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter2")).changePlatformType("Jumpthru");
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), false);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Floor"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects2Objects, true, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter2")).changePlatformType("Platform");
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2);

for (gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 = 0;gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 < gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length;++gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("Floor"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3);
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3 = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects3Objects) > 1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter2")).changePlatformType("Platform");
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), true);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2);

for (gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 = 0;gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3 < gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length;++gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("Floor"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3);
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length = 0;


gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3 = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachIndex3];
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getAABBTop() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getAABBBottom() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter2")).changePlatformType("Platform");
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), true);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter2")).changePlatformType("Jumpthru");
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Floor"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MultiBoxes"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects1Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDFloorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects1Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDMultiBoxesObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter2")).changePlatformType("Jumpthru");
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1[i].getVariables().get("__PushableAndPullableBox").getChild("Stone"), false);
}
}}

}


};gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformBehavior")).changePlatformType("Jumpthru");
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].returnVariable(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed")).setNumber((gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).getMaxSpeed()));
}
}
{ //Subevents
gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList5(runtimeScene, eventsFunctionContext);
}


{

gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length = 0;

gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects, 10, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects, true, runtimeScene, false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.indexOf(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[j]) === -1 )
            gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.indexOf(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[j]) === -1 )
            gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i].getX() < (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[0].getCenterXInScene()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i].isFlippedX() ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i].getAABBBottom() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[0].getAABBTop()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = k;
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.indexOf(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[j]) === -1 )
            gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.indexOf(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[j]) === -1 )
            gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i].getX() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[0].getCenterXInScene()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i].isFlippedX()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i].getAABBBottom() > (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[0].getAABBTop()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = k;
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.indexOf(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[j]) === -1 )
            gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.indexOf(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[j]) === -1 )
            gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).isJumping() ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects, 10, true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects3Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects3Objects, true, runtimeScene, false);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.indexOf(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[j]) === -1 )
            gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.indexOf(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[j]) === -1 )
            gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final.push(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2_1final, gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2);
gdjs.copyArray(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2_1final, gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDPlayerObjects2Objects, gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getAABBBottom() == (( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects2Objects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].setVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pushing"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariableBoolean(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("Pulling"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForPlayer")).setMaxSpeed((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].getVariables().get("__PushableAndPullableBox").getChild("PlayerOriginalSpeed"))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Box"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacterBehaviorForBox")).isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2[k] = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2[i].separateFromObjectsList(gdjs.evtsExt__PushableAndPullableBox__Pushing.mapOfGDgdjs_9546evtsExt_9595_9595PushableAndPullableBox_9595_9595Pushing_9546GDBoxObjects2Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Overlap") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList10(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PushableAndPullableBox__Pushing.func = function(runtimeScene, Player, PlatformerCharacterBehaviorForPlayer, Box, PlatformerCharacterBehaviorForBox, PlatformBehavior, Weight, RightKey, LeftKey, Overlap, Floor, MultiBoxes, PlatformerCharacterBehaviorForMultiBox, Parameter2, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "Box": Box
, "Floor": Floor
, "MultiBoxes": MultiBoxes
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "Box": gdjs.objectsListsToArray(Box)
, "Floor": gdjs.objectsListsToArray(Floor)
, "MultiBoxes": gdjs.objectsListsToArray(MultiBoxes)
},
  _behaviorNamesMap: {
"PlatformerCharacterBehaviorForPlayer": PlatformerCharacterBehaviorForPlayer
, "PlatformerCharacterBehaviorForBox": PlatformerCharacterBehaviorForBox
, "PlatformBehavior": PlatformBehavior
, "PlatformerCharacterBehaviorForMultiBox": PlatformerCharacterBehaviorForMultiBox
, "Parameter2": Parameter2
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
if (argName === "Weight") return Weight;
if (argName === "RightKey") return RightKey;
if (argName === "LeftKey") return LeftKey;
if (argName === "Overlap") return Overlap;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects4.length = 0;

gdjs.evtsExt__PushableAndPullableBox__Pushing.eventsList11(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDPlayerObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDBoxObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDFloorObjects4.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects1.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects2.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects3.length = 0;
gdjs.evtsExt__PushableAndPullableBox__Pushing.GDMultiBoxesObjects4.length = 0;


return;
}

gdjs.evtsExt__PushableAndPullableBox__Pushing.registeredGdjsCallbacks = [];