import './Services.css';

const services = [
    {
        title: 'Auditing',
        items: ['ISO 19011', 'ISO 14001', 'ISO 45001', 'ISO 9001', 'Informal audits as required'],
    },
    {
        title: 'Nationally recognised training',
        items: ['Work at heights', 'Confined space entry', 'Gas test atmospheres', 'Permit issuer'],
    },
    {
        title: 'Risk management',
        text: 'Building and maintaining OH&S management systems that fit how your business actually runs.',
    },
    {
        title: 'Rehabilitation',
        text: 'Rehabilitation and Return to Work Coordinator (QLD) to get injured workers safely back on the job.',
    },
    {
        title: 'Incident response',
        text: 'Critical leadership, crisis management, business continuity and medical response.',
    },
    {
        title: 'Incident investigations',
        text: 'Finding out what happened and why, and making sure it doesn\'t happen again.',
    },
    {
        title: 'Fire equipment',
        text: 'Test and tag of fire extinguishers and fire hose reels.',
    },
];

const Services = () => (
    <section className="section" id="services">
        <div className="container">
            <span className="eyebrow">Services</span>
            <h2 className="section-heading">What we can help with</h2>
            <p className="section-intro">
                Safety support for your workforce and your business, from a one-off audit to ongoing help.
            </p>

            <ol className="services">
                {services.map((s, i) => (
                    <li className="service" key={s.title}>
                        <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="service__title">{s.title}</h3>
                        {s.items ? (
                            <ul className="service__items">
                                {s.items.map((it) => <li key={it}>{it}</li>)}
                            </ul>
                        ) : (
                            <p className="service__text">{s.text}</p>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

export default Services;
