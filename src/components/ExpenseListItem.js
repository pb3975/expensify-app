import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3><Link to={`/edit/${id}`}>
      {description}</Link></h3>
    <p> Amount : {amount} </p>
    <p> Created On: {createdAt}</p>
  </div>
);


export default ExpenseListItem;