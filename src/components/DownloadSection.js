import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Download from './Download';

export default function DownloadSection({files}) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="button">Downloads</Typography>
            </AccordionSummary>
            { files.map(file => (
                file.type === "stl" &&
                    <AccordionDetails key={file.path}>
                        <Download name={file.name} path={file.path} />
                    </AccordionDetails>
            ))}
        </Accordion>
    );
}