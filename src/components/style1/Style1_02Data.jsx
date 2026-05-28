import React from 'react';
import { GridBg, Mascot, Style1Slide } from './primitives.jsx';

const colors = [
  ['cloud', 'cyan', '49%', '电光青', 'Electric Cyan'],
  ['heart', 'pink', '38%', '果冻粉', 'Jelly Pink'],
  ['flower', 'lime', '31%', '草坪绿', 'Lawn Green'],
  ['drop', 'orange', '24%', '落日橙', 'Sunset Orange'],
  ['star', 'purple', '18%', '葡萄紫', 'Grape Purple'],
];

export function Style1_02Data() {
  return (
    <Style1Slide layout="ST1-02" className="st1-data">
      <GridBg />
      <div className="st1-data-head">
        <h2>设计师最常使用的<br />五种<span>color</span>。</h2>
        <div className="st1-meta">n = 2,847 设计师<br />2026 / Q1 调研<br />Source · Jelly Lab</div>
      </div>
      <div className="st1-chart">
        {colors.map(([kind, color, pct, name, en]) => (
          <div className="st1-chart-col" key={name}>
            <Mascot kind={kind} className={color} />
            <div className="st1-pct">{pct}</div>
            <div className={`st1-bar ${color}`} style={{ height: pct }} />
            <div className="st1-name">{name}</div>
            <div className="st1-name-en">{en}</div>
          </div>
        ))}
      </div>
      <div className="st1-baseline" />
      <div className="st1-footnote"><span>Fig. 01 · 多选题，受访者可选 1-3 项</span><span>果冻研究所 / 2026 潮流色彩报告 · 02</span></div>
    </Style1Slide>
  );
}
