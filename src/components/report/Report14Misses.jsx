import React from 'react';
import { Footer, ReportSlide, TopBar } from './primitives.jsx';

const misses = [
  ['未中 · 01', '付费搜索平台期', '核心品类 CPC 上升 63%。尽管持续测试创意，Q4 ROAS 仍跌破 1.8。', 'red'],
  ['未中 · 02', '视频投入不足', '原计划 40 条视频，实际只交付 14 条。这个形式已被竞争对手验证，我们必须补上。', 'blue'],
  ['未中 · 03', 'APAC 扩张停滞', '缺少本地化内容，也没有区域团队。APAC 管道额维持在总量的 6%，没有增长。', 'amber'],
];

export function Report14Misses() {
  return (
    <ReportSlide layout="RP14">
      <div className="rp-page rp-pad">
        <TopBar eyebrow="章节 · 03 · 复盘" />
        <h1 className="rp-title compact">未达预期。</h1>
        <div className="rp-miss-grid">
          {misses.map(([kicker, title, body, tone]) => (
            <div className={`rp-miss-card ${tone}`} key={kicker}>
              <div className="rp-eyebrow">{kicker}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <div className="rp-callout">共同问题：第二波投入不足。一旦某件事被验证有效，我们加码的速度太慢。</div>
        <Footer left="08 · 未达预期" right="市场营销 · 2025 年终" />
      </div>
    </ReportSlide>
  );
}
