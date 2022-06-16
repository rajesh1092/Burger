import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxilary";
import BuildControls from "../../components/Burger/Buildcontrols/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/Ordersummary/OrderSummary';

const INGREDIENT_PRICES = {
    Salad: 10,
    Cheese: 20,
    Meat: 20,
    Tikki: 30
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Tikki: 0,
      Cheese: 0,
      Meat: 0
    },
    totalPrice : 40,
    purchasable: false,
    purchasing : false
  };

  updatePurchaseState(/*ingredients*/Price){
    if (Price > 40){
        this.setState ({purchasable: true});
    }
    else{
        this.setState({purchasable: false});
    }
   
    // const sum = Object.keys(ingredients).map(igKey => {
    //     return ingredients[igKey]
    // }).reduce((sum, el)=>{
    //   return sum+el;
    // }, 0);
    // this.setState({purchasable: sum >0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients [type] = updatedCount;
    const priceAddition =  INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients })
    this.updatePurchaseState(newPrice);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount == 0 ){
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients [type] = updatedCount;
    const priceDeduction =  INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients })
    this.updatePurchaseState(newPrice);
  }

  purchaseContinueHandler = () => {
    alert("Order Successful!!!");
  }


  purchasecancelHandler = () => {
    return this.setState({purchasing : false});
  }

  purchaseHandler= () => {
    return this.setState({purchasing: true});
  }
 
  render() {
    const disableInfo = {
        ...this.state.ingredients
    };
    for (let key in disableInfo){
        disableInfo[key] = disableInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal show= {this.state.purchasing} modalClosed={this.purchasecancelHandler} >
            <OrderSummary 
            purchaseCancel ={this.purchasecancelHandler}
            purchaseContinue ={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            price = {this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
        ingredientAdded = {this.addIngredientHandler} 
        ingredientRemoved = {this.removeIngredientHandler} 
        disabled = {disableInfo} 
        purchasable = {this.state.purchasable}
        ordered = {this.purchaseHandler}
        price = {this.state.totalPrice} 
         />
      </Aux>
    );
  } 
}
export default BurgerBuilder;
