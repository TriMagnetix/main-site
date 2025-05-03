# Trimagnetix Company Website

A professional website for Trimagnetix built with Next.js and Tailwind CSS.

## Project Overview

This is a modern, responsive website built with:
- Next.js (React framework)
- TypeScript
- Tailwind CSS
- ESLint

The site features four main sections:
- Hero: Company introduction and call-to-action
- About: Brief company description
- Services: Key offerings
- Contact: Contact information and form

## Development

### Prerequisites
- Node.js 18.x or later
- npm 9.x or later

### Local Development
1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production
```
npm run build
```

Then, you can start the production server:
```
npm start
```

## Project Structure
```
trimagnetix/
├── src/                # Source files
│   ├── app/            # Next.js app router
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # React components
├── public/             # Static assets
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.mjs  # PostCSS configuration
├── next.config.ts      # Next.js configuration
└── package.json        # Node.js dependencies
```

## Color Scheme
- Dark Green: `#14532D`
- Light Green: `#A7F3D0`
- White: `#FFFFFF`
- Black (soft): `#1F2937`

## Deployment
The site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform
