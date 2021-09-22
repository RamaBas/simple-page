import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Button } from '@mui/material';
import { BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../routes/Routes';


const useStyles = makeStyles(() => ({
    content:{
        height:'60px',
        width:'100%',
        backgroundColor:'#ccc',
        fontFamily:"Roboto",
        display:'flex',
        alignItems: 'center',
    },
    logo:{
        color:"#37447E",
        fontSize:"26px",
        fontWeight: 900,
        lineHeight: '38px',
        paddingLeft: "20px"
        
    },
    menu:{
        display:'flex',
        alignContent:"space"
    },
    menu_item:{
        color:"#505F98"
    },
    showOnlyMobile: {
        color: 'red'
    }
}))
export const Header: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <p className={classes.logo}>
                Landie
            </p>
            <div className={classes.menu}>
                <BrowserRouter>
                    <Link to='/'>
                        <Button variant="text">Home</Button>
                    </Link>
                    <Link to='/about'>
                        <Button variant="text">About</Button>
                    </Link>
                    <Link to='/contact'>
                        <Button variant="text">Contact</Button>
                    </Link>
                </BrowserRouter>
            </div>
        </div>
    )
}
