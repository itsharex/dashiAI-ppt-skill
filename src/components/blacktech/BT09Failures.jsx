import React from 'react';
import { BlackTechSlide, Lines } from './primitives.jsx';

const defaultCases = [
  ['CASE / 01', '收入结构\n集中。', '核心客户贡献提升。\n需要降低单一客户波动影响。'],
  ['CASE / 02', '交付能力\n承压。', '项目复杂度上升。\n需要补齐跨团队协同机制。'],
  ['CASE / 03', '成本效率\n分化。', '不同业务线差异明显。\n需要统一成本口径和复盘节奏。'],
];

export function BT09Failures({
  chrome = { left: '08 · RISKS', right: 'PAGE 09/12', bottomLeft: 'LIMITATION CARDS', bottomRight: '◦ NOTES' },
  eyebrow = '08',
  accent = '风险与限制',
  title = '年度结果背后\n仍有三类经营风险。',
  cases = defaultCases,
}) {
  return (
    <BlackTechSlide
      layout="BT09"
      chrome={chrome}
    >
      <div className="bt-pad">
        <div className="bt-eyebrow">{eyebrow} · <span className="bt-accent">{accent}</span></div>
        <div className="bt-title"><Lines lines={title} /></div>
        <div className="bt-failure-grid">
          {cases.map(([label, title, body]) => (
            <div className="bt-failure-card" key={label}>
              <div className="bt-small">{label}</div>
              <div className="bt-subtitle">{title}</div>
              <div className="bt-body">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </BlackTechSlide>
  );
}
