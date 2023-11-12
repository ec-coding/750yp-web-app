import React, { useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import AdminBar from "@/components/adminNav/AdminBar";
import { Container, Paper } from "@mui/material";
import EventForm from "@/components/adminNav/EventForm";
import UserTable from "@/components/adminNav/UserTable";
import Typography from "@mui/material/Typography";

export default function Admin() {
    const { user, error, isLoading } = useUser();
    const [tile, setTile] = useState("Home");

    const settings = ["Home", "User", "Events", "Some other fourth thing"]

    const handleDataChange = (data: string) => {
        setTile(data);
        console.log(tile);
    }

    return (
        <Container style={{maxWidth:"100vw", background: "gray", height: "100vh", width: "100vw", padding: 0, margin: 0 }}>
             <AdminBar onDataChange={handleDataChange} />
             <Paper
                style={{
                    border: '1px solid black',
                    borderRadius: '16px',
                    width: '66%',
                    height: '80vh',
                    margin: 'auto',
                    marginTop: '10vh', // Adjust the margin-top as needed
                    padding: '1rem',
                }}>
              {tile === "Home" ? <h1>Home</h1> :
              tile === "User" ?  <>  
                <Typography variant="h3" gutterBottom>Users </Typography> <UserTable /></> : 
              tile === "Events" ? <EventForm /> :
              tile === "Some other fourth thing" ? <a href="/">Some other fourth thing</a> : null}
             </Paper>
        </Container>
    )
}
