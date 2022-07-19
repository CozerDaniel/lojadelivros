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
                <NavbarBrand href="/">
                    <img src={Logo} alt="" className='logo'/>
                </NavbarBrand>
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
                            <NavLink href="cadastro" className='item-menu'>cadastro</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='item-menu'>
                                catálogo
                            </DropdownToggle>
                            <DropdownMenu>
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
                            <DropdownToggle nav caret className='item-menu'>
                                Usuário
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href='favoritos'>
                                    favoritos
                                </DropdownItem>
                                <DropdownItem href='minhascompras'>
                                    minhas compras
                                </DropdownItem>
                                <DropdownItem href='carrinho'>
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