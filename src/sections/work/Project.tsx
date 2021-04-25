import { ProjectContent } from '../../ProjectContent';
import { Gallery } from '../../shared/gallery/Gallery';
import { CtaLink } from '../../theme/components/CtaLink';
import { Section } from '../../theme/components/Section';

export const Project: React.FC<ProjectContent> = ({
  title,
  link,
  description,
  gallery,
}) => (
  <>
    {gallery && <Gallery items={gallery} />}
    <Section>
      <script src='https://player.vimeo.com/api/player.js' />
      <h3>{title}</h3>
      {link && (
        <CtaLink href={link.url}>{link.text}</CtaLink>
      )}
      <p>{description}</p>
    </Section>
  </>
);
