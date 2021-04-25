import { GalleryItem } from '../../ProjectContent';

interface Props {
  items: GalleryItem[];
}

export const Gallery: React.FC<Props> = ({ items }) => (
  <div css={{ marginBottom: '2em' }}>
    {items.map((item) => (
      <iframe
        src={item.vimeo}
        frameBorder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        allowFullScreen
        css={{
          width: '100%',
          height: 360,
        }}
        title='Vimeo video of project'
      />
    ))}
  </div>
);
