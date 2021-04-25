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
    {projects.map((project, i) => (
      <>
        <Project
          key={project.title}
          {...project}
        />
        {i !== projects.length - 1 && (
          <p
            css={{
              textAlign: 'center', margin: '4rem auto 4.8rem', fontWeight: 700, opacity: 0.5, fontSize: '1.5rem',
            }}
          >
            ~
          </p>
        )}
      </>
    ))}
  </>
);

Work.displayName = 'Work';
