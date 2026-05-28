import React from 'react';
import { QuarterPage } from './primitives.jsx';

export function Report04Q1Brand() {
  return (
    <QuarterPage
      layout="RP04"
      tone="red"
      eyebrow="Q1 · 1月 - 3月"
      titleTop="品牌"
      titleAccent="重启。"
      body={['全新的识别体系、更聚焦的叙事，以及面向规模化的系统。', '11 周内上线 12 个触点。']}
      meta={[['投入', '$480K'], ['团队', '6'], ['上线', '3月4日']]}
      art="bars"
    />
  );
}

