import React, { Fragment, useContext } from 'react';
import { BillContext } from '../../context/BillContext';
import './BillTotal.scss';

const BillTotal = () => {
  const { bills, selectedCostInterval } = useContext(BillContext);

  const moneyIntervalTransform = (cost) => {
    const monthlyCost = Number(cost);
    switch (selectedCostInterval) {
      case 'Ежедневный':
        return monthlyCost * 12 / 365;
      case 'Еженедельный':
        return monthlyCost * 12 / 52;
      case 'Ежемесячный':
        return monthlyCost;
      case 'Ежегодный':
        return monthlyCost * 12;

      default:
        return 0;
    }
  };

  return (
    <Fragment>
      <div className="bill__total-container">
        расход:{' '}
        <span className="total__cost">
          &#8372;
          {bills
            .reduce((acc, cur) => {
              return cur.enabled
                ? moneyIntervalTransform(cur.monthlyCost) + acc
                : acc;
            }, 0)
            .toFixed(2)}
        </span>
      </div>
      <div className="total__saved-container">
        остаток:{' '}
        <span className="total__saved">
          &#8372;
          {bills
            .reduce((acc, cur) => {
              return !cur.enabled
                ? moneyIntervalTransform(cur.monthlyCost) + acc
                : acc;
            }, 0)
            .toFixed(2)}
        </span>
      </div>
    </Fragment>
  );
};

export default BillTotal;
