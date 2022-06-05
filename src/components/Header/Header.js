import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, SocialIcons, Ahole } from './HeaderStyles';

const Header = () =>  (
  <Container>
 
    <Div2>
      <li>
        <Ahole href="#projects">Projects</Ahole>
      </li>
      <li>
      <Ahole href="#tech">Technologies</Ahole>
      </li>        
      <li>
      <Ahole href="#about">About</Ahole>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/schirmerp?tab=repositories" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/patrick-schirmer-profile/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;