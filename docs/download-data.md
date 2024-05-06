---
id: download-data
title: Downloading Your Hubs Data
sidebar_label: Downloading Your Data
---

_This manual outlines the basics of the Data Download Tool._

**Table of Contents**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Important Context](#important-context)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Accessing And Installing The Tool](#accessing-and-installing-the-tool)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Logging In And Logging Out](#logging-in-and-logging-out)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Downloading Data](#downloading-data)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Getting Help](#getting-help)

---

## Important Context

In February 2024, [Mozilla announced](https://hubs.mozilla.com/labs/sunset) that Hubs would be shut down on May 31, 2024. In order to help users get their data off of Mozilla-run servers before they are turned off, we have created this download tool. While Hubs has always included methods to manually download your data, this interface allows you to download all data associated with your email account in bulk.

For more context about the tool and a deeper dive into the data that is downloaded, please consult these two resources:

1. [Download Tool Overview](https://hubs.mozilla.com/labs/downloading-your-data)
2. [YouTube Tutorial](https://youtu.be/vnkgGLkcxuk)

## Accessing And Installing The Tool

The data download tool is currently a native application that you will need to download and install on your operating system. To download the tool, please follow these steps...

1. In your web browser, navigate to the "Releases" section of the open-source GitHub repository containing the code for the tool: https://github.com/MozillaReality/Hubs-Backup-Tool/releases/
2. Find the latest release and look for the "Assets" section containing builds for Linux, Mac, and Windows. Select the build that is compatible with your operating system and it will automatically save to your device's downloads folder as a .zip file.\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[MacOS Build](https://github.com/MozillaReality/Hubs-Backup-Tool/releases/download/v1.0.4/Hubs.Backup.Tool-darwin-x64-1.0.4.zip)\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Linux Build](https://github.com/MozillaReality/Hubs-Backup-Tool/releases/download/v1.0.4/Hubs.Backup.Tool-linux-x64-1.0.4.zip)\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Windows Build](https://github.com/MozillaReality/Hubs-Backup-Tool/releases/download/v1.0.4/Hubs.Backup.Tool-win32-x64-1.0.4.zip)
3. Open the downloaded .zip file in your downloads folder to unzip the application. You should see a new application called "Hubs Backup Tool".\
   <img src="img/BackupTool.png" alt="Backup tool logo" width="300">
4. Click on the "Hubs Backup Tool" application to open it. Depending on your operating system, your may see a warning that this application contains unverified code and that your operating system is unable to verify the application. To bypass these warnings (steps shown using MacOS 13.1):\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A. Close the warning pop-up by clicking "Cancel".\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/malware-warning.png" alt="Malware image" width="200">\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B. Open your System Settings and navigate to the "Security and Privacy" tab.\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C. Scroll down until you see a message that "Hubs Backup Tool was blocked...".\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D. Select the "Open Anyway" button. You may need to enter your password as well.\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/bypass.png" alt="Malware bypass image" width="400">\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E. Attempt to open the "Hubs Backup Tool" application again. The warnings should be gone.

## Logging In And Logging Out

Once you have successfully opened the application, the first step will be to connect to the Hubs instance with the data you would like to download. Hubs data is scoped to your email address, so be sure to only connect to the instance which hosts data associated with your email.

1. In the "Host" field, enter the Hubs demo server (hubs.mozilla.com), your Hubs subscription instance ({your-host}.us1.myhubs.net), or your Hubs Cloud url.
2. (OPTIONAL) If you have customized reticulum, enter a custom value for "Port".
3. Enter the email address that owns the data you would like to download.\
   <img src="img/logging-in-download.png" alt="Logging in image" width="400">
4. Select "Login" and wait to receive a magic link from the server you are connecting to. Be sure to check your spam or junk folders. If you are unable to receive a login email, please contact hubs-feedback@mozilla.com with information about the problem you are experiencing.\
   <img src="img/verification-email.png" alt="verification email" width="400">
5. Once you have successfully logged in, you can log out at any time by selecting the icon in the top left of the download screen and clicking "Logout".\
   <img src="img/logout.png" alt="logging out image" width="400">

## Downloading Data

Once you have successfully logged in, you may use the download tool to download 5 types of data: scenes constructed in Spoke, scenes uploaded as .glb files, all media uploaded to Spoke, avatars, and media pinned in rooms owned by your email account.

1. Select the folder icon to choose a download location on your device. You can always change your download location by selecting "Show Download Location".
2. Select which categories of data you would like to download. Please note that Room Media is not available for Hubs Cloud instances.\
   <img src="img/data-select.png" alt="data download progress image" width="400">
3. Select whether you would like to override existing files from a previous backup.
4. Select "Backup" and wait for the download to complete. The download time will vary depending on how much data is associated with your email account, however you can track the progress bar next to each data type.\
   <img src="img/downloading-data.png" alt="data download progress image" width="400">
5. Once the backup is complete, you will be able to view all exported data in your intended download location. For a deeper dive into this data and how it can be used, please see [this blog post](https://hubs.mozilla.com/labs/downloading-your-data).

## Getting Help

For questions about the download tool, the best way to get help is to join our community [Discord Server](https://discord.gg/yxRFBGFT) or email us at hubs-feedbac@mozilla.com.
