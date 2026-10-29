import { useEffect, useState } from 'react';
import Icon from '../Icon';
import logo from '../../assets/brand/logo.png';
import { PHONE_DISPLAY, PHONE_HREF } from '../../content';
import './Navbar.css';

const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#areas', label: 'Where we work' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // The hero carries the full logo, so the small one only appears once it's scrolled away.
        const onScroll = () => setScrolled(window.scrollY > 160);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
            <div className="container header__inner">
                <a href="#top" className={`header__logo ${scrolled || open ? 'is-visible' : ''}`} onClick={close}
                    aria-label="Risk Rescue Solutions, back to top">
                    <img src={logo} alt="Risk Rescue Solutions" width="906" height="161" />
                </a>

                <nav className="header__nav" aria-label="Main">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="header__link">{l.label}</a>
                    ))}
                    <a href={PHONE_HREF} className="btn btn--primary header__call">
                        <Icon name="phone" />{PHONE_DISPLAY}
                    </a>
                </nav>

                <div className="header__mobile">
                    <a href={PHONE_HREF} className="header__icon-btn header__icon-btn--red" aria-label={`Call ${PHONE_DISPLAY}`}>
                        <Icon name="phone" />
                    </a>
                    <button className="header__icon-btn" onClick={() => setOpen(!open)}
                        aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
                        <Icon name={open ? 'close' : 'menu'} />
                    </button>
                </div>
            </div>

            <nav id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="Mobile">
                <div className="container">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="mobile-menu__link" onClick={close} tabIndex={open ? 0 : -1}>
                            {l.label}
                            <Icon name="arrow" />
                        </a>
                    ))}
                    <a href={PHONE_HREF} className="btn btn--primary mobile-menu__call" tabIndex={open ? 0 : -1}>
                        <Icon name="phone" />Call {PHONE_DISPLAY}
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
