import React from 'react';
import Typewriter from 'typewriter-effect';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import {Img} from './HeroStyles'
import {Imge} from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
    <Img src='https://raw.githubusercontent.com/schirmerp/port/main/src/profile.png'/>
    <Imge src='https://raw.githubusercontent.com/schirmerp/port/main/src/self-flip.jpeg'/>
      <LeftSection>
        <SectionTitle main center>
          Hello my name is Patrick, I am...  <br />
          <Typewriter
            options={{
              strings: ['An aspiring web developer and software engineer', 'A graduate of Per Scholas', 'An AWS Certified Cloud Practitioner', 'The Father of 2 wonderful children', 'Someone who gets things DONE!', 'Passionate and Driven. Focuesd and Ready!'],
              autoStart: true,
              loop: true,
            }}
          />
        </SectionTitle>
        <SectionText>
        AWS Certified, Per Scholas graduate and Proud member of The Odin Project Alumni. Professionally trained with 10 years of management experience. 
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;