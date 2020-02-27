---
id: spoke-optimization
title: Optimizing Scenes
---

## Improving Performance

When building Hubs scenes, you'll most likely want them to perform well across a wide-range of devices. From high-powered wired-in VR headsets, to low-powered mobile phones; performance of a scene may vary based on the type of device and connection speed of a your visitors. 

One way to improve performance for everyone is to reduce the complexity of a scene. This could involve reducing the number of objects in a scene or optimizing the assets you are using. In the following section we will briefly cover steps you can take to optimize your assets.


### Measuring performance

To take a closer look at your scene's performance, you can open up the VR Status menu. Click on the FPS meter in the lower right hand corner on desktop (or in VR, type /vrstats into the chat box). This will show you additional information on the load time, number of triangles, and textures in your scene. 

<!-- Insert video of opening performance tools -->

### Optimizing Images & Videos

Very large, detailed images and videos can reduce performance on the web. If you are including a lot of this type of media in your scene, you can do the following to maintain good performance.

* Reduce the dimensions of large images/video
* Compress the files, use the "save for web" feature in Photoshop for images, or use an online image or video compression tool to reduce the file size
* Try converting .png images to .jpeg, as these often have smaller file sizes.
* Convert GIFs to video format, as they run more efficiently in Hubs.

### Optimizing 3D Models

Complex 3D models can cause performance challenges in your scenes. Two main factors contribute to an object's complexity, firstly, the texture assets in a model, secondly, the number of triangles in the model itself. Typically the more realistic a model appears, the more complex the model is (although this is not always the case). 

3D models found using the Sketchfab and Google Poly browser in Spoke and Hubs are already filtered based on objects' sizes/complexity. However, if you want to improve the performance of another downloadable model, you can either reduce the objects texture size, or you can reduce the number of triangles. You can use a tool like [Blender]() to do this. 

#### Reduce texture size

To reduce the image texture size of a glb model, you can either [covert to a gltf file](), so that there is a folder with all the texture files and reduce the size of the image textures using a tool like photoshop (reduce the size of the images by half, or by a quarter for example). 

We've also made a [video of other things you can do to optimize the size of your textures in Blender](https://www.youtube.com/watch?v=6uhAp1m1SXQ).

#### Reduce number of triangles

There is no golden rule of thumb for what number of triangles in a model is ideal, however, we recommend using models with only tens of thousands, rather than hundreds of thousands of triangles. Many complex 3D models can have their triangle count reduced without greatly impacting the way that the model looks. You can do this using the Mesh Decimation tool in Blender. For instructions, check out [this video](https://www.youtube.com/watch?v=IIQNj-6_tQE_)

## Oculus Quest & Mobile Notes

Note that some scenes might look different 



<!-- 
## Developing for Mobile Devices & Quest


### AO


gifs can be hard on your scene -->
