---
id: intro-behavior-graphs
title: Introduction to Behavior Graphs
---

> **NOTE:** _Behavior Graphs are an evolving system. This documentation may lag behind the latest feature set. Please contribute edits or examples if you find missing or outdated information._

## What Are Behavior Graphs?

If 3D models represent the **visual appearance** of a Hubs scene, Behavior Graphs define the **interactions** — how things respond, move, react, and change.

They let you build interactive logic inside Blender using a visual editor, without writing code. You connect “blocks” (nodes) like a flowchart to create behaviors. For example:
- A door opens when a player enters a zone
- A lamp turns on when clicked
- A sound plays when someone joins the room

Behavior Graphs expose powerful Hubs-specific features that would normally require modifying the codebase — such as teleporting, audio zones, video playback, and object animations.

![Behavior Graph Example 1](img/BehaviorGraph_Example.png)\
_An example of a simple **Behavior Graph** that moves an object 2 meters each time it's clicked._

Even visual properties — like lighting, colors, and animation speed — can be controlled. This makes your `.glb` models **self-contained**: logic, visuals, and interactivity all bundled together.

> For example, a lamp model could contain all its behavior: on/off toggle, color change, 

The logic involved in setting up these behaviors can be as simple as a video appearing when a button is pressed or as complex as an escape room filled with interdependent puzzles where the whole room animates on cue. Whatever you choose to create, the logic comes from basic (and sometimes familiar) building blocks like _if/then_ statements, variables, and math functions.

In understanding how Behavior Graphs work, it can be helpful to think of the various nodes as simple building blocks. On its own, an individual node is usually pretty simple and doesn’t do very much. But by combining nodes into larger, more complex graphs, the result can be quite sophisticated. This is not unlike programming where basic functions combine to create new, complex systems.

![Behavior Graph node examples](img/BG_NodeExamples.png)\
_A random sampling of Behavior Graph nodes. Each node usually performs a relatively simple function. Combining nodes is how complex interactions are made._

While behavior graphs are not intended to replace code modifications, in some cases it may make more sense than forking the Hubs code base just to create a simple interaction or minor modification to an experience. Behavior graphs also serve artists and designers, many of whom may have very little to no experience with coding, by introducing them to the ways in which the Hubs runtime environment functions.

Behavior Graphs also offer an opportunity to experiment and prototype an idea that might otherwise require a lot of work (forking, coding, building, etc.) only to discover the idea wasn’t viable to begin with. For example, a novel control scheme or an alternative camera view might be attempted with behavior graphs, tested, then later reworked in code after the idea is proven fruitful.

---

# How Behavior Graphs Work

First of all, if you happen to have experience with a visual node-based system such as those within a game engine, you will likely find Behavior Graphs relatively easy to learn. It is worth noting that although the Behavior Graph editor looks similar to Blender's other node-based editors (_Shaders, Compositor, Geometry Nodes_), they have some unique characteristics that are necessary to understand.

This introduction to Behavior Graphs is intended to serve as an overview of the system rather than a step-by-step guide on their use. The following section explains the various parts that comprise Behavior Graphs and how they work together.

# Graph Types

There are conceptually two types of Behavior Graphs, but the distinction has more to do with **how/where they are used** rather than anything functionally different about them.

### Object Graph

**Object Graphs** are the main type you will encounter. An **Object Graph** refers to a Behavior Graph that is placed on a particular **Object** (otherwise known as an **_Entity_**, a term that gets used a lot in the context of graphs).

A single object might have several Behavior Graphs assigned to it. And the same Object Graph might be assigned to multiple objects. Because of this, when using nodes in an Object Graph, there is a concept of **self-reference to the object itself**.

By having a universal **_Self_** value, an Object Graph can act universally on objects. In other words, by referring to **Self**, there is no need to explicitly point to a specific entity (object).

![Object Graph Self Reference](img/BG-ObjGraphSelf.png)\
_Having a built-in **Self** reference means this graph could work when put on any object. Now anything with this graph glows for a moment after clicking it._

Object Graphs can still refer to entities explicitly if you choose. The **Self** reference is there to avoid having to make potentially countless identical graphs with their only difference being which entities they reference.

### Scene Graph

Within the Blender's **Properties Panel**, in the **Scene Tab**, you can add a **Behavior Graph** to the list. This graph would now be referred to as a **Scene Graph** because of where it is located. Any graphs put here operate at the _Scene_ level. Having a scene-level graph allows you to organize the logic between entities in one place.

![Blender's Scene Tab](img/BG-SceneTab.png)\
_The **Scene Tab** in Blender is where you can add **Scene Graphs** if you choose._

The main difference with **Scene Graphs** is that instead of the concept of **Self**, it uses the term **Scene** as a replacement.

Anywhere an Object Graph would have a **Self** reference is replaced by **Scene** for clarity. In cases where this would not make sense, fields will default to the _Entity Type_ called **Other**, where you must explicitly select an entity.

![Object vs. Scene Graph](img/BG-ObjectVsScene.png)\
_On the **Scene Graph**, notice the **Scene** reference replaces the **Self** reference that Object Graphs have._

It doesn't always make sense to use a **Scene Graph** and, in some cases, it can be more flexible to use an object from the scene to act as a 'holder' or container for graphs that handle overarching logic. Each use case is different so experimenting is key. Since you can copy nodes from one graph to another, it's relatively easy to try different approaches to how you organize your logic.

> Side note: **'Graph-based' context**:\
> You will sometimes see a third type of context called **Graph**. This
> exists mostly as a matter of convenience for when you have the need for a Variable or Custom Event (see details below), but you only need to refer to them **within the context of the Behavior Graph they are in**. In this case, you may create a **Graph-based** Variable or Custom Event. This can be done within the **side panel** (hotkey `n`) while inside the **Behavior Graph Editor**. Variables and Custom Events made here will appear in nodes as Entity Type: **Graph** > ![Graph Context](img/BG-GraphContext.png)\
> _Making a Variable within the **Graph context** makes that variable accessible to ONLY the graph it's in. This variable would **not** be exposed to other graphs, even ones on the same object._

### Flow

The core functionality of a Behavior Graph is defined by the **Flow** of information from one node to the next. This **Flow line** is indicated by a **white** wire or connection and always flows (conceptually, anyway) **left to right**.

The Flow line connects the **Flow Input** and **Flow Output** of various nodes. Not every node has these kinds of inputs and outputs so when you see one that does, that indicates the node **performs some kind of _action_ or _operation_.**

![Flow Direction](img/BG-FlowDirection.png)\
*Three nodes connected by a Flow line via **Flow Inputs** and **Flow Outputs**. The data flows from **left to right**. These *Display Notification Message* nodes have **Flow Inputs** because they **do** something.*

Understanding how data flows through the graph is fundamental to designing, understanding, and debugging when things don't go as expected.

Some nodes, specifically referred to as **Flow Nodes** exist solely to handle this flow of information. They often act as a way to branch or otherwise divert the flow of data so that operations occur under certain conditions or at a certain time relative to other operations.

This control over **Flow** allows multiple operations to happen sequentially or in parallel, allowing more complex interactions.

![Branch flow node](img/BG-FlowNode1.png)\
_The `Branch` flow node checks for some **condition** and diverts the flow depending on whether the condition is **true** or **false**._

![Some Flow node examples](img/BG-FlowNodeExamples.png)\
_Some examples of **Flow Nodes**. These tend to have several inputs and outputs and are often used together as the main way to control logic._

A full list of _Flow Nodes_ can be found on the **nodes list document placeholder link**

### Events

A Behavior Graph's Flow line has to start somewhere and that is always some **event**.
An **event** is anything that starts the flow of information. But the most common events are usually prompted by some user's action such as a mouse click or moving into some defined location that acts as a trigger for the **event**.

![Some Event node examples](img/BG-EventNodeExamples.png)\
_Several **Event Nodes**. **Event** nodes start the flow of logic and, thus, usually do not have inputs._

For Hubs, there are some pre-defined events such as when a video starts playing that can be accessed through their own special nodes.

A full list of **Events** can be found on the **Events list document placeholder link**

### Variable Set / Variable Get

Just like in programming with code, it can be helpful (and even necessary) to store information throughout a graph so that you can recall it later for another purpose. For example, you might have a **variable** called _CookiesClicked_ (likely an integer, i.e. a non-decimal number) that you **set** whenever a new user joins.

![Variables list](img/BG-VariablesList.png)\
_A list of **variables** that can be accessed by Behavior Graphs. A **variable** has a **type** that defines how it can be used._

In the example above, storing _CookiesClicked_ would allow you to **get** that **variable** later when you want to display how many people joined or when you need to calculate how many more players you need for something.

So you're often doing a `Variable Set` in one place, while using `Variable Get` somewhere else in the graph--or in a different graph altogether.

And in many common cases, you'll use `Variable Get` in conjunction with `Variable Set` by doing some basic math like in this example image:

![Get/Set Variable](img/BG-VariablesGetSet.png)\
_Follow the numbers to understand the flow of things. This graph is the equivalent of a common programming pattern: `CookiesClicked=CookiesClicked + 1` or the shorter `CookiesClicked += 1`. In other words, whenever the **Cookie is clicked**, it will **add 1** to our integer **variable** called **'CookiesClicked'**._

### Supported Variable Types

The following are supported **Variable Types** and their associated **Input**/**Output socket colors** in Behavior Graphs:

- ![Boolean Pale Purple](img/BG-VarTypes_Boolean.png) Boolean
- ![Float Gray](img/BG-VarTypes_Float.png) Float
- ![FInteger Dark Green](img/BG-VarTypes_Integer.png) Integer
- ![String Sky blue](img/BG-VarTypes_String.png) String
- ![Vector3 Purple](img/BG-VarTypes_Vector3.png) Vector3
- ![AnimationAction Cyan](img/BG-VarTypes_AnimationAction.png) Animation Action
- ![Entity Green](img/BG-VarTypes_Entity.png) Entity
- ![Color Yellow](img/BG-VarTypes_Color.png) Color
- ![Material Pale Red](img/BG-VarTypes_Material.png) Material

Details about specific variable types can be found on the **Variable Types document placeholder link**

Each **Variable Type** has a color associated with its **Inputs** and **Outputs**

### Get / Set Component Property

For objects that have Hubs components attached to them, there are a couple nodes that allow you to operate on a component called `Get Component Property` and `Set Component Property`.\
These nodes are useful because they universally give you access to most editable components without the need for individual unique nodes that would only serve a single function. It also means that any new components that get added to the system can be accessed the same way.
### Getting and Setting Component Properties

When you add a component to an object — such as **Rigidbody** — you can access its properties using the `Get Component Property` and `Set Component Property` nodes.

![Get/Set Component Properties](img/BG-GetSetComponents.png)\
_Example: A Rigidbody component's “Mass” property is exposed through the `Get/Set Component Property` nodes._

Without this system, you'd need separate nodes for each property (like `Get Mass`, `Get Body Type`, etc.). That could quickly clutter your graph. By using generalized nodes that adapt based on the component, Behavior Graphs stay cleaner and easier to manage — especially as more properties and components are added.

---

### Utility Nodes: Working with Data

Many nodes in Behavior Graphs don't perform actions by themselves — instead, they help manage **data**. These include Math nodes, logic comparisons, and variable manipulation.

For example, the `Add` node simply adds two values — but it won’t do anything until another node (like `Set Variable`) calls for its result.

![Get/Set Variable](img/BG-OtherNodes.png)\
_Example: A Math `Add` node passes its result into a `Set Variable` node when triggered._

---

### 🔁 Custom Events

Custom Events are a way to create your own triggers and pass data between parts of your graph — or even across different objects.

Let’s say you want to trigger a “win” event that not only fires when someone wins, but also passes:
- The player's name
- Their team color

That’s where **Parameters** come in — data you can send along with a Custom Event.

![Custom Events List](img/BG-CustomEventsList.png)\
_Example: A `SomebodyWon` event with parameters `PlayerName` and `TeamColor`._

To trigger a Custom Event, use a `Trigger` node. The event’s parameters appear as inputs.

![Custom Event Trigger](img/BG-CustomEventTrigger.png)\
_Triggering `SomebodyWon`, passing `PlayerName` and `TeamColor`._

Then, somewhere else in your graph, use an `On Trigger` node to respond to that event. The parameters show up as **outputs** — you can feed them into other actions, like setting text or colors.

![On Trigger event](img/BG-CustomEventOnTrigger.png)\
_When `SomebodyWon` is triggered, the graph updates a text label to show the winner’s name and apply the team color._

This system gives you a powerful, modular way to manage events and share context across objects or logic flows.

---
## 🛠 Working with Behavior Graphs in Blender

### 📐 Opening the Behavior Graph Editor

Behavior Graphs are edited in Blender through the **Behavior Graph Editor**, a dedicated node editor similar to the Shader or Geometry Node editors.

You can open it by changing the editor type in any Blender window:

![Behavior Graph Editor Access](img/BG-EditorAccess.png)\
_Select **Behavior Graph Editor** from the dropdown in any Blender panel._

---

### ➕ Creating a New Behavior Graph

Before adding nodes, you’ll need to create a new graph and attach it to an object in your scene.

#### Two ways to create a Behavior Graph:
1. **Select an object**, open the Behavior Graph Editor, and click `New`.
   ![New Behavior Graph, method 1](img/BG-NewButton.png)

2. Or go to the object’s **Object Properties** panel → scroll to **Behavior Graph** → click `New`.
   ![New Behavior Graph, method 2](img/BG-PropertiesNewGraph.png)

Once created, a graph can be reassigned to other objects using the **Browse Node Tree** button.

![Assign Behavior Graph](img/BG-AssignGraph.png)\
_You can reuse or switch graphs on different objects using this dropdown._

Graphs can also be renamed by clicking their name. **Meaningful names help keep large projects organized.**

> 🧠 Tip: A single object can have **multiple Behavior Graphs**. One might handle visuals (like material changes), another motion, and a third for input events. Keeping responsibilities separated like this avoids complex, tangled logic.

---

### 🧱 Adding and Editing Nodes

Once a graph is active, you can add nodes via the `Add` menu or with `Shift + A`.

![Adding a Node](img/BG-AddNode.png)\
_Choose node types from the **Add** menu._

> ⚠️ Node lists may evolve — for example, the many current Math nodes could be consolidated in the future.

---

### ✏️ Manipulating Nodes

- **Move**: Drag nodes freely in the canvas  
- **Resize**: Pull node edges to expand/shrink, helpful for long names  
- **Select multiple**: Use `Shift + click` or drag a box  
- **Arrange**: Use rotate/scale to reposition clusters  
- **Recenter**: Press `A` to select all → **View > Frame Selected** or **Frame All**

To delete, press `X`. Cut/copy/paste works with standard shortcuts.

---

### ⚠️ Known Editor Gotchas

> ✅ Here are some quirks you might encounter in the current BG editor:

- **Deleting a node** also removes its connected wires
- Pressing `M` **mutes visually** — but does **not** disable functionality
- **Wires may attach to wrong sockets** (e.g., Flow line to Float input) — this can cause export/runtime bugs
- **Disconnected Reroute nodes** can cause silent errors
- **Missing inputs/outputs** on nodes (especially for Variables/Events)? Try deleting + re-adding, or changing one dropdown temporarily to refresh
