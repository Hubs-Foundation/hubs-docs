---
id: hubs-features
title: Hubs Features
---

![Hubs User Interface](img/hubs-user-interface.png)

## User Interface

1. __Invite:__ Opens a dialog box with information on sharing the room with friends. More info is provided in the [Invite Menu](./hubs-features.html#invite-menu) section at the bottom of this page.

2. __Mute:__ Toggles your microphone on/off.

3. __Share:__ Enables you to share your desktop, webcam, or phone camera with room members. The shared media will appear like a video in the room. Click this button again or use the [object menu](./hubs-features.html#object-menu) to remove the media.

4. __Place:__ Opens a search tool to find media you can bring into the room. Select from 3D models, scenes, avatars and gifs, or provide a URL or file for an image, video, model or scene. Additional objects that you can place are listed below: 

    * __Pen:__ Lets you draw in 3D space. You can change the pen's size and color (see [Hubs Controls](./hubs-controls.html)), undo strokes, and generate 3D models from your drawing (see the [drawing menu](./hubs-features.html#drawing-menu)).

    * __Camera:__ Creates a camera object that can take photos and videos of the room then add them to the room as objects. When you take a photo or video, a link also appears in the chat. Click the camera button again to remove the camera object.

5. __React:__ Opens a menu where you can select an emoji to spawn in the room.

6. __Chat:__ Enables you to communicate via text chat, create objects or enter commands. Commands include:


    /leave - Disconnect from the room.
    /grow - Increase your avatar's size.
    /shrink - Decrease your avatar's size.
    /duck - Create a duck object.
    /debug - Toggle physics debug rendering.
    /vrstats - Toggle stats in VR.
    /scene <scene url> - Change the scene (moderators only).
    /rename <new name> - Rename the room (moderators only).
    /audiomode - Toggle left-right spatialization, but keep distance-based attenuation (experimental).
    /audioNormalization <factor> - Equalize audio levels (experimental)
    /fly - Toggle fly mode.

7. __Leave:__ Leave the current room that you are in 

8. __More:__ Opens a panel to display additional commands that are available. From this menu, you can favorite a room, modify your user preferences, access help, and other settings. If you are the room owner, this menu will also include settings related to the room permissions and current scene.

9. __Objects:__ Displays a list of the media items that exist in the room. Click on the objects in the list for further options.

10. __People:__ Displays information on the people in the room and lobby. Shows the number of room members, their names, and their device type. You can also access advanced user controls from this list.

## Menus 

Room objects and avatars have their own menus. To reveal them on desktop computers, hover your cursor on the object, and press the space bar (or tab). For VR devices, see the [Controls](./hubs-controls.html) section of the docs. 
 
### Object Menu

![Hubs - Object Menu](img/hubs-object-menu.jpeg)

1. __Pin:__  Makes the object stay in the room when you leave. By default, objects disappear when their creators exit.
2. __Target:__ Opens a focused view of the object. This menu item is present for media objects.
3. __Resize:__ Resizes the object.
4. __Open link:__ Opens the URL of the object in a new browser tab.
5. __Trash:__ Removes the object from the scene.
6. __Gravity:__ Makes the object fall to the floor.
7. __Clone:__ Makes a duplicate of the object.
8. __Rotate:__ Rotates the object.
9. __Magnify:__ Displays  a view of object low in your view. This menu item (not shown) is present for media objects.
10. __Convert to drawing:__ Converts the object back to a drawing. This menu item (not shown) is present if the object originated from a drawing.


### Avatar Menu

![Hubs - Avatar Menu](img/hubs-avatar-menu.jpeg)

1. __Volume:__ Changes the volume of the user's audio. (Doesn't affect the volume for others in the room.)
2. __Hide:__ Hides a user's avatar and audio from you. This only applies to the current session; once you refresh you will see them again. Other room members can still see and hear the user.
3. __Mute:__ Mutes the user's microphone so that they are no longer heard by anyone in the room. (Moderators only.)
4. __Kick:__ Temporarily kicks a user from the room. (Moderators only.)

### Camera Menus

![Hubs - Camera Menus](img/hubs-camera-menu.jpeg)

1. __Photo:__ Takes a still image then adds it to the room as an object.
2. __Video:__ Records a video then adds it to the room as an object. Use the arrows to adjust the recording length. Note that video recordings are temporarily saved to browser storage; a recording in progress may be lost if the browser runs out  of space. If you wish to record an event we recommend using a screen recording tool such as [OBS](https://obsproject.com/).
3. __Mute Video:__ Controls whether audio is included in the video.
4. __Recenter:__ Reorients the camera to face you.
5. __Trash:__ Removes the camera from the scene.
6. __Rotate:__ Rotates the camera.
7. __Object Focus:__ Reorients the camera to face the object or user.
8. __Object Track:__ Makes the camera rotate to follow the object or user.


### Drawing Menu

![Hubs - Drawing Menu](img/hubs-drawing-menu.jpeg)

1. __Create:__ Makes the drawing into a 3D object.
2. __Undo:__ Removes the last stroke.
3. __Trash__ Removes the drawing from the scene.


## Video Controls

Hover your cursor on a video to display its video controls.

![Hubs - Video Media Controls](img/hubs-media-controls.jpeg)
1. __Screencapture:__ Takes a screenshot of the video and then adds it to the room as an object.
2. __Volume:__ Changes the volume of the audio playback for you. (Does not affect the volume for others in the room.)
3. __Play/Pause:__ Plays/pauses the video.
4. __Time Controls:__ Jumps forwards/backwards in the video.


## Emoji Spawners

A menu of emoji spawners is displayed when you display [object or avatar menus](./hubs-features.html#menus).

![Hubs - Emoji Spawners Menu](img/hubs-emoji-spawners.jpeg)

The emoji menu lets you spawn a grabbable emoji that emits particles when shaken. The emoji is deleted a few seconds after you let go of it.


## Invite Menu

The "Invite" button opens a dialog with the information you need in order to share the room with others, so they can join you in the room.

![Hubs - Invite Menu](img/hubs-invite-dialogue.PNG)

You can copy or share the hub.link URL or use the numeric code to share a link verbally. Note that numeric codes expire after 72 hours.

The `iframe` HTML code (displayed if you have room permissions) lets you embed the room in a web page.

<!-- The "notify me" checkbox (displayed if you have room permissions) enables you to sign up for notifications that alert you when another user enters the room. You can sign up for notifications on your phone or desktop. You do not need to remain in the room to receive notifications. -->
