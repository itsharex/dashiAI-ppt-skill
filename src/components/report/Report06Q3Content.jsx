import React from 'react';
import { QuarterPage } from './primitives.jsx';

export function Report06Q3Content() {
  return (
    <QuarterPage
      layout="RP06"
      tone="amber"
      eyebrow="Q3 · 7月 - 9月"
      titleTop="内容"
      titleAccent="与社区。"
      body={['发布节奏翻倍。上线旗舰长篇研究系列 Practitioner Index，', '并启动首个区域线下活动项目。']}
      meta={[['文章', '184'], ['活动', '22'], ['订阅', '86K']]}
      art="overlap"
    />
  );
}

