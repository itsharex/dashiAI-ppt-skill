import React from 'react';
import { SlideShell } from '../shell/index.jsx';

export function VisionSlide({ layout, inverted = false, children, className = '' }) {
  return (
    <SlideShell layout={layout} tone={inverted ? 'dark' : 'light'} animate="cascade" className={`vision-slide ${inverted ? 'is-inverted' : ''} ${className}`.trim()}>
      <div className="vision-frame">
        <HexTexture />
        {children}
      </div>
    </SlideShell>
  );
}

export function HexTexture() {
  return (
    <div className="vision-hex" aria-hidden="true">
      {Array.from({ length: 14 }, (_, index) => (
        <span key={index}>0F A1 C3 DE 91 B7 42 AI MCP RAG AGENT LOOP SKILL PROMPT TOKEN</span>
      ))}
    </div>
  );
}

export function BracketTitle({ children, size = 'lg' }) {
  return <h1 className={`vision-bracket ${size}`}><span>[</span><b>{children}</b><span>]</span></h1>;
}

export function Corner({ left, right }) {
  return (
    <div className="vision-corners">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export function LogoMark({ small = false }) {
  return (
    <div className={`vision-logo ${small ? 'small' : ''}`}>
      <div className="pot"><span /><i /></div>
      <strong>大师的AI小灶</strong>
      <em>V1.0</em>
    </div>
  );
}

export function Sticker({ children, invert = false, className = '' }) {
  return <span className={`vision-sticker ${invert ? 'invert' : ''} ${className}`.trim()}>{children}</span>;
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
