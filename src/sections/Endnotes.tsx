import { Waveform } from '../shared/waveform/Waveform';
import { Link } from '../theme/components/Link';
import { Section } from '../theme/components/Section';

interface Props {
  lastUpdated: number;
}

export const Endnotes: React.FC<Props> = ({ lastUpdated }) => (
  <>
    <Waveform frequency={330}>
      <h2>Endnotes</h2>
    </Waveform>
    <Section>
      <h3>Colophon</h3>
      <p>
        Typeset in
        {' '}
        <Link href='https://www.typejockeys.com/font/henriette'>Henriette</Link>
        {' '}
        from Typejockeys.
      </p>
      <p>
        Built with open-source software from Next.js, React, TypeScript, Emotion,
        and TWGL. The website source code is on
        {' '}
        <Link href='https://github.com/ericrav/ericrabinowitz.com'>GitHub</Link>
        {' '}
        and was last updated
        {' '}
        <Link href='https://github.com/ericrav/ericrabinowitz.com/commits/main'>
          {new Date(lastUpdated).toDateString()}
        </Link>
        .
      </p>
    </Section>
  </>
);
