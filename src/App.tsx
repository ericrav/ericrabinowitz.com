import { ProjectContent } from './ProjectContent';
import { Endnotes } from './sections/Endnotes';
import { Intro } from './sections/Intro';
import { Work } from './sections/work/Work';
import { ThemeRoot } from './theme/ThemeRoot';
import { Container } from './theme/components/Container';

interface Props {
  lastUpdated: string;
  projects: ProjectContent[];
}

export const App: React.FC<Props> = ({ lastUpdated, projects }) => (
  <>
    <ThemeRoot />
    <Container>
      <Intro />
      <Work projects={projects} />
      <Endnotes lastUpdated={lastUpdated} />
    </Container>
  </>
);

App.displayName = 'App';
