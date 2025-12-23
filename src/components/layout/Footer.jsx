import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-col">
                        <span className="footer-logo">RISK RESCUE SOLUTIONS</span>
                        <p style={{ color: '#cbd5e1', maxWidth: '300px' }}>
                            Tailored risk management and safety solutions for QLD businesses.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Risk Management</a></li>
                            <li><a href="#">Site Audits</a></li>
                            <li><a href="#">Training</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Risk Rescue Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
