import React from 'react';
import { BracketTitle, Corner, VisionSlide } from './primitives.jsx';

const cards = [
  ['01', '工具测评', 'TOOL TEARDOWNS', '不是 "AI 应用"。是真打开设置面板，把参数调到骨头里。', ['CLAUDE', 'CURSOR', 'GEMINI']],
  ['02', '实战教程', 'HANDS-ON RECIPES', '跟着做，三十分钟之内有产出。失败案例也讲。', ['AGENT', 'RAG', 'WORKFLOW']],
  ['03', '工具链搭建', 'STACK BUILDING', '从 skill 到 MCP 到 pipeline，把点连成线。', ['MCP', 'SKILLS', 'CHAIN']],
];

export function Vision04Menu() {
  return (
    <VisionSlide layout="VISION-04" className="vision-menu">
      <Corner left="// 03 · THE MENU" right="POSITIONING" />
      <div className="vision-section-head">
        <BracketTitle>THE MENU</BracketTitle>
        <p>WHAT WE COOK · 内容矩阵</p>
      </div>
      <div className="vision-menu-grid">
        {cards.map(([num, title, en, body, tags], index) => (
          <div className={`vision-menu-card ${index === 1 ? 'invert' : ''}`} key={num}>
            <span>// {num}</span>
            <h2>{title}</h2>
            <small>{en}</small>
            <p>{body}</p>
            <div>{tags.map(tag => <b key={tag}>{tag}</b>)}</div>
          </div>
        ))}
      </div>
    </VisionSlide>
  );
}
