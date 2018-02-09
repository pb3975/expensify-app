import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add_Expense
const addExpense = (
  { 
    description = '',
     note = '',
      amount = 0,
       createdAt = 0 
      } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//Remove_Expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

//Edit_Expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
//Set_Text_Fitler
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
//Sort_by_date
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  });
//sory_by_Amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
 });

//Set_Start_Date
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

//Set_End_Date
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Array Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
    return state.map((expense) => {
      if (expense.id === action.id) {
        return {
          ...expense,
          ...action.updates
        };
      } else {
        return expense;
      };
    });
    default:
    return state;
  }
};


// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };
  case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    };
  case 'SORT_BY_AMOUNT':
    return {
      ...state,
      sortBy: 'amount'
  };
case 'SET_START_DATE':
  return {
    ...state,
    startDate: action.startDate
  };
case 'SET_END_DATE':
  return {
    ...state,
    endDate: action.endDate
  };
    default:
      return state;
  }
};

// timestamps (milliseconds)
// January 1st 1970 (unix epoch)

// Get Visible Expense
const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes((text).toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy=== 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};



// Store creation 
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 401, createdAt: -211000 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount:500, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expense1.expense.id }));

// store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(255));
// store.dispatch(setEndDate());


const demoState = {
  expenses:[{
    id: '12345678',
    description: 'Rent February',
    note: 'This was the Final payment somehting something',
    amount: 110000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};