import React from 'react';
import { Corner, LogoMark, Sticker, VisionSlide } from './primitives.jsx';

export function Vision02CoverAlt() {
  return (
    <VisionSlide layout="VISION-02" className="vision-cover-alt">
      <Corner left="// COVER · ALT" right="FILE: DASHI.INTRO.2026" />
      <div className="vision-sticker-field sparse">
        <Sticker invert>大师来了</Sticker><Sticker>SINGLE SERVING</Sticker><Sticker>不是教程 是小灶</Sticker>
      </div>
      <div className="vision-cover-alt-main">
        <LogoMark />
        <h1>DASHI<br /><span>'S AI 小灶</span></h1>
        <div className="vision-cover-alt-foot">
          <p>ACCOUNT VISION & STRATEGY · 2026<br />A SINGLE-SERVING DECK FOR THE TEAM.</p>
          <button type="button">START COOKING -></button>
        </div>
      </div>
    </VisionSlide>
  );
}
