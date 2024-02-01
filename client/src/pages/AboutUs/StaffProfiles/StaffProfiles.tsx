import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Container,
  Box,
  Button,
  CardMedia,
  Grid,
  Modal,
  makeStyles,
} from "@mui/material";
import styles from "StaffProfiles.module.css";
import Image from "next/image";

import StaffData from "@/static/StaffData";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "90%", // Adjust the width based on your design
  transform: "translate(-50%, -50%)",
  boxShadow: 24,

  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  //   overflow: 'auto', // Enable scrolling
  //   maxHeight: '90dvh', // Set a maximum height if needed
};

// MOVE THIS TO COMPONENTS FOLDER

export default function StaffProfiles({ person }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const staffData = StaffData;

  return (
    <div>
      {staffData.map((staff) => (
        <div key={staff.id}>
          <div>
            <Button
              onClick={handleOpen}
              style={{
                color: "inherit",
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              <div className='flex-initial bio-panel space-y-8'>
                <div className='w-60 h-60 rounded-full overflow-hidden border-2 border-white'>
                  <Image
                    src='https://i.imgur.com/jLjxZ3Y.jpg'
                    alt='Your Image'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
                  <h4 className='text-xl text-center font-bold'>
                    {staff.name}
                  </h4>
                  <h4 className='text-base text-center font-bold'>
                    {staff.nickname}
                  </h4>
                </div>
              </div>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <Grid
                  container
                  alignItems='center'
                  justifyContent='center'
                  className='border-4 border-teal rounded-md bg-slate-600'
                >
                  <Grid
                    xs={12}
                    sm={4}
                    container
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Grid className='w-60 h-60 rounded-full overflow-hidden border-4 border-white'>
                      <CardMedia
                        component='img'
                        image={staff.image}
                        alt='750YP'
                        className='w-full h-full object-cover'
                      />
                    </Grid>
                  </Grid>

                  <Grid xs={12} sm={8} margin={0} padding={0}>
                    <Box paddingBottom={2} className='bg-white'>
                      <Typography
                        variant='h5'
                        sx={{ fontWeight: "bold" }}
                        marginBottom={3}
                        className='bg-gray-200 py-4 px-6'
                      >
                        About Me
                      </Typography>
                      <Box className='space-y-1 px-6'>
                        <Typography variant='body1' sx={{ fontSize: 18 }}>
                          <span style={{ fontWeight: "bold" }}>Name:</span>
                          {staff.name}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 18 }}>
                          <span style={{ fontWeight: "bold" }}>
                            Profession:
                          </span>{" "}
                          {staff.profession}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 18 }}>
                          <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                          {staff.YPTitle}
                        </Typography>
                      </Box>
                      <hr className='my-4' />
                      <Box className='space-y-1 px-6'>
                        <Typography variant='body1' sx={{ fontSize: 18 }}>
                          <span style={{ fontWeight: "bold" }}>
                            Favorite Music:
                          </span>{" "}
                          {staff.favMusic}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 18 }}>
                          <span style={{ fontWeight: "bold" }}>
                            Favorite Food:
                          </span>{" "}
                          {staff.favFood}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 18 }}>
                          <span style={{ fontWeight: "bold" }}>Hobbies:</span>{" "}
                          {staff.hobbies}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 18 }}>
                          <span style={{ fontWeight: "bold" }}>
                            Top Vacation Spot:
                          </span>{" "}
                          {staff.topVacationSpot}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          </div>
          )
        </div>
      ))}
    </div>
  );
}
