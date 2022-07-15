import React from 'react';

type WinnerProps = {
    text: string
}

const Winner = ({ text }: WinnerProps) => (
  <div>
    {text}
  </div>
);

export default Winner;
