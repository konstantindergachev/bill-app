import React, { useContext } from 'react';
import { BillContext } from '../../context/BillContext';
import './BillOptions.scss';

const BillOptions = () => {
  const { selectedCostInterval, setSelectedCostInterval } = useContext(
    BillContext
  );

  return (
    <div className="tabs__container">
      <div
        className={
          selectedCostInterval === 'Ежедневный' ? (
            'selected__interval'
          ) : (
            'interval'
          )
        }
        onClick={(ev) => setSelectedCostInterval(ev.target.innerText)}
      >
        Ежедневный
      </div>
      <div
        className={
          selectedCostInterval === 'Ежемесячный' ? (
            'selected__interval'
          ) : (
            'interval'
          )
        }
        onClick={(ev) => setSelectedCostInterval(ev.target.innerText)}
      >
        Ежемесячный
      </div>
      <div
        className={
          selectedCostInterval === 'Ежегодный' ? (
            'selected__interval'
          ) : (
            'interval'
          )
        }
        onClick={(ev) => setSelectedCostInterval(ev.target.innerText)}
      >
        Ежегодный
      </div>
    </div>
  );
};

export default BillOptions;
