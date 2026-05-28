import React from 'react';
import { HtmlFxSlide } from './primitives.jsx';

export function Hfx02OrbitRunner() {
  return (
    <HtmlFxSlide layout="HFX02" className="hfx-game">
      <div className="hfx-game-top">
        <div><span className="hfx-game-glyph" />Nullgrav · 街机实验室</div>
        <div><span>章节 <b>02</b></span><span>案例 · 001</span><span>版本 <b>v0.4.2</b></span></div>
      </div>
      <div className="hfx-game-grid">
        <div className="hfx-game-copy">
          <div>
            <div className="hfx-game-kicker"><span />现在可玩 · 即刻体验<i /></div>
            <h2>
              <span>轨道<em>跑者。</em></span>
              <span className="accent">没有重力，</span>
              <span>只有手感。</span>
            </h2>
            <p>
              一个双按键微型街机游戏，核心是<b>始终留在曲线上</b>。
              你不用跳跃、射击或收集道具，而是<b>操控彗星穿过色彩</b>，
              让宇宙记录分数。
            </p>
          </div>
          <div>
            <div className="hfx-game-stats">
              <div><strong>2</strong><small>按键总数</small></div>
              <div><strong>60</strong><small>fps / 手机</small></div>
              <div><strong>90</strong><small>秒平均一局</small></div>
            </div>
            <div className="hfx-game-action">
              <button type="button">自由探索 <span>→</span></button>
              <div>点击 / 轻触画布<br />开始交互 · 悬停预热</div>
            </div>
          </div>
        </div>
        <div className="hfx-game-visual">
          <div className="hfx-rive-card">
            <span className="hfx-orbit o1" />
            <span className="hfx-orbit o2" />
            <span className="hfx-orbit o3" />
            <span className="hfx-comet" />
            <span className="hfx-planet p1" />
            <span className="hfx-planet p2" />
          </div>
          <div className="hfx-game-meta">
            <div><span>街机</span><span>氛围</span><span>单局</span></div>
            <div>文件 · cosmic-game.riv · 13 MB</div>
          </div>
        </div>
      </div>
      <div className="hfx-game-bottom">
        <div>分享：<b>手感优先</b>的交互设计</div>
        <div>页 · <b>02</b> / 05</div>
      </div>
    </HtmlFxSlide>
  );
}
