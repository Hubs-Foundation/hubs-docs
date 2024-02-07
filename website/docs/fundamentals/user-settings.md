---
sidebar_position: 7
---

# User Settings

## Changing Name and Avatar

The first time you enter a Hubs room you will choose a name and an avatar. You can change them at any time by clicking the 'People' menu in the top left corner of the screen and selecting your own name from the list.

Use one of our featured avatars or [upload your own](./custom-avatars.md).

### My Avatars

For quick access to your favorite avatars, you can save them to "My Avatars" for quick access. Press the "Copy to my Avatars" icon associated with the avatar in the avatar selection screen.

![Screenshot of avatar selection screen](/img/hubs-save-avatar.jpeg)

## User Preferences

Advanced user preferences (e.g., media volume, movement controls, graphics resolution, etc), can be found in the user preferences section of the dropdown menu.

![Screenshot of avatar selection screen](/img/hubs-preference-menu.PNG)

### The available preferences are as follows

**Audio:**/
_Preferred mic_ - I'm not exactly sure, but it likely controls either which mic is used or which mic is used by default when visiting different rooms.\
_Preferred speakers_ - I'm not exactly sure, but it likely controls either which speakers are used or which speakers are used by default when visiting different rooms.\
_Incoming Voice Volume_ - How loud other avatars/people sound to you (can be overridden on a per-avatar/person basis).\
_Media Volume_ - How loud in-room media (audio files/video files, etc.) sounds to you.\
_SFX Volume_ - How loud things like chat messages and rotation sounds are.\
_Stored avatar volumes_ - Shows how many people you have custom audio settings for (e.g. you've made them sound louder or softer to you), and allows you to clear all your stored avatar volumes.\
_Disable Sound Effects_ - I believe this disables sounds for things like chat messages and rotating your avatar with the Q & E keys.\
_Disable microphone echo cancellation_ - Turns off Hubs' echo cancellation (not recommended unless you have headphones, but may provide better sound quality if you do have headphones).\
_Disable microphone noise suppression_ - Turns off Hubs' noise suppression (not recommended unless you're in a quiet environment, but may provide better sound quality if you are).\
_Disable microphone automatic gain control_ - Prevents your browser from automatically adjusting the volume of your microphone (needed especially for Chrome).\
_Enable Audio Clipping_ - I'm not sure, but I'd guess it allows you to set a threshold to prevent noises that are too loud from being transmitted.\
_Show Audio Debug Panel_ - Displays a panel over your screen that allows you to modify the global audio settings for avatars and media objects, and also displays a visualization of the selected settings.\
_Panning quality_ - I'm not sure, but I'd guess it sets the audio quality for spatialized audio sources (e.g. any audio sources that have a falloff).\
_Disable audio left/right panning_ - Reduces (or possibly disables?) the spatialization of audio.\
<br></br>
**Controls:**\
_Rotation per snap (in degrees)_ - Sets how many degrees you will turn when pressing the Q or E keys.\
_Disable movement_ - Prevents you from moving.\
_Disable backwards movement_ - Prevents you from moving backwards (S key).\
_Disable strafing_ - Prevents you from moving left or right (A or D keys).\
_Movement speed modifier_ - Controls how fast you move.\
_Enable left on-screen joystick for moving around_ - Adds a controller on the left side of your mobile device screen to allow you to move around.\
_Enable right on-screen joystick for looking around_ - Adds a controller on the right side of your mobile device screen to allow you to look around.\
_Enable gyroscope (when supported by browser/device)_ - I'm not sure, but I think this allows the position/angle of your mobile device to rotate your view.\
_Invert direction of camera movement for touchscreens_ - Inverts which direction the camera rotates when you drag your finger over your device screen (does this work for both axes or just vertical?).\
<br></br>
**Misc:**\
_Language_ - What language to display the UI in (not everything has translations for every language).\
_Theme_ - What UI theme to use.\
_Show Nametag_ - Allows you to set under what conditions name tags are visible.\
_Nametag visiblity distance_ - Sets how close you have to be to avatars for their name tags to be visible.\
_Preferred camera_ - I'm not sure, but I think this chooses which camera to use when sharing your webcam (or the default one that is chosen when entering a room).\
_Disable auto-exit when multiple hubs instances are open_ - Prevents you from leaving the Hubs room when opening another Hubs room in another tab or window.\
_Disable auto-exit when idle or backgrounded_ - Prevents you from leaving the Hubs room if you don't interact with Hubs for some time or if you switch to a different tab for a while.\
_Enable Scene Media Lazy Loading_ - Allows media files (such as audio files, images, and video files) that are part of the scene to be loaded gradually after the rest of the scene has loaded (i.e. it allows you to enter the room faster because only the meshes that make up the scene have to finish loading before you can enter the room, I think).\
_Prefer Mobile Object Info Panel_ - Currently does nothing (it's a known bug).\
_Animate waypoint transitions_ - Makes you fly to the waypoint location when clicking on it instead of instantly teleporting you there.\
_Show FPS Counter_ - Displays a little counter in the bottom right corner of the screen of how many frames per second are being rendered, and if you click on it it will pop up a dialog in the top right corner with more technical information relating to scene performance.\
_Show RTC Panel_- Displays a panel over your screen for debugging RTC connections.\
_Cursor Size_ - Allows you to set how big the Hubs cursor will be on the screen.\
_Max Resolution_ - Controls what resolution the Hubs viewport will render in.\
_Material quality_ - Controls what material effects/lighting will be rendered (medium is broken). Although somewhat outdated, this PR shows some of the differences between the different modes: https://github.com/mozilla/hubs/pull/2760\
_Enable Real-time Shadows_ - Shows shadows for objects in the scene that have been set to cast them (these are rendered in real time vs the ones seen in baked lightmaps).\
_Disable automatic pixel ratio adjustments_ - I don't know what this does.\
_Enable Post Processing Effects (experimental)_ - Allows you to enable a bloom effect for Hubs (only on scenes that support it) and set the anti-aliasing quality.\

## User Accounts

You don't need an account to use Hubs, but some features are only available if you sign in. These include:

- Uploading custom avatars.
- Saving avatars to "My Avatars".
- Changing scenes.
- Uploading custom scenes.
- Pinning objects in a room.
- Using room moderation tools.
- Saving rooms to favorites.

To set up an account, the only information we require is an email address.
