import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Menu, X, ChevronDown, Search } from 'lucide-react';

const bookCategories = [
  { name: 'Animals', path: '/books/animals' },
  { name: 'Fantasy', path: '/books/fantasy' },
  { name: 'Nature', path: '/books/nature' },
  { name: 'Educational', path: '/books/educational' },
  { name: 'Vehicles', path: '/books/vehicles' },
  { name: 'Fairy Tales', path: '/books/fairy-tales' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookMenuOpen, setIsBookMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-16" />
      <nav className={`bg-white w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${isSticky ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-purple-600">ColorFun</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center">
                <div className="relative flex items-center">
                  <div
                    className={`flex items-center overflow-hidden transition-all duration-300 ${
                      isSearchOpen ? 'w-64' : 'w-0'
                    }`}
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</Link>
              <div className="relative group">
                <button
                  className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <span>Books</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  {bookCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/free-pages" className="text-gray-600 hover:text-purple-600 transition-colors">Free Pages</Link>
              <Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
            </div>
    
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
    
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="px-3 py-2">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Link to="/" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">Home</Link>
              <div className="space-y-1">
                <button
                  onClick={() => setIsBookMenuOpen(!isBookMenuOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100"
                >
                  <span>Books</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${isBookMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isBookMenuOpen && (
                  <div className="pl-4 space-y-1">
                    {bookCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block px-3 py-2 rounded-md text-gray-500 hover:text-purple-600 hover:bg-purple-50"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/free-pages" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">Free Pages</Link>
              <Link to="/blog" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">Blog</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-100">About</Link>
            </div>
          </div>
        )}
    </nav>
  </>
);
};

export default Navbar;