import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    RISK <span className="logo-highlight">RESCUE</span> SOLUTIONS
                </a>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>

                <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                    <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                    <a href="#contact" className="navbar-cta" onClick={() => setIsMobileMenuOpen(false)}>
                        Call Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
