# 🎨 Tessera Web - Frontend UI Documentation

<img src="src/assets/tessera-emblem.png" alt="Tessera Studios Logo" width="100" height="100" />

## 📋 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [UI Components](#ui-components)
- [Pages & Routing](#pages--routing)
- [Styling Architecture](#styling-architecture)
- [Development Workflow](#development-workflow)
- [Build & Deployment](#build--deployment)

---

## 🎯 Overview

This is the frontend application for **Tessera Studios**, built with React and TypeScript. The application showcases the company's services, team, and provides a contact interface for potential clients. The UI features a modern, dark-themed design with purple accents and smooth animations.

### Key Features
- 🌐 Multi-page React application with client-side routing
- 🎨 Modern, dark-themed UI with custom color palette
- ✨ Smooth scroll animations using AOS (Animate On Scroll)
- 📱 Fully responsive design (mobile-first approach)
- ⚡ Fast build and dev experience with Vite
- 🎭 Interactive 3D elements with Three.js/React Three Fiber
- 🔤 FontAwesome icons integration
- 🎬 Animated visual effects

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.1.1 | UI framework for building component-based interfaces |
| **TypeScript** | 5.8.3 | Type-safe JavaScript for better developer experience |
| **Vite** | 7.1.7 | Build tool and dev server (HMR, fast builds) |
| **React Router DOM** | 7.9.3 | Client-side routing and navigation |
| **Tailwind CSS** | 4.1.13 | Utility-first CSS framework for styling |
| **AOS** | 2.3.4 | Animate On Scroll library for scroll-triggered animations |
| **Three.js** | 0.180.0 | 3D graphics library |
| **@react-three/fiber** | 9.3.0 | React renderer for Three.js |
| **FontAwesome** | 7.1.0 | Icon library for UI elements |
| **Lucide React** | 0.544.0 | Icon library (alternative/supplementary icons) |

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing and autoprefixing
- **Shadcn UI** - Component library utilities
- **tw-animate-css** - Additional Tailwind animation utilities

---

## 📁 Project Structure

```
frontend/
├── public/                     # Static assets served at root
├── src/
│   ├── assets/                # Images, videos, and static media
│   │   ├── tessera-emblem.png
│   │   ├── logo.png
│   │   ├── team photos
│   │   ├── service images
│   │   └── ...
│   ├── components/            # Reusable UI components
│   │   ├── ContactCTA.tsx    # Call-to-action contact section
│   │   ├── Footer.tsx        # Site footer with links & info
│   │   ├── Navbar.tsx        # Navigation bar with mobile menu
│   │   ├── ScrollToTop.tsx   # Utility to scroll to top on route change
│   │   └── Silk.tsx          # Decorative 3D background element
│   ├── data/                  # Static data and content
│   │   └── team-members.tsx  # Team member information and bios
│   ├── lib/                   # Utility functions
│   │   └── utils.ts          # Helper functions (e.g., className merging)
│   ├── pages/                 # Page components (routes)
│   │   ├── Home.tsx          # Landing page
│   │   ├── About.tsx         # About company & team
│   │   ├── Services.tsx      # Services offered
│   │   ├── Contact.tsx       # Contact form
│   │   ├── ContactSuccess.tsx # Contact form success page
│   │   ├── TeamMember.tsx    # Individual team member detail page
│   │   └── Error.tsx         # 404 error page
│   ├── App.tsx               # Root component with routing setup
│   ├── App.css               # App-level styles
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles, Tailwind imports, CSS variables
├── components.json            # Shadcn UI configuration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies and scripts
└── dockerfile                # Docker configuration for containerization
```

---

## 🧩 UI Components

### Core Components

#### **Navbar** (`components/Navbar.tsx`)
- Responsive navigation bar with mobile hamburger menu
- Active link highlighting using React Router's `NavLink`
- Links: Home, About, Services, Contact
- Fixed positioning with glass-morphism effect
- Mobile-responsive with toggle menu for small screens

#### **Footer** (`components/Footer.tsx`)
- Site footer with company information
- Social media links (FontAwesome icons)
- Additional navigation links
- Copyright and branding

#### **ContactCTA** (`components/ContactCTA.tsx`)
- Reusable call-to-action component
- Encourages users to get in touch
- Can be placed on multiple pages for conversion optimization

#### **Silk** (`components/Silk.tsx`)
- Decorative 3D background element using Three.js
- Adds visual interest and modern aesthetics
- Subtle animations and effects

#### **ScrollToTop** (`components/ScrollToTop.tsx`)
- Utility component that scrolls to top on route changes
- Improves UX when navigating between pages

---

## 📄 Pages & Routing

The application uses **React Router DOM** for client-side routing. All routes are defined in `App.tsx`.

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home.tsx | Landing page with company intro and overview |
| `/about` | About.tsx | Company story, mission, vision, and team |
| `/team/:memberId` | TeamMember.tsx | Individual team member profile page |
| `/services` | Services.tsx | Detailed services offered |
| `/contact` | Contact.tsx | Contact form for inquiries |
| `/contact-success` | ContactSuccess.tsx | Success confirmation after form submission |
| `*` (404) | Error.tsx | Error page for invalid routes |

### Page Features

#### **Home Page**
- Hero section with tagline: "Building Your Vision, One Piece at a Time"
- "What We Do" section
- "Our Approach" section with imagery
- "Why Choose Tessera" section
- Contact CTA

#### **About Page**
- Company introduction
- Mission and vision statements
- Team members showcase with photos
- Links to individual team member pages

#### **Services Page**
- Detailed breakdown of services:
  - Software Development
  - UI/UX Design
  - Brand Identity
  - Digital Strategy
- Service descriptions with imagery

#### **Contact Page**
- Contact form with fields:
  - Name
  - Email
  - Message/Inquiry
- Form validation
- Submission handling

---

## 🎨 Styling Architecture

### Approach
The project uses **Tailwind CSS** as the primary styling solution, with custom CSS variables and utility classes. The design system is consistent and maintainable.

### Color Palette

Defined in `src/index.css`:

```css
--white: #ffffff; 
--black: #000000;
--light-grey: #d9d9d9;
--grey: #aeaeae;
--section-grey: #444444;
--background: #0c0c0e;        /* Main background (dark) */
--primary: #5748d0;           /* Primary purple */
--secondary: #968be8;         /* Secondary light purple */
--accent: #392e8f;            /* Accent purple */
--dark-purple: #24116f;
--deep-purple: #180a4f;
--surface-grey: #2e2e37;
--surface-purple: #100c1e;
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- Responsive text sizes using Tailwind's responsive utilities

### Responsive Design
The application follows a **mobile-first** approach:
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl` (Tailwind defaults)
- Flexbox and Grid for layouts
- Responsive images with proper sizing
- Mobile navigation menu

### Animations
- **AOS (Animate On Scroll)**: Used for scroll-triggered animations
  - Configuration in `App.tsx`:
    - Duration: 800ms
    - Easing: ease-in-out
    - Once: true (animation happens only once)
- **tw-animate-css**: Additional Tailwind-compatible CSS animations
- Custom CSS animations in component-specific CSS files

### CSS Organization
1. **Global Styles**: `src/index.css` - CSS variables, resets, Tailwind imports
2. **App Styles**: `src/App.css` - App-level styles
3. **Component Styles**: Component-specific CSS files (e.g., `Navbar.css`, `Home.css`)
4. **Utility Classes**: Tailwind utilities used inline in JSX

---

## ⚙️ Development Workflow

### Prerequisites
- **Node.js** (LTS version recommended, v18+)
- **npm** or **yarn** package manager

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install
```

### Development Server

```bash
# Start Vite dev server with HMR
npm run dev
# or
npm start

# Application will be available at:
# http://localhost:5173
```

The dev server includes:
- ⚡ Hot Module Replacement (HMR)
- 🔄 Fast refresh for React components
- 📊 Error overlay for debugging

### Code Quality

```bash
# Run ESLint
npm run lint

# ESLint will check for:
# - Code quality issues
# - TypeScript type errors
# - React best practices
# - Accessibility issues
```

### Type Checking

```bash
# TypeScript type checking
npx tsc --noEmit
```

---

## 🏗 Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Output directory: dist/
# Contains:
# - Minified JS bundles
# - Optimized CSS
# - Processed assets
# - index.html
```

### Build Configuration
- **Bundler**: Vite (Rollup under the hood)
- **TypeScript**: Compiled to JavaScript
- **CSS**: Processed with PostCSS and Tailwind
- **Assets**: Optimized and fingerprinted
- **Output**: Static files in `dist/`

### Preview Production Build

```bash
# Serve production build locally
npm run preview

# Preview server will start at:
# http://localhost:4173
```

### Deployment

The project is configured for deployment on **Netlify**:

**Netlify Configuration:**
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18+ (specified in `.nvmrc` or build settings)

**Continuous Deployment:**
- Pushes to the `main` branch trigger automatic deployments
- Live site: [www.tessera-studios.com](https://www.tessera-studios.com)


## 📚 Additional Resources

### Documentation Links
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Three.js Documentation](https://threejs.org/docs/)

### Project-Specific Notes
- **Shadcn UI**: Configured in `components.json` for component library utilities
- **Path Aliases**: Configured in `tsconfig.json` for cleaner imports (e.g., `@/components`)
- **Icons**: Using both FontAwesome and Lucide React for comprehensive icon coverage

### Best Practices
1. **Component Organization**: Keep components small and focused
2. **Type Safety**: Use TypeScript interfaces for props and state
3. **Accessibility**: Use semantic HTML and ARIA attributes
4. **Performance**: Lazy load images and components where appropriate
5. **Code Style**: Follow ESLint rules and Prettier formatting (if configured)

---

## 🤝 Contributing

When working on the frontend:
1. Create a new branch for your feature/fix
2. Follow existing code style and conventions
3. Test your changes in multiple screen sizes
4. Run linter before committing: `npm run lint`
5. Build the project to ensure no build errors: `npm run build`
6. Update this documentation if you add new features or change architecture

---

## 📞 Support

For questions or issues related to the frontend:
- Review existing documentation
- Check the [main README](/README.md) in the repository root
- Refer to the [DEV-README](/DEV-README.md) for development environment setup

---

**Built with ❤️ by Tessera Studios**

*Building your vision, one piece at a time.*
