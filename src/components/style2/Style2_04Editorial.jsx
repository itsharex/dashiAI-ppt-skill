import React from 'react';
import { Frame, Style2Slide } from './primitives.jsx';

const cols = [
  ['01', '俯瞰，但不再上帝', '無人機鏡頭從奇觀工具退為敘事配料。導演們開始用它代替空鏡，讓城市從「景觀」變回「背景」。', '俯瞰 / OVERHEAD'],
  ['02', '第一人稱，被身體接管', 'POV 不再屬於 GoPro 與電玩，而屬於演員的呼吸。當鏡頭跟著肩膀起伏，觀眾被迫承擔身體的重量。', '主觀 / POV'],
  ['03', '側面，由演算法挑選', '多機位直播讓觀眾自選視角，演算法則默默替沉默的觀眾選好下一個畫面。剪接從後期搬到了現場。', '側拍 / SIDE'],
];

export function Style2_04Editorial() {
  return (
    <Style2Slide layout="ST2-04" tone="light" className="st2-editorial">
      <Frame>
        <div className="st2-ed-top">
          <div><div className="st2-kicker">04 — 主題報導　FEATURE</div><h1>三種<span>取景視角</span>，<br />正在重寫鏡頭語言。</h1></div>
          <div className="st2-page">P. 014 — 015<br />February · 2026</div>
        </div>
        <div className="st2-lede"><p><span>過</span>去十年間，鏡頭的位置一直由攝影機決定；如今，它由演算法、無人機與觀眾的指尖共同決定。我們挑出三個正在改變影像語法的取景視角，試圖回答一個問題。</p><p>這不是一份完整的清單，而是一份可以爭辯的觀察。三段短文之後，我們把判斷留給讀者。</p></div>
        <div className="st2-ed-cols">
          {cols.map(([num, title, body, pin]) => <div className="st2-ed-col" key={num}><div className="num">{num}<small>VIEW</small></div><h3>{title}</h3><p>{body}</p><div className="pin">— {pin}</div></div>)}
        </div>
      </Frame>
    </Style2Slide>
  );
}
