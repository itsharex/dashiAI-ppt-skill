import React from 'react';
import { SlideShell } from '../shell/index.jsx';

const COMMON_CONTROLS = [
  { key: 'labelType', label: '标签类型', type: 'select', options: [['number', '数字'], ['symbol', '符号'], ['keyword', '关键词']] },
  { key: 'focus', label: '重点信息 Focus', type: 'toggle' },
];

const CONTENT_CARDS = [
  { cn: '研究方法', en: 'Methodology', color: 'linear-gradient(160deg,#3f78ff,#1d49d6)', dark: false },
  { cn: '市场全景', en: 'Market Panorama', color: 'linear-gradient(160deg,#5af0d4,#1fb89b)', dark: true },
  { cn: '横向透视', en: 'Cross-Section', color: 'linear-gradient(160deg,#0c1430,#070d22)', dark: false },
  { cn: '产业链分层', en: 'Value Chain', color: 'linear-gradient(160deg,#eef2ff,#cdd8f5)', dark: true },
  { cn: '典型案例', en: 'Case Studies', color: 'linear-gradient(160deg,#7a5aff,#4a2fd6)', dark: false },
  { cn: '风险展望', en: 'Risk & Outlook', color: 'linear-gradient(160deg,#3f78ff,#1d49d6)', dark: false },
  { cn: '结论', en: 'Conclusion', color: 'linear-gradient(160deg,#5af0d4,#1fb89b)', dark: true },
];

const SECTION_ITEMS = [
  { label: '横向 · 空间维度', sub: '同一截面对比公司 / 赛道' },
  { label: '纵向 · 时间维度', sub: '沿时间轴追踪指标演化与拐点' },
  { label: '交叉 · 层级结构', sub: '识别产业链分层与因果传导关系' },
];

const SECTION_STACK = ['Causal Mapping', 'Value Chain', 'Market Panorama', 'Cross-Section', 'Time Axis', 'Signal Review'];

const MARKET_QUARTER = [
  { label: 'Q1', amt: 162, cnt: 18 },
  { label: 'Q2', amt: 284, cnt: 26 },
  { label: 'Q3', amt: 318, cnt: 31 },
  { label: 'Q4', amt: 206, cnt: 22 },
];

const MARKET_MONTH = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  .map((label, i) => ({ label, amt: [45, 58, 59, 86, 105, 93, 92, 118, 108, 73, 81, 52][i] }));

const SEGMENTS = [
  { cn: '通用大模型', en: 'Foundation Model', amt: 420, pct: 43.3, color: '#4a86ff' },
  { cn: '垂直应用', en: 'Vertical AI', amt: 245, pct: 25.3, color: '#46e3c6' },
  { cn: 'AI 基础设施', en: 'Infrastructure', amt: 158, pct: 16.3, color: '#7aa0ff' },
  { cn: 'AI 芯片', en: 'Hardware', amt: 97, pct: 10.0, color: '#9f7bff' },
  { cn: '其他', en: 'Tooling · Safety', amt: 50, pct: 5.1, color: '#5b6b9a' },
];

const ROUNDS = [
  { lb: 'Seed', n: 8, avg: 1.2 },
  { lb: 'A', n: 12, avg: 1.8 },
  { lb: 'B', n: 18, avg: 3.5 },
  { lb: 'C', n: 15, avg: 6.8 },
  { lb: 'D+', n: 22, avg: 15.2 },
  { lb: '未标明', n: 22, avg: 18.6 },
];

const TIERS = [
  { tier: '上游', name: '基础设施', desc: '算力 · 芯片 · 数据', companies: ['Cerebras', 'Groq', 'CoreWeave', 'Scale AI'], color: '#4a86ff', spine: 'linear-gradient(180deg,#5a8dff,#1d49d6)' },
  { tier: '中游', name: '模型层', desc: '通用大模型 · 开源 / 专用', companies: ['OpenAI', 'Anthropic', 'xAI', 'Mistral', 'SSI'], color: '#46e3c6', spine: 'linear-gradient(180deg,#5af0d4,#1fb89b)' },
  { tier: '下游', name: '应用层', desc: '生产力 · 搜索 · 具身智能', companies: ['Glean', 'Databricks', 'Perplexity AI', 'Figure AI'], color: '#9f7bff', spine: 'linear-gradient(180deg,#a98bff,#5a2fd6)' },
];

const GEO = [
  { lb: '旧金山湾区', pct: 63.9 },
  { lb: '纽约', pct: 12.4 },
  { lb: '西雅图', pct: 9.8 },
  { lb: '波士顿', pct: 7.7 },
  { lb: '其他地区', pct: 6.2 },
];

const CASES = [
  { cn: 'Anthropic', en: '从追赶到反超', val: '9650', fund: '650+', meta: '三轮 · 5/8/11月', tags: ['Constitutional AI', '安全对齐', 'Claude'], accent: '#46e3c6', quote: '通过可解释、可控的系统构建 AI，比单纯追求规模更符合长远利益。', who: 'Dario Amodei · CEO' },
  { cn: 'xAI', en: '马斯克的第三次创业', val: '500', fund: '50', meta: '18 个月跻身头部', tags: ['实时数据', '多模态', 'Grok'], accent: '#7aa0ff', quote: '背靠 X 平台海量实时数据，与特斯拉自动驾驶协同。', who: 'Grok · 实时 · 差异化' },
  { cn: 'CoreWeave', en: '卖铲子的人也赚翻了', val: '190', fund: '110', meta: '加密挖矿转型算力云', tags: ['卖铲子', 'NVIDIA 长约', 'H100 / H200'], accent: '#9f7bff', quote: '淘金热中卖铲子——提前锁定算力的基础设施商成为稀缺标的。', who: 'CoreWeave · 算力云' },
];

export function AiCapitalCover() {
  return (
    <AiSlide layout="AI-CAPITAL-01" variant="bg-blue" defaults={{ showWatermark: true, focus: true }} controls={[
      { key: 'showWatermark', label: '背景水印', type: 'toggle' },
      { key: 'focus', label: '年份高亮', type: 'toggle' },
    ]}>
      <Watermark text="AI · FINANCING · 2024" />
      <div>
        <div className="orb" style={{ width: 520, height: 520, left: -120, bottom: -160, background: 'radial-gradient(circle at 40% 40%, rgba(90,150,255,.55), rgba(40,90,230,0) 70%)' }} />
        <div className="orb" style={{ width: 360, height: 360, right: 120, top: 60, background: 'radial-gradient(circle at 50% 40%, rgba(70,227,198,.30), rgba(70,227,198,0) 70%)' }} />
        <div className="glass-chip anim d3" style={{ position: 'absolute', width: 118, height: 118, right: 430, top: 430, transform: 'rotate(14deg)' }} />
      </div>
      <div style={{ position: 'absolute', top: 'var(--pad-y)', left: 'var(--pad-x)', right: 'var(--pad-x)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 2 }}>
        <div className="anim" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '.18em', fontSize: 'var(--type-small)' }}>AI CAPITAL LAB</div>
        <div className="anim d1" style={{ textAlign: 'right', color: 'var(--ink-dim)', fontSize: 'var(--type-tiny)', lineHeight: 1.7, fontWeight: 500 }}>
          <div>在资本与算力的浪潮里，</div>
          <div>每一笔融资都是一次方向的押注。</div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 'var(--pad-x)', top: 218, zIndex: 2 }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div className="chrome anim d1 ai-original-year" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--type-mega)', lineHeight: .82, letterSpacing: '-.02em', textShadow: '0 0 70px rgba(120,170,255,.45)' }}>2024</div>
          <SelectionBox />
        </div>
        <div className="chrome anim d2" style={{ fontFamily: 'var(--font-cn)', fontWeight: 900, fontSize: 'var(--type-title)', lineHeight: 1.04, letterSpacing: '.02em', marginTop: 18 }}>
          <div>美国大额融资</div>
          <div>AI 公司调研报告</div>
        </div>
      </div>
      <div className="anim d4" style={{ position: 'absolute', right: 300, top: 470, fontFamily: 'var(--font-script)', fontSize: 118, color: '#dfe9ff', transform: 'rotate(-6deg)', filter: 'drop-shadow(0 8px 20px rgba(10,30,120,.5))', zIndex: 2 }}>AInsight</div>
      <div style={{ position: 'absolute', left: 'var(--pad-x)', bottom: 'var(--pad-y)', maxWidth: 560, zIndex: 2 }}>
        <div className="anim d3" style={{ color: 'var(--ink-faint)', fontSize: 'var(--type-tiny)', lineHeight: 1.8, fontWeight: 400 }}>聚焦 2024 年美国 AI 产业单笔亿元以上的大额融资事件，以「横纵分析法」梳理市场全景、行业分布与产业链分层，为投资判断提供结构化参考。</div>
      </div>
      <div style={{ position: 'absolute', right: 'var(--pad-x)', bottom: 'var(--pad-y)', display: 'flex', gap: 48, zIndex: 2 }}>
        {[{ label: '数据口径', value: '≥1亿美元' }, { label: '编制日期', value: '2026.06' }].map((item) => (
          <div key={item.label} className="anim d4" style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 20, letterSpacing: '.1em', color: 'var(--ink-faint)', textTransform: 'uppercase' }}>{item.label}</div>
            <div style={{ fontSize: 'var(--type-small)', fontWeight: 700, marginTop: 6 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </AiSlide>
  );
}

export function AiCapitalOverview() {
  const stats = [
    { value: '970', unit: '亿美元', label: '全年 AI 风投' },
    { value: '97', unit: '笔', label: '≥1亿融资事件' },
    { value: '10', unit: '亿元', label: '平均单笔规模' },
    { value: '63.9', unit: '%', label: '湾区资金占比' },
  ];
  return (
    <AiSlide layout="AI-CAPITAL-02" variant="bg-blue" defaults={{ statCount: 4, labelType: 'number', focus: true }} controls={[
      { key: 'statCount', label: '指标数量', type: 'range', min: 2, max: 4, step: 1 },
      ...COMMON_CONTROLS,
    ]}>
      <div className="orb" style={{ width: 460, height: 460, right: -120, top: -140, background: 'radial-gradient(circle at 50% 50%, rgba(70,227,198,.22), rgba(70,227,198,0) 70%)' }} />
      <div className="anim" style={{ display: 'flex', alignItems: 'flex-end', gap: 28 }}>
        <h2 className="ink-grad" style={{ fontFamily: 'var(--font-cn)', fontWeight: 900, fontSize: 'var(--type-h2)', letterSpacing: '.02em' }}>报告摘要</h2>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--type-small)', color: 'var(--ink-faint)', paddingBottom: 10 }}>Report Overview</span>
        <span className="glass" style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 14, padding: '12px 26px', borderRadius: 999, fontSize: 'var(--type-small)', fontWeight: 600 }}>
          2024 全年 · 资本大年
          <span style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: '50%', background: 'var(--blue-electric)', alignItems: 'center', justifyContent: 'center' }}>→</span>
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 42, height: 600 }}>
        <div className="glass anim d1" style={{ borderRadius: 32, padding: '44px 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 88, lineHeight: .5, color: 'var(--ink-faint)', height: 40 }}>“</div>
          <p style={{ fontSize: 'var(--type-body)', lineHeight: 1.75, fontWeight: 400, color: 'rgba(255,255,255,.9)', marginTop: 6 }}>2024 年是美国 AI 产业的「资本大年」。全年 AI 初创公司吸纳风险投资约 970 亿美元，创历史新高，占全美风投近三分之一；单笔 ≥1 亿美元 的大额融资事件达 97 笔。</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
            {['赢家通吃', 'AGI 叙事', '地理护城河', '估值泡沫', '退潮看兑现'].map((item, i) => (
              <span key={item} className={i === 0 ? 'ai-original-focus-tag' : ''} style={{ padding: '9px 18px', borderRadius: 999, fontSize: 'var(--type-small)', fontWeight: 500, whiteSpace: 'nowrap', color: i === 0 ? 'var(--navy-900)' : '#fff', background: i === 0 ? 'var(--mint)' : undefined }}>{item}</span>
            ))}
          </div>
        </div>
        <div className="glass anim d2" style={{ borderRadius: 32, padding: '42px 48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 30 }}>
            <span style={{ fontSize: 'var(--type-sub)', fontWeight: 700 }}>赛道融资额占比</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)' }}>$970亿 · 100%</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            {[
              { label: '通用大模型', pct: 43.3, color: 'var(--blue-bright)' },
              { label: '垂直应用', pct: 25.3, color: 'var(--mint)' },
              { label: 'AI 基础设施', pct: 16.3, color: '#7aa0ff' },
              { label: 'AI 芯片', pct: 10.0, color: '#9f7bff' },
            ].map((item) => <MetricBar key={item.label} {...item} />)}
          </div>
        </div>
      </div>
      <div className="glass-dark anim d3" style={{ position: 'absolute', left: 'var(--pad-x)', right: 'var(--pad-x)', bottom: 'var(--pad-y)', borderRadius: 28, padding: '34px 50px', display: 'grid', gridTemplateColumns: 'repeat(var(--ai-stat-count),1fr)', gap: 30 }}>
        {stats.map((item, i) => (
          <div key={item.label} data-ai-count="statCount" data-ai-index={i} className={i === 0 ? 'ai-original-hot-stat' : ''} style={{ display: 'flex', flexDirection: 'column', gap: 8, borderLeft: i ? '1px solid rgba(255,255,255,.12)' : 'none', paddingLeft: i ? 34 : 0 }}>
            <AiBadge index={i} number={String(i + 1).padStart(2, '0')} symbol={['◆', '▲', '●', '■'][i]} keyword="KPI" style={{ fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '.1em', color: i === 0 ? 'var(--mint)' : 'var(--ink-faint)' }} />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, whiteSpace: 'nowrap' }}>
              <span className={i === 0 ? 'ai-original-focus-number' : ''} style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: i === 0 ? 86 : 72, lineHeight: .9, color: '#fff', textShadow: i === 0 ? '0 0 30px rgba(70,227,198,.5)' : 'none' }}>{item.value}</span>
              <span style={{ fontSize: 'var(--type-small)', fontWeight: 600, flexShrink: 0, color: i === 0 ? 'var(--mint)' : 'var(--ink-dim)' }}>{item.unit}</span>
            </div>
            <span style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-dim)' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </AiSlide>
  );
}

export function AiCapitalContents() {
  return (
    <AiSlide layout="AI-CAPITAL-03" variant="bg-blue" defaults={{ cardCount: 4, labelType: 'number', focus: true, focusIndex: 1 }} controls={[
      { key: 'cardCount', label: '卡片数量', type: 'range', min: 2, max: 7, step: 1 },
      ...COMMON_CONTROLS,
    ]}>
      <div className="orb" style={{ width: 420, height: 420, right: 160, top: -120, background: 'radial-gradient(circle at 50% 50%, rgba(90,150,255,.4), rgba(40,90,230,0) 70%)' }} />
      <div className="glass-chip anim d2" style={{ position: 'absolute', width: 120, height: 120, right: 300, top: 120, transform: 'rotate(-12deg)' }} />
      <div style={{ position: 'relative', height: 200 }}>
        <div className="anim" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 42, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 170, lineHeight: .9, letterSpacing: '-.01em', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,.18)' }}>CONTENTS</div>
        <div className="chrome anim d1" style={{ position: 'absolute', top: 0, left: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 170, lineHeight: .9, letterSpacing: '-.01em' }}>CONTENTS</div>
        <div className="anim d2" style={{ position: 'absolute', top: 158, left: 6, fontFamily: 'var(--font-cn)', fontWeight: 700, fontSize: 'var(--type-sub)', color: 'var(--ink-dim)' }}>报告结构 · Structure</div>
      </div>
      <div style={{ display: 'flex', gap: 26, marginTop: 96, height: 560 }}>
        {CONTENT_CARDS.map((item, i) => {
          const ink = item.dark ? 'var(--navy-900)' : '#fff';
          return (
            <div key={item.cn} data-ai-count="cardCount" data-ai-index={i} data-ai-focus-index={i} className={`anim d${Math.min(i + 1, 5)} ai-original-content-card`} style={{ flex: 1, borderRadius: 30, padding: '40px 36px', background: item.color, color: ink, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: i === 1 ? -38 : 0, boxShadow: i === 1 ? '0 44px 90px rgba(70,227,198,.45), 0 0 0 2px var(--mint)' : '0 26px 60px rgba(3,8,30,.45)', border: '1px solid rgba(255,255,255,.16)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <AiBadge index={i} number={`Step ${String(i + 1).padStart(2, '0')}`} symbol={['◆', '▲', '●', '■', '★', '✦', '◇'][i]} keyword="STEP" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-tiny)', opacity: .7, letterSpacing: '.06em' }} />
                <span style={{ width: 40, height: 40, borderRadius: '50%', border: `1.5px solid ${item.dark ? 'rgba(5,11,34,.35)' : 'rgba(255,255,255,.5)'}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>↗</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64, lineHeight: .9, opacity: item.dark ? .18 : .22, marginBottom: 18 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: 'var(--font-cn)', fontWeight: 900, fontSize: 'var(--type-sub)', lineHeight: 1.15, letterSpacing: '.04em' }}>{item.cn}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--type-tiny)', opacity: .7, marginTop: 8 }}>{item.en}</div>
              </div>
            </div>
          );
        })}
      </div>
    </AiSlide>
  );
}

export function AiCapitalSection() {
  return (
    <AiSlide layout="AI-CAPITAL-04" variant="bg-deep" defaults={{ stackCount: 5, labelType: 'number', focus: true }} controls={[
      { key: 'stackCount', label: '堆叠卡数量', type: 'range', min: 2, max: 6, step: 1 },
      ...COMMON_CONTROLS,
    ]}>
      <div className="orb" style={{ width: 540, height: 540, left: 60, bottom: -180, background: 'radial-gradient(circle at 50% 50%, rgba(60,120,255,.4), rgba(40,90,230,0) 70%)' }} />
      <div className="anim" aria-hidden="true" style={{ position: 'absolute', right: 80, top: 30, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 420, lineHeight: .8, color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,.06)' }}>01</div>
      <div style={{ position: 'absolute', left: 120, top: 170, width: 760, height: 740 }}>
        {SECTION_STACK.map((item, k) => {
          const i = SECTION_STACK.length - 1 - k;
          return (
            <div key={item} data-ai-count="stackCount" data-ai-index={k} className={`anim d${Math.min(k + 1, 5)}`} style={{ position: 'absolute', left: i * 46, top: i * 92, width: 560 + i * 28, height: 150, borderRadius: 26, background: `linear-gradient(150deg, rgba(255,255,255,${0.04 + i * 0.018}), rgba(255,255,255,${0.015 + i * 0.012}))`, border: `1px solid rgba(255,255,255,${0.08 + i * 0.03})`, backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', boxShadow: '0 20px 50px rgba(3,8,30,.3)', display: 'flex', alignItems: 'center', padding: '0 34px', opacity: 0.45 + i * 0.13 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--type-sub)', whiteSpace: 'nowrap', color: `rgba(255,255,255,${0.4 + i * 0.12})` }}>{item}</span>
            </div>
          );
        })}
        <div className="anim d5" style={{ position: 'absolute', left: SECTION_STACK.length * 46 + 14, top: SECTION_STACK.length * 92 + 8, zIndex: 5 }}>
          <div className="ai-original-bubble" style={{ position: 'relative', padding: '22px 40px', borderRadius: 22, background: 'linear-gradient(150deg,#4a86ff,#1d49d6)', boxShadow: '0 30px 70px rgba(40,90,230,.6), 0 0 0 2px rgba(255,255,255,.35)', border: '1px solid rgba(255,255,255,.3)' }}>
            <AiBadge number="01" symbol="◆" keyword="METHOD" style={{ fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '.12em', color: 'rgba(255,255,255,.75)', marginBottom: 8 }} />
            <div style={{ fontFamily: 'var(--font-cn)', fontWeight: 900, fontSize: 'var(--type-sub)', color: '#fff', letterSpacing: '.04em' }}>横纵分析法</div>
            <div style={{ position: 'absolute', left: 46, bottom: -16, width: 0, height: 0, borderLeft: '18px solid transparent', borderRight: '0 solid transparent', borderTop: '20px solid #1d49d6' }} />
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', right: 'var(--pad-x)', top: 300, width: 720, zIndex: 6 }}>
        <div className="anim d1" style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--type-sub)', color: 'var(--mint)' }}>01</span>
          <span style={{ height: 2, width: 90, background: 'var(--mint)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--type-small)', color: 'var(--ink-dim)', letterSpacing: '.06em' }}>Methodology</span>
        </div>
        <h2 className="chrome anim d2" style={{ fontFamily: 'var(--font-cn)', fontWeight: 900, fontSize: 120, lineHeight: 1, letterSpacing: '.04em' }}>研究方法</h2>
        <div style={{ marginTop: 54, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SECTION_ITEMS.map((item, i) => (
            <div key={item.label} className={`anim d${Math.min(i + 3, 5)}`} style={{ display: 'flex', alignItems: 'center', gap: 22, padding: '20px 0', borderTop: '1px solid rgba(255,255,255,.14)' }}>
              <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 14, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--mint)' }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div style={{ fontSize: 'var(--type-body)', fontWeight: 700 }}>{item.label}</div>
                <div style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-dim)', marginTop: 3 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AiSlide>
  );
}

export function AiCapitalMarket() {
  return (
    <AiSlide layout="AI-CAPITAL-05" variant="bg-blue" defaults={{ granularity: '季度', chartType: '面积', showCount: true, callout: true, labelType: 'number', focus: true }} controls={[
      { key: 'granularity', label: '数据粒度', type: 'select', options: ['季度', '月度'] },
      { key: 'chartType', label: '图表类型', type: 'select', options: ['面积', '折线', '柱状'] },
      { key: 'showCount', label: '事件笔数副线', type: 'toggle' },
      { key: 'callout', label: '趋势解读卡', type: 'toggle' },
      ...COMMON_CONTROLS,
    ]}>
      <div className="orb" style={{ width: 480, height: 480, right: -140, top: -160, background: 'radial-gradient(circle at 50% 50%, rgba(70,227,198,.20), rgba(70,227,198,0) 70%)' }} />
      <SlideHead no="02" en="Market Panorama" cn="市场全景 · 纵向趋势" keyword="TREND" />
      <div className="glass anim d1" style={{ marginTop: 28, borderRadius: 32, padding: '26px 40px 12px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6, padding: '0 30px' }}>
          <span data-ai-show-when="granularity:季度" style={{ fontSize: 'var(--type-sub)', fontWeight: 700 }}>逐季度融资额走势</span>
          <span data-ai-show-when="granularity:月度" style={{ fontSize: 'var(--type-sub)', fontWeight: 700 }}>逐月融资额走势</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)' }}>单位 · 亿美元　全年 $970亿</span>
        </div>
        <MarketChart data={MARKET_QUARTER} maxAmt={350} maxCnt={36} granularity="季度" />
        <MarketChart data={MARKET_MONTH} maxAmt={130} granularity="月度" />
        <div data-ai-show-when="granularity:季度" data-ai-toggle="showCount" style={{ display: 'flex', gap: 30, padding: '0 30px 6px', fontSize: 'var(--type-tiny)', color: 'var(--ink-dim)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><i style={{ width: 24, height: 5, borderRadius: 3, background: '#6ea0ff' }} />融资总额</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><i style={{ width: 24, height: 0, borderTop: '3px dashed var(--mint)' }} />事件笔数</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, marginTop: 20, alignItems: 'stretch' }}>
        <div data-ai-toggle="callout" className="glass-dark anim d2" style={{ flex: '1 1 0', borderRadius: 24, padding: '26px 34px', display: 'flex', gap: 24, alignItems: 'center' }}>
          <span style={{ flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '.1em', color: 'var(--mint)', writingMode: 'vertical-rl', textOrientation: 'upright' }}>趋势</span>
          <p style={{ fontSize: 'var(--type-small)', lineHeight: 1.6, color: 'rgba(255,255,255,.86)' }}>Q2、Q3 为融资高峰，进入 Q4 理性回落但仍处高位；<b style={{ color: '#fff' }}>平均单笔约 10 亿美元</b>，市场对头部标的高度追捧。</p>
        </div>
        {[{ v: '970', u: '亿美元', l: '全年合计' }, { v: '318', u: '亿美元', l: 'Q3 峰值' }, { v: '97', u: '笔', l: '大额事件' }].map((item, i) => (
          <div key={item.l} className={`glass anim d${i + 3}`} style={{ flex: '0 0 230px', borderRadius: 24, padding: '20px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, whiteSpace: 'nowrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 52, lineHeight: .9 }}>{item.v}</span>
              <span style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-dim)', fontWeight: 600 }}>{item.u}</span>
            </div>
            <span style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)', marginTop: 6 }}>{item.l}</span>
          </div>
        ))}
      </div>
    </AiSlide>
  );
}

export function AiCapitalCross() {
  return (
    <AiSlide layout="AI-CAPITAL-06" variant="bg-blue" defaults={{ segCount: 5, shape: '环形', showRounds: true, callout: true, labelType: 'number', focus: true }} controls={[
      { key: 'segCount', label: '赛道数量', type: 'range', min: 2, max: 5, step: 1 },
      { key: 'shape', label: '图形', type: 'select', options: ['环形', '饼图'] },
      { key: 'showRounds', label: '轮次结构面板', type: 'toggle' },
      { key: 'callout', label: '核心发现卡', type: 'toggle' },
      ...COMMON_CONTROLS,
    ]}>
      <div className="orb" style={{ width: 460, height: 460, left: -160, bottom: -160, background: 'radial-gradient(circle at 50% 50%, rgba(90,150,255,.32), rgba(40,90,230,0) 70%)' }} />
      <SlideHead no="03" en="Cross-Section" cn="横向透视 · 赛道与轮次" keyword="CROSS" />
      <div style={{ display: 'grid', gridTemplateColumns: '520px 1fr', gap: 54, marginTop: 36, alignItems: 'center', height: 470 }}>
        <div className="anim d1" style={{ position: 'relative', width: 440, height: 440, justifySelf: 'center' }}>
          <div className="ai-donut" data-ai-segments={JSON.stringify(SEGMENTS)} style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: segmentGradient(SEGMENTS), boxShadow: '0 30px 80px rgba(3,8,30,.5)' }} />
          <div data-ai-show-when="shape:环形" style={{ position: 'absolute', inset: '24%', borderRadius: '50%', background: 'var(--navy-card)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 2px 14px rgba(0,0,0,.5)' }}>
            <span className="ai-original-focus-number" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 78, lineHeight: .9, color: 'var(--mint)' }}>43.3%</span>
            <span style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-dim)', marginTop: 6, textAlign: 'center' }}>通用大模型</span>
          </div>
          <div className="ai-original-focus-ring" data-ai-show-when="shape:环形" style={{ position: 'absolute', inset: -10, borderRadius: '50%', border: '2px solid var(--mint)', opacity: .5 }} />
        </div>
        <div className="anim d2" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {SEGMENTS.map((item, i) => (
            <div key={item.cn} data-ai-count="segCount" data-ai-index={i} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <AiBadge index={i} number={String(i + 1).padStart(2, '0')} symbol={['◆', '▲', '●', '■', '★'][i]} keyword="SEG" style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 12, background: item.color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 15, color: '#08123a', fontWeight: 700, boxShadow: i === 0 ? `0 0 22px ${item.color}` : 'none' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <span style={{ fontSize: 'var(--type-body)', fontWeight: 700 }}>{item.cn}<span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)', marginLeft: 12 }}>{item.en}</span></span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-small)', fontWeight: 700, color: i === 0 ? 'var(--mint)' : '#fff' }}>{item.pct}%</span>
                </div>
                <div style={{ height: 12, borderRadius: 999, background: 'rgba(255,255,255,.1)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${item.pct}%`, borderRadius: 999, background: item.color, boxShadow: `0 0 14px ${item.color}` }} />
                </div>
              </div>
            </div>
          ))}
          <div data-ai-toggle="callout" className="glass-dark" style={{ marginTop: 6, borderRadius: 18, padding: '18px 24px', fontSize: 'var(--type-tiny)', lineHeight: 1.55, color: 'rgba(255,255,255,.84)' }}>
            <b style={{ color: 'var(--mint)' }}>核心发现 · </b>通用大模型占近半壁江山，押注「AGI 叙事」；基础设施与芯片合计超四分之一，上游热度不减。
          </div>
        </div>
      </div>
      <div data-ai-toggle="showRounds" className="glass anim d3" style={{ marginTop: 24, borderRadius: 26, padding: '24px 40px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
          <span style={{ fontSize: 'var(--type-sub)', fontWeight: 700 }}>融资轮次结构</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)' }}>柱高 · 事件笔数　数字 · 平均单笔($亿)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 30, height: 150 }}>
          {ROUNDS.map((item) => (
            <div key={item.lb} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, height: '100%', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, color: item.avg >= 15 ? 'var(--mint)' : '#cfe0ff' }}>{item.avg}</span>
              <div style={{ width: '100%', maxWidth: 90, height: `${(item.n / 22) * 92}px`, borderRadius: '8px 8px 0 0', background: item.avg >= 15 ? 'linear-gradient(180deg,#46e3c6,#1fb89b)' : 'linear-gradient(180deg,#5a8dff,#1d49d6)' }} />
              <span style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-dim)', fontWeight: 600 }}>{item.lb}</span>
            </div>
          ))}
        </div>
      </div>
    </AiSlide>
  );
}

export function AiCapitalChain() {
  return (
    <AiSlide layout="AI-CAPITAL-07" variant="bg-deep" defaults={{ layers: 3, perLayer: 4, showGeo: true, callout: true, labelType: 'number', focus: true }} controls={[
      { key: 'layers', label: '层级数量', type: 'range', min: 1, max: 3, step: 1 },
      { key: 'perLayer', label: '每层公司数', type: 'range', min: 1, max: 5, step: 1 },
      { key: 'showGeo', label: '地区分布面板', type: 'toggle' },
      { key: 'callout', label: '地理护城河卡', type: 'toggle' },
      ...COMMON_CONTROLS,
    ]}>
      <div className="orb" style={{ width: 520, height: 520, right: -160, bottom: -180, background: 'radial-gradient(circle at 50% 50%, rgba(70,227,198,.18), rgba(70,227,198,0) 70%)' }} />
      <SlideHead no="04" en="Value Chain" cn="产业链分层透视" keyword="CHAIN" />
      <div className="ai-original-chain-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 40, marginTop: 38, height: 640 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, justifyContent: 'center' }}>
          {TIERS.map((tier, i) => (
            <div key={tier.tier} data-ai-count="layers" data-ai-index={i} className={`glass anim d${i + 1} ${i === 1 ? 'ai-original-tier-hot' : ''}`} style={{ position: 'relative', borderRadius: 26, padding: '30px 36px 30px 30px', display: 'flex', gap: 28, alignItems: 'center', boxShadow: i === 1 ? '0 30px 70px rgba(70,227,198,.28), 0 0 0 2px var(--mint)' : '0 24px 56px rgba(3,8,30,.4)' }}>
              <div style={{ flexShrink: 0, width: 8, alignSelf: 'stretch', borderRadius: 8, background: tier.spine }} />
              <div style={{ flexShrink: 0, width: 188 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <AiBadge index={i} number={String(i + 1).padStart(2, '0')} symbol={['◆', '▲', '●'][i]} keyword={['UP', 'MID', 'DOWN'][i]} style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '.1em', color: tier.color, border: `1px solid ${tier.color}`, borderRadius: 6, padding: '3px 9px' }} />
                  <span style={{ fontFamily: 'var(--font-cn)', fontWeight: 900, fontSize: 'var(--type-sub)', letterSpacing: '.04em' }}>{tier.tier}</span>
                </div>
                <div style={{ fontSize: 'var(--type-body)', fontWeight: 700, color: '#fff' }}>{tier.name}</div>
                <div style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)', marginTop: 4 }}>{tier.desc}</div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: 12, alignContent: 'center' }}>
                {tier.companies.map((item, j) => <span key={item} data-ai-count="perLayer" data-ai-index={j} style={{ padding: '12px 22px', borderRadius: 14, background: 'rgba(255,255,255,.08)', border: `1px solid ${i === 1 ? 'rgba(70,227,198,.4)' : 'rgba(255,255,255,.18)'}`, fontSize: 'var(--type-small)', fontWeight: 600, whiteSpace: 'nowrap' }}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div data-ai-toggle="showGeo" className="glass-dark anim d2" style={{ borderRadius: 30, padding: '38px 40px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <span style={{ fontSize: 'var(--type-sub)', fontWeight: 700 }}>地区分布</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)' }}>$亿 · 占比</span>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22 }}>
            {GEO.map((item, i) => <MetricBar key={item.lb} label={item.lb} pct={item.pct} color={i === 0 ? 'linear-gradient(90deg,#5af0d4,#1fb89b)' : 'linear-gradient(90deg,#5a8dff,#1d49d6)'} hot={i === 0} />)}
          </div>
          <div data-ai-toggle="callout" style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.12)', fontSize: 'var(--type-tiny)', lineHeight: 1.55, color: 'rgba(255,255,255,.84)' }}>
            <b style={{ color: 'var(--mint)' }}>地理护城河 · </b>湾区独占六成以上，人才、资本、算力虹吸效应强化，短期难以撼动。
          </div>
        </div>
      </div>
    </AiSlide>
  );
}

export function AiCapitalCases() {
  return (
    <AiSlide layout="AI-CAPITAL-08" variant="bg-blue" defaults={{ caseCount: 3, imgCount: 3, quote: true, labelType: 'number', focus: true }} controls={[
      { key: 'caseCount', label: '案例数量', type: 'range', min: 1, max: 3, step: 1 },
      { key: 'imgCount', label: '图片槽数量', type: 'range', min: 0, max: 4, step: 1 },
      { key: 'quote', label: '案例引用', type: 'toggle' },
      ...COMMON_CONTROLS,
    ]}>
      <div className="orb" style={{ width: 460, height: 460, left: -150, top: -160, background: 'radial-gradient(circle at 50% 50%, rgba(90,150,255,.3), rgba(40,90,230,0) 70%)' }} />
      <SlideHead no="05" en="Case Studies" cn="典型案例深度剖析" keyword="CASE" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(var(--ai-case-count),minmax(0,1fr))', gap: 26, marginTop: 30, flex: '0 0 auto', height: 470 }}>
        {CASES.map((item, i) => (
          <div key={item.cn} data-ai-count="caseCount" data-ai-index={i} className={`glass anim d${i + 1} ${i === 0 ? 'ai-original-case-hot' : ''}`} style={{ position: 'relative', borderRadius: 30, padding: '24px 28px', display: 'flex', flexDirection: 'column', overflow: 'hidden', marginTop: i === 0 ? -16 : 0, boxShadow: i === 0 ? '0 40px 90px rgba(70,227,198,.32), 0 0 0 2px var(--mint)' : '0 26px 60px rgba(3,8,30,.45)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <AiBadge index={i} number={`No.${String(i + 1).padStart(2, '0')}`} symbol={['◆', '▲', '●'][i]} keyword="CASE" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-tiny)', letterSpacing: '.08em', color: item.accent }} />
              <span style={{ width: 38, height: 38, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.4)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>↗</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 42, lineHeight: 1, color: '#fff' }}>{item.cn}</div>
            <div style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-dim)', marginTop: 6, marginBottom: 16 }}>{item.en}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span className={i === 0 ? 'ai-original-focus-number' : ''} style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 60, lineHeight: .85, color: i === 0 ? 'var(--mint)' : '#fff', textShadow: i === 0 ? '0 0 30px rgba(70,227,198,.5)' : 'none' }}>{item.val}</span>
              <span style={{ fontSize: 'var(--type-tiny)', fontWeight: 700, color: 'var(--ink-dim)' }}>亿美元 · 估值</span>
            </div>
            <div style={{ display: 'flex', gap: 30, marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.12)' }}>
              <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28 }}>{item.fund}<span style={{ fontSize: 15, color: 'var(--ink-dim)', marginLeft: 4 }}>亿</span></div><div style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)', marginTop: 2 }}>累计融资</div></div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 'var(--type-tiny)', fontWeight: 600, color: 'rgba(255,255,255,.8)', lineHeight: 1.4, marginTop: 4 }}>{item.meta}</div></div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {item.tags.map((tag, j) => <span key={tag} className={i === 0 && j === 0 ? 'ai-original-focus-tag' : ''} style={{ padding: '6px 13px', borderRadius: 999, fontSize: 'var(--type-tiny)', fontWeight: 600, background: i === 0 && j === 0 ? 'var(--mint)' : 'rgba(255,255,255,.1)', color: i === 0 && j === 0 ? 'var(--navy-900)' : '#fff', border: '1px solid rgba(255,255,255,.16)' }}>{tag}</span>)}
            </div>
            {i === 0 && (
              <div data-ai-toggle="quote" style={{ marginTop: 'auto', paddingTop: 16 }}>
                <p style={{ fontSize: 'var(--type-tiny)', lineHeight: 1.45, color: 'rgba(255,255,255,.86)', fontStyle: 'italic' }}>“{item.quote}”</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink-faint)', marginTop: 8 }}>— {item.who}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="anim d3" style={{ marginTop: 'auto', paddingTop: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '.14em', color: 'var(--ink-faint)', textTransform: 'uppercase' }}>Visuals</span>
          <span style={{ height: 1, flex: 1, background: 'rgba(255,255,255,.14)' }} />
          <span style={{ fontSize: 'var(--type-tiny)', color: 'var(--ink-faint)' }}>图片为示意 · 槽位按图片比例自适应</span>
        </div>
        <ImageStrip idPrefix="cases" count={4} width={1700} maxH={185} />
      </div>
    </AiSlide>
  );
}

function AiSlide({ layout, variant, defaults, controls, children }) {
  return (
    <SlideShell layout={layout} tone="dark" className={`ai-capital-slide ${variant}`}>
      <div
        className="ai-original-root"
        data-prop-controls={JSON.stringify(controls)}
        data-prop-defaults={JSON.stringify(defaults)}
        data-ai-focus={String(defaults.focus ?? false)}
        style={cssVars(defaults)}
      >
        {children}
      </div>
    </SlideShell>
  );
}

function SlideHead({ no, en, cn, keyword }) {
  return (
    <div>
      <div className="anim" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <AiBadge number={no} symbol="◆" keyword={keyword} style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--type-sub)', color: 'var(--mint)' }} />
        <span style={{ height: 2, width: 80, background: 'var(--mint)', flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--type-small)', color: 'var(--ink-dim)', letterSpacing: '.06em', whiteSpace: 'nowrap' }}>{en}</span>
      </div>
      <h2 className="chrome anim d1" style={{ fontFamily: 'var(--font-cn)', fontWeight: 900, fontSize: 'var(--type-h2)', lineHeight: 1.05, letterSpacing: '.02em', marginTop: 20, whiteSpace: 'nowrap' }}>{cn}</h2>
    </div>
  );
}

function MarketChart({ data, maxAmt, maxCnt = 36, granularity }) {
  const W = 1660, H = 430, padL = 70, padR = 40, padT = 34, padB = 50;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const peak = data.reduce((p, d, i) => d.amt > data[p].amt ? i : p, 0);
  const xAt = (i) => padL + (data.length === 1 ? plotW / 2 : (i / (data.length - 1)) * plotW);
  const yAt = (v) => padT + plotH - (v / maxAmt) * plotH;
  const yCnt = (v) => padT + plotH - (v / maxCnt) * plotH;
  const linePath = data.map((d, i) => `${i ? 'L' : 'M'} ${xAt(i)} ${yAt(d.amt)}`).join(' ');
  const areaPath = `${linePath} L ${xAt(data.length - 1)} ${padT + plotH} L ${xAt(0)} ${padT + plotH} Z`;
  const cntPath = data.filter((d) => d.cnt).map((d, i) => `${i ? 'L' : 'M'} ${xAt(i)} ${yCnt(d.cnt)}`).join(' ');
  const barW = Math.min(64, (plotW / data.length) * 0.42);
  const yLabels = [0, .25, .5, .75, 1].map((g) => ({ value: Math.round(g * maxAmt), top: `${((padT + plotH - g * plotH) / H) * 100}%` }));
  return (
    <div data-ai-show-when={`granularity:${granularity}`} style={{ position: 'relative', height: H, maxHeight: 440 }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: `${H}px`, maxHeight: 440, display: 'block' }} aria-hidden="true">
        <defs><linearGradient id={`areaFill-${granularity}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a86ff" stopOpacity="0.55" /><stop offset="100%" stopColor="#4a86ff" stopOpacity="0.02" /></linearGradient></defs>
        {[0, .25, .5, .75, 1].map((g) => <line key={g} x1={padL} y1={padT + plotH - g * plotH} x2={W - padR} y2={padT + plotH - g * plotH} stroke="rgba(255,255,255,.1)" strokeWidth="1" />)}
        <g data-ai-show-when="chartType:柱状">{data.map((d, i) => <rect key={d.label} x={xAt(i) - barW / 2} y={yAt(d.amt)} width={barW} height={padT + plotH - yAt(d.amt)} rx="8" fill={i === peak ? 'var(--mint)' : '#4a86ff'} opacity={i === peak ? 1 : .85} className={i === peak ? 'ai-original-focus-svg' : ''} />)}</g>
        <path data-ai-show-when="chartType:面积" d={areaPath} fill={`url(#areaFill-${granularity})`} />
        <path data-ai-show-when="chartType:面积,chartType:折线" d={linePath} fill="none" stroke="#6ea0ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <g data-ai-toggle="showCount" data-ai-show-when={`granularity:${granularity}`}>{cntPath && <path d={cntPath} fill="none" stroke="var(--mint)" strokeWidth="3" strokeDasharray="3 8" strokeLinecap="round" />}{data.map((d, i) => d.cnt && <circle key={d.label} cx={xAt(i)} cy={yCnt(d.cnt)} r="5" fill="var(--mint)" />)}</g>
        <g data-ai-show-when="chartType:面积,chartType:折线">{data.map((d, i) => <circle key={d.label} cx={xAt(i)} cy={yAt(d.amt)} r={i === peak ? 11 : 6} fill={i === peak ? 'var(--mint)' : '#cfe0ff'} stroke="#0a1230" strokeWidth={i === peak ? 3 : 2} className={i === peak ? 'ai-original-focus-svg' : ''} />)}</g>
      </svg>
      {yLabels.map((item) => <span key={item.value} style={{ position: 'absolute', left: 54, top: item.top, transform: 'translate(-100%,-50%)', fontFamily: 'var(--font-mono)', fontSize: 20, color: 'rgba(255,255,255,.4)' }}>{item.value}</span>)}
      <span data-ai-show-when="chartType:面积,chartType:折线" className="ai-original-focus-number" style={{ position: 'absolute', left: `${(xAt(peak) / W) * 100}%`, top: `${((yAt(data[peak].amt) - 26) / H) * 100}%`, transform: 'translate(-50%,-50%)', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 30, color: '#fff' }}>{data[peak].amt}</span>
      {data.map((d, i) => <span key={d.label} style={{ position: 'absolute', left: `${(xAt(i) / W) * 100}%`, bottom: 13, transform: 'translateX(-50%)', fontFamily: 'var(--font-cn)', fontWeight: 600, fontSize: 22, color: i === peak ? 'var(--mint)' : 'rgba(255,255,255,.66)' }}>{d.label}</span>)}
    </div>
  );
}

function MetricBar({ label, pct, color, hot = false }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--type-small)', fontWeight: 600, marginBottom: 10, whiteSpace: 'nowrap', gap: 16 }}>
        <span style={{ color: hot ? '#fff' : undefined }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-mono)', color: hot ? 'var(--mint)' : undefined }}>{pct}%</span>
      </div>
      <div style={{ height: 14, borderRadius: 999, background: 'rgba(255,255,255,.12)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${Math.min(100, pct * 2)}%`, borderRadius: 999, background: color, boxShadow: `0 0 18px ${color}` }} />
      </div>
    </div>
  );
}

function ImageStrip({ idPrefix, count, width = 1680, maxH = 360, gap = 22 }) {
  const placeholders = [
    { ratio: 1.5, label: '公司实景 / office' },
    { ratio: .78, label: '创始人 / portrait' },
    { ratio: 1.33, label: '产品截图 / product' },
    { ratio: 1, label: '团队 / team' },
  ];
  const availW = width - gap * (placeholders.length - 1);
  const rowH = Math.min(maxH, availW / placeholders.reduce((sum, item) => sum + item.ratio, 0));
  return (
    <div style={{ display: 'flex', gap, justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
      {placeholders.map((item, i) => {
        const height = Math.round(rowH);
        const slotW = Math.round(height * item.ratio);
        return (
          <figure
            key={item.label}
            className="frame-img ai-original-image-slot"
            data-ai-count="imgCount"
            data-ai-index={i}
            data-media-slot={`${idPrefix}-${i}`}
            style={{ position: 'relative', width: slotW, height, flexShrink: 0, borderRadius: 20, overflow: 'hidden', cursor: 'pointer', background: 'repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 14px, rgba(255,255,255,.02) 14px 28px)', border: '1px solid rgba(255,255,255,.18)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.12)' }}
          >
            <div className="ai-original-image-empty" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 18, textAlign: 'center' }}>
              <span style={{ width: 48, height: 48, borderRadius: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,.28)', color: 'var(--ink-dim)', fontSize: 24 }}>＋</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '.04em', color: 'var(--ink-faint)', lineHeight: 1.4 }}>{item.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'rgba(255,255,255,.28)' }}>拖入或点击上传</span>
            </div>
          </figure>
        );
      })}
    </div>
  );
}

function AiBadge({ index = 0, number, symbol, keyword, style }) {
  return <span data-ai-badge data-ai-badge-number={number || String(index + 1).padStart(2, '0')} data-ai-badge-symbol={symbol || '◆'} data-ai-badge-keyword={keyword || 'KPI'} style={style}>{number || String(index + 1).padStart(2, '0')}</span>;
}

function SelectionBox() {
  const tick = (style) => <div style={{ position: 'absolute', width: 18, height: 18, border: '3px solid var(--mint)', ...style }} />;
  return (
    <div className="ai-original-selection" style={{ position: 'absolute', inset: '-22px -16px', border: '2px solid var(--mint)', pointerEvents: 'none' }}>
      {tick({ top: -10, left: -10, borderRight: 'none', borderBottom: 'none' })}
      {tick({ top: -10, right: -10, borderLeft: 'none', borderBottom: 'none' })}
      {tick({ bottom: -10, left: -10, borderRight: 'none', borderTop: 'none' })}
      {tick({ bottom: -10, right: -10, borderLeft: 'none', borderTop: 'none' })}
    </div>
  );
}

function Watermark({ text }) {
  return (
    <div className="watermark" data-ai-toggle="showWatermark">
      {Array.from({ length: 4 }, (_, i) => <span key={i} style={{ top: i * 300 - 40, left: -120 + (i % 2) * 160 }}>{`${text} · ${text} · ${text} · `}</span>)}
    </div>
  );
}

function segmentGradient(items) {
  const total = items.reduce((sum, item) => sum + item.amt, 0);
  let acc = 0;
  return `conic-gradient(${items.map((item) => {
    const start = (acc / total) * 360;
    acc += item.amt;
    const end = (acc / total) * 360;
    return `${item.color} ${start}deg ${end}deg`;
  }).join(',')})`;
}

function cssVars(defaults) {
  return Object.fromEntries(Object.entries(defaults || {}).map(([key, value]) => [`--ai-${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`, value]));
}
