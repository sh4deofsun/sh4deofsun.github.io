# Batuhan YALCIN — Personal Portfolio & CV

A premium, custom-engineered personal portfolio website and interactive CV built with a futuristic instrument-panel design system inspired by Teenage Engineering and the Nothing UI/UX aesthetics.

Hosted live on GitHub Pages: [sh4deofsun.github.io](https://sh4deofsun.github.io)

---

## ⚡ Tech Stack & Architecture

- **Core:** Vanilla HTML5, CSS3, and modern ES6+ JavaScript. No bloated frameworks or external JS dependencies.
- **Typography Stack:** 
  - **Doto:** Futuristic dot-matrix styling for display headers and display numbers.
  - **Space Grotesk:** Crisp sans-serif readability for description texts and main body content.
  - **Space Mono:** Monospace font for labels, buttons, navigation items, and data fields.
- **Design Tokens:** Strictly monochrome palette (OLED black `#000000` canvas, high-contrast grays, and white display values) with a signature red dot (`#D71921`) active accent color.
- **Visual Features:**
  - Dynamic **Dot-Matrix Background Motif** generated with pure CSS radial-gradients.
  - Custom **Segmented Skill Progress Bars** implementing Teenage Engineering patterns.
  - Fully responsive grid layout adapting from desktop view down to mobile view.
  - Left-aligned mobile navigation toggle button matching the direction the sidebar slides in from.
  - Built-in print-stylesheet optimizing the CV section for direct printing to paper or PDF.

---

## 📂 Project Structure

```text
├── css/
│   ├── fontAwesome.css  # Icons utility stylesheet
│   └── style.css        # Core Nothing design tokens, grids, layout, and responsive rules
├── js/
│   └── app.js           # SPA navigation, mobile toggling, and intersection observer logic
├── img/
│   ├── batuhanYALCIN.jpg # Profile photo
│   └── ...
├── index.html           # Main Single Page App (Home, About Me, CV tabs)
└── README.md            # Repository documentation
```

---

## 🚀 Running Locally

To run this project locally, simply spin up any static web server in the project root directory.

### Using Python:
```bash
python3 -m http.server 8000
```
Then open your browser and navigate to `http://localhost:8000`.

### Using Node.js / npm (Optional):
```bash
npm install -g local-web-server
ws -p 8000