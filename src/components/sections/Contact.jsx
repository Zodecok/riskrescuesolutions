import { useState } from 'react';
import Icon from '../Icon';
import { EMAIL, LOCATION, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '../../content';
import './Contact.css';

// Our Cloudflare Worker (see /worker) emails each enquiry to Paul through Resend.
const FORM_ENDPOINT = 'https://rrs-contact.bunjicoops.workers.dev';

const details = [
    { icon: 'phone', label: 'Phone', value: PHONE_DISPLAY, href: PHONE_HREF },
    { icon: 'whatsapp', label: 'WhatsApp', value: 'Message on WhatsApp', href: WHATSAPP_HREF, external: true },
    { icon: 'mail', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: 'pin', label: 'Based in', value: LOCATION },
    { icon: 'clock', label: 'Hours', value: 'Mon to Fri, 8am to 5pm', note: 'Weekends by appointment' },
];

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = Object.fromEntries(new FormData(form));

        setStatus('sending');
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(data),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || !json.ok) throw new Error(json.error);
            form.reset();
            setStatus('sent');
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container contact__grid">
                <div>
                    <span className="eyebrow">Contact</span>
                    <h2 className="section-heading">Talk to us about your site</h2>
                    <p className="section-intro">
                        Give Paul a call to talk through what you need, or send a message and he'll get back to you.
                    </p>

                    <ul className="contact__details">
                        {details.map((d) => (
                            <li key={d.label}>
                                <Icon name={d.icon} />
                                <div>
                                    <span className="contact__label">{d.label}</span>
                                    {d.href ? (
                                        <a href={d.href} {...(d.external && { target: '_blank', rel: 'noopener noreferrer' })}>{d.value}</a>
                                    ) : <span>{d.value}</span>}
                                    {d.note && <span className="contact__note">{d.note}</span>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <h3 className="form__title">Send a message</h3>
                    <input type="text" name="_honey" className="form__honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />

                    <label className="form__field">
                        <span>Name</span>
                        <input type="text" name="name" autoComplete="name" required />
                    </label>
                    <div className="form__row">
                        <label className="form__field">
                            <span>Email</span>
                            <input type="email" name="email" autoComplete="email" inputMode="email" required />
                        </label>
                        <label className="form__field">
                            <span>Phone <em>(optional)</em></span>
                            <input type="tel" name="phone" autoComplete="tel" inputMode="tel" />
                        </label>
                    </div>
                    <label className="form__field">
                        <span>How can we help?</span>
                        <textarea name="message" rows="5" required />
                    </label>

                    <button type="submit" className="btn btn--primary form__submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending…' : 'Send message'}
                    </button>

                    {status === 'sent' && (
                        <p className="form__status form__status--ok" role="status">
                            Thanks, your message has been sent. We'll be in touch soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="form__status form__status--error" role="alert">
                            Sorry, that didn't send. Please email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or
                            call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
