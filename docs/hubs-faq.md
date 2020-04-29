---
id: hubs-faq
title: FAQ
---

## What is the capacity of a Hubs Room?

We recommend a maximum of 25 in-room participants. This capacity is the default because low power devices, such as mobile phones and standalone VR headsets, may begin experiencing performance issues in busier rooms. You can adjust the room capacity in the [room settings](hubs-room-settings) menu. 

Once a room is full, all additional users (participant #26 and beyond) can still participate by watching from the lobby. Users in the lobby can see what's happening in the room and interact via text chat; however, they are not represented as avatars in the room and their mic is not active. 

If you want to scale Hubs for a larger event we recommend splitting crowds into multiple rooms with smaller groups, or live streaming the event, depending on the use case. 

For more information on setting up Hubs for large events, we recommend exploring [Hubs Cloud](https://hubs.mozilla.com/cloud) as an option for your organization's event needs.

## How long does a Hubs room last? 

Hubs rooms stay open forever unless you choose the 'close room' option from the drop down menu. Unless a room has been 'closed' you will always be able to use the URL to revisit your room. If you plan to revisit a room, you might choose to add it to your favorites for easy access.

## Can I play video content in Hubs? 

Hubs has the ability to play videos in the room, which allows you to watch with friends or live stream content from an existing stream. For videos, Hubs supports standard video formats. Live stream content is supported in the HLS format. You can embed videos from popular video hosting websites like YouTube and Twitch, but due to high load these may sometimes be unreliable. For mission-critical content, we recommend hosting videos on the Hubs servers by uploading to your Hubs room or Spoke (there is a 128MB size limit for these videos) or on a hosting provider like Amazon S3.

## Can I share a powerpoint presentation in Hubs?

Hubs is great for giving presentations. Supported media types are pdf files, images, 3D models, audio, video, webcam input, and screen sharing. 

To use a powerpoint in Hubs, you can convert it to a .pdf file and import it directly into Hubs, or you can use screen sharing to stream a view of your presentation into Hubs. 

## Is it possible to have my video or slides show up in a good place (like on a wall) automatically?

Precise positioning using the [object controls](./hubs-features.html#object-menu) in Hubs can be a bit tricky at the moment ([we are working on it](https://github.com/mozilla/hubs/issues/1324)!)

If precise positioning is important you may prefer to build your media into the scene using [Spoke](https://hubs.mozilla.com/spoke), Hubs' web-based scene editing tool. Spoke has controls that let you fine-tune object placement. 

In the mean time, you may find it easier to resize and place objects when using Hubs in VR. If you are setting up a room on desktop, we recommend directly facing the surface you wish to place your media on when importing the files. To move the media into position, you may find you have more control if you click on the object with your mouse to grab it, and then move it into place using the WASD key controls. 

## What devices does hubs run on?

Because it runs in the browser, Hubs is very cross-platform compatible. It works on mobile, desktop, and VR devices, and runs on most modern browsers. For more information check out the [supported devices & browsers](./hubs-create-join-rooms.html#supported-devices--browsers) section. 

## Can I create custom environments?

Environments are completely customizable using [Spoke](https://hubs.mozilla.com/spoke), Hubs' web-based scene editing tool, [learn more here](intro-spoke.html). 

## How do I record my event in Hubs?

We recommend using screen recording software like OBS to capture events in Hubs. To hide the user interface when recording, you can press the tilde key (~), or turn on [camera mode](hubs-room-settings.html#camera-mode).

## Can I add custom interactive objects to my room?

[Spoke](https://hubs.mozilla.com/spoke) allows you to create spawners in your room, enabling users to generate copies of 3D models in a Hubs room. 

It is not possible at the moment to add scripting or further interactivity to objects in Spoke and Hubs.

## Can I import 3D models from [other software]?

Hubs supports importing .glb models. If the tool you use doesn't create .glb files, we recommend using a tool like [Blender](https://www.blender.org/) to convert your model. 

## Is it possible to create my own avatar?

For sure! We love seeing custom avatars. You can either re-skin the default avatars, or upload your own 3D model (.glb). For more information check out the [Creating Custom Avatars](./intro-avatars.html) section. 

## Is it possible to create a link to another room from within a room? 

Yes, just copy and paste a link for one Hubs room into another (or paste the url into the Hubs chat box and press the little magic wand icon). This should appear like a link does in Hubs. Due to browser limitations, when you open the new Hubs room you will have to go through the "enter room" process again. 

## Can I prevent other people in the room from drawing, controlling slides/videos, etc? 

If you are the room moderator you can turn these on/off by going to [room settings](hubs-room-settings.html) in the dropdown menu. 

## Is there a laser pointer tool in VR? 

The pen in Hubs doubles as a laser pointer tool. When the pen is emitting a laser, you will see a line going from your avatar in the direction you are pointing. 

## How do I fly?

You can type /fly in the text chat box, or press G on desktop, or press down on the joystick in Quest. 

## How do I access the text chat box & preferences on Quest?

You need to leave VR mode to access the text chat box & preferences on Quest. Press the home button on your control and "quit" VR.


## Why do things disappear when I leave the room?

Check out the [troubleshooting](hubs-troubleshooting.html#objects-disappear-after-leaving-room) section.

## When I load a room, I get an error saying unable to connect to room. help! 

Check out the [troubleshooting](hubs-troubleshooting.html#unable-to-connect-error) section.

## Why is there echo in the room?

Check out the [troubleshooting](hubs-troubleshooting.html#there-is-echo-in-the-room) section.

## How much does Hubs cost for an event?

Creating private rooms on [hubs.mozilla.com](https://hubs.mozilla.com/) is free!

If you are interested in hosting an event, or would like to create a customized Hubs environment on your own infrastructure/domain, check out [Hubs Cloud](https://hubs.mozilla.com/cloud) or fill out the [Hubs Events form](https://mzl.la/hubsevents) so we can provided tailored information for your event needs.

##  Is it possible for me to create a custom version of hubs which has different features or styling? 

See previous answer. 

## Need help with something else?

Let us know! hubs@mozilla.com
