import React from 'react';

import GuessList from './guess-list';
import AuralStatus from './aural-status';

export default function StatusSection(props) {
  const { guesses, auralStatus } = props;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}