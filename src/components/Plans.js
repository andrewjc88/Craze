import React from 'react';
import styled from 'styled-components';

const Plans = () => {
  return (
    <PlansBackground>
      <PlansWrapper>
        <h1>Pricing Plans</h1>
        <p>Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriure accusam. Eros admodum intellegat ex mea, mei wisi nullam ne, qui cu aliquid nominavi. Est habemus maiestatis ut. Vim quod elitr interesset ea.</p>
        <CardsWrapper>
          <Card>
            <h2>Basic</h2>
            <CardContent>
              <h1>$19<span>99</span></h1>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
            </CardContent>
            <CardButton>PURCHASE</CardButton>
          </Card>
          <Card>
            <h2>Standard</h2>
            <CardContent>
              <h1>$39<span>99</span></h1>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </CardContent>
            <CardButton>PURCHASE</CardButton>
          </Card>
          <Card>
            <h2>Deluxe</h2>
            <CardContent>
              <h1>$59<span>99</span></h1>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </CardContent>
            <CardButton>PURCHASE</CardButton>
          </Card>
          <Card>
            <h2>Unlimted</h2>
            <CardContent>
              <h1>$79<span>99</span></h1>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </CardContent>
            <CardButton>PURCHASE</CardButton>
          </Card>
        </CardsWrapper>
      </PlansWrapper>
    </PlansBackground>
  );
};

const PlansBackground = styled.div`
  background-image: linear-gradient(180deg, #e7e7e7 92%, #fff 92%);
`;

const PlansWrapper = styled.div`
  margin: auto;
  max-width: 60em;
  padding: 4em;
  padding-bottom: 0em;
  p {
    margin: 2em 4em;
  }
  @media (max-width:700px){
    p {
      margin: 2em 0em;
    }
    padding: 4em 2em;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  margin: auto;
  max-width: 60em;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #3498db;
  width: 100%;
  margin: .3em;
  h2 {
    color: white;
  }
  @media (max-width: 600px) {
    margin: .2em 0em;
  }
  :nth-child(3){
    transform: scale(1.1);
    margin: .8em;
    @media (max-width: 600px) {
      margin: 1.3em 0em;
    }
`;

const CardContent = styled.div`
  background-color: white;
  h1 {
    /* font-weight: 600; */
    vertical-align: text-top ;

  }
  span {
    /* font-family: "myriad-pro", sans-serif; */
    font-size: .6em;
    /* padding-top: .5em; */
    /* margin: 0; */
    vertical-align: text-top ;
  }
  li {
    padding-top: .4em;
    border-top: .05em solid #c2c2c2;
    text-align: center;
    margin: .5em .5em;
  }
`;

const CardButton = styled.button`
  background-color: #0d74b9;
  color: white;
  border: none;
  margin: 1.3em auto;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
  min-width: 8em;
  max-width: 20em;
  outline: none;
  padding:  .6em 0em .4em;
  &:hover{  
    transform: translate(0, -3%);
  }
  &:active{
    background-color: #0b65a2;
    transform: translate(0, 3%);
  }
`;

export default Plans;