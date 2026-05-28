import React from 'react';
import { BlackTechSlide, Lines, ShaderVisual } from './primitives.jsx';

export function BT12Closing({
  chrome = { left: 'END · CLOSING', right: 'PAGE 12/12', bottomLeft: 'NEXT STEP', bottomRight: '◦ THANK YOU' },
  visual = 'scanlines',
  eyebrow = '— END —',
  titleTop = '下一年',
  titleAlt = '继续',
  titleMiddle = '高质量',
  titleBottom = '增长',
  body = ['结尾页可放明年目标、责任人和关键里程碑，', '例如 FY2027 / PLAN。'],
  inline = 'FY2027 / PLAN',
  footerLeft = 'ANNUAL REVIEW · FY2026 · 2026.12',
  footerRight = 'Q&A → STRATEGY / BUSINESS OWNER',
}) {
  const bodyText = Array.isArray(body) ? body.join('\n') : String(body);
  const bodyParts = inline ? bodyText.split(inline) : [bodyText];

  return (
    <BlackTechSlide
      layout="BT12"
      chrome={chrome}
      className="bt-closing-slide"
    >
      <ShaderVisual variant={visual} />
      <div className="bt-closing-copy">
        <div className="bt-eyebrow">{eyebrow}</div>
        <div className="bt-display">
          {titleTop}<br /><span className="bt-title-alt">{titleAlt}</span>.<br />
          {titleMiddle}<br />{titleBottom}<span className="dim">.</span>
        </div>
        <div className="bt-body">
          {bodyParts.map((part, index) => (
            <React.Fragment key={`${part}-${index}`}>
              <Lines lines={part} />
              {index < bodyParts.length - 1 ? <span className="bt-small inline">{inline}</span> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="bt-closing-foot">
        <div>{footerLeft}</div>
        <div>{footerRight}</div>
      </div>
    </BlackTechSlide>
  );
}
