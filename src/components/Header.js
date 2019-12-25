import React from "react";
import {Route, Link} from "react-router-dom";
import UserList from "./UserList";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import UserForm from "./SignUpForm";

export default function Header (){

    const HeaderStyling = styled.header`
        display: flex;
        justify-content: flex-end;
        flex-direction: row;

        
    `

    return(
        <HeaderStyling>
        <Link to='/'>Sign Up</Link>
        <Link to='/users'>Members</Link>
        <Link to='/search'>Search</Link>

        <Route exact path='/' component={UserForm}></Route>
        <Route exact path='/users' component={UserList}></Route>
        <Route exact path='/search' component={SearchForm}></Route>
        </HeaderStyling>
    )
}