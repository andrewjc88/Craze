import React from 'react';
import styled from 'styled-components';

const Reviews = ({onChangeSlide, current, revs}) => {

  return (
    <div >
      <ReviewsWrapper>
        <Review>
          {console.log('revs ', revs, ' current ', current)}
          <i>{revs[current].review}</i>
          <h4>{revs[current].author}</h4>
          <Dots>
            {
              revs.map((rev, idx) => (
                idx === current ?
                  <ActiveDot/>
                : 
                  <Dot
                    key={rev.id}
                    onClick={(key) => {
                      onChangeSlide(idx)
                    }}
                  />
              ))
            }
          </Dots>
        </Review>
      </ReviewsWrapper>
    </div>
  );
};

// Styles 

const ReviewsWrapper = styled.div`
  display: flex;
  margin: auto;
  overflow-x: hidden;
  padding: 4em;
  max-width: 60em;
  
  transition-property: all;
	transition-duration: .5s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  text-align: center;
  width: 80em;
  min-height: 9em;
`;

const Dots = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
width: 6em;
margin: auto;
justify-content: space-between;
`;

const Dot = styled.div`
  cursor: pointer;
  width: .5em;
  height: .5em;
  border: solid .1em #3498db;
  border-radius: 1em;
`;

const ActiveDot = styled.div`
  width: .5em;
  height: .5em;
  border: solid .1em #3498db;
  border-radius: 1em;
  background-color: #3498db;
`;

export default Reviews;