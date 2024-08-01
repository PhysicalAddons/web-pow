

!!! tip ""
    Hey👋, first time here? You can find the installation guide and first run in the [getting started](/pow/getting-started/) section.

* [Mesh](#mesh)
* [Material](#material)
* [Camera & LOD](#camera-lod)
* [Waves](#waves)
* [Capillary Waves](#capillary-waves)
* [Wakes & Ripples](#wakes-ripples)
* [Underwater](#underwater)



## <span class="twemoji"><svg height="1600" viewBox="0 0 1600 1600" width="1600" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview pagecolor="#303030" showgrid="true" fill="#000000"><inkscape:grid id="grid5" units="px" spacingx="100" spacingy="100" color="#4772b3" opacity="0.2" visible="true" fill="#000000"/></sodipodi:namedview><g fill="#fff"><g enable-background="new" transform="matrix(100 0 0 100 -10998.34 -38804.785)"><path d="m111.4668 389a.50005.50005 0 0 0 -.5.5v13.0957a.50005.50005 0 0 0 .5.5h13.0332a.50005.50005 0 0 0 .5-.5v-13.0957a.50005.50005 0 0 0 -.5-.5zm.5 1h12.0332v12.0957h-12.0332z" fill="#000000"/><path d="m115.49219 390.99219a.50005.50005 0 0 0 -.49219.50781v1.5h-1.5a.50005.50005 0 1 0 0 1h1.5v4h-1.5a.50005.50005 0 1 0 0 1h1.5v1.5a.50005.50005 0 1 0 1 0v-1.5h4v1.5a.50005.50005 0 1 0 1 0v-1.5h1.5a.50005.50005 0 1 0 0-1h-1.5v-4h1.5a.50005.50005 0 1 0 0-1h-1.5v-1.5a.50005.50005 0 1 0 -1 0v1.5h-4v-1.5a.50005.50005 0 0 0 -.50781-.50781zm.50781 3.00781h4v4h-4z" opacity=".8" fill="#000000"/></g></g></svg></span> Mesh

### Height
<div class="parameter">
    <div class="parameter__info">
        <span>Allows to control water height.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Size
<div class="parameter">
    <div class="parameter__info">
        <span>The size of the water mesh domain.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Water deformation from waves is applied within this distance.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Resolution
<div class="parameter">
    <div class="parameter__info">
        <span>Resolution of water mesh.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Higher values equal higher quality but come at a cost to performance.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Detail Resolution
<div class="parameter">
    <div class="parameter__info">
        <span>A subdivision of resolution parameter.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Improves quality at a performance cost.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Shrinkwrap
<div class="parameter">
    <div class="parameter__info">
        <span>Select an object that the ocean will attempt to shrinkwrap to.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Can be used to make the ocean match the shape of a local fluid simulation or to add some artistically driven shapes.</span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg height="1600" viewBox="0 0 1600 1600" width="1600" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview pagecolor="#303030" showgrid="true" fill="#000000"><inkscape:grid id="grid5" units="px" spacingx="100" spacingy="100" color="#4772b3" opacity="0.2" visible="true" fill="#000000"/></sodipodi:namedview><g fill="#fff"><path d="m34 557c-3.860079 0-7 3.13992-7 7s3.139921 7 7 7 7-3.13992 7-7-3.139921-7-7-7zm0 1c3.305801 0 5.975833 2.65852 5.998047 5.95898-1.111503.94364-3.002682 2.04102-5.998047 2.04102v4c-3.319633 0-6-2.68037-6-6 0-.0145.0019-.0285.002-.043 1.111203.94401 3.000992 2.043 5.998 2.043z" transform="matrix(99.999620512 0 0 99.999620512 -2599.9870308 -55599.7860024)" fill="#000000"/></g></svg></span> Material

### Type
<div class="parameter">
    <div class="parameter__info">
        <span>A choice between Refractive and Subsurface scatter.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Refractive material uses more a complex shader, that can potentially be slower but gives more realistic results. It includes light refraction and dispersion effects. Subsurface material uses a simple subsurface shader to approximate underwater color and light scattering.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Color
<div class="parameter">
    <div class="parameter__info">
        <span>The scattering color of the ocean.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"> Adjusting the ocean color helps achieve the desired visual effect for different types of water bodies, from clear tropical waters to deep, murky seas.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Extinction
<div class="parameter">
    <div class="parameter__info">
        <span>The extinction parameter of ocean material. Determines how quickly different colors get absorbed by water.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">In most cases should be the inverse of the color parameter, but can be varied to accommodate certain material properties and for artistic control.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Scattering distance
<div class="parameter">
    <div class="parameter__info">
        <span>A factor by which light gets scattered over distance.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Lower number equals less scattering per light distance traveled, thus resulting in better underwater clarity.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Vertical Scattering
<div class="parameter">
    <div class="parameter__info">
        <span>Adjusts the amount of light scattering vertically in the ocean surface simulation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Increasing this parameter enhances the vertical distribution of scattered light, affecting the appearance of subsurface details and light diffusion below the surface.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Vertical Scattering Exponent
<div class="parameter">
    <div class="parameter__info">
        <span>Controls the exponent used in the calculation of vertical scattering.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter fine-tunes the rate at which light scatters vertically through the ocean surface. Adjusting this exponent alters the distribution and intensity of vertical scattering.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Snell’s Scattering
<div class="parameter">
    <div class="parameter__info">
        <span>Specifies the coefficient used in the calculation of light refraction based on Snell’s Law at the ocean surface.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This coefficient determines the degree of bending of light rays as they pass through the water-air interface.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Forward Scattering
<div class="parameter">
    <div class="parameter__info">
        <span>Controls the amount of forward scattering of light in the ocean surface simulation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Forward scattering occurs when light is redirected along its original path or slightly deviates from it, influencing the overall visibility and atmosphere of the scene.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Back Scattering
<div class="parameter">
    <div class="parameter__info">
        <span>Adjusts the intensity of backscattering in the ocean surface simulation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Back scattering involves the redirection of light away from its original path, influencing the overall brightness and visual clarity of the water surface.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Reflection IOR
<div class="parameter">
    <div class="parameter__info">
        <span>Index of refraction for ocean reflections.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Affects reflectivity and more perpendicular view angles to the surface. Higher IOR generally gives a more reflective surface. Most commonly will match with Refraction IOR.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Refraction IOR
<div class="parameter">
    <div class="parameter__info">
        <span>Index of refraction for ocean refractions.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Affects how much light gets refracted. Higher values cause larger refractive distortion when looking at objects underwater.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Refraction Dispersion
<div class="parameter">
    <div class="parameter__info">
        <span>Amount of dispersion in the material.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Allows tweaking the amount of dispersion. Larger values cause larger chromatic fringing around the edges of refracted objects. At a value of 0, no dispersion effects will be seen.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Reflection Fresnel Boost
<div class="parameter">
    <div class="parameter__info">
        <span>Fresnel boost for improving the look of reflections when using a plane reflection probe.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">When using a plane reflection probe, the reflections may look off. Use this to tweak them and make them look more in line with other reflection techniques.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Camera Near Offset
<div class="parameter">
    <div class="parameter__info">
        <span>Offsets the near-clipping plane of the camera used in the simulation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter adjusts the minimum distance from the camera at which objects are rendered, preventing clipping issues and improving the rendering of nearby objects.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Subsurface Scale
<div class="parameter">
    <div class="parameter__info">
        <span>The scale factor for scattering radius.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Determines how deep the light scattering penetrates the surface, affecting the softness of scattered light.</span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg height="1800" viewBox="0 0 1800 1800" width="1800" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview pagecolor="#303030" showgrid="true" fill="#000000"><inkscape:grid id="grid5" units="px" spacingx="100" spacingy="100" color="#4772b3" opacity="0.2" visible="true" fill="#000000"/></sodipodi:namedview><g fill="#fff"><path d="m498.5 10c-2.1397 0-3.80728 1.4725-4.33008 3.2441-.6497-.7477-1.51052-1.2441-2.66992-1.2441-1.9271 0-3.5 1.5729-3.5 3.5 0 1.927 1.5729 3.5 3.5 3.5h7c2.4794 0 4.5-2.0207 4.5-4.5 0-2.4794-2.0206-4.5-4.5-4.5zm0 3c.8225 0 1.5.6774 1.5 1.5 0 .8225-.6775 1.5-1.5 1.5s-1.5-.6775-1.5-1.5c0-.8226.6775-1.5 1.5-1.5zm-7 1c.8225 0 1.5.6774 1.5 1.5 0 .8225-.6775 1.5-1.5 1.5s-1.5-.6775-1.5-1.5c0-.8226.6775-1.5 1.5-1.5zm7 0c-.2821 0-.5.2179-.5.5 0 .282.2179.5.5.5s.5-.218.5-.5c0-.2821-.2179-.5-.5-.5zm-7 1c-.2821 0-.5.2179-.5.5 0 .282.2179.5.5.5s.5-.218.5-.5c0-.2821-.2179-.5-.5-.5zm1 5c-.2761 0-.5.2239-.5.5v1 .5h-1v-.5c.004-.2823-.22555-.5122-.50781-.5078-.27615 0-.49651.2316-.49219.5078v1 1c.009.6573.9907.6573 1 0v-.5h1v.5 1c0 .1326.053.2597.14648.3535l1 1c.094.094.22092.1465.35352.1465h5c.2761 0 .5-.2239.5-.5v-5c0-.2761-.2239-.5-.5-.5zm10.98438 1c-.0871 0-.17191.028-.2461.074l-3.25 2c-.31714.1953-.31714.6563 0 .8516l3.25 2c.33298.2045.76131-.035.76172-.4258v-4c.00011-.2823-.23341-.5088-.51562-.5z" transform="matrix(100 0 0 100 -48699.99999999999 -900.015)" fill="#000000"/></g></svg></span> Camera & LOD

### Camera
<div class="parameter">
    <div class="parameter__info">
        <span>Current camera object used by the addon.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The camera is mandatory for the addon to work properly.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### End Clip Plane
<div class="parameter">
    <div class="parameter__info">
        <span>Sets the distance from the camera beyond which objects are no longer rendered.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter determines the furthest point in the scene that is visible to the camera. It’s a built-in parameter for the camera, exposed in the add-on for ease of access.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### View Frustum Boost
<div class="parameter">
    <div class="parameter__info">
        <span>Adjusts the size of the view frustum used for rendering the ocean.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The view frustum defines the visible portion of the scene from the camera’s perspective. This is used to cull parts of the ocean for performance, tweak this in case of unwanted artifacts.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Far LOD Offset
<div class="parameter">
    <div class="parameter__info">
        <span>Relative distance at which the lowest LOD level is used.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Near LOD Offset
<div class="parameter">
    <div class="parameter__info">
        <span>Relative distance at which the highest LOD level ends.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### LOD Exponent
<div class="parameter">
    <div class="parameter__info">
        <span>Controls the transition between ocean LOD levels.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Time Multiplier
<div class="parameter">
    <div class="parameter__info">
        <span>The multiplier for simulation time.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Water Edge
<div class="parameter">
    <div class="parameter__info">
        <span>Enables the rendering of a defined boundary or edge for the water surface in the scene.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter controls the visibility and appearance of the boundary where the water meets the camera as it gets submerged.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Z Offset
<div class="parameter">
    <div class="parameter__info">
        <span>Adjusts the offset of the water edge boundary relative to the camera. </span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter modifies the position of the boundary line, allowing for fine-tuning of its placement.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Width
<div class="parameter">
    <div class="parameter__info">
        <span>Control the width of the water edge. Generally recommended to extend it just past the camera boundary.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Height
<div class="parameter">
    <div class="parameter__info">
        <span>Control the height of the water edge, changing how large it appears on the screen.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Positive values make the camera hydrophilic, while negative ones make it appear hydrophobic.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Resolution
<div class="parameter">
    <div class="parameter__info">
        <span>Determines the level of detail or smoothness of the water edge boundary line.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter controls the number of vertices or segments used to render the boundary line, affecting its visual quality and smoothness.</span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg height="1500" viewBox="0 0 1600 1500" width="1600" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview pagecolor="#303030" showgrid="true" fill="#000000"><inkscape:grid id="grid5" units="px" spacingx="100" spacingy="100" color="#4772b3" opacity="0.2" visible="true" fill="#000000"/></sodipodi:namedview><g fill="#fff"><path d="m219.50391 243a.50005.50005 0 0 0 -.45118.27734c-.67049 1.34099-1.7194 1.72266-2.55273 1.72266a.50005.50005 0 1 0 0 1c1.00319 0 2.15225-.6005 3-1.7832.82397 1.14952 1.9314 1.74461 2.91406 1.77734a.50005.50005 0 0 0 .002 0 .50005.50005 0 0 0 .084.006.50005.50005 0 0 0 .0996-.008c.97927-.0378 2.08023-.63118 2.90039-1.77539.84775 1.1827 1.99681 1.7832 3 1.7832a.50005.50005 0 1 0 0-1c-.83333 0-1.88224-.38167-2.55273-1.72266a.50005.50005 0 0 0 -.44341-.27729.50005.50005 0 0 0 -.45118.27734c-.67049 1.34099-1.7194 1.72266-2.55273 1.72266s-1.88224-.38167-2.55273-1.72266a.50005.50005 0 0 0 -.44336-.27734zm1 5a.50005.50005 0 0 0 -.45118.27734c-.67049 1.34099-1.7194 1.72266-2.55273 1.72266a.50005.50005 0 1 0 0 1c1.00319 0 2.15225-.6005 3-1.7832.82397 1.14952 1.9314 1.74461 2.91406 1.77734a.50005.50005 0 0 0 .002 0 .50005.50005 0 0 0 .084.006.50005.50005 0 0 0 .0859-.006.50005.50005 0 0 0 .0137-.002c.97927-.0378 2.08023-.63118 2.90039-1.77539.84775 1.1827 1.99681 1.7832 3 1.7832a.50005.50005 0 1 0 0-1c-.83333 0-1.88224-.38167-2.55273-1.72266a.50005.50005 0 0 0 -.44341-.27729.50005.50005 0 0 0 -.45118.27734c-.67049 1.34099-1.7194 1.72266-2.55273 1.72266s-1.88224-.38167-2.55273-1.72266a.50005.50005 0 0 0 -.44336-.27734zm-1 5a.50005.50005 0 0 0 -.45118.27734c-.67049 1.34099-1.7194 1.72266-2.55273 1.72266a.50005.50005 0 1 0 0 1c1.00319 0 2.15225-.6005 3-1.7832.82397 1.14952 1.9314 1.74461 2.91406 1.77734a.50005.50005 0 0 0 .002 0 .50005.50005 0 0 0 .084.006.50005.50005 0 0 0 .0996-.008c.97927-.0378 2.08023-.63118 2.90039-1.77539.84775 1.1827 1.99681 1.7832 3 1.7832a.50005.50005 0 1 0 0-1c-.83333 0-1.88224-.38167-2.55273-1.72266a.50005.50005 0 0 0 -.44341-.27729.50005.50005 0 0 0 -.45118.27734c-.67049 1.34099-1.7194 1.72266-2.55273 1.72266s-1.88224-.38167-2.55273-1.72266a.50005.50005 0 0 0 -.44336-.27734z" transform="matrix(100 0 0 100 -21500.003 -24200.011)" fill="#000000"/></g></svg></span> Waves

### Smallest wave
<div class="parameter">
    <div class="parameter__info">
        <span>Control the horizontal scale of the smallest waves (in meters).</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Largest wave
<div class="parameter">
    <div class="parameter__info">
        <span>Control the horizontal scale of the largest waves (in meters).</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Wave height
<div class="parameter">
    <div class="parameter__info">
        <span>Set the max range of wave amplitude (in meters).</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Wind speed
<div class="parameter">
    <div class="parameter__info">
        <span>Set a wind speed to affect how waves get shaped.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Distribution Log
<div class="parameter">
    <div class="parameter__info">
        <span>A logarithmic distribution parameter for waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Allows to bias waves towards higher or lower frequencies.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Dispersion
<div class="parameter">
    <div class="parameter__info">
        <span>Control wave dispersion angle.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"> Low values make concentric wave strips, while higher values create a more chaotic ocean.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Angle
<div class="parameter">
    <div class="parameter__info">
        <span>Change the dominant wind and wave flow direction.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Skew
<div class="parameter">
    <div class="parameter__info">
        <span>Control wave skew strength.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Choppiness
<div class="parameter">
    <div class="parameter__info">
        <span>Control how sharp and choppy wave peaks appear.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Foam Amount
<div class="parameter">
    <div class="parameter__info">
        <span>Control the amount of foam forming at wave peaks.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg height="1600" viewBox="0 0 1600 1600" width="1600" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview pagecolor="#303030" showgrid="true" fill="#000000"><inkscape:grid id="grid5" units="px" spacingx="100" spacingy="100" color="#4772b3" opacity="0.2" visible="true" fill="#000000"/></sodipodi:namedview><g fill="#fff"><g enable-background="new" stroke="none" transform="matrix(100 0 0 100 -25700.42700000001 -45099.289)"><path d="m267.50195 451.98633a.50005.50005 0 0 0 -.34765.85937l2.66015 2.66016-2.67383 2.89648a.50005.50005 0 0 0 -.13281.33985v.5a.50005.50005 0 0 0 .13281.33984l2.67383 2.89649-2.66015 2.66015a.50005.50005 0 1 0 .70703.70703l3-3a.50005.50005 0 0 0 .0137-.69336l-2.86719-3.10546v-.10938l2.86719-3.10547a.50005.50005 0 0 0 -.0137-.69336l-3-3a.50005.50005 0 0 0 -.35938-.15234z" opacity=".7" fill="#000000"/><path d="m263.50195 451.98633a.50005.50005 0 0 0 -.34765.85937l2.66015 2.66016-2.67383 2.89648a.50005.50005 0 0 0 -.13281.33985v.5a.50005.50005 0 0 0 .13281.33984l2.67383 2.89649-2.66015 2.66015a.50005.50005 0 1 0 .70703.70703l3-3a.50005.50005 0 0 0 .0137-.69336l-2.86719-3.10546v-.10938l2.86719-3.10547a.50005.50005 0 0 0 -.0137-.69336l-3-3a.50005.50005 0 0 0 -.35938-.15234z" opacity=".85" fill="#000000"/><path d="m259.50195 451.98633a.50005.50005 0 0 0 -.34765.85937l2.66015 2.66016-2.67383 2.89648a.50005.50005 0 0 0 -.13281.33985v.5a.50005.50005 0 0 0 .13281.33984l2.67383 2.89649-2.66015 2.66015a.50005.50005 0 1 0 .70703.70703l3-3a.50005.50005 0 0 0 .0137-.69336l-2.86719-3.10546v-.10938l2.86719-3.10547a.50005.50005 0 0 0 -.0137-.69336l-3-3a.50005.50005 0 0 0 -.35938-.15234z" fill="#000000"/></g></g></svg></span> Capillary Waves

### Strength
<div class="parameter">
    <div class="parameter__info">
        <span>The strength of capillary waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Higher values make for more defined waves.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Scale
<div class="parameter">
    <div class="parameter__info">
        <span>Scale of capillary waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">A higher scale value means more waves per surface area.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Stretch
<div class="parameter">
    <div class="parameter__info">
        <span>Control stretching of capillary waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Higher stretch value makes more stripey-appearing waves.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Direction
<div class="parameter">
    <div class="parameter__info">
        <span>The direction of capillary waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Having this value differ from the dominant wave direction allows simulating effect of a local breeze being different from the main wind direction, as an example.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Speed
<div class="parameter">
    <div class="parameter__info">
        <span>Speed of capillary wave movement.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Variance
<div class="parameter">
    <div class="parameter__info">
        <span>Capillary wave variance across the ocean surface.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Lower values make more uniform-looking capillary waves.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Drag
<div class="parameter">
    <div class="parameter__info">
        <span>How strongly major waves drag capillary waves along with them.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Mask Scale
<div class="parameter">
    <div class="parameter__info">
        <span>Control scale of the mask texture used to vary capillary wave distribution.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Mask Offset
<div class="parameter">
    <div class="parameter__info">
        <span>Offset the coordinates of the mask texture used to vary capillary wave distribution and macro scale roughness.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Mask Minimum
<div class="parameter">
    <div class="parameter__info">
        <span>Capillary wave amount in lower mask parts.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Mask Maximum
<div class="parameter">
    <div class="parameter__info">
        <span>Capillary wave amount in higher mask parts.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Roughness Minimum
<div class="parameter">
    <div class="parameter__info">
        <span>Water surface roughness in lower mask parts.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Roughness Maximum
<div class="parameter">
    <div class="parameter__info">
        <span>Water surface roughness in higher mask parts.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg height="1200" viewBox="0 0 1500 1200" width="1500" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview pagecolor="#303030" showgrid="true" fill="#000000"><inkscape:grid id="grid5" units="px" spacingx="100" spacingy="100" color="#4772b3" opacity="0.2" visible="true" fill="#000000"/></sodipodi:namedview><g fill="#fff"><path d="m327.48047 181a.50005.50005 0 0 0 -.46875.39453c-.73399 3.42527-2.46804 7.48775-5.67969 8.63477a.50005.50005 0 1 0 .33594.9414c3.19373-1.14062 4.90029-4.45895 5.83203-7.61914.93174 3.16019 2.6383 6.47852 5.83203 7.61914a.50005.50005 0 1 0 .33594-.9414c-3.21165-1.14702-4.9457-5.2095-5.67969-8.63477a.50005.50005 0 0 0 -.50781-.39453z" transform="matrix(100 0 0 100 -32000 -18000.265)" fill="#000000"/></g></svg></span> Wakes & Ripples

### Wakes
<div class="parameter">
    <div class="parameter__info">
        <span>Select an object to be a wakes caster.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Boolean
<div class="parameter">
    <div class="parameter__info">
        <span>Select an object and enable the boolean checkbox to make the object cut a boolean hole in the ocean.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Ripples
<div class="parameter">
    <div class="parameter__info">
        <span>Select an object and enable the ripple checkbox to make the object produce ripples.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Wake Height
<div class="parameter">
    <div class="parameter__info">
        <span>Control the height/strength of wakes produced.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Frequency Minimum
<div class="parameter">
    <div class="parameter__info">
        <span>Sets the lowest frequency of waves and ripples, affecting larger, slow waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Frequency Maximum
<div class="parameter">
    <div class="parameter__info">
        <span>Sets the highest frequency of waves and ripples, affecting smaller, fast waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Fade Distance
<div class="parameter">
    <div class="parameter__info">
        <span>Controls how quickly waves and ripples diminish over distance in the simulation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Time Scale
<div class="parameter">
    <div class="parameter__info">
        <span>How fast ripples move in the simulation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg height="1600" viewBox="0 0 1600 1600" width="1600" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview pagecolor="#303030" showgrid="true" fill="#000000"><inkscape:grid id="grid5" units="px" spacingx="100" spacingy="100" color="#4772b3" opacity="0.2" visible="true" fill="#000000"/></sodipodi:namedview><g fill="#fff"><g enable-background="new" transform="matrix(95.312415 0 0 100.99748 -10502.3145 -28561.311)"><path d="m114.20361 283.80598c1.65093 0 3 1.34907 3 3s-1.34907 3-3 3-3-1.34907-3-3 1.34907-3 3-3zm0 1c-1.11049 0-2 .88951-2 2s.88951 2 2 2 2-.88951 2-2-.88951-2-2-2z" fill="#000000"/><path d="m115.59493 291.64794c1.65093 0 3 1.34907 3 3s-1.34907 3-3 3-3-1.34907-3-3 1.34907-3 3-3zm0 1c-1.11049 0-2 .88951-2 2s.88951 2 2 2 2-.88951 2-2-.88951-2-2-2z" fill="#000000"/><path d="m122.93095 287.85344c1.65093 0 3 1.34907 3 3s-1.34907 3-3 3-3-1.34907-3-3 1.34907-3 3-3zm0 1c-1.11049 0-2 .88951-2 2s.88951 2 2 2 2-.88951 2-2-.88951-2-2-2z" fill="#000000"/></g></g></svg></span> Underwater

### Objects
<div class="parameter">
    <div class="parameter__info">
        <span>Select objects with materials to apply underwater effects.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Submerged Underwater
<div class="parameter">
    <div class="parameter__info">
        <span>Toggle underwater calculations for selected objects materials.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Enabling this adds underwater fog, light attenuation and surface tension effects to all materials of the selected objects.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Advanced Intersection
<div class="parameter">
    <div class="parameter__info">
        <span>Toggle advanced intersection calculation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Gives a more accurate underwater shader that matches wave shapes. Comes at a performance cost, so only use it for objects nearby where this is noticeable.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Particles
<div class="parameter">
    <div class="parameter__info">
        <span>Enables underwater particles.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Domain size
<div class="parameter">
    <div class="parameter__info">
        <span>Determine the size of a simulated particle domain around the camera.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Domain Z Offset
<div class="parameter">
    <div class="parameter__info">
        <span>Determine how far from the camera particle domain is visible.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Use to avoid potentially cut-off particles.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### World Underwater
<div class="parameter">
    <div class="parameter__info">
        <span>Allows to toggle underwater shader for world shader.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">It is used for ensuring a fully covered underwater shader, including default Eevee reflections and refractions.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Advanced Volumetrics
<div class="parameter">
    <div class="parameter__info">
        <span>Enable Blender volumetrics in the ocean shader.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Allows for per-light interactions and shadows. High-performance impact, especially in Cycles.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Volume Density
<div class="parameter">
    <div class="parameter__info">
        <span>How strong the advanced volumetrics volume is.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Volume Distance
<div class="parameter">
    <div class="parameter__info">
        <span>Range in which the advanced volumetrics are used from the camera.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>



