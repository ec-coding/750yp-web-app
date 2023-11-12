import React from "react";
import {useEffect, useState} from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { trpc } from "../../utils/trpc";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  profile_icon: string;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const UserCard = ({ user, setUserView }: { user: User, setUserView: any }, ) => {
  return (
    <Card sx={{display:"flex", justifyContent:"space-between", flexDirection:"row"}}>
    <Button style={{height: 50, width: 30}} onClick={() => setUserView(false)}>Back</Button>
      <CardContent >
      
        {user.profile_icon == null ? <img src={"https://placehold.co/200x200"} style={{width: 200, height: 200, borderRadius:"100%", border:"1px solid black" }} /> :<img src={user.profile_icon} alt="Profile Icon" style={{width: 200, height: 200, borderRadius:"100%", border:"1px solid black" }} />}
        <CardHeader title={`${user.first_name} ${user.last_name}`} />
        <Typography variant="body1" color="textPrimary">
          Job Title: Software Engineer
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Company: Probably a Tech Company
        </Typography>
        {/* Change once other properties are created */}
        <Typography variant="body1" color="textPrimary">
          Email: {user.email}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Phone: N/A
        </Typography>
        <Typography variant="body1" color="textPrimary">
          DOB: 1/01/1969
        </Typography>
        <Typography variant="body1" color="textPrimary">
         Address: Living on the Web somewhere. 
        </Typography>
  
        <Typography variant="body1" color="textPrimary">
          Current Attendance Count: 2
        </Typography>
        </CardContent>
        <CardContent>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Present</TableCell>
            </TableRow>
          </TableHead>
          <TableRow sx={{ '&:hover': { backgroundColor: 'lightgray', cursor: 'pointer' }}}>
              <TableCell>This is still not test data from the database.</TableCell>
              <TableCell>11-02-2023</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
            <TableRow sx={{ '&:hover': { backgroundColor: 'lightgray', cursor: 'pointer' }}}>
              <TableCell>I will do this later.</TableCell>
              <TableCell>11-03-2023</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow sx={{ '&:hover': { backgroundColor: 'lightgray', cursor: 'pointer' }}}>
              <TableCell>This is test data not from the database</TableCell>
              <TableCell>11-04-2023</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
        </Table>
        </CardContent>
       
    </Card>
  )
}



export default function UserTable() {

  const [users, setUsers] = useState([] as User[]);
  const [card, setCard] = useState({} as User);
  const [userView, setUserView] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

 

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  function handleUserCard(user: any) {
    console.log(user)
    setCard(user);
    setUserView(true);
  }
  
  useEffect(() => {      
    const fetchEvent = async () => {
      console.log("fetching");
    
      try {
        const data = await fetch('http://localhost:5000/trpc/user.getAll')
        const response = await data.json()
        setUsers(response.result.data);
        } catch (error) {
            console.log('Query not returned. :(')
        }
      } 
          fetchEvent()
    }, [])  

    return (
      <>
      {!userView ? <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500,}} >
          <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First</TableCell>
                <TableCell>Last</TableCell>
                <TableCell>Email</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : users
              ).map((row) => (
                        
                    <TableRow  key={row.id} sx={{ '&:hover': { backgroundColor: 'lightgray', cursor: 'pointer' } }}>

                      <TableCell align="center" component="th" scope="row" style={{ width: 160 }}>{row.id}</TableCell>
                      <TableCell align="center">{row.first_name}</TableCell>
                      <TableCell align="left" style={{ width: 160 }}>{row.last_name}</TableCell>
                      <TableCell align="right" style={{ width: 160 }}>{row.email}</TableCell>
                      <TableCell align="right" style={{ width: 160, textDecoration: "undeerline" }}>
                        <button onClick={() => handleUserCard(row)}>View Full</button>
                      </TableCell>
                    </TableRow>
                

              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer> : <UserCard user={card} setUserView={setUserView} />}
      
    </>
      );
}
