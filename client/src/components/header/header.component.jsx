import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import {ReactComponent as Logo} from '../../assets/crown.svg';


import {auth} from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'


import { HeaderContainer,LogoContainer,OptionDiv,OptionLink,OptionsContainer } from "./header.styles";



const Header =({currentUser,hidden})=>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>

        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                Contact
            </OptionLink>
            {
                currentUser?(
                <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
                ):(
                <OptionLink to='/signin'>Sign In</OptionLink>
                )}
                <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
        
   </HeaderContainer>
)

const mapStateToProps=createStructuredSelector({

    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

 export default connect(mapStateToProps)(Header);