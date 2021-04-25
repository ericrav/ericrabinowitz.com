import { Waveform } from '../shared/waveform/Waveform';
import { Link } from '../theme/components/Link';
import { Section } from '../theme/components/Section';

export const Intro: React.FC = () => (
  <>
    <Waveform frequency={110}>
      <h1>Eric Rabinowitz</h1>
    </Waveform>

    <Section>
      <p>NYC-based creative developer</p>
    </Section>
    <Section>
      <h3>Contact</h3>
      <ul>
        <li>
          <Link href='mailto:er@ericrabinowitz.com'>
            er@ericrabinowitz.com
          </Link>
        </li>
        <li>
          <Link href='http://github.com/ericrav'>github.com/ericrav</Link>
        </li>
        <li>
          <Link href='http://twitter.com/ericrav'>twitter.com/ericrav</Link>
        </li>
      </ul>
    </Section>
  </>
);
