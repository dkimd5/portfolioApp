import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique aliquam est, a ullamcorper nisi interdum quis. Etiam pulvinar eleifend odio, in mollis arcu tempor.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;