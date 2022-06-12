import * as React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  {
    route: '/',
    text: 'Main',
  },
  {
    route: '/instructions',
    text: 'Instructions',
  },
  {
    route: '/popular-topics',
    text: 'Popular topics',
  },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'background.header',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 800,
              letterSpacing: '.1rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            #25
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={`/${page}`}>
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu> */}
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            #25
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              mr: 2,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                component={RouterLink}
                key={page.text}
                to={page.route}
                variant="text"
                sx={{
                  my: 2,
                  px: 2,
                  color: 'white',
                  fontSize: '1em',
                  fontWeight: '600',
                  display: 'block',
                  fontFamily: 'Quicksand, sans-serif',
                }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    color: '#fff',
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{
                  color: 'grey.300',
                }}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
