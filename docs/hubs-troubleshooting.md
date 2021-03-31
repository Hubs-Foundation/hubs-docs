---
id: hubs-troubleshooting
title: Troubleshooting
---

## Getting stuck on loading screen 

Rooms may have complex 3D models or objects in them which can increase the load time, particularly on less powerful devices (i.e., mobile phones and standalone VR headsets). If you are getting stuck on the loading screen, try refreshing the page or loading the scene on another browser or device. 

## Audio sounds choppy

Choppy sounding audio could indicate that your device/network is having trouble with the complexity of the room. This could be because of the complexity of objects in the scene, or the number of other room members present. If you are on a mobile phone, you may find audio quality and performance improves if you enter the room from a more powerful device, such as a computer. 

## I can't hear someone / someone can't hear me

A connectivity issue may result in one person in the room being unable to hear one or more other participants in a space. We first recommend that you confirm that you can hear other sounds in the room (for example, the sound an object makes when you add it to the room, a video in the room, or the chat sound) and that your Hubs audio preferences aren't set to 0 volume. Also confirm that you are not muted and that you have allowed microphone permissions for Hubs. If you aren't getting any audio at all, try reconnecting to the room with a different audio output device. If you are willing, we also ask that you fill out [this form](https://forms.gle/o6tV9R2ujgDY7gpc8) with network connectivity logs, which will help us diagnose system issues related to audio and connectivity.

## Wired-in headset is not working

If your wired-in headset isn't connecting, we recommend checking the following:

* Does your browser support WebVR? We recommend Firefox for wired-in WebVR experiences. See if your set-up works at https://webvr.info/samples/XX-vr-controllers.html.
* Is your browser up to date?
* Do you have SteamVR (Vive / Windows Mixed Reality) or Oculus App (Rift) installed and up to date?
* Does your VR headset require other supporting software (e.g., Windows Mixed Reality Portal)? Is this installed and up to date? 
* If you are using Windows Mixed Reality, have you also installed the [Steam VR tooling](https://store.steampowered.com/app/719950/Windows_Mixed_Reality_for_SteamVR/) for WMR headsets?
* Is your browser using the same graphics card as the VR Headset?

## There is echo in the room

Echo may occur if a participant is not wearing headphones. You can ask participants to mute their mic when they are not speaking, or as a room moderator you can mute them yourself in their avatar menu. You can also reduce the volume of the user in their avatar menu. See [Hubs Features](./hubs-features.html) for more information. 

## I have generally bad performance in a room on an otherwise powerful computer

Confirm that your browser has hardware acceleration enabled. This will allow your browser to utilize the graphics card, which is important for rendering Hubs with better performance. If you are on a laptop with a discrete GPU, you should also confirm that the browser is using the dedicated card in the computer settings.

## "Unable to connect" error

An error that says "unable to connect" is often caused by a firewall. At a minimum, Hubs needs your computer to connect to external ports 80 and 443, *both* via TLS. Ideally, you should also open up ports 51610-65535 on UDP and TCP for Hubs on your router's firewall.

Note that for self-hosted versions of Hubs you need to open ports 49152-60999 on UDP and TCP. You will also need to open port 19302 on UDP and TCP.


## Hubs landing page is blank

If you are using Internet Explorer, try opening the website on another browser. If it doesn't appear on other pages, try clearing your cache and cookies for that page. 

## Mic not working 

If no sound is being picked up from your voice, first check that your mic is properly plugged in and that you selected the right mic in the browser permissions (typically to the left of the address bar). If it is still not working, you may need to look in the privacy and security settings on your computer to ensure that mic permissions are not being blocked. If it still does not work, try in another browser. Hubs works best in Firefox and Chrome, but it also runs on Edge and desktop Safari.

If the mic is picking up your voice but it sounds distorted. Check you aren't using a bluetooth headset mic, as these do not always work well with browser-based tools. 

## Screen sharing / webcam not working

Similar to mic issues, if you can't get screen sharing or the webcam to work, first ensure that any required peripherals (webcam) are plugged in. Ensure they have the right permissions to run in your browser (typically to the left of the address bar). If it is still not working, you may need to look in the privacy and security settings on your computer to ensure that permissions are not being blocked. If it still does not work, try in another browser. Hubs works best in Firefox and Chrome, but it also runs on Edge and desktop Safari.

## Objects disappear after leaving room

By design, any objects you create in a room will disappear when you leave. This prevents the room from becoming cluttered and slow as things are left behind. If you do want an object to stay in the room, open the object's controls (hover your cursor over it and press the space bar on desktop), and select "pin". A pinned object will stay in the room until it is unpinned or deleted.

## Objects appear as broken media link

If you try to import an object and it loads as a broken link, it could be an unsupported file format, or the file might be too large. Hubs supports file uploads up to 150MB.

## Images aren't displaying 

Some older systems have trouble rendering 2D objects in the scene. If you suspect this is happening, try reloading the page with the following flag at the end of the URL: __?disablebatching__. For example:

    https://hubs.mozilla.com/sgKNM3h/smart-magnificent-gala?disablebatching

## YouTube is not working

YouTube videos don't work reliably in Hubs. We recommend trying Vimeo or saving your video to Dropbox and streaming from there.

## Need help with something else?

If you can't find what you need in the rest of the documentation, see the [help page](./help.html) for ways to get in touch.
