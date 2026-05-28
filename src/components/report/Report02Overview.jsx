import React from 'react';
import { Footer, ReportSlide, StatGrid, TopBar } from './primitives.jsx';

export function Report02Overview() {
  return (
    <ReportSlide layout="RP02" className="rp-cream">
      <div className="rp-page rp-pad">
        <TopBar eyebrow="章节 · 01" />
        <h1 className="rp-title">全年概览。</h1>
        <StatGrid
          stats={[
            { label: '营销来源管道额', value: '$42.8M', note: '同比 +38%', color: 'red' },
            { label: '合格线索（MQL）', value: '18,412', note: '同比 +61%', color: 'blue' },
            { label: '品牌搜索量', value: '2.4x', note: '较 2025 年 1 月' },
            { label: 'CAC 回收期', value: '9.1个月', note: '从 14.2 个月降至', color: 'amber', dark: true },
          ]}
        />
        <Footer left="01 · 全年概览" right="市场营销 · 2025 年终" />
      </div>
    </ReportSlide>
  );
}

