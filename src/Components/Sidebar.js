import React from 'react'
import './Sidebar.css'
import SidebarListItem from './SidebarListItem'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment'
import TextsmsIcon from '@material-ui/icons/Textsms';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CreateIcon from '@material-ui/icons/Create';
import { Avatar } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

function Sidebar() {

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    border:'none',
    },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    },
  smallIcon: {
      fontSize:'5px',
  },
  
}));
const classes = useStyles();
    
    return (
        <div className="sidebar">
            <img
                className="sidebarLogo"
                alt="logo"
                src="data:image/png;base64,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"
            ></img>
            <div className="sidebarList">
                <SidebarListItem
                    icon={<DashboardIcon />}
                    title="Dashboard"
                />
                <SidebarListItem
                    icon={<BusinessCenterIcon />}
                    title="Projects"
                />
                <SidebarListItem
                    icon={<AssignmentIcon />}
                    title="Tasks"
                />
                <SidebarListItem
                    icon={<TextsmsIcon />}
                    title="Chat"
                />
                <SidebarListItem
                    icon={<LibraryBooksIcon />}
                    title="Activities"
                />
                <SidebarListItem
                    icon={<EqualizerIcon />}
                    title="Statistics"
                />
            </div>
            <hr></hr>
            <div className="sidebarTeam">
                <div className="sidebarTeamItem">
                    <div className="sidebarTeamItemLeft">
                        <h6>Company Name</h6>
                    </div>
                    <div className="sidebarTeamItemRight">
                    <h3>+</h3>
                    </div>
                </div>
                <div className="sidebarTeamItem">
                    <div className="sidebarTeamItemLeft">
                        <div className="sidebarTeamItemLeftIcon1">
                            <CreateIcon className={classes.small}/>
                        </div>
                        <p>Design Team</p>
                    </div>
                    <div className="sidebarTeamItemRight">
                    <div className={classes.root}>
                        <AvatarGroup max={4}>
                            <Avatar src="me.jpg" className={classes.small}></Avatar>
                            <Avatar src="me.jpg" className={classes.small}></Avatar>
                            <Avatar src="me.jpg" className={classes.small}></Avatar>
                            <AddCircleIcon className={classes.small} />                        
                        </AvatarGroup>
                    </div>
                    </div>
                </div>
                <div className="sidebarTeamItem">
                    <div className="sidebarTeamItemLeft">
                        <div className="sidebarTeamItemLeftIcon2">
                            <CodeIcon />
                        </div>
                        <p>Development</p>
                    </div>
                    <div className="sidebarTeamItemRight">
                    <div className={classes.root}>
                        <AvatarGroup>
                            <Avatar src="me.jpg" className={classes.small}></Avatar>
                            <Avatar src="me.jpg" className={classes.small}></Avatar>
                            <AddCircleIcon className={classes.small} />                        
                        </AvatarGroup>
                    </div>
                    </div>
                </div>
                <div className="sidebarTeamItem">
                    <div className="sidebarTeamItemLeft">
                        <div className="sidebarTeamItemLeftIcon3">
                            <img
                                alt="marketing"
                                src="https://img.icons8.com/officel/16/000000/engage.png"
                            />
                        </div>
                        <p>Marketing</p>
                    </div>
                    <div className="sidebarTeamItemRight">
                    <div className={classes.root}>
                        <AvatarGroup max={4}>
                            <Avatar src="me.jpg" className={classes.small}></Avatar>
                            <AddCircleIcon className={classes.small} />                        
                        </AvatarGroup>
                    </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="sidebarBottom">
                <img
                    alt="people"
                    src="./me.jpg"
                ></img>
            </div>
        </div>
    )
}

export default Sidebar
