import React from "react";
import {
  Container,
  Box,
  CardMedia,
  Grid,
  Modal,
  makeStyles,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const hover = {
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
};

const Header = () => {
  const { user, error, isLoading } = useUser();
  return (
    <Container maxWidth={false} disableGutters sx={{}} className='bg-gray-100'>
      <Grid
        container
        alignItems='center'
        sx={{ maxWidth: 1280 }}
        spacing={2}
        marginY={0}
        paddingY={1}
        className='mx-auto'
      >
        <Grid
          xs={12}
          sm={4}
          container
          alignItems='center'
          justifyContent='space-between'
          margin={0}
        >
          <CardMedia
            component='img'
            image='https://i.imgur.com/ICaBO54.png'
            alt='750YP'
            className='hero-image'
            sx={{ borderRadius: 2 }}
            style={{ width: "25%" }}
          />
        </Grid>

        <Grid xs={12} sm={8} margin={0}>
          <div className='flex space-x-8 justify-end items-center'>
            <Typography variant='h6' sx={{ fontWeight: "bold" }}>
              <Link href='/'>Home</Link>
            </Typography>
            <Typography variant='h6' sx={{ fontWeight: "bold" }}>
              <Link href='/AboutUs'>About Us</Link>
            </Typography>
            <Typography variant='h6' sx={{ fontWeight: "bold" }}>
              <Link href='/Events'>Events</Link>
            </Typography>
            {user ? (
              <Typography variant='h6' sx={{ fontWeight: "bold" }}>
                <Link href='/api/auth/logout'>Log Out</Link>
              </Typography>
            ) : (
              <>
                <Typography variant='h6' sx={{ fontWeight: "bold" }}>
                  <Link href='/api/auth/login'>Log In</Link>
                </Typography>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: "bold" }}
                  className='my-auto'
                >
                  <button className='bg-yellow-400 font-bold mx-2 py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300'>
                    <Link href='/api/auth/login'>Sign Up</Link>
                  </button>
                </Typography>
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
