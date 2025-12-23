import './Services.css';

const services = [
    {
        title: 'Auditing',
        description: null,
        items: [
            'ISO 19011',
            'ISO 14001',
            'ISO 45001',
            'ISO 9001',
            'Informal auditing as required'
        ],
        icon: 'clipboard'
    },
    {
        title: 'Nationally Recognised Training',
        description: null,
        items: [
            'Work at Heights',
            'Confined Space Entry',
            'Gas Test Atmospheres',
            'Permit Issuer'
        ],
        icon: 'school'
    },
    {
        title: 'Risk Management',
        description: 'OH&S Management Systems',
        icon: '🛡️'
    },
    {
        title: 'Rehabilitation',
        description: 'Rehabilitation and Return To Work Coordinator (QLD)',
        icon: 'medical'
    },
    {
        title: 'Incident Response',
        description: 'Critical Leadership / Crisis Management / Business Continuity / Medical Response',
        icon: 'fire'
    },
    {
        title: 'Incident Investigations',
        description: 'Incident Investigations',
        icon: 'mag'
    },
    {
        title: 'Fire Equipment',
        description: 'Fire Extinguisher and Fire Hose Reel Test and Tag',
        icon: 'fire-ext'
    }
];

const Services = () => {
    return (
        <section className="section-wrapper services-section" id="services">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-description">
                        Comprehensive safety solutions designed to protect your workforce and your business.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                {/* Placeholder for actual SVG icons */}
                                <span style={{ fontSize: '1.5rem' }}>
                                    {service.icon === 'clipboard' ? '📋' :
                                        service.icon === 'school' ? '🎓' :
                                            service.icon === 'mag' ? '🔍' :
                                                service.icon === 'fire' ? '🔥' :
                                                    service.icon === 'medical' ? '🧪' :
                                                        service.icon === 'fire-ext' ? '🧯' : '🛡️'}
                                </span>
                            </div>
                            <h3 className="service-title">{service.title}</h3>

                            {service.items ? (
                                <ul className="service-list">
                                    {service.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                    {/* <a href="#contact" className="service-link">Learn more →</a> */}
                                </ul>
                            ) : (
                                <p className="service-desc">{service.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
