---
id: hubs-cloud-aws-estimated-ccu-limits
title: AWS Estimated CCU Limits
sidebar_label: Estimating CCU Limits
---

This document explains how to estimate what your Hubs Cloud server's CCU (concurrent users) limit is based on the instance type used, for both the entire server and individual rooms.

## Disclaimer for Estimating CCU Limits

Please see [AWS Estimating Costs and Cost Charts (Alpha)](./hubs-cloud-aws-estimated-cost-charts.md) for cost estimations.

There are several factors that currently limit how many users can be on a server or in a room in a Hubs Cloud instance: 

* Generally speaking, the more **vCPU**'s your instance type has (Please consult [Amazon EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/)), the more overall CCU it can support.

* The **more users actively moving around**, and **the more users using devices with head/hand tracking**, the **fewer total users a room can support**. Inactive users (in-room but otherwise not speaking/moving) can be considered similar to users in-lobby for the purposes of determining ccu. 

* Various features such as (but not limited to) media uploading, photo/video capture (via the camera tool), and link thumbnail generation, use varying degrees of server resources that may effect CCU limits. 

* The device used by a user may effect their ability to successfully connect to a room. Webkit based browsers (anything on iOS), for example, will hit their own limits past 24 CCU in a room. A lower-end computer may struggle loading/rendering a large number of avatars + additional media in a room in general. This document does not factor in client-side factors, and only concerns itself with server-side limitations.  


## Estimated CCU Table (1 App / 1 Stream server)

The following table lists measured and estimated CCU for different instance types:

* **Active** indicates "worst case scenario" where use is in-room and talking and moving with tracked head and hands.

* **Inactive** indicates user who is either in-lobby or is otherwise not speaking or moving at all while in-room.
 * Inactive in-room users are slightly more expensive than in-lobby users both due to WebRTC handshaking required to establish 2-way communication and "heartbeat" messages that are infrequently sent by the client.

| AWS Instance Type | vCPUs | Max **Active** CCU | Max **Inactive** CCU w/ 25 active CCU | Max **Inactive** CCU w/ 10 active CCU | Max **Server** CCU w/25 active CCU per room |
|-------------------|------:|-------------------:|--------------------------------------:|--------------------------------------:|--------------------------------------------:|
| t3.medium         |     2 |                 45 |                                    45 |                                   140 |                                         125 |
| t3.large          |     2 |                ~45 |                                   ~45 |                                  ~140 |                                        ~125 |
| t3.xlarge         |     4 |                ~65 |                                   ~90 |                                  ~290 |                                        ~200 |
| t3.2xlarge        |     8 |                 80 |                                   200 |                                   600 |                                         300 |
| c4.large          |     2 |                 40 |                                    45 |                                   125 |                                          75 |
| c5.large          |     2 |                 50 |                                    70 |                                   180 |                                         100 |
| c5.xlarge         |     4 |                 65 |                                    90 |                                   290 |                                         200 |
| c5.2xlarge        |     8 |                ~80 |                                  ~200 |                                  ~600 |                                        ~300 |
| c5.24xlarge       |    96 |               ~100 |                                 ~3200 |                                 ~9600 |                                       ~4600 |

* **~** indicates that the number is calculated and not measured from benchmarking.
* c5.24xlarge numbers are **very** theoretical, actual results may vary.

## Formulas to calculate CCU:

**Warning: Napkin Math Ahead**

### Max In-Room CCU
where C = # of vCPU's

**Max In-Room CCU** = √(~1000 * C)

### Max Lobby CCU w/ X in room:
**Max Lobby CCU** = (**Max In-Room CCU**² - X²) / X

### Max Server CCU w/ max 25 users in-room per room: 
where C = # of vCPU's

**Max Server CCU** = ~50 * C 

## FAQ

### Can I use a t3.micro or a t3.small?
t3.micro only has 1GB of memory, and is not recommended. t3.small has 2GB of memory, and may be sufficient for small gatherings or casual testing. 

### What's the difference between a t3.medium and a t3.large?
t3.medium and t3.large only differ in memory, which will benefit the server during high-memory usage situations e.g. frequent media uploading. 

### What's the difference between a c4.large and c5.large?
While the c4.large and c5.large have similar vCPU and memory, the c4.large has only a fraction of the networking performance/bandwidth of the c5.large.

### What if I use more than 1 app/stream server?
Using more servers, or "scaling horizontally", will increase overall server CCU but not per-room CCU.

### Can I use different instance types for app/stream servers?
At the time of writing this document, app servers are more resource demanding than stream servers (except possibly in cases of high video/screen sharing usage). You may be able to use a smaller instance type for stream servers and maintain relative similar CCU numbers.

### How do I increase the max user cap in a room?
From the admin panel, server admins can adjust **Default room size** and **Maximum room size** under "Setup-> App Settings-> Rooms". for rooms created on your Hubs Cloud instance. Room admins may adjust **Room Size** under "Room Settings" to within that range. This only affects the maximum number of users allowed "in-room" and does not currently limit "in-lobby" users. 
