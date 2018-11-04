import React from 'react';

import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.css';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle onClick={props.onDrawerToggle} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems 
        isAuthenticated={props.isAuthenticated}
      />
    </nav>
  </header>
);

export default Toolbar;