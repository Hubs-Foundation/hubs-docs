---
id: spoke-user-interface
title: User Interface
---

![Hubs Image](img/spoke-user-interface.jpeg)

## Toolbar

![Toolbar](img/spoke-toolbar.jpeg)

### 1. Dropdown Menu

In the dropdown menu you will find options to save, save as, export your file, as well as find help on how to use Spoke. 

### 2. Transformation Tools

__Translate [T]:__ Reveals the translation gizmo, drag the arrows to move object along the X, Y, or Z axis. you can also move objects around using the grab tool. While objects are selected press G to grab the selection move your mouse and click to place the object in the scene. PRess Esc or G again to cancel the current grab operation. 

__Rotate [R]:__ Reveals the rotation gizmo, drag the rings of the gizmo to rotate the object along the X, Y, or Z axis.

__Scale [Y]:__ Reveals the scale gizmo, drag the center cube of the gizmo to scale the object up or down.

### 3. Grid Tools

__Toggle Transform Space [Z]:__ - regarding the transform space-- It's changing the transform gizmo to be oriented to the World XYZ vs. the Object's XYZ. You won't really see a difference until you rotate the object.
like, rotate a car 45 degrees. Then, to go 'forward', you'd want to switch to the object's local axis

__Transform Pivot [X]:__ Sometimes placing an object can be tough if the model's pivot point is set incorrectly. You can change how the pivot is caluclated using this dropdown menu. Can be set to center, bottom, or selection. 

__Toggle Snap mode [C]:__  Sometimes you may want to move and object with a prevision position or rotation. To do this toggle the snapping mode by clicking on the magnet icon. You can set the translation and rotation snap settings by using the dropdown menus. 

__Snap Mode Controls:__ determines how precisely your transformation tools are applied

__Toggle Grid Visibility:__ Shows/hides the grid on 3D grid. In placement mode, objects canbe placed on top of other objects or the grid. When building verticailly it can be useful to change the grid height 

- Press `=` to increase grid height 
- Press `-` to decrease grid height

### 4. Publish To Hubs

Click this button to open the publish dialog where you can edit your scene's information before publishing it to Hubs.

## Viewport Panel
![Viewport Panel](img/spoke-viewport-panel.jpeg)

The viewport shows a preview of your scene where you can select and move objects.
  
  > Note that whatever the viewport is looking at when you publish the scene to hubs will be the scene's thumbnail image.

### Object Selection
You can select objects by clicking on them (hold shift to select multiple objects). 

### Camera Movement
Left click and drag to orbit around your scene. Hold the right mouse button to enter fly mode where you can use your mouse to look around the scene and the WASD keys to move the camera. Press the `F` key to focus the selected objects.

### Transform Gizmo
When you have one or more objects selected, the transform gizmo will appear.

## Hierarchy Panel
![Hierarchy Panel](img/spoke-hierarchy-panel.jpeg)

Objects you add to the scene show up in the hierarchy panel. Double click the object focus it in the viewport. You can drag objects inside the hierarchy panel to reorder or reparent them. You can also drag drop items from the assets panel and files from your computer into the hierarchy panel to add them to your scene.

## Properties Panel
![Properties Panel](img/spoke-properties-panel.jpeg)

Additional object properties can be set in the properties panel. This includes things like shadows, light color, and more.

Objects are added to Spoke and can be customized by changing their properties. Different types of objects have different properties available to them (for example, a light will have an "intensity" property, but a 3D model won’t). Most objects will have transform properties, which represent the physical position in the space.
## Assets Panel
![Assets Panel](img/spoke-assets-panel.jpeg)

You can find content to add to your scene in the assets panel. You can click on assets to add them to the scene. Assets can also be dragged from the assets panel and dropped onto the viewport, hierarchy panel, or properties panel. 

### Asset Sources

On the left side of the assets panel are a list of sources:

#### Elements
Elements are the basic building blocks in Spoke. You'll find lights, media, spawn points, and every other type of object here.

#### My Assets
Upload and search your own 3D models, images, videos, and audio.

#### Architecture Kit
The Architecture Kit contains pieces that can be put together to construct a wide variety of structures. This kit contains floors, walls, stairs, and more.

#### Rock Kit
The Rock Kit contains a collection of realistic rock models that can be used to add detail to terrain, construct platforms, or anything else you might need a rock for.

#### Sketchfab
Sketchfab is an online marketplace for 3D models. It contains a wide variety of high quality models to help you fill out your scene.

#### Google Poly
Google Poly is another source for 3D models. Most models are in a flat low poly style.

#### Bing Images
Search Bing for images from around the web.

#### Bing Videos
Search Bing for videos from around the web.

#### Twitch
Find live streams of games and more on Twitch.

#### Tenor Gifs
Find animated gifs to add to your scene on Tenor.

## Experimental Features

We're continuously working on new features for Spoke. To try them out, you can enable experimental features. Note that these features are still in testing stages, and may not continue to be supported.

![Experimental Features](img/spoke-experimental-features.jpeg)
