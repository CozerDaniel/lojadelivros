import React, { useState } from 'react';
import { BiSearchAlt2, BiMenu} from 'react-icons/bi';


import Logo from '../img/logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Button,
    Form
} from 'reactstrap';

import '../css/header.css'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" className='header'>
                <NavbarBrand href="/">
                    <img src={Logo} alt="" className='logo'/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}>
                    <BiMenu className='icon-menu'/>
                </NavbarToggler>
                <Form className="area-pesquisa">
                    <Input type="text" placeholder='Busque um livro' className='input-pesquisa'/>
                    <Button type='submit' className='btn-pesquisa'>
                        <BiSearchAlt2 />
                    </Button>
                </Form>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto menu" navbar>
                        <NavItem>
                           <NavLink href='/'>Loja de Livros</NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">cadastro</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                catálogo
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    ficção
                                </DropdownItem>
                                <DropdownItem>
                                    fantasia
                                </DropdownItem>
                                <DropdownItem>
                                        Me surpreenda
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Usuário
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    favoritos
                                </DropdownItem>
                                <DropdownItem>
                                    minhas compras
                                </DropdownItem>
                                <DropdownItem>
                                    carrinho
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                    
            </Navbar>
        </div>
    );
}

export default Header;