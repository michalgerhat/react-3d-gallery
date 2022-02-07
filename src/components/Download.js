import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const onDownload = (file) => {
    const link = document.createElement("a");
    link.download = file;
    link.href = file;
    link.click();
  };

export default function Download({name, path}) {
    return (
        <Grid container justifyContent="space-between">
            <Grid item>
                <Typography>{name}</Typography>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    onClick={() => onDownload(path)}
                >
                    Download
                </Button>
            </Grid>
        </Grid>
    );
}