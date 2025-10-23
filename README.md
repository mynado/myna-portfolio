# MyNa Do - Frontend Engineer Portfolio

This is the personal portfolio website for MyNa Do, an experienced Frontend Engineer with a fullstack mindset based in Stockholm, Sweden.

The site is built to showcase projects, skills, and professional experience using a modern, efficient, and professionally configured technology stack.

## 🚀 Tech Stack Highlights

This project is built using the latest industry-standard tools, demonstrating a strong command of modern frontend development:

| Category        | Technology          | Version / Tooling                                                        |
| :-------------- | :------------------ | :----------------------------------------------------------------------- |
| **Framework**   | **React 19**        | Modern component-based architecture                                      |
| **Language**    | **TypeScript 5.x**  | Strong typing for high code quality and maintainability                  |
| **Bundler/Dev** | **Vite**            | Next-generation build tool for lightning-fast development                |
| **Styling**     | **Tailwind CSS v4** | Utility-first CSS framework with CSS-first configuration                 |
| **Testing**     | **Vitest**          | Fast, unit testing framework powered by Vite                             |
| **Quality**     | **ESLint**          | Strict code quality enforcement, integrated with TypeScript and Tailwind |

---

## 💡 Architecture & Best Practices

This section highlights key professional decisions made during development:

### 1. Visual Hierarchy

The site utilizes a clear semantic and visual hierarchy enforced entirely by **Tailwind utility classes** applied directly to the components. This approach eliminates unused CSS and keeps the stylesheet clean.

- **`<h1>` (Name)**: `text-5xl md:text-7xl font-extrabold`
- **`<h2>` (Title/Sections)**: `text-2xl md:text-4xl font-semibold`

### 2. Content Management

All static site content (text, project details, skills) is managed in a dedicated **TypeScript data file** (`src/data/portfolio-data.ts`). This ensures a clean **separation of concerns** between data and presentation.

### 3. Tooling Configuration

The entire environment is configured for efficiency:

- **Styling:** Uses **Tailwind CSS v4** with a **CSS-first configuration** (no `tailwind.config.js`).
- **Linting:** ESLint is configured with strict **`recommended-type-checked`** TypeScript rules, enforcing the highest level of code quality.

---

## 📦 Getting Started

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/mynado/myna-portfolio.git
    cd myna-portfolio
    ```
2.  **Install Dependencies:**
    ```bash
    yarn install
    ```

### Available Scripts

| Command         | Description                                                            |
| :-------------- | :--------------------------------------------------------------------- |
| `yarn dev`      | Starts the development server in watch mode.                           |
| `yarn build`    | Builds the project for production into the `dist` directory.           |
| `yarn lint`     | **Code Quality Check:** Runs ESLint across all source files.           |
| `yarn lint:fix` | **Auto-Fix:** Runs ESLint and automatically fixes most fixable issues. |
