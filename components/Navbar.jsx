import { Badge } from '@mui/material'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from  'styled-components'
import { mobile } from '../responsive'
import Link from 'next/link'

const Container = styled.div`
    height: 60px;
    margin-bottom: 10px;
    ${mobile({ height: '50px'})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0px'})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: 'center', flex: '2'})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none'})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: '50px'})}
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: '24px'})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px'})}
`
const A  = styled.a`
    text-decoration: none;
    color: inherit;
`
const Navbar = () => {
    return(
        <Container>
        <Wrapper>
            <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search style={{color: 'gray', fontSize:16}}/>
            </SearchContainer>
            </Left>
            <Center>
                <Link href = '/'>
                <a style={{textDecoration: 'none', color: 'inherit'}}>
                    <Logo>Peelers
                </Logo>
                </a>
                </Link>
            </Center>
            <Right>
                <Link href = '/Register'>
                <a style={{textDecoration: 'none', color: 'inherit'}}>
                 <MenuItem>REGISTER</MenuItem>
                </a>
                </Link>
                <Link href = '/Login'>
                <a style={{textDecoration: 'none', color: 'inherit'}}>
                 <MenuItem>SIGN IN</MenuItem>
                </a>
                </Link>
                <Link href = '/Cart'>
                <a style={{textDecoration: 'none', color: 'inherit'}}>
                 <MenuItem>
                     <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlined/>
                     </Badge>
                 </MenuItem>
                </a>
                </Link>
            </Right>
        </Wrapper>
        </Container>
    )
}

export default Navbar