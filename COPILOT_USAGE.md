# GitHub Copilot Usage Guide

This guide helps contributors and users leverage GitHub Copilot effectively when working on this portfolio website project.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Enabling GitHub Copilot](#enabling-github-copilot)
- [Basic Prompts & Examples](#basic-prompts--examples)
- [Advanced Completions](#advanced-completions)
- [Best Practices](#best-practices)
- [Limitations](#limitations)
- [Official Documentation](#official-documentation)

## Prerequisites

Before using GitHub Copilot with this project, ensure you have:

1. **GitHub Copilot Subscription**
   - Individual subscription ($10/month or $100/year)
   - GitHub Copilot for Business (through your organization)
   - Free access for verified students and maintainers of popular open-source projects

2. **Supported IDE/Editor**
   - Visual Studio Code (recommended for this project)
   - JetBrains IDEs (IntelliJ IDEA, WebStorm, PyCharm, etc.)
   - Neovim
   - Visual Studio

3. **Project Dependencies Installed**
   ```bash
   npm install
   ```

## Enabling GitHub Copilot

### In Visual Studio Code

1. **Install the Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "GitHub Copilot"
   - Click "Install"

2. **Sign In**
   - Click on the GitHub Copilot icon in the status bar
   - Follow the prompts to sign in to your GitHub account
   - Authorize the extension

3. **Verify Installation**
   - Open any `.tsx` or `.ts` file
   - Start typing - you should see ghost text suggestions
   - Status bar should show the Copilot icon (✓ indicates active)

### In Other IDEs

- **JetBrains**: Install "GitHub Copilot" plugin from the marketplace
- **Neovim**: Install `github/copilot.vim` plugin
- **Visual Studio**: Install the GitHub Copilot extension

### Configuration for This Project

This project includes detailed coding patterns and conventions in `.github/copilot-instructions.md`. While standard GitHub Copilot doesn't automatically read this file, it serves as valuable documentation for contributors and is used by GitHub Copilot Workspace agents to understand project-specific patterns.

**Pro Tip:** Reference the `.github/copilot-instructions.md` file when asking Copilot Chat questions to get responses aligned with our project conventions.

## Basic Prompts & Examples

### 1. Creating New Components

**Prompt (as a comment):**
```typescript
// Create a new Badge component that displays a colored tag with text
```

**Expected Result:**
Copilot will generate a TypeScript React component following our conventions:
- Functional component with props interface
- Tailwind CSS styling
- TypeScript type safety

### 2. Adding TypeScript Interfaces

**Prompt:**
```typescript
// Interface for a blog post with title, date, content, and tags
```

**Expected Result:**
```typescript
interface BlogPost {
  title: string;
  date: string;
  content: string;
  tags: string[];
}
```

### 3. Implementing Common Patterns

**Prompt:**
```typescript
// Hook to detect if element is in viewport using IntersectionObserver
```

**Expected Result:**
Copilot will generate a custom hook following React patterns with TypeScript.

### 4. Adding Framer Motion Animations

**Prompt:**
```typescript
// Fade in from bottom animation variants for Framer Motion
```

**Expected Result:**
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### 5. Creating Tailwind Styles

**Prompt:**
```typescript
// Button with primary gradient background, hover effect, and rounded corners
```

**Expected Result:**
```typescript
className="bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
```

## Advanced Completions

### 1. Refactoring with Copilot Chat

Use Copilot Chat to refactor existing code:

**Example:**
```
@workspace Refactor the Skills component to use a grid layout instead of flex and add categories for grouping skills
```

### 2. Generating Test Cases

**Prompt in test file:**
```typescript
// Test suite for the Contact component
// Should render all social links
// Should handle form submission
// Should validate email format
```

Copilot will generate comprehensive test cases matching the project's testing framework.

### 3. Creating Responsive Designs

**Prompt:**
```typescript
// Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
```

**Expected Result:**
```typescript
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
```

### 4. Complex State Management

**Prompt:**
```typescript
// Hook to manage form state with validation for contact form
// Fields: name, email, message
// Validate email format and required fields
```

Copilot will generate a complete custom hook with state management and validation logic.

### 5. Accessibility Improvements

**Prompt:**
```typescript
// Add ARIA labels and keyboard navigation to the navigation menu
```

Copilot will suggest accessibility improvements following WCAG guidelines.

## Best Practices

### 1. Write Descriptive Comments

✅ **Good:**
```typescript
// Create a card component with hover animation that scales to 1.05 and shows a shadow
```

❌ **Bad:**
```typescript
// card
```

### 2. Use Context-Aware Prompts

Start typing in context - Copilot understands:
- Current file structure
- Imported dependencies
- Existing patterns in your codebase
- TypeScript interfaces already defined

### 3. Iterate on Suggestions

- Press `Tab` to accept
- Press `Esc` to reject
- Press `Alt+]` (or `Option+]` on Mac) to see next suggestion
- Press `Alt+[` (or `Option+[` on Mac) to see previous suggestion

### 4. Leverage Multi-Line Completions

Copilot can generate entire functions or components. Start with:
```typescript
function calculateProjectStats(projects: Project[]) {
  // Calculate total projects, technologies used, and average stars
```

Then let Copilot complete the implementation.

### 5. Use Copilot Chat for Complex Tasks

For complex requirements, use Copilot Chat:
- `/explain` - Understand existing code
- `/fix` - Fix bugs or errors
- `/tests` - Generate test cases
- `/doc` - Add documentation

### 6. Review Generated Code

**Always review Copilot's suggestions:**
- Verify TypeScript types are correct
- Ensure Tailwind classes follow our conventions
- Check that animations use Framer Motion properly
- Validate accessibility attributes are appropriate

## Limitations

### 1. Project-Specific Knowledge

**Limitation:** Copilot may not always follow your exact project conventions.

**Solution:** 
- The `.github/copilot-instructions.md` file helps guide Copilot
- Review and adjust suggestions to match our patterns
- Provide more specific comments/prompts

### 2. TypeScript Accuracy

**Limitation:** Type suggestions might not always be perfect for complex types.

**Solution:** 
- Always check TypeScript compiler output
- Run `npm run build` to verify types
- Manually adjust complex type definitions

### 3. Styling Consistency

**Limitation:** May suggest inline styles or custom CSS instead of Tailwind.

**Solution:** 
- Prompt specifically: "using Tailwind CSS classes"
- Reject inline style suggestions
- Convert suggested styles to Tailwind utilities

### 4. Library Version Awareness

**Limitation:** May suggest deprecated APIs or older patterns.

**Solution:** 
- Check our `package.json` for library versions
- Refer to official documentation for the latest APIs
- Update suggestions to use current best practices

### 5. Context Window Size

**Limitation:** Copilot has limited context from other files.

**Solution:** 
- Import relevant types/interfaces in the current file
- Add context in comments
- Use Copilot Chat with `@workspace` for broader context

### 6. Security Considerations

**Limitation:** May suggest code with security vulnerabilities.

**Solution:** 
- Never accept suggestions that expose sensitive data
- Review authentication/authorization code carefully
- Validate user input handling
- Run security audits: `npm audit`

## Common Workflows

### Adding a New Feature

1. **Comment-Driven Development:**
   ```typescript
   // Feature: Dark mode toggle
   // - Add state management for theme
   // - Create toggle button component
   // - Apply theme classes conditionally
   // - Persist preference in localStorage
   ```

2. **Let Copilot Generate:** Press Enter and let Copilot suggest implementation

3. **Review & Refine:** Accept, modify, or iterate on suggestions

4. **Test:** Verify the feature works as expected

### Debugging with Copilot

1. **Use Copilot Chat:**
   ```
   /explain why the animation is not triggering on scroll
   ```

2. **Add Debug Comments:**
   ```typescript
   // Debug: log when IntersectionObserver fires
   ```

3. **Get Fix Suggestions:**
   ```
   /fix the scroll detection not working on mobile
   ```

## Tips for Maximum Productivity

1. **Enable Copilot Labs** (if available)
   - Access experimental features
   - Try code explanations and translations

2. **Learn Keyboard Shortcuts**
   - `Tab`: Accept suggestion
   - `Ctrl+Enter`: Open Copilot in sidebar
   - `Alt+\`: Trigger inline suggestion

3. **Use Copilot Chat Slash Commands**
   - `/explain`: Understand code
   - `/fix`: Get bug fixes
   - `/tests`: Generate tests
   - `/doc`: Add documentation
   - `/simplify`: Simplify complex code

4. **Context is Key**
   - Keep relevant files open
   - Import types/interfaces you'll reference
   - Add descriptive variable names

5. **Combine with Other Tools**
   - ESLint for code quality
   - Prettier for formatting
   - TypeScript for type checking
   - Use Copilot to help fix linter errors

## Official Documentation

For more information about GitHub Copilot:

- **Official Docs:** [docs.github.com/copilot](https://docs.github.com/en/copilot)
- **Getting Started:** [GitHub Copilot Quickstart](https://docs.github.com/en/copilot/quickstart)
- **VS Code Guide:** [Copilot in VS Code](https://code.visualstudio.com/docs/editor/artificial-intelligence)
- **Best Practices:** [Copilot Best Practices](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)
- **Copilot Chat:** [Using Copilot Chat](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat)
- **Privacy & Security:** [Copilot Trust Center](https://resources.github.com/copilot-trust-center/)

## Support & Community

- **GitHub Community:** [GitHub Community Discussions](https://github.com/orgs/community/discussions/categories/copilot)
- **Report Issues:** [Copilot Feedback](https://github.com/github-community/community/discussions/categories/copilot)
- **Feature Requests:** Submit through GitHub Copilot settings

---

**Happy Coding with Copilot! 🚀**

For project-specific coding conventions and patterns, see `.github/copilot-instructions.md`. While Copilot doesn't automatically read this file, it's an excellent reference for understanding our project's standards and can be referenced in Copilot Chat conversations.
