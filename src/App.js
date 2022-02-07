import "react-responsive-carousel/lib/styles/carousel.min.css";
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import './App.css';
import Header from './components/Header';
import DownloadSection from './components/DownloadSection';
import Description from './components/Description';
import Gallery from './components/Gallery';
import repository from "./repository.json";

const useStyles = makeStyles({
      root: {
          margin: 'auto',
          marginTop: 20,
          marginBottom: 20,
          minWidth: 480,
          maxWidth: 800
      }
  });

function App() {
  const classes = useStyles();

  return (
    <div className="App">
        <Header title={"3DRepo"} />
        { repository.map(model => (
            <Paper className={classes.root} elevation={3} key={model.title}>
                <Gallery files={model.files} />
                <Description
                    title={model.title}
                    author={model.author}
                    description={model.description}
                />
                <DownloadSection files={model.files} />
            </Paper>
        ))}
    </div>
  );
}

export default App;
