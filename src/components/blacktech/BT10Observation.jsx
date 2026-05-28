import React from 'react';
import { BlackTechSlide, Lines, ShaderVisual } from './primitives.jsx';

export function BT10Observation({
  chrome = { left: '09 · OBSERVATION', right: 'PAGE 10/12', bottomLeft: 'RIGHT VISUAL', bottomRight: '◦ QUIET' },
  visual = 'dots',
  titleTop = '真正拉开差距的',
  accent = '是执行质量',
  titleSuffix = '。',
  body = ['收入结果只是表层，', '稳定的复购、交付和组织节奏才是明年增长的基础。'],
  foot = 'OBSERVATION · ANNUAL REVIEW',
}) {
  return (
    <BlackTechSlide
      layout="BT10"
      chrome={chrome}
      className="bt-observation-slide"
    >
      <div className="bt-dot-stage"><ShaderVisual variant={visual} /></div>
      <div className="bt-observation-copy">
        <div className="bt-title">{titleTop}<br /><span className="bt-accent">{accent}</span>{titleSuffix}</div>
        <div className="bt-body"><Lines lines={body} /></div>
      </div>
      <div className="bt-observation-foot">{foot}</div>
    </BlackTechSlide>
  );
}
