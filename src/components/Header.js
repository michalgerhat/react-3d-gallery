import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header({title}) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    noWrap
                    variant="h6"
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}