import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Description({title, author, description}) {
    return (
        <Container sx={{padding: 2}}>
            <Typography variant="h5" align="left">{title}</Typography>
            <Typography align="left" variant="body2" gutterBottom>Author: {author}</Typography>
            <Typography align="left" sx={{whiteSpace: "pre-line"}}>{description}</Typography>
        </Container>
    );
}