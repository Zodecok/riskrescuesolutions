import { useState } from 'react';
import { LAND, MAP_H, MAP_W, SITES, WORKED } from './workMap.data';
import './MapSection.css';

// Keep labels inside the frame (South Africa sits right on the left edge)
const clampX = (x) => Math.min(Math.max(x, 80), MAP_W - 80);

const MapSection = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="section section--warm" id="areas">
            <div className="container">
                <span className="eyebrow">Where we work</span>
                <h2 className="section-heading">Sunshine Coast based, working worldwide</h2>
                <p className="section-intro">
                    We've delivered safety work right across Australia, and overseas in Papua New Guinea,
                    New Zealand, Saudi Arabia and South Africa.
                </p>

                <figure className="workmap">
                    <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img"
                        aria-label={`Map showing work in ${WORKED.map((c) => c.name).join(', ')}`}>
                        <path className="workmap__land" d={LAND} />
                        {WORKED.map((c) => (
                            <path key={c.name} className="workmap__worked" d={c.d} />
                        ))}
                        <g className="workmap__labels" aria-hidden="true">
                            {WORKED.map((c) => (
                                <text key={c.name} x={clampX(c.label[0])} y={c.label[1]}>{c.name}</text>
                            ))}
                        </g>
                        {SITES.map((s) => (
                            <g key={s.name}
                                className={`workmap__site ${s.home ? 'is-home' : ''} ${active === s.name ? 'is-active' : ''}`}
                                transform={`translate(${s.x} ${s.y})`}>
                                {s.home && <circle className="workmap__ring" r="13" />}
                                <circle className="workmap__dot" r="6" />
                            </g>
                        ))}
                    </svg>

                    <figcaption className="workmap__key">
                        <ul className="workmap__countries" aria-label="Countries we've worked in">
                            {WORKED.slice().reverse().map((c) => <li key={c.name}>{c.name}</li>)}
                        </ul>
                        <ul className="workmap__sites" aria-label="Australian sites">
                            {SITES.map((s) => (
                                <li key={s.name} className={s.home ? 'is-home' : ''}
                                    onMouseEnter={() => setActive(s.name)} onMouseLeave={() => setActive(null)}>
                                    <span className="workmap__pin" aria-hidden="true" />
                                    {s.name}{s.note && <em> · {s.note}</em>}
                                </li>
                            ))}
                        </ul>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default MapSection;
