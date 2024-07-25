---
title: FAQ and contacts
---

??? cite "Do I have to pay for updates?"
    No. If you have bought the add-on it already, then all future updates are included for free. To get the newest version of the add-on, go to the store you made your purchase and download the latest build.

??? cite "Why are my Particles on Cycles black?"
    Increase `Render > Light Paths > Transparency` to about `20`. This will increase the number of transparent bounces performed.

??? cite "Why is my Ocean green?"
    This is how it's supposed to look if the sun is close to the horizon. Try moving the sun up, and you'll notice a difference.

??? cite "Why is the latest POW version pink on MacOS ARM when using Eevee?"
    In order for the add-on to function correctly on MacOS ARM, Blender needs to utilize `attribute nodes`, which are not supported for `Eevee` in the latest MacOS Blender version, causing the add-on to malfunction.
    
    For now you can either use `Cycles` or use the 1.X build of the add-on on MacOS through Blender version 3.6.0.

    Here's [more in depth explanation](https://projects.blender.org/blender/blender/issues/112952) for the issue.

    Note: version 1.X is a basic build, that does not several features. Please refer to the [release notes](https://www.physicaladdons.com/pow/release-notes/). 



<!-- **When disabling `Underwater > World Underwater` sometimes breaks World shader**

For example if Physical Starlight Atmosphere -->


--------------------------

**Didn't find your answer?**

Visit our community support [Discord channel](https://discord.gg/wvzPVzj9Vr) for more help.