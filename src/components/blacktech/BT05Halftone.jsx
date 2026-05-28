import React from 'react';
import { BlackTechSlide, CaptionBlock, Lines, MediaPlaceholder } from './primitives.jsx';

const defaultItems = [
  ['1.', '收入增长', '全年收入保持增长，但增速更多来自核心客户复购。'],
  ['2.', '客户结构', '大客户占比提升，长周期服务和交付能力更重要。'],
  ['3.', '交付效率', '关键流程缩短，跨团队协同仍是主要瓶颈。'],
  ['4.', '组织能力', '团队能力更加稳定，明年需要强化中层负责人机制。'],
];

export function BT05Halftone({
  chrome = { left: '04 · IMAGE + LIST', right: 'PAGE 05/12', bottomLeft: 'MEDIA SLOT', bottomRight: '◦ LIST' },
  imageSlotId = 'bt05-left-image',
  eyebrow = '04',
  accent = '经营拆解',
  title = '四个维度解释全年表现。',
  body = ['这页用于把年度结果拆成可讨论的经营变量。', '左侧可以替换为团队、业务现场或产品截图。'],
  items = defaultItems,
  captions = [
    ['Growth', '收入'],
    ['Efficiency', '效率'],
    ['Team', '组织'],
  ],
}) {
  return (
    <BlackTechSlide
      layout="BT05"
      chrome={chrome}
    >
      <MediaPlaceholder className="bt-halftone-poster" variant="halftone" slotId={imageSlotId} />
      <div className="bt-side-copy">
        <div className="bt-eyebrow">{eyebrow} · <span className="bt-accent">{accent}</span></div>
        <div className="bt-title">{title}</div>
        <div className="bt-body">
          <Lines lines={body} />
        </div>
        <div className="bt-ref-list">
          {items.map(([num, title, body]) => (
            <div className="item" key={title}>
              <div className="n"><span>{num}</span> {title}</div>
              <div className="d">{body}</div>
            </div>
          ))}
        </div>
        <div className="bt-caption-row">
          {captions.map(([label, value]) => <CaptionBlock key={label} label={label} value={value} />)}
        </div>
      </div>
    </BlackTechSlide>
  );
}
