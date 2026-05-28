import React from 'react';
import { BracketTitle, Corner, VisionSlide } from './primitives.jsx';

const metrics = [
  ['抖音', 'DOUYIN', '20', 'W', '主阵地 · 日更节奏', 65],
  ['小红书', 'RED', '8', 'W', '深度图文 · 收藏率高', 26],
  ['B 站', 'BILIBILI', '5', 'K', '长视频 · 技术深度播', 9],
];

export function Vision05Metrics() {
  return (
    <VisionSlide layout="VISION-05" className="vision-metrics">
      <Corner left="// 04 · BOX OFFICE" right="METRICS · YTD 2026" />
      <div className="vision-section-head">
        <BracketTitle>BOX OFFICE</BracketTitle>
        <p>粉丝成绩单 · 跨平台</p>
      </div>
      <div className="vision-metric-grid">
        {metrics.map(([platform, en, num, unit, note, width], index) => (
          <div className="vision-metric-card" key={platform}>
            <div className="meta"><span>PLATFORM 0{index + 1}</span><span>{en}</span></div>
            <h2>{platform}</h2>
            <div className="num"><strong>{num}</strong><b>{unit}</b></div>
            <small>FOLLOWERS</small>
            <p>{note}</p>
            <div className="bar"><i style={{ width: `${width}%` }} /></div>
          </div>
        ))}
      </div>
    </VisionSlide>
  );
}
