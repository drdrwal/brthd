
gdjs.evtsExt__WithThreeJS__BoardProjection = gdjs.evtsExt__WithThreeJS__BoardProjection || {};

/**
 * Behavior generated from 3D Board Projection
 */
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection = class BoardProjection extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Id = "";
    this._behaviorData.FirstFrame = true;
    this._behaviorData.CurrentTextureId = "";
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
    this._behaviorData.AlphaTest = behaviorData.AlphaTest !== undefined ? behaviorData.AlphaTest : Number("0") || 0;
    this._behaviorData.AntiAliasing = behaviorData.AntiAliasing !== undefined ? behaviorData.AntiAliasing : true;
    this._behaviorData.AngleAxis = behaviorData.AngleAxis !== undefined ? behaviorData.AngleAxis : "Z Axis";
    this._behaviorData.Orientation = behaviorData.Orientation !== undefined ? behaviorData.Orientation : "Vertical";
    this._behaviorData.Depth = behaviorData.Depth !== undefined ? behaviorData.Depth : Number("0") || 0;
    this._behaviorData.CastShadow = behaviorData.CastShadow !== undefined ? behaviorData.CastShadow : false;
    this._behaviorData.ReceiveShadow = behaviorData.ReceiveShadow !== undefined ? behaviorData.ReceiveShadow : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
    if (oldBehaviorData.CurrentTextureId !== newBehaviorData.CurrentTextureId)
      this._behaviorData.CurrentTextureId = newBehaviorData.CurrentTextureId;
    if (oldBehaviorData.Hide !== newBehaviorData.Hide)
      this._behaviorData.Hide = newBehaviorData.Hide;
    if (oldBehaviorData.AlphaTest !== newBehaviorData.AlphaTest)
      this._behaviorData.AlphaTest = newBehaviorData.AlphaTest;
    if (oldBehaviorData.AntiAliasing !== newBehaviorData.AntiAliasing)
      this._behaviorData.AntiAliasing = newBehaviorData.AntiAliasing;
    if (oldBehaviorData.AngleAxis !== newBehaviorData.AngleAxis)
      this._behaviorData.AngleAxis = newBehaviorData.AngleAxis;
    if (oldBehaviorData.Orientation !== newBehaviorData.Orientation)
      this._behaviorData.Orientation = newBehaviorData.Orientation;
    if (oldBehaviorData.Depth !== newBehaviorData.Depth)
      this._behaviorData.Depth = newBehaviorData.Depth;
    if (oldBehaviorData.CastShadow !== newBehaviorData.CastShadow)
      this._behaviorData.CastShadow = newBehaviorData.CastShadow;
    if (oldBehaviorData.ReceiveShadow !== newBehaviorData.ReceiveShadow)
      this._behaviorData.ReceiveShadow = newBehaviorData.ReceiveShadow;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Id: this._behaviorData.Id,
    FirstFrame: this._behaviorData.FirstFrame,
    CurrentTextureId: this._behaviorData.CurrentTextureId,
    Hide: this._behaviorData.Hide,
    AlphaTest: this._behaviorData.AlphaTest,
    AntiAliasing: this._behaviorData.AntiAliasing,
    AngleAxis: this._behaviorData.AngleAxis,
    Orientation: this._behaviorData.Orientation,
    Depth: this._behaviorData.Depth,
    CastShadow: this._behaviorData.CastShadow,
    ReceiveShadow: this._behaviorData.ReceiveShadow,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Id !== undefined)
      this._behaviorData.Id = networkSyncData.props.Id;
    if (networkSyncData.props.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = networkSyncData.props.FirstFrame;
    if (networkSyncData.props.CurrentTextureId !== undefined)
      this._behaviorData.CurrentTextureId = networkSyncData.props.CurrentTextureId;
    if (networkSyncData.props.Hide !== undefined)
      this._behaviorData.Hide = networkSyncData.props.Hide;
    if (networkSyncData.props.AlphaTest !== undefined)
      this._behaviorData.AlphaTest = networkSyncData.props.AlphaTest;
    if (networkSyncData.props.AntiAliasing !== undefined)
      this._behaviorData.AntiAliasing = networkSyncData.props.AntiAliasing;
    if (networkSyncData.props.AngleAxis !== undefined)
      this._behaviorData.AngleAxis = networkSyncData.props.AngleAxis;
    if (networkSyncData.props.Orientation !== undefined)
      this._behaviorData.Orientation = networkSyncData.props.Orientation;
    if (networkSyncData.props.Depth !== undefined)
      this._behaviorData.Depth = networkSyncData.props.Depth;
    if (networkSyncData.props.CastShadow !== undefined)
      this._behaviorData.CastShadow = networkSyncData.props.CastShadow;
    if (networkSyncData.props.ReceiveShadow !== undefined)
      this._behaviorData.ReceiveShadow = networkSyncData.props.ReceiveShadow;
  }

  // Properties:
  
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : "";
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getCurrentTextureId() {
    return this._behaviorData.CurrentTextureId !== undefined ? this._behaviorData.CurrentTextureId : "";
  }
  _setCurrentTextureId(newValue) {
    this._behaviorData.CurrentTextureId = newValue;
  }
  _getHide() {
    return this._behaviorData.Hide !== undefined ? this._behaviorData.Hide : true;
  }
  _setHide(newValue) {
    this._behaviorData.Hide = newValue;
  }
  _toggleHide() {
    this._setHide(!this._getHide());
  }
  _getAlphaTest() {
    return this._behaviorData.AlphaTest !== undefined ? this._behaviorData.AlphaTest : Number("0") || 0;
  }
  _setAlphaTest(newValue) {
    this._behaviorData.AlphaTest = newValue;
  }
  _getAntiAliasing() {
    return this._behaviorData.AntiAliasing !== undefined ? this._behaviorData.AntiAliasing : true;
  }
  _setAntiAliasing(newValue) {
    this._behaviorData.AntiAliasing = newValue;
  }
  _toggleAntiAliasing() {
    this._setAntiAliasing(!this._getAntiAliasing());
  }
  _getAngleAxis() {
    return this._behaviorData.AngleAxis !== undefined ? this._behaviorData.AngleAxis : "Z Axis";
  }
  _setAngleAxis(newValue) {
    this._behaviorData.AngleAxis = newValue;
  }
  _getOrientation() {
    return this._behaviorData.Orientation !== undefined ? this._behaviorData.Orientation : "Vertical";
  }
  _setOrientation(newValue) {
    this._behaviorData.Orientation = newValue;
  }
  _getDepth() {
    return this._behaviorData.Depth !== undefined ? this._behaviorData.Depth : Number("0") || 0;
  }
  _setDepth(newValue) {
    this._behaviorData.Depth = newValue;
  }
  _getCastShadow() {
    return this._behaviorData.CastShadow !== undefined ? this._behaviorData.CastShadow : false;
  }
  _setCastShadow(newValue) {
    this._behaviorData.CastShadow = newValue;
  }
  _toggleCastShadow() {
    this._setCastShadow(!this._getCastShadow());
  }
  _getReceiveShadow() {
    return this._behaviorData.ReceiveShadow !== undefined ? this._behaviorData.ReceiveShadow : false;
  }
  _setReceiveShadow(newValue) {
    this._behaviorData.ReceiveShadow = newValue;
  }
  _toggleReceiveShadow() {
    this._setReceiveShadow(!this._getReceiveShadow());
  }
}

/**
 * Shared data generated from 3D Board Projection
 */
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.SharedData = class BoardProjectionSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_BoardProjectionSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_BoardProjectionSharedData = new gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_BoardProjectionSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.userFunc0xe833c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    gdjs.__WithThreeJS.set("Textures", new Map());
}
const Scene = gdjs.__WithThreeJS.get("Scene");
let Textures = gdjs.__WithThreeJS.get("Textures");
//
const Behavior = objects[0].getBehavior("BoardProjection");
const Id = objects[0].name + objects[0].id;
const ProjectionScale = gdjs.__WithThreeJS.get("ProjectionScale");
// const ViewMode = gdjs.__WithThreeJS.get("ViewMode");
const AlphaTest = Behavior.AlphaTest();
const Transparent = AlphaTest !== 0;
const AntiAliasing = Behavior.AntiAliasing();
const Depth = Behavior.Depth();
const CastShadow = Behavior.CastShadow();
const ReceiveShadow = Behavior.ReceiveShadow();
//
//スプライトのすべてのアニメーション画像を取得
objects[0]._updateIfNotVisible = true;// 非表示でもアニメーション更新を強制
let AllAnimationSources = [];
const Animations = objects[0]._animations ? objects[0]._animations : objects[0]._animator._animations;
for(const V of Animations) {
    for(const VV of V.directions[0].frames) {
        AllAnimationSources.push(VV.texture.baseTexture.resource);
    }
}
//その画像がTexturesに登録されているか確認。未登録の場合は作成。(SpriteProjectionと共通の命名規則)
for(const V of AllAnimationSources) {
    const TexId = "_" + V.url;
    if (!Textures.has(TexId)) {
        const T = new THREE.Texture();
        T.image = V.source;
        T.wrapS = THREE.MirroredRepeatWrapping;
        T.wrapT = THREE.MirroredRepeatWrapping;
        if (!AntiAliasing) {
            T.magFilter = THREE.NearestFilter;// THREE.LinearFilter
            T.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
        }
        T.colorSpace = THREE.SRGBColorSpace;
        T.needsUpdate = true;//必須
        Textures.set(TexId, T);
        //FlipX
        const T_FlipX = T.clone();
        T_FlipX.offset.x = 1;
        Textures.set(TexId + "_FlipX", T_FlipX);
        //FlipY
        const T_FlipY = T.clone();
        T_FlipY.offset.y = 1;
        Textures.set(TexId + "_FlipY", T_FlipY);
        //FlipXY
        const T_FlipXY = T.clone();
        T_FlipXY.offset.x = 1;
        T_FlipXY.offset.y = 1;
        Textures.set(TexId + "_FlipX_FlipY", T_FlipXY);
    }
}
//
const TextureId = "_" + objects[0].getRendererObject().texture.baseTexture.resource.url;
Behavior.SetCurrentTextureId(TextureId);
const Texture = Textures.get(TextureId);
const TextureWidth = Texture.image.width;
const TextureHeight = Texture.image.height;
//const Material = new THREE.MeshBasicMaterial({map:Texture, side:THREE.DoubleSide, transparent:Transparent, alphaTest:AlphaTest});// blendingとopacityは2D依存
const Material = new THREE.MeshLambertMaterial({map:Texture, side:THREE.DoubleSide, transparent:Transparent, alphaTest:AlphaTest});// blendingとopacityは2D依存
const Geometry = new THREE.PlaneGeometry(TextureWidth * ProjectionScale, TextureHeight * ProjectionScale, 1, 1);
Geometry.computeBoundingBox();
Geometry.boundingBox.expandByVector(new THREE.Vector3(0, 0, (Depth * ProjectionScale) / 2));
const Obj = new THREE.Mesh(Geometry, Material);
Obj.name = Id;
Obj.castShadow = CastShadow;
Obj.receiveShadow = ReceiveShadow;
Obj.userData.Use3DProjectionBehavior = true;
Behavior.SetId(Id);
Scene.add(Obj);


};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.userFunc0xe833c8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.userFunc0xefbb38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
let Textures = gdjs.__WithThreeJS.get("Textures");
//
const Behavior = objects[0].getBehavior("BoardProjection");
const Id = Behavior.Id();
const X = objects[0].getCenterXInScene();
const Y = objects[0].getCenterYInScene();
const Z = objects[0].zOrder;
const ProjectionScale = gdjs.__WithThreeJS.get("ProjectionScale");
const ViewMode = gdjs.__WithThreeJS.get("ViewMode");
const AngleAxis = Behavior.AngleAxis();
const Orientation = Behavior.Orientation();
//
const Obj = gdjs.__WithThreeJS.get("SearchObject")(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
objects[0]._updateAnimationFrame();//v5.3.198 からのアニメ更新が不規則になる問題への対応
let TextureId = "_" + objects[0].getRendererObject().texture.baseTexture.resource.url;
// Flip
if (objects[0].isFlippedX()) {
    TextureId += "_FlipX";
}
if (objects[0].isFlippedY()) {
    TextureId += "_FlipY";
}
// Animation
const Texture = Textures.get(TextureId);
if (TextureId !== Behavior.CurrentTextureId()) {
    Obj.material.map = Texture;
    Behavior.SetCurrentTextureId(TextureId);
}
// Blend
Obj.material.blending = gdjs.__WithThreeJS.get("Blend2Dto3D")[objects[0].getBlendMode()];
// Opacity
const Opacity = objects[0].getOpacity() / 255;
if (!Obj.material.transparent) {
    if (Obj.material.alphaTest !== 0 || Opacity !== 1) {
        Obj.material.transparent = true;
        Obj.material.needsUpdate = true;
    }
}
Obj.material.opacity = Opacity;
// Scale
Obj.scale.set(objects[0].getScaleX(), objects[0].getScaleY(), 1);
// Rotate
const BaseXAngle = (Orientation == "Horizontal") ? -90 : 0;
const Angle = objects[0].angle * -1;
if (AngleAxis == "X Axis") {
    Obj.rotation.set(gdjs.toRad(BaseXAngle + Angle), gdjs.toRad(0), gdjs.toRad(0));
} else if (AngleAxis == "Y Axis") {
    Obj.rotation.set(gdjs.toRad(BaseXAngle), gdjs.toRad(Angle), gdjs.toRad(0));
} else {
    Obj.rotation.set(gdjs.toRad(BaseXAngle), gdjs.toRad(0), gdjs.toRad(Angle));
}
// Move
if (ViewMode == "Top Down") {
    Obj.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
} else {
    // Side
    Obj.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
}


};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFirstFrame(false);
}
}
{ //Subevents
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.userFunc0xefbb38(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.userFunc0xfc2f48 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// 生成と同時に削除された場合、3D化されていないので回避
// FirstFrame == true のほうが理想的だが取得がめんどくさいので Id を利用。
const Behavior = objects[0].getBehavior("BoardProjection");
const Id = Behavior.Id();
if (Id === "") {
    return;
}
//
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Sprite = gdjs.__WithThreeJS.get("SearchObject")(Id);
//
gdjs.__WithThreeJS.get("DisposeChildren")(Sprite);
Sprite.removeFromParent();
};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.userFunc0xfc2f48(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.Id = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.IdContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAlphaTest()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTest = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AlphaTestContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleAxis()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxis = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AngleAxisContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOrientation()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.Orientation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.OrientationContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.AntiAliasingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentTextureId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CurrentTextureIdContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDepth()); }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.Depth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.DepthContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCastShadow() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCastShadow()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadow = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.CastShadowContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReceiveShadow() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReceiveShadow()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadow = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.ReceiveShadowContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetId = function(Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetIdContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentTextureId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureId = function(Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.SetCurrentTextureIdContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::BoardProjection", gdjs.evtsExt__WithThreeJS__BoardProjection.BoardProjection);
