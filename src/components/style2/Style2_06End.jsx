import React from 'react';
import { CornerMeta, Frame, Style2Slide } from './primitives.jsx';

const credits = [
  ['主編　EDITOR', '陳維安'],
  ['視覺　ART DIRECTION', '幕間設計組'],
  ['數據　DATA', 'INTERMISSION DATA LAB'],
  ['發行　PUBLISHER', '幕間出版　TAIPEI'],
  ['下一輯　NEXT', 'VOL. 07 / 2027.02'],
];

export function Style2_06End() {
  return (
    <Style2Slide layout="ST2-06" className="st2-end">
      <div className="st2-wash" />
      <CornerMeta pos="tl">06 — 謝幕　END</CornerMeta>
      <CornerMeta pos="tr">— FIN —</CornerMeta>
      <Frame>
        <div className="st2-kicker end">— THE END —</div>
        <div className="st2-end-mark">謝<span>幕</span></div>
        <div className="st2-end-rule" />
        <div className="st2-end-tagline">影像散場之後，<br />我們在<em>幕間</em>相見——下一輯，二〇二七年二月。</div>
      </Frame>
      <dl className="st2-credits">{credits.map(([dt, dd]) => <React.Fragment key={dt}><dt>{dt}</dt><dd>{dd}</dd></React.Fragment>)}</dl>
      <div className="st2-end-foot">INTERMISSION&nbsp;&nbsp;·&nbsp;&nbsp;<b>VOL. 06</b>&nbsp;&nbsp;·&nbsp;&nbsp;2026 ANNUAL REPORT&nbsp;&nbsp;·&nbsp;&nbsp;非賣品</div>
    </Style2Slide>
  );
}
