# Mohit's Portfolio

A modern, comprehensive portfolio website built with React, Vite, and Tailwind CSS showcasing real projects, skills, and interests.

## 🎉 What's Inside

- ✨ **8 Detailed Projects** - Real projects with comprehensive descriptions pulled from actual README files
- 💼 **Professional Experience** - TekLink International & Accenture work history
- 🎯 **70+ Skills** - Organized into 8 categories (Languages, AI/ML, Backend, Frontend, Databases, Cloud, Tools, Practices)
- 🎨 **Hobbies Section** - Chess and Photography with detailed descriptions
- 📱 **Fully Responsive** - Beautiful on all devices
- 🌓 **Dark Theme** - Modern gradient design with blue-purple accents
- ⚡ **Fast Performance** - Vite-powered with instant HMR

## 🚀 Features

### Projects Showcase
Each of the 8 projects includes:
- Detailed technical description (100-200 words each)
- Key highlights (4 bullet points per project)
- Technology stack with visual tags
- GitHub repository links
- Gradient-themed cards with hover effects

**Featured Projects:**
1. Agentic Resume Optimizer (AI + Streamlit)
2. Job Search Automation Tool (React + Python)
3. Cloud Automation Platform (AWS + Terraform + Node.js)
4. Clinical Trial Data Pipeline (ETL + OpenAI GPT-4)
5. ShareBite - Zero Hunger Platform (Spring Boot + React)
6. Cloud Resource Management System (Enterprise Spring Boot)
7. Lox Interpreter (Tree-walk interpreter in Python)
8. BetBrains Sports Analytics (Hackathon project)

### Skills Display
**8 Categorized Skill Groups:**
- Languages (8 technologies)
- AI/ML & LLMs (9 technologies)
- Backend & Frameworks (9 technologies)
- Frontend & UI (8 technologies)
- Databases (6 technologies)
- Cloud & DevOps (7 technologies)
- Tools & Technologies (8 tools)
- Development Practices (6 methodologies)

### Hobbies & Interests
- **Chess**: Strategic thinking, pattern recognition, with Chess.com profile link
- **Photography**: Creative outlet with detailed description

### Animations & Effects
- Mouse-tracking gradient orb
- Floating code snippets in background
- Typing animation for tagline
- Smooth scroll and hover effects
- Card animations and transitions
- Decorative grid overlay

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Personal Information

1. **Profile Photo**: In `src/App.jsx`, uncomment the `<img>` tag in the hero section and replace `YOUR_PHOTO_URL_HERE` with your photo URL
2. **Contact Links**: Update the `href` attributes in the social media links with your actual URLs
3. **Email**: Replace `your.email@example.com` in the contact section
4. **Projects**: Modify the `projects` array to showcase your actual projects
5. **Experience**: Update the `experience` array with your work history
6. **Skills**: Customize the `skills` object with your technologies

### Color Scheme

The portfolio uses a blue-purple gradient theme. To change colors, search for these Tailwind classes in `src/App.jsx`:
- `from-blue-*` and `to-purple-*` for gradients
- `text-blue-*` for text colors
- `border-blue-*` for borders

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind directives
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deploy Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy on push
- **Other**: Any static hosting service (Cloudflare Pages, AWS S3, etc.)

## 📝 TODO

- [ ] Add your actual profile photo
- [ ] Update contact links (GitHub, LinkedIn, Email)
- [ ] Add real project links and details
- [ ] Consider adding a blog section
- [ ] Add Google Analytics or similar
- [ ] Implement dark/light mode toggle (optional)
- [ ] Add smooth scroll navigation
- [ ] Create a downloadable resume link

## 🎯 Performance

- Lighthouse Score: Aim for 90+ across all metrics
- Bundle size optimized with Vite code splitting
- Images should be optimized (WebP format recommended)
- Lazy loading implemented for better performance

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

---

**Built with ❤️ using React & Tailwind CSS**
