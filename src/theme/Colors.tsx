import { Global } from '@emotion/react';

export const Colors: React.FC = () => (
  <Global
    styles={{
      body: {
        '--text-color': '#544e63',
        '--heading-color': '#287D62',
        '--link-color': '#FAF398',
        '--bg-color': '#FAF9EB',
        background: 'var(--bg-color)',
        color: 'var(--text-color)',
      },
    }}
  />
);

Colors.displayName = 'Colors';
