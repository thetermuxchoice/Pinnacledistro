/**import React,{useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton';
import Logo from '../data/brand.png'



function Navbar() {

  const [clicked, setCliked]= useState(false)
  const handleClick=()=>{
    setCliked(!clicked)
  }
  return (
    <><NavContainer>
      <div className='logo'>
<img src={Logo} alt ='logo' height={30} width={120}/>
      </div>
      <div className={`links ${clicked ?'active':''}`}>
        <a onClick={handleClick} href='/Shop'>Shop</a>
        <a onClick={handleClick} href='/More'>More</a>
        <a onClick={handleClick} href='/Labs'>Labs</a>
        <a onClick={handleClick} href='/Whohesale'>Whohesale</a>
        <a onClick={handleClick} href='/Account'>Account</a>
        <a onClick={handleClick} href='/Cart'>Cart</a>
        <a onClick={handleClick} href='/Search'>Search</a>
      </div>
      <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </NavContainer></>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  
 
  
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
**/
import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { menuData } from '../data/menuData'
import Brand from '../data/brand.png'
import {Animated} from "react-animated-css";
import Carti from '../data/cart.png'
import Acc from '../data/account.png'
import Bars from '../data/bar.png'


const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding: 1rem 2rem;
z-index:100;
position:fixed;
width:100%;
background:#333;
`
const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
`
const Logo =styled(Link)`
${NavLink}
font-style:italic;
`
const CartShop =styled(Link)`
${NavLink}
font-style:italic;
margin-right:30px;
`


const MenuBars= styled.i`
display:none;
@media screen and (max-width:768px){
display:block;
background-image:url(${Bars});
background-size:contain;
height:30px;
width:30px;
cursor:pointer;
position:absolute;
top:0;
right:0;
transform:translate(-50%,25%);
}
`
const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;
@media screen and (max-width:768px){
  display:none;
}
`

const NavMenuLinks = styled(Link)`
${NavLink}
`


const Navbar = () => {
  return (
    <Nav>
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay="3000" isVisible={true}>
    <Logo to="/"><img src={Brand} alt ='logo' height={30} width={120} /></Logo>
</Animated>
    <MenuBars/>
    <NavMenu>
    
      {menuData.map((item, index) => (
      <NavMenuLinks to={item.Link} key={index}>
      {item.title}
      </NavMenuLinks>
      ))}
     
      
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <CartShop to="/"><img src={Carti} alt ='logo' height={20} width={20}/></CartShop>
</Animated>
    </NavMenu>
   
  </Nav>
  )
}

export default Navbar
