import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:"Salad",type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'}
]
const buildControls = (props) => {
return(
    <div className={styles.BuildControls}>
    <p>Current Price : <strong>{props.price}</strong></p>
    {controls.map((ctr)=>(
        <BuildControl 
        key= {ctr.label} 
        label={ctr.label}
            added = {()=>props.ingredientsAdded(ctr.type)}
            removed={()=>props.ingredientsRemoved(ctr.type)}
            disabled ={props.disabled[ctr.type]}
            
        />
        

    ))}
    <button className={styles.OrderButton} disabled={!props.purchasable } onClick={props.order}
    >ORDER NOW</button>   
    </div>
);
}

export default buildControls;