interface Props {
  href: string;
}

export const CtaLink: React.FC<Props> = ({ href, children }) => (
  <a
    target='_blank'
    href={href}
    rel='noreferrer'
    css={{
      display: 'inline-block',
      borderBottom: '1px solid var(--link-color)',
      boxShadow: 'inset 0 -4px 0 var(--link-color)',
      background: 'var(--link-color)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '1.3rem',
      margin: '0.1em 0',
      fontStyle: 'italic',
    }}
  >
    {children}
  </a>
);
