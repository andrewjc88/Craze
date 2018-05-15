import React from 'react';
import styled from 'styled-components';

const Reviews = ({ onChangeSlide, stopAutoPlay, current, revs }) => {

  return (
    <div >
      <ReviewsWrapper>
        <Review>
          <i>{revs[current].review}</i>
          <h4>{revs[current].author}</h4>
        </Review>
        <Dots>
          {
            revs.map((rev, idx) => (
              idx === current ?
                <ActiveDot
                  key={idx}
                />
                :
                <Dot
                  key={idx}
                  onClick={(key) => {
                    onChangeSlide(idx)
                    stopAutoPlay()
                  }}
                />
            ))
          }
        </Dots>
      </ReviewsWrapper>
    </div>
  );
};

const ReviewsWrapper = styled.div`
  /* display: flex; */
  margin: auto;
  overflow: hidden;
  padding: 4em;
  max-width: 60em;
  height: 9em;
  @media (max-width: 600px ){
    padding: 4em 2em;
`;

const Review = styled.div`

  text-align: center;
  max-width: 45em;
  min-height: 9em;
  margin: auto;
  
  h4 {
    margin: 1em 0em;
  }
  @media (max-width: 600px ){
    i {
      font-size: 1.2em;
    }
  }
`;

const Dots = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  width: 6em;
  margin: 0em auto;
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