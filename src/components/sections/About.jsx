import './About.css';

const About = () => {
    return (
        <section className="section-wrapper about-section" id="about">
            <div className="container about-container">
                <div className="about-content">
                    <p className="about-subtitle">Who We Are</p>
                    <h2>Over 25 Years of Experience</h2>
                    <p className="about-text">
                        Risk Rescue Solutions is a Safety and Risk Management Company based on the Sunshine Coast, Queensland. We provide professional advice and assistance in all aspects of safety to a wide range of industries including mining, civil construction, and manufacturing.
                    </p>
                    <p className="about-text">
                        Our approach is simple: we partner with you. We work alongside your team to identify hazards and implement practical, effective controls that keep your workforce safe without hindering productivity.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>25+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Commitment</p>
                        </div>
                    </div>
                </div>

                <div className="about-image">
                    <div className="about-img-placeholder">
                        {/* <img src="/path/to/image.jpg" alt="Safety Professional" /> */}
                        <div className="placeholder-text">Safety First</div>
                        {/* Add a subtle pattern or gradient here if no image */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                            backgroundSize: '200% 200%',
                            animation: 'shimmer 3s infinite linear'
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
