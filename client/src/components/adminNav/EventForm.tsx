import { useState } from "react";
import { trpc } from "@/utils/trpc";
import { TextField, Button, Container, Typography, InputLabel, Input, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  


export default function EventForm(){

    const [name, setName] = useState("hi");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("2023-01-01");
    const [start_time, setStart] = useState("00:00");
    const [end_time, setEnd] = useState("00:00");
    const [banner, setBanner] = useState("");
    const [loading, setLoading] = useState(false);

   

    const mutation = trpc.event.create.useMutation(); // Initialize the mutation

    const handleSubmit = () => {
        const eventData = {
            name: name || '', // Use default value if name is falsy
            description: description || '', // Use default value if description is falsy
            date: date || '', // Use default value if date is falsy
            start_time: start_time || '', // Use default value if start_time is falsy
            end_time: end_time || '', // Use default value if end_time is falsy
            banner: banner || '' // Use default value if banner is falsy
        };

        console.log(eventData);

        // Trigger the mutation
        //mutation.mutate(eventData);
        //console.log(mutation.isSuccess)
    }

    return(
    <Container style={{textAlign:"center", maxHeight:"inherit"}}>
        <Typography variant="h5" component="div" gutterBottom>
            Create an Event
        </Typography>
        <FormControl style={{marginTop: "16px"}}>
            <TextField
                variant="outlined"
                fullWidth
                name="name"
                margin="normal" 
                label="Event Name" 
                placeholder="Event Name"
                />
            <TextField 
                variant="outlined"
                fullWidth
                type="date"
                name="date"
                margin="normal" 
                label="Date"
                defaultValue={date}
                onChange={(e) => setDate(e.target.value)}
                />
             
            <TextField
                label="Start Time"
                type="time"
                variant="outlined"
                fullWidth
                name="startTime"
                margin="normal"
                defaultValue={start_time}
                onChange={(e) => setStart(e.target.value)}
                />
            <TextField
                label="End Time"
                type="time"
                variant="outlined"
                fullWidth
                name="endTime"
                margin="normal"
                defaultValue={end_time}
                onChange={(e) => setEnd(e.target.value)}
                />
      
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload file
                    <VisuallyHiddenInput onChange={(e) => setBanner(e.target.value)} type="file" />
                </Button>
                <span>{banner}</span>
         
            <TextField  
            id="description"
            label="Description"
            multiline
            fullWidth
            rows={4}
            margin="normal"
            />
            {loading == false ? 
            <Button component="label" variant="contained" >
                Submit
                <VisuallyHiddenInput  type="submit" onClick={() => handleSubmit()} />
            </Button> : 
            <Button disabled variant="outlined">
                Submit
          </Button>}
        </FormControl>
      </Container>
    )
}