import React from 'react';
import { HtmlFxSlide, Star4 } from './primitives.jsx';

export function Hfx03Earthrise() {
  return (
    <HtmlFxSlide layout="HFX03" className="hfx-earth">
      <div className="hfx-earth-bg">
        <iframe
          src="https://my.spline.design/risingsunspacescenecopy-a27680b12f2baf99b7ed0f144b8b474e/"
          loading="eager"
          allow="autoplay; fullscreen"
          title="Earthrise Spline scene"
        />
      </div>
      <div className="hfx-earth-rail">
        <Star4 />
        <div><em>Spacecadet ·</em> A Venture Collective</div>
      </div>
      <nav className="hfx-earth-nav">
        <div>Orbit <em>LEO-408</em></div>
        <div><span>Ventures</span><span>Collective</span><span>Content</span><span>Services</span></div>
        <div>Get In Touch <b>→</b></div>
      </nav>
      <div className="hfx-earth-orbits">
        <svg viewBox="0 0 1100 560" fill="none" stroke="currentColor">
          <ellipse cx="550" cy="280" rx="520" ry="180" transform="rotate(-18 550 280)" />
          <ellipse cx="550" cy="280" rx="520" ry="180" transform="rotate(18 550 280)" />
          <ellipse cx="550" cy="280" rx="440" ry="140" transform="rotate(-8 550 280)" opacity=".55" />
        </svg>
      </div>
      <Star4 className="hfx-earth-star" />
      <div className="hfx-earth-hero">
        <h1>We join <span>forces to</span><br />ignite <b>great</b><br />leaps <span>forward.</span></h1>
        <p>— A Transmission From Low Earth Orbit · 2026</p>
      </div>
      <div className="hfx-earth-foot">
        <div><h3>Founders</h3><p>Ignite your startup with hundreds of backers invested in your success.</p></div>
        <Star4 />
        <div><h3>Funders</h3><p>Fuel the future. Invest in any startup; own part of every startup we fund.</p></div>
      </div>
    </HtmlFxSlide>
  );
}
