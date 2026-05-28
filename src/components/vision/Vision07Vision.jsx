import React from 'react';
import { VisionSlide } from './primitives.jsx';

const points = [
  ['WHO', '讲中文的、想用好 AI 的所有人。不论是工程师还是 HR。'],
  ['WHAT', '打开就能上手的实操内容 - 有温度、有节奏、有脾气。'],
  ['HOW', '一个懂技术的说书人，守着这间小灶，天天开火。'],
];

export function Vision07Vision() {
  return (
    <VisionSlide layout="VISION-07" inverted className="vision-north">
      <div className="vision-dark-labels"><span>华语 AI 内容</span><span>THE DEFAULT STOP</span><span>第一站</span></div>
      <div className="vision-north-main">
        <div className="kicker">[ VISION · 三年后要在的位置 ]</div>
        <h1>[ 成为华语 AI 内容的<br /><span>第一站。</span> ]</h1>
        <div className="vision-north-grid">
          {points.map(([key, value]) => (
            <div key={key}><strong>// {key}</strong><p>{value}</p></div>
          ))}
        </div>
      </div>
    </VisionSlide>
  );
}
