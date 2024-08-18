//QuoteOfTheDay.jsx
import React from 'react';
import { QuoteContainer } from './QuoteOfTheDay.styled';

const QuoteOfTheDay = () => {
  return (
    <QuoteContainer className="emoji-books">
      <p>
        "Books are <span>windows</span> to the world, and reading is a journey
        into the unknown."
      </p>
    </QuoteContainer>
  );
};

export default QuoteOfTheDay;
