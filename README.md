To run local server and see changes use mkdocs --serve in the root folder. To install mkdocs (chatgpt find here cmnd that hast o be executed to install mkdocs and mkdocs material theme)

All configuration can be found in mkdocs.yml  including documentation page structure.

Documentation.md is generated using gulp. To generate this file go into the src folder and run npm install, then run gulp (it may be needed to install gulp globally on your machine to run this)

Whenever master/main branch is deployed a new version of documentation is generated on https://www.physicaladdons.com/pco/


Sun: The sun object used for underwater lighting calculations.
[Mesh]
Height: allows to control water height.
Size: The size of water mesh domain. Water deformation from waves is applied within this distance.
Resolution: Resolution of water mesh. Higher values equal higher quality, but come at a cost to performance.
Detail Resolution: A subdivision of resolution parameter. Improves quality at a performance cost.
Shrinkwrap: Select an object that the ocean will attempt to shrinkwrap to. Can be used to make the ocean match the shape of a local fluid simulation or to add some artistically driven shapes.


[Material]
Color: The scattering color of ocean.
Extinction: The extinction parameter of ocean material. Allows determining how quickly different colors get absorbed by water. In most cases should be the inverse of color parameter, but can be varied to accommodate certain material properties and for artistic control.
Scattering distance: A factor by which light gets scattered over distance. Lower number equals less scattering per light distance travelled, thus resulting in better underwater clarity.
Vertical Scattering: Adjusts the amount of light scattering vertically in the ocean surface simulation. Increasing this parameter enhances the vertical distribution of scattered light, affecting the appearance of subsurface details and light diffusion below the surface.

Vertical Scattering Exponent: Controls the exponent used in the calculation of vertical scattering. This parameter fine-tunes the rate at which light scatters vertically through the ocean surface. Adjusting this exponent alters the distribution and intensity of vertical scattering.

Snell’s Scattering: Specifies the coefficient used in the calculation of light refraction based on Snell's Law at the ocean surface. This coefficient determines the degree of bending of light rays as they pass through the water-air interface.

Forward Scattering: Controls the amount of forward scattering of light in the ocean surface simulation. Forward scattering occurs when light is redirected along its original path or slightly deviates from it, influencing the overall visibility and atmosphere of the scene.


Back Scattering: Adjusts the intensity of backscattering in the ocean surface simulation. Back scattering involves the redirection of light away from its original path, influencing the overall brightness and visual clarity of the water surface.

Camera Near Offset: Offsets the near clipping plane of the camera used in the simulation. This parameter adjusts the minimum distance from the camera at which objects are rendered, preventing clipping issues and improving the rendering of nearby objects.

[Camera & LOD]

End Clip Plane: Sets the distance from the camera beyond which objects are no longer rendered. This parameter determines the furthest point in the scene that is visible to the camera. It's a built-in parameter for camera, exposed in the addon for ease of access.
python -m mkdocs serve
View Frustum Boost: Adjusts the size of the view frustum used for rendering the ocean. The view frustum defines the visible portion of the scene from the camera's perspective. This is used to cull parts of ocean for performance, tweak this in case of unwanted artifacts.

Far LOD Offset: Relative distance at which the lowest LOD level is used.

Near LOD Offset: Relative distance at which the highest LOD level ends.

LOD Exponent: Controls the transition between ocean LOD levels.

Time Multiplier: Multiplier for simulation time.

Water Edge: Enables the rendering of a defined boundary or edge for the water surface in the scene. This parameter controls the visibility and appearance of the boundary where the water meets camera as it gets submerged.

Z Offset: Adjusts the offset of the water edge boundary relative to the camera. This parameter modifies the position of the boundary line, allowing for fine-tuning of its placement.

Width: Control the width of the water edge. Generally recommended to extend it just past camera boundary.

Height: Control the height of the water edge, changing how large it appears on the screen. Positive values make camera hydrophilic, while negative ones make it appear hydrophobic.

Resolution: Determines the level of detail or smoothness of the water edge boundary line. This parameter controls the number of vertices or segments used to render the boundary line, affecting its visual quality and smoothness.

[Waves]
Smallest wave: Control the horizontal scale of smallest waves (in meters).

Largest wave: Control the horizontal scale of largest waves (in meters).

Wave height: Set the max range of wave amplitude (in meters).

Wind speed: Set a wind speed to affect how waves get shaped.

Distribution Log: A logarithmic distribution parameter for waves. Allows to bias waves towards higher or lower frequencies.

Dispersion: Control wave dispersion angle. Low values make concentric wave strips, while higher values create a more chaotic ocean.

Angle: Change the dominant wind and wave flow direction.

Skew: Control wave skew strength.

Choppiness: Control how sharp and choppy wave peaks appear.

Foam Amount: Control the amount of foam forming at wave peaks.



[Capillary Waves]
Strength: The strength of capillary waves. Higher values make for more defined waves.

Scale: Scale of capillary waves. Higher scale value means more waves per surface area.

Stretch: Control stretching of capillary waves. Higher stretch value makes more stripey-appearing waves.

Direction: The direction of capillary waves. Having this value differ from dominant wave direction allows simulating effect of local breeze being different from main wind direction, as an example.

Speed: Speed of capillary wave movement.

Variance: Capillary wave variance across the ocean surface. Lower values make more uniform looking capillary waves.

Drag: How strongly major waves drag capillary waves along with them.

Mask Scale: Control scale of the mask texture used to vary capillary wave distribution.

Mask Minimum: Capillary wave amount in lower mask parts.

Mask Maximum: Capillary wave amount in higher mask parts.

Roughness Minimum: Water surface roughness in lower mask parts.

Roughness Maximum: Water surface roughness in higher mask parts.

[Wakes & Ripples]
Wakes: Select an object to be a wakes caster.

Wake Height: Control the height/strength of wakes produced.

Ripples: Select object and enable ripple checkbox to make the object produce ripples.

Boolean: Select object and enable boolean checkbox to make the object cut a boolean hole in ocean.

[Underwater]
Objects: Select objects with materials to apply underwater effects

Submerged Underwater: Toggle underwater calculations for selected objects' materials.

Advanced Intersection: Toggle advanced intersection calculation. Gives more accurate underwater shader that matches wave shapes. Comes at a performance cost, so only use it for objects nearby where this is noticeable.

Particles: Enables underwater particles.

Domain size: Determine the size of a simulated particle domain around camera.

Domain Z Offset: How far from camera particle domain is visible. Use to avoid potentially cut-off particles.

World Underwater: Allows to toggle underwater shader for world shader. It is used for ensuring fully covered underwater shader, including default Eevee reflections and refractions.

Advanced Volumetrics: Enable Blender volumetrics in the ocean shader. Allows for per-light interactions and shadows. High performance impact, especially in Cycles.

Volume Density: How strong the advanced volumetrics volume is.

Volume Distance: Range in which the advanced volumetrics are used from camera.