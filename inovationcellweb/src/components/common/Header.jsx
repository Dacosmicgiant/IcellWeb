import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from './Icell.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Developers', href: '/developers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-3">
            {/* If logo is in src/assets */}
            <img src={logo} alt="Innovation Cell Logo" className="h-12 w-auto" />
            {/* OR if logo is in public folder */}
            {/* <img src="/your-logo.png" alt="Innovation Cell Logo" className="h-12 w-auto" /> */}
            
          
          </Link>
          {/* <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Innovation Cell</span>
          </Link> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActivePath(item.href)
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 hover:text-primary'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActivePath(item.href)
                      ? 'text-primary font-semibold'
                      : 'text-gray-700 hover:text-primary'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}