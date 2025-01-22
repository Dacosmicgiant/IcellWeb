// src/routes.jsx
import { Routes as RouterRoutes, Route } from 'react-router-dom';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Developers from './pages/Developers';

export function Routes() {
  return (
    <RouterRoutes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/developers" element={<Developers />} />

      {/* 404 Route */}
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <a 
              href="/"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold 
                     hover:bg-opacity-90 transition-all inline-block"
            >
              Return Home
            </a>
          </div>
        </div>
      } />
    </RouterRoutes>
  );
}