import React from 'react';
import styled from 'styled-components';
import VideoImg from '../images/video.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Chevron from '@fortawesome/fontawesome-free-solid/faChevronRight';
import ReactPlayer from 'react-player';


const About = () => {
  return (
    <AboutBackgorund>
      <AboutWrapper >
        <LeftContentWrapper>
          <h1>Whats Craze all About?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla nisl congue congue. Maecenas nec condimentum libero, at elementum mauris. </p>
          <p>Phasellus eget nisi dapibus, ultricies nisl at, hendrerit risusuis ornare luctus id sollicitudin ante lobortis at.</p>
          <FontAwesomeIcon size='1x' icon={Chevron} />
          <span>Lorem ipsum dolor sit amet</span> <br />
          <FontAwesomeIcon size='1x' icon={Chevron} />
          <span>Lorem ipsum dolor sit amet consectetur elt</span>
        </LeftContentWrapper>
        <VideoWrapper>
          <ReactPlayer
            height='100%'
            width='100%'
            url='https://vimeo.com/54399510'
          />
        </VideoWrapper>
      </AboutWrapper>
    </AboutBackgorund>
  );
};

const AboutBackgorund = styled.div`
  background-color: #e7e7e7;
  padding: 4em;
  @media (max-width: 600px ){
    padding: 4em 2em;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  text-align: left;
  margin: auto;
  max-width: 60em;
  flex-direction: row;
  align-content: space-between;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px ){
    flex-direction: column;
  }
`;

// const Chev = styled.div`
//   position: realtive;
//   overflow: hidden;
//   border-top: .25em solid black;
//   border-right: .25em solid black;
//   transform: rotate(45deg);
//   height: .4em;
//   width: .4em;
//   margin-right: .5em;
// `;

const LeftContentWrapper = styled.div`
  max-width: 33em;
  
  h1 {
    text-align: left;
  }
  p {
    text-align: left;
  }
  span {
    margin-left: .5em;
    font-family: "Helvetica Neue", "Nimbus Sans", sans-serif;
    vertical-align: text-text-bottom;
    color: #848484;
  }
  @media (max-width: 980px ){
    margin: auto;
    max-width: 45em;
    h1 {
      text-align: center;
    }
  }

`;

const VideoWrapper = styled.div`
  border-radius: .7em;
  overflow: hidden; 
  margin-left: 2em;
  width: 27em;
  height: 11.4em;
  align-content: center;
  justify-content: center;
  @media (max-width: 980px ) {
    margin: 4em auto 0em;
  }
  @media (max-width: 600px) {
    
    width: 15.4em;
    height: 6.5em;
  }
`;



export default About;