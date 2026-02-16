# Zeely React Test Task

Test assignment — implementation of an avatar background generation sidebar.

**Live Demo:** [https://zeely-react-test-task.vercel.app/](https://zeely-react-test-task.vercel.app/)

## Features

- **Change background** button — opens the sidebar
- **Background idea** — textarea with local state, Regenerate (random prompts), Undo/Redo history
- **Generate BG** — shuffles placeholder card backgrounds on click
- **Your backgrounds** — cards with Loading (25%, 1 min left), Default (with badge), Placeholder (generated)
- **Italian Plate No2 Expanded** font
- **Accessibility** — aria-labels, keyboard support (Sheet)

## Project Structure

```
src/
├── App.tsx                    # Root component with sidebar trigger
├── main.tsx                   # App entry point
├── index.css                  # Global styles, fonts, theme variables
├── store/
│   └── sidebar-store.ts       # Zustand store (open/close sidebar)
├── lib/
│   └── utils.ts               # Shared utilities (cn, etc.)
└── components/
    ├── ui/                    # Shadcn UI primitives
    │   ├── button.tsx
    │   └── sheet.tsx
    └── BackgroundGeneratorSidebar/
        ├── index.tsx          # Main sidebar component
        ├── constants.ts       # DEFAULT_PROMPT, CARD_SIZE, PLACEHOLDER_BGS
        ├── utils.ts           # shuffleArray, getRandomPrompt
        ├── BackgroundIdeaSection.tsx   # Textarea + Regenerate + Undo/Redo
        ├── GenerateButton.tsx          # Generate BG button
        └── cards/             # Background card variants
            ├── index.ts       # Re-exports
            ├── LoadingCard.tsx   # Progress state (25%, 1 min left)
            ├── DefaultCard.tsx   # Default background with badge
            └── PlaceholderCard.tsx # Generated background cards
```

## Stack

- React.js
- TypeScript
- Tailwind CSS
- Shadcn UI (Radix primitives)
- Zustand (state management)


## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Build

```bash
npm run build
npm run preview
```
