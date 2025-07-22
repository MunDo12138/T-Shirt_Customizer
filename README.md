# 3D T-Shirt Customizer

A modern, interactive 3D t-shirt customization tool built with React, Three.js, and Framer Motion. Create unique designs with real-time 3D visualization, color customization, and AI-powered image generation.

## 🚀 Live Demo

[View Live Demo](https://t-shirt-customizer-inky.vercel.app/)

## ✨ Features

- **3D Visualization**: Real-time 3D t-shirt model with interactive camera controls
- **Color Customization**: Dynamic color picker with live preview
- **Logo & Pattern Upload**: Upload custom images for logos or full-shirt patterns
- **AI Image Generation**: Generate custom designs using AI (DALL-E integration)
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Smooth Animations**: Beautiful transitions powered by Framer Motion
- **Download Functionality**: Export your custom design as an image

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **State Management**: Valtio
- **Styling**: Tailwind CSS
- **Color Picker**: React Color
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/t-shirt-customizer.git
cd t-shirt-customizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 Usage

1. **Start Customizing**: Click "Customize It" on the home screen
2. **Change Colors**: Use the color picker to change the t-shirt color
3. **Upload Images**: 
   - Upload a logo for the chest area
   - Upload a pattern for the entire shirt
4. **AI Generation**: Enter a prompt to generate AI-powered designs
5. **Download**: Save your custom design as an image

## 🏗️ Project Structure

```
src/
├── assets/          # Static images and icons
├── canvas/          # 3D components (Shirt, Camera, Backdrop)
├── components/      # Reusable UI components
├── config/          # Configuration files and constants
├── pages/           # Main page components (Home, Customizer)
└── store/           # State management
```

## 🔧 Configuration

The app supports both development and production environments:

- **Development**: Uses localhost backend for AI features
- **Production**: Uses deployed backend service

## 🚀 Deployment

The app is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Three.js community for excellent 3D web graphics
- React Three Fiber for seamless React integration
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling

## 📸 Screenshots

![Home Screen](https://github.com/MunDo12138/T-Shirt_Customizer/assets/66548936/002b9c3e-59b8-4ebf-8a9c-f010a1837b7f)

![Customization Interface](https://github.com/MunDo12138/T-Shirt_Customizer/assets/66548936/47b4e5e1-93a4-4ef8-bfae-3fa709cbba50)
