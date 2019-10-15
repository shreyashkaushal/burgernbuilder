import React from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigator/Toolbar/Toolbar'
import SideDrawer from '../Navigator/SideDrawer/SideDrawer'
const layout =(props)=>(
    <>
    <Toolbar></Toolbar>
    <SideDrawer/>
    <main className={styles.Content}>
        {props.children}
    </main>
    </>
);

export default layout;