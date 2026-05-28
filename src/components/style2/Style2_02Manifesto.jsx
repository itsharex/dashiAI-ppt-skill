import React from 'react';
import { CornerMeta, Frame, Style2Slide } from './primitives.jsx';

export function Style2_02Manifesto() {
  return (
    <Style2Slide layout="ST2-02" tone="light" className="st2-manifesto">
      <CornerMeta pos="tl" muted>02 — 引言　PREFACE</CornerMeta>
      <CornerMeta pos="tr" muted>幕間 / 2026</CornerMeta>
      <Frame className="manifesto">
        <p className="st2-pull">我們不再只是<em>觀看影像</em>，<br />而是在影像之中<span>緩慢地、</span>習慣性地<br /><span>棲居下來</span>。</p>
        <div className="st2-attrib"><div>陳維安</div><span>EDITOR-IN-CHIEF · 主編</span></div>
      </Frame>
      <CornerMeta pos="bl" muted>P. 002 / 048</CornerMeta>
      <CornerMeta pos="br" muted>— 序　言　—</CornerMeta>
    </Style2Slide>
  );
}
