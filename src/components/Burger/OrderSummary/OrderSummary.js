import React from 'react';
import Button from '../../UI/Button/Button'
const orderSummary=(props)=>{
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return <li key={igKey}>
        <span style= {{textTransform:"capitalize"}}>{igKey}</span>:{props.ingredients[igKey]}
        </li>
    });


    return(
        <>
            <h3>Order Summary</h3>
            <p>Your burger ingredients are as follows :</p>
            <ul>
            {ingredientsSummary}
            
            </ul>
            <p><strong>Total price : {props.price}</strong></p>
            <p>continue to checkout ?</p>
            <Button btnType='Danger'clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>

        </>
    )

};
export default orderSummary;
