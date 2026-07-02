import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, ChevronDown } from 'lucide-react'
import NavigationLink from '../ui/NavigationLink'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { 
    name: 'Packages', 
    href: '#',
    dropdown: [
      { name: 'Basic Package', href: '/packages/basic' },
      { name: 'Classic Package', href: '/packages/classic' },
      { name: 'Premium Package', href: '/packages/premium' }
    ]
  },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [location])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between min-h-[60px] sm:min-h-[65px] md:min-h-[70px] lg:min-h-[75px] py-2">
          {/* Logo - Positioned to the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="/buildtecture logo (2).png" 
                alt="Buildtecture Logo" 
                className="h-12 w-auto sm:h-14 sm:w-auto md:h-16 md:w-auto lg:h-18 lg:w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-grow justify-center">
            {navigation.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-xs font-medium px-2 py-1 text-gray-700 hover:text-brand-600 transition-colors">
                    <span>{item.name}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavigationLink
                  key={item.name}
                  to={item.href}
                  className="text-xs font-medium px-2 py-1"
                >
                  {item.name}
                </NavigationLink>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            {/* Email Only */}
            <a href="mailto:info@buildtecture.in" className="flex items-center space-x-2 text-xs text-gray-600 hover:text-brand-600 transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@buildtecture.in</span>
            </a>

            <NavigationLink 
              to="/contact" 
              className="btn-primary text-xs px-4 py-2"
              loadingMessage="Preparing quote form..."
            >
              Get Quote
            </NavigationLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-brand-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-6 space-y-6">
                {navigation.map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="space-y-2">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-base font-medium py-2 text-gray-700"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block text-sm text-gray-600 hover:text-brand-600 py-2"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavigationLink
                      key={item.name}
                      to={item.href}
                      className="block text-base font-medium py-2"
                    >
                      {item.name}
                    </NavigationLink>
                  )
                ))}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <a href="mailto:info@buildtecture.in" className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>info@buildtecture.in</span>
                  </a>
                  <NavigationLink 
                    to="/contact" 
                    className="btn-primary inline-block mt-4"
                    loadingMessage="Preparing quote form..."
                  >
                    Get Quote
                  </NavigationLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}