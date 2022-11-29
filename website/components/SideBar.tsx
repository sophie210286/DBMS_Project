import React, { useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { AddBox } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const SideBar = ({ theme, open, setOpen, selected, setSelected }: { setSelected: React.Dispatch<React.SetStateAction<string>>, selected: string, theme: any, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <Drawer
            sx={{
                backgroundColor: 'black',
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem onClick={() => setSelected("tables")} disablePadding sx={{ backgroundColor: selected === "tables" ? "#f1f1f1  " : "white" }} >
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Tables"} />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => setSelected("reports")} disablePadding sx={{ backgroundColor: selected === "reports" ? "#f1f1f1  " : "white" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Reports"} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setSelected("addcase")} disablePadding sx={{ backgroundColor: selected === "addcase" ? "#f1f1f1  " : "white" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddBox />
                        </ListItemIcon>
                        <ListItemText primary={"Forms"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideBar