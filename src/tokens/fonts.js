function fontSet(label, vars) {
  return {
    label,
    vars: {
      '--sans': vars.body,
      '--sans-zh': vars.body,
      '--mono': vars.number,
      '--font-title-zh': vars.title,
      '--font-body-zh': vars.body,
      '--font-number': vars.number,
      '--font-display': 'var(--font-title-zh)',
      '--font-heading': 'var(--font-title-zh)',
      '--font-body': 'var(--font-body-zh)',
      '--serif-en': 'var(--font-title-zh)',
      '--serif-body-en': 'var(--font-body-zh)',
      '--serif-zh': 'var(--font-title-zh)',
      '--weight-display': vars.displayWeight,
      '--weight-heading': vars.headingWeight,
      '--weight-strong': vars.strongWeight,
      '--weight-body': vars.bodyWeight,
      '--ls-display': '0',
      '--ls-heading': '0',
    },
  };
}

export const FONT_OPTIONS = {
  cnReport: fontSet('标题字中文: 苹方 / 正文: 苹方 / 数字字体: DIN', {
    title: '"PingFang SC","Noto Sans SC","Source Han Sans SC","Microsoft YaHei",sans-serif',
    body: '"PingFang SC","Noto Sans SC","Source Han Sans SC","Microsoft YaHei",sans-serif',
    number: '"DIN Alternate","Avenir Next Condensed","Inter","Helvetica Neue",Arial,sans-serif',
    displayWeight: '300',
    headingWeight: '500',
    strongWeight: '700',
    bodyWeight: '400',
  }),
  cnEditorial: fontSet('标题字中文: 宋体 / 正文: 思源黑体 / 数字字体: Georgia', {
    title: '"Songti SC","Noto Serif SC","Source Han Serif SC","STSong",serif',
    body: '"Noto Sans SC","Source Han Sans SC","PingFang SC","Microsoft YaHei",sans-serif',
    number: 'Georgia,"Times New Roman","DIN Alternate",serif',
    displayWeight: '600',
    headingWeight: '500',
    strongWeight: '700',
    bodyWeight: '400',
  }),
  cnStrong: fontSet('标题字中文: 思源黑体 Heavy / 正文: 苹方 / 数字字体: Avenir', {
    title: '"Noto Sans SC","Source Han Sans SC","Microsoft YaHei UI","Microsoft YaHei","PingFang SC",sans-serif',
    body: '"PingFang SC","Noto Sans SC","Source Han Sans SC","Microsoft YaHei",sans-serif',
    number: '"Avenir Next Condensed","DIN Alternate","Inter","Helvetica Neue",Arial,sans-serif',
    displayWeight: '800',
    headingWeight: '700',
    strongWeight: '800',
    bodyWeight: '400',
  }),
};

export const DEFAULT_FONT = 'cnReport';
