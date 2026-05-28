import React from 'react';
import { BlackTechSlide, ChartSwitch, Lines, MediaPlaceholder } from './primitives.jsx';

const defaultChartRows = [
  ['年度目标', 92, 'focus'],
  ['收入增长', 78],
  ['成本效率', 64],
  ['客户留存', 56],
];

export function BT06Dither({
  chrome = { left: '05 · IMAGE + CHART', right: 'PAGE 06/12', bottomLeft: 'MEDIA / CHART', bottomRight: '◦ DATA' },
  imageSlotId = 'bt06-chart-image',
  eyebrow = '05',
  accent = '指标对比',
  title = '年度目标与关键指标进展。',
  noteTitle = 'Chart · annual KPI',
  noteBody = ['适合展示 3-5 个', '年度核心指标。'],
  chartTitle = 'KPI · TARGET COMPLETION',
  chartRows = defaultChartRows,
  body = ['高亮指标表示年度经营目标完成度。', '其他指标用于解释增长质量与经营效率。'],
}) {
  return (
    <BlackTechSlide
      layout="BT06"
      chrome={chrome}
    >
      <div className="bt-pad">
        <div className="bt-head-row">
          <div>
            <div className="bt-eyebrow">{eyebrow} · <span className="bt-accent">{accent}</span></div>
            <div className="bt-title">{title}</div>
          </div>
          <div className="bt-right-note">
            <div className="bt-tiny">{noteTitle}</div>
            <div className="bt-body small"><Lines lines={noteBody} /></div>
          </div>
        </div>
        <div className="bt-dither-grid">
          <MediaPlaceholder className="bt-chart-image" variant="dither" slotId={imageSlotId} />
          <div className="bt-chart-panel">
            <ChartSwitch title={chartTitle} rows={chartRows} />
            <div className="bt-body matrix-copy">
              <Lines lines={body} />
            </div>
          </div>
        </div>
      </div>
    </BlackTechSlide>
  );
}
