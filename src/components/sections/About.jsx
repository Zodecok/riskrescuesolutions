import { useState } from 'react';
import './About.css';

const qualifications = [
    'Diploma of Occupational Health and Safety',
    'Diploma of Security and Risk Management',
    'Diploma of Policing',
    'Diploma of Business',
    'Lead Auditor ISO 19011 / 14001 / 45001 / 9001',
    'Rehabilitation and Return to Work Coordinator (RRTWC)',
    'Cert IV Training and Assessment (TAE)',
    'Cert IV Health Care / Cert II First Medical Response (EMT)',
    'Cert III Mine Emergency Response and Rescue',
    'Cert II Fire Protection Inspection and Testing',
    'Queensland Accredited (QRide) Motorcycle Trainer',
    'Queensland Private Investigator (licensed)',
    'Professional indemnity insurance, $1M',
    'Public liability insurance, $10M',
];

const About = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="section section--warm" id="about">
            <div className="container about">
                <div className="about__intro">
                    <span className="eyebrow">About us</span>
                    <h2 className="section-heading">Safety advice from someone who's done the work</h2>
                    <p className="section-intro">
                        Risk Rescue Solutions is a safety and risk management company based in Mooloolah Valley on
                        the Sunshine Coast. We give practical advice and hands-on help with every part of workplace
                        safety, from audits and management systems to training and incident response.
                    </p>
                </div>

                <article className="person">
                    <img className="person__photo" src="/assets/faceshot.jpg" width="299" height="299"
                        alt="Paul Blackburn" loading="lazy" />

                    <div className="person__body">
                        <h3 className="person__name">Paul Blackburn</h3>
                        <p className="person__role">Director and Principal Safety Advisor</p>
                        <p className="person__bio">
                            Paul's background is in the Australian Regular Army, the NT Police Force and NT Fire and
                            Rescue Service. He's spent the years since helping businesses understand their risks and
                            manage them properly, with more than 25 years of experience behind the advice he gives.
                        </p>

                        <div className={`quals ${open ? 'is-open' : ''}`}>
                            <button className="quals__toggle" onClick={() => setOpen(!open)}
                                aria-expanded={open} aria-controls="quals-list">
                                Qualifications and insurance
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
                                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            <div className="quals__panel" id="quals-list">
                                <ul className="quals__list">
                                    {qualifications.map((q) => <li key={q}>{q}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default About;
