import React from 'react';
import { SlideShell } from '../shell/index.jsx';

export function Style2Slide({ layout, tone = 'dark', className = '', children }) {
  return (
    <SlideShell layout={layout} tone={tone} animate="cascade" className={`style2-slide ${className}`.trim()}>
      {children}
    </SlideShell>
  );
}

export function CornerMeta({ pos, children, muted = false }) {
  return <div className={`st2-corner ${pos} ${muted ? 'muted' : ''}`.trim()}>{children}</div>;
}

export function Frame({ children, className = '' }) {
  return <div className={`st2-frame ${className}`.trim()}>{children}</div>;
}
