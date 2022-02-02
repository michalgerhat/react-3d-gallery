import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import STLViewer from 'stl-viewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel showThumbs={false} showIndicators={false}>
        <div key="slide1">
          <STLViewer model="obj/prusa_enclosure_top-corners.stl"	modelColor='#425af5' lights={[1, 1, 1]} rotationSpeeds={[0, 0.01, 0]}/>
        </div>
        <div key="slide2">
          <STLViewer model="obj/extrusion-clip_90.stl"	modelColor='#425af5' lights={[1, 1, 1]} rotationSpeeds={[0, 0.01, 0]}/>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
