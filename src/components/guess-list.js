import React from 'react';

export default function GuessList(props) {
  const guesses = props.guesses.map((eachGuess, index) => (
    <li key={index}>
      {eachGuess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}