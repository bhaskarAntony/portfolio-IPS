import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import logo from './logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Media', href: '#media' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-lg md:text-xl font-bold text-blue-800 dark:text-blue-400 flex align-center gap-3">
            <img src={logo} alt="Deepan MN IPS" width={30}/>
           <span> Deepan M.N. <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">IPS</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-400 ${
                isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 font-medium py-2 hover:text-blue-700 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow p-2 border border-gray-300 dark:border-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <button 
              type="submit"
              className="bg-blue-700 text-white px-4 rounded-r hover:bg-blue-800 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;