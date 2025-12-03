# Bmswitcher - Development Documentation

**Project Name:** Bmswitcher Landing Page  
**Version:** 1.0.0  
**Description:** The official landing page for the Facebook BM Switcher Chrome Extension. It features a responsive design, multi-language support (English/Chinese), and follows the ByteDance Arco Design visual style.

---

## 🛠 Tech Stack

- **Core Framework:** React 18
- **Build Tool:** Vite 5
- **Language:** TypeScript
- **Styling:** Tailwind CSS (configured with Arco Design tokens)
- **Icons:** Lucide React
- **Routing:** Custom Hash-based Router (Context API)
- **State Management:** React Context API (for Theme, Language, Routing)

---

## 📂 Project Structure

```text
bmswitcher/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Standardized button component
│   ├── FeatureCard.tsx  # Cards used in the features section
│   ├── Features.tsx     # Features section layout
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero/Landing section
│   ├── Logo.tsx         # App Logo (Shuffle Icon)
│   └── Navbar.tsx       # Responsive navigation bar
├── contexts/            # Global State Logic
│   ├── LanguageContext.tsx # i18n logic (EN/ZH translations)
│   └── RouterContext.tsx   # Custom hash routing logic
├── pages/               # Page Views
│   ├── AboutPage.tsx
│   ├── FeaturesPage.tsx
│   ├── HomePage.tsx
│   ├── InstallPage.tsx
│   └── PrivacyPage.tsx
├── App.tsx              # Main Application Entry
├── index.html           # HTML Entry point & Tailwind Config
├── index.tsx            # React DOM mounting
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

To start the local development server:

```bash
npm run dev
```
The application will run at `http://localhost:5173` (default).

### Build for Production

To create a production-ready build:

```bash
npm run build
```
The output will be generated in the `dist/` folder.

---

## 🏗 Core Architecture

### 1. Custom Routing (`RouterContext.tsx`)
Unlike traditional React apps using `react-router-dom`, this project uses a lightweight **Hash-based router**.
- **Reason:** Simplifies static hosting (no server-side rewrite rules needed) and keeps the bundle size small.
- **Mechanism:** Listens to `window.location.hash`.
- **Usage:**
  ```tsx
  const { navigate, route } = useRouter();
  // To navigate:
  navigate('#/about');
  ```

### 2. Internationalization (`LanguageContext.tsx`)
- **Storage:** State is held in React Context.
- **Translations:** Dictionary object located directly in `LanguageContext.tsx`.
- **Supported Languages:** English (`en`), Chinese (`zh`).
- **Usage:**
  ```tsx
  const { t, language, setLanguage } = useLanguage();
  return <span>{t('hero.title')}</span>;
  ```

### 3. Styling & Design System (Arco Design)
The project adopts ByteDance's **Arco Design** language. The configuration is applied via Tailwind CSS customization.

**Key Visual Characteristics:**
- **Primary Color:** Arco Blue (`#165DFF`)
- **Rounding:** Large border radius (`rounded-xl`, `rounded-2xl`)
- **Shadows:** Soft, diffused shadows (`shadow-arco`)
- **Typography:** Inter font family.

**Tailwind Configuration:**
Currently defined in `index.html` script tag and `tailwind.config` via CDN logic for rapid prototyping, integrated with PostCSS for the build.

**Custom Colors:**
- `arco-primary`: `#165DFF`
- `arco-primaryHover`: `#4080FF`
- `arco-bg`: `#F2F3F5`

---

## 📦 Deployment

### Static Hosting
The project is built as a Static Single Page Application (SPA).

1. Run `npm run build`.
2. Upload the contents of the `dist` folder to your web server (Nginx, Apache, Vercel, Netlify, or GitHub Pages).

**Important Note for Nginx/Apache:**
Since this uses Hash Routing (`/#/`), no special server-side rewrite rules (like `try_files`) are required. It works out of the box on any static file server.

### Vite Config Note
The `base` path is set to `./` in `vite.config.ts` to ensure assets load correctly regardless of the subdirectory the app is deployed to.

```typescript
export default defineConfig({
  base: './', 
  // ...
});
```

---

## 🤝 Contributing

1. **Icons:** Use `lucide-react`. Ensure stroke width matches existing icons (usually standard or thin).
2. **Components:** Keep components functional. Use `interface` for Props.
3. **Translations:** When adding new text, always update both `en` and `zh` objects in `LanguageContext.tsx`.

