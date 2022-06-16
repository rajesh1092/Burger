import React, { createElement } from "react";
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls =[
    {label: 'Salad', type: 'Salad'},
    {label: 'Tikki', type: 'Tikki'},
    {label: 'Cheese', type: 'Cheese'},
    {label: 'Meat', type: 'Meat'}
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Burger Price : <strong>{props.price}</strong> </p>
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() =>props.ingredientRemoved(ctrl.type)} 
            disabled = {props.disabled[ctrl.type]} />
        ))}
        <button 
        onClick={props.ordered}
        className={classes.OrderButton}
        disabled = {!props.purchasable} 
        >ORDER NOW</button>
    </div>
);

export default buildControls;