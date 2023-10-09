import { Box, Typography } from '@mui/material';
import React from 'react'
import './Layout.scss'
import HouseIcon from '@mui/icons-material/House';
import LogoutIcon from '@mui/icons-material/Logout';
import { authLogout } from '../../redux/reducers/AuthReducer/AuthReducer'
import { useDispatch } from 'react-redux';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(authLogout())
	}

	return (
		<Box className='layout-container'>
			<Box className='side-nav-container'>
				<Box className="nav-wrapper">
					<HouseIcon />
					<Typography className='nav-text'>Dashbord</Typography>
				</Box>
				<Box className="nav-wrapper logout-cont" onClick={handleLogout}>
					<LogoutIcon />
					<Typography className='nav-text'>Logout</Typography>
				</Box>
			</Box>
			<Box className='main-container'>{children}</Box>
		</Box>
	)
}

export default Layout