import React from 'react';
import { Mark, ReportSlide } from './primitives.jsx';

export function Report16Closing() {
  return (
    <ReportSlide layout="RP16" tone="dark" className="rp-red rp-closing-slide">
      <div className="rp-page rp-closing">
        <div className="rp-closing-copy">
          <Mark />
          <h1>完。<br />谢谢<br />大家。</h1>
          <p>致 22 位一起把 2025 做成的人，也致被我们一路拉着向前的团队。下一程继续。</p>
          <div className="rp-cover-meta"><span>问题？</span><span>MARA@NORTHWIND.LABS</span></div>
        </div>
        <div className="rp-closing-art">
          <div className="rp-tile blue"><span className="rp-half" /><i /></div>
          <div className="rp-tile amber"><div className="rp-art-overlap"><span /><span /></div></div>
          <div className="rp-tile ink"><span className="rp-target" /></div>
          <div className="rp-tile cream dots"><span className="rp-diagonal" /></div>
        </div>
      </div>
    </ReportSlide>
  );
}
