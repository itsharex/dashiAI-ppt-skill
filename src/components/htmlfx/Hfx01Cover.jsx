import React from 'react';
import { HtmlFxSlide } from './primitives.jsx';

export function Hfx01Cover() {
  return (
    <HtmlFxSlide layout="HFX01" className="hfx-cover">
      <div className="hfx-bg-iframe">
        <iframe
          src="https://my.spline.design/untitled-Im11sLMRTyAnu0fndpYEnYco/"
          loading="eager"
          allow="autoplay; fullscreen"
          title="Spline surface background"
        />
        <span className="hfx-bg-tint" />
        <span className="hfx-bg-grain" />
      </div>
      <div className="hfx-cover-fg">
        <div className="hfx-cover-rail">
          <div><span className="hfx-dot" />HTML · Feature Studies</div>
          <div><span>VOL <b>07</b></span><span>2026 · 04 · 21</span></div>
        </div>
        <div className="hfx-cover-title">
          <div className="hfx-eyebrow"><span />LIVE · 3D SURFACE</div>
          <h1>Flowing<br /><span>Pixels</span></h1>
          <p>
            When a web page begins to <b>breathe, refract and respond</b> —
            a share on 3D, materials and interaction.
          </p>
        </div>
      </div>
    </HtmlFxSlide>
  );
}
