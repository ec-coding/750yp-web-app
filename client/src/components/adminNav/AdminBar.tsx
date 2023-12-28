import { useUser } from '@auth0/nextjs-auth0/client';
import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import Link from 'next/link';

export default function AdminBar({ onDataChange } : any){

    const { user, error, isLoading } = useUser();
    const [tile, setTile] = useState("Home");
    const settings = ["Home", "User", "Events"]

    return(
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Welcome back, {user?.name || "admin"}!
          </Typography>
          {settings.map((setting) => {
              return <Button color="inherit" key={setting} onClick={() => onDataChange(setting)}>{setting}</Button>
          })}
          <Button color="inherit"><Link href={'/api/auth/logout'}>Logout</Link></Button>
        </Toolbar>
          </AppBar>
    )
}