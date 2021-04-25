/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { css } from '@emotion/react';

import { isVimeo, isImage, GalleryItem } from '../../ProjectContent';
import { GalleryImage } from './GalleryImage';
import { Vimeo } from './Vimeo';

interface Props {
  item: GalleryItem;
  i: number;
  active: number;
  setActive: (i: number) => void;
}

const thumbnailSize = 72;
const thumbnailMargin = 8;

const activeStyle = css({
  transition: 'all 0.2s',
  position: 'absolute',
  top: 0,
  left: thumbnailSize + thumbnailMargin,
  height: '100%',
  width: `calc(100% - ${(thumbnailSize + thumbnailMargin) * 2}px)`,

  '@media (max-width: 1000px)': {
    left: 0,
    width: '100%',
  },
});

export const GalleryItemView: React.FC<Props> = ({
  item,
  i,
  active,
  setActive,
}) => {
  let content: JSX.Element | null = null;

  if (isVimeo(item)) {
    content = i === active ? (
      <Vimeo
        key={item.vimeo}
        url={item.vimeo}
      />
    ) : (
      <div
        css={{
          background: 'rgba(0,0,0,0.67)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          css={{
            width: 32,
            height: 32,
            fill: 'white',
          }}
          viewBox='0 0 20 20'
          preserveAspectRatio='xMidYMid'
          focusable='false'
          aria-labelledby='play-icon-title'
          role='img'
        >
          <title id='play-icon-title'>Play</title>
          <polygon
            className='fill'
            points='1,0 20,10 1,20'
          />
        </svg>
      </div>
    );
  }

  if (isImage(item)) {
    content = (
      <GalleryImage
        key={item.image}
        src={item.image}
        width={item.width}
        height={item.height}
      />
    );
  }

  const position = i < active
    ? css({
      top: `calc(100% - ${thumbnailSize + (active - i - 1) * (thumbnailSize + thumbnailMargin)}px)`,
      left: 0,
    })
    : css({
      top: (i - active - 1) * (thumbnailSize + thumbnailMargin),
      left: `calc(100% - ${thumbnailSize}px)`,
    });

  return (
    <div
      role='button'
      onClick={() => setActive(i)}
      css={
        i === active
          ? activeStyle
          : [
            position,
            {
              transition: 'all 0.2s',
              cursor: 'pointer',
              position: 'absolute',
              width: thumbnailSize,
              height: thumbnailSize,
              borderRadius: 3,
              overflow: 'hidden',
              '@media (max-width: 1000px)': {
                top: '100%',
                left: i * (thumbnailSize + thumbnailMargin),
                marginTop: thumbnailMargin,
              },
            },
          ]
      }
    >
      {content}
    </div>
  );
};
