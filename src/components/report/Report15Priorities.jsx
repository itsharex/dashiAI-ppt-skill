import React from 'react';
import { Footer, Lines, ReportSlide, TopBar } from './primitives.jsx';

const items = [
  ['01', '加倍投入\n研究\n引擎。', '四份旗舰报告。每季度一份。团队配置到位。', 'red'],
  ['02', '把视频\n作为一级\n渠道。', '专属小组。每周系列内容；每月长篇内容。', 'blue'],
  ['03', 'APAC\n市场进入。', '区域负责人、日语 + 韩语内容，并纳入三座线下活动城市。', 'amber'],
  ['04', '提升\n度量\n成熟度。', 'Q2 前在所有付费渠道上线营销组合模型（MMM）+ 增量测试。', 'ink'],
];

export function Report15Priorities() {
  return (
    <ReportSlide layout="RP15" className="rp-cream">
      <div className="rp-page rp-pad">
        <TopBar eyebrow="章节 · 04 · 下一步" />
        <h1 className="rp-title compact">2026 优先事项。</h1>
        <div className="rp-priority-grid">
          {items.map(([number, title, body, tone]) => (
            <div className={`rp-priority ${tone}`} key={number}>
              <div className="rp-card-num">{number}</div>
              <div>
                <h3><Lines lines={title} /></h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer left="09 · 2026 重点" right="市场营销 · 2025 年终" />
      </div>
    </ReportSlide>
  );
}
