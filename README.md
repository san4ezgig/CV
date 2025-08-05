# 🎮 Retro Gaming CV Portfolio

A nostalgic retro gaming-themed CV/portfolio website built with modern web technologies. This interactive portfolio presents professional information through an authentic retro gaming interface with pixel-perfect design and smooth animations.

## ✨ Features

- **🎨 Retro Gaming Aesthetic**: Authentic retro gaming UI with custom pixel art assets
- **🎵 Background Music**: Optional background music with custom controls
- **📱 Fully Responsive**: Optimized for all screen sizes with dynamic positioning
- **⚡ Interactive Menu**: Hover effects and smooth transitions
- **🖼️ Modal Windows**: Clean CV sections displayed in themed modal dialogs
- **🎯 Dynamic Positioning**: Responsive background positioning with ResizeObserver
- **⌨️ Keyboard Navigation**: Full keyboard accessibility support
- **🎬 Video Background**: Animated background with fallback images

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x
- **Package Manager**: npm
- **Development**: ESLint, Hot Module Replacement

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/san4ezgig/cv.git
cd cv
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server with host binding
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Project Structure

```
src/
├── components/          # React components
│   ├── MainMenu.tsx    # Main interactive menu
│   ├── CVModal.tsx     # Modal container
│   ├── CVModalContent.tsx # CV content renderer
│   ├── MusicControls.tsx  # Audio controls
│   └── Checkbox.tsx    # Custom checkbox component
├── data/
│   └── cv-data.json    # CV content and personal info
└── main.tsx           # Application entry point

public/                # Static assets
├── background.png     # Desktop background image
├── background_mobile.png # Mobile background image
├── background_video.mp4  # Background video
├── button.png         # UI button assets
├── music.mp3         # Background music
└── ...               # Other UI assets
```

## 🎨 Customization

### Personal Information

Update your CV data in `src/data/cv-data.json`:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com"
  },
  "experience": [...],
  "techStack": {...}
}
```

### Visual Assets

Replace the assets in the `public/` folder:
- `background.png` - Main background image (desktop)
- `background_mobile.png` - Mobile background image
- `background_video.mp4` - Background video (optional)
- `music.mp3` - Background music (optional)
- UI elements (buttons, cursors, etc.)

### Styling

The project uses Tailwind CSS 4.x. Customize the theme in your Tailwind configuration or update the component styles directly.

## 🌐 Deployment

### GitHub Pages

1. Install the GitHub Pages plugin:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
{
  "homepage": "https://san4ezgig.github.io/cv",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Vercel/Netlify

Simply connect your GitHub repository to Vercel or Netlify for automatic deployments.

## 🎮 Features in Detail

### Responsive Design
- Dynamic background positioning using `getCoveredBackgroundPointCoords`
- ResizeObserver for real-time layout updates
- Mobile-first responsive breakpoints

### Interactive Elements
- Hover states with scale animations
- Custom cursor with retro styling
- Smooth modal transitions
- Audio controls with volume management

### Accessibility
- Full keyboard navigation support
- Semantic HTML structure
- ARIA labels and proper focus management
- Screen reader friendly content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Retro gaming community for design inspiration
- React and Vite teams for excellent developer experience
- Tailwind CSS for utility-first styling approach

## 📧 Contact

Aliaksandr Jyha - [san4ezgig2@gmail.com](mailto:san4ezgig2@gmail.com)

Project Link: [https://github.com/san4ezgig/cv](https://github.com/san4ezgig/cv)

