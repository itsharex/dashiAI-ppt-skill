import React from 'react';
import { QuarterPage } from './primitives.jsx';

export function Report05Q2Demand() {
  return (
    <QuarterPage
      layout="RP05"
      tone="blue"
      eyebrow="Q2 · 4月 - 6月"
      titleTop="需求"
      titleAccent="引擎。"
      body={['付费、自然增长与生命周期运营统一到同一个漏斗。', 'MQL 数量增长至 3 倍，单商机成本下降 44%。']}
      meta={[['投入', '$1.8M'], ['渠道', '7'], ['单商机成本', '-44%']]}
      art="semi"
    />
  );
}

