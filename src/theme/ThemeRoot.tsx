import { Global } from '@emotion/react';

import { Colors } from './Colors';
import CssReset from './CssReset';
import { Typography } from './Typography';

export const ThemeRoot: React.FC = () => (
  <>
    <CssReset />
    <Colors />
    <Typography />
    <Global
      styles={{
        body: {
          paddingTop: '8rem',
        },
      }}
    />
  </>
);

ThemeRoot.displayName = 'ThemeRoot';
