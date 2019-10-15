import React from 'react';
import BurgerLogo from '../../assets/Images/burgerlogo.png'
import styles from './Logo.module.css'

const logo = (props)=>(
    <div className={styles.Logo}>
    <img src={BurgerLogo} alt='MyBurger'/>

    </div>
);

export default logo;