import React from 'react';
import clsx from 'clsx';
import './style.css';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'; 
import AppBarMsg from './AppBarMsg/AppBarMsg';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'; 
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Home from '@material-ui/icons/Home';
import LiveTv from '@material-ui/icons/LiveTv';
import ContactSupport from '@material-ui/icons/ContactSupport';
import Score from '@material-ui/icons/Score';
import Whatshot from '@material-ui/icons/Whatshot';
import Event from '@material-ui/icons/Event';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import Add from '@material-ui/icons/Add';
import Person from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import { hidden } from 'ansi-colors';

const drawerWidth = 290;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    color: "white",
  },
  drawerOpen: {
    backgroundColor: "#333",
    color: "white",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#333",
    color: "white",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(4) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  friends: {
    float: "left",
    height: "40px"
  },
  teams: {
    float: 'left',
    top: 'unset',
    color: "white"
  },
  paper: {
    background: "blue"
  },
  title: {
    flexGrow: 1,
  },
  addicon: {
    display: hidden
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  content: {
    paddingTop: "20px",
    paddingLeft: "90px",
    paddingRight: "330px",
    paddingBottom: "20px"
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  iconc: {
    color: "white"
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" 
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      style={{background: '#333333'}}
      >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="Menu"
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Fortool
          </Typography>
          <Button color="inherit">Se connecter</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{overflowY: "hidden"}}
        variant="permanent"
        classes={{ paper: classes.paper }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.iconc} /> : <ChevronLeftIcon className={classes.iconc} />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon style={{paddingLeft: "5px"}}>
              <Home className={classes.iconc} />
            </ListItemIcon>
            <ListItemText primary="Accueil" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{paddingLeft: "5px"}}><Score className={classes.iconc} /></ListItemIcon>
            <ListItemText primary="Classement" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{paddingLeft: "5px"}}><Event className={classes.iconc} /></ListItemIcon>
            <ListItemText primary="Evenements" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{paddingLeft: "5px"}}><SupervisedUserCircle className={classes.iconc} /></ListItemIcon>
            <ListItemText primary="Teams" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{paddingLeft: "5px"}}><LiveTv className={classes.iconc} /></ListItemIcon>
            <ListItemText primary="WebTV" />
          </ListItem>
        </List>
        <Divider /> 
        <List subheader={<ListSubheader className={classes.addicon} style={{float: "left", top: "unset", color: "white"}}>AMIS</ListSubheader>} >
        <Tooltip title="Ajouter un ami"  placement="top">
          <IconButton size="small" style={{marginLeft: "180px", marginTop: "8.5px", color: "white"}}>
            <Add />
          </IconButton>
        </Tooltip>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="primary" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Quentin" secondary="Connecté" /><Tooltip title="Certifié"  placement="top"><VerifiedUser style={{color: "#27ae60"}} /></Tooltip>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="primary" variant="dot">
              <Avatar>
                <Person />
                </Avatar>
            </Badge> 
            </ListItemAvatar>
            <ListItemText primary="Tchoow" secondary="Connecté" /><Tooltip title="Certifié"  placement="top"><VerifiedUser style={{color: "#27ae60"}} /></Tooltip>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="error" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="mimiflo" secondary="Déconnecté" /><Tooltip title="Nitro booster"  placement="top"><Whatshot style={{color: "#e74c3c"}} /></Tooltip><Tooltip title="Helper" placement="top"><ContactSupport style={{color: "#2980b9"}} /></Tooltip>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="error" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="MoKow_" secondary="Déconnecté" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge className={classes.margin} color="error" variant="dot">
              <Avatar>
                <Person />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Shagetsuu_" secondary="Déconnecté" />
          </ListItem>
        </List>
        <Divider />
        <List subheader={<ListSubheader className={classes.teams}>TEAMS</ListSubheader>}>
        <Tooltip title="Créer une team"  placement="top">
          <IconButton size="small" style={{marginLeft: "169px", marginTop: "8.5px", color: "white"}}>
            <Add />
          </IconButton>
        </Tooltip>
          <ListItem button>
            <ListItemAvatar>
            <Badge color="secondary" badgeContent={4}className={classes.margin}>
              <Avatar>
                <SupervisedUserCircle />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Fortool" /><Tooltip title="Certifié"  placement="top"><VerifiedUser style={{color: "#27ae60"}} /></Tooltip>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <SupervisedUserCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vitality" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <SupervisedUserCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Solary" /><Tooltip title="Certifié"  placement="top"><VerifiedUser style={{color: "#27ae60"}} /></Tooltip>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
            <Badge color="secondary" badgeContent={2}className={classes.margin}>
              <Avatar>
                <SupervisedUserCircle />
              </Avatar>
            </Badge>
            </ListItemAvatar>
            <ListItemText primary="Lunary" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <SupervisedUserCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Atlantis" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <Add />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Rejoindre une team" />
          </ListItem>
        </List>
      </Drawer>
      <AppBarMsg />
      <main className={clsx(classes.content, {
        [classes.appBarShift]: open,
      })}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
          }