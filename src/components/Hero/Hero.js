import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Deborah Bamidele's <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am a Software with hands on experience in Javascript, Typescript, Node.js, Electron.js, Vue.js, React.js, Nuxt.js, Next.js, React Native, Flutter, Mongodb, Postgresql, Firebase.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;