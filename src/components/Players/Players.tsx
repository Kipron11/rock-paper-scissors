import React from 'react';
import Player from './Player/Player';
import { PunchModel } from '../../models/PunchModel';

type PlayersProps = {
    playerScore: number,
    pcScore: number,
    tieScore: number,
    playerPunch: PunchModel,
    pcPunch: PunchModel,
}

const Players = ({
  playerScore, pcScore, tieScore, playerPunch, pcPunch,
}: PlayersProps) => (
  <section className="Players">
    <Player name="Player" score={playerScore} punch={playerPunch} />
    <div>
      Tie :
      {' '}
      {tieScore}
    </div>
    <Player name="PC" score={pcScore} punch={pcPunch} />
  </section>
);

export default Players;
