import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
}

export const GalleryImage: React.FC<Props> = ({ src }) => (
  <div
    css={{
      // position: 'absolute',
      // height: '100%',
      // width: '100%',
      // left: 0,
      // top: 0,
    }}
  >
    <Image
      src={`/project-images/${src}`}
      layout='fill'
      // width={width}
      // height={height}
      css={{
        objectFit: 'cover',
      }}
    />
  </div>
);
