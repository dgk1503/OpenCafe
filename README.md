## OpenCafe



## 🛠 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Framework** | [Next.js](https://nextjs.org/) 16.2.0, [React](https://react.dev/) 19.2.4 |
| **3D Graphics** | [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) 9.5.0 |
| **Animations** | [GSAP](https://greensock.com/gsap/) 3.14.2, [Lenis](https://lenis.studiofreight.com/) (smooth scroll) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) 4, PostCSS |
| **Icons** | [Lucide React](https://lucide.dev/) 1.7.0 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) 5 |
| **Linting** | [ESLint](https://eslint.org/) 9 |

## Features

- **3D Visualization** – Interactive 3D elements powered by Three.js and React Three Fiber
- **Advanced Animations** – Smooth scroll animations with GSAP and ScrollTrigger
- **Smooth Scrolling** – Enhanced user experience with Lenis scroll hijacking
- **Responsive Design** – Mobile-first approach with Tailwind CSS
- **Type Safety** – Full TypeScript support
- **Performance Optimized** – Server-side rendering with Next.js

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd OpenCafe

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── PreLoader.tsx
│   │   └── LenisProvider.tsx
│   ├── locations/           # Location pages
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
└── frontend/                # Frontend utilities
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm start         # Start production server
npm run lint      # Run ESLint
```

## License

Private project.
