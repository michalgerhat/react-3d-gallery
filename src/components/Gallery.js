import {Carousel} from 'react-responsive-carousel';
import ModelViewer from './ModelViewer';

function Item({file}) {
    switch(file.type) {
        case "img":
            return (
                <div key={file.path}>
                    <img src={file.path} alt=""/>
                </div>
            );
        case "video":
            return (
                <div key={file.path} style={{backgroundColor: "black", paddingBottom: 20}}>
                    <video width={740} height={480} controls>
                        <source src={file.path} type="video/mp4" />
                    </video>
                </div>
            );
        case "stl": 
            return (
                <div key={file.path}>
                    <ModelViewer name={file.name} path={file.path} />
                </div>
            );
        case "youtube":
            return (
                <div key={file.embed}>
                    <div dangerouslySetInnerHTML={{__html: file.embed}} />
                </div>
            );
        default:
            return;
    }
}

export default function Gallery({files}) {
    return (
        <Carousel showThumbs={false} showStatus={false} dynamicHeight>
            { files.map(file => (
                <Item file={file} key={JSON.stringify(file)}/>
            ))}
        </Carousel>
    );
}