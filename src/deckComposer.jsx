import { DEFAULT_FONT, DEFAULT_SPACING, DEFAULT_THEME, DEFAULT_TYPE_SCALE, slide } from './options.jsx';

export const ROLE_LAYOUTS = {
  cover: 'bt01',
  statement: 'bt02',
  context: 'bt03',
  process: 'bt04',
  breakdown: 'bt05',
  metrics: 'bt06',
  transition: 'bt07',
  result: 'bt08',
  risks: 'bt09',
  observation: 'bt10',
  actions: 'bt11',
  closing: 'bt12',
};

export function composeDeck(spec = {}) {
  const goal = spec.goal || spec.title || '主题汇报';
  const title = spec.title || goal;
  const slides = (spec.slides?.length ? spec.slides : defaultSlides({ ...spec, goal, title }))
    .map(page => {
      const layout = page.layout || ROLE_LAYOUTS[page.role];
      return slide(layout, page.props || {});
    });

  return {
    style: 'swiss',
    theme: spec.theme || inferTheme(goal) || DEFAULT_THEME,
    fontSet: spec.fontSet || DEFAULT_FONT,
    typeScale: spec.typeScale || DEFAULT_TYPE_SCALE,
    spacing: spec.spacing || DEFAULT_SPACING,
    title,
    slides,
  };
}

function inferTheme(goal) {
  if (/(浅色|白底|明亮|教育|培训)/.test(goal)) return 'light';
  if (/(品牌|发布|上市|营销|活动|多色|多彩)/.test(goal)) return 'colorful';
  return 'dark';
}

function defaultSlides({ title, goal, audience = '目标受众', owner = '项目团队' }) {
  return [
    {
      role: 'cover',
      props: {
        titleTop: title.slice(0, 12),
        titleAlt: '目标',
        titleBottom: '呈现',
        captions: [
          ['Goal', goal],
          ['Audience', audience],
          ['Owner', owner],
        ],
      },
    },
    {
      role: 'statement',
      props: {
        accent: '核心判断',
        quote: [`${goal}`, '需要被压缩成一条清晰主线。'],
        body: [`面向${audience}，这份 deck 会优先呈现目标、依据、关键动作和下一步。`, '每一页只承载一个主要信息角色。'],
        strong: '目标、依据、关键动作和下一步',
      },
    },
    {
      role: 'context',
      props: {
        accent: '背景与现状',
        figureTitle: ['关键背景', '与当前状态'],
        title: ['先建立共识，', '再进入方案。'],
        body: [`围绕“${goal}”补充必要背景，说明为什么现在需要讨论这件事。`, '左侧图片位可由用户在预览页替换。'],
        captions: [
          ['Context', '背景'],
          ['Signal', '信号'],
          ['Question', '问题'],
        ],
      },
    },
    {
      role: 'process',
      props: {
        accent: '推进路径',
        title: '用四步拆解目标。',
        stages: [
          ['STEP 01', '目标定义', '明确最终要达成什么。\n统一判断标准。'],
          ['STEP 02', '现状盘点', '整理已有基础和约束。\n识别关键缺口。'],
          ['STEP 03', '方案组合', '选择可执行动作。\n形成优先级。'],
          ['STEP 04', '交付结果', '沉淀呈现材料。\n进入评审或交付。'],
        ],
      },
    },
    {
      role: 'metrics',
      props: {
        accent: '关键指标',
        title: '用指标支撑判断。',
        chartRows: [
          ['目标清晰度', 92, 'focus'],
          ['信息完整度', 78],
          ['执行确定性', 66],
          ['风险可控度', 58],
        ],
      },
    },
    {
      role: 'actions',
      props: {
        accent: '行动建议',
        title: '一个重点，三个支撑动作。',
        apps: [
          ['01', '先定主线', '把复杂目标压缩成一句可复述的核心判断。', true],
          ['02', '补齐证据', '为每个判断准备数据、案例或现场材料。'],
          ['03', '明确取舍', '删掉不服务主线的内容，避免页面失焦。'],
          ['04', '交付版本', '导出静态 HTML，作为最终可打开的呈现页面。'],
        ],
      },
    },
    {
      role: 'closing',
      props: {
        titleTop: '最终',
        titleAlt: '交付',
        titleMiddle: '静态',
        titleBottom: '页面',
        body: ['下一步可以替换图片、调整主题字体，', '再导出 index.html。'],
        inline: 'index.html',
      },
    },
  ];
}
