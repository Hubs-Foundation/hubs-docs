---
id: creators-custom-avatar-models
title: Creating Custom Avatars
---



We offer the following resources if you'd like to modify our Robot avatar:

* [Blender Source Files](Blender/AvatarBot) are available of our Robot avatar. **For specific information about how to use these .blend files, be sure to check out the readme within the [Blender/AvatarBot](/Blender/AvatarBot) folder.**

* [Exported GLBs](Exported%20GLB%20models)/[Exported OBJ](Other%20model%20formats)  are available if you'd like to bring them into your editor of choice.

We recommend using [Blender 2.8 beta](https://builder.blender.org/download/) for custom models since we have provided example files that you may use as a guide. (Typically, skeleton setup varies between modeling appications which can make importing/exporting skeletons a bit tricky due to unexpected changes in bone rotations, but it is still possible to use something other than Blender.) Note: the .blend files were created with [Blender 2.8 beta](https://builder.blender.org/download/) due to the built-in glTF exporter. The glTF importer/exporter for Blender is currently in development. Expect some bugs and [please report them!](https://github.com/KhronosGroup/glTF-Blender-IO/issues)

Hubs avatars are meant for VR, which means that you should work in real world units. A typical avatar height is roughly 1.7 meters. Note: This is typically a 'standing height'. The lack of legs shown here is a part of that overall height.

![avatar height diagram](docs/avatarHeight.jpg)

Files with the suffix *_base* refer to the most barebones, basic robot avatar template that can be used as a reference when creating new avatar models. Typically, the Blender workflow would be to either 'Link' or 'Append' the objects from [AvatarBot_base_for_export.blend](/Blender/AvatarBot) in order to use the existing armature (skeleton) and any animations that go along with it, using them as a basis for your own model that you would attach to it.

The armature is based largely upon the same hierarchy and naming conventions of the skeleton provided by [High Fidelity](https://docs.highfidelity.com/en/rc80/create/avatars/avatar-standards.html#skeleton). This also happens to have a similar structure to VRChat in terms of bone orientations.
However, in our current implementation in Hubs, we have eliminated some of the bones within the hierarchy, namely the lower body and arm joints since we are not using any sort of inverse kinematics (IK) at the moment. This may change in future iterations.
