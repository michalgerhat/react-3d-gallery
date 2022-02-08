import {useState} from "react";
import {Carousel} from 'react-responsive-carousel';
import ModelViewer from './ModelViewer';

function Item({file, selected}) {
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
                    {selected && <ModelViewer name={file.name} path={file.path} />}
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
    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            dynamicHeight
            onChange={index => setSelectedItem(index)}
        >
            { files.map((file, index) => (
                <Item file={file} selected={index === selectedItem} key={JSON.stringify(file)}/>
            ))}
        </Carousel>
    );
}