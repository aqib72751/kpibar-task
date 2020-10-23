import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

function Header() {
    const useStyles = makeStyles((theme) => ({
        headerLeftIcon: {
            backgroundColor: '#3B113D',
            width: "30px",
            height: '30px'
        },
    }));
    const classes = useStyles();
    return (
        <div className="header">
            <div className="headerLeft">
                <Avatar className={classes.headerLeftIcon}>
                    <MoreVertIcon />
                </Avatar>
                <p><b>Dashboard</b></p>
            </div>
            <div className="headerRight">
                <div className="headerRightLeft">
                <form>
                    <SearchIcon />
                    <input placeholder="Search"></input>
                </form>
                <StarIcon />
                <HelpOutlineIcon />
                <Badge variant='dot' overlap='circle' color="secondary">
                    <NotificationsIcon />
                </Badge>
                <p>Aqib Shah</p>
                </div>
                <div className="headerRightRight">
                    <Avatar src="../me.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Header
