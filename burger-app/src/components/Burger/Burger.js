import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./Burgeringredient/BurgerIngredient";
const burger = (props) => {
    let transFormedIngredients = Object.keys(props.ingredients).map(igKey => {
        return[...Array(props.ingredients[igKey])].map((_,i) =>{  
            return <BurgerIngredient key={igKey+i} type={igKey} />;
        });  
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, [] );
   // console.log(transFormedIngredients);
    if (transFormedIngredients.length === 0){
        transFormedIngredients = <p>start adding ingredients!!</p>
    }
    
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type ='bread-top' />
            {transFormedIngredients}
            <BurgerIngredient type ='bread-bottom' />
        </div>
    );
}

export default burger;