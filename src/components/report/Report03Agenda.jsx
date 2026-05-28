import React from 'react';
import { Footer, ReportSlide, TopBar } from './primitives.jsx';

const rows = [
  ['Q1 — 品牌重启', '/ 01'],
  ['Q2 — 需求引擎', '/ 02'],
  ['Q3 — 内容与社区', '/ 03'],
  ['Q4 — 留存与扩张', '/ 04'],
];

export function Report03Agenda() {
  return (
    <ReportSlide layout="RP03">
      <div className="rp-page rp-pad">
        <TopBar eyebrow="议程" />
        <h1 className="rp-title">四个季度，<br />四个重点。</h1>
        <div className="rp-toc">
          {rows.map(([label, page]) => (
            <div className="rp-toc-row" key={label}><span>{label}</span><span>{page}</span></div>
          ))}
        </div>
        <Footer left="02 · 议程" right="市场营销 · 2025 年终" />
      </div>
    </ReportSlide>
  );
}

