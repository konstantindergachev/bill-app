import React, { createContext, useEffect, useState } from 'react';

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [ bills, setBills ] = useState([]);
  const [ selectedCostInterval, setSelectedCostInterval ] = useState(
    'Ежемесячный'
  );
  const [ editModeEnabled, setEditModeEnabled ] = useState(false);

  useEffect(
    () => {
      setBills(JSON.parse(localStorage.getItem('bill')) || []);
    },
    [ setBills ]
  );

  const alphabeticalOrder = (bills) => {
    return bills.sort(
      (a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0)
    );
  };
  const updateBills = (bill) => {
    const updatedBills = alphabeticalOrder([ bill, ...bills ]);
    localStorage.setItem('bill', JSON.stringify(updatedBills));
    setBills(updatedBills);
  };
  const editBill = (billToUpdate) => {
    const billsFiltered = bills.filter(
      (bill) => bill.title !== billToUpdate.title
    );
    const updatedBills = alphabeticalOrder([ ...billsFiltered, billToUpdate ]);

    localStorage.setItem('bill', JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const deleteBill = (billToDelete) => {
    const updatedBills = bills.filter(
      (bill) => bill.title !== billToDelete.title
    );

    localStorage.setItem('bill', JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  return (
    <BillContext.Provider
      value={{
        bills,
        updateBills,
        editBill,
        selectedCostInterval,
        setSelectedCostInterval,
        editModeEnabled,
        setEditModeEnabled,
        deleteBill,
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export { BillContext, BillProvider };
