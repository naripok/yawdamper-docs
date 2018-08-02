import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Container } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../logo.svg';
import "./NavBar.css"

import { Element, animateScroll as scroll, Events, Link } from "react-scroll";

export default class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar dark expand="lg" fixed="top" scrolling>
                    <NavbarBrand onClick={this.props.top}>
                        <img src={logo} height="30" className="logo"/>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="#" onClick={this.props.top}>
                                    Início
                                </NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <NavLink to="#" onClick={this.props.bot}>Suporte</NavLink>
                            </NavItem>
                            {/*<NavItem right>*/}
                                {/*<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>*/}
                                    {/*<DropdownToggle nav caret>Dropdown</DropdownToggle>*/}
                                    {/*<DropdownMenu>*/}
                                        {/*<DropdownItem href="#">Action</DropdownItem>*/}
                                        {/*<DropdownItem href="#">Another Action</DropdownItem>*/}
                                        {/*<DropdownItem href="#">Something else here</DropdownItem>*/}
                                        {/*<DropdownItem href="#">Something else here</DropdownItem>*/}
                                    {/*</DropdownMenu>*/}
                                {/*</Dropdown>*/}
                            {/*</NavItem>*/}
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}