import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MoreVert from '@material-ui/icons/MoreVert';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import Badge from '@material-ui/core/Badge';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Person from '@material-ui/icons/Person';
import ListSubheader from '@material-ui/core/ListSubheader';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: "540px",
    flexShrink: 0,
    backgroundColor: "#333"
  },
  iconcc: {
    color: "white"
    },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#333",
    color: "white"
  },
  toolbar: theme.mixins.toolbar,
}));

export default function PermanentDrawerRight() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
      setValue(newValue);
    }
  
    function TabContainer(props) {
      return (
        <Typography component="div" style={{ padding: 0 }}>
          {props.children}
        </Typography>
      );
    }
        return (
            <div>
                <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List subheader={<ListSubheader style={{color: "white", textAlign: "center"}}>CHAT</ListSubheader>}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="default"
          variant="fullWidth"
        >
            <Tab label="Général" />
            <Tab label="Amis" />
            <Tab label="Teams" />
        </Tabs>
        {value === 0 && <TabContainer style={{width: "200px"}}>
          <ListItem style={{marginBottom: "0"}}>
            <ListItemText style={{color: "green"}} primary="Quentin" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText style={{color: "green"}} primary="Tchoow" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText style={{color: "red"}} primary="mimiflo" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText primary="MoKow_: " secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText style={{color: "#3498db"}} primary="Nigary" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText primary="Shagetsuu" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <ListItem style={{marginBottom: "0"}}>
            <ListItemText style={{color: "red"}} primary="mimiflo" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText style={{color: "green"}} primary="Tchoow" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText style={{color: "red"}} primary="MoV" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText primary="Ender" secondary="Message"/>
            <IconButton size="small">
              <MoreVert className={classes.iconcc}/>
            </IconButton>
          </ListItem>
          <input type="text" style={{marginTop: "13%", width: "100%"}} placeholder="Envoyer un message..." />
        </TabContainer>}
        {value === 1 && <TabContainer>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="primary" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Quentin" secondary="Dernier message..." /><ChevronRightIcon />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="error" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Ender" secondary="Dernier message..." /><ChevronRightIcon />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge color="primary" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Tchoow" secondary="Dernier message..." /><ChevronRightIcon />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="error" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="mimiflo" secondary="Dernier message..." /><ChevronRightIcon />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="error" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="MoV_" secondary="Dernier message..." /><ChevronRightIcon />
          </ListItem>
        </TabContainer>}
        {value === 2 && <TabContainer>
          <ListItem button>
            <ListItemAvatar>
            <Badge color="secondary" badgeContent={2}className={classes.margin}>
              <Avatar>
                <SupervisedUserCircle />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Fortool" /><ChevronRightIcon />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <SupervisedUserCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vitality" /><ChevronRightIcon />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge color="secondary" badgeContent={5}className={classes.margin}>
              <Avatar>
                <SupervisedUserCircle />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Solary" /><ChevronRightIcon />
          </ListItem>
        </TabContainer>
      }
        </List>
      </Drawer>
            </div>
        )
}
