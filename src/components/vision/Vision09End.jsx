import React from 'react';
import { Corner, LogoMark, Sticker, VisionSlide } from './primitives.jsx';

export function Vision09End() {
  return (
    <VisionSlide layout="VISION-09" className="vision-end">
      <Corner left="// 08 · ONE MORE THING" right="END OF DECK · THX" />
      <div className="vision-sticker-field sparse">
        <Sticker invert>LET'S COOK</Sticker><Sticker>开火</Sticker><Sticker>SKILL ISSUE? NO.</Sticker><Sticker>小灶已上桌</Sticker>
      </div>
      <div className="vision-end-main">
        <div className="kicker">[ SIGNATURE · 片尾 ]</div>
        <h1>我是大师，<br /><span>给你单独开小灶。</span></h1>
        <div className="vision-end-foot">
          <LogoMark small />
          <p>DOUYIN · RED · BILIBILI<br /><span>@大师的AI小灶</span></p>
        </div>
      </div>
    </VisionSlide>
  );
}
