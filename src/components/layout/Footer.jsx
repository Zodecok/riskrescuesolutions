import logoReverse from '../../assets/brand/logo-reverse.png';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '../../content';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container footer__inner">
            <img className="footer__logo" src={logoReverse} alt="Risk Rescue Solutions" width="906" height="161" loading="lazy" />
            <div className="footer__links">
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
        </div>
        <div className="container footer__bottom">
            <span>&copy; {new Date().getFullYear()} Risk Rescue Solutions</span>
            <span>Mooloolah Valley, Sunshine Coast QLD</span>
        </div>
    </footer>
);

export default Footer;
