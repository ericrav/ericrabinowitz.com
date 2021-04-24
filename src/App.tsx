import { Waveform } from './shared/waveform/Waveform';
import { ThemeRoot } from './theme/ThemeRoot';
import { Container } from './theme/components/Container';

export const App: React.FC = () => (
  <>
    <ThemeRoot />
    <Container>
      <Waveform>
        <h1>Eric Rabinowitz</h1>
      </Waveform>
    </Container>
  </>
);

App.displayName = 'App';
