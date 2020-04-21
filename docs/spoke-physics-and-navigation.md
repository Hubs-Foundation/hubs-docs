---
id: physics-and-navigation
title: Physics and Navigation
---

# The Floorplan Element

The floorplan defines both where you can walk and how interactable objects collide with the scene. It creates a navigation mesh (where you can walk, the blue mesh when you have the floorplan selected) and a collision mesh (what objects collide with, the red or yellow mesh depending if you are using the trimesh or heightfield).

![Description of the Floor Plan Panel's properties](img/FloorPlan.png)


## Navigation Mesh Generation

When you click regenerate and when you publish your scene, Spoke generates a nav mesh by doing the following:

First Spoke combines all the walkable geometry in the scene into one big mesh. Then Spoke voxelizes the mesh. If you've ever seen a Minecraft world, your mesh will be converted into something like a Minecraft landscape. Where the size of the voxels are defined by the cell size and cell width.

If you have a large scene, you'll need a lot of voxels. Sometimes so many voxels that it can crash. So Spoke had the auto cell size checkbox that will try to keep a reasonable number of voxels to work with. You may get good results with it checked, but usually Spoke can get better results by tweaking some of these values. All of the algorithms that determine if you can walk in a certain area are computed against these voxels. So the higher resolution it is, the more it is going to look like your actual scene. For example, if you have a doorway that is 1m wide and your cell size is 0.25m, the width of the door in the voxelized data structure may only be 0.75m, because one of those voxels intersected with the side of the door. All of the other parameters in calculating the floor plan are dependent on the cell size and cell height. So try reducing the cell size to something small like 0.1m and increasing if it refuses to regenerate or takes too long on your computer.

Once you have the cell size and cell height tuned, you can fix various other issues with the other parameters. If you have a walkway that is not accessible you can reduce the agent radius or agent height so that the avatar will fit though the voxelized walkway. If you have a ramp or stairs or hill that you can't climb try adjusting the maximum step height and maximum slope. These parameters control how tall of objects you can walk up and what the maximum slope of the path can be. You may have a series of small areas such as some stepping stones in the middle of a creek that are not walkable because they are too small. The minimum region area controls how small the area can be before it is excluded from the navmesh. Note that the agent radius will also matter here.

Sometimes your mesh will not be very friendly to work with the navmesh generator. In these cases it is recommended to create a custom navmesh in Blender. It can be a simplified mesh that you add as a separate model to your Spoke scene. Mark it as walkable. Then mark the other models that it is taking the place of as not walkable. For smaller fixes to the navmesh you can use the Box Collider to make a walkable area.

## Collision Mesh Generation

For collisions Spoke has two methods of generating a collision mesh. The first is the trimesh, it's a combination of all of the collidable meshes in your scene. If the trimesh is too dense, it can cause performance issues in the collision system. For this reason, Spoke also has the heightfield.

The heightfield divides the scene up into a 2D grid. Looking from above, the heightfield is constructed by finding the height at the center of each cell of the grid. It ends up looking kind of like if you draped a cloth over your environment. It works relatively well for outdoor terrains, but suffers when there are smaller collidable objects, walls, and overhangs. The heightfield cannot create an accurate collision mesh for multi-level scenes. It would only create collision geometry for the top layer of all the collidable geometry in the scene.

Box colliders can also be used in addition to either method. They are simplified colliders that can help a lot when you have a mesh with complex geometry.