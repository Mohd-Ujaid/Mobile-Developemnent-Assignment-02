
---

<h1 align="center" style="font-size: 60px;">📝 NotesX</h1>

<p align="center">
  A sleek, modern note-taking app built with <strong>React Native</strong> & <strong>Expo</strong>
  <br />
  <em>Create • Search • Organize — all in a beautiful dark/light interface.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-61DAFB?logo=react&logoColor=white" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-55-000020?logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/JavaScript-3178C6?logo=Javascript&logoColor=white" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-green" alt="Platform" />
  <img src="https://img.shields.io/badge/License-Private-red" alt="License" />
</p>

---

## 🎬 Video Preview

---

[Video Preview](https://ik.imagekit.io/ytb96aypi/assignment/preview.mp4?updatedAt=1778422970932)

---

<video controls width="800" height="600">
    <source src="https://ik.imagekit.io/ytb96aypi/assignment/preview.mp4?updatedAt=1778422970932" type="video/mp4">
    Your browser does not support the video tag.
</video>

---

## 🎯 Purpose & Requirements

This project was built as part of a **mobile development assignment** to demonstrate proficiency in creating a modern, responsive, and high-performance React Native application using **Expo**. The goal is to build a note-taking app with an emphasis on clean architecture, theming, and user experience.

---

## ✨ Features

| Feature                   | Description                                                                       |
| ------------------------- | --------------------------------------------------------------------------------- |
| 📝 **Create Notes**       | Add new notes with a title and content through a dedicated creation screen        |
| 🔍 **Search Notes**       | Instantly filter notes by title or content using the built-in search bar          |
| 🗑️ **Delete Notes**       | Remove notes with a native confirmation dialog to prevent accidental deletion     |
| 🌗 **Dark / Light Mode**  | Toggle between dark and light themes — respects your system preference by default |
| 📱 **Cross-Platform**     | Runs on **iOS**, **Android**, and **Web** from a single codebase                  |
| 🧭 **File-Based Routing** | Powered by **Expo Router** for declarative, type-safe navigation                  |
| ⌨️ **Keyboard Aware**     | Inputs automatically adjust for the keyboard on both iOS and Android              |
| 🕐 **Timestamps**         | Every note is stamped with a human-readable creation date and time                |

---

## 🛠️ Tech Stack

| Technology                                                                                       | Purpose                              |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| [React Native](https://reactnative.dev/) `0.83.6`                                                | Core mobile framework                |
| [Expo](https://expo.dev/) `~55`                                                                  | Development platform & build tooling |
| [Expo Router](https://docs.expo.dev/router/introduction/) `~55`                                  | File-based navigation                |
| [React](https://react.dev/) `19.2.0`                                                             | UI rendering engine                  |
| [TypeScript](https://www.typescriptlang.org/) `~5.9`                                             | Type safety                          |
| [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) `4.2.1`           | Smooth animations                    |
| [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) `~2.30` | Touch gestures                       |
| Context API                                                                                      | State management (notes & theme)     |

---

## 📁 Project Structure

```
NotesX/
├── assets/
│   ├── images/              # App icons, splash screen, logos
│   └── videos/              # Preview video
├── src/
│   ├── app/                 # Screens (Expo Router - file-based routing)
│   │   ├── _layout.tsx      # Root layout (wraps Theme & Notes providers)
│   │   ├── index.jsx        # 🏠 Home screen — note list, search, theme toggle
│   │   └── addnotes.jsx     # ➕ Add note screen — title & content inputs
│   ├── components/
│   │   └── Notes.jsx        # 📋 Note card — renders list with edit/delete actions
│   └── store/
│       ├── NotesContext.jsx  # 🗃️ Notes state — add, delete, list
│       └── ThemeProvider.jsx # 🎨 Theme state — dark/light toggle
├── app.json                 # Expo configuration
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # You are here!
```

---

## ⚙️ Prerequisites

Before you begin, make sure you have the following installed on your machine:

| Tool         | Version  | Installation                      |
| ------------ | -------- | --------------------------------- |
| **Node.js**  | `>=18.x` | [Download](https://nodejs.org/)   |
| **npm**      | `>=9.x`  | Comes bundled with Node.js        |
| **Expo CLI** | Latest   | Installed automatically via `npx` |
| **Git**      | Latest   | [Download](https://git-scm.com/)  |

### For Mobile Testing (optional)

- **Expo Go** app on your phone — [iOS](https://apps.apple.com/app/expo-go/id982107779) · [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **Android Studio** (for Android emulator) — [Download](https://developer.android.com/studio)
- **Xcode** (for iOS simulator, macOS only) — [Download](https://developer.apple.com/xcode/)

---

## 🚀 Getting Started

Follow these steps to get **NotesX** running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Mohd-Ujaid/Mobile-Developemnent-Assignment-02.git
cd NotesX
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npx expo start
```

This will open the **Expo Dev Tools** in your terminal. From here you can:

| Key     | Action                                 |
| ------- | -------------------------------------- |
| `a`     | Open on **Android** emulator           |
| `i`     | Open on **iOS** simulator (macOS only) |
| `w`     | Open in **Web** browser                |
| `r`     | Reload the app                         |
| Scan QR | Open on **Expo Go** (physical device)  |

### 4. Run on a Specific Platform

```bash
# Android
npx expo start --android

# iOS (macOS only)
npx expo start --ios

# Web
npx expo start --web
```

---

## 📱 Usage Guide

### Creating a Note

1. Tap the **`+`** floating button at the bottom of the home screen
2. Enter a **title** and **content** for your note
3. Tap **Save** — your note will appear on the home screen with a timestamp

### Searching Notes

1. Use the **search bar** at the top of the home screen
2. Type your query — notes are filtered by both **title** and **content**

### Deleting a Note

1. Tap the **Delete** button on any note card
2. Confirm the deletion in the alert dialog

### Toggling Theme

1. Tap the **☀️ / 🌙** icon next to "My Notes" on the home screen
2. The theme will switch between **light** and **dark** mode instantly

---

## 🧰 Available Scripts

| Script      | Command           | Description                       |
| ----------- | ----------------- | --------------------------------- |
| **Start**   | `npm start`       | Start the Expo development server |
| **Android** | `npm run android` | Start and open on Android         |
| **iOS**     | `npm run ios`     | Start and open on iOS             |
| **Web**     | `npm run web`     | Start and open in browser         |
| **Lint**    | `npm run lint`    | Run ESLint via Expo               |

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────┐
│                 _layout.tsx                  │
│         (Root Layout - Expo Router)         │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │          ThemeProvider                 │  │
│  │   (Dark/Light theme + system pref)    │  │
│  │                                       │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │       NotesProvider             │  │  │
│  │  │  (Notes state: add, delete)     │  │  │
│  │  │                                 │  │  │
│  │  │  ┌───────────┐ ┌────────────┐  │  │  │
│  │  │  │  index    │ │  addnotes  │  │  │  │
│  │  │  │  (Home)   │ │  (Create)  │  │  │  │
│  │  │  └───────────┘ └────────────┘  │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

The app uses **React Context API** for state management with two providers:

- **`ThemeProvider`** — Manages dark/light mode, reads the system color scheme as the default, and exposes a toggle function.
- **`NotesProvider`** — Manages the notes array in memory with `addNote` and `deleteNote` operations.

---

## 🧪 Troubleshooting

<details>
<summary><strong>❌ <code>expo start</code> fails with module not found</strong></summary>

Delete `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install
npx expo start --clear
```

On **Windows (PowerShell)**:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
npx expo start --clear
```

</details>

<details>
<summary><strong>❌ Metro bundler cache issues</strong></summary>

Clear the Metro cache:

```bash
npx expo start --clear
```

</details>

<details>
<summary><strong>❌ Expo Go can't connect to the dev server</strong></summary>

- Make sure your phone and computer are on the **same Wi-Fi network**
- Try switching from **LAN** to **Tunnel** mode:
  ```bash
  npx expo start --tunnel
  ```
  _(This requires `@expo/ngrok` — Expo will prompt you to install it)_

</details>

<details>
<summary><strong>❌ Android emulator not detected</strong></summary>

- Ensure Android Studio is installed and an **AVD** (Android Virtual Device) is running
- Verify `adb` is in your PATH:
  ```bash
  adb devices
  ```

</details>

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "feat: add my feature"`
4. **Push** to your branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

---

## 📄 License

This project is **private** and part of a mobile development course assignment.

---

<p align="center">
  Built using <strong>React Native</strong> & <strong>Expo</strong>
</p>

---
