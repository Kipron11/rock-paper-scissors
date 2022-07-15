import React, { useState } from 'react';
import Players from '../Players/Players';
import Buttons from '../Buttons/Buttons';
import Winner from '../Winner/Winner';
import { PunchModel } from '../../models/PunchModel';
import PunchData from '../../data/PunchData';

const initialPlayerState = {
  el: 'Player',
  id: 0,
  icon: 'https://www.un.org/sites/un2.un.org/files/2020/08/faqs.png',
  punch: '',
};

const initialPCState = {
  el: 'PC',
  id: 0,
  icon: 'https://www.un.org/sites/un2.un.org/files/2020/08/faqs.png',
  punch: '',
};

const GameForm = () => {
  const [playerPunch, setPlayerPunch] = useState(initialPlayerState);
  const [pcPunch, setPCPunch] = useState(initialPCState);

  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPCScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);

  const [winner, setWinner] = useState('');

  const randomAction = () => PunchData[Math.floor(Math.random() * PunchData.length)];

  const onActionSelected = (selectedAction: PunchModel) => {
    setPlayerPunch(selectedAction);

    const newPCAction = randomAction();
    setPCPunch(newPCAction);

    if (playerPunch.el === pcPunch.el) {
      setTieScore(tieScore + 1);
      setWinner('T - like Thailand, I - like pizza, E - like EGON who sold me sausages ');
    } else if (playerPunch.punch === pcPunch.el) {
      setPlayerScore(playerScore + 1);
      setWinner('OMG! Player won that evil machine!');
    } else if (playerPunch.el === pcPunch.punch) {
      setPCScore(pcScore + 1);
      setWinner('Terminator is coming');
    }
  };

  return (
    <div className="Game--Form">
      <Players
        playerScore={playerScore}
        tieScore={tieScore}
        pcScore={pcScore}
        playerPunch={playerPunch}
        pcPunch={pcPunch}
      />
      <Buttons action={onActionSelected} />
      <Winner text={winner} />

      <img className="Courage--img" src="https://tattoo-stickers.ru/46880/kuraj-truslivyy-pes.jpg" alt="Courage the dog" />
      <img className="Courage--shadow--img" src="https://www.pngimages.pics/images/quotes/english/general/courage-the-cowardly-dog-hd-52650-223680.png" alt="Courage shadow" />
    </div>
  );
};

export default GameForm;
