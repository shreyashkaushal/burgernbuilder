import React from 'react';
import NavigationItems from '../../Navigator/NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
const sideDrawer = (props) =>
{
    return(
        <div className={styles.SideDrawer}>
        <div className={styles.Logo}>
        <Logo/>
        </div>
            
            <nav>
            <NavigationItems/>

            </nav>
        </div>
    );
} 
export default sideDrawer;
