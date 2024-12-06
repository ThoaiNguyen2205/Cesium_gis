Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMTBjMzY3Mi0zZGYzLTRiZjAtOGYxYS1kNDAzNTg5MGEzNTEiLCJpZCI6MjM1NDA1LCJpYXQiOjE3MjM5Nzc2OTV9.MyuJ80_a8hm5919QUzpeJHUGZQtrhCR_WdoXQK_31xY";

const viewer = new Cesium.Viewer("cesiumContainer", {
  //sceneMode: Cesium.SceneMode.COLUMBUS_VIEW,
  scene3DOnly: false,
  useBrowserRecommendedResolution: true,
  skyAtmosphere: undefined,
  skyBox: undefined,
  shadows: false,
  orderIndependentTranslucency: false, // Điều Chỉnh Chế Độ Render
  resolutionScale: 0.1, // Giảm độ phân giải xuống 50%
});

const tileset = viewer.scene.primitives.add(
  await Cesium.Cesium3DTileset.fromUrl(`./qh/tileset.json`, {
    debugShowBoundingVolume: false,
    skipLevelOfDetail: true,
    baseScreenSpaceError: 1024,
    skipScreenSpaceErrorFactor: 16,
    skipLevels: 0,
    immediatelyLoadDesiredLevelOfDetail: false,
    loadSiblings: false,
    cullWithChildrenBounds: false,
    maximumScreenSpaceError: 2,
    debugShowGeometricError: false,
  })
);
const tileset1 = viewer.scene.primitives.add(
  await Cesium.Cesium3DTileset.fromUrl(
    `https://hcm.s3storage.vn/gis/TPHCM-MocBai/HCMMB_Km1Km23/HCMMB_Km1Km23_CotDienV2/Tileset.json`,
    {
      debugShowBoundingVolume: false,
      skipLevelOfDetail: true,
      baseScreenSpaceError: 1024,
      skipScreenSpaceErrorFactor: 16,
      skipLevels: 0,
      immediatelyLoadDesiredLevelOfDetail: false,
      loadSiblings: false,
      cullWithChildrenBounds: false,
      maximumScreenSpaceError: 1,
      debugShowGeometricError: false,
    }
  )
);
const tileset2 = viewer.scene.primitives.add(
  await Cesium.Cesium3DTileset.fromUrl(
    `https://hcm.s3storage.vn/gis/TPHCM-MocBai/HCMMB_KM0KM23v1/Tileset.json`,
    {
      debugShowBoundingVolume: false,
      skipLevelOfDetail: true,
      baseScreenSpaceError: 1024,
      skipScreenSpaceErrorFactor: 16,
      skipLevels: 0,
      immediatelyLoadDesiredLevelOfDetail: false,
      loadSiblings: false,
      cullWithChildrenBounds: false,
      maximumScreenSpaceError: 1,
      debugShowGeometricError: false,
    }
  )
);

const offset = new Cesium.HeadingPitchRange(
  Cesium.Math.toRadians(90),
  Cesium.Math.toRadians(-90),
  50.0
);
// tileset.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
//   Cesium.Cartesian3.fromDegrees(-75.152325, 39.94704, 0.0)
// );
viewer.zoomTo(tileset, offset);
// tileset.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
//   Cesium.Cartesian3.fromDegrees(106.65141645807378, 10.716340185419407, 0)
// );
