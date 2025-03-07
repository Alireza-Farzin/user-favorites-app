import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Toolbar, Typography, Box } from '@mui/material';
const pages = ['Favorites', 'Home'];

function Navbar() {
    return (
        <div className='bg-white shadow'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    my: 2,
                                    color: 'text.primary',
                                    display: 'block',
                                    '&:hover': {
                                        bgcolor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </div>
    );
}

export default Navbar;