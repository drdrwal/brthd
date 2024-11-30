
if (typeof gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV = {};


gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV.userFunc0x195ff88 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const CameraId = eventsFunctionContext.getArgument("CameraId");
const Id = eventsFunctionContext.getArgument("Id");
eventsFunctionContext.returnValue = false;
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
const Camera = gdjs.__WithThreeJS.get("GetCamera")(CameraId);
const Frustum = new THREE.Frustum();
const CloneCamera = Camera.clone();
CloneCamera.rotateZ(gdjs.toRad(180));
Frustum.setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(CloneCamera.projectionMatrix, CloneCamera.matrixWorldInverse));
const WPos = new THREE.Vector3();
Obj.getWorldPosition(WPos);
eventsFunctionContext.returnValue = Frustum.containsPoint(WPos);


};
gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV.userFunc0x195ff88(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV.func = function(runtimeScene, CameraId, Id, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
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
if (argName === "CameraId") return CameraId;
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WithThreeJS__Check3DObjectWithinFOV.registeredGdjsCallbacks = [];