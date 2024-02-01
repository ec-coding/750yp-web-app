import React, { useState, useEffect } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import AdminBar from "@/components/adminNav/AdminBar";
import { Container, Paper, Grid } from "@mui/material";
import EventForm from "@/components/adminNav/EventForm";
import UserTable from "@/components/adminNav/UserTable";
import Typography from "@mui/material/Typography";
import AdminHome from "@/components/adminNav/AdminHome";
import withAuth from "../../_middleware";
import { router } from "../../../../backend/src/trpc";
import { useRouter } from "next/router";
import { get } from "http";
//import { isAuthenticated } from "../../utils/auth"

 const Admin = () => {
    const { user, error, isLoading } = useUser();
    const [tile, setTile] = useState("Home");
  

    console.log(user);

  

    const handleDataChange = (data: string) => {
        setTile(data);
    }   
     

    return (
        <Container style={{ maxWidth: "100vw", background: "gray", height: "100vh", width: "100vw", padding: 0, margin: 0 }}>
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
                {tile === "Home" ? <AdminHome /> :
                    tile === "User" ? <>
                        <Grid className="bg-sky-200 text-center my-2 py-2">
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                Registered Users
                            </Typography>
                        </Grid>
                        <UserTable /></> :
                        tile === "Events" ? <EventForm /> : <p>Error???</p>}
            </Paper>
        </Container>
    )
}

export default withAuth(Admin, ["admin"]);