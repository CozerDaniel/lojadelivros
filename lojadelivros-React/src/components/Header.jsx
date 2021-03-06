import React, { useState } from 'react';
import { BiSearchAlt2, BiMenu, BiCart} from 'react-icons/bi';
import { Link } from 'react-router-dom'

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
                <Link to={"/"}>
                    <img src={Logo} alt="" className='logo'/>
                </Link>
                <NavbarToggler onClick={toggle}>
                    <BiMenu className='icon-menu'/>
                </NavbarToggler>
                <Form className="area-pesquisa">
                    <Input type="text" placeholder='Busque um livro' className='input-pesquisa' aria-label=''/>
                    <Button type='submit' className='btn-pesquisa'>
                        <BiSearchAlt2 />
                    </Button>
                </Form>
                <Button className='btn-carrinho' href='carrinho'>
                    <BiCart/>
                </Button>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto menu" navbar>
                        <NavItem>
                           <Link to={'/'} className='item-menu'>Loja de Livros</Link> 
                        </NavItem>
                        <NavItem>
                            <Link to={"cadastro"} className='item-menu'>cadastro</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='item-menu'>
                                catálogo
                            </DropdownToggle>
                            <DropdownMenu className='submenu' >
                                <DropdownItem className='item-submenu'>
                                    ficção
                                </DropdownItem>
                                <DropdownItem className='item-submenu'>
                                    fantasia
                                </DropdownItem>
                                <DropdownItem className='item-submenu'>
                                    Me surpreenda
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='item-menu'>
                                Usuário
                            </DropdownToggle>
                            <DropdownMenu className='submenu' >
                                <DropdownItem >
                                    <Link to={'favoritos'} className='item-submenu'> favoritos </Link>
                                </DropdownItem>
                                <DropdownItem >
                                    <Link to={'minhascompras'} className='item-submenu' > minhas compras </Link>                                    
                                </DropdownItem>
                                <DropdownItem >
                                    <Link to={'carrinho'} className='item-submenu'> carrinho </Link>
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