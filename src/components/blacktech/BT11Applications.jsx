import React from 'react';
import { BlackTechSlide, Lines } from './primitives.jsx';

const defaultApps = [
  ['01', '聚焦核心客户', '把资源优先投入高留存、高复购和高战略价值客户。', true],
  ['02', '提升交付效率', '压缩跨团队等待时间，统一关键项目复盘机制。'],
  ['03', '优化成本结构', '把预算从低产出项目转向可规模化的增长动作。'],
  ['04', '强化组织梯队', '明确中层负责人目标，形成更稳定的业务推进节奏。'],
];

export function BT11Applications({
  chrome = { left: '10 · ACTIONS', right: 'PAGE 11/12', bottomLeft: 'CARD GRID', bottomRight: '◦ PLAN' },
  eyebrow = '10',
  accent = '明年动作',
  title = '一个核心重点，三个经营支撑。',
  apps = defaultApps,
}) {
  return (
    <BlackTechSlide
      layout="BT11"
      chrome={chrome}
    >
      <div className="bt-pad">
        <div className="bt-eyebrow">{eyebrow} · <span className="bt-accent">{accent}</span></div>
        <div className="bt-title">{title}</div>
        <div className="bt-app-grid">
          {apps.map(([number, title, body, focus]) => (
            <div className={`bt-app-card ${focus ? 'is-focus' : ''}`} key={number}>
              <div>
                <div className="bt-small">{number}</div>
                <div className="bt-subtitle">{title}</div>
              </div>
              <div className="bt-body"><Lines lines={body} /></div>
            </div>
          ))}
        </div>
      </div>
    </BlackTechSlide>
  );
}
