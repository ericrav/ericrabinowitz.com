import { Waveform } from '../../shared/waveform/Waveform';
import { Storybooth } from './Storybooth';

export const Work: React.FC = () => (
  <>
    <Waveform frequency={220}>
      <h2>Work</h2>
    </Waveform>
    <Storybooth />
  </>
);

Work.displayName = 'Work';
