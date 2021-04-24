import { WaveformCanvas } from './WaveformCanvas';

export const Waveform: React.FC = ({ children }) => (
  <div
    css={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '12rem',
    }}
  >
    <div
      css={{
        position: 'relative',
        zIndex: 10,
      }}
    >
      {children}
    </div>
    <WaveformCanvas
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    />
  </div>
);
