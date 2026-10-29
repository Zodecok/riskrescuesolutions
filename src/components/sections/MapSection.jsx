import { useState } from 'react';
import './MapSection.css';

const MapSection = () => {
    // The map is locked until tapped, so swiping past it on a phone scrolls the page instead of the map.
    const [active, setActive] = useState(false);

    return (
        <section className="section section--warm" id="areas">
            <div className="container">
                <span className="eyebrow">Where we work</span>
                <h2 className="section-heading">Sunshine Coast based, working Australia-wide</h2>
                <p className="section-intro">
                    The map shows sites where we've delivered safety work for clients across the country.
                </p>

                <div className={`map ${active ? 'is-active' : ''}`} onMouseLeave={() => setActive(false)}>
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=17wOoyZsnSX_s1_BZ47V9IVnNl2jKtQU&ehbc=2E312F"
                        title="Map of sites where Risk Rescue Solutions has worked"
                        loading="lazy"
                        allowFullScreen
                    />
                    {active ? (
                        <button className="map__done" onClick={() => setActive(false)}>Done</button>
                    ) : (
                        <button className="map__cover" onClick={() => setActive(true)}>
                            <span>Tap to explore the map</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MapSection;
