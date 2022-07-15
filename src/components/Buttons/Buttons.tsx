import React from 'react';
import PunchData from '../../data/PunchData';
import { PunchModel } from '../../models/PunchModel';

type ButtonsProps = {
    action: (onActionSelected: PunchModel) => void,
}

const Buttons = ({ action }: ButtonsProps) => (
  <div className="div__button">
    {
                PunchData.map((
                  item: PunchModel,
                ) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      action(item);
                    }}
                  >
                    <img className="img" src={item.icon} alt={item.el} />
                    {item.el}
                  </button>
                ))
            }
  </div>
);

export default Buttons;
