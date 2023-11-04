import { Avatar, Box, Button, IconButton, Popover, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import './Dashboard.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { employeeList, userType } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box className="dash-container">
            <Typography className='header-text' >Dashboard</Typography>
            <Box className="filter-container">
                <Button variant="contained" className='add-btn' onClick={() => navigate('/add-employee')}>
                    <AddIcon />
                    <Typography>New</Typography>
                </Button>
            </Box>
            <Box className="list-wrapper">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S.no</TableCell>
                            <TableCell>Employee name</TableCell>
                            <TableCell>Date of joining</TableCell>
                            <TableCell>Job position</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeList.map((user: userType, index: number) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <Box className='d-flex'>
                                        <Avatar sx={{ width: 24, height: 24 }} />
                                        <Box>{user.name}</Box>
                                    </Box>
                                </TableCell>
                                <TableCell>{user.joinDate}</TableCell>
                                <TableCell>{user.position}</TableCell>
                                <TableCell>
                                    <Typography className={`status-tag ${user.status === "active" ? "active-tag" : "inactive-tag"}`} >{user.status}</Typography>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={handleClick}>
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            {open &&
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography style={{padding:"5px 10px"}}>View</Typography>
                    <Typography style={{padding:"5px 10px"}}>Edit</Typography>
                    <Typography style={{padding:"5px 10px"}}>Delete</Typography>
                </Popover>
            }
        </Box>
    )
}

export default Dashboard