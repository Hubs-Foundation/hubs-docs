---
id: hubs-user-settings
title: User Settings
---

## Changing Name and Avatar

The first time you enter a Hubs room you will choose a name and an avatar. You can change them at any time by clicking the 'People' menu in the top left corner of the screen and selecting your own name from the list.

Use one of our featured avatars or [upload your own](intro-avatars.html).

### My Avatars

For quick access to your favorite avatars, you can save them to "My Avatars" for quick access. Press the "Copy to my Avatars" icon associated with the avatar in the avatar selection screen. 

![Screenshot of avatar selection screen](img/hubs-save-avatar.jpeg)

## User Preferences

Advanced user preferences (e.g., media volume, movement controls, graphics resolution, etc), can be found in the user preferences section of the dropdown menu.

![Screenshot of avatar selection screen](img/hubs-preference-menu.PNG)

### The available preferences are as follows

**Audio:**
</br>
*Preferred mic* - I'm not exactly sure, but it likely controls either which mic is used or which mic is used by default when visiting different rooms.
</br>
*Preferred speakers* - I'm not exactly sure, but it likely controls either which speakers are used or which speakers are used by default when visiting different rooms.
</br>
*Incoming Voice Volume* - How loud other avatars/people sound to you (can be overridden on a per-avatar/person basis).
</br>
*Media Volume* - How loud in-room media (audio files/video files, etc.) sounds to you.
</br>
*SFX Volume* - How loud things like chat messages and rotation sounds are.
</br>
*Stored avatar volumes* - Shows how many people you have custom audio settings for (e.g. you've made them sound louder or softer to you), and allows you to clear all your stored avatar volumes.
</br>
*Disable Sound Effects* - I believe this disables sounds for things like chat messages and rotating your avatar with the Q & E keys.
</br>
*Disable microphone echo cancellation* - Turns off Hubs' echo cancellation (not recommended unless you have headphones, but may provide better sound quality if you do have headphones).
</br>
*Disable microphone noise suppression* - Turns off Hubs' noise suppression (not recommended unless you're in a quiet environment, but may provide better sound quality if you are).
</br>
*Disable microphone automatic gain control* - Prevents your browser from automatically adjusting the volume of your microphone (needed especially for Chrome).
</br>
*Enable Audio Clipping* - I'm not sure, but I'd guess it allows you to set a threshold to prevent noises that are too loud from being transmitted.
</br>
*Show Audio Debug Panel* - Displays a panel over your screen that allows you to modify the global audio settings for avatars and media objects, and also displays a visualization of the selected settings.
</br>
*Panning quality* - I'm not sure, but I'd guess it sets the audio quality for spatialized audio sources (e.g. any audio sources that have a falloff).
</br>
*Disable audio left/right panning* - Reduces (or possibly disables?) the spatialization of audio.
</br>
</br>
**Controls:**
</br>
*Rotation per snap (in degrees)* - Sets how many degrees you will turn when pressing the Q or E keys.
</br>
*Disable movement* - Prevents you from moving.
</br>
*Disable backwards movement* - Prevents you from moving backwards (S key).
</br>
*Disable strafing* - Prevents you from moving left or right (A or D keys).
</br>
*Movement speed modifier* - Controls how fast you move.
</br>
*Enable left on-screen joystick for moving around* - Adds a controller on the left side of your mobile device screen to allow you to move around.
</br>
*Enable right on-screen joystick for looking around* - Adds a controller on the right side of your mobile device screen to allow you to look around.
</br>
*Enable gyroscope (when supported by browser/device)* - I'm not sure, but I think this allows the position/angle of your mobile device to rotate your view.
</br>
*Invert direction of camera movement for touchscreens* - Inverts which direction the camera rotates when you drag your finger over your device screen (does this work for both axes or just vertical?).
</br>
</br>
**Misc:**
</br>
*Language* - What language to display the UI in (not everything has translations for every language).
</br>
*Theme* - What UI theme to use.
</br>
*Show Nametag* - Allows you to set under what conditions name tags are visible.
</br>
*Nametag visiblity distance* - Sets how close you have to be to avatars for their name tags to be visible.
</br>
*Preferred camera* - I'm not sure, but I think this chooses which camera to use when sharing your webcam (or the default one that is chosen when entering a room).
</br>
*Disable auto-exit when multiple hubs instances are open* - Prevents you from leaving the Hubs room when opening another Hubs room in another tab or window.
</br>
*Disable auto-exit when idle or backgrounded* - Prevents you from leaving the Hubs room if you don't interact with Hubs for some time or if you switch to a different tab for a while.
</br>
*Enable Scene Media Lazy Loading* - Allows media files (such as audio files, images, and video files) that are part of the scene to be loaded gradually after the rest of the scene has loaded (i.e. it allows you to enter the room faster because only the meshes that make up the scene have to finish loading before you can enter the room, I think).
</br>
*Prefer Mobile Object Info Panel* - Currently does nothing (it's a known bug).
</br>
*Animate waypoint transitions* - Makes you fly to the waypoint location when clicking on it instead of instantly teleporting you there.
</br>
*Show FPS Counter* - Displays a little counter in the bottom right corner of the screen of how many frames per second are being rendered, and if you click on it it will pop up a dialog in the top right corner with more technical information relating to scene performance.
</br>
*Show RTC Panel*- Displays a panel over your screen for debugging RTC connections.
</br>
*Cursor Size* - Allows you to set how big the Hubs cursor will be on the screen.
</br>
*Max Resolution* - Controls what resolution the Hubs viewport will render in.
</br>
*Material quality* - Controls what material effects/lighting will be rendered (medium is broken).  Although somewhat outdated, this PR shows some of the differences between the different modes: https://github.com/mozilla/hubs/pull/2760
</br>
*Enable Real-time Shadows* - Shows shadows for objects in the scene that have been set to cast them (these are rendered in real time vs the ones seen in baked lightmaps).
</br>
*Disable automatic pixel ratio adjustments* - I don't know what this does.
</br>
*Enable Post Processing Effects (experimental)* - Allows you to enable a bloom effect for Hubs (only on scenes that support it) and set the anti-aliasing quality.

## User Accounts

You don't need an account to use Hubs, but some features are only available if you sign in. These include:

* Uploading custom avatars.
* Saving avatars to "My Avatars".
* Changing scenes.
* Uploading custom scenes.
* Pinning objects in a room.
* Using room moderation tools.
* Saving rooms to favorites.

To set up an account, the only information we require is an email address.
