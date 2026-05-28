import React from 'react';

const placeholderMedia = 'images/placeholder-21x9.svg';

export function MediaFrame({ media, image = {}, ratio = 'r-16x10', slot, caption, className = '', style }) {
  const item = media || image;
  const src = item.src || placeholderMedia;
  const alt = item.alt || caption || 'Layout media';
  const isVideo = item.type?.startsWith?.('video/') || /\.(mp4|webm|mov|m4v|ogg)(\?|#|$)/i.test(src);

  return (
    <figure
      className={`frame-img ${ratio} ${item.position || ''} ${className}`.trim()}
      style={style}
      data-anim
      data-media-slot={slot}
      data-media-kind="image-video"
    >
      {isVideo
        ? <video src={src} muted loop playsInline data-media-slot={slot} />
        : <img src={src} alt={alt} data-image-slot={slot} data-media-slot={slot} />}
      {caption || item.caption ? <figcaption className="img-cap">{caption || item.caption}</figcaption> : null}
    </figure>
  );
}
