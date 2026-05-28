import React from 'react';
import { Footer, Lines, ReportSlide, TopBar } from './primitives.jsx';

export function Report10BrandLift() {
  return (
    <ReportSlide layout="RP10" tone="dark" className="rp-blue">
      <div className="rp-page rp-pad">
        <TopBar eyebrow="章节 · 02 · 结果" />
        <div className="rp-lift-grid">
          <div>
            <p className="rp-eyebrow">品牌认知提升</p>
            <div className="rp-lift-number">2.4×</div>
            <p className="rp-body wide">
              <Lines lines={['买家样本中的无提示认知率从 1 月的 11% 提升至 11 月的 27%。', '品牌词搜索量同步增长，同期提升 2.4 倍。']} />
            </p>
          </div>
          <div className="rp-lift-art" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
        </div>
        <Footer left="05 · 品牌提升" right="市场营销 · 2025 年终" />
      </div>
    </ReportSlide>
  );
}
