import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const res = getExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = getExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should return total of expense amounts', () => {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(114695);
});