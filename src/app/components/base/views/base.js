import React from 'react'
import MenuLandingPage from '../../Menu/views/MenuLandingPage'
import Container from "@material-ui/core/Container";


export default function base({menuItems, children}) {
    return (
        <>
            <MenuLandingPage menuListItems={menuItems}/>
            <Container maxWidth="lg">
                {children}
            </Container>
        </>
    )
}
