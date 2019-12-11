---
id: lighting-and-shadows
title: Lighting and Shadows
---

## Lights

### Types of Lights
#### Ambient Light
Illuminates all objects in your scene

#### Hemisphere Light
Illuminates your scene from directly overhead

#### Directional Light
Illuminates the entire scene, but emits along a single direction

#### Spot Light
Emits along a direction, illuminating objects within a cone

#### Point Light
Emits in all directions from a single point






## Shadow Settings

### Cast shadows
Toggle on/off whether your light will cast shadows. Note you can also set objects to receive shadows

### shadowmap resolution
if you turn that down, the resoltuion gets very blocky (and sometimes soft looking) - shadow acne? self shadowing artifact, the mesh is rendering a shadow on itself, if you turn up the resolution enough it might go away, but its going to be rendering your more pixels, could make your scene more expensive. 
shadow bias
shadow radius

### Shadow Bias 
A per pixel offset of your shadow, Use to fine tune the the position of your shadow. This can be used to help reduce Shadw acne. 

### Shadow Radius



<!-- 


### Ambient Light
Ambient light is a light that illuminates all objects in your scene. you can only have one ambient light at a time
color 
intensity

### Hemisphere Light
a light which illuminates your scene from directly overhead. max one per scene
-transform
-color
inner cone angle
outer cone angle
range

### Directional Light
A light which illuminates the entire scene, but emits along a single direction
Color 
intensity 

### Spot Light
a light which emits along a direction, illuminating objects within a cone
-color
intensity
inner cone angle
outer cone angle
range


### Point Light
A light which emits in all directions from a single point
color
intensity
range


## 

Color
    The color of the light source’s illumination.


## Shadows 
Cast shadow






### Lighting performance on mobile   


## Shadows

cash shadows
receiving shadows



shadow bias- offsetting the shadow in relaion to - its science, its mats, its a per pixel offset for the shadow and adjusting that by a small amoutn will get rid of the artefact, at the cost of making your shadows look less grounded - peter panning. want it close to 0, negatives? 







right now 3js spoke and hubs we use a type of shadowcamera map whre basically resizing the everything the shado

it treats the light as if it were a camera and it looks through the light and it looks at the scene and it thinks what am i hitting right now in the scene, so it looks for all the things in the scene that should cast and receive shadows and it resizes the fulstrum to that

so if you fly out this scene you can notice that, its a fairly large scene and its casting shadows ont hat terrain
it only has so much fo a sh

yellow shadow is for floorplan
 -->
