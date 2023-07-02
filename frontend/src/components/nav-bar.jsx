import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';




const navItems = [];

function NavBar() {
  return <AppBar component="nav">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{ mr: 2,display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1,display: { xs: 'none',sm: 'block' } }}
      >
        Pet Classifier
      </Typography>
      <Box sx={{ display: { xs: 'none',sm: 'block' } }}>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: '#fff' }}>
            {item}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
}



export default NavBar