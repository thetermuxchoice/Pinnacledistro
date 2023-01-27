import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/menuData'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

const dropdowncontainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#f32223;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3 ease-in-out;
opacity:1;
`


const Icon= styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size;
cursor:pointer;
outline:none;
`
const CloseIcon= styled(FaTimes)`
color:#ffe233;
`


const DropdownWrapper= styled.div``

const DropdownMenu= styled.div`

`

const DropdownLink= styled(Link)`

`
const BtnWrap= styled.div``


const Dropdown = () => {
  return (
    <dropdowncontainer>
<Icon>
    <CloseIcon/>
</Icon>
<DropdownWrapper>
    <DropdownMenu>
        {menuData.map((item,index)=>{
            <DropdownLink to={item.link} key={index}>
                {item.title}
            </DropdownLink>
        })}
    </DropdownMenu>
    <BtnWrap>
       
    </BtnWrap>
</DropdownWrapper>
    </dropdowncontainer>
  )
}

export default Dropdown