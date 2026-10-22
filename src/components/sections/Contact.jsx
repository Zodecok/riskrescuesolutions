import { useState } from 'react';
import './Contact.css';

// Free form-to-email service (formsubmit.co). The first message sent triggers a
// one-time "activate this form" email to this address; click it and every
// message after that lands straight in the inbox.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/paul@riskrescuesolutions.com.au';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = Object.fromEntries(new FormData(form));
        if (data._honey) return; // bot filled the hidden field

        setStatus('sending');
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    ...data,
                    _subject: `Website enquiry from ${data.name}`,
                    _template: 'table',
                    _captcha: 'false',
                }),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || String(json.success) === 'false') throw new Error(json.message);
            form.reset();
            setStatus('sent');
        } catch {
            setStatus('error');
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="_honey" className="form-honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" className="form-textarea" placeholder="How can we help you?" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending…' : 'Send Message'}
                        </button>
                        {status === 'sent' && (
                            <p className="form-status form-status--ok" role="status">Thanks! Your message has been sent. We'll be in touch soon.</p>
                        )}
                        {status === 'error' && (
                            <p className="form-status form-status--error" role="alert">
                                Sorry, that didn't send. Please email <a href="mailto:paul@riskrescuesolutions.com.au">paul@riskrescuesolutions.com.au</a> or call 0407 557 612.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
