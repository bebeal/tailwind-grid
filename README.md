# Tailwind Grid

A simple Tailwind CSS plugin that adds beautiful grid and dot background patterns to your projects.

<div align="center">
  <img width="1233" alt="Tailwind Grid Preview" src="https://github.com/user-attachments/assets/31e5c3b8-976a-41f7-a4c4-0312b791a8c2" />
</div>

## Installation

```bash
npm install @bebeal/tailwind-grid --save-dev
```

## Usage

### Tailwind v3
Add the plugin to your Tailwind configuration:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import GridPlugin from '@bebeal/tailwind-grid'

export default {
  theme: {
    // ...
  },
  plugins: [
    GridPlugin,
  ],
} satisfies Config
```

### Tailwind v4
Use the `@plugin` directive in your css file:

```css
@plugin "@bebeal/tailwind-grid"
```

### Available Classes

- `bg-grid`
- `bg-grid-md`
- `bg-grid-sm`
- `bg-dot`
- `bg-dot-md`
- `bg-dot-sm`

You can style them like any other background (e.g. with color, opacity, etc.)

### Example

```html
<div class="h-[450px] bg-black bg-grid-white/[0.2] relative">
  <div class="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
  <div class="relative z-20">
    <!-- Your content here -->
  </div>
</div>
```

## License

MIT
