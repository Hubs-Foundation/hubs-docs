---
id: whats-next
title: What’s next?
---

### My Hubs is up and running, now what do I do?

## **Create a room**

You may want to select the button **Create Room**!

![Capture of Hubs domain page as it appears to the Admin. "Create Room" blue button is highlighted in purple.](img/whatsnext/image1.png)

And this is what you’ll see, the fallback space. It’s gray ground with a dark gray sky. The avatars are the fallback box avatars.  
!

[Capture of Hubs room with a dark gray sky and lighter gray ground. All avatars are boxes. These are the default settings.](img/whatsnext/image2.png)

Eager to put up a scene? There are Hubs scenes available! Hop down to the [Importing Scenes and Avatars section]().

## **Where is the Admin Panel?**

It is at your domain address with admin tacked on the end. Like this:

`mycoolhubs.space/admin`

## **Admin Panel** 

There isn’t much content available right now in the form of scenes and avatars, but it will work in a little while when the content has been *placed on other Hubs*. Hubs Foundation is working on fixing that!

## **Safety & Security Settings**

These settings are recommended for safety and security but also for minimizing cost. You don’t want a band of roaming squatters to move unseen into your Hubs and drive up your DO costs. So these settings are for “shutting the lights off when you leave”. It should leave your Hubs inaccessible to others UNTIL you change the settings again.

* Set the Hubs room(s) to Invite Only  
* Set the room(s) occupancy to zero (0).   
* Set up Monitoring Alerts at Digital Ocean. OR just log into DO and check what’s going on in Billing.  
* When in doubt, delete and change your API at DO or delete your kubernetes cluster.   
* NEVER share your config file with anyone. 

## **Room Settings**

Select the **3 dots**, select **Room Info and Settings**.

![Capture from inside a Hubs room. "More" button on lower right corner is highlighted in purple.](img/whatsnext/image3.png)

Select Edit.

![Capture from Hubs room, More with room's Name and thumbnail image. "Edit" in upper right corner is highlighted with purple.](img/whatsnext/image4.png)

Scroll down to modify the Room Access and Room Member Permissions. These options are all your choices.

## **Scene Editor \<- this is Spoke\!**

When you open New Project, you might see this:   
Errors loading project. Blah blah 1 error reticulum blah. Possibly a CORS error.

![Capture from Hubs, Spoke Editor. Popup box with Error loading project notification.  It is logical because the default Spoke scene cannot find the default crater dot glb files. You may select the "OK" button in the lower right corner.](img/whatsnext/image5.png)

You can ignore this for now. It is Hubs saying that it can’t find the crater.glb file that used to be there as default. Just click Ok and carry on.

## **Bring your own glb file (BYOG)**

Now that you are the captain of your own Hubs, you’ll need to get used to bringing your own supplies. That is, bring in your .glb files. 

We have a few starter files.

###   Importing Scenes and Avatars

![Capture of available scenes.](img/whatsnext/image6.png) ![Capture of available avatars.](img/whatsnext/image7.png)

You can visit the links below to browse content that has been made available on the Hubs Foundation’s official instance.

* [Browse Scenes](https://demo.hubsfoundation.org/erGY8df/asset-browser/media/scenes?filter=featured)  
* [Browse Avatars](https://demo.hubsfoundation.org/erGY8df/asset-browser/media/avatars?filter=featured)

To import the content, right click on the asset you would like and select “Copy Link” or “Copy Link Address”.  
At your Hubs Admin Panel, Import Content, paste the copied link into the “Avatar or Scene URLs or .pack file” field.  
Select “Preview Import”.  
Configure the import settings. Unselect or select checkboxes for “Set to Default” and “Featured” for scenes and “Set to Default”, “Set to Base” and “Featured” for avatars.  
Select “Import 1 Item”.  
Repeat for each asset you want to import.

*Note: If you left-click one of the assets and it takes you to the lobby of the Hubs room you will need to close that tab and re-open the browser from here.*

For more information on importing and managing content for your Hubs instance, see [Importing Content](https://docs.hubsfoundation.org/hubs-cloud-importing-content.html) and [Managing Content](https://docs.hubsfoundation.org/hubs-cloud-managing-content.html) in the Hubs Docs.

### Start a Scene From Blender

![Capture from Blender software showing a starter scene including the ground, a media frame, and a sky texture with other elements.](img/whatsnext/image8.png)

If starting from nothing is your thing in Blender, you should check out former Hubs Team member Christian Van Meurs Creator Labs article, [Hubs Starter Scene File for Blender](https://web.archive.org/web/20240420174751/https://hubs.mozilla.com/labs/hubs-starter-file-for-blender/). Christian provides some tips for things to include.

[Download the Blender file](https://github.com/Hubs-Foundation/hubs-blender-files/raw/main/creator-labs-files/hubs-starter-scene/starterScene_01.blend) from Github.

The file contains:

* A simple environment containing a ground plane, a wall with a media frame, and an emissive Hubs logo.  
* A navigation mesh (including the source mesh which still contains the boolean cutout shapes used to create this mesh).  
* A spawn point.  
* A 'Scene Preview Camera' “empty” with a camera parented to it, so you can preview where it's looking.  
* A background sky texture (used to light the scene).  
* An equirectangular camera properly positioned to render out the background HDR image.  Remember to hide your geometry first\!  
* An 'Environment Settings' component containing a sample 'Background Image' (created from the background sky texture) and a smaller 'EnvMap' version of this HDR image.  
* A 'Reflection Probe' with its own generated cubemap that matches the resolution of the 'EnvMap' (required or it won't work\!).  
* Two materials with a pre-baked lightmap image already applied and the appropriate nodes added to the shader graph.

## **Testing sound & screenshare**

Share the link to one of your new rooms with a friend, ask them to use their microphone, see if you can hear each other.

Select the Share button and see if screen shares work.

If you don’t have a friend available, just duplicate the tab, and you will be in there twice.

## **If you have not used Hubs before…**

* You should visit the [Hubs docs](https://docs.hubsfoundation.org).

![Capture from Hubs documentation (docs), Welcome to Hubs page.](img/whatsnext/image9.png)

## **Updating Hubs**

Hubs software is updated from time to time. Announcements will be in the Hubs Discord.

### How to update your Hubs CE instance

The manual method:

* In VS Code, select **hcce.yaml**  
* Select **Control \+ F** on your keyboard and search for this text: **IfNotPresent**  
* Replace each instance of the above text with:  
 **Always**  
* Select **File, Save**. This will keep all of the changes you just made.  
* Now we need to apply your changes to Kubernetes on DO. **Copy and paste** this into the terminal and **hit enter on your keyboard**

  ```shell
  kubectl apply -f hcce.yaml
  ```

* Now we need to restart your Hubs instance so it picks up the changes.  **Copy and paste** this into the terminal and **hit enter on your keyboard**

  ```shell
  kubectl rollout restart deployment -n hcce
  ```

> 💡 Tip: Your Hubs instance will now update any time you run the above two commands until you regenerate your hcce.yaml file.  To return your hcce.yaml file to the way it was, simply regenerate it and disable the default-ssl-certificate line in it.

The automatic method:

*Coming soon.*

### How to update your Hubs CE deployment scripts (Zip Version)

Updating your Hubs deployment scripts from the repository at Github (the zip file you originally downloaded).

* Copy **input-values.yaml** from your **community\_edition** folder and paste it into a safe space. We’ll use your **Desktop** folder as an example.  

* [Download and extract a new copy of the zip file](./beginners-guide-to-CE.html#9-download-hubs-ce) to the same spot you did initially.  

* Select OK when asked to overwrite the files.  

* Paste or type the values you had to your old **input-values.yaml** into your new **input-values.yaml** file.  

* Select **File, Save**. This will keep all of the changes you just made.  

* Delete the old **input-values.yaml** file that is in your Desktop folder.

### How to update your Hubs CE deployment scripts (Git Version)

* If you are using the master branch with uncommitted changes:  
* Stash your changes by running this command:

    ```shell
    git stash
    ```

* Pull in the new updates by running this command:

    ```shell
    git pull --rebase
    ```

* Reapply your changes by running this command:

    ```shell
    git stash pop stash@{0}
    ```

* If you run into a merge conflict, run this command:

    ```shell
    git mergetool
    ```

* If you are using a custom branch:  
  * Commit or stash your changes if needed.  
  * Change back to master.  
  * Pull in the new updates by running this command:

    ```shell
    git pull --rebase
    ```
  * Change back to your custom branch  
  * Merge the master branch into your custom branch.

### After updating your Hubs CE deployment scripts

* Regenerate your Kubernetes config file for DO. **Copy and paste or type the following text** and **hit enter on your keyboard:**

  ```shell
  npm run gen-hcce
  ```

* In VS Code, select **hcce.yaml**  
* Select **Control \+ F** on your keyboard and search for this text: **default-ssl-certificate.**  
* Enter a \# (number sign) at the beginning of the text line, to the left of the dashes. It will be correct if the line turns green; this means the line has been disabled.  
* Select **File, Save**. This will keep all of the changes you just made.  
* Now we need to apply your changes to Kubernetes on DO. **Copy and paste or type** this into the terminal and **hit enter on your keyboard**

  ```shell
  kubectl apply -f hcce.yaml
  ```

* Now we need to restart your Hubs instance so it picks up the changes.  **Copy and paste or type** this into the terminal and **hit enter on your keyboard**

  ```shell
  kubectl rollout restart deployment -n hcce
  ```

## **Persistent Storage for Hubs on DigitalOcean**

Community member Doug Reeder has written [a guide](https://hominidsoftware.com/tech-personal-growth/Hubs-on-DigitalOcean/) for customizing the persistent storage for Hubs on DigitalOcean. Note: this guide is not written for beginners but if you need help, please ask in Discord. 

## **Backups**

DO does provide a system to save backups at our [How to backup your Hubs instance instructions](./how-to-backup-your-Hubs-instance.md).

## **Generating new SSL Certificates**

🤔 Note: Your SSL certificates expire **every 90 days**. Don’t worry. We’ve [got instructions for you when that happens](https://docs.google.com/document/d/1Ne4Aqe-YY9shvi8La_5dF2Qq3VOoLIrfbpFgE15RjRQ/edit?usp=sharing).
