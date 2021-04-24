import { Global } from '@emotion/react';

export const Colors: React.FC = () => (
  <Global
    styles={{
      body: {
        '--text-color': '#544e63',
        '--bg-color': '#FFFFFA',
        background: 'var(--bg-color)',
        color: 'var(--text-color)',
      },
    }}
  />
);

Colors.displayName = 'Colors';
