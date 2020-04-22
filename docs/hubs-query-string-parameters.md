---
id: hubs-query-string-parameters
title: Hubs Query String Parameters
sidebar_label: Hubs Query String Parameters
---

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
- `mobile` - Force mobile mode
- `no_stats` - Disable performance stats
- `vr_entry_type` - Either "2d", "vr", or "daydream". Used internally to force a VR entry type. Add "_now" to the end of the value to skip the audio check.
- `disable_telemetry` - If `true` disables Sentry telemetry.
- `log_filter` - A `debug` style filter for setting the logging level.
- `debug` - If `true` performs verbose logging of Janus and NAF traffic. Also enables debug mode on the physics system.
- `vrstats` - If `true` shows stats in VR.
- `debug_log` - If `true`, enables an on-screen debug log and console. Useful for debugging on mobile devices.
- `userinput_debug` - If `true`, enables an on-screen userinput debug status panel. Press "L" on your keyboard to show the panel.
- `thirdPerson` - Enables experimental third person mode.
- `fov` - Set a custom field of view in degrees (between 1 and 179) for the camera. (2D only) 