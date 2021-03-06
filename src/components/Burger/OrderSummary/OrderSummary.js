import React from 'react';

import Fragment from '../../../hoc/Fragment/Fragment';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const summaryIngredients = Object.keys(props.ingredients)
    .map(key => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
      </li>
    ))
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {summaryIngredients}
      </ul>
      <p><strong>Price: {props.total.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" onClick={props.onPurchaseCancel}>CANCEL</Button>
      <Button btnType="Success" onClick={props.onPurchaseContinue}>CONTINUE</Button>
    </Fragment>
  );
};

export default OrderSummary;