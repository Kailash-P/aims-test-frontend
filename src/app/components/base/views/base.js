import React from 'react'
import MenuLandingPage from '../../Menu/views/MenuLandingPage'
import { mainListItems } from "../../Menu/views/MenuListItems";

export default function base() {
    return (
        <>
            <MenuLandingPage menuListItems={mainListItems}/>
        </>
    )
}
