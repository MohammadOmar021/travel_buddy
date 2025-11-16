import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FlightIcon from '@mui/icons-material/Flight';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function MyDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const arr = ['Dashboard', 'All Users', 'All Trips'];
  const DrawerList = (
    <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        { arr.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
             {
                index === 0 ? <Link to='/Dashboard'><DashboardIcon /><span className='ml-6 text-black text-lg'>Dashboard</span></Link>:
                index === 1 ? <Link to="/AllUsers"><PeopleIcon /><span className='ml-6 text-black text-lg'>All Users</span></Link> :
                <Link to="/AllTrips"><FlightIcon /><span className='ml-6 text-black text-lg'>All Trips</span></Link>
             }
              </ListItemIcon>
              {/* <ListItemText primary={text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
     
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
