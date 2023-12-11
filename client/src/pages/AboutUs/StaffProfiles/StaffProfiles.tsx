import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Box, Button, CardMedia, Grid, Modal, makeStyles } from '@mui/material';
import styles from 'StaffProfiles.module.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width: '100vh',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function StaffProfiles({ customProp }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (customProp === "lois") {
    return (
      <div>
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/jLjxZ3Y.jpg" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Lois Kim</h4>
              <h4 className='text-base text-center font-bold'>Empress of Everything</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container alignItems="center" justifyContent="center">

              <Grid xs={12} sm={6} container alignItems="center" justifyContent="center">
                <div className='flex-initial bio-panel space-y-8'>
                  <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://i.imgur.com/jLjxZ3Y.jpg" alt="Your Image" className="w-full h-full object-cover" />
                  </div>
                  <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                    <h4 className='text-xl text-center font-bold'>Lois Kim</h4>
                    <h4 className='text-base text-center font-bold'>Empress of Everything</h4>
                  </div>
                </div>
              </Grid>

              <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={1}>
                <Box sx={{ border: '2px solid black' }} padding={4}>
                  <Typography variant="body1" sx={{ fontSize: 18 }}>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Ipsum amet id nam dolores quam blanditiis pariatur quod.</p>
                    <p>ipsam quae ad quos doloribus assumenda itaque praesentium.</p>
                  </Typography>
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
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
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
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container alignItems="center" justifyContent="center">

              <Grid xs={12} sm={6} container alignItems="center" justifyContent="center">
                <div className='flex-initial bio-panel space-y-8'>
                  <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://i.imgur.com/H6Hpi4l.jpg" alt="Your Image" className="w-full h-full object-cover" />
                  </div>
                  <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                    <h4 className='text-xl text-center font-bold'>Landon Merigold</h4>
                    <h4 className='text-base text-center font-bold'>Minister of Culture</h4>
                  </div>
                </div>
              </Grid>

              <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={1}>
                <Box sx={{ border: '2px solid black' }} padding={4}>
                  <Typography variant="body1" sx={{ fontSize: 18 }}>
                    <p>Hey everyone! My volunteer position with the 750YP group is Co-Chair, better known as the Minister of Culture. I will help direct and oversee 750YP with Lois Kim, The Empress of _____. During the day, well 24/7, I am a Loan Officer with Fairway Independent Mortgage Corporation. I love to help people understand the power of homeownership and teach them how to make generational wealth through real estate! In my free time I enjoy coaching for Flower Mound Youth Lacrosse, golfing, working out, and watching my favorite Minnesota sports teams. The last one causes the most stress. I am excited to help this group of young professionals flourish in their careers and build deep relationships that will last a lifetime!</p>
                  </Typography>
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
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/MtVek4f.jpg" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Nina Hernandez</h4>
              <h4 className='text-base text-center font-bold'>Tea-EO</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container alignItems="center" justifyContent="center">

              <Grid xs={12} sm={6} container alignItems="center" justifyContent="center">
                <div className='flex-initial bio-panel space-y-8'>
                  <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://i.imgur.com/MtVek4f.jpg" alt="Your Image" className="w-full h-full object-cover" />
                  </div>
                  <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                    <h4 className='text-xl text-center font-bold'>Nina Hernandez</h4>
                    <h4 className='text-base text-center font-bold'>Tea-EO</h4>
                  </div>
                </div>
              </Grid>

              <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={1}>
                <Box sx={{ border: '2px solid black' }} padding={4}>
                  <Typography variant="body1" sx={{ fontSize: 18 }}>
                    <p>Nina serves as a liaison between the Lewisville Chamber of Commerce & the 750YP committee AKA spills the tea from meeting to meeting. (pink nail emoji)</p>
                  </Typography>
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
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/mCLG8BX.png" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Justus Carlile</h4>
              <h4 className='text-base text-center font-bold'>Sheriff of Shindigs</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "joshua") {
    return (
      <div>
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="bg-gray-200 rounded-full w-60 h-60 mx-auto"></div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Josh Clark</h4>
              <h4 className='text-base text-center font-bold'>Sous Chef of Shindigs</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "kayla") {
    return (
      <div>
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/BsPLJX3.jpg" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Kayla Baumann</h4>
              <h4 className='text-base text-center font-bold'>Connection Connoisseur</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container alignItems="center" justifyContent="center">

              <Grid xs={12} sm={6} container alignItems="center" justifyContent="center">
                <div className='flex-initial bio-panel space-y-8'>
                  <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://i.imgur.com/BsPLJX3.jpg" alt="Your Image" className="w-full h-full object-cover" />
                  </div>
                  <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                    <h4 className='text-xl text-center font-bold'>Kayla Baumann</h4>
                    <h4 className='text-base text-center font-bold'>Connection Connoisseur</h4>
                  </div>
                </div>
              </Grid>

              <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={1}>
                <Box sx={{ border: '2px solid black' }} padding={4}>
                  <Typography variant="body1" sx={{ fontSize: 18 }}>
                    <p>Kayla Baumann joined the CISNT team in 2022, and has a background in case work, event planning, and community relations. She graduated from Liberty University in 2017 with a Bachelor’s in Psychology, where she discovered her passion for creating intentional human connections and giving back to her community. Kayla is passionate about CISNT’s goal to build lasting bonds with students and their families – connecting them to the right community resource and empowering them to use those supports to succeed in school and beyond. As Director of Community and Donor Engagement, she helps further CISNT’s mission through cultivating and developing relationships with donors and community members, while overseeing fundraising and marketing. In her free time, Kayla loves to spend time with her friends and family, serve at her church, read, or explore new coffee shops.</p>
                  </Typography>
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
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/Qai4nql.png" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Davis Perrone</h4>
              <h4 className='text-base text-center font-bold'>Digital Dynamo</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container alignItems="center" justifyContent="center">

              <Grid xs={12} sm={6} container alignItems="center" justifyContent="center">
                <div className='flex-initial bio-panel space-y-8'>
                  <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://i.imgur.com/Qai4nql.png" alt="Your Image" className="w-full h-full object-cover" />
                  </div>
                  <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                    <h4 className='text-xl text-center font-bold'>Davis Perrone</h4>
                    <h4 className='text-base text-center font-bold'>Digital Dynamo</h4>
                  </div>
                </div>
              </Grid>

              <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={1}>
                <Box sx={{ border: '2px solid black' }} padding={4}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
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
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/rCFOkqV.jpg" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>David Sublett</h4>
              <h4 className='text-base text-center font-bold'>N.E.R.D.</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "kassandra") {
    return (
      <div>
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/mwBdzuw.jpg" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Kassandra Nordhoff</h4>
              <h4 className='text-base text-center font-bold'>Social Media Sith Lord</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }

  if (customProp === "edwin") {
    return (
      <div>
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src="https://i.imgur.com/7Lvsys0.jpg" alt="Your Image" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>Edwin Choi</h4>
              <h4 className='text-base text-center font-bold'>Software Sovereign</h4>
            </div>
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
}