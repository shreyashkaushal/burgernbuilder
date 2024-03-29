import React from 'react';
import NavigationItems from '../../Navigator/NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Modal/Backdrop/Backdrop'
const sideDrawer = (props) =>
{
    let attachedClasses=[styles.SideDrawer,styles.Close];
    if(props.open)
    {
        attachedClasses=[styles.SideDrawer,styles.Open];
    }
    return(
        <>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
        <Logo/>
        </div>
            
            <nav>
            <NavigationItems/>

            </nav>
        </div>
        </>
    );
} 
export default sideDrawer;
