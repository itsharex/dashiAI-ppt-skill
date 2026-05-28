import React from 'react';
import { BlackTechSlide, CaptionBlock, Lines, MediaPlaceholder } from './primitives.jsx';

export function BT03SignalNoise({
  chrome = { left: '02 · IMAGE + COPY', right: 'PAGE 03/12', bottomLeft: 'MEDIA SLOT', bottomRight: '◦ CONTEXT' },
  imageSlotId = 'bt03-left-image',
  figureLabel = 'FIG · MARKET SIGNAL',
  figureTitle = ['年度增长曲线', '与客户结构变化'],
  eyebrow = '02',
  accent = '市场信号',
  title = ['关键市场信号', '决定明年优先级。'],
  body = ['核心客户贡献继续提高，新增需求集中在效率、稳定性和服务响应。', '明年的资源投入应优先覆盖高价值客户场景。'],
  captions = [
    ['Revenue', '收入结构'],
    ['Customer', '核心客户'],
    ['Priority', '明年重点'],
  ],
}) {
  return (
    <BlackTechSlide
      layout="BT03"
      chrome={chrome}
      className="bt-split-slide"
    >
      <div className="bt-signal-left">
        <MediaPlaceholder className="bt-split-image" variant="noise" slotId={imageSlotId} />
        <div className="bt-split-caption">
          <div className="bt-tiny">{figureLabel}</div>
          <div className="bt-subtitle"><Lines lines={figureTitle} /></div>
        </div>
      </div>
      <div className="bt-signal-right">
        <div>
          <div className="bt-eyebrow light">{eyebrow} · <span className="bt-accent">{accent}</span></div>
          <div className="bt-title light"><Lines lines={title} /></div>
          <div className="bt-body light">
            <Lines lines={body} />
          </div>
        </div>
        <div className="bt-caption-row between">
          {captions.map(([label, value]) => <CaptionBlock key={label} tone="light" label={label} value={value} />)}
        </div>
      </div>
    </BlackTechSlide>
  );
}
