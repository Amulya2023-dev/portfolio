# Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing 8+ years of full stack development experience.

## Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with modern features (CSS Variables, Flexbox, Grid)
- **Technologies Featured**: React, Angular, TypeScript, Java, Python, Node.js

## Features

- 🎨 Modern and beautiful UI/UX design
- 📱 Fully responsive layout
- 🚀 Smooth scrolling navigation
- 💼 Professional experience timeline
- 🛠️ Comprehensive skills showcase

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   └── *.css (component styles)
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Update Personal Information

- **About Section**: Edit `src/components/About.js`
- **Experience**: Update timeline in `src/components/Experience.js`
- **Skills**: Modify skills data in `src/components/Skills.js`

### Styling

The portfolio uses CSS custom properties (variables) defined in `src/index.css`. Modify these to change the color scheme:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... other variables */
}
```

## Sections

1. **Hero** - Eye-catching landing section with introduction
2. **About** - Professional background and statistics
3. **Skills** - Technical skills with proficiency levels
4. **Experience** - Professional work history timeline

## License

This project is open source and available for personal use.
