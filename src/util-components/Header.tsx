import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
import { NavLinks } from '../routes/Routers';
import styles from './../styles/styles.module.scss';
export default function Header() {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} className={styles.drawer}>
			<Typography variant="h6" className={styles.drawer_name}>
				Backbenchers
			</Typography>
			<List>
				{NavLinks.map((links, index) => (
					<NavLink
						key={index}
						to={links.to}
						style={({ isActive }) => ({
							color: isActive ? 'blue' : 'black',
							textDecorationLine: isActive ? 'underline' : 'none'
						})}
					>
						<MenuItem sx={{ whiteSpace: 'pre-line' }}>{links.name}</MenuItem>
					</NavLink>
				))}
			</List>
		</Box>
	);

	return (
		<Box>
			<AppBar component="nav">
				<Toolbar className={styles.menuIconBar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={styles.menu}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" className={styles.name}>
						Backbenchers
					</Typography>
					<Box>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>
								<NavLink to="/SignIn">Login</NavLink>
							</MenuItem>
							<MenuItem onClick={handleClose}>Log out</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
