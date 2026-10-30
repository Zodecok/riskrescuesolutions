import Icon from '../Icon';
import logo from '../../assets/brand/logo.png';
import { PHONE_DISPLAY, PHONE_HREF } from '../../content';
import './Hero.css';

const credentials = [
    { big: '25+ years', small: 'in safety, policing and emergency response' },
    { big: 'Lead Auditor', small: 'ISO 45001, 9001, 14001 and 19011' },
    { big: 'Lead Investigator', small: 'ICAM and TapRooT qualified' },
    { big: '$10M', small: 'Public liability insurance' },
];

const Hero = () => (
    <section className="hero" id="top">
        <div className="container">
            <h1 className="hero__banner">
                <img src={logo} alt="Risk Rescue Solutions" width="906" height="161" />
            </h1>

            <div className="hero__body">
                <p className="hero__lead">
                    Tailored safety and risk management for Queensland businesses.
                </p>
                <p className="hero__text">
                    Based on the Sunshine Coast and working worldwide across mining, civil construction
                    and manufacturing. We work alongside your team to find the hazards and put practical
                    controls in place, without slowing the job down.
                </p>

                <div className="hero__actions">
                    <a href={PHONE_HREF} className="btn btn--primary">
                        <Icon name="phone" />Call {PHONE_DISPLAY}
                    </a>
                    <a href="#contact" className="btn btn--ghost">Send an enquiry</a>
                </div>
            </div>

            <ul className="hero__creds">
                {credentials.map((c) => (
                    <li key={c.big}>
                        <strong>{c.big}</strong>
                        <span>{c.small}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Hero;
