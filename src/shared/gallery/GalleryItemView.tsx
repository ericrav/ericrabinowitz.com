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

const thumbnailSize = 108;

export const GalleryItemView: React.FC<Props> = ({
  item,
  i,
  active,
  setActive,
}) => {
  let content: JSX.Element | null = null;

  if (isVimeo(item)) {
    content = (
      <Vimeo
        key={item.vimeo}
        url={item.vimeo}
      />
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

  if (i === active) {
    return <div>{content}</div>;
  }

  const position = i < active
    ? css({
      right: '100%',
      marginRight: 16,
      bottom: (active - i - 1) * (thumbnailSize + 16),
    })
    : css({
      left: '100%',
      top: (i - active - 1) * (thumbnailSize + 16),
      marginLeft: 16,
    });

  return (
    <button
      type='button'
      onClick={() => setActive(i)}
      css={[
        position,
        {
          position: 'absolute',
          width: thumbnailSize,
          height: thumbnailSize,
          borderRadius: 3,
          overflow: 'hidden',
        },
      ]}
    >
      {content}
    </button>
  );
};
