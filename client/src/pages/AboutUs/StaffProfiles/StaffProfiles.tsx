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

// MOVE THIS TO COMPONENTS FOLDER

export default function StaffProfiles({person}: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   
  return (
      <div>
        <Button onClick={handleOpen} style={{ color: 'inherit', textDecoration: 'none', textTransform: 'none' }}>
          <div className='flex-initial bio-panel space-y-8'>
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-white">
              <img src={person.picture} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
              <h4 className='text-xl text-center font-bold'>{person.name}</h4>
              <h4 className='text-base text-center font-bold'>{person.title}</h4>
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
                    <img src={person.picture} alt="Your Image" className="w-full h-full object-cover" />
                  </div>
                  <div className="border-2 border-solid border-gray-400 w-60 h-24 mx-auto flex flex-col justify-center items-center">
                    <h4 className='text-xl text-center font-bold'>{person.name}</h4>
                    <h4 className='text-base text-center font-bold'>{person.title}</h4>
                  </div>
                </div>
              </Grid>

              <Grid xs={12} sm={6} alignItems="center" justifyContent="center" margin={0} padding={1}>
                <Box sx={{ border: '2px solid black' }} padding={4}>
                  <Typography variant="body1" sx={{ fontSize: 18 }}>
                    <p>{person.tag}</p>
                  </Typography>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Modal>
      </div>
    );
}