import React from 'react';
import { PunchModel } from '../../../models/PunchModel';

type PlayerProps = {
    name: string,
    score: number,
    punch: PunchModel,
}

const Player = ({ name, score, punch }: PlayerProps) => (
  <div className="Player">
    <div className="Score">
      {name}
      {' '}
      :
      {' '}
      {score}
    </div>
    <div className="Duel"><img className="Duel__img" src={punch.icon} alt={punch.el} /></div>
  </div>
);

export default Player;
