import React, { Fragment, useContext, useState } from 'react';
import { BillContext } from '../../context/BillContext';
import BillList from '../bill-list/BillList';
import BillTotal from '../bill-total/BillTotal';
import './AddBill.scss';

const AddBill = () => {
  const [ newBillTitle, setNewBillTitle ] = useState('');
  const [ newBillCost, setNewBillCost ] = useState('');
  const { bills, updateBills, editBill, setEditModeEnabled } = useContext(
    BillContext
  );

  const billValidObject = () => {
    const costValid = newBillCost && Number.parseFloat(newBillCost);
    const titleValid =
      newBillTitle && newBillTitle.split('').find((char) => char !== ' ');
    return titleValid && costValid;
  };

  const clearForm = () => {
    setNewBillCost('');
    setNewBillTitle('');
  };

  const handleChangeTitle = (ev) => setNewBillTitle(ev.target.value);
  const handleChangeCost = (ev) => setNewBillCost(ev.target.value);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (billValidObject()) {
      updateBills({
        title: newBillTitle,
        monthlyCost: newBillCost,
        enabled: true,
      });
      clearForm();
    }
  };

  return (
    <Fragment>
      <div className="add__bill-wrapp">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form__control"
            placeholder="Введите название покупки"
            value={newBillTitle}
            onChange={handleChangeTitle}
          />
          <input
            type="number"
            className="form__control"
            placeholder="Введите стоимость покупки"
            value={newBillCost}
            onChange={handleChangeCost}
          />
          <button className="form__btn btn">Добавить счет</button>
        </form>
      </div>
      <BillTotal />
      <BillList
        bills={bills}
        editBill={editBill}
        setEditModeEnabled={setEditModeEnabled}
      />
    </Fragment>
  );
};

export default AddBill;
