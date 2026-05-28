import React from 'react';
import { BlackTechSlide, BottomRule, Lines } from './primitives.jsx';

export function BT02Hypothesis({
  chrome = { left: '01 · KEY MESSAGE', right: 'PAGE 02/12', bottomLeft: 'TEMPLATE / STATEMENT', bottomRight: '◦ READ' },
  eyebrow = '01',
  accent = '年度判断',
  quote = ['今年最重要的变化，', '是增长从规模驱动转向质量驱动。'],
  body = ['全年目标基本达成，但增长结构、客户质量和交付效率开始成为更关键的变量。', '明年的经营重点需要围绕高质量增长重新排序。'],
  strong = '高质量增长',
  footerLeft = 'PREMISE -- ANNUAL BUSINESS REVIEW',
  footerRight = '◦ continue →',
}) {
  const bodyText = Array.isArray(body) ? body.join('\n') : String(body);
  const bodyParts = strong ? bodyText.split(strong) : [bodyText];

  return (
    <BlackTechSlide
      layout="BT02"
      chrome={chrome}
    >
      <div className="bt-pad">
        <div className="bt-eyebrow">{eyebrow} · <span className="bt-accent">{accent}</span></div>
        <div className="bt-quote">
          &ldquo;<Lines lines={quote} />&rdquo;
        </div>
        <div className="bt-body bt-wide">
          {bodyParts.map((part, index) => (
            <React.Fragment key={`${part}-${index}`}>
              <Lines lines={part} />
              {index < bodyParts.length - 1 ? <strong>{strong}</strong> : null}
            </React.Fragment>
          ))}
        </div>
        <BottomRule left={footerLeft} right={footerRight} />
      </div>
    </BlackTechSlide>
  );
}
