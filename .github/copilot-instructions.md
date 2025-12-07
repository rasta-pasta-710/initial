# Copilot Instructions for Portfolio Website

## Project Overview
This is a modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The project showcases a developer's work, skills, and contact information with smooth animations and a responsive design.

## Tech Stack
- **React 18** - UI library with functional components and hooks
- **TypeScript** - Strict type checking enabled
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

## Project Structure
```
src/
  components/     # React components (Navbar, Hero, About, Skills, Projects, Contact)
  App.tsx         # Main application component
  main.tsx        # Application entry point
  index.css       # Global styles and Tailwind imports
```

## Coding Conventions

### Component Guidelines
- Use functional components with TypeScript
- Define proper TypeScript interfaces for all props
- Use descriptive component and variable names
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks when needed

### Styling Guidelines
- Use Tailwind CSS utility classes for styling
- Prefer Tailwind's responsive prefixes (sm:, md:, lg:) over custom media queries
- Use the primary color palette defined in `tailwind.config.js`
- Apply gradient-text class for accent text: `gradient-text`
- Maintain consistent spacing using Tailwind's spacing scale

### Animation Guidelines
- Use Framer Motion for all animations
- Prefer `whileInView` for scroll-triggered animations
- Use `viewport={{ once: true }}` to prevent re-animations
- Keep animation durations between 0.3-0.6 seconds for smooth feel
- Use `staggerChildren` for sequential animations

### State Management
- Use React hooks (useState, useEffect) for local state
- Use IntersectionObserver for scroll-based section detection
- Pass setActiveSection callback to update navigation state

### Code Quality
- Always use TypeScript strict mode
- Define interfaces for all props and data structures
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Avoid inline styles; use Tailwind classes instead

## Component Patterns

### Section Components
All section components (About, Skills, Projects, Contact) should:
- Accept `setActiveSection` prop for navigation updates
- Use `useRef` and `IntersectionObserver` to detect when section is in view
- Call `setActiveSection` when section becomes active
- Use Framer Motion for entrance animations
- Have `id` attribute matching the section name (lowercase)

### Navigation
- Navbar should highlight active section based on scroll position
- Use smooth scrolling for navigation links
- Update active section state when user scrolls or clicks

### Responsive Design
- Mobile-first approach
- Use Tailwind's responsive breakpoints: sm (640px), md (768px), lg (1024px)
- Test layouts on mobile, tablet, and desktop
- Ensure touch targets are at least 44x44px

## Color Palette
- Primary colors: Use `primary-400` through `primary-600` for accents
- Background: `gray-900` (main), `gray-800` (sections)
- Text: `gray-100` (primary), `gray-300` (secondary), `gray-400` (tertiary)
- Borders: `gray-700` for subtle borders

## Animation Patterns
- Hero section: Staggered children animations on load
- Sections: Fade in and slide up on scroll into view
- Hover effects: Scale (1.05) and color transitions
- Navigation: Smooth underline animation for active state

## Best Practices
1. **Performance**: Use `viewport={{ once: true }}` to prevent re-animations
2. **Accessibility**: Include proper ARIA labels and semantic HTML
3. **SEO**: Use descriptive meta tags and semantic HTML structure
4. **Code Organization**: Keep related code together, separate concerns
5. **Type Safety**: Always define TypeScript interfaces for props and data
6. **Consistency**: Follow existing patterns and naming conventions

## Common Tasks

### Adding a New Section
1. Create component in `src/components/`
2. Add section to `App.tsx`
3. Add navigation item to `Navbar.tsx`
4. Use IntersectionObserver pattern for scroll detection
5. Add smooth scroll handler

### Adding a New Project
1. Add project object to `projects` array in `Projects.tsx`
2. Include: title, description, tech stack, GitHub link, demo link
3. Component will automatically render new project

### Updating Skills
1. Modify `skills` array in `Skills.tsx`
2. Each skill needs: `name` (string) and `level` (number 0-100)
3. Progress bars animate automatically

### Customizing Colors
1. Update `tailwind.config.js` color palette
2. Use CSS variables or Tailwind's theme extension
3. Maintain contrast ratios for accessibility

## File Naming
- Components: PascalCase (e.g., `Hero.tsx`, `Navbar.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Types: PascalCase interfaces (e.g., `HeroProps`)

## Import Organization
1. React and React-related imports
2. Third-party libraries (Framer Motion, etc.)
3. Local components
4. Types and interfaces
5. Styles and assets

## Error Handling
- Use TypeScript to catch type errors at compile time
- Validate props with TypeScript interfaces
- Handle edge cases in data (empty arrays, undefined values)

## Testing Considerations
- Components should be easily testable (pure functions when possible)
- Avoid side effects in render functions
- Use proper dependency arrays in useEffect hooks

## Deployment
- Build command: `npm run build`
- Output directory: `dist/`
- Ensure all assets are properly referenced
- Test production build locally before deploying

## When Making Changes
- Maintain the existing design aesthetic
- Keep animations smooth and performant
- Ensure mobile responsiveness
- Update TypeScript types accordingly
- Test in multiple browsers
- Maintain accessibility standards

