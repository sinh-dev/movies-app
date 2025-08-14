# Movie App

A React application built with Vite featuring an interactive welcome page with hero sections and smooth navigation.

## Features

- **Interactive Hero Carousel**: Welcome page with rotating hero sections
- **Smooth Navigation**: React Router integration
- **Modern UI**: Clean and engaging user interface
- **Fast Development**: Powered by Vite with Hot Module Replacement (HMR)

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **CSS3**: Custom styling with modern CSS features
- **ESLint**: Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   \```bash
   git clone (https://github.com/sinh-dev/movies-app.git)
   cd movie-app
   \```

2. Install dependencies:
   \```bash
   npm install
   \```

3. Start the development server:
   \```bash
   npm run dev
   \```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

\```bash
npm run build
\```

### Preview Production Build

\```bash
npm run preview
\```

## Project Structure

\```
movie-app/
├── public/
│   └── images/           # Static images
│       ├── film.png      # Favicon
│       ├── Arrow.png     # Navigation arrow
│       ├── I_will_win.png
│       ├── time_is_the_enemy.png
│       └── batman.png
├── src/
│   ├── css/              # Stylesheets
│   │   ├── index.css     # Global styles
│   │   ├── App.css       # App component styles
│   │   └── Welcome.css   # Welcome page styles
│   ├── pages/            # Page components
│   │   └── WelcomePage.jsx
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
└── README.md
\```

## Features Overview

### Welcome Page
- Interactive hero carousel with 3 different sections
- Clickable navigation dots
- Smooth background image transitions
- Call-to-action button leading to login page

### Hero Sections
1. **"I Will Win"** - Motivational hero section
2. **"Time Is The Enemy"** - Time management theme
3. **"Be the Hero"** - Batman-themed inspiration

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

This project uses ESLint for code linting. Make sure to follow the established patterns:
- Use functional components with hooks
- Implement proper prop passing
- Follow CSS naming conventions
- Maintain component modularity

## Future Enhancements

- [ ] Add login/signup and logout functionality
- [ ] Implement movie browsing functionality
- [ ] Add movies to favorites
- [ ] Integrate movie database API
- [ ] Add search and filtering capabilities

## License

This project is open source and available under the [MIT License](LICENSE).