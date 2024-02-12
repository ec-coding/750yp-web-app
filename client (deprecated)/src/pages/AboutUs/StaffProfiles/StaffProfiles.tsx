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
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24

  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  //   overflow: 'auto', // Enable scrolling
  //   maxHeight: '90dvh', // Set a maximum height if needed

  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  //   overflow: 'auto', // Enable scrolling
  //   maxHeight: '90dvh', // Set a maximum height if needed
};

// MOVE THIS TO COMPONENTS FOLDER

export default function StaffProfiles({ customProp }: { customProp: any }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (customProp === "lois") {
    return (
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
              <h4 className='text-xl text-center font-bold'>Lois Kim</h4>
              <h4 className='text-base text-center font-bold'>
                Empress of Everything
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/jLjxZ3Y.jpg" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={2} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> Lois Kim
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Financial Professional
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Co-Chair AKA Empress of ______
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      Everything but currently on a EDM phase.
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Anything Asian but I may be biased...
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span>{" "}
                      Volleyball, hanging with my dog, volunteering, and trying
                      out new restaurants!
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      Anything with a beach where I can just be a vegetable.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "landon") {
    return (
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
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/H6Hpi4l.jpg" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Landon Merigold</h4>
              <h4 className='text-base text-center font-bold'>Minister of Culture</h4>
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
              className='border-4 border-teal rounded-md bg-white'
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
                    image='https://i.imgur.com/H6Hpi4l.jpg'
                    alt='750YP'
                    className='w-full h-full object-cover'
                  />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={2} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> Landon
                      Merigold
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Loan Officer
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Minister of Culture / Co-chair
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      EDM and Country
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Chipotle or a Chicken Parm
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span>{" "}
                      Working Out, Golfing, Watching Sports
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      Always up for a new adventure! My goal is to go to all 7
                      continents in my life! Good people to surround yourself
                      with is all I ask for.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "nina") {
    return (
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
                src='https://i.imgur.com/MtVek4f.jpg'
                alt='Your Image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
              <h4 className='text-xl text-center font-bold'>Nina Hernandez</h4>
              <h4 className='text-base text-center font-bold'>Tea-EO</h4>
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/MtVek4f.jpg" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={4} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> Nina
                      Hernandez
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Director of Communications & Events
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Tea-EO
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      Anything R&B
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      WINGS!! Spicy & Crunchy, PLEASE!
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span> I
                      love going on long walks with my little family or finding
                      anything to craft!
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      Anywhere with a good view and great food!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "justus") {
    return (
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
                src='https://i.imgur.com/mCLG8BX.png'
                alt='Your Image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
              <h4 className='text-xl text-center font-bold'>Justus Carlile</h4>
              <h4 className='text-base text-center font-bold'>
                Sheriff of Shindigs
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/mCLG8BX.png" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={2} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> Justus
                      Carlile
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Real Estate Broker & Small Business Owner
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Sheriff of Shindigs
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      My tastes are wide but often wind up electronic, punk,
                      country, or industrial/metal.
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Italian. Pasta is life.
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span>{" "}
                      Gardening, travel, home improvement projects, and lots and
                      lots of concerts.
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      Svalbard, Norway. Northernmost inhabited city in the
                      world, and a place where polar bears outnumber people!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "joshua") {
    return (
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
                src='https://i.imgur.com/TEKSo83.jpg'
                alt='Your Image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
              <h4 className='text-xl text-center font-bold'>Josh Clark</h4>
              <h4 className='text-base text-center font-bold'>
                Sous Chef of Shindigs
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/TEKSo83.jpg" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={4} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> Joshua
                      Clark
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Real Estate Agent
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Sous-chef of Shindigs
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      80&apos;s New Wave
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Anything smothered in Hot Honey
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span> Rock
                      climbing and running
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      My house, I hate traveling
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "kayla") {
    return (
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
                src='https://i.imgur.com/BsPLJX3.jpg'
                alt='Your Image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
              <h4 className='text-xl text-center font-bold'>Kayla Baumann</h4>
              <h4 className='text-base text-center font-bold'>
                Connection Connoisseur
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/BsPLJX3.jpg" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={4} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> Kayla
                      Baumann
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Director of Community and Donor Engagement, Communities In
                      Schools of North Texas
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Connection Connoisseur
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      Worship or Taylor Swift
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Pasta
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span>{" "}
                      Spending time with family & friends, puzzles, calligraphy,
                      reading
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      Great Smoky Mountains or Greece
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "davis") {
    return (
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
                src='https://i.imgur.com/Qai4nql.png'
                alt='Your Image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
              <h4 className='text-xl text-center font-bold'>Davis Perrone</h4>
              <h4 className='text-base text-center font-bold'>
                Digital Dynamo
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/Qai4nql.png" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={8} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> Davis
                      Perrone
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Business Development Officer
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Digital Dynamo Social Media Co-Chair
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      Rap and Metal
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Buffalo Wings
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span> Golf
                      and Weightlifting
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      I would love to go to Australia someday
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "david") {
    return (
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
                src='https://i.imgur.com/rCFOkqV.jpg'
                alt='Your Image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
              <h4 className='text-xl text-center font-bold'>David Sublett</h4>
              <h4 className='text-base text-center font-bold'>N.E.R.D.</h4>
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/rCFOkqV.jpg" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={4} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> David
                      Sublett
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Financial Advisor
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      N.E.R.D.
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      Indie Folk
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Mexican
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span>{" "}
                      Camping, anything pop culture-esque, pickling things
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      Anywhere there are mountains
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "kassandra") {
    return (
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
                src='https://i.imgur.com/mwBdzuw.jpg'
                alt='Your Image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
              <h4 className='text-xl text-center font-bold'>
                Kassandra Nordhoff
              </h4>
              <h4 className='text-base text-center font-bold'>
                Social Media Sith Lord
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/mwBdzuw.jpg" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={4} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                      Kassandra Nordhoff
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Business Development Executive
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Social Media Sith Lord
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      Indie Folk
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Mexican
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span>{" "}
                      Trying out new restaurants, spending time with friends,
                      and traveling
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      Anywhere there are mountains
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "edwin") {
    return (
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
                src='https://i.imgur.com/7Lvsys0.jpg'
                alt='Your Image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center'>
              <h4 className='text-xl text-center font-bold'>Edwin Choi</h4>
              <h4 className='text-base text-center font-bold'>
                Software Sovereign
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
            <Grid container alignItems="center" justifyContent="center" className='border-4 border-teal rounded-md bg-white'>

              <Grid xs={12} sm={4} container alignItems="center" justifyContent="center">
                <Grid className="w-60 h-60 rounded-full overflow-hidden border-4 border-white">
                  <CardMedia component="img" image="https://i.imgur.com/7Lvsys0.jpg" alt="750YP" className='w-full h-full object-cover' />
                </Grid>
              </Grid>

              <Grid xs={12} sm={8} margin={0} padding={0}>
                <Box paddingBottom={4} className='bg-white'>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }} marginBottom={1} className="py-4 px-6">
                    About Me
                  </Typography>
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Name:</span> Edwin
                      Choi
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Profession:</span>{" "}
                      Web Developer & Software Engineer
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>YP Title:</span>{" "}
                      Software Sovereign
                    </Typography>
                  </Box>
                  <hr className='my-4' />
                  <Box className='space-y-1 px-6'>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Favorite Music:
                      </span>{" "}
                      Alternative Rock, Electronic, and Epic Orchestra
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Favorite Food:</span>{" "}
                      Steak, Salmon, and Snow Crab
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>Hobbies:</span>{" "}
                      Cooking, Reading, Web Design, and Voice Acting
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize: 18 }}>
                      <span style={{ fontWeight: "bold" }}>
                        Top Vacation Spot:
                      </span>{" "}
                      Singapore
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }
  return null;
}
