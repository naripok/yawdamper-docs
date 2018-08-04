import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Container } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../logo2.svg';
import "./NavBar.css"


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
                    <Container className="container">
                        <NavbarBrand onClick={this.props.top}>
                            <img src={logo} alt="ATOM" height="30" className="logo"/>
                        </NavbarBrand>
                        <NavbarNav left>
                            <NavItem>
                                <NavLink to="#" onClick={this.props.top}>
                                    Início
                                </NavLink>
                            </NavItem>
                        </NavbarNav>

                        <NavbarNav right>
                            <NavItem className="sup">
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

                    </Container>
                </Navbar>
            </Router>
        );
    }
}