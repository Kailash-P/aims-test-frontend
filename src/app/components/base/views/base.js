import React from 'react'
import MenuLandingPage from '../../Menu/views/MenuLandingPage'
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      }
    }));

export default function Base({menuItems, children}) {
    const classes = useStyles();

    return (
        <>
            <MenuLandingPage menuListItems={menuItems}/>
            <Container maxWidth="lg" className={classes.container}>
                {children}
            </Container>
        </>
    )
}
