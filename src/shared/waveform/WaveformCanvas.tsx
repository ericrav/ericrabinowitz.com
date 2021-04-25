import { useRef } from 'react';

import { useWaveformGL } from './useWaveformGL';

interface Props {
  className?: string;
  frequency: number;
}

export const WaveformCanvas: React.FC<Props> = ({ className, frequency }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useWaveformGL(ref, frequency);

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
