---
name: guizang-ppt-skill
description: 根据用户目标组合登记组件,生成可离线打开和导出的静态 HTML 横向翻页 PPT。
---

# Guizang PPT Skill

生成一份**静态 HTML 横向翻页 PPT**。React 只作为生成层使用;最终交付是 `index.html` + `assets/motion.min.js`,浏览器直接打开即可。

## 使用目标

当用户调用这个 skill 时,不要只套一个固定 demo。应先理解用户目标,再组合已登记组件:

1. 提炼用户目标: `title`、`goal`、`audience`、`owner`。
2. 选择全局选项: `theme`、`fontSet`、`typeScale`。
3. 选择页面节奏: 从 `role` 或 `layout` 多选一组合页面。
4. 为每页填写 props。
5. 渲染 HTML,把本地预览地址给用户。

## 生成方式

优先使用 JSON 计划文件:

```bash
npm run render:goal -- examples/goal-decks/annual-review.json output/my-deck/ppt/index.html
npm run validate:swiss -- output/my-deck/ppt/index.html
```

JSON 计划结构:

```json
{
  "title": "2026 年度经营复盘",
  "goal": "面向管理层汇报全年经营结果、关键风险和下一年动作",
  "audience": "管理层 / 业务负责人",
  "owner": "战略与经营团队",
  "theme": "dark",
  "fontSet": "cnReport",
  "typeScale": "medium",
  "slides": [
    {"role": "cover", "props": {"titleTop": "2026", "titleAlt": "年度", "titleBottom": "经营复盘"}},
    {"role": "statement", "props": {"accent": "年度判断", "quote": ["今年最重要的变化，", "是增长从规模驱动转向质量驱动。"]}},
    {"role": "closing", "props": {"titleTop": "下一年", "titleAlt": "继续", "titleMiddle": "高质量", "titleBottom": "增长"}}
  ]
}
```

如果 `slides` 为空,`src/deckComposer.jsx` 会根据 `goal` 生成一套默认页序。用户有明确目标时,Agent 应主动写 `slides`,不要依赖默认页序。

## 页面角色

`role` 会映射到当前登记布局:

| role | layout | 用途 |
|---|---|---|
| `cover` | `bt01` | 封面 |
| `statement` | `bt02` | 核心判断 / 大引用 |
| `context` | `bt03` | 图片 + 背景解释 |
| `process` | `bt04` | 四步骤流程 |
| `breakdown` | `bt05` | 图片 + 四点拆解 |
| `metrics` | `bt06` | 图片 + 指标图表 |
| `transition` | `bt07` | 全屏背景转场 |
| `result` | `bt08` | 大数字 + 表格 |
| `risks` | `bt09` | 三栏风险 |
| `observation` | `bt10` | 观察结论 |
| `actions` | `bt11` | 重点行动卡片 |
| `closing` | `bt12` | 收尾页 |

也可以直接用 `layout`,例如 `{"layout":"bt08","props":{...}}`。

## 全局选项

主题:

- `light`: 浅色背景
- `dark`: 深色背景
- `other`: 多色点缀

字体组合:

- `cnReport`: 标题字中文 / 正文 / 数字字体
- `cnEditorial`: 标题字中文 / 正文 / 数字字体
- `cnStrong`: 标题字中文 / 正文 / 数字字体

字号:

- `large`
- `medium`
- `small`

## 图片替换与最终交付

生成后的预览页支持点击图片占位符替换本地图片。控制面板里的 `导出 HTML` 会下载一个新的 `index.html`,其中包含:

- 用户替换后的图片 data URL
- 当前主题、字体、字号、间距选择

这份导出的 HTML 不需要服务器,可以作为最终交付页面。

## 约束

- 不要手写自由 HTML slide,只使用 `role`/`layout` + props。
- 不要临时发明 theme/font/typeScale/layout key;需要新增能力时先登记。
- 输出后必须运行 `validate:swiss`。
- 改动展示 demo 后运行 `npm run showcase:update`。
