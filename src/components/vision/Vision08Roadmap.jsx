import React from 'react';
import { BracketTitle, Corner, VisionSlide } from './primitives.jsx';

const phases = [
  ['NOW', '2026 Q2', '巩固主阵地', ['抖音日更稳 20W+', '小红书图文深耕', '选题库系统化'], 'IN PROGRESS'],
  ['NEXT', '2026 H2', '跨平台破圈', ['B 站长视频加码到 5W', '开播客 · 每周 1 期', '进驻 X / 小宇宙'], 'QUEUED'],
  ['LATER', '2027', '产品化', ['自研 Skill 模板库', '付费小课 / 陪练社群', '品牌合作精选盒子'], 'PLANNED'],
  ['NORTH', '2028', '第一站', ['华语 AI 内容默认入口', '100W+ 跨平台生态', '被引用 · 被模仿 · 被信赖'], 'NORTH STAR'],
];

export function Vision08Roadmap() {
  return (
    <VisionSlide layout="VISION-08" className="vision-roadmap">
      <Corner left="// 07 · ROADMAP" right="FORWARD LOOK" />
      <div className="vision-section-head horizontal">
        <BracketTitle>ROADMAP</BracketTitle>
        <p>2026 -> 2028 · 从内容到生态</p>
      </div>
      <div className="vision-roadmap-grid">
        {phases.map(([phase, range, title, points, status], index) => (
          <div className={`vision-road-card ${index === 3 ? 'invert' : ''}`} key={phase}>
            <strong>{phase}</strong><small>{range}</small>
            <h2>{title}</h2>
            <ul>{points.map(point => <li key={point}>→ {point}</li>)}</ul>
            <em>[{status}]</em>
          </div>
        ))}
      </div>
    </VisionSlide>
  );
}
