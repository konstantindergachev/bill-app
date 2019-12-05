import React, { Fragment, useContext } from 'react';
import './App.scss';
import AddBill from './components/add-bill/AddBill';
import BillOptions from './components/bill-options/BillOptions';
import EditBill from './components/edit-bill/EditBill';
import { BillContext } from './context/BillContext';

const App = () => {
  const { editModeEnabled } = useContext(BillContext);
  return (
    <div className="container">
      {editModeEnabled ? (
        <EditBill />
      ) : (
        <Fragment>
          <BillOptions />
          <AddBill />
        </Fragment>
      )}
    </div>
  );
};
export default App;
