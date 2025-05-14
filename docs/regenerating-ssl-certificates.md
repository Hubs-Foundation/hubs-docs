---
id: regenerating-ssl-certificates
title: Regenerating SSL Certificates
---

<!-- align all images to the left by default -->
<div class="image-align-left">

![Capture of Hubs instance with expired SSL certificates. Yellow triangle with text: Warning: Potential Security Risk Ahead.](img/sslcertificateregen/image1.png)

The SSL certificates you generated in the Beginner's Guide will last you 90 days, but then you will need to regenerate them. Why do they expire every 90 days? We don’t know and we had to google that question. [Here’s the answer](https://letsencrypt.org/2015/11/09/why-90-days/): To limit damage from key compromise and to encourage all of us to implement automation. 

What does SSL stand for? Secure sockets layer.

## How do I know how long my SSL certificates will last?

You can check when your SSL certificates expire by going to your Hubs URL and viewing the certificate in your browser.

### Firefox:

Open your Hubs instance in your browser (this can be the home page, the admin panel, Spoke, a room, etc.), select the lock icon beside the URL bar, 

![Capture of browser address bar with lock icon highlighted in purple.](img/sslcertificateregen/image2.png)

select “Connection secure”, 

![Capture of browser address bar with choice of Connection secure and lock icon highlighted in purple.](img/sslcertificateregen/image3.png)


select “More information”, 

![Capture of browser address bar with choice "More information" highlighted in purple.](img/sslcertificateregen/image4.png)

then select the Security tab in the window that pops up, and finally select the View Certificate button.

![Capture of Page info pop-up, Security tab, and the button "View Certificate" near the top right highlighted in purple.](img/sslcertificateregen/image5.png)

Look for the section with your domain. That will tell you when the certificate was issued and when it will expire.  In this example, the SSL Certificate expires on January  21, 2025.

![Capture of Certificate popup with Validity section highlighted in purple.](img/sslcertificateregen/image6.png)

### Chrome:

Open your Hubs instance in your browser (this can be the home page, the admin panel, Spoke, a room, etc.), then select the lock icon beside the URL bar, select "Connection is secure", and select "Certificate is valid". There should be a section in the dialog that pops up that will tell you when the certificate was issued and when it will expire.

## How do I regenerate my certificates?

You can regenerate your SSL certificates with the following steps. This is very similar to what you did in the Beginner’s Guide, Steps 13 and 15.

1. Open VS Code. You will probably arrive in the HUBS-CLOUD-MASTER Folder, community-edition directory, hcce.yaml file. If you are not there, open it.
    ![Capture from VS Code, HUBS-CLOUD-MASTER folder, community-edition, hcce.yaml file.  "hcce.yaml"  file and in the code editor window highlighted in purple.](img/sslcertificateregen/image7.png)
2. Select **hcce.yaml**.
   ![Capture from VS Code, HUBS-CLOUD-MASTER folder, community-edition, hcce.yaml file.  "hcce.yaml"  file highlighted in purple.](img/sslcertificateregen/image8.png)
3. Select **Control \+ F** on your keyboard and search for this text: **default-ssl-certificate**
   ![Capture from VS Code, HUBS-CLOUD-MASTER folder, community-edition, hcce.yaml file. Near line 1321, the text that appears in green: "#- - - default-ssl-certificate+hcce/cert-hcce" highlighted in purple.](img/sslcertificateregen/image9.png)
4. Remove (delete) the # (number sign) from the beginning of the line to re-enable it.
   ![Capture from VS Code, HUBS-CLOUD-MASTER folder, community-edition, hcce.yaml file. Near line 1321, the text that appears in green: "- - - default-ssl-certificate+hcce/cert-hcce" highlighted in purple. In this capture, the "#" sign has been deleted.](img/sslcertificateregen/image10.png)
5. Select **File, Save**. This will keep all of the changes you just made.
   ![Capture from VS Code, File menu. "File" and "Save" are highlighted in purple.](img/sslcertificateregen/image11.png)
6. Make sure the terminal is in the community-edition directory. If not, **copy and paste** this into the terminal and **hit enter**:
   ```shell
   cd community-edition
   ```
   ![Capture from VS Code, terminal window. Text "cd community-edition" highlighted in purple.](img/sslcertificateregen/image12.png)
7. Apply the changes to Kubernetes on DO. **Copy and paste** the following text into the terminal and **hit enter on your keyboard**.
    ```shell
    kubectl apply -f hcce.yaml
    ```
    Note: If you receive this error message: error: the path “hcce.yaml” does not exist means you are attempting a command from the wrong directory.
    ![Capture from VS Code, terminal window. Text "kubectl apply -f hcce.yaml" shown.](img/sslcertificateregen/image13.png)

    If running correctly, it will take a few seconds. Ongoing results look like this:
    ![Capture from VS Code, terminal window. Notification that updating hubs file (hcce) is done. Text includes items like "deployment.apps/dialog created" and "service/lb created".](img/sslcertificateregen/image14.png)

    Final result looks like this:
    ![Capture from VS Code, terminal window. Notification that updating hubs file (hcce) is done. Text includes items like "deployment.apps/dialog created" and "service/lb created". Terminal indicates readiness for a new command.](img/sslcertificateregen/image15.png)

8. **Copy and paste** the following text into the terminal and **hit enter on your keyboard** and wait for it to complete.
    ```shell
    npm run gen-ssl
    ```
    Note: you will see in the output of the previous command that the AGE parameter doesn't reset. This is fine.
   ![Capture from VS Code, terminal window. Text: npm run gen-ssl highlighted in purple.](img/sslcertificateregen/image16.png)
9. In VS Code, select **hcce.yaml.**
   ![Capture from VS Code, HUBS-CLOUD-MASTER folder, community-edition, hcce.yaml file.  "hcce.yaml"  file highlighted in purple.](img/sslcertificateregen/image8.png)
10. Select **Control \+ F** on your keyboard and search for this text: **default-ssl-certificate**
    ![Capture from VS Code, HUBS-CLOUD-MASTER folder, community-edition, hcce.yaml file. Near line 1321, the text that appears in green: "- - - default-ssl-certificate+hcce/cert-hcce" highlighted in purple. In this capture, the "#" sign has been deleted.](img/sslcertificateregen/image10.png)
11. Insert a # (number sign) at the beginning of the line to disable it again.
    ![Capture from VS Code, HUBS-CLOUD-MASTER folder, community-edition, hcce.yaml file. Near line 1321, the text that appears in green: "#- - - default-ssl-certificate+hcce/cert-hcce" highlighted in purple.](img/sslcertificateregen/image9.png)
12. Select **File, Save**. This will keep all of the changes you just made.
    ![Capture from VS Code, File menu. "File" and "Save" are highlighted in purple.](img/sslcertificateregen/image11.png)
13. To apply the changes to Kubernetes on DO, **copy and paste** the following text into the terminal and **hit enter on your keyboard**.
    ```shell
    kubectl apply -f hcce.yaml
    ```
    ![Capture of VS Code with text "kubectl apply -f hcce.yaml" shown.](img/sslcertificateregen/image17.png)
    You are done! If you’d like to check if the certificates are all renewed [follow these instructions again](#how-do-i-know-how-long-my-ssl-certificates-will-last).

## Can I regenerate my certificates before they expire?

Yes.  If you are within 45 days of your certificates expiring you can regenerate them.

</div>
