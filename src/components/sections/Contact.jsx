import './Contact.css';

const Contact = () => {
    return (
        <section className="section-wrapper contact-section" id="contact">
            <div className="container contact-container">
                <div className="contact-info-card">
                    <h3>Contact Information</h3>
                    <p style={{ marginBottom: '2rem', color: '#cbd5e1' }}>
                        Ready to improve your safety standards? Reach out for a risk-free consultation.
                    </p>

                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div className="info-content">
                            <h4>Address</h4>
                            <p>9 Treetop Court, Mooloolah Valley 4553</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">📞</span>
                        <div className="info-content">
                            <h4>Phone</h4>
                            <p><a href="tel:0407557612">0407 557 612</a></p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">✉️</span>
                        <div className="info-content">
                            <h4>Email</h4>
                            <p><a href="mailto:paul@riskrescuesolutions.com.au">paul@riskrescuesolutions.com.au</a></p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">🕒</span>
                        <div className="info-content">
                            <h4>Hours</h4>
                            <p>Mon-Fri: 8am - 5pm</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Sat-Sun: Appointment Only</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Send us a Message</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-input" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-input" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" className="form-textarea" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="submit-btn" onClick={() => alert('Thank you! This is a demo form.')}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
