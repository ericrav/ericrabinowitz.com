import { Global } from '@emotion/react';

export const Typography: React.FC = () => (
  <Global
    styles={{
      body: {
        '--font': '"henriette",sans-serif',
        fontFamily: 'var(--font)',
        fontSize: 16,
      },

      'h1, h2, h3': {
        fontWeight: 700,
      },

      'h1, h2': {
        color: 'var(--heading-color)',
        textShadow: '-1px 2px 2px rgba(80, 115, 104, 0.1)',
      },

      h1: {
        fontSize: '4rem',
      },
      h2: {
        fontSize: '3.2rem',
      },
      h3: {
        fontSize: '2.1rem',
        fontStyle: 'italic',
      },

      p: {
        fontSize: '1.4rem',
        lineHeight: '1.4',
      },
      a: {
        fontSize: '1.4rem',
      },

      '@media (max-width: 45em)': {
        h1: {
          fontSize: '2.5rem',
        },
        h2: {
          fontSize: '2.2rem',
        },
        h3: {
          fontSize: '1.8rem',
        },
        'p, a': {
          fontSize: '1.2rem',
        },
      },
    }}
  />
);
