import React from 'react';
import { SlideShell } from '../shell/index.jsx';

export function HtmlFxSlide({ layout, className = '', children }) {
  return (
    <SlideShell layout={layout} tone="dark" animate="cascade" className={`hfx-slide ${className}`.trim()}>
      {children}
    </SlideShell>
  );
}

export function Star4({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <path d="M50 0 L56 44 L100 50 L56 56 L50 100 L44 56 L0 50 L44 44 Z" />
    </svg>
  );
}

export function Lines({ lines }) {
  const value = Array.isArray(lines) ? lines : String(lines || '').split('\n');
  return (
    <>
      {value.map((line, index) => (
        <React.Fragment key={`${line}-${index}`}>
          {line}
          {index < value.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
    </>
  );
}
