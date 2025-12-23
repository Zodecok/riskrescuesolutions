import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Tailored Risk Management Solutions
                    <br />
                    <span style={{ color: 'var(--color-secondary)' }}>Queensland, Australia</span>
                </h1>
                <p className="hero-subtitle">
                    Over 25 years of experience partnering with you to identify hazards and implement practical safety controls.
                </p>
                <div className="hero-cta-group">
                    <a href="#contact" className="btn-primary">Get a Quote</a>
                    <a href="#services" className="btn-secondary">Our Services</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
