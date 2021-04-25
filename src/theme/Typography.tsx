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
        textShadow: '-1px 2px 4px rgba(80, 115, 104, 0.2)',
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
        lineHeight: '1.2',
      },
      a: {
        fontSize: '1.4rem',
      },
    }}
  />
);
