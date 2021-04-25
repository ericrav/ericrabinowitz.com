import { Endnotes } from './sections/Endnotes';
import { Intro } from './sections/Intro';
import { Work } from './sections/work/Work';
import { ThemeRoot } from './theme/ThemeRoot';
import { Container } from './theme/components/Container';

interface Props {
  lastUpdated: string;
}

export const App: React.FC<Props> = ({ lastUpdated }) => (
  <>
    <ThemeRoot />
    <Container>
      <Intro />
      <Work />
      <Endnotes lastUpdated={lastUpdated} />
    </Container>
  </>
);

App.displayName = 'App';
