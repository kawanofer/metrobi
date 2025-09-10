
# Metrobi Layout Assessment

This is a React + Vite project styled with Tailwind CSS, designed to demonstrate a responsive dashboard layout and solutions to several coding questions.

## Features

- **Responsive Layout**: Uses Flexbox and Tailwind CSS for a dashboard-style layout with Header, Hero, Sidebar, Main Content, Extra Content, Related Images, Related Posts, and Footer sections.
- **Coding Questions**: Includes implementations for seven coding challenges, with results logged to the browser console on app load.
- **Modern Tooling**:
	- ESLint and Prettier for code quality and formatting
	- Tailwind CSS for utility-first styling
	- Vite for fast development and build

## Project Structure

```
src/
	App.jsx                # Main layout and logic
	components/            # UI components for each section
	questions/             # Coding challenge implementations
public/
	vite.svg               # Vite logo
index.html               # App entry point
```

## Getting Started

1. **Install dependencies**:
	 ```bash
	 npm install
	 ```
2. **Run the development server**:
	 ```bash
	 npm run dev
	 ```
3. **View in browser**:
	 Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run lint` — Check code for lint errors
- `npm run lint:fix` — Auto-fix lint errors
- `npm run format` — Format code with Prettier

## Notes
- Coding question results are logged in the browser console when the app loads.
- The layout is fully responsive and adapts to mobile, tablet, and desktop screens.

## License

MIT
