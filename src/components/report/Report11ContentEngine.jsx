import React from 'react';
import { Footer, ReportSlide, TopBar } from './primitives.jsx';

const metrics = [
  ['长篇文章', '184', '同比 +112%'],
  ['研究报告', '7', '含 Practitioner Index', 'red'],
  ['邮件简报订阅者', '86.2K', '同比 +148%', '', 'blue'],
  ['自然访问 / 月', '1.9M', '1 月为 540K', 'amber'],
];

export function Report11ContentEngine() {
  return (
    <ReportSlide layout="RP11" className="rp-cream">
      <div className="rp-page rp-pad">
        <TopBar eyebrow="章节 · 02 · 结果" />
        <h1 className="rp-title">内容引擎产出。</h1>
        <div className="rp-metric-grid">
          {metrics.map(([label, value, note, tone, valueTone]) => (
            <div className={`rp-metric-card ${tone || ''}`.trim()} key={label}>
              <div>{label}</div>
              <strong className={valueTone || ''}>{value}</strong>
              <span>{note}</span>
            </div>
          ))}
        </div>
        <Footer left="06 · 内容" right="市场营销 · 2025 年终" />
      </div>
    </ReportSlide>
  );
}
