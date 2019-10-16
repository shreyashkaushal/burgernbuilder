import React,{Component} from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigator/Toolbar/Toolbar'
import SideDrawer from '../Navigator/SideDrawer/SideDrawer'
class Layout extends Component{

    state = {
        showSideDrawer:false
    
    }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler= ()=> {
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render()
    {
        return(
            <>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
    <main className={styles.Content}>
        {this.props.children}
    </main>
    </>

        )
    }
}
export default Layout;