---
id: lighting-and-shadows
title: Lighting and Shadows
---

## Lights

Lighting can change the mood of your scene. In addition to [Skyboxes](./spoke-skyboxes.html), lighting can come from the following sources:
 

| Light         | Effect  |
| ----------- | ----------- |
| Ambient Light    | Illuminates all objects in your scene |
| Hemisphere Light   | Illuminates your scene from directly overhead   |
| Directional Light   | Illuminates the entire scene, but emits along a single direction | 
| Spot Light  | Emits along a direction, illuminating objects within a cone | 
| Point Light     | Emits in all directions from a single point | 

### Shadow Settings

In the propertie panel for the various lights you will find shadow settings. The settings available vary depending on the type of light.


| Setting      | Effect  |
| -----------   | ----------- |
| Cast shadows  | Toggle on/off whether your light will cast shadows. Note you can also set objects to receive shadows |
| Shadowmap resolution   |  Resolution of the shadowmap, if you turn it down the resolution will be more blocky (or sometimes soft looking), if you turn it up it will increase the resolution but will make your scene more expensive to run |
| Shadow Bias  | A per pixel offset of your shadow, Use to fine tune the position of your shadow. This can be used to help reduce the appearance of shadow acne| 
| Shadow Radius  | Size of the shadow. | 

## Lighting performance on mobile   

You may notice that the lighting in your scene is different on desktop than on mobile devices. Some lighting features are disabled on mobile for performance reasons. 






