import { ProjectContent } from '../../ProjectContent';
import { Waveform } from '../../shared/waveform/Waveform';
import { Project } from './Project';

interface Props {
  projects: ProjectContent[];
}

export const Work: React.FC<Props> = ({ projects }) => (
  <>
    <Waveform frequency={220}>
      <h2>Work</h2>
    </Waveform>
    {projects.map((project) => (
      <Project
        key={project.title}
        {...project}
      />
    ))}
  </>
);

Work.displayName = 'Work';
