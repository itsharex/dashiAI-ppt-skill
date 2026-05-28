import React from 'react';
import { Mark, ReportSlide } from './primitives.jsx';

export function Report01Cover() {
  return (
    <ReportSlide layout="RP01" tone="dark" className="rp-cover-slide rp-red">
      <div className="rp-cover">
        <div className="rp-cover-hero">
          <Mark />
          <div>
            <div className="rp-eyebrow">市场营销 · 年终复盘</div>
            <div className="rp-cover-year">2025</div>
            <div className="rp-cover-review">年度复盘</div>
            <p>Northwind Labs 品牌重塑、管道扩张与社区建设的一年。</p>
          </div>
          <div className="rp-cover-meta">
            <span>2025 · 12 · 18</span>
            <span>MARA OKONKWO · 市场负责人</span>
          </div>
        </div>
        <div className="rp-cover-art rp-blue">
          <span className="rp-half" />
          <span className="rp-dot" />
        </div>
        <div className="rp-cover-art rp-ink">
          <div className="rp-cover-bars">
            {[52, 78, 38, 92, 64, 46, 84, 28].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
          </div>
        </div>
      </div>
    </ReportSlide>
  );
}

