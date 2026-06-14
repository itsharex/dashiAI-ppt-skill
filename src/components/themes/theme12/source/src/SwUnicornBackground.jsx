import React from 'react';
import SwImageSlot from './SwImageSlot.jsx';

export const SW_UNICORN_BACKGROUND_CONTROL = {
  key: 'backgroundMode',
  label: '背景替换',
  type: 'segment',
  def: 'unicorn',
  options: [
    { value: 'unicorn', label: '动态' },
    { value: 'media', label: '上传' },
  ],
  desc: '动态 shader 或自定义背景媒体',
};

export function SwBackgroundLayer({ mode = 'unicorn', media = [], onMediaChange = () => {}, fit = 'cover', accent, placeholder, tone = 'dark' }) {
  const value = Array.isArray(media) ? media[0] : media;
  if (!value && mode === 'unicorn') return <SwUnicornBackground accent={accent} />;
  return (
    <SwImageSlot value={value || null} onChange={(s) => onMediaChange(0, s)}
      fit={fit} accent={accent} radius={0} tone={tone} placeholder={placeholder} />
  );
}

export default function SwUnicornBackground({ accent = '#f15a29' }) {
  return (
    <div className="bt-unicorn-frame sw-unicorn-frame"
      data-unicorn-json-file-path="assets/unicorn/tech_background_remix_scene.json"
      data-unicorn-scale="1"
      data-unicorn-dpi="1.5"
      data-unicorn-sdk-url="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.12/dist/unicornStudio.umd.js"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden', background: '#05070b', ['--sw-unicorn-accent']: accent }}>
      <div className="bt-unicorn-scene" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
  );
}
