import React from 'react';
import { ChartBars, Footer, ReportSlide, TopBar } from './primitives.jsx';

const rows = [
  { label: '自然搜索', value: 74, display: '$11.6M', tone: 'red' },
  { label: '付费社媒', value: 58, display: '$9.1M', tone: 'blue' },
  { label: '生命周期邮件', value: 46, display: '$7.2M', tone: 'amber' },
  { label: '活动与聚会', value: 38, display: '$6.0M', tone: 'ink' },
  { label: '合作伙伴', value: 32, display: '$5.0M', tone: 'red' },
  { label: '付费搜索', value: 24, display: '$3.9M', tone: 'blue' },
];

export function Report09Channels() {
  return (
    <ReportSlide layout="RP09">
      <div className="rp-page rp-pad">
        <TopBar eyebrow="章节 · 02 · 结果" />
        <h1 className="rp-title">渠道表现。</h1>
        <p className="rp-body wide">按渠道拆分的来源管道额占比 · 2025 财年</p>
        <div className="rp-chart-wrap">
          <ChartBars rows={rows} />
        </div>
        <Footer left="04 · 渠道" right="市场营销 · 2025 年终" />
      </div>
    </ReportSlide>
  );
}
