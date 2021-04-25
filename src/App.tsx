import { Endnotes } from './sections/Endnotes';
import { Intro } from './sections/Intro';
import { Work } from './sections/work/Work';
import { ThemeRoot } from './theme/ThemeRoot';
import { Container } from './theme/components/Container';

export const App: React.FC = () => (
  <>
    <ThemeRoot />
    <Container>
      <Intro />
      <Work />
      <Endnotes />
    </Container>
  </>
);

App.displayName = 'App';
