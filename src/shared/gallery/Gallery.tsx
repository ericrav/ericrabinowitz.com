/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import { GalleryItem, isImage, isVimeo } from '../../ProjectContent';
import { GalleryImage } from './GalleryImage';
import { GalleryItemView } from './GalleryItemView';
import { Vimeo } from './Vimeo';

interface Props {
  items: GalleryItem[];
}

export const Gallery: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div
      css={{
        padding: '1rem',
        maxWidth: '44rem',
        boxSizing: 'content-box',
        margin: '2em auto 0',
        position: 'relative',
        height: 480,
        background: 'rgba(0,0,0,0.75)',
        borderRadius: 4,
        // overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {items.map((item, i) => (
        <GalleryItemView
          key={i}
          item={item}
          i={i}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
};
