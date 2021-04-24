import { ThemeRoot } from './theme/ThemeRoot';
import { Container } from './theme/components/Container';

export const App: React.FC = () => (
  <>
    <ThemeRoot />
    <Container>
      <h1>Eric Rabinowitz</h1>
    </Container>
  </>
);

App.displayName = 'App';
