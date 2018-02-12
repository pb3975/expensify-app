import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add a new expense to expenses array', () => {
  const expense = {
    id: 4, 
    description: 'Shoes',
    note: '',
    amount: 20000,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense with valid id', () => {
  const description = 'Laptop';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: 
    {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test('should not edit expense with invalid id', () => {
  const description = 'Laptop';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: 
    {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});