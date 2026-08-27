# Steps to Install a shadcn/ui Basic Project (Vite + React)

## 1. Create a Vite + React + TypeScript Project

Scaffold a new Vite project with the React + TypeScript template:

```bash
npm create vite@latest frontend -- --template react-ts
```

Then navigate into it and install dependencies:

```bash
cd frontend
npm install
```

## 2. Install and Configure Tailwind CSS

Install Tailwind v4 (or v3 if you prefer) along with the Vite plugin:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

Add the Tailwind plugin to your Vite config:

```ts
// vite.config.ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

Add `@` alias type to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Replace the contents of `src/index.css` with:

```css
@import "tailwindcss";
```

## 3. Initialize shadcn/ui

Run the shadcn init command inside the project:

```bash
npx shadcn@latest init
```

During initialization, you will be prompted to choose:

- **Style**: `New York` or `Default`
- **Base color**: `Slate`, `Gray`, `Zinc`, `Neutral`, or `Stone`
- **CSS variables for colors**: `Yes` / `No`
- **Tailwind CSS prefix** (optional)
- **Import alias**: `@/components` (default)

This will create a `components.json` file, update `tsconfig.json` paths, and append the theme tokens to `src/index.css`.

## 4. Add Your First Components

Add individual components using the shadcn CLI:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

Or add multiple at once:

```bash
npx shadcn@latest add button card input label dialog dropdown-menu
```

Each command will:
- Install required npm dependencies
- Copy the component source into `@/components/ui/`
- Add `cn` helper to `@/lib/utils.ts`

## 5. Use a Component

Example — using the `Button` component in `src/App.tsx`:

```tsx
// src/App.tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">shadcn/ui + Vite + React</h1>
      <Button variant="default">Click me</Button>
    </div>
  )
}

export default App
```

## 6. Start the Dev Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your project.

## 7. Customize the Theme (Optional)

Edit the CSS variables in `src/index.css` to tweak the theme:

```css
@import "tailwindcss";

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

## 8. Add Dark Mode (Optional)

Install `next-themes` (works fine outside Next.js too):

```bash
npm install next-themes
```

Add a class-based dark mode toggle by setting `darkMode: ["class"]` in your Tailwind config (or using the `dark:` variant with v4) and toggling the `dark` class on `<html>` from a small theme provider.

## Useful Commands

| Command | Description |
| --- | --- |
| `npx shadcn@latest init` | Initialize shadcn/ui in a project |
| `npx shadcn@latest add <component>` | Add a specific component |
| `npx shadcn@latest add <a> <b> <c>` | Add multiple components |
| `npx shadcn@latest diff` | Check for component updates |
| `npx shadcn@latest registry` | Browse the component registry |

## References

- Docs: https://ui.shadcn.com/docs/installation/vite
- Components: https://ui.shadcn.com/docs/components
