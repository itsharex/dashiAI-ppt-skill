import React from 'react';
import { BracketTitle, Corner, LogoMark, Sticker, VisionSlide } from './primitives.jsx';

export function Vision01Cover() {
  return (
    <VisionSlide layout="VISION-01" className="vision-cover">
      <Corner left="// COVER" right="EP.001 - INTRO" />
      <div className="vision-sticker-field">
        <Sticker>PROMPT INJECTION</Sticker><Sticker>CLAUDE CODE</Sticker><Sticker>MCP SERVER</Sticker><Sticker>AGENT LOOP</Sticker><Sticker>TOKEN $$$</Sticker>
      </div>
      <div className="vision-cover-main">
        <LogoMark />
        <BracketTitle size="xl">大师的<br />AI 小灶</BracketTitle>
        <p>I'M DASHI. I RUN A BACK-KITCHEN FOR AI - WHERE WE COOK TOOLS DOWN TO THEIR BONES SO YOU CAN ACTUALLY USE THEM.</p>
        <div className="vision-actions">
          <button type="button">TASTE THE MENU</button>
          <button type="button" className="ghost">READ DOCS -></button>
          <span>INTERNAL · STRATEGY DECK</span>
        </div>
      </div>
    </VisionSlide>
  );
}
