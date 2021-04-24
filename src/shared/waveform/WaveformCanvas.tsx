import { useRef } from 'react';

import { useWaveformGL } from './useWaveformGL';

interface Props {
  className?: string;
}

export const WaveformCanvas: React.FC<Props> = ({ className }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useWaveformGL(ref);

  return (
    <canvas
      className={className}
      css={{
        width: '100%',
        height: '100%',
      }}
      ref={ref}
    />
  );
};
