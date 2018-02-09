//Set_Text_Fitler
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//Sort_by_date
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

//sory_by_Amount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

//Set_Start_Date
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

//Set_End_Date
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});