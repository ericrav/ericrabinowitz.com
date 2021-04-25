import { Global } from '@emotion/react';

export const Colors: React.FC = () => (
  <Global
    styles={{
      body: {
        '--text-color': '#544e63',
        '--heading-color': '#507368',
        '--bg-color': '#F2F0D5',
        background: 'var(--bg-color)',
        color: 'var(--text-color)',
      },
    }}
  />
);

Colors.displayName = 'Colors';
