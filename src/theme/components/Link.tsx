interface Props {
  href: string;
}

export const Link: React.FC<Props> = ({ href, children }) => (
  <a
    target='_blank'
    href={href}
    rel='noreferrer'
    css={{
      borderBottom: '1px solid var(--link-color)',
      boxShadow: 'inset 0 -4px 0 var(--link-color)',
      transition: 'background 0.3s ease-out',

      '&:hover': {
        background: 'var(--link-color)',
      },
    }}
  >
    {children}
  </a>
);
