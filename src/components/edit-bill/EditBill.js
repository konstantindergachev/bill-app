import React, { useContext } from 'react';
import { BillContext } from '../../context/BillContext';
import './EditBill.scss';

const EditBill = () => {
  const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(
    BillContext
  );
  return (
    <div className="edit__bill-container">
      <h6
        className="edit__bill-done-btn"
        onClick={() => setEditModeEnabled(false)}
      >
        &#10005;
      </h6>
      {bills.map((bill, idx) => {
        return (
          <div key={idx} className="edit__bill-row">
            <div className="edit__bill-title">{bill.title}</div>
            <input
              type="number"
              className="edit__bill-input"
              value={bill.monthlyCost}
              onChange={(ev) =>
                editBill({
                  title: bill.title,
                  enabled: bill.enabled,
                  monthlyCost: ev.target.value,
                })}
            />
            <h6 className="delete__btn" onClick={() => deleteBill(bill)}>
              &#128465;
            </h6>
          </div>
        );
      })}
    </div>
  );
};

export default EditBill;
