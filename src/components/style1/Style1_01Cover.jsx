import React from 'react';
import { Aura, Mascot, Style1Slide, Wordmark } from './primitives.jsx';

export function Style1_01Cover() {
  return (
    <Style1Slide layout="ST1-01" className="st1-cover">
      <Aura tone="cyan" />
      <div className="st1-cover-content">
        <div className="st1-top-row">
          <Wordmark />
          <div className="st1-meta">Vol. 04 · MMXXVI<br />Jelly Lab Report</div>
        </div>
        <div className="st1-center">
          <div className="st1-eyebrow">2026 · COLOR TREND REPORT</div>
          <h1>潮流<span>color</span>报告</h1>
          <div className="st1-sub">五种颜色，五种心情。</div>
        </div>
        <div className="st1-bottom-row">
          <div className="st1-left-meta"><span>果冻研究所 出品</span><span>·</span><span>Issue 04</span></div>
          <div className="st1-character-row">
            <Mascot kind="cloud" className="cyan" />
            <Mascot kind="drop" className="orange" />
            <Mascot kind="flower" className="lime" />
            <Mascot kind="heart" className="purple" />
            <Mascot kind="star" className="ink" />
          </div>
        </div>
      </div>
    </Style1Slide>
  );
}
