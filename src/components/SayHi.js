import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import Pinterest from '@fortawesome/fontawesome-free-brands/faPinterestP';
import GooglePlus from '@fortawesome/fontawesome-free-brands/faGooglePlusG';
import Linkedin from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import Youtube from '@fortawesome/fontawesome-free-brands/faYoutube';

const SayHi = () => {
  return (
    <SayHiWrapper>
      <h2>Say Hi & Get in Touch</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse. </p>
      <IconsWrapper>
        <Icon>
          <FontAwesomeIcon size='1x' icon={Twitter} />
        </Icon>
        <Icon>
          <FontAwesomeIcon size='1x' icon={Facebook} />
        </Icon>
        <Icon>
          <FontAwesomeIcon size='1x' icon={Pinterest} />
        </Icon>
        <Icon>
          <FontAwesomeIcon size='1x' icon={GooglePlus} />
        </Icon>
        <Icon>
          <FontAwesomeIcon size='1x' icon={Linkedin} />
        </Icon>
        <Icon>
          <FontAwesomeIcon size='1x' icon={Youtube} />
        </Icon>
      </IconsWrapper>
    </SayHiWrapper>
  );
};

const SayHiWrapper = styled.div`
  padding: 3em 2em;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Icon = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: white;
  width: 2em;
  height: 2em;
  text-align: center;
  margin: .3em;
  background-color: #000;
  border-radius: 2em;
  opacity: .5;
  &:hover {
    opacity: 1;
    background-color: #3498db;
  }
`;

export default SayHi;