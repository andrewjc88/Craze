import React from 'react';
import styled from 'styled-components';


const Reviews = ({currnet, revs}) => {

  return (
    <div >
      <ReviewsWrapper>
        <Review>
          console.log(revs[1].review)
          {/* <i>{revs[1].review}</i>
          <h4>{revs[1].author}</h4> */}
          <Dots>
            {/* {
              revs.maps((rev)=>(
                rev.active === true ?
                  <ActiveDot/>
                : <Dot/>
              ))
            } */}
            <Dot/>
            <ActiveDot/>
          </Dots>
        </Review>
      </ReviewsWrapper>
    </div>
  );
};

const Slide = styled.div`

`;

const ReviewsWrapper = styled.div`
  display: flex;
  margin: auto;
  overflow-x: hidden;
  padding: 4em;
  max-width: 60em;
`;

const Review = styled.div`
  text-align: center;
  width: 80em;
`;

const Dots = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
justify-content: space-between;
`;

const Dot = styled.div`
  width: .4em;
  height: .4em;
  border: solid .1em #3498db;
  border-radius: 3em;
`;
const ActiveDot = styled.div`
  width: .4em;
  height: .4em;
  border: solid .1em #3498db;
  border-radius: 3em;
  background-color: #3498db;
`;

export default Reviews;