# Example Overlay Addon

Demo overlay for testing the StreamKit+ overlay system.

## Install

1. Start StreamKit+.
2. Open **Settings → Overlay**.
3. Click **Install from folder** and select this `example_overlay` directory.
4. Open the installed addon and click **Test playback** to preview the effect.

## Files

| File | Purpose |
| --- | --- |
| `manifest.json` | Addon metadata (`type: overlay`, `web_type: overlay`) |
| `index.js` | Addon worker entry (settings schema) |
| `index.html` | Web page shown inside the overlay iframe |
| `style.css` | Effect styles |
| `logo.png` | Addon icon (copy from project root if missing) |

## Notes

- The iframe reads runtime settings from `GET /overlay/settings/{overlayId}?token=...`.
- To react to real viewer events, configure triggers in overlay settings and pass `trigger` from source addons via `dashboard.addRecord(...)`.
