# Dikshya Thapa - Portfolio Website

A modern, fully responsive portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme toggle with persistent storage using `next-themes`
- **Smooth Animations**: Engaging animations and transitions powered by Framer Motion
- **Component-Based**: Reusable React components for maintainability
- **SEO Optimized**: Next.js metadata and proper semantic HTML
- **Performance**: Built with Next.js for optimal performance and fast load times
- **Modern UI**: Clean, professional design with Tailwind CSS

## 📋 Sections

1. **Hero** - Eye-catching landing section with CTA buttons
2. **About** - Bio and skills showcase  
3. **Projects** - Featured projects with technologies and links
4. **Experience** - Timeline of education, courses, and hackathons
5. **Skills** - Categorized skills with proficiency levels
6. **Contact** - Contact information and message form
7. **Navigation** - Smooth scrolling navbar with theme toggle

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Navigate to the project directory
cd hugo-theme-academic-cv

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser to see the portfolio.

## 📚 Project Structure

```
app/                          # Next.js app router
├── layout.tsx               # Root layout with theme provider
├── page.tsx                 # Home page (all sections)
└── globals.css              # Global styles

components/
├── layout/                  # Layout components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── Layout.tsx          # Main layout wrapper
├── sections/                # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
└── ui/                      # Reusable UI components
    ├── Button.tsx
    ├── Card.tsx
    └── SocialLink.tsx

lib/
├── data.ts                  # Portfolio data and types
└── utils.ts                 # Utility functions

config/
└── siteConfig.ts            # Site configuration

hooks/
└── useScrollReveal.ts       # Custom scroll reveal hook
```

## 🎨 Customization

### Portfolio Data

Edit `lib/data.ts` to update:
- Personal information (name, title, bio)
- Skills and proficiency levels
- Projects and project details
- Education and experience
- Contact information

### Site Configuration

Edit `config/siteConfig.ts` to customize:
- Site title and description
- Navigation menu
- Social media links
- Theme colors

### Styling

All styles use Tailwind CSS. Global styles are in `app/globals.css`. Component-specific styles are defined inline using Tailwind utility classes.

## 🚀 Scripts

```bash
# Development
npm run dev          # Start dev server on localhost:3000

# Production
npm run build        # Create optimized production build
npm start            # Start production server

# Quality
npm run lint         # Run ESLint
```

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

## 🌙 Dark Mode

Dark mode is automatically enabled based on system preferences. Users can manually toggle the theme using the sun/moon icon in the navbar. Preference is saved to localStorage.

## 📞 Contact

The contact form on the Contact section can be configured to:
- Send emails to your address
- Integrate with email services (Formspree, EmailJS, etc.)
- Send to a backend API

Currently, the form validates input and shows a success message.

## 🔐 Security

- No sensitive data is exposed in the repository
- Contact form is client-side validated
- All external links open in new tabs with proper security attributes

## 📈 Performance

- Optimized images with Next.js Image component
- Automatic code splitting with Next.js
- Lighthouse optimized configuration
- Fast refresh in development mode

## 🌐 Deployment

### GitHub Pages

```bash
# Configure for static export
npm run build
```

Deploy the generated `out/` directory to GitHub Pages.

### Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Automatic deployment on every push

### Other Platforms

The built project can be deployed to:
- Netlify
- AWS Amplify
- Firebase Hosting
- Any static hosting provider

## 📝 License

This project is personal and created for portfolio purposes.

## 🤝 Contributing

This is a personal portfolio. For suggestions or improvements, feel free to create issues or submit pull requests.

---

**Built with ❤️ by Dikshya Thapa**

For questions or collaborations, reach out at: dikshyatha4258@gmail.com
