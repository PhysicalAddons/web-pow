### 1.2.0 <small>- released 23.07.2024</small>

`new:`{: .label-new }

- Introduced new controls for adjusting ripples with updated default values.
- Easily adjust reflections using the new control options.
- New features (from v1.1) are now compatible with Blender 3.6 LTS.
- Enhanced water shader for better precision and optimized performance.

`improvements:`{: .label-improvements }

- Added the abbreviation "POW" (Physical Open Waters) to simplify addon search in Blender Preferences.
- Implemented a user-friendly way to indicate that a World is required to add an Ocean.


`fixed:`{: .label-fixed }

- Fixed link to documentation in the addon preferences panel.
- Resolved the preset load error when migrating blend files between systems with different numbers of presets.
- Fixed an issue that prevented Ocean removal when an object with an empty material slot was added.
- Synchronized camera height and water level to fix underwater darkness.
- Ensured the world ocean horizon remains unchanged when height is adjusted.
- Fixed the ocean border shader.


!!! Warning "Advanced: If your have modified Ocean node tree, backup your blend files before installing the new version."
    Custom changes in the node setup may be overwritten during the update process as the Ocean is removed and added again.



### 1.1.1 <small>- released 09.04.2024</small>

`new:`{: .label-new }

- Mesh: added a way to increase height of the Ocean.
- Material: added an option to select between Refractive and Subsurface Scatter shader models. 

`fixed:`{: .label-fixed }

- Fixed _red ocean_ appearing in Cycles rendering engine if ocean was removed and then added.


    !!! Bug "Fixing _red ocean_ issue in the old files:"
        1. Save new preset with your current ocean settings
        2. Remove Ocean
        3. Add Ocean
        4. Apply your previously created preset
    


### 1.1.0 <small>- released 28.03.2024</small>

[![Release 1.1.0 banner](img/releases/pow-1.1.0.jpg)](img/releases/pow-1.1.0.jpg)
`new:`{: .label-new }

- Added underwater shader for water surface and world.
- Added new water surface material with custom light dispersing refraction shader.
- Mesh: added option to select an object to be able to shrinkwrap Ocean around it.
- Material: added water subsurface color, extinction and scattering parameters.
- Camera: added water edge that is shown whenever the camera is between the atmosphere and water.
- Wakes & Ripples: added option to select up to 3 objects to apply ripples.
- Underwater: added a way to select submerged objects to apply underwater shader.
- Underwater: added particles that give a more realistic feel.
- Underwater: added Blender underwater volumetric.


`improvements:`{: .label-improvements }

- Whenever PSA is turned on before adding ocean, Starlight Sun is automatically attached to the Sun slot.


### 1.0.2 <small>- released 18.12.2023</small>

`improvements:`{: .label-improvements }

- Added a convenient shortcut to quickly access the location of your presets. 

### 1.0.1 <small>- released 24.11.2023</small>

`new:`{: .label-new }

- Now you can apply Wakes to the objects in the water. It is a pattern of waves created by an object moving through water. 
