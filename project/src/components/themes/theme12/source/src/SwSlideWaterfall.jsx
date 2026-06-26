// SwSlideWaterfall.jsx — "瀑布图 / Waterfall" bridge chart page.
//
// A revenue bridge: a gross total, a run of floating +/- change bars, and a net
// total — distinct from Growth's time series, StackBars and the Funnel. Step
// count (3–5), dashed connectors and a focused change step are props-controlled
// and map 1:1 to `controls`; all visible copy/data defaults live in
// `defaultProps`. The SVG is data-driven; no global side effects.

import React from 'react';
import { swTheme } from './swTheme.js';
import { SlideRoot, Bar, Footer, Kicker, Hl, renderSwText } from './swBase.jsx';

const C = swTheme.color, F = swTheme.font, T = swTheme.type;

export const meta = { id: 'waterfall', index: 43, label: '瀑布图 / Waterfall' };

export const defaultProps = {
  accent: C.orange,
  theme: 'light',          // 'light' | 'dark'
  stepCount: 4,            // 3–5 change steps (between gross & net)
  showConnectors: true,    // dashed links between bar tops
  showValues: true,        // +/- value labels
  focus: true,             // emphasise one change step
  focusIndex: 3,           // which change step (1-based)
  // —— content ——
  barMeta: '43 — Waterfall',
  kicker: '收入桥 / The Bridge',
  base: 100,
  grossLabel: { cn: '总收入', en: 'Gross' },
  netLabel: { cn: '到手', en: 'Net' },
  deltaCaption: '对比传统发行 vs Label',
  steps: [
    { cn: '发行分销', en: 'Distro', d: -8 },
    { cn: '支付通道', en: 'Fees', d: -2 },
    { cn: '粉丝直连', en: 'Direct', d: 12 },
    { cn: '维权追回', en: 'Recovered', d: 5 },
    { cn: '数据增益', en: 'Insights', d: 3 },
  ],
  page: '43',
  total: '82',
};

export const controls = [
  { key: 'stepCount', label: '变动项数', type: 'slider', def: 4, min: 3, max: 5, step: 1,
    desc: '总收入与到手之间的增减项数量' },
  { key: 'showConnectors', label: '连接线', type: 'toggle', def: true, desc: '显示/隐藏柱顶之间的虚线' },
  { key: 'showValues', label: '数值标签', type: 'toggle', def: true, desc: '显示/隐藏每根柱的增减数值' },
  { key: 'focus', label: '高亮某项', type: 'toggle', def: true, desc: '突出某一增减项' },
  { key: 'focusIndex', label: '高亮第几项', type: 'slider', def: 3, min: 1, max: 5, step: 1,
    dependsOn: 'focus', desc: '被突出增减项的序号（1 起）' },
  { key: 'theme', label: '配色', type: 'segment', def: 'light',
    options: [{ value: 'light', label: '浅色' }, { value: 'dark', label: '深色' }], desc: '页面整体明暗配色' },
  { key: 'accent', label: '强调色', type: 'color', def: C.orange,
    options: [C.orange, C.purple, C.cyan, C.green], desc: '到手总额 / 高亮 / 页脚强调色' },
];

const VB = { w: 1280, h: 540 }, M = { t: 56, r: 24, b: 70, l: 64 };
const PW = VB.w - M.l - M.r, PH = VB.h - M.t - M.b;

export default function SwSlideWaterfall(props) {
  const p = { ...defaultProps, ...props };
  const accent = p.accent;
  const BASE = p.base;
  const n = Math.max(3, Math.min(5, p.stepCount));
  const steps = (p.steps || []).slice(0, n);
  const hi = p.focus ? Math.max(1, Math.min(n, p.focusIndex)) : 0;

  // Page / card surfaces flip with theme. The neutral gross/total bar inverts
  // ink→blush so it stays a strong neutral on the dark card; the de-emphasised
  // down bars lift to a readable grey. Accent / green keep their meaning.
  const dark = p.theme === 'dark';
  const bg = dark ? C.dark : C.blush;
  const fg = dark ? C.blush : C.ink;
  const cardBg = dark ? '#241e20' : C.paper;
  const mutedC = dark ? '#c8c0bd' : C.inkMut;
  const subC = dark ? '#c8c0bd' : '#9a8f8c';
  const labelC = dark ? C.blush : C.ink;            // total/net x-axis labels
  const stepLabelC = dark ? '#c8c0bd' : '#5a4f54';  // change x-axis labels
  const baseC = dark ? C.lineD2 : C.line2;
  const connC = dark ? 'rgba(245,225,227,.32)' : 'rgba(27,21,24,.32)';
  const totalBar = dark ? C.blush : C.dark;
  const downBar = dark ? '#9a8f8c' : C.inkMut;

  // running totals → floating bars
  const bars = [];
  let run = BASE;
  bars.push({ kind: 'total', cn: p.grossLabel.cn, en: p.grossLabel.en, from: 0, to: BASE, val: BASE });
  steps.forEach((s, i) => {
    const from = run, to = run + s.d;
    bars.push({ kind: s.d >= 0 ? 'up' : 'down', cn: s.cn, en: s.en, from, to, val: s.d, step: i + 1 });
    run = to;
  });
  bars.push({ kind: 'net', cn: p.netLabel.cn, en: p.netLabel.en, from: 0, to: run, val: run });

  const maxV = Math.max(BASE, run) * 1.12;
  const yAt = (v) => M.t + PH * (1 - v / maxV);
  const count = bars.length;
  const slot = PW / count;
  const bw = Math.min(slot * 0.6, 116);
  const xCenter = (i) => M.l + slot * (i + 0.5);

  const colorFor = (b, on) => {
    if (b.kind === 'total') return totalBar;
    if (b.kind === 'net') return accent;
    if (on) return accent;
    return b.kind === 'up' ? C.green : downBar;
  };

  return (
    <SlideRoot bg={bg} color={fg}>
      <Bar meta={p.barMeta} accent={accent} dark={dark} />

      <div style={{ flex: 1, minHeight: 0, background: cardBg, borderRadius: 38, margin: '24px 0 22px',
        padding: '36px 44px 26px', display: 'flex', flexDirection: 'column' }}>

        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <Kicker accent={accent}>{p.kicker}</Kicker>
            <h2 style={{ fontWeight: 900, fontSize: 40, letterSpacing: '-.8px', marginTop: 12, lineHeight: 1.1 }}>
              {renderSwText('每 ¥' + BASE + ' 收入，到手[[¥' + run + ']]。', { hl: { tone: 'o' } })}
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 900, fontSize: 64, letterSpacing: '-2px', color: accent, lineHeight: 1 }}>+{run - BASE}%</div>
            <div style={{ fontFamily: F.mono, fontSize: 20, letterSpacing: '.1em', textTransform: 'uppercase',
              color: mutedC, marginTop: 4 }}>{p.deltaCaption}</div>
          </div>
        </div>

        <div style={{ flex: 1, minHeight: 0, marginTop: 6 }}>
          <svg viewBox={'0 0 ' + VB.w + ' ' + VB.h} preserveAspectRatio="xMidYMid meet"
            style={{ width: '100%', height: '100%', display: 'block' }}>
            {/* baseline */}
            <line x1={M.l} y1={yAt(0)} x2={VB.w - M.r} y2={yAt(0)} stroke={baseC} strokeWidth="2" />

            {bars.map((b, i) => {
              const on = b.step === hi;
              const top = yAt(Math.max(b.from, b.to));
              const h = Math.abs(yAt(b.from) - yAt(b.to));
              const x = xCenter(i) - bw / 2;
              const fill = colorFor(b, on);
              const isTot = b.kind === 'total' || b.kind === 'net';
              return (
                <g key={i}>
                  {p.showConnectors && i < count - 1 && (
                    <line x1={xCenter(i) + bw / 2} y1={yAt(b.to)} x2={xCenter(i + 1) - bw / 2} y2={yAt(b.to)}
                      stroke={connC} strokeWidth="2" strokeDasharray="3 6" />
                  )}
                  <rect x={x} y={top} width={bw} height={Math.max(h, 2)} rx="6" fill={fill}
                    opacity={on || isTot ? 1 : 0.92} />
                  {(on || b.kind === 'net') && (
                    <rect x={x - 4} y={top - 4} width={bw + 8} height={Math.max(h, 2) + 8} rx="9"
                      fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="6 6" opacity={b.kind === 'net' ? 0 : 1} />
                  )}
                  {p.showValues && (
                    <text x={xCenter(i)} y={top - 14} textAnchor="middle" fontFamily={F.mono} fontWeight="700"
                      fontSize={isTot ? 30 : 25} fill={isTot ? fill : (b.kind === 'up' ? C.green : downBar)}>
                      {isTot ? '¥' + b.val : (b.val > 0 ? '+' + b.val : b.val)}
                    </text>
                  )}
                  <text x={xCenter(i)} y={VB.h - 38} textAnchor="middle" fontWeight="700" fontSize="24"
                    fill={isTot ? labelC : stepLabelC}>{b.cn}</text>
                  <text x={xCenter(i)} y={VB.h - 12} textAnchor="middle" fontFamily={F.mono} fontSize="18"
                    letterSpacing="1" fill={subC}>{b.en.toUpperCase()}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <Footer page={p.page} total={p.total} accent={accent} dark={dark} />
    </SlideRoot>
  );
}
