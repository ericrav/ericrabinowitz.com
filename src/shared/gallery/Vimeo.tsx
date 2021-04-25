interface Props {
  url: string;
}

export const Vimeo: React.FC<Props> = ({ url }) => (
  <iframe
    src={url}
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    css={{
      background: 'rgba(0,0,0,0.67)',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    }}
    title='Vimeo video of project'
  />
);
