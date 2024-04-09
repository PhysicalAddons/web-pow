---
title: Known Issues
---


**My Particles on Cycles are black**

Increase `Render > Light Paths > Transparency` to about 20. This will increase the number of transparent bounces performed.

**My Ocean looks green**

This is how it's supposed to look if the sun is close to the horizon. Try moving the sun up, and you'll notice the difference.


**Latest POW 1.1 is all pink on MacOS when using Eevee**

In order for the addon to function correctly, Blender needs to utilize attribute nodes, which are not supported for Eevee in the latest Blender updates on MacOS, causing the addon to malfunction. Here's [more in depth explanation](https://projects.blender.org/blender/blender/issues/112952) for the issue.

> We'll be taking closer look at the attribute nodes and how to address this issue right after the 1.1 release.


**PSA presets (from Asset Browser) overwrite POW ocean data**

When using Physical Starlight atmosphere (PSA) together with Physical Open water addon and applying asset it will overwrite World data and break the water surface.

> We'll be migrating PSA assets to our preset system to avoid this issue.


<!-- **When disabling `Underwater > World Underwater` sometimes breaks World shader**

For example if Physical Starlight Atmosphere -->



--------------------------

**Didn't find your answer?**

Visit our community support [Discord channel](https://discord.gg/wvzPVzj9Vr) for more help.