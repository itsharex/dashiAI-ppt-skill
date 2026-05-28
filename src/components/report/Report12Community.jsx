import React from 'react';
import { ReportSlide, TopBar } from './primitives.jsx';

export function Report12Community() {
  return (
    <ReportSlide layout="RP12">
      <div className="rp-page rp-community">
        <div className="rp-community-copy">
          <TopBar eyebrow="章节 · 02 · 结果" />
          <div>
            <h1 className="rp-title">社区<br />与活动。</h1>
            <p className="rp-body">Practitioner 线下活动项目覆盖 4 大洲 22 个城市。9,400 人到场参与，另有 54,000 人加入 Discord。</p>
          </div>
          <div className="rp-meta-row">
            <div>22 城市</div>
            <div>9.4K 参会者</div>
            <div>54K Discord 社群</div>
          </div>
        </div>
        <div className="rp-community-mosaic">
          <div className="rp-tile blue"><span className="rp-half" /><i /></div>
          <div className="rp-tile amber"><b className="rp-triangle" /></div>
          <div className="rp-tile ink stripe" />
          <div className="rp-tile cream dots" />
          <div className="rp-tile red"><span className="rp-half" /></div>
          <div className="rp-tile ink"><strong>22</strong><small>城市</small></div>
          <div className="rp-tile paper"><strong>9.4K</strong><small>参会者</small></div>
          <div className="rp-tile blue"><strong>54K</strong><small>Discord 社群</small></div>
        </div>
      </div>
    </ReportSlide>
  );
}
