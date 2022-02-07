import Typography from '@mui/material/Typography';
import STLViewer from 'stl-viewer';

function randomColor() {
    let colors = [
        "#d11141", "#00b159", "#00aedb",
        "#f37735", "#ffc425", "#eb6841",
        "#4f372d", "#00a0b0", "#e6e6ea",
        "#f6abb6", "#651e3e"
    ];
    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

export default function ModelViewer({name, path}) {
    return (
        <>
            <STLViewer
                width={800}
                height={480}
                model={path}
                modelColor={randomColor()}
                lights={[1, 1, 1]}
                rotationSpeeds={[0, 0.01, 0]}
            />
            <Typography sx={{top: 420, width: "100%", position: "absolute"}}>{name}</Typography>
        </>
    );
}