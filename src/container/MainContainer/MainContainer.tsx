import React from 'react';
import { Header } from '../../components/Header'
import { makeStyles } from '@material-ui/styles';
import { width } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../../routes/Routes';


const useStyles = makeStyles(() => ({
    main:{
        margin:0,
        padding:0,
        width:'100%',
    }
}))

export const MainContainer = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={classes.main}>
                <Header />
                <Routes />
            </div>
        </BrowserRouter>
    )
}
