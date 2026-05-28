import React from 'react';
import { BracketTitle, Corner, Sticker, VisionSlide } from './primitives.jsx';

const rows = [
  ['// 01', '自己写 skill、调配置、搭系统', 'BUILDS. DOES NOT JUST POST.'],
  ['// 02', 'Agent 工作流 · 开发者工具链', 'DEEP IN THE STACK.'],
  ['// 03', '让普通人也能用好 AI 工具', 'TRANSLATES NERD -> HUMAN.'],
  ['// 04', '朋友聊天式 · 有节奏 · 会自嘲', 'NO GURU ENERGY.'],
];

export function Vision03Who() {
  return (
    <VisionSlide layout="VISION-03" className="vision-who">
      <Corner left="// 02 · WHO IS DASHI" right="PROFILE.0x01" />
      <div className="vision-two-col">
        <div>
          <BracketTitle>WHO IS<br />DASHI?</BracketTitle>
          <p className="vision-lead">一个懂技术的说书人。<br />不是教你 - 是聊给你听。</p>
          <div className="vision-tag-row">
            <Sticker>TECH BACKGROUND</Sticker><Sticker>4 YRS IN AI</Sticker><Sticker invert>HANDS-ON</Sticker><Sticker>AGENT BUILDER</Sticker><Sticker>PROMPT OPS</Sticker>
          </div>
        </div>
        <div className="vision-profile-list">
          {rows.map(([num, title, body]) => (
            <div className="vision-profile-card" key={num}>
              <strong>{num}</strong>
              <div><h3>{title}</h3><p>{body}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="vision-footer"><span>&gt; SIGNATURE: 我是大师，给你单独开小灶。</span><span>03 / 09</span></div>
    </VisionSlide>
  );
}
