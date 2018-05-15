import React from 'react';
import styled from 'styled-components';
// import VideoImg from '../images/video.png';
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
          <span>Lorem ipsum dolor sit amet</span> <br/>
          
          <Chev/><span>Lorem ipsum dolor sit amet consectetur elt</span> 
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
`;

const AboutWrapper = styled.div`
  display: flex;
  margin: auto;
  display: flex;
  text-align: left;
  max-width: 60em;
  flex-direction: row;
  align-content: space-between;
  justify-content: center;
  align-content: center;
  @media (max-width: 980px ){
    flex-direction: column;
  }
`;

const Chev = styled.div`
  position: realtive;
  overflow: hidden;
  border-top: .25em solid black;
  border-right: .25em solid black;
  transform: rotate(45deg);
  height: .4em;
  width: .4em;
  margin-right: .5em;
`;

const LeftContentWrapper = styled.div`
  max-width: 33em;
  h1 {
    text-align: left;
  }
  p {
    text-align: left;
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
  @media (max-width: 980px ){
    margin: 0em;
    margin-top: 2em;
    height: 20em;
  }
`;



export default About;