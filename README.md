# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, a clean design, and a great user experience.

## 🚀 Features

- **Modern Stack**: Built with React 18, TypeScript, and Vite for optimal performance
- **Beautiful UI**: Styled with Tailwind CSS and Framer Motion for smooth animations
- **Responsive Design**: Fully responsive and works great on all devices
- **Smooth Scrolling**: Section-based navigation with smooth scroll behavior
- **Interactive Elements**: Hover effects, animations, and transitions throughout

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rasta-pasta-710/portfolio.git
cd portfolio
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

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

#### Option 1: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect Vite and configure the build settings
5. Click "Deploy"

#### Option 2: Deploy via Vercel CLI
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production deployment:
```bash
vercel --prod
```

### Vercel Configuration
The project includes `vercel.json` with:
- Automatic SPA routing (all routes redirect to `index.html`)
- Optimized caching for static assets
- Build and dev command configuration

### Environment Variables
Currently, no environment variables are required. If you need to add any:
1. Add them in the Vercel dashboard under Project Settings → Environment Variables
2. Or use `.env.local` for local development (already in `.gitignore`)

## 🤖 GitHub Copilot Support

This project is optimized for use with GitHub Copilot! Check out our comprehensive guide:

📘 **[Copilot Usage Guide](COPILOT_USAGE.md)** - Learn how to leverage Copilot for this project

The guide includes:
- Setup instructions and prerequisites
- Basic and advanced prompt examples
- Best practices specific to our tech stack
- Common workflows and limitations
- Links to official documentation

## 📝 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx` to update your name and tagline
2. **About Section**: Modify `src/components/About.tsx` with your personal information
3. **Skills**: Update the skills array in `src/components/Skills.tsx`
4. **Projects**: Edit the projects array in `src/components/Projects.tsx` with your actual projects
5. **Contact**: Update social links and email in `src/components/Contact.tsx`

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**rasta-pasta-710**

- GitHub: [@rasta-pasta-710](https://github.com/rasta-pasta-710)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you like this project, give it a star on GitHub!

