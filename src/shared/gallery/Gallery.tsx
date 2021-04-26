/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import { GalleryItem } from '../../ProjectContent';
import { GalleryItemView } from './GalleryItemView';

interface Props {
  items: GalleryItem[];
}

export const Gallery: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div
      css={{
        padding: '1rem',
        maxWidth: 1000,
        boxSizing: 'content-box',
        margin: '2em auto 0',
        position: 'relative',
        height: 630,
        '@media (max-width: 1000px)': {
          marginBottom: 88,
          height: 320,
        },
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
