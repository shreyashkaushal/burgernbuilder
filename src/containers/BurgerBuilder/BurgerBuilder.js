import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENTSPRICES = {
    salad : 5,
    meat : 20,
    cheese : 10,
    bacon : 20
}
class BurgerBuilder extends Component
{
    state = {
        ingredients : {
            salad: 0,
            meat : 0,
            cheese : 0,
            bacon:0
        },
        totalPrice : 10,
        purchasable:false,
        purchasing : false
    }

    updatePurchaseState(ingredients)
    {
       
        const sum = Object.keys(ingredients)
        .map((igKey)=>{
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum + el; 
        },0);
        this.setState({purchasable:sum>0});
    }
    addIngredientsHandler=(type)=>
    { 
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENTSPRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        console.log(newPrice);
        console.log(updatedIngredients[type])
        this.updatePurchaseState(updatedIngredients);


    }

    removeIngredientsHandler=(type)=>
    {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction = INGREDIENTSPRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        console.log(newPrice);
        console.log(updatedIngredients[type]);
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler = ()=>
    {
        this.setState({purchasing:true});
    }

    purchaseCanceler =() =>{
        this.setState({purchasing:false});
    }

    purchaseContinue=()=>
    {
        alert('you continue with the order');
    }
    render()
    {
        const disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo)
        {
            disabledInfo[key]= disabledInfo[key]<=0
        }

        return(
            <> 
            <Modal show={this.state.purchasing}
            modalClosed={this.purchaseCanceler}
            >
                <OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCancelled ={this.purchaseCanceler}
                purchaseContinue={this.purchaseContinue}
                price={this.state.totalPrice}

                    
                />
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls
                ingredientsAdded={this.addIngredientsHandler}
                ingredientsRemoved={this.removeIngredientsHandler}
                disabled  = {disabledInfo}
                price = {this.state.totalPrice}
                purchasable={this.state.purchasable}
                order = {this.purchaseHandler}
            />
            </>
        );
    }

}
export default BurgerBuilder;