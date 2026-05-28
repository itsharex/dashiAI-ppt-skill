import React from 'react';
import { SlideShell } from '../shell/index.jsx';

const mascotPaths = {
  cloud: 'M22 62 C8 62 8 42 22 40 C18 22 42 14 50 28 C58 14 82 22 78 40 C92 42 92 62 78 62 Z',
  drop: 'M50 8 C30 36 18 52 18 68 C18 84 32 94 50 94 C68 94 82 84 82 68 C82 52 70 36 50 8 Z',
  star: 'M50 8 C54 30 60 36 82 40 C60 44 54 50 50 72 C46 50 40 44 18 40 C40 36 46 30 50 8 Z M86 70 C74 72 70 76 68 88 C66 76 62 72 50 70 C62 68 66 64 68 52 C70 64 74 68 86 70 Z',
  heart: 'M50 86 C22 68 8 52 8 34 C8 20 20 10 32 10 C40 10 46 14 50 22 C54 14 60 10 68 10 C80 10 92 20 92 34 C92 52 78 68 50 86 Z',
  flower: 'M50 6 C60 6 64 14 70 14 C78 14 86 22 86 30 C86 36 94 40 94 50 C94 60 86 64 86 70 C86 78 78 86 70 86 C64 86 60 94 50 94 C40 94 36 86 30 86 C22 86 14 78 14 70 C14 64 6 60 6 50 C6 40 14 36 14 30 C14 22 22 14 30 14 C36 14 40 6 50 6 Z',
};

export function Style1Slide({ layout, tone = 'light', className = '', children }) {
  return (
    <SlideShell layout={layout} tone={tone} animate="cascade" className={`style1-slide ${className}`.trim()}>
      {children}
    </SlideShell>
  );
}

export function Aura({ tone }) {
  return <div className={`st1-aura-wrap ${tone}`}><div /></div>;
}

export function GridBg() {
  return <div className="st1-grid-bg" />;
}

export function Wordmark() {
  return (
    <div className="st1-wordmark">
      <LogoMark />
      <span>果冻研究所</span>
    </div>
  );
}

export function LogoMark() {
  return (
    <svg className="st1-mark" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 8 C64 8 78 14 84 28 C94 32 94 56 84 60 C78 78 60 86 50 86 C36 86 22 78 16 60 C6 56 6 32 16 28 C22 14 36 8 50 8 Z" fill="currentColor" />
      <path d="M39 29 H66 V39 H52 V60 C52 70 46 76 36 76 C31 76 27 75 23 72 L27 62 C30 65 33 66 36 66 C41 66 43 63 43 58 V39 H39 Z" fill="var(--st1-paper)" />
    </svg>
  );
}

export function Mascot({ kind, className = '' }) {
  const path = mascotPaths[kind] || mascotPaths.cloud;
  const eyeY = kind === 'drop' ? 60 : kind === 'flower' ? 46 : kind === 'heart' || kind === 'star' ? 38 : 44;
  const pupilY = eyeY + 2;
  return (
    <svg className={`st1-mascot ${className}`.trim()} viewBox="0 0 100 100" aria-hidden="true">
      <path d={path} fill="currentColor" />
      <ellipse cx="40" cy={eyeY} rx="6" ry="7" fill="#fff" />
      <ellipse cx="60" cy={eyeY} rx="6" ry="7" fill="#fff" />
      <ellipse cx="41" cy={pupilY} rx="2.6" ry="3.2" fill="var(--st1-ink)" />
      <ellipse cx="61" cy={pupilY} rx="2.6" ry="3.2" fill="var(--st1-ink)" />
    </svg>
  );
}
