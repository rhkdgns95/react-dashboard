import React from 'react';
import NavItems from './NavItems';
import styled from '../../Styles/typed-components';

const NavBar = () => {
    return (
        <Container>
            {
                NavItems.map((item, key) => 
                    <p key={key}>{item.name}</p>
                )
            }
            {
                NavItems.map((item, key) => 
                    <p key={key}>{item.name}</p>
                )
            }
            {
                NavItems.map((item, key) => 
                    <p key={key}>{item.name}</p>
                )
            }
            {
                NavItems.map((item, key) => 
                    <p key={key}>{item.name}</p>
                )
            }
            {
                NavItems.map((item, key) => 
                    <p key={key}>{item.name}</p>
                )
            }
            {
                NavItems.map((item, key) => 
                    <p key={key}>{item.name}</p>
                )
            }
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: black;
    color: white;
    overflow-y: auto;
`;

const LeftLayout = styled.div`

`;


export default NavBar;