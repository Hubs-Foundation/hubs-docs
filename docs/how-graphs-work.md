---
id: how-graphs-work
title: How Behavior Graphs Work
description: Details on using Behavior Graphs.
---

First of all, if you happen to have experience with a visual node-based system such as those within a game engine, you will likely find Behavior Graphs relatively easy to learn. It is worth noting that although the Behavior Graph editor looks similar to Blender's other node-based editors (*Shaders, Compositor, Geometry Nodes*), they have some unique characteristics that are necessary to understand.

This introduction to Behavior Graphs is intended to serve as an overview of the system rather than a step-by-step guide on their use. The following section explains the various parts that comprise Behavior Graphs and how they work together.

## Graph Types

There are conceptually two types of Behavior Graphs, but the distinction has more to do with **how/where they are used** rather than anything functionally different about them.

### Object Graph

**Object Graphs** are the main type you will encounter. An **Object Graph** refers to a Behavior Graph that is placed on a particular **Object** (otherwise known as an ***Entity***, a term that gets used a lot in the context of graphs).

A single object might have several Behavior Graphs assigned to it. And the same Object Graph might be assigned to multiple objects. Because of this, when using nodes in an Object Graph, there is a concept of **self-reference to the object itself**.

By having a universal ***Self*** value, an Object Graph can act universally on objects. In other words, by referring to **Self**, there is no need to explicitly point to a specific entity (object).

![Object Graph Self Reference](/img/BG-ObjGraphSelf.png)\
*Having a built-in **Self** reference means this graph could work when put on any object. Now anything with this graph glows for a moment after clicking it.*

Object Graphs can still refer to entities explicitly if you choose. The **Self** reference is there to avoid having to make potentially countless identical graphs with their only difference being which entities they reference.


### Scene Graph

Within the Blender's **Properties Panel**, in the **Scene Tab**, you can add a **Behavior Graph** to the list. This graph would now be referred to as a **Scene Graph** because of where it is located. Any graphs put here operate at the *Scene* level. Having a scene-level graph allows you to organize the logic between entities in one place.

![Blender's Scene Tab](/img/BG-SceneTab.png)\
*The **Scene Tab** in Blender is where you can add **Scene Graphs** if you choose.*

The main difference with **Scene Graphs** is that instead of the concept of **Self**, it uses the term **Scene** as a replacement. 

Anywhere an Object Graph would have a **Self** reference is replaced by **Scene** for clarity. In cases where this would not make sense, fields will default to the *Entity Type* called **Other**, where you must explicitly select an entity.

![Object vs. Scene Graph](/img/BG-ObjectVsScene.png)\
*On the **Scene Graph**, notice the **Scene** reference replaces the **Self** reference that Object Graphs have.*

It doesn't always make sense to use a **Scene Graph** and, in some cases, it can be more flexible to use an object from the scene to act as a 'holder' or container for graphs that handle overarching logic. Each use case is different so experimenting is key. Since you can copy nodes from one graph to another, it's relatively easy to try different approaches to how you organize your logic.

> Side note: **'Graph-based' context**:\
You will sometimes see a third type of context called **Graph**. This
exists mostly as a matter of convenience for when you have the need for a Variable or Custom Event (see details below), but you only need to refer to them **within the context of the Behavior Graph they are in**. In this case, you may create a **Graph-based** Variable or Custom Event. This can be done within the **side panel** (hotkey `n`) while inside the **Behavior Graph Editor**. Variables and Custom Events made here will appear in nodes as Entity Type: **Graph**
![Graph Context](/img/BG-GraphContext.png)\
*Making a Variable within the **Graph context** makes that variable accessible to ONLY the graph it's in. This variable would **not** be exposed to other graphs, even ones on the same object.*


### Flow

The core functionality of a Behavior Graph is defined by the **Flow** of information from one node to the next. This **Flow line** is indicated by a **white** wire or connection and always flows (conceptually, anyway) **left to right**. 

The Flow line connects the **Flow Input** and **Flow Output** of various nodes. Not every node has these kinds of inputs and outputs so when you see one that does, that indicates the node **performs some kind of *action* or *operation*.** 

![Flow Direction](/img/BG-FlowDirection.png)\
*Three nodes connected by a Flow line via **Flow Inputs** and **Flow Outputs**. The data flows from **left to right**. These *Display Notification Message* nodes have **Flow Inputs** because they **do** something.*

Understanding how data flows through the graph is fundamental to designing, understanding, and debugging when things don't go as expected. 

Some nodes, specifically referred to as **Flow Nodes** exist solely to handle this flow of information. They often act as a way to branch or otherwise divert the flow of data so that operations occur under certain conditions or at a certain time relative to other operations.

This control over **Flow** allows multiple operations to happen sequentially or in parallel, allowing more complex interactions.

![Branch flow node](/img/BG-FlowNode1.png)\
*The `Branch` flow node checks for some **condition** and diverts the flow depending on whether the condition is **true** or **false**.*

![Some Flow node examples](/img/BG-FlowNodeExamples.png)\
*Some examples of **Flow Nodes**. These tend to have several inputs and outputs and are often used together as the main way to control logic.*

A full list of *Flow Nodes* can be found on the **nodes list document placeholder link**

### Events

A Behavior Graph's Flow line has to start somewhere and that is always some **event**.
An **event** is anything that starts the flow of information. But the most common events are usually prompted by some user's action such as a mouse click or moving into some defined location that acts as a trigger for the **event**.

![Some Event node examples](/img/BG-EventNodeExamples.png)\
*Several **Event Nodes**. **Event** nodes start the flow of logic and, thus, usually do not have inputs.*

For Hubs, there are some pre-defined events such as when a video starts playing that can be accessed through their own special nodes.

A full list of **Events** can be found on the **Events list document placeholder link**

### Variable Set / Variable Get

Just like in programming with code, it can be helpful (and even necessary) to store information throughout a graph so that you can recall it later for another purpose. For example, you might have a **variable** called *CookiesClicked* (likely an integer, i.e. a non-decimal number) that you **set** whenever a new user joins. 

![Variables list](/img/BG-VariablesList.png)\
*A list of **variables** that can be accessed by Behavior Graphs. A **variable** has a **type** that defines how it can be used.*

In the example above, storing *CookiesClicked* would allow you to **get** that **variable** later when you want to display how many people joined or when you need to calculate how many more players you need for something.

So you're often doing a `Variable Set` in one place, while using `Variable Get` somewhere else in the graph--or in a different graph altogether.

And in many common cases, you'll use `Variable Get` in conjunction with `Variable Set` by doing some basic math like in this example image:

![Get/Set Variable](/img/BG-VariablesGetSet.png)\
*Follow the numbers to understand the flow of things. This graph is the equivalent of a common programming pattern:  `CookiesClicked=CookiesClicked + 1` or the shorter `CookiesClicked += 1`. In other words, whenever the **Cookie is clicked**, it will **add 1** to our integer **variable** called **'CookiesClicked'**.*

### Supported Variable Types

The following are supported **Variable Types** and their associated **Input**/**Output socket colors** in Behavior Graphs:

* ![Boolean Pale Purple](/img/BG-VarTypes_Boolean.png) Boolean
* ![Float Gray](/img/BG-VarTypes_Float.png) Float
* ![FInteger Dark Green](/img/BG-VarTypes_Integer.png) Integer
* ![String Sky blue](/img/BG-VarTypes_String.png) String
* ![Vector3 Purple](/img/BG-VarTypes_Vector3.png) Vector3
* ![AnimationAction Cyan](/img/BG-VarTypes_AnimationAction.png) Animation Action
* ![Entity Green](/img/BG-VarTypes_Entity.png) Entity
* ![Color Yellow](/img/BG-VarTypes_Color.png) Color
* ![Material Pale Red](/img/BG-VarTypes_Material.png) Material

Details about specific variable types can be found on the **Variable Types document placeholder link**

Each **Variable Type** has a color associated with its **Inputs** and **Outputs**



### Get / Set Component Property

For objects that have Hubs components attached to them, there are a couple nodes that allow you to operate on a component called `Get Component Property` and `Set Component Property`.\
These nodes are useful because they universally give you access to most editable components without the need for individual unique nodes that would only serve a single function. It also means that any new components that get added to the system can be accessed the same way.

![Get/Set Component Properties](/img/BG-GetSetComponents.png)\
*When you add a component to an object, such as the **Rigidbody** component, it can be accessed from the `Get Component Property` and `Set Component Property` nodes. The fields automatically populate with whatever data is exposed in the component, in this case, **Mass**.*

In the above example, you can imagine how cumbersome it might be to have separate nodes for all of those rigidbody properties--(*Get Mass, Get Body Type, Get Gravity, etc...*). That list alone contains 11 different properties (with more to come!) Having a universal way to access Hubs components helps keep graphs from becoming a tangled mess as well.

### Other node types

Most nodes don't actually **do** anything on their own, hence their lack of **Flow Inputs**/**Outputs**. What they have, instead, are inputs and outputs related to the *type of data* they work with.

For example, let's take one of the *Math* nodes as an example, in this case, `Add`. 

The `Add` node, relies on the attached nodes to operate. So it's not until `Variable Set` is triggered that the `Add` does its operation, when `Variable Set` is looking for an *input* value.

![Get/Set Variable](/img/BG-OtherNodes.png)\
*Many nodes, such as the various **Math** nodes act as a utility to do calculations or otherwise manipulate data.*

### Custom Events

Sometimes, while triggering things to happen within a graph or between graphs, it can be useful to create a **Custom Event**. A **Custom Event** is just a signal that acts like a trigger to start a flow of logic. These can also have **Parameters** attached to them so that you can send data along with the **Custom Event**.\
For example, you might have a clickable object where you not only want to know *when* it was clicked, but also *who clicked it*. The player data could be sent along with the **Custom Event** so that it can be passed along to some other node(s).

![Custom Events List](/img/BG-CustomEventsList.png)\
*Here, we have a **Custom Event** called *'SomebodyWon'* that has two parameters, *'PlayerName'* and *'TeamColor'*.* 

In a Behavior Graph, a `Trigger` node lets you trigger the **Custom Event** and input any **Parameters** you want to pass along with the event.

![Custom Event Trigger](/img/BG-CustomEventTrigger.png)\
*A `Trigger` node showing a **Custom Event** called *'SomebodyWon'*. The two **Parameters** ('PlayerName' and 'TeamColor') show up as inputs on the `Trigger` node.*

Elsewhere, you can use an `On Trigger` event to initiate some new flow of logic where you use the **Parameters** for other things. In this example, we've passed along *'PlayerName'* and *'TeamColor'* with our *'SomebodyWon'* **Custom Event**.

![On Trigger event](/img/BG-CustomEventOnTrigger.png)\
*An `On Trigger` event node using our 'SomebodyWon' **Custom Event** and its **Parameters** to set the **Color** and **Text** properties of a Text component. (A **Concat** node is used to append ' is the winner!' to the user's PlayerName before it gets displayed at text.)*

In the image above, you can see how the **Parameters** show up as *outputs* on the `On Trigger` node. In the example, the *'TextColor'* is used to set the color of a Text component while *'PlayerName'* is used to set the Text component's *'Text'* property.

---

## Working with Behavior Graphs

### Behavior Graph Editor

Behavior Graphs have their own editor in Blender, unsurprisingly called the **Behavior Graph Editor**. This editor can be accessed from any window by using the **Editor Type** button found in the upper left of most windows in Blender:

![Behavior Graph Editor Access](/img/BG-EditorAccess.png)\
*The **Behavior Graph Editor** can occupy most windows in Blender by changing the **Editor Type** in the menu where all the other editors are accessed.*

The **Behavior Graph Editor** works similarly to other node-based editors in Blender such as the *Shader Editor* or the *Geometry Node Editor*.

The editor doesn't allow you to do much of anything until you **create a new Behavior Graph**. This is done by:

First **selecting some object in your scene**, then either:
  1. Pressing the **New** button at the top center of the **Behavior Graph Editor**

  ![New Behavior Graph, method 1](/img/BG-NewButton.png)\
 **-OR-**
  2. Opening the **Object Properties**, going to the **Object** tab, scrolling to the **Behavior Graph** section and clicking the **New** button.
  ![New Behavior Graph, method 2](/img/BG-PropertiesNewGraph.png)\


Once a **Behavior Graph** is created, it can be assigned to other objects (or changed to a different graph) as well via the **Browse Node Tree** button, usually found next to wherever graphs are listed.

![Assign Behavior Graph](/img/BG-AssignGraph.png)\
*Behavior Graphs can be assigned to new objects, or changed to a different graph.*


The **Behavior Graph** can be renamed by clicking on its name in most fields where it appears. Making meaningful names for graphs is essential for keeping things organized.

**A single object can have multiple Behavior Graphs assigned to it.** This helps when organizing the structure of your logic so that various functions can be more modular in their design. For example, an object might have one graph that handles visual changes (like a material color) while another graph on the object handles the object's movement. You might then have another graph that handles input events that the other graphs listen for. Keeping functionality separate can avoid confusion and dependency problems.

> Knowing when to separate functions into separate behavior graphs requires some experimentation since, like text-based programming or scripting, there are many valid ways to organize code. But as you experiment you will likely find intuitive design patterns that tend to get repeated.
For example, making use of the *'Self'* context of nodes to make behaviors that are universal no matter what kind of object they are applied to.

### Adding/Deleting Nodes

Once a **Behavior Graph** has been created, nodes can be created by using the **Add** menu (or the typical `Shift`+`a` shortcut).


![Adding a Node](/img/BG-AddNode.png)\
*A list of **node types** appears when using the **Add** menu.*

>**NOTE:** *The node types may likely change over time as the Behavior Graph system matures. For example, all of the many *Math* nodes may end up being consolidated into a single, universal *Math* node. This is important to remember if you see something missing that was once in this list.*

### Manipulating Nodes

Nodes can be moved around using the typical Blender controls for similar editors, namely the *move* tool.

Nodes may also be resized by dragging their edges, which you may find useful when using long object or variable names that might be difficult to read when a node is small.

Muitple nodes can be selected at once by `Shift`-clicking or by dragging a selection box around them. The selection tools are found in the *Tools* menu, by pressing `t` in the editor. 

When selecting multiple nodes simultaneously, you may also use *rotate* and *scale* to maniuplate their juxtapositions to one another. These are often overlooked but can help to 'spread out' nodes that are clustered too closely to decipher easily.

Since the editor itself is a sort of 'infinite canvas', nodes can get lost fairly easily. Pressing `a` to select all nodes, then **Frame Selected** from the **View** menu to focus on them helps to reorient your view. You may also use **Frame All** from the same menu.

To **delete a node**, you can select the node(s) and press `x`.

Nodes may also be **cut**, **copied**, and **pasted** using standard hotkeys.


> ### **THINGS TO LOOK OUT FOR:** 
  * Deleting a node that is connected to other nodes will sever any and all connections.
  * Pressing `m` on a node to **mute** as other editors allow does *not* actually stop the node from activating. In other words, it only provides a visual 'mute' in the editor but not at export or runtime. There are currently no plans to support 'muting' but that may change.
  * Sometimes node wires, especially **Flow** lines can get attached to the wrong inputs on a node, such as a *float* or *entity* input. This will cause errors on export, but not always. This is considered a bug and will hopefully be fixed in the near future.
  * **Flow** lines that are connected to *Reroute* nodes and nothing else (aka, a disconnected flow line) will cause errors on export and/or runtime.
  * If a node ever appears to be missing some input or output, especially when using Custom Events or Variables, you can usually correct it by remaking the node or by changing one of its fields temporarily until the inputs/outputs show up again. This is a bug that will hopefully get fixed in the near future.
