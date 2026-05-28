import React from 'react';
import { QuarterPage } from './primitives.jsx';

export function Report07Q4Retention() {
  return (
    <QuarterPage
      layout="RP07"
      tone="ink"
      eyebrow="Q4 · 10月 - 12月"
      titleTop="留存"
      titleAccent="与扩张。"
      body={['生命周期营销接手售后增长。现有客户扩张 ARR 增至 2.1 倍；', 'NPS 从 34 提升到 52。']}
      meta={[['扩张', '2.1x'], ['NPS', '52'], ['流失', '-3.2百分点']]}
      art="rings"
    />
  );
}

