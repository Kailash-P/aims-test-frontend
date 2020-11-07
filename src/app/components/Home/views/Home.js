import React from 'react'
import Base from '../../base/views/base'
import { mainListItems } from "../../Menu/views/MenuListItems";

export default function Home() {
    return (
       <Base menuItems={mainListItems}></Base>
    )
}
