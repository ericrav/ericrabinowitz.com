import { Waveform } from '../shared/waveform/Waveform';
import { Link } from '../theme/components/Link';
import { Section } from '../theme/components/Section';

export const Endnotes: React.FC = () => (
  <>
    <Waveform frequency={330}>
      <h2>Endnotes</h2>
    </Waveform>
    <Section>
      <h3>Colophon</h3>
      <p>
        Typeset in
        {' '}
        <Link href='https://www.typejockeys.com/font/henriette'>
          Henriette
        </Link>
        {' '}
        from Typejockeys.
      </p>
      <p>
        <Link href='#'>Eric Rabinowitz</Link>
        {' '}
        built this website with Next.js and React. The code for this website is on
        {' '}
        <Link
          href='https://github.com/ericrav'
        >
          GitHub
        </Link>

        and was last updated
        {' '}
        {process.env.VERCEL_GIT_COMMIT_SHA}
        {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
        {process.env.GIT_COMMIT_SHA}
        .
      </p>
    </Section>
  </>
);
