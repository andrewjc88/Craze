import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faApple from '@fortawesome/fontawesome-free-brands/faApple';
import faAndroid from '@fortawesome/fontawesome-free-brands/faAndroid';
import faWindows from '@fortawesome/fontawesome-free-brands/faWindows';
import CrazeLogo from '../images/CrazeLogo.png';
import Phone from '../images/phone.png';
import BgTile from '../images/BgTile.png';

const Intro = () => {
  return (
    <SectionBackground>
      <SectionWrapper>
        <LeftContentWrapper>
          <Logo src={CrazeLogo} alt="Craze logo."/>
          <HeaderText>A great new free psd theme to showcase your new app.</HeaderText>
          <IconsWrapper>
            <Icon>
              <FontAwesomeIcon size='2x' icon={faApple} />
            </Icon>
            <Icon>
              <FontAwesomeIcon size='2x' icon={faAndroid} />
            </Icon>
            <Icon>
              <FontAwesomeIcon size='2x' icon={faWindows} />
            </Icon>
          </IconsWrapper>
        </LeftContentWrapper>
        <PhoneImg>
          <img src={Phone} alt="phone"/>
        </PhoneImg>
      </SectionWrapper>
    </SectionBackground>
  );
};

const SectionBackground = styled.div`
  background-image: url(${BgTile});
  background-repeat: repeat;
`;

const SectionWrapper = styled.div`
  display: flex;
  max-width: 60em;
  margin: auto;
  padding: 0em 2em;
  justify-content: space-between;
  flex-direction: row;
  align-content: left;
  @media ( max-width:700px ){
    flex-direction: column;
    padding-top: 3em;
  }
`;

const LeftContentWrapper = styled.div`
  display: flex;
  max-width: 25em;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-right: 2em;
  @media ( max-width:700px ){
    margin: auto;
    align-items: center;
  }
`;

const Logo = styled.div`
  height: 5em;
  width: 11em;
  background-image: url(${CrazeLogo});
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow( .2em .3em 0em rgba(0, 1, 1, 0.25));
  @media ( max-width:700px ){
    margin: auto;
  }
`;

const HeaderText = styled.h3`
  font-size: 1.2em;
  font-family: "Helvetica Neue";
  color: #fff;
  line-height: 1.5;
  text-align: left;
  text-shadow: 2px 3.464px 0px rgba(0, 1, 1, 0.25);
  @media ( max-width:700px ){
    text-align: center;
  }
  `;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 15em;
  justify-content: left;
  align-content: space-between;
  @media ( max-width:700px ){
    justify-content: center;
    margin: 0em auto ;
  }
`;

const Icon = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: white;
  width: 3em;
  height: 3em;
  text-align: center;
  margin: .3em;
  background-color: #000;
  border-radius: 2em;
  opacity: .5;
  &:hover {
    opacity: 1;
  }
`;

const PhoneImg = styled.div`
  padding-top: 2em;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width:700px){
    margin: 0em 20% ;
  }
`;

export default Intro;