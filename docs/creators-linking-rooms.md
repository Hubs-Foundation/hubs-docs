---
id: creators-linking-rooms
title: Linking Hubs Rooms 
---
It is possible to link Hubs rooms together using Spoke, or from directly in Hubs. To do this, you will want to first create your rooms, then build scenes for the rooms that use the 'Link' element to reference to other rooms.  

## Create rooms

The first thing that you want to do is create your rooms. While you have the ability to create rooms directly from a scene URL, this will generate a new room each time. In order to link multiple rooms together, we recommend generating the rooms first, then updating the rooms to use a scene that contains links to the other room. 

1. Go to [https://hubs.mozilla.com/](https://hubs.mozilla.com/) and use the 'Create Room' button to create a new room. You can use the 'Favorite' button to keep the room pinned to your home page to find it easily, or copy the link somewhere.
2. Do this for each room that you want to have available

## Option 1: Linking rooms from inside Hubs
It is possible to link rooms together directly from inside of another Hubs room without having to create new scenes. To do this: 
1. Visit the room that you want to add other room links to
2. Copy the URL to another Hubs room
3. Paste the URL anywhere in the first room. This will generate a screenshot of the room, and add a 'Visit Room' link 

## Option 2: Linking rooms inside Spoke scenes
You can also link Hubs rooms together from inside of a Spoke scene. To do this:

1. Create a scene 
2. Use the Spoke 'Link' element to create a new link in your scene
3. Place the link element where you want your portal to the other room to be
4. Copy the room link that you want to link to into the link element 'URL' property
5. Publish your scene
6. In the original room, change the scene link to the one that contains your new scene that links to the other room
7. Repeat steps 1-6, publishing a second scene that links to the first room, and use that for your second room

Note that you can use the same project in Spoke as a base by using the 'Save As' feature to create a copy of your project. If you use the same project, it will update the original scene, which will result in the first room updating to link back to itself.
