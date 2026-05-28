import React from 'react';
import { BlackTechSlide, BottomRule } from './primitives.jsx';

const defaultStages = [
  ['STAGE 01', '年度目标', '拆解收入、利润与客户指标。\n形成季度经营抓手。'],
  ['STAGE 02', '过程推进', '跟踪关键项目和资源投入。\n保证动作落到业务线。'],
  ['STAGE 03', '结果复盘', '对比目标、实际与偏差。\n定位结构性问题。'],
  ['STAGE 04', '明年承接', '沉淀可复用经验。\n转化为下一年重点。'],
];

export function BT04Pipeline({
  chrome = { left: '03 · PROCESS', right: 'PAGE 04/12', bottomLeft: 'FLOW TEMPLATE', bottomRight: '◦ DIAGRAM' },
  eyebrow = '03',
  accent = '复盘路径',
  title = '从年度目标到明年动作。',
  schema = 'SCHEMA · ANNUAL REVIEW / PROCESS',
  stages = defaultStages,
  footerLeft = 'PROCESS -- TARGET / ACTION / REVIEW / NEXT YEAR',
  footerRight = 'annual-review/process ·········· section 03',
}) {
  return (
    <BlackTechSlide
      layout="BT04"
      chrome={chrome}
    >
      <div className="bt-pad">
        <div className="bt-head-row">
          <div>
            <div className="bt-eyebrow">{eyebrow} · <span className="bt-accent">{accent}</span></div>
            <div className="bt-title">{title}</div>
          </div>
          <div className="bt-tiny">{schema}</div>
        </div>
        <div className="bt-pipeline">
          {stages.map(([label, title, body], index) => (
            <div className="bt-stage" key={label}>
              <div className="bt-stage-head"><span className={index === 0 ? 'filled' : ''} />{label}</div>
              <div className="bt-stage-title">{title}</div>
              <div className="bt-stage-body">{body}</div>
            </div>
          ))}
        </div>
        <BottomRule left={footerLeft} right={footerRight} />
      </div>
    </BlackTechSlide>
  );
}
