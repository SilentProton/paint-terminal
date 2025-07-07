# 🎨 paint-terminal

A lightweight Node.js utility for printing **colored, styled terminal output** using ANSI escape codes. Works with **CommonJS** and **ESM** formats.

---

## ✨ Features

- ✅ Easy terminal logging with colors and backgrounds
- ✅ ANSI escape code support
- ✅ Supports both `require` and `import`
- ✅ Useful for CLI tools, logs, and debugging

---

## 📦 Installation

```bash
npm install paint-terminal
```

## 🚀 Usage

### ✅ ES Module (ESM)

 🧪 Example: `terminal_log` with Color, Background, and Style

You can pass a text color, background color, and an optional text style to `terminal_log`.

```ts
import { terminal_log } from "paint-terminal";

// Green text, black background, bold style
terminal_log("✅ Task Completed", "green", "black", "bold");

// Yellow text with red background and underline
terminal_log("⚠ Warning!", "yellow", "red", "underline");

// Cyan text with no background, italic style
terminal_log("ℹ Info Message", "cyan", undefined, "italic");

// Bright white text with magenta background and inverse style
terminal_log("🚫 Access Denied", "brightWhite", "magenta", "inverse");
```

### ✅ Common JS (CJS)

``` bash
const { terminal_log } = require("paint-terminal");

terminal_log("Error occurred!", "red", "white");
terminal_log("Info message", "blue");
terminal_log("Debug", "gray", "black");
```

## 🎨 Color Reference

You can use any of the following color names for color (text) and background:

## 🎨 Supported Keys

This package supports the following values for text color, background color, and styles.

| **Text Colors**      | **Background Colors** | **Styles**         |
|----------------------|-----------------------|--------------------|
| `black`              | `black`               | `reset`            |
| `red`                | `red`                 | `bold`             |
| `green`              | `green`               | `dim`              |
| `yellow`             | `yellow`              | `italic`           |
| `blue`               | `blue`                | `underline`        |
| `magenta`            | `magenta`             | `inverse`          |
| `cyan`               | `cyan`                | `hidden`           |
| `white`              | `white`               | `strikethrough`    |
| `gray` / `grey`      | `gray` / `grey`       |                    |
| `brightRed`          | `brightRed`           |                    |
| `brightGreen`        | `brightGreen`         |                    |
| `brightYellow`       | `brightYellow`        |                    |
| `brightBlue`         | `brightBlue`          |                    |
| `brightMagenta`      | `brightMagenta`       |                    |
| `brightCyan`         | `brightCyan`          |                    |
| `brightWhite`        | `brightWhite`         |                    |



## ✅ Usage Example (in Browser or Frontend Project)

```ts
import { console_log } from "./console";

// Basic colored log
console_log("Hello World!", "blue");

// Colored text with background
console_log("Success!", "white", "green");

// Red text with yellow background
console_log("Warning!", "red", "yellow");
