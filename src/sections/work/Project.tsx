import { ProjectContent } from '../../ProjectContent';
import { CtaLink } from '../../theme/components/CtaLink';
import { Section } from '../../theme/components/Section';

export const Project: React.FC<ProjectContent> = ({
  title,
  description,
}) => (
  <Section>
    <h3>{title}</h3>
    <CtaLink href='https://storybooth.us/'>View Website</CtaLink>
    <p>{description}</p>
  </Section>
);
