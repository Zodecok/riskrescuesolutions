import { useState } from 'react';
import './Team.css';

const Team = () => {
    const [isOpen, setIsOpen] = useState(false);

    const qualifications = [
        'Diploma of Occupational Health and Safety',
        'Diploma of Security and Risk Management',
        'Diploma of Policing',
        'Diploma of Business',
        'Lead Auditor ISO 19011 / 14001 / 45001 / 9001',
        'Rehab and Return to Work Coordinator (RRTWC)',
        'Cert IV TAE 16',
        'Cert IV Healthcare / Cert II First Medical Response (EMT)',
        'Cert III Mine Emergency Response and Rescue',
        'Cert II Fire Protection Inspection and Testing',
        'Professional Indemnity Insurance – $1M',
        'Public Liability Insurance – $10M'
    ];

    return (
        <section className="section-wrapper team-section" id="team">
            <div className="container team-container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet The Team</h2>

                <div className="team-card">
                    <div className="team-upper-section">
                        <div className="team-text-content">
                            <div className="team-header">
                                <h3 className="team-name">Paul Blackburn</h3>
                                <span className="team-role">Director & Principal Safety Advisor</span>
                            </div>

                            <div className="team-bio">
                                <p>
                                    Deep dive into Paul's extensive background in risk management. With roles in the Australian Regular Army, NT Police Force, and the NT Fire and Rescue Service, Paul brings a wealth of experience. Now in the corporate world, he's leveraging this knowledge to help businesses navigate complex risks. His passion for assisting organisations is evident in every project.
                                </p>
                            </div>
                        </div>

                        <div className="team-image-wrapper">
                            <img
                                src="/assets/faceshot.jpg"
                                alt="Paul Blackburn - Director & Principal Safety Advisor"
                                className="team-image"
                            />
                        </div>
                    </div>

                    <div className="qualifications-dropdown">
                        <button
                            className="dropdown-header"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                        >
                            <span className="dropdown-title">Qualifications & Insurance</span>
                            <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
                        </button>

                        <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                            <ul className="qual-list">
                                {qualifications.map((qual, index) => (
                                    <li key={index}>{qual}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
