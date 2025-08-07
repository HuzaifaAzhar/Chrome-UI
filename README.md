# Chrome New Tab Page Clone

A pixel-perfect recreation of Google Chrome's New Tab page built with Next.js and Tailwind CSS.

## Features

- **Exact Visual Match**: Recreates the Chrome New Tab page as shown in the provided screenshot
- **Interactive Elements**: Functional search bar, shortcuts, and browser controls
- **Tailwind CSS**: Modern utility-first CSS framework for styling
- **Responsive Design**: Adapts to different screen sizes while maintaining Chrome's look
- **Smooth Animations**: Hover effects and transitions matching Chrome's behavior

## Screenshot Match

This implementation matches the provided Chrome New Tab screenshot including:
- Google logo with correct colors
- Search bar with microphone and camera icons
- AI Mode button positioning
- Shortcut icons (Techlife, Web Store, Add shortcut)
- Top-right navigation (Gmail, Images, notifications, apps)
- Customize Chrome button
- Exact color scheme and spacing

## Tools Used

- **Next.js 14**: React framework with App Router
- **React**: Functional components with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for UI elements
- **TypeScript**: Type safety and better development experience

## How to Run Locally

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd chrome-UI
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx              # Main Chrome New Tab component
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global Tailwind styles
├── tailwind.config.js        # Tailwind configuration
├── README.md
└── package.json
\`\`\`

## Key Components

- **Browser Window**: Floating window with realistic Chrome styling
- **Tab System**: Interactive tab with close functionality
- **Google Logo**: Multi-colored Google branding
- **Search Interface**: Main search bar with voice and camera input
- **AI Mode**: Blue AI Mode button as shown in screenshot
- **Shortcuts Grid**: Customizable shortcut icons
- **Top Navigation**: Gmail, Images, and Google apps access

## Styling Approach

- **Tailwind CSS**: All styling done with Tailwind utility classes
- **No Custom CSS**: Minimal custom CSS, leveraging Tailwind's design system
- **Responsive**: Mobile-first responsive design
- **Accessibility**: Proper focus states and semantic HTML

## Browser Compatibility

Tested and optimized for:
- Chrome/Chromium browsers
- Firefox
- Safari
- Edge

## Performance

- Lightweight Tailwind CSS build
- Optimized React components
- Fast loading times
- Smooth 60fps animations
