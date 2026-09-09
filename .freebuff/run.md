# Preview run doc — exam-zustand (UserHub)

## Reproduce artifacts
This is a plain Vite + React SPA. There are no secret/env files to copy.
If `node_modules` is missing, install dependencies with:
```
npm install
```

## Run the server
Start the Vite dev server detached (Windows, PowerShell):
```
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
```
- Default port: 5173 (`vite` picks it, falls back to 5174+ if busy).
- The server answers at `http://localhost:5173`.
- Logs: stdout and stderr go to separate files (the `<log>` path and `<log>.err`).