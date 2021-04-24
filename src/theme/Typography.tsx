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
        color: 'var(--heading-color)',
      },

      h1: {
        fontSize: '4rem',
      },
    }}
  />
);
