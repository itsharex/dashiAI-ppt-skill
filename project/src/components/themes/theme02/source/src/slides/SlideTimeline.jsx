/**
 * SlideTimeline.jsx — Slide 05 · 时间轴 / 资本节奏关键里程碑.
 * Independent, prop-driven. Renders its own theme styles.
 *
 * ── Props (see slideTimelineDefaults) ───────────────────────────────────────
 *   kicker, title, titleEm          strings
 *   items        Array<{date,tag,title,desc}>  milestone dataset (text)
 *   itemCount    number   how many of `items` to show
 *   orientation  'horizontal' | 'vertical'   axis direction
 *   focusEnabled boolean  glow-emphasise one milestone
 *   focusIndex   number   0-based milestone to emphasise (clamped)
 *   showConnector boolean show/hide the connecting axis line
 *   showMeta     boolean  show/hide the description line under each title
 */
import React from 'react';
import { ThemeStyle, THEME_CLASS, cx } from '../gxnTheme.js';
import { SlideHeader } from '../gxnPrimitives.jsx';

const MAX_TIMELINE_ITEMS = 6;
const MAX_TIMELINE_FOCUS_INDEX = 5;
const TWO_ROW_TIMELINE_THRESHOLD = 7;
const MAX_VERTICAL_TIMELINE_COLUMN_ITEMS = 5;

export const slideTimelineDefaults = {
  kicker: 'TIMELINE · 资本节奏',
  title: '2024 关键融资里程碑 ',
  titleEm: '前高后稳',
  items: [
    { date: '2024 · Q1', tag: '市场回暖', title: '单季 162 亿美元', desc: '18 笔大额事件，情绪自年初快速回暖。' },
    { date: '2024 · 05', tag: 'Anthropic Series G', title: '融资 280 亿 · 估值 600 亿', desc: '安全对齐路线获企业信任，开启反超序章。' },
    { date: '2024 · 08', tag: '集中关账', title: '单月峰值 118 亿', desc: '多家头部公司同期完成大额轮次。' },
    { date: '2024 · 11', tag: 'xAI / Anthropic', title: '估值登顶 9650 亿', desc: 'xAI 融资 50 亿，Anthropic 扩轮 190 亿。' },
    { date: '2024 · Q4', tag: '理性回落', title: '单季 206 亿 仍处高位', desc: '从狂热转向分化，资本回归兑现逻辑。' },
    { date: '2025 · Q1', tag: '算力扩容', title: 'GPU 云锁定长单', desc: '模型厂商提前预定训练资源，基础设施融资继续升温。' },
    { date: '2025 · 05', tag: '应用层爆发', title: 'AI 搜索与办公加速', desc: '资本从底座外溢到高频场景，垂直应用估值抬升。' },
    { date: '2025 · Q3', tag: '并购整合', title: '工具链进入平台化', desc: '数据、评测与开发工具被大平台吸收，赛道集中度提高。' },
    { date: '2026 · Q1', tag: '二级预热', title: '核心资产进入窗口', desc: '一级市场定价开始对接上市叙事，退出路径更清晰。' },
    { date: '2026 · 06', tag: 'IPO 在即', title: 'Anthropic 递交上市申请', desc: '一级市场盛宴向二级市场传导。' },
  ],
  itemCount: 5,
  orientation: 'horizontal',
  focusEnabled: true,
  focusIndex: 3,
  showConnector: true,
  showMeta: true,
};

export const slideTimelineControls = [
  { key: 'itemCount', type: 'number', label: '节点数量', default: 5, min: 3, max: MAX_TIMELINE_ITEMS, step: 1,
    describe: '时间轴节点数量' },
  { key: 'orientation', type: 'enum', label: '轴向', default: 'horizontal',
    options: [{ value: 'horizontal', label: '横向' }, { value: 'vertical', label: '纵向' }],
    describe: '时间轴排布方向' },
  { key: 'focusEnabled', type: 'toggle', label: '重点强调', default: true,
    describe: '是否高亮某一节点' },
  { key: 'focusIndex', type: 'number', label: '强调项', default: 3, min: 0, step: 1,
    oneBased: true, max: MAX_TIMELINE_FOCUS_INDEX, maxFrom: (p) => Math.max(0, Math.min(MAX_TIMELINE_FOCUS_INDEX, (p.itemCount || 1) - 1)),
    visibleWhen: (p) => p.focusEnabled, describe: '被强调节点的序号' },
  { key: 'showConnector', type: 'toggle', label: '连接轴线', default: true,
    describe: '显示/隐藏贯穿节点的轴线' },
  { key: 'showMeta', type: 'toggle', label: '描述文案', default: true,
    describe: '显示/隐藏节点的补充描述' },
];

function Dot({ focus, compact = false }) {
  return (
    <span data-timeline-dot="true" data-timeline-focus={focus ? 'true' : undefined} style={{
      width: compact ? (focus ? 24 : 14) : (focus ? 30 : 18),
      height: compact ? (focus ? 24 : 14) : (focus ? 30 : 18),
      borderRadius: '50%', flex: '0 0 auto',
      background: focus ? 'radial-gradient(circle at 35% 30%, var(--gxn-accent-2), var(--gxn-accent))' : 'var(--gxn-bg)',
      border: `3px solid ${focus ? 'transparent' : 'var(--gxn-accent)'}`,
      boxShadow: focus ? '0 0 34px -2px rgba(var(--gxn-glow),0.9)' : '0 0 16px -2px rgba(var(--gxn-glow),0.55)',
      transition: 'all .3s ease',
    }} />
  );
}

export function SlideTimeline(props) {
  const p = { ...slideTimelineDefaults, ...props };
  const count = Math.max(2, Math.min(MAX_TIMELINE_ITEMS, p.items.length, p.itemCount));
  const items = p.items.slice(0, count);
  const fIdx = p.focusEnabled ? Math.max(0, Math.min(MAX_TIMELINE_FOCUS_INDEX, count - 1, p.focusIndex)) : -1;
  const horizontal = p.orientation === 'horizontal';
  const twoRowHorizontal = horizontal && count > TWO_ROW_TIMELINE_THRESHOLD;
  const twoColumnVertical = !horizontal && count > MAX_VERTICAL_TIMELINE_COLUMN_ITEMS;
  const horizontalRowSize = twoRowHorizontal ? Math.ceil(count / 2) : count;
  const horizontalRows = twoRowHorizontal
    ? [items.slice(0, horizontalRowSize), items.slice(horizontalRowSize)]
    : [items];
  const verticalColumns = twoColumnVertical
    ? [
        items.slice(0, MAX_VERTICAL_TIMELINE_COLUMN_ITEMS),
        items.slice(MAX_VERTICAL_TIMELINE_COLUMN_ITEMS),
      ]
    : [items];
  const timelineDensity = twoRowHorizontal ? 'two-row' : 'single-row';

  const Card = ({ it, isF, isDim, compact = false, style }) => (
    <div className={cx('gxn-panel', isF && 'is-focus')}
         data-timeline-card="true"
         data-timeline-focus={isF ? 'true' : undefined}
         style={{ padding: compact ? '16px 18px' : '24px 26px', display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10,
                  opacity: isDim ? 0.5 : 1, transition: 'opacity .3s ease', ...style }}>
      <span className="gxn-mono" style={{ fontSize: compact ? 18 : 24, color: 'var(--gxn-accent)', letterSpacing: '.05em' }}>{it.tag}</span>
      <h3 style={{ margin: 0, fontSize: compact ? 22 : 30, fontWeight: 700, lineHeight: compact ? 1.12 : 1.18, color: 'var(--gxn-text)' }}>{it.title}</h3>
      {p.showMeta && <p style={{ margin: 0, fontSize: compact ? 18 : 24, lineHeight: compact ? 1.28 : 1.45, color: 'var(--gxn-dim)' }}>{it.desc}</p>}
    </div>
  );

  return (
    <div className={cx(THEME_CLASS, 'gxn-slide')}>
      <ThemeStyle />
      <div className="gxn-pad">
        <SlideHeader kicker={p.kicker} title={p.title} titleEm={p.titleEm} index={p.index || "06 / 23"} />

        {horizontal ? (
          <div className="gxn-rise-2"
               data-timeline-root="true"
               data-timeline-orientation="horizontal"
               data-timeline-count={count}
               data-timeline-row-count={horizontalRows.length}
               data-timeline-density={timelineDensity}
               style={{
                 flex: 1, marginTop: twoRowHorizontal ? 34 : 56, display: 'flex', flexDirection: 'column',
                 justifyContent: twoRowHorizontal ? 'space-between' : 'stretch', gap: twoRowHorizontal ? 18 : 0, minHeight: 0,
               }}>
            {horizontalRows.map((rowItems, rowIndex) => {
              const offset = rowIndex * horizontalRowSize;
              return (
                <div key={rowIndex}
                     data-timeline-row="true"
                     data-row-index={rowIndex}
                     data-row-size={rowItems.length}
                     style={{
                  display: 'grid', gridTemplateColumns: `repeat(${rowItems.length}, minmax(0, 1fr))`,
                  columnGap: twoRowHorizontal ? 20 : 28, position: 'relative', minHeight: 0,
                }}>
                  {p.showConnector && rowItems.length > 1 && (
                    <div data-timeline-connector="true" style={{
                      position: 'absolute', top: twoRowHorizontal ? 42 : 63, left: `calc(100% / ${rowItems.length} / 2)`, width: `calc(100% - 100% / ${rowItems.length})`,
                      height: 2, transform: 'translateY(-1px)',
                      background: 'linear-gradient(90deg, transparent, var(--gxn-accent) 12%, var(--gxn-accent) 88%, transparent)',
                      boxShadow: '0 0 14px rgba(var(--gxn-glow),0.6)', opacity: 0.55,
                    }} />
                  )}
                  {rowItems.map((it, localIndex) => {
                    const i = offset + localIndex;
                    const isF = i === fIdx; const isDim = fIdx >= 0 && !isF;
                    return (
                      <div key={i}
                           data-timeline-item="true"
                           data-item-index={i}
                           data-focus={isF ? 'true' : undefined}
                           style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
                        <span className="gxn-num" style={{ fontSize: twoRowHorizontal ? 20 : 26, lineHeight: twoRowHorizontal ? '26px' : '32px', height: twoRowHorizontal ? 26 : 32, display: 'flex', alignItems: 'center', fontWeight: 600, color: isF ? 'var(--gxn-accent)' : 'var(--gxn-dim)', opacity: isDim ? 0.6 : 1, marginBottom: twoRowHorizontal ? 8 : 16, whiteSpace: 'nowrap' }}>{it.date}</span>
                        <div style={{ height: twoRowHorizontal ? 24 : 30, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}><Dot focus={isF} compact={twoRowHorizontal} /></div>
                        <Card it={it} isF={isF} isDim={isDim} compact={twoRowHorizontal} style={{ marginTop: twoRowHorizontal ? 12 : 22, width: '100%' }} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="gxn-rise-2"
               data-timeline-root="true"
               data-timeline-orientation="vertical"
               data-timeline-count={count}
               data-timeline-row-count={count}
               data-timeline-column-count={verticalColumns.length}
               data-timeline-density={twoColumnVertical ? 'vertical-two-column' : 'vertical'}
               style={{ flex: 1, marginTop: 40, minHeight: 0 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${verticalColumns.length}, minmax(0, 1fr))`,
              columnGap: twoColumnVertical ? 26 : 0,
              minHeight: 0,
              height: '100%',
            }}>
              {verticalColumns.map((columnItems, columnIndex) => (
                <div key={columnIndex}
                     data-timeline-column="true"
                     data-column-index={columnIndex}
                     data-column-size={columnItems.length}
                     style={{
                       position: 'relative',
                       minHeight: 0,
                       display: 'grid',
                       gridTemplateRows: `repeat(${columnItems.length}, minmax(0, 1fr))`,
                       rowGap: twoColumnVertical ? 10 : 0,
                       paddingLeft: 4,
                     }}>
                  {p.showConnector && (
                    <div data-timeline-connector="true" style={{
                      position: 'absolute',
                      left: twoColumnVertical ? 10 : 14,
                      top: twoColumnVertical ? 18 : 24,
                      bottom: twoColumnVertical ? 18 : 24,
                      width: 2,
                      background: 'linear-gradient(180deg, transparent, var(--gxn-accent) 10%, var(--gxn-accent) 90%, transparent)',
                      boxShadow: '0 0 14px rgba(var(--gxn-glow),0.6)',
                      opacity: 0.55,
                    }} />
                  )}
                  {columnItems.map((it, localIndex) => {
                    const i = columnIndex * MAX_VERTICAL_TIMELINE_COLUMN_ITEMS + localIndex;
                    const isF = i === fIdx; const isDim = fIdx >= 0 && !isF;
                    return (
                      <div key={i}
                           data-timeline-item="true"
                           data-item-index={i}
                           data-focus={isF ? 'true' : undefined}
                           style={{
                             display: 'grid',
                             gridTemplateColumns: twoColumnVertical ? '24px 132px 1fr' : '30px 220px 1fr',
                             alignItems: 'center',
                             columnGap: twoColumnVertical ? 18 : 34,
                           }}>
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
                          <Dot focus={isF} compact={twoColumnVertical} />
                        </div>
                        <span className="gxn-num" style={{
                          fontSize: twoColumnVertical ? 22 : 30,
                          fontWeight: 600,
                          color: isF ? 'var(--gxn-accent)' : 'var(--gxn-dim)',
                          opacity: isDim ? 0.6 : 1,
                          whiteSpace: 'nowrap',
                        }}>{it.date}</span>
                        <Card it={it} isF={isF} isDim={isDim} compact={twoColumnVertical} />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SlideTimeline;
