import React, { useEffect } from "react";
import { trpc } from "@/utils/trpc";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from "@mui/material";
import { Container, Box, CardMedia, Grid, Modal, makeStyles, Typography } from '@mui/material';


const StatsTile = ({ title, value }: any) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 mt-2">{value ? value : "Error"}</p>
    </div>
  );
};

const highestAttendence = () => {
  function createData(
    image: string,
    name: string,
    attendence: number,
  ) {
    return { image, name, attendence };
  }

  const rows = [
    createData('https://placehold.co/200x200', "Test Person 1", 1),
    createData('https://placehold.co/200x200', "Test Person 1", 4),
    createData('https://placehold.co/200x200', "Test Person 1", 5),
    createData('https://placehold.co/200x200', "Test Person 1", 0),
    createData('https://placehold.co/200x200', "Test Person 1", 2),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.attendence}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function AdminHome() {

  const users = trpc.user.getAll.useQuery();
  const events = trpc.event.getAll.useQuery();
  console.log(events);


  return (
    <Grid justifyContent="center" alignItems="center">
      <Grid className="bg-sky-200 text-center my-2 py-2">
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Statistics
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={2} paddingY={5}>
        {/* <highestAttendence /> */}
        <Grid xs={12} sm={3} marginX={2} className="text-center">
          <StatsTile title="Total Users" value={users.data?.length} />
        </Grid>
        <Grid xs={12} sm={3} marginX={2} className="text-center">
          <StatsTile title="Total Events" value={events.data?.length} />
        </Grid>
        <Grid xs={12} sm={3} marginX={2} className="text-center">
          <StatsTile title="Total Attendence" value="50" />
        </Grid>
      </Grid>
    </Grid>

  );
}