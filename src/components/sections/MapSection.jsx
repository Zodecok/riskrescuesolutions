import { useState } from 'react';
import './MapSection.css';

const MapSection = () => {
    const [isInteractionEnabled, setIsInteractionEnabled] = useState(false);

    const enableInteraction = () => {
        setIsInteractionEnabled(true);
    };

    const disableInteraction = () => {
        setIsInteractionEnabled(false);
    };

    return (
        <section className="section-wrapper map-section" id="service-map">
            <div className="container map-container">
                <div className="map-header">
                    <h2 className="section-title">Map of Our Services Australia Wide</h2>
                    <p className="section-description">
                        Explore our footprint across the country. Risk Rescue Solutions has successfully delivered tailored safety interventions for businesses nationwide. We believe in accessible safety for everyone, providing customized solutions to meet your needs wherever you operate in Australia.
                    </p>
                </div>

                <div 
                    className={`map-wrapper ${isInteractionEnabled ? 'interactive' : ''}`}
                    onMouseLeave={disableInteraction}
                >
                    {!isInteractionEnabled && (
                        <div className="map-overlay" onClick={enableInteraction}>
                            <span className="map-overlay-text">Click to Interact</span>
                        </div>
                    )}
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=17wOoyZsnSX_s1_BZ47V9IVnNl2jKtQU&ehbc=2E312F"
                        title="Risk Rescue Solutions Service Map"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
