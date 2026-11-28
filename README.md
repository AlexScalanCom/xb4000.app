# 🚴 Gymtek XB4000 Workout Companion

**A browser-based workout companion for your Gymtek XB4000 exercise bike.**  
Create your own resistance programs, follow progressive workouts, monitor a live session, and review your training history.

> This application is an independent project and is not affiliated with or endorsed by Gymtek.

---

## ✨ Features

- **Custom workouts** — build your own workout from resistance stages and durations.
- **Progressive workouts** — choose from 18 workout profiles and follow a separate 50-step progression for each profile.
- **Warm-up & cool-down** — gradual resistance changes before and after the main workout.
- **Pause & recovery** — when pedaling stops, the workout pauses and resistance is reduced to level 1. When pedaling resumes, resistance gradually recovers toward the paused workout level, one level every 10 seconds.
- **Live workout dashboard** — monitor workout progress, resistance, cadence and available bike telemetry.
- **Workout charts** — view planned and actual workout profiles.
- **Workout history** — review completed sessions, summaries and analysis.
- **Export** — export your stored workout history as a JSON file.
- **Personal settings** — adjust warm-up and cool-down intervals, pause detection and interface preferences.

---

## 🚀 Getting Started

### 1. Open the application

Open the application website in a browser that supports Bluetooth Low Energy (Web Bluetooth).

**Recommended:** a recent desktop version of Google Chrome or Microsoft Edge.

Web Bluetooth generally requires a secure connection (HTTPS) and is not supported by every browser or device. Browser support may vary.

### 2. Prepare your exercise bike

- Turn on your Gymtek XB4000.
- Make sure the bike is not already connected to another app or device.
- Keep your computer or phone close to the bike.

### 3. Connect

Start a workout from **Custom** or **Progressive**. Follow the connection prompt and select **GYMTEK-XB4000** (or the corresponding bike device) from the Bluetooth device list.

Once connected, follow the instructions on the Workout screen.

---

## 🏁 Choose Your Workout

From the **Menu**, choose one of the main options.

### Custom

Create your own workout:

1. Open **Custom**.
2. Set the resistance stages and their durations.
3. Review the planned workout.
4. Start the session and connect to your bike.

The application adds the configured warm-up and cool-down around the working program.

### Progressive

Choose a workout profile and let the application generate the next step of its progression.

There are **18 profiles** across four groups:

| Group | Profiles |
|---|---|
| Original | Two Hills, Rolling Hills, HIIT, Pyramid, Plateau, Canyon |
| Beginner | Beginner 1–4 |
| Advance | Advance 1–4 |
| Sporty | Sporty 1–4 |

Each profile has its own independent progression branch of **50 steps**. Completing a session advances that profile's progression when the session qualifies as successfully completed.

- Each profile tracks its own progress.
- The duration is managed independently for each progression branch.
- Interrupted or unsuccessful sessions do not intentionally advance the progression.
- You can review the next workout before starting.

---

## 🔄 Warm-up, Workout & Cool-down

A session can consist of three phases:

1. **Warm-up** — resistance gradually increases toward the first working level.
2. **Workout** — the selected program runs.
3. **Cool-down** — resistance gradually decreases toward zero.

Warm-up and cool-down step intervals can be adjusted in **Profile** settings. The workout preview shows the planned phases and durations.

---

## ⏸️ Pause & Resume

The application monitors pedaling cadence and can automatically pause a session when pedaling stops.

During a pause:

- Workout timing is suspended.
- Resistance is requested to be reduced to **level 1**.
- The current workout phase and target are retained.

When pedaling resumes:

- Resistance recovery begins from level 1.
- Resistance increases gradually, **one level every 10 seconds**, toward the level required at the time of the pause.
- Workout timing resumes after the recovery process completes.

The pause detection threshold and pause delay can be adjusted in **Profile** settings.

> The bike's response and resistance confirmation may depend on the device and Bluetooth connection. Always pay attention to the actual resistance applied by the bike.

---

## 📊 Workout Dashboard

The Workout screen provides session information such as:

- Current workout phase.
- Elapsed and remaining time.
- Resistance level.
- Cadence and other available telemetry.
- Workout profile chart.
- Connection status.
- Workout event log (if enabled).

The Workout screen opens automatically when you start a program.

---

## 📚 History

Open **History** to review previous workouts.

Depending on the recorded session, history may include:

- Workout date and duration.
- Workout mode and Progressive profile/step.
- Workout metrics.
- Charts and analysis.
- Detailed workout information.

Workout data is stored locally in your browser.

### Export your data

Use the export function in History to download your workout records in JSON format.

**Important:** browser data can be lost if you clear site data, use a different browser, or use a different device. Export your history regularly if you want to keep a backup.

---

## ⚙️ Profile & Settings

The **Profile** page includes personal details and workout behavior settings.

Settings may include:

- Weight and other personal profile information.
- Warm-up interval (seconds per resistance level).
- Cool-down interval (seconds per resistance level).
- Pedaling threshold for pause detection.
- Pause delay.
- Telemetry timeout.
- Refresh interval.
- Calorie estimation model.
- Keep screen awake during a workout.
- Show or hide the workout event log.
- Workout finish sound.

Some settings take effect on the next connection or workout.

---

## 🛠️ Troubleshooting

### The bike does not appear in the Bluetooth list

- Confirm the bike is powered on.
- Move closer to the bike.
- Disconnect it from other apps or devices.
- Check that you are using a browser with Web Bluetooth support.
- Reload the application and try again.

### The connection fails

- Try disconnecting other Bluetooth applications from the bike.
- Reload the page and reconnect.
- Ensure Bluetooth is enabled on your computer.
- Keep the browser window open while using the application.

### Resistance does not appear to change

- Allow time for the bike to respond to a command.
- Check the actual resistance on the bike.
- If the bike or connection appears unresponsive, stop the workout safely.

### My workout history is missing

Workout records are stored in the browser where the application was used. They are not automatically synchronized across browsers or devices. Clearing browser storage may remove records.

---

## ⚠️ Safety

- Use the bike and application at your own risk.
- Consult a healthcare professional before starting a new exercise program if appropriate.
- Begin with a comfortable resistance and duration.
- Do not rely solely on the application display to determine the actual resistance of the bike.
- Stop exercising if you feel pain, dizziness, unusual shortness of breath or discomfort.
- Keep the device and browser within Bluetooth range.
- Do not use the application while driving or operating other machinery.

---

## 🔐 Privacy & Data

Workout history and profile information are stored locally in the browser's storage. The application does not require an account for its local workout features.

Local browser storage is not a backup. Export your data if you want to preserve it.

---

## 💬 Feedback

If you encounter a bug or have a feature suggestion, please open an issue in the project's GitHub repository.

Happy riding! 🚴
