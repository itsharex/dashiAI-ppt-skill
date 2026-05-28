import React from 'react';
import { CornerMeta, Style2Slide } from './primitives.jsx';

export function Style2_01Cover() {
  return (
    <Style2Slide layout="ST2-01" className="st2-cover">
      <div className="st2-brushwash" /><div className="st2-grain" />
      <CornerMeta pos="tl">幕間 / INTERMISSION</CornerMeta>
      <CornerMeta pos="tr">VOL. 06 — 2026</CornerMeta>
      <div className="st2-cover-num">06</div>
      <div className="st2-cover-title"><span>幕間</span><b>INTERMISSION · 影像年鑑</b></div>
      <div className="st2-cover-foot"><span>2026 ANNUAL REPORT</span>二〇二六　年度影像觀察<br />編號 第六輯　／　二月發行</div>
      <CornerMeta pos="bl">編輯部・台北 — 京都 — 香港</CornerMeta>
      <CornerMeta pos="br">非賣品 · NOT FOR SALE</CornerMeta>
    </Style2Slide>
  );
}
