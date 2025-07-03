---
id: creators-advanced-avatar-customization
title: Advanced Avatar Customization
description: Re-skinning an existing avatar, or creating one from scratch
---

## Advanced Re-skinning 

As described in the [creating custom avatars](intro-avatars.html) page, the most straightforward way to customize an avatar for Hubs is to upload a custom texture set. The simplest version of re-skinning the robot avatar would be to simply paint a 'baseColor' map.

For more advanced customization, you can use the following resources:

* [Photoshop PSD Templates](https://github.com/Hubs-Foundation/hubs-avatar-pipelines/tree/master/Photoshop) - Photoshop templates for a custom Hubs base color skin. You can also use Photoshop's 3D painting tools, using the [Robot OBJ/MAT file](https://github.com/j-conrad/hubs-avatar-pipelines/tree/master/Other%20model%20formats).
* [Substance Painter Project](https://github.com/Hubs-Foundation/hubs-avatar-pipelines/blob/master/Substance)- Full Substance Painter projects for advanced custom skinning. You can also download and modify any of our example texture sets.

![UV Layout example](img/UVLayout.jpg)


The UV layout for the base robot avatar is purposefully symmetrical along the X (horizontal) axis. This makes it relatively easy to paint one half of the texture(s) and flip it to the other side. Some image editing applications such as Photoshop have built-in mirroring tools that allow you to paint both halves in real time.

![Panda Bot example](img/PandaBot.jpg)


### Types of Texture Maps

Because Hubs uses glTF standards it supports many of the map types associated with physically-based materials. The default avatar uses:

* Base Color - The main design / color map for the texture
* Emissive - Which parts should glow (emit light)
* Normal - How light should reflect off the texture 
* ORM - Metallic, roughness, and occlusion

__NOTE: 'ORM' texture is composed of Ambient Occlusion, Roughness(black = glossy, white = rough), and Metallic (black = non-metal, white = fully metallic) combined in one singular image with each texture occupying the Red, Green, and Blue channels respectively.__ 

__It is highly recommended that texture resolution be kept at 1024x1024 or below.__ This is mostly due to Hubs being a web-based application where large download times for bigger files can hurt performance, especially on mobile devices. All textures MUST be powers of 2 (64, 128, 256, 512, etc.)

![Hubs Avatar Customization](img/avatar-customization.jpeg) 

When you upload textures into Hubs The preview will be updated. You do not need to include all textures - any combination of maps are supported. Each of the slots listed handle a different texture type. You can learn more about [different types of maps here](https://www.khronos.org/blog/art-pipeline-for-gltf). 


## Create Your Own Avatar

To customize your avatar's shape, you can modify our basic robot template, or upload a .glb file of your choice. If you use the robot template, your avatar will have hands and a body and a head that grows/shrinks when you speak. If you use a plain .glb file, this item is considered the head of the avatar and the whole object will grow and shrink when you speak. 

<!-- You can follow along with Jim and Dom in this recorded live stream here to walk through the whole process: https://youtu.be/qBvZhh6KVcg?t=561 -->

### Modify Base Robot Template

We offer the following resources if you'd like to modify our base Robot avatar:

* [Blender Source Files](https://github.com/Hubs-Foundation/hubs-avatar-pipelines/tree/master/Blender/AvatarBot) are available of our Robot avatar. **For specific information about how to use these .blend files, be sure to check out the readme within the [Blender/AvatarBot](https://github.com/Hubs-Foundation/hubs-avatar-pipelines/tree/master/Blender/AvatarBot) folder.**

* [Exported OBJ Files](https://github.com/Hubs-Foundation/hubs-avatar-pipelines/tree/master/Other%20model%20formats) are available if you'd like to bring them into your editor of choice.

We recommend using [Blender 2.83](https://builder.blender.org/download/) (or whatever the most recent release is) for custom models since we have provided example files that you may use as a guide. (Typically, skeleton setup varies between modeling appications which can make importing/exporting skeletons a bit tricky due to unexpected changes in bone rotations, but it is still possible to use something other than Blender.) Note: the .blend files were created with [Blender 2.8](https://builder.blender.org/download/) due to the built-in glTF exporter. The glTF importer/exporter for Blender is currently in development. Expect some bugs and [please report them!](https://github.com/KhronosGroup/glTF-Blender-IO/issues)

Hubs avatars are meant for VR, which means that you should work in real world units. A typical avatar height is roughly 1.7 meters. Note: This is typically a 'standing height'. The lack of legs shown here is a part of that overall height.

![avatar height diagram](img/avatarHeight.jpg)

Files with the suffix *_base* refer to the most barebones, basic robot avatar template that can be used as a reference when creating new avatar models. Typically, the Blender workflow would be to either 'Link' or 'Append' the objects from [AvatarBot_base_for_export.blend](https://github.com/Hubs-Foundation/hubs-avatar-pipelines/tree/master/Blender/AvatarBot) in order to use the existing armature (skeleton) and any animations that go along with it, using them as a basis for your own model that you would attach to it.

The armature is based largely upon the same hierarchy and naming conventions of the skeleton originally provided by High Fidelity. This also happens to have a similar structure to VRChat in terms of bone orientations.
However, in our current implementation in Hubs, we have eliminated some of the bones within the hierarchy, namely the lower body and arm joints since we are not using any sort of inverse kinematics (IK) at the moment. This may change in future iterations.

### Use a Regular .glb File

You can use any .glb object as an avatar. This could be something you made on your own, or a creative-commons asset from Sketchfab or Google Poly. Sometimes .glb files need a few modifications to work properly as avatars. You may wish to open the object in Blender to fix the object's scale (it should be about 1.7 meters), ensure the object is facing forward, move the object backwards a bit so it doesn't obstruct your view. You might also want to optimize the object using the tips in the [optimizing scenes page](spoke-optimization.html) 

### Upload your own model

1. Enter a Hubs room
2. Select the ‘People’ list icon in the top right corner of the screen
3. By your name, you will see a pencil icon. Click this icon to open the avatar selection screen
4. Click the ‘Browse Avatars’ button
5. From here, you can see a list of your own avatars, the first spot should say "Create Avatar"
6. In the avatar customization screen choose one of the default body shapes
7. Click 'Custom GLB' to upload your 3d model
8. Save the avatar

<!-- 
To do -
1) Reduce the size of some of the images so they aren't huge
2) add info on using a mouth instead of growing head as feedback when speaking
 -->
