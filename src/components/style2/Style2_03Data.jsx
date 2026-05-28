import React from 'react';
import { CornerMeta, Frame, Style2Slide } from './primitives.jsx';

const rows = [
  ['短影音平台', 'SHORT-FORM', '84%', '8.6h', '+18%', 'alt'],
  ['串流長片', 'STREAMING', '66%', '6.7h', '+09%', ''],
  ['直播', 'LIVE', '38%', '3.9h', '+22%', ''],
  ['影院觀影', 'CINEMA', '24%', '2.4h', '−14%', 'dim down'],
  ['電視 / 其他', 'TV / OTHER', '18%', '1.8h', '−07%', 'dim down'],
];

export function Style2_03Data() {
  return (
    <Style2Slide layout="ST2-03" className="st2-data">
      <CornerMeta pos="tl">03 — 數據　DATA</CornerMeta>
      <CornerMeta pos="tr">FIG. 03.1</CornerMeta>
      <Frame>
        <div className="st2-data-head">
          <h2>影像消費的<span>五種去處</span></h2>
          <div>樣本：14,820 名受訪者<br />區域：兩岸三地 + 日韓<br />採集：2025.06 — 2025.12</div>
        </div>
        <div className="st2-data-sub">每人每週平均影像消費時長 23.4 小時，較 2024 年增長 11.6%。下圖為各場景時長占比。</div>
        <div className="st2-chart">
          {rows.map(([label, en, width, num, delta, tone]) => (
            <React.Fragment key={label}>
              <div className="label">{label}<span>{en}</span></div>
              <div className="track"><i className={tone.includes('alt') ? 'alt' : tone.includes('dim') ? 'dim' : ''} style={{ width }} /></div>
              <div className="num">{num}<span className={tone.includes('down') ? 'down' : ''}>{delta}</span></div>
            </React.Fragment>
          ))}
        </div>
        <div className="st2-data-foot"><div>短影音與直播合計占去 <b>53%</b> 注意力——影院首次跌破日均 0.4 小时。</div><span>來源：幕間編輯部　／　INTERMISSION DATA LAB</span></div>
      </Frame>
    </Style2Slide>
  );
}
