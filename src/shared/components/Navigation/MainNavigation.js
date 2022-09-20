import React, { useState } from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import './MainNavigation.css';
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => { //menu hambúrguer
    const [drawerIsOpen, setDrawerIsOPen] = useState(false);

    function openDrawerHandler() {   
        setDrawerIsOPen(true);
    }

    function closeDrawerHandler() {   
        setDrawerIsOPen(false);
    }
    return (
        <>
        {drawerIsOpen && <Backdrop  onClick={closeDrawerHandler}/>}
        <SideDrawer 
        show={drawerIsOpen}
        onClick={closeDrawerHandler}
        >
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">
                        YourPlaces
                    </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    )
}

export default MainNavigation; 