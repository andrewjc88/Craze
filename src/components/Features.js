import React from 'react';
import styled from 'styled-components';
import icon1 from '../images/FeatureIcons/icon1.png'
import icon2 from '../images/FeatureIcons/icon2.png'
import icon3 from '../images/FeatureIcons/icon3.png'
import icon4 from '../images/FeatureIcons/icon4.png'
import icon5 from '../images/FeatureIcons/icon5.png'
import icon6 from '../images/FeatureIcons/icon6.png'

const Features = () => {
  return (

    <SectionWrapper>
      <h1>Craze Features</h1>
      <p>Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriure accusam. Eros admodum intellegat ex mea, mei wisi nullam ne, qui cu aliquid nominavi. Est habemus maiestatis ut. Vim quod elitr interesset ea.</p>
      <FeaturesWrapper>
        <Feature>
          <FeatureIcon src={icon1} alt="" />
          <h2>Flat Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla.</p>
          <LnH/> 
        </Feature>
        <LnV />
        <Feature>
          <FeatureIcon src={icon2} alt="" />
          <h2>Marketable</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla.</p>
          <LnH/> 
        </Feature>
        <LnV />
        <Feature>
          <FeatureIcon src={icon3} alt="" />
          <h2>Edit Photos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla.</p>
          <LnH/> 
        </Feature>
        <Feature>
          <FeatureIcon src={icon4} alt="" />
          <h2>Edit Colors</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla.</p>

        </Feature>
        <LnV />
        <Feature>
          <FeatureIcon src={icon5} alt="" />
          <h2>User Friendly</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla.</p>
        </Feature>
        <LnV />
        <Feature>
          <FeatureIcon src={icon6} alt="" />
          <h2>100% Editable</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla.</p>
        </Feature>
      </FeaturesWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  padding: 4em 1em;
  text-align: center;
  display: flex;
  max-width: 60em;
  margin: auto;
  flex-direction: column;
  justify-content: center;
`;

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: #e5e5e5; */
  margin: 0em 0em;
  flex-direction: row;
  flex-wrap: wrap;  

`;

const Feature = styled.div`
  width: 32%;
  padding: 2em 0em;
  p {
    margin: 0em 1em;
  }
  @media (max-width: 800px) {
    width: 49%;
    p {
      margin: .3em;
    }
  }
`;

const FeatureIcon = styled.img`
  margin: .8em;
`;

const LnV = styled.div`
  margin: auto;
  width: .1em;
  position: relative;
  height: 10em;
  background-color: #e5e5e5;
  @media (max-width: 800px) {
    display: none;
  }
`;

const LnH = styled.div`
  margin: auto;
  width: 75%;
  height: .1em;
  background-color: #e5e5e5;
  position: relative;
  top: 2.5em;
  @media (max-width: 800px) {
    display: none;
  }
`;

export default Features;