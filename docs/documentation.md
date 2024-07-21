

!!! tip ""
    Hey :wave:, first time here? You can find the `Installation Guide` and `First Run` in the [getting started](/pow/getting-started/) section.

* [Mesh](#mesh)
* [Material](#material)
* [Camera & LOD](#camera-lod)
* [Waves](#waves)
* [Capillary Waves](#capillary-waves)
* [Wakes & Ripples](#wakes-ripples)
* [Underwater](#underwater)



## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M9.492 2.996A.5.5 0 0 0 9 3.504v2.654a3.98 3.98 0 0 0-1.955 1.184L4.854 5.15a.5.5 0 1 0-.707.707l2.32 2.32A3.941 3.941 0 0 0 6 10.004H3.5c-.667 0-.667 1 0 1h2.64a3.98 3.98 0 0 0 1.192 1.96L5.146 15.15c-.471.472.236 1.18.708.708l2.316-2.317c.55.286 1.162.463 1.822.463H10v2.5c0 .667 1 .667 1 0v-2.646a3.982 3.982 0 0 0 1.953-1.194l2.194 2.194c.471.505 1.214-.237.707-.708l-2.325-2.324a3.934 3.934 0 0 0 .458-1.814v-.008H16.5c.667 0 .667-1 0-1h-2.66a3.983 3.983 0 0 0-1.186-1.947l2.2-2.2a.5.5 0 1 0-.708-.707l-2.33 2.33A3.942 3.942 0 0 0 10 6.018V3.504a.5.5 0 0 0-.508-.508zm.5 4.022a2.987 2.987 0 0 1 2.994 2.994 2.986 2.986 0 0 1-2.994 2.992A2.984 2.984 0 0 1 7 10.012a2.986 2.986 0 0 1 2.992-2.994z"/></svg></span> Mesh

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
        <span>The size of water mesh domain.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Water deformation from waves is applied within this distance.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Resolution
<div class="parameter">
    <div class="parameter__info">
        <span>Resolution of water mesh.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Higher values equal higher quality, but come at a cost to performance.</span>
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
        <span>Select an object that the ocean will attempt to shrinkwrap to. Can be used to make the ocean match the shape of a local fluid simulation or to add some artistically driven shapes.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1a5.991 5.991 0 0 1 5.998 5.959C14.887 10.903 12.995 12 10 12v4c-3.32 0-6-2.68-6-6l.002-.043C5.113 10.901 7.003 12 10 12z"/></svg></span> Material

### Color
<div class="parameter">
    <div class="parameter__info">
        <span>The scattering color of ocean.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Extinction
<div class="parameter">
    <div class="parameter__info">
        <span>The extinction parameter of ocean material. Allows determining how quickly different colors get absorbed by water.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">In most cases should be the inverse of color parameter, but can be varied to accommodate certain material properties and for artistic control.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Scattering distance
<div class="parameter">
    <div class="parameter__info">
        <span>A factor by which light gets scattered over distance.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Lower number equals less scattering per light distance travelled, thus resulting in better underwater clarity.</span>
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


### Camera Near Offset
<div class="parameter">
    <div class="parameter__info">
        <span>Offsets the near clipping plane of the camera used in the simulation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter adjusts the minimum distance from the camera at which objects are rendered, preventing clipping issues and improving the rendering of nearby objects.</span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M5.75 3.5a.5.5 0 0 0-.482.37l-3.25 12a.5.5 0 0 0 .482.63h15a.5.5 0 0 0 .482-.63l-3.25-12a.5.5 0 0 0-.482-.37zm.383 1h2.086l-.217 2H5.59zm3.094 0h1.546l.217 2H9.01zm2.554 0h2.086l.541 2h-2.41zm-6.46 3h2.572l-.327 3H4.508zm3.58 0H11.1l.326 3H8.574zm3.206 0h2.573l.812 3h-3.058zm-7.87 4h3.22l-.434 4h-3.87zm4.23 0h3.066l.436 4H8.03zm4.076 0h3.22l1.085 4h-3.871z" /></svg></span> Camera & LOD

### End Clip Plane
<div class="parameter">
    <div class="parameter__info">
        <span>Sets the distance from the camera beyond which objects are no longer rendered.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter determines the furthest point in the scene that is visible to the camera. It’s a built-in parameter for camera, exposed in the addon for ease of access.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### View Frustum Boost
<div class="parameter">
    <div class="parameter__info">
        <span>Adjusts the size of the view frustum used for rendering the ocean.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The view frustum defines the visible portion of the scene from the camera’s perspective. This is used to cull parts of ocean for performance, tweak this in case of unwanted artifacts.</span>
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
        <span>Multiplier for simulation time.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Water Edge
<div class="parameter">
    <div class="parameter__info">
        <span>Enables the rendering of a defined boundary or edge for the water surface in the scene.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter controls the visibility and appearance of the boundary where the water meets camera as it gets submerged.</span>
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
        <span>Control the width of the water edge. Generally recommended to extend it just past camera boundary.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Height
<div class="parameter">
    <div class="parameter__info">
        <span>Control the height of the water edge, changing how large it appears on the screen.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Positive values make camera hydrophilic, while negative ones make it appear hydrophobic.</span>
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




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M10.69 3.012A4.003 4.003 0 0 0 7 7a.5.5 0 0 0 .016.133 3.973 3.973 0 0 0-1.059.427 3.994 3.994 0 0 0-1.879 4.145A2.998 2.998 0 0 0 3.002 14.1a3.005 3.005 0 0 0 2.672 2.881 3 3 0 0 0 3.152-2.008 3.97 3.97 0 0 0 2.499-.746 3.498 3.498 0 0 0 3.789.377 3.5 3.5 0 0 0-.322-6.357 3.998 3.998 0 0 0-.885-3.996 4.024 4.024 0 0 0-3.217-1.24zm.521.996a2.996 2.996 0 0 1 2.51 4.256.5.5 0 0 0-.053.216.5.5 0 0 0 .387.582 2.498 2.498 0 0 1 .598 4.656 2.499 2.499 0 0 1-2.84-.372.5.5 0 0 0-.203-.12.5.5 0 0 0-.282-.097.5.5 0 0 0-.351.129 3 3 0 0 1-2.399.713.5.5 0 0 0-.543.33.5.5 0 0 0-.097.197 1.994 1.994 0 0 1-2.154 1.49 1.993 1.993 0 0 1-.957-3.598.5.5 0 0 0 .166-.117c.198-.115.418-.2.656-.242a.5.5 0 0 0-.09-.994.5.5 0 0 0-.084.01c-.16.028-.313.075-.463.127a2.992 2.992 0 0 1 5.057-2.346.5.5 0 0 0 .69-.724 3.995 3.995 0 0 0-2.31-1.079C8.302 7.008 8.15 7.01 8 7.01A.5.5 0 0 0 8 7a2.996 2.996 0 0 1 3.211-2.992z"/></svg></span> Waves

### Smallest wave
<div class="parameter">
    <div class="parameter__info">
        <span>Control the horizontal scale of smallest waves (in meters).</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Largest wave
<div class="parameter">
    <div class="parameter__info">
        <span>Control the horizontal scale of largest waves (in meters).</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
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
        <span>Control wave dispersion angle. Low values make concentric wave strips, while higher values create a more chaotic ocean.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
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




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M10.69 3.012A4.003 4.003 0 0 0 7 7a.5.5 0 0 0 .016.133 3.973 3.973 0 0 0-1.059.427 3.994 3.994 0 0 0-1.879 4.145A2.998 2.998 0 0 0 3.002 14.1a3.005 3.005 0 0 0 2.672 2.881 3 3 0 0 0 3.152-2.008 3.97 3.97 0 0 0 2.499-.746 3.498 3.498 0 0 0 3.789.377 3.5 3.5 0 0 0-.322-6.357 3.998 3.998 0 0 0-.885-3.996 4.024 4.024 0 0 0-3.217-1.24zm.521.996a2.996 2.996 0 0 1 2.51 4.256.5.5 0 0 0-.053.216.5.5 0 0 0 .387.582 2.498 2.498 0 0 1 .598 4.656 2.499 2.499 0 0 1-2.84-.372.5.5 0 0 0-.203-.12.5.5 0 0 0-.282-.097.5.5 0 0 0-.351.129 3 3 0 0 1-2.399.713.5.5 0 0 0-.543.33.5.5 0 0 0-.097.197 1.994 1.994 0 0 1-2.154 1.49 1.993 1.993 0 0 1-.957-3.598.5.5 0 0 0 .166-.117c.198-.115.418-.2.656-.242a.5.5 0 0 0-.09-.994.5.5 0 0 0-.084.01c-.16.028-.313.075-.463.127a2.992 2.992 0 0 1 5.057-2.346.5.5 0 0 0 .69-.724 3.995 3.995 0 0 0-2.31-1.079C8.302 7.008 8.15 7.01 8 7.01A.5.5 0 0 0 8 7a2.996 2.996 0 0 1 3.211-2.992z"/></svg></span> Capillary Waves

### Strength
<div class="parameter">
    <div class="parameter__info">
        <span>The strength of capillary waves. Higher values make for more defined waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Scale
<div class="parameter">
    <div class="parameter__info">
        <span>Scale of capillary waves. Higher scale value means more waves per surface area.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
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
        <span>The direction of capillary waves.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Having this value differ from dominant wave direction allows simulating effect of local breeze being different from main wind direction, as an example.</span>
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
        <span>Capillary wave variance across the ocean surface.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Lower values make more uniform looking capillary waves.</span>
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




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M10.69 3.012A4.003 4.003 0 0 0 7 7a.5.5 0 0 0 .016.133 3.973 3.973 0 0 0-1.059.427 3.994 3.994 0 0 0-1.879 4.145A2.998 2.998 0 0 0 3.002 14.1a3.005 3.005 0 0 0 2.672 2.881 3 3 0 0 0 3.152-2.008 3.97 3.97 0 0 0 2.499-.746 3.498 3.498 0 0 0 3.789.377 3.5 3.5 0 0 0-.322-6.357 3.998 3.998 0 0 0-.885-3.996 4.024 4.024 0 0 0-3.217-1.24zm.521.996a2.996 2.996 0 0 1 2.51 4.256.5.5 0 0 0-.053.216.5.5 0 0 0 .387.582 2.498 2.498 0 0 1 .598 4.656 2.499 2.499 0 0 1-2.84-.372.5.5 0 0 0-.203-.12.5.5 0 0 0-.282-.097.5.5 0 0 0-.351.129 3 3 0 0 1-2.399.713.5.5 0 0 0-.543.33.5.5 0 0 0-.097.197 1.994 1.994 0 0 1-2.154 1.49 1.993 1.993 0 0 1-.957-3.598.5.5 0 0 0 .166-.117c.198-.115.418-.2.656-.242a.5.5 0 0 0-.09-.994.5.5 0 0 0-.084.01c-.16.028-.313.075-.463.127a2.992 2.992 0 0 1 5.057-2.346.5.5 0 0 0 .69-.724 3.995 3.995 0 0 0-2.31-1.079C8.302 7.008 8.15 7.01 8 7.01A.5.5 0 0 0 8 7a2.996 2.996 0 0 1 3.211-2.992z"/></svg></span> Wakes & Ripples

### Wakes
<div class="parameter">
    <div class="parameter__info">
        <span>Select an object to be a wakes caster.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
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


### Ripples
<div class="parameter">
    <div class="parameter__info">
        <span>Select object and enable ripple checkbox to make the object produce ripples.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Boolean
<div class="parameter">
    <div class="parameter__info">
        <span>Select object and enable boolean checkbox to make the object cut a boolean hole in ocean.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1a5.991 5.991 0 0 1 5.998 5.959C14.887 10.903 12.995 12 10 12v4c-3.32 0-6-2.68-6-6l.002-.043C5.113 10.901 7.003 12 10 12z"/></svg></span> Underwater

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
        <span>Toggle underwater calculations for selected objects materials.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Advanced Intersection
<div class="parameter">
    <div class="parameter__info">
        <span>Toggle advanced intersection calculation.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Gives more accurate underwater shader that matches wave shapes. Comes at a performance cost, so only use it for objects nearby where this is noticeable.</span>
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
        <span>Determine the size of a simulated particle domain around camera.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>


### Domain Z Offset
<div class="parameter">
    <div class="parameter__info">
        <span>How far from camera particle domain is visible.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Use to avoid potentially cut-off particles.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### World Underwater
<div class="parameter">
    <div class="parameter__info">
        <span>Allows to toggle underwater shader for world shader.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">It is used for ensuring fully covered underwater shader, including default Eevee reflections and refractions.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Advanced Volumetrics
<div class="parameter">
    <div class="parameter__info">
        <span>Enable Blender volumetrics in the ocean shader.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Allows for per-light interactions and shadows. High performance impact, especially in Cycles.</span>
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
        <span>Range in which the advanced volumetrics are used from camera.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)"></span>
    </div>
    <div class="parameter__video"></div>
</div>



