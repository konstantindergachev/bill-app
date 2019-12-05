import React, { Fragment } from 'react';
import './BillList.scss';

const BillList = ({ bills, editBill, setEditModeEnabled }) => {
  return (
    <Fragment>
      <ul className="list">
        <h6 className="list__edit-btn" onClick={() => setEditModeEnabled(true)}>
          &#128397;
        </h6>
        {bills.length > 0 &&
          bills.map((bill, idx) => (
            <li key={idx} className="list__item">
              <input
                type="checkbox"
                className="list__item-checkbox"
                checked={bill.enabled}
                onChange={() =>
                  editBill({
                    title: bill.title,
                    monthlyCost: bill.monthlyCost,
                    enabled: !bill.enabled,
                  })}
              />
              <div>{bill.title}</div>
              <span>{bill.monthlyCost}</span>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};

export default BillList;
