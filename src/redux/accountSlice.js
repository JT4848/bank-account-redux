import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Initial balance is set to 0
  balance: 0,
   // Initial transactions array is empty
  transactions: []
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      const { amount } = action.payload; // Get the deposit amount from the action payload
      state.balance += amount; // Increase the balance by the deposit amount
      state.transactions.push({
        // Add a new transaction object to the transactions array
        action: "Deposit", // Action type is "Deposit"
        amount, // Deposit amount
        balance: state.balance, // Updated balance after the deposit
      });
    },
    withdrawal: (state, action) => {
       // ***TODO***
      // Get the withdrawal amount from the action payload
      const { amount } = action.payload;
       // Decrease the balance by the withdrawal amount
      state.balance -= amount
      state.transactions.push({
         // ***TODO***
        // Add a new transaction object to the transactions array
        // Action type is "Withdrawal"
        action: "Withdrawl",
         // Withdrawal amount
        amount,
         // Updated balance after the withdrawal
         balance: state.balance,
      });
    },
    transfer: (state, action) => {
      const { name, amount } = action.payload; // Get the recipient name and transfer amount from the action payload
       // ***TODO***
       // Decrease the balance by the transfer amount
      state.balance -= amount
      state.transactions.push({
        // ***TODO***
        // Add a new transaction object to the transactions array
        action: `Transfer to ${name}`,
         // Action type is "Transfer to [Recipient Name]"      
         // Transfer amount
         amount,
         // Updated balance after the transfer
         balance: state.balance,
      });
    },
  },
});



// Exporting the deposit, withdrawal, and transfer actions from the accountSlice
export const { deposit, withdrawal, transfer } = accountSlice.actions;

// Exporting the accountSlice.reducer as the default export
export default accountSlice.reducer