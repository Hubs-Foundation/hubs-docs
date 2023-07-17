---
id: setup-custom-domain
title: Custom Domains (Pro Plan)
---

_This guide walks you through the steps of adding, updating, and removing a custom domain on your Hub. This feature is available on Professional plans._

**Table of Contents**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Introduction](#introduction)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part A: Prepare Your Custom Domain](#part-a-prepare-your-custom-domain)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part B: Locate Your turkeyauthtoken](#part-b-locate-your-turkeyauthtoken)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part C: Connect Your Custom Domain](#part-c-connect-your-custom-domain)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Updating Your Custom Domain](#updating-your-custom-domain)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Removing Your Custom Domain](#removing-your-custom-domain)

---

## Introduction

Custom domains allow Professional Plan subscribers to improve the branding, analytics collection, and search optimization of their Hub. Be advised that, once connected, old room and scene urls may be inaccessisble.

If you need more assistance, we recommend following along with our [Custom Domain Tutorial Video](https://youtu.be/0PTmHNKdZB0).

## Part A: Prepare Your Custom Domain

The custom domain preparation process will vary depending on the type of domain and hosting service you are using. We will update our documentation as we test the differences between services and domain types.

**_With a CNAME Record_**\
The easiest method to connect a custom domain to your Hub is to create a [cname](https://en.wikipedia.org/wiki/CNAME_record) record to point to your Hub's “native domain.” A Hub’s native domain is the `{customsubdomain}.myhubs.net` which is automatically assigned to your hub and configurable on the subscription dashboard. Before connecting the custom domain, you must register a cname record through your desired custom domain’s registrar, such as GoDaddy or Route53 (AWS), to point to your Hub’s native domain. We have documented this process using Route53 in [our tutorial video](https://youtu.be/0PTmHNKdZB0).

## Part B: Locate Your `turkeyauthtoken`

1. Open the [developer tools](https://support.monday.com/hc/en-us/articles/360002197259-How-to-open-the-developer-console) in the subscription dashboard and navigate to the “Console” tab.

2. Run the following code in the console to get your token: `console.log(RegExp("_turkeyauthtoken"+"=[^;]+").exec(document.cookie)[0].slice(17))`

3. Copy the long string of characters to be used in Part C. **Please note that turkeyauthtokens are only valid for 12 hours.**

## Part C: Connect Your Custom Domain

1. Open a command terminal on your device and run the following command with the 3 parameters surrounded by < > replaced with your specific information from previous steps:\
   `curl -X PATCH -H "turkeyauthtoken:<token-value-from-part-b>" 'https://<your-hubs-native-domain>/api/ita/custom-domain?to_domain=<desired-custom-domain>'`

2. The command should execute quickly and return the following message:\
   `done: [<your-hubs-native-domain>] -> [<desired-custom-domain>]`\
   It will generally take a couple of minutes for the custom domain to be properly configured on the backend.

## Updating Your Custom Domain

1. In a command terminal on your device, run the following command with the 4 parameters surrounded by < > replaced with your specific information from previous steps:\
   `curl -X PATCH -H "turkeyauthtoken:<token-value-from-part-b>" 'https://<your-hubs-native-domain>/api/ita/custom-domain?from_domain=<current-custom-domain>&to_domain=<desired-custom-domain>'`\
   \
   **^ Note how we have added the `from_domain` parameter to this command ^**

2. The command should execute quickly and return the following message:\
   `done: [<current-custom-domain>] -> [<desired-custom-domain>]`\
   It will generally take a couple of minutes for the custom domain to be properly configured on the backend.

## Removing Your Custom Domain

1. In a command terminal on your device, run the following command with the 4 parameters surrounded by < > replaced with your specific information from previous steps:\
   `curl -X PATCH -H "turkeyauthtoken:<token-value-from-part-b>" 'https://<your-hubs-native-domain>/api/ita/custom-domain?from_domain=<current-custom-domain>&to_domain='`\
   \
   **^ Note how we have left the `to_domain` parameter empty in this command ^**

2. The command should execute quickly and return the following message:\
   `done: [<current-custom-domain>] -> []`\
   It will generally take a couple of minutes for the custom domain to be properly configured on the backend.
