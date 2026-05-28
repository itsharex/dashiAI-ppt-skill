import React from 'react';
import { BracketTitle, Corner, VisionSlide } from './primitives.jsx';

const items = [
  ['#1', '三分钟把 Claude Code 调成你的形状', 'CLAUDE CODE', '抖音', '142W', '播放'],
  ['#2', '我把 MCP 当 USB-C 用了一周', 'MCP', '小红书', '3.8W', '收藏'],
  ['#3', '别再手写 prompt 了，写 skill 吧', 'SKILLS', '抖音', '96W', '播放'],
  ['#4', 'Agent 为什么总在第三步崩', 'AGENT LOOP', 'B站', '22W', '播放'],
];

export function Vision06Specials() {
  return (
    <VisionSlide layout="VISION-06" className="vision-specials">
      <Corner left="// 05 · HOUSE SPECIALS" right="TOP PERFORMERS" />
      <div className="vision-section-head horizontal">
        <BracketTitle>HOUSE<br />SPECIALS</BracketTitle>
        <p>小灶里的招牌菜<br /><span>&gt; WHAT ACTUALLY HIT</span></p>
      </div>
      <div className="vision-special-grid">
        {items.map(([rank, title, tag, platform, metric, label]) => (
          <div className="vision-special-card" key={rank}>
            <div className="thumb"><strong>{rank}</strong><span>[THUMB]</span></div>
            <div className="body">
              <div><b>{tag}</b><em>{platform}</em></div>
              <h3>{title}</h3>
              <p><strong>{metric}</strong><span>{label}</span></p>
            </div>
          </div>
        ))}
      </div>
    </VisionSlide>
  );
}
