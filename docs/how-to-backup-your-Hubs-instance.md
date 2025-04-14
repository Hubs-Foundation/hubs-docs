# **How to backup your Hubs instance**

These instructions are written for users, newbies, or non-developers. These instructions only apply to single-node clusters, where data is stored on the node ("hostPath" volumes).  If you arrived here from the [Beginner’s Guide](https://docs.google.com/document/d/1BXSxTNFLjx8dtz26_OAFJParGdz8qTE2XvVAxwoJwrQ/edit?usp=sharing) which guided you generally to a one node setup, you are fine to follow these.

## Why would I need to create backups of my Hubs instance?

The Beginner’s Guide instructions and Hubs code have persistent volumes already turned on to store all of your data between DigitalOcean (DO) pod reboots. But if your node(s) get turned off or if DO screws up, you might lose all of your data.  It has been known to happen. 

Backups allow you to have copies so that you can restore your Hubs instance.  This will save all of your instances, your avatars, and your projects in Spoke, your assets in Spoke, and will save pinned objects in room in the location where you pinned them. 

A backup of your Hubs instance stores all of those files into one thing– the backup.  You cannot sort or clean out from within the back up. You can’t clean out old files that you know you don’t want. It’s an all or nothing type of thing.

# **Prices**

With DigitalOcean, you have two choices to make backups: Backups or Snapshots.  

Backups are an automated system. It saves the backup for you at a time you select.

* Weekly backups \- kept for 4 weeks. $4.80/month (20% of the droplet)  
* Daily backups \- kept for 7 days $7.20/month (30% of cost of droplet)

Snapshots are a one-time save on demand.

* Snapshots \- rate $0.06 per GiB per month, you do these on demand, they are not automatic

Note: these prices are only quotes as of November 2024\. With all of these DO quotes, the costs are dependent on either what droplet costs you are paying or how much you have saved in memory (gigabytes).

At DO, both Backups and Snapshots save ONE backup of everything within DO’s own computers. What you pay for is either the frequency of automatic saving (for Backups) or the file space (for Snapshots).

## Which should I pick, [Backups](#weekly-backups) or [Snapshots](#snapshots)? 

Backups make sense if you are a medium-to-heavy user of Hubs or if your use is critical.  For example, if you are a college professor and you have 25 student projects coming due all at once through your Hubs, you might want Daily Backups.  If you are a solo user, but your project has high value (like an art showing or a work meeting) you might want Daily or Weekly Backups.

Snapshots make more sense if you are a light user of Hubs. If you can remember to save and put a copy away and if it doesn’t bother you to lose some of your Hubs work in-between when you remember to save, snapshots might be better for you.  

💡 Tip: Snapshots do backup volumes. Automated backups do not. These are not persistent volumes; these are extra volumes for off node storage that a user might purchase.

Both Backups and Snapshots work the same in DO. You set up the service. It runs. It’s nearly one-click to restore your work from Backup.  You are NOT saving anything to your own computer. Because these are saved in a different place than your personal droplet/cluster, the backup is pretty safely stored at DO.

# **Weekly Backups** {#weekly-backups}

            
1. At Digital Ocean, select **Backups & Snapshots**. 

2. Select the **Backups** tab. Select **Setup Automated Backups**.

![Capture of DigitalOcean, Manage, Backups & Snapshots page. "Backups" and "Setup Automated Backups" highlighted in purple.](img/backups/image1.png)

3\. At Enable Automated Backups:

A. Select your **droplet**. 💡It probably starts with “hcce-”.  

B. Select either **Weekly Backups** or **Daily Backups**. 

C. For Backup Window, Select your preferred **Day of the Week**, and select your preferred **Time of day**. You can leave this on the defaults or change it to when it works for you. 

D. Select **Enable Backups**.

![Capture of DigitalOcean, Manage, Backups & Snapshot, Enable Automated Backups page. Droplet and either Weekly or Daily Backups  highlighted in purple. "Enable Backups" blue button highlighted in purple.](img/backups/image2.png)

Notification box, “Backups enabled on hcce-cluster…..”

![Capture of DigitalOcean, Manage, Backups & Snapshots, Enable Automated Backups page. Notification briefly appears in upper right corner with green text.](img/backups/image3.png)

4\. When the backup is made, it will be listed underneath Automated Backups.  Note: in our testing, it took \~5 minutes to save a backup, maybe faster. But it was immediate. We can’t guarantee that for you because we were purposely trying to get a backup. YMMV.

![Capture of DigitalOcean, Manage, Backups & Snapshots page. "Backups tab. More menu highlighted in purple. Choices are Convert to snapshot, Create Droplet, and Restore Droplet. "1 Backup" also highlighted in purple.](img/backups/image4.png)

# **Restoring your Hubs data from a Backup**

1\. To restore, from the Backups tab, your droplet, select **1 backup** from the 1 you have done. In the future, if you picked Weekly, you’ll have 4 backups to choose from.  If you picked Daily, you’ll have 7 to choose from. Select **Restore Droplet**.

Notification box: Are you sure that you want to restore \[your droplet\] with \[your saved image\]? Note: restoring will replace the current Droplet with an older image. Select **Restore Droplet**.  

![Capture of DigitalOcean, Manage, Backups & Snapshot page. "Backups" tab. Restore droplet popup with "Restore droplet" blue button highlighted in purple.](img/backups/image5.png)  

We found it took 5-10 minutes for the droplet to appear again. Easy peasy.

# **Snapshots** {#snapshots}

A snapshot is a one-time memory save that you can manually do anytime. The process is very similar to Backups.

1\. At Digital Ocean, select **Backups & Snapshots**. 

2\. Select the **Snapshots** tab. Select your **droplet**, enter a **snapshot file name**. 🤔 Advice: we saved it with the current date (i.e. 2024-11-06-documentation-day). Select **Take Snapshot**.

![Capture of DigitalOcean, Manage, Backups & Snapshots page. "Snapshots", with the droplet name blurred.  "Take Snapshot" highlighted in purple.](img/backups/image6.png)

Notification that saving is in progress.

![Capture of DigitalOcean, Manage, Backups & Snapshots page. For Snapshots, a blue progress bar shows the progress of saving the droplet.](img/backups/image7.png)

Notification that saving is done: Snapshot created. On the Droplets tab, your saved snapshot will appear. At Droplets: the snapshot name, the file size, which region it was saved to (by default it is saved to the same region where you chose to have your original droplet/cluster with DO), when it was created, and a More dropdown menu.

![Capture of DigitalOcean, Manage, Backups & Snapshots, Shapshots page. Notification briefly appears in upper right corner with green text.](img/backups/image8.png)

# **Restoring your Hubs data from a Snapshot**

1. To restore, from the Snapshots tab, Droplets tab, select **More** dropdown menu. Select **Restore Droplet**.

![Capture of DigitalOcean, Manage, Backups & Snapshots, Snapshots tab. More menu highlighted in purple. Choices are Rename, Create Droplet, Add to region, Transfer Snapshot, Restore Droplet, and Delete. "Restore Droplet" is highlighted in purple.](img/backups/image9.png)

Notification box: Are you sure that you want to restore \[your old droplet\] from \[your saved snapshot\]? Note: restoring will replace the current Droplet with an older image. 

2. Select **Restore Droplet**.

![Capture of DigitalOcean, Manage, Backups & Snapshots page. "Snapshots" tab. Restore droplet popup with "Restore droplet" blue button highlighted in purple.](img/backups/image10.png)

Notification that Restoring is in progress.

![Capture of DigitalOcean, Manage, Backups & Snapshots, Snapshots page. Notification of "Restoring" on right side of page highlighted in purple.](img/backups/image11.png)

All done! Notification: Droplet Restored from Snapshot.  

![Capture of DigitalOcean, Manage, Backups & Snapshots, Snapshots page. Notification of "Restoring" on right side of page highlighted in purple.](img/backups/image12.png)

# **After Restoring**

It will take a short while for everything to be restored. DO might indicate that the droplet is available and running but it takes a few minutes for Hubs to restart itself.  If you try your Hubs immediately, you will get broken webpages.

# **FAQs for Backups**

##  What about SnapShooter?

SnapShooter is a service offered by DO that will take care of all backups for you. As one Community Member put it, it lets your money do the work for you. In our testing, the cheapest workable option for Hubs instances would be $66/month. If you like setting things once and then forgetting about it, this service would work.

However, the process to setup and restore from either Backups or Snapshots is not hard to do, comparatively.