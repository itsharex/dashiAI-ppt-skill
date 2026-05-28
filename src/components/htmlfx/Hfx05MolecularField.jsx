import React from 'react';
import { HtmlFxSlide } from './primitives.jsx';

const molecules = ['氯化钠', '石墨', '水', '咖啡因', '葡萄糖', '苯'];
const atoms = [
  ['a1', 'Na', 42, 45, 'large'],
  ['a2', 'Cl', 58, 52, 'large green'],
  ['a3', 'O', 50, 34, 'blue'],
  ['a4', 'H', 64, 38, 'small'],
  ['a5', 'C', 37, 61, 'dark'],
  ['a6', 'N', 56, 67, 'blue'],
];

export function Hfx05MolecularField() {
  return (
    <HtmlFxSlide layout="HFX05" className="hfx-mol">
      <div className="hfx-mol-grid">
        <div className="hfx-mol-left">
          <span className="hfx-mol-grain" />
          <div>
            <div className="hfx-mol-kicker"><span />第 05 章 · 化学<i /></div>
            <h2>探索<br /><span>分子结构</span><br /><em>三维可视化</em></h2>
            <p>
              交互式 3D 球棍模型，直观呈现分子空间构型与化学键连接。
              选择分子、拖拽旋转、滚轮缩放，感受微观世界的几何秩序。
            </p>
          </div>
          <div>
            <div className="hfx-molecule-list">
              {molecules.map((name, index) => (
                <button className={index === 0 ? 'active' : ''} type="button" key={name}>{name}</button>
              ))}
            </div>
            <div className="hfx-mol-footer">
              <div><span className="sw white" />H <span className="sw blue" />O <span className="sw green" />Cl</div>
              <div>页 · <em>05</em> / 05</div>
            </div>
          </div>
        </div>
        <div className="hfx-mol-right">
          <div className="hfx-mol-head"><span><i />3D · 实时</span><b>氯化钠</b></div>
          <div className="hfx-mol-stage">
            <svg className="hfx-mol-bonds" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M42 45 L58 52 M50 34 L64 38 M37 61 L56 67 M42 45 L50 34 M58 52 L56 67" />
            </svg>
            {atoms.map(([key, label, x, y, tone]) => (
              <span className={`hfx-atom ${tone}`} style={{ left: `${x}%`, top: `${y}%` }} key={key}>{label}</span>
            ))}
          </div>
          <div className="hfx-mol-note">拖拽旋转 · 滚轮缩放</div>
        </div>
      </div>
    </HtmlFxSlide>
  );
}
