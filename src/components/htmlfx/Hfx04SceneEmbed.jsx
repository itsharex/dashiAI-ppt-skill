import React from 'react';
import { HtmlFxSlide } from './primitives.jsx';

export function Hfx04SceneEmbed() {
  return (
    <HtmlFxSlide layout="HFX04" className="hfx-scene-embed">
      <iframe
        src="https://jadon7.github.io/echartdemo/?scene=2"
        allow="fullscreen; autoplay"
        allowFullScreen
        title="Embedded scene"
      />
    </HtmlFxSlide>
  );
}
