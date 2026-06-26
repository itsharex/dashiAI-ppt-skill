// SwSlideDonut.jsx — "收益构成 / Composition" radial chart page.
//
// A single donut (or pie) breaking royalties down by source, paired with a
// ranked legend. Distinct from Growth (time-series) and WhyNow (per-stat mini
// donuts). Segment count (3–5), donut/pie, centre total, a focusable wedge and
// accent are props-controlled and map 1:1 to `controls`; all visible copy/data
// defaults live in `defaultProps`. The SVG is data-driven
// from these defaults; no global side effects, no host dependency.

import React from 'react';
import { swTheme, swSeriesColors } from './swTheme.js';
import { SlideRoot, Bar, Footer, Kicker, Hl, Shape, renderSwText } from './swBase.jsx';

const C = swTheme.color, F = swTheme.font;

export const meta = { id: 'donut', index: 40, label: '收益构成 / Composition' };

export const defaultProps = {
  accent: C.orange,
  theme: 'light',          // 'light' | 'dark'
  segmentCount: 5,         // 3–5 wedges
  chartType: 'donut',      // 'donut' | 'pie'
  showCenter: true,        // centre total label (donut only)
  focus: false,
  focusIndex: 1,
  // —— content ——
  barMeta: '40 — Composition',
  kicker: '收益构成 / Composition',
  title: '版税之外，收入更[[多元]]。',
  ghost: '31',
  centerValue: '100',
  centerLabel: 'Total Income',
  sources: [
    { cn: '流媒体播放', en: 'Streaming', v: 42 },
    { cn: '专属会员', en: 'Memberships', v: 24 },
    { cn: '现场与周边', en: 'Live & Merch', v: 16 },
    { cn: '授权与同步', en: 'Sync / License', v: 12 },
    { cn: '粉丝打赏', en: 'Tips', v: 6 },
  ],
  page: '40',
  total: '82',
};

export const controls = [
  { key: 'segmentCount', label: '分段数量', type: 'slider', def: 5, min: 1, max: 5, step: 1,
    desc: '收益构成的分段数量' },
  { key: 'chartType', label: '图表类型', type: 'segment', def: 'donut',
    options: [{ value: 'donut', label: '环形' }, { value: 'pie', label: '扇形' }], desc: '环形或实心扇形' },
  { key: 'showCenter', label: '中心总计', type: 'toggle', def: true,
    dependsOn: 'chartType', desc: '环形中心显示总计（仅环形）' },
  { key: 'focus', label: '重点强调', type: 'toggle', def: false, desc: '放大并高亮某一分段' },
  { key: 'focusIndex', label: '强调第几段', type: 'slider', def: 1, min: 1, max: 5, step: 1,
    dependsOn: 'focus', desc: '被强调分段的序号（1 起）' },
  { key: 'theme', label: '配色', type: 'segment', def: 'light',
    options: [{ value: 'light', label: '浅色' }, { value: 'dark', label: '深色' }], desc: '页面整体明暗配色' },
  { key: 'accent', label: '强调色', type: 'color', def: C.orange,
    options: [C.orange, C.purple, C.cyan, C.green], desc: '主分段 / 导语 / 页脚强调色' },
];

// SVG arc path for a wedge (cx,cy, r, start/end angle in deg, 0 = top, CW).
function arc(cx, cy, r, a0, a1) {
  const rad = (a) => (a - 90) * Math.PI / 180;
  const x0 = cx + r * Math.cos(rad(a0)), y0 = cy + r * Math.sin(rad(a0));
  const x1 = cx + r * Math.cos(rad(a1)), y1 = cy + r * Math.sin(rad(a1));
  const large = (a1 - a0) > 180 ? 1 : 0;
  return { x0, y0, x1, y1, large };
}

export default function SwSlideDonut(props) {
  const p = { ...defaultProps, ...props };
  const accent = p.accent;
  const dark = p.theme === 'dark';
  const count = Math.max(1, Math.min(5, p.segmentCount));
  const isDonut = p.chartType === 'donut';

  // Page surface. The feature panel is dark in BOTH modes; in dark mode it
  // lifts to a slightly lighter card (#241e20) so it reads as a raised panel
  // on the C.dark page instead of merging into it.
  const pageBg = dark ? C.dark : C.blush;
  const pageFg = dark ? C.blush : C.ink;
  const panelBg = dark ? '#241e20' : C.dark;

  const raw = (p.sources || []).slice(0, count);
  const sum = raw.reduce((a, b) => a + b.v, 0);
  const segs = raw.map((s, i) => ({ ...s, pct: Math.round((s.v / sum) * 100), color: i === 0 ? accent : swSeriesColors[(i + 1) % swSeriesColors.length] }));
  // fix rounding so it reads 100
  const drift = 100 - segs.reduce((a, b) => a + b.pct, 0);
  if (segs.length) segs[0].pct += drift;

  const cx = 200, cy = 200, R = 170, rInner = isDonut ? 100 : 0;
  let acc = 0;
  const wedges = segs.map((s, i) => {
    const a0 = (acc / 100) * 360;
    acc += s.pct;
    const a1 = (acc / 100) * 360;
    const on = p.focus && (i + 1) === p.focusIndex;
    const dim = p.focus && !on;
    const rOut = on ? R + 14 : R;
    const opacity = dim ? 0.32 : 1;
    // A wedge spanning the full circle (notably count === 1) collapses to a
    // degenerate 2-point arc — start point == end point, so the path draws
    // nothing. Render a complete ring/disc as a <circle> instead.
    if (count === 1 || (a1 - a0) >= 359.999) {
      return isDonut
        ? { full: true, r: (rOut + rInner) / 2, strokeWidth: rOut - rInner, color: s.color, opacity, on }
        : { full: true, r: rOut, strokeWidth: 0, color: s.color, opacity, on };
    }
    const o = arc(cx, cy, rOut, a0, a1);
    let d;
    if (isDonut) {
      const inn = arc(cx, cy, rInner, a0, a1);
      d = `M ${o.x0} ${o.y0} A ${rOut} ${rOut} 0 ${o.large} 1 ${o.x1} ${o.y1} L ${inn.x1} ${inn.y1} A ${rInner} ${rInner} 0 ${o.large} 0 ${inn.x0} ${inn.y0} Z`;
    } else {
      d = `M ${cx} ${cy} L ${o.x0} ${o.y0} A ${rOut} ${rOut} 0 ${o.large} 1 ${o.x1} ${o.y1} Z`;
    }
    return { d, color: s.color, opacity, on };
  });

  return (
    <SlideRoot bg={pageBg} color={pageFg}>
      <Bar meta={p.barMeta} accent={accent} dark={dark} />

      <div style={{ flex: 1, minHeight: 0, background: panelBg, color: C.blush, borderRadius: 38, margin: '24px 0 22px',
        padding: '44px 54px', display: 'grid', gridTemplateColumns: '440px 1fr', gap: 56, alignItems: 'center',
        position: 'relative', overflow: 'hidden' }}>

        <div aria-hidden="true" style={{ position: 'absolute', top: -56, right: 40, fontFamily: F.mono, fontWeight: 700,
          fontSize: 240, lineHeight: 0.8, color: 'rgba(245,225,227,.05)', pointerEvents: 'none' }}>{p.ghost}</div>
        <Shape kind="pentagon" size={64} color={C.magenta} style={{ bottom: 44, right: 60, zIndex: 1, opacity: .9 }} />

        {/* chart */}
        <div style={{ position: 'relative', minWidth: 0, zIndex: 2 }}>
          <svg viewBox="0 0 400 400" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
            {wedges.map((w, i) => (
              w.full ? (
                <circle key={i} cx={cx} cy={cy} r={w.r} opacity={w.opacity}
                  fill={isDonut ? 'none' : w.color}
                  stroke={isDonut ? w.color : 'none'}
                  strokeWidth={isDonut ? w.strokeWidth : 0} />
              ) : (
                <path key={i} d={w.d} fill={w.color} opacity={w.opacity}
                  stroke={panelBg} strokeWidth="3" strokeLinejoin="round" />
              )
            ))}
          </svg>
          {isDonut && p.showCenter && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ fontWeight: 900, fontSize: 64, letterSpacing: '-2px', color: C.blush, lineHeight: 1 }}>{p.centerValue}<span style={{ fontSize: 34 }}>%</span></div>
              <div style={{ fontFamily: F.mono, fontSize: 20, letterSpacing: '.12em', textTransform: 'uppercase',
                color: '#9a8f8c', marginTop: 6 }}>{p.centerLabel}</div>
            </div>
          )}
        </div>

        {/* legend */}
        <div style={{ minWidth: 0, position: 'relative', zIndex: 2 }}>
          <Kicker accent={accent}>{p.kicker}</Kicker>
          <h2 style={{ fontWeight: 900, fontSize: 42, letterSpacing: '-1px', marginTop: 14, marginBottom: 20, color: C.blush }}>
            {renderSwText(p.title, { hl: { tone: 'o' } })}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {segs.map((s, i) => {
              const on = p.focus && (i + 1) === p.focusIndex;
              return (
                <div key={s.en} style={{ display: 'grid', gridTemplateColumns: '20px 1fr auto', alignItems: 'center',
                  gap: 16, padding: '14px 0', borderBottom: i < segs.length - 1 ? '1px solid ' + C.lineD : 'none',
                  opacity: p.focus && !on ? 0.45 : 1 }}>
                  <span style={{ width: 18, height: 18, borderRadius: 5, background: s.color }} />
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 27, letterSpacing: '-.3px', color: C.blush }}>{s.cn}</span>
                    <span style={{ fontFamily: F.mono, fontSize: 20, letterSpacing: '.1em', textTransform: 'uppercase',
                      color: '#9a8f8c', marginLeft: 12 }}>{s.en}</span>
                  </div>
                  <span style={{ fontWeight: 900, fontSize: 34, letterSpacing: '-1px',
                    color: on ? accent : C.blush, fontVariantNumeric: 'tabular-nums' }}>{s.pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer page={p.page} total={p.total} accent={accent} dark={dark} />
    </SlideRoot>
  );
}
