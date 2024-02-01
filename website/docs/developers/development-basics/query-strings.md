---
sidebar_position: 9
---

# Query String Parameters

Some developer-oriented options that are not available in the preferences panel in Hubs are available as query string parameters. These are intended mainly for development or debugging and are not something most users will need to use.

Examples:

```
https://hubs.mozilla.com/12345/my-room-name?allow_multi
https://localhost:8080/?hub_id=12345&allow_multi
```

- `allow_multi` - Allow multiple instances off the app in the same browser session
- `allow_idle` - Disable the idle detector timeout
- `idle_timeout` - Idle timeout in seconds
- `avatar_scale` - Scale your self!
- `no_stats` - Disable performance stats
- `vr_entry_type` - Either "2d", "vr", or "daydream". Used internally to force a VR entry type. Add "\_now" to the end of the value to skip the audio check.
- `disable_telemetry` - If `true` disables Sentry telemetry.
- `log_filter` - A `debug` style filter for setting the logging level.
- `debug` - If `true` performs verbose logging of Janus and NAF traffic. Also enables debug mode on the physics system.
- `vrstats` - If `true` shows stats in VR.
- `debug_log` - If `true`, enables an on-screen debug log and console. Useful for debugging on mobile devices.
- `userinput_debug` - If `true`, enables an on-screen userinput debug status panel. Press "L" on your keyboard to show the panel.
- `fov` - Set a custom field of view in degrees (between 1 and 179) for the camera. (2D only)
- `force_enable_touchscreen` - Force virtual gamepad controls to appear on the screen.
- `default_material_quality` - Either "high", "medium", or "low". Set a default material quality for users with non-mobile devices that take effect when a user has not set a specific preference.
- `default_mobile_material_quality` - Either "high", "medium", or "low". Set a default material quality for users with mobile devices that take effect when a user has not set a specific preference.
- `envSettingsDebug` - Show a debug panel for the environment-settings component allowing you to configure tonemapping and exposure settings.
- `debugLocalScene` - Override what happens when dropping glb files into the scene, instead loading them as the scene (locally, without uploading). This is useful for quickly itterating on scene changes.
- `debugNavmesh` - Helps you to visually distinguish navmesh in your scene, a white series of zigzag lines help you in distinction

Note: Once you access a room with `debugLocalScene`, there is no scene linked to that room, so to access the same room again normally, you need to change the scene (using Room Info & Settings Panel) while you are in that room
