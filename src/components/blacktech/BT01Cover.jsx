import React from 'react';
import { BlackTechSlide, CaptionBlock, MediaPlaceholder } from './primitives.jsx';

export function BT01Cover({
  chrome = { left: 'YEAR-END REPORT / COVER', right: 'SECTION 00', bottomLeft: 'FY2026 -- 00/12', bottomRight: '◦ START' },
  ghostword = 'REVIEW',
  imageSlotId = 'bt01-cover',
  eyebrow = '年终汇报',
  accent = '经营复盘',
  titleTop = '2026',
  titleAlt = '年度',
  titleBottom = '经营复盘',
  captions = [
    ['Topic', '年度业绩复盘'],
    ['Audience', '管理层 / 业务负责人'],
    ['Owner', '战略与经营团队'],
  ],
  footerLeft = 'REF -- ANNUAL REVIEW / FY2026 · 2026.12',
  footerRight = '▍▍ START →',
}) {
  return (
    <BlackTechSlide
      layout="BT01"
      chrome={chrome}
    >
      <div className="bt-ghostword">{ghostword}</div>
      <MediaPlaceholder className="bt-cover-poster" variant="portrait" slotId={imageSlotId} />
      <div className="bt-cover-copy">
        <div className="bt-eyebrow">{eyebrow} · <span className="bt-accent">{accent}</span></div>
        <div className="bt-display">
          {titleTop}<br />
          <span className="bt-title-alt muted">{titleAlt}</span><br />
          {titleBottom}<span className="dim">.</span>
        </div>
        <div className="bt-caption-row">
          {captions.map(([label, value]) => <CaptionBlock key={label} label={label} value={value} />)}
        </div>
        <div className="bt-cover-foot">
          <div>{footerLeft}</div>
          <div>{footerRight}</div>
        </div>
      </div>
    </BlackTechSlide>
  );
}
